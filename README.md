# Asociación Ambigú Santa Ana — Carta digital

Carta digital estática y adaptable a móvil, con una identidad visual propia en blanco, negro y amarillo. La web no necesita instalar dependencias.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive, tarjetas de producto y galerías.
- `script.js`: datos de productos, especialidades, búsqueda, filtros y editor local de fotos.
- `assets/products/`, `assets/interior/` y `assets/terrace/`: fuentes de imagen conservadas, sin sobrescribir.
- `assets/cover/source/` y `assets/cover/web/`: imagen de portada facilitada por el usuario y su derivado WebP.
- `assets/*/web/`: derivados WebP de alta calidad usados en la web.
- `assets/products/framed/`: recortes heredados que se conservan como referencia de encuadre; la carta pública ya no los carga.
- `tools/prepare_images.py`: prepara las versiones web y genera el inventario `image-audit.csv`.
- `assets/favicon.svg`: icono vectorial de la asociación.

## Actualizar la carta

Para hacer cambios que formen parte de la versión publicada, edita el array `menuItems` de `script.js` y vuelve a publicar el sitio. Las tarjetas destacadas usan los identificadores de los productos, por lo que conservan sus fotos aunque se cambie el nombre desde el editor.

Las imágenes de productos se pueden ampliar al pulsarlas. Si una foto de producto falta o no carga, su tarjeta muestra el aviso «Foto próximamente» en lugar de una imagen rota. Las categorías iniciales se definen en `menuItems`; las creadas desde el editor se guardan en el navegador.

El precio de la bollería casera aparece como «Consultar», ya que no se pudo leer en la carta original.

## Editar fotos desde la página

Pulsa la tuerca del encabezado para abrir el editor. Puedes editar nombre, descripción, precio y visibilidad de cada producto; cambiar su categoría y fotografía; restaurar, ocultar o encuadrar fotos; crear categorías y añadir productos con su foto; y ordenar la carta. También puedes cambiar la portada y las fotos de la terraza y el comedor. Las subidas conservan el original y crean una versión WebP de calidad 95 para la web; las fuentes pequeñas se amplían como máximo 3× (hasta 3840 px) y las fotos grandes mantienen su resolución. Ambas versiones se guardan en IndexedDB de ese navegador. No se sincronizan con otros dispositivos ni se publican automáticamente en GitHub Pages.

## Preparar y auditar imágenes

Las fuentes actuales de los productos son mayoritariamente de 256 px; el historial de Git tampoco contiene versiones mayores. El procesador no inventa detalle ni las convierte artificialmente a 4K: usa el original disponible, recorta únicamente el área superior indicada por los marcos antiguos, aplica un reescalado Lanczos de hasta 3× con nitidez moderada cuando la fuente es pequeña y genera WebP con calidad 95. Las fuentes y los recortes antiguos se conservan.

Para regenerar los derivados y el inventario de todas las imágenes:

```powershell
python -m pip install -r tools/requirements-image-processing.txt
python tools/prepare_images.py
```

`image-audit.csv` registra ruta, función, origen, dimensiones, formato, tamaño, compresión y uso de cada imagen. La carta pública carga los derivados de `assets/products/web/`, `assets/interior/web/`, `assets/terrace/web/` y `assets/cover/web/`.

## Vista previa

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor web estático.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html`, `styles.css`, `script.js` y toda la carpeta `assets`.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/root`, y pulsa **Save**.
3. GitHub te mostrará la dirección pública de la página en esa misma sección cuando termine de publicarla.
