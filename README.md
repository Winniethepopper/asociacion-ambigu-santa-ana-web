# Asociación Ambigu Santa Ana — Carta digital

Carta digital estática y adaptable a móvil, con una propuesta visual monocroma. No necesita instalar dependencias.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive.
- `script.js`: productos, búsqueda y filtros por categoría.
- `assets/products/`: fotografías de los productos.

## Actualizar la carta

Edita el array `menuItems` de `script.js`. Cada producto incluye nombre, categoría, precio, descripción y nombre del archivo de foto. Para cambiar una fotografía, sustituye el archivo correspondiente dentro de `assets/products/`.

El precio de la bollería casera aparece como «Consultar», ya que no se pudo leer en la carta original.

## Editar fotos desde la página

Pulsa la tuerca del encabezado para abrir el editor. Puedes cambiar la foto de portada o la de cualquiera de los 26 productos, ajustar zoom y encuadre con los controles y restaurar la imagen original. Las fotos y ajustes se guardan automáticamente en el almacenamiento local de ese navegador. No se sincronizan con otros dispositivos ni modifican los archivos publicados.

## Vista previa

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor web estático.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html`, `styles.css`, `script.js` y toda la carpeta `assets`.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/root`, y pulsa **Save**.
3. GitHub te mostrará la dirección pública de la página en esa misma sección cuando termine de publicarla.
