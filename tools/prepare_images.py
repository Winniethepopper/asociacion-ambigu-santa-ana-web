#!/usr/bin/env python3
"""Build high-quality WebP derivatives and an inventory without changing sources."""

from __future__ import annotations

import csv
import re
from collections import defaultdict
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
PRODUCTS = ASSETS / "products"
FRAMED = PRODUCTS / "framed"
WEB_QUALITY = 95
MIN_SHORT_SIDE = 768
MAX_UPSCALE = 3
MAX_LONG_SIDE = 3840
IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}
PRODUCT_RE = re.compile(
    r"\{\s*name:\s*'([^']+)',\s*category:\s*'([^']+)',[^}]*?image:\s*'([^']+)'"
)
SPACE_RE = re.compile(
    r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*category:\s*'([^']+)',\s*src:\s*'([^']+)'"
)


def image_files(folder: Path) -> list[Path]:
    return sorted(
        path for path in folder.iterdir()
        if path.is_file() and path.suffix.lower() in IMAGE_SUFFIXES
    )


def source_rank(path: Path) -> tuple[int, int, int, int]:
    with Image.open(path) as image:
        width, height = ImageOps.exif_transpose(image).size
        image_format = image.format
        is_lossless = image_format == "PNG"
        suffix_matches_format = {
            "JPEG": path.suffix.lower() in {".jpg", ".jpeg"},
            "PNG": path.suffix.lower() == ".png",
            "WEBP": path.suffix.lower() == ".webp",
        }.get(image_format, True)
    return width * height, int(is_lossless), int(suffix_matches_format), path.stat().st_size


def preferred_sources(folder: Path) -> dict[str, Path]:
    grouped: dict[str, list[Path]] = defaultdict(list)
    for path in image_files(folder):
        grouped[path.stem.casefold()].append(path)
    return {
        stem: max(candidates, key=source_rank)
        for stem, candidates in grouped.items()
    }


def product_crop(source: Image.Image, source_path: Path) -> Image.Image:
    references = sorted(FRAMED.glob(f"{source_path.stem}.*"))
    if not references:
        return source

    with Image.open(references[0]) as reference:
        ref_width, ref_height = reference.size
    source_ratio = source.width / source.height
    ref_ratio = ref_width / ref_height
    if ref_width == source.width and ref_height < source.height and ref_ratio > source_ratio:
        return source.crop((0, 0, source.width, ref_height))
    return source


def prepare_image(source_path: Path, destination: Path, crop_product: bool = False) -> None:
    with Image.open(source_path) as opened:
        image = ImageOps.exif_transpose(opened)
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        if crop_product:
            image = product_crop(image, source_path)

        longest = max(image.size)
        shortest = min(image.size)
        scale = 1.0
        if shortest < MIN_SHORT_SIDE:
            scale = min(MAX_UPSCALE, MIN_SHORT_SIDE / shortest)
        if longest * scale > MAX_LONG_SIDE:
            scale = MAX_LONG_SIDE / longest

        if scale != 1.0:
            dimensions = (round(image.width * scale), round(image.height * scale))
            image = image.resize(dimensions, Image.Resampling.LANCZOS)
            if scale > 1:
                image = image.filter(ImageFilter.UnsharpMask(radius=0.7, percent=55, threshold=3))

        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=WEB_QUALITY, method=6)


def project_mappings() -> tuple[dict[str, list[str]], dict[str, str], dict[str, list[str]]]:
    script = (ROOT / "script.js").read_text(encoding="utf-8")
    web_usage: dict[str, list[str]] = defaultdict(list)
    web_sources: dict[str, str] = {}
    source_usage: dict[str, list[str]] = defaultdict(list)
    product_sources = preferred_sources(PRODUCTS)

    for name, category, image_name in PRODUCT_RE.findall(script):
        stem = Path(image_name).stem
        web_path = f"assets/products/web/{stem}.webp"
        source = product_sources.get(stem.casefold())
        web_usage[web_path].append(f"{name} ({category})")
        if source:
            web_sources[web_path] = source.relative_to(ROOT).as_posix()
            source_usage[source.relative_to(ROOT).as_posix()].append(name)

    hero_match = re.search(r"const heroImage = '([^']+)'", script)
    if hero_match:
        hero_path = hero_match.group(1)
        web_usage[hero_path].append("Fotografía de portada")
        source = product_sources.get(Path(hero_path).stem.casefold())
        if not source and "cover" in Path(hero_path).parts:
            source_dir = ROOT / Path(hero_path).parent.parent / "source"
            candidates = sorted(source_dir.glob(f"{Path(hero_path).stem}.*"))
            source = next((path for path in candidates if path.suffix.lower() in IMAGE_SUFFIXES), None)
        if source:
            web_sources[hero_path] = source.relative_to(ROOT).as_posix()
            source_usage[source.relative_to(ROOT).as_posix()].append("Fotografía de portada")

    for _photo_id, title, _category, src in SPACE_RE.findall(script):
        web_path = Path(src)
        source_path = web_path.parent.parent / f"{web_path.stem}.*"
        candidates = sorted(ROOT.glob(source_path.as_posix()))
        source = next((path for path in candidates if path.suffix.lower() in IMAGE_SUFFIXES), None)
        web_usage[web_path.as_posix()].append(title)
        if source:
            web_sources[web_path.as_posix()] = source.relative_to(ROOT).as_posix()
            source_usage[web_sources[web_path.as_posix()]].append(title)
    return web_usage, web_sources, source_usage


def build_audit(
    web_usage: dict[str, list[str]],
    web_sources: dict[str, str],
    source_usage: dict[str, list[str]],
) -> int:
    audit_path = ROOT / "image-audit.csv"
    product_sources = preferred_sources(PRODUCTS)
    count = 0

    with audit_path.open("w", newline="", encoding="utf-8-sig") as file:
        writer = csv.writer(file)
        writer.writerow([
            "path", "role", "source_path", "width_px", "height_px",
            "format", "size_bytes", "encoding", "used_by",
        ])
        for path in sorted(ASSETS.rglob("*")):
            if not path.is_file():
                continue
            try:
                with Image.open(path) as image:
                    width, height = ImageOps.exif_transpose(image).size
                    image_format = image.format or path.suffix.lstrip(".").upper()
            except Exception:
                continue

            relative = path.relative_to(ROOT).as_posix()
            parts = path.parts
            if "web" in parts:
                role = "web derivative"
                source_path = web_sources.get(relative, "")
                if not source_path and path.parent == PRODUCTS / "web":
                    source = product_sources.get(path.stem.casefold())
                    source_path = source.relative_to(ROOT).as_posix() if source else ""
                encoding = f"WebP lossy, quality {WEB_QUALITY}; original preserved"
                usage = ", ".join(web_usage.get(relative, [])) or "Not used by the current page"
            elif "framed" in parts:
                role = "legacy crop (preserved)"
                candidates = product_sources.get(path.stem.casefold())
                source_path = candidates.relative_to(ROOT).as_posix() if candidates else ""
                encoding = f"{image_format}; prior encoding quality unknown"
                usage = "Crop reference only; not used by public page"
            else:
                role = "source (preserved)"
                source_path = ""
                encoding = (
                    "JPEG lossy; source quality unknown" if image_format == "JPEG"
                    else "WebP; source quality unknown" if image_format == "WEBP"
                    else f"{image_format}; no lossy processing inferred"
                )
                usage = ", ".join(sorted(set(source_usage.get(relative, []))))
                if not usage and path.parent.name not in {"web", "framed"}:
                    usage = "Not directly referenced by the current page"

            writer.writerow([
                relative, role, source_path, width, height, image_format,
                path.stat().st_size, encoding, usage,
            ])
            count += 1
    return count


def main() -> None:
    product_sources = preferred_sources(PRODUCTS)
    processed = 0
    for source in product_sources.values():
        destination = PRODUCTS / "web" / f"{source.stem}.webp"
        prepare_image(source, destination, crop_product=True)
        processed += 1

    for folder in (ASSETS / "interior", ASSETS / "terrace"):
        for source in image_files(folder):
            prepare_image(source, folder / "web" / f"{source.stem}.webp")
            processed += 1

    cover_sources = ASSETS / "cover" / "source"
    for source in image_files(cover_sources):
        prepare_image(source, ASSETS / "cover" / "web" / f"{source.stem}.webp")
        processed += 1

    web_usage, web_sources, source_usage = project_mappings()
    audited = build_audit(web_usage, web_sources, source_usage)
    print(f"Generated {processed} WebP derivatives from preserved source files.")
    print(f"Quality: {WEB_QUALITY}; low-resolution upscale capped at {MAX_UPSCALE}x.")
    print(f"Audit: image-audit.csv ({audited} image files)")


if __name__ == "__main__":
    main()
