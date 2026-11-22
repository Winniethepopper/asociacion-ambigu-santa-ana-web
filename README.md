# Asociación Ambigu Santa Ana — Carta digital

Carta digital estática y adaptable a móvil, con una propuesta visual monocroma. No necesita instalar dependencias.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive.
- `script.js`: productos, búsqueda y filtros por categoría.
- `assets/products/`: fotografías de los productos.
- `assets/products/framed/`: versiones recortadas para que las tarjetas no muestren los rótulos ni fragmentos de otras fotos. Los archivos originales se conservan en `assets/products/`.

## Actualizar la carta

Edita el array `menuItems` de `script.js` para cambiar nombres, categorías, precios o descripciones. Para reemplazar fotos fácilmente, usa la tuerca de la página; si las cambias manualmente, actualiza el archivo de `displayImage` en `assets/products/framed/`.

El precio de la bollería casera aparece como «Consultar», ya que no se pudo leer en la carta original.

## Editar fotos desde la página

Pulsa la tuerca del encabezado para abrir el editor. Puedes cambiar la portada, las fotos de los 26 productos y las de la terraza y el comedor; ajustar zoom y encuadre; eliminar una imagen de la vista, restaurarla o sustituirla por otra. Las fotos y ajustes se guardan automáticamente en el almacenamiento local de ese navegador. No se sincronizan con otros dispositivos ni modifican los archivos publicados.

## Vista previa

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor web estático.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html`, `styles.css`, `script.js` y toda la carpeta `assets`.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/root`, y pulsa **Save**.
3. GitHub te mostrará la dirección pública de la página en esa misma sección cuando termine de publicarla.
