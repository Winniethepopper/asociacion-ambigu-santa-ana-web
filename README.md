# Asociación Ambigú Santa Ana — Carta digital

Carta digital estática y adaptable a móvil, con una identidad visual propia en tonos cálidos. No necesita instalar dependencias.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive, tarjetas de producto y galerías.
- `script.js`: datos de productos, especialidades, búsqueda, filtros y editor local de fotos.
- `assets/products/`: fotografías de los productos.
- `assets/products/framed/`: versiones recortadas para que las tarjetas no muestren los rótulos ni fragmentos de otras fotos. También contiene una versión WebP optimizada del bocadillo de jamón serrano para la portada y sus tarjetas. Los archivos originales se conservan en `assets/products/`.
- `assets/favicon.svg`: icono vectorial de la asociación.

## Actualizar la carta

Edita el array `menuItems` de `script.js` para cambiar nombres, categorías, precios o descripciones. Las tarjetas destacadas se eligen por nombre desde los mismos datos, sin duplicar precios. Para reemplazar fotos fácilmente, usa la tuerca de la página; si las cambias manualmente, actualiza la ruta de `image` y el archivo correspondiente de `assets/products/framed/`.

Las imágenes de productos se pueden ampliar al pulsarlas. Si una foto de producto falta o no carga, su tarjeta muestra el aviso «Foto próximamente» en lugar de una imagen rota. Las categorías iniciales se definen en `menuItems`; las creadas desde el editor se guardan en el navegador.

El precio de la bollería casera aparece como «Consultar», ya que no se pudo leer en la carta original.

## Editar fotos desde la página

Pulsa la tuerca del encabezado para abrir el editor. Puedes cambiar la portada, las fotos de los 26 productos y las de la terraza y el comedor; ajustar zoom y encuadre; eliminar una imagen de la vista, restaurarla o sustituirla por otra. En las fotos de la carta también puedes filtrar por categoría, crear y renombrar categorías, cambiar productos de categoría y ordenar las fotos con las flechas. Las fotos, categorías y el orden se guardan automáticamente en ese navegador; no se sincronizan con otros dispositivos ni modifican los archivos publicados.

## Vista previa

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor web estático.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html`, `styles.css`, `script.js` y toda la carpeta `assets`.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/root`, y pulsa **Save**.
3. GitHub te mostrará la dirección pública de la página en esa misma sección cuando termine de publicarla.
