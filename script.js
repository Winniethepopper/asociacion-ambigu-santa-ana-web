const menuItems = [
  { name: 'Aceite y tomate', category: 'Desayunos', price: 1.5, desc: 'Pan tostado con aceite y tomate.', image: 'tostada-aceite-tomate.jpg' },
  { name: 'Mantequilla', category: 'Desayunos', price: 1.5, desc: 'Pan tostado con mantequilla.', image: 'tostada-mantequilla.jpg' },
  { name: 'Mantequilla y mermelada', category: 'Desayunos', price: 1.5, desc: 'Pan tostado con mantequilla y mermelada.', image: 'tostada-mermelada.jpg' },
  { name: 'Sobrasada', category: 'Desayunos', price: 1.5, desc: 'Pan tostado con sobrasada.', image: 'tostada-sobrasada.jpg' },
  { name: 'Paté', category: 'Desayunos', price: 1.5, desc: 'Pan tostado con paté.', image: 'tostada-pate.jpg' },
  { name: 'Gratinada de jamón serrano y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con jamón serrano y queso.', image: 'tostada-jamon-serrano-queso.jpg' },
  { name: 'Gratinada de jamón de York y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con jamón de York y queso.', image: 'tostada-york-queso.jpg' },
  { name: 'Gratinada de pechuga de pavo y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con pechuga de pavo y queso.', image: 'tostada-pechuga-pavo-queso.jpg' },
  { name: 'Gratinada de sobrasada y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con sobrasada y queso.', image: 'tostada-sobrasada-queso.jpg' },
  { name: 'Gratinada de paté y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con paté y queso.', image: 'tostada-pate-queso.jpg' },
  { name: 'Gratinada de atún y queso', category: 'Desayunos', price: 2, desc: 'Tostada gratinada con atún y queso.', image: 'tostada-atun-queso.jpg' },
  { name: 'Jamón serrano', category: 'Bocadillos', price: 3.5, desc: 'Bocadillo de jamón serrano.', image: 'bocadillo-jamon-serrano.png' },
  { name: 'Jamón de York', category: 'Bocadillos', price: 3.5, desc: 'Bocadillo de jamón de York.', image: 'bocadillo-york.jpg' },
  { name: 'Pechuga de pavo', category: 'Bocadillos', price: 3.5, desc: 'Bocadillo de pechuga de pavo.', image: 'bocadillo-pavo.jpg' },
  { name: 'Queso', category: 'Bocadillos', price: 3.5, desc: 'Bocadillo de queso.', image: 'bocadillo-queso.jpg' },
  { name: 'Atún', category: 'Bocadillos', price: 3.5, desc: 'Bocadillo de atún.', image: 'bocadillo-atun.jpg' },
  { name: 'Caliente de beicon', category: 'Bocadillos', price: 4.5, desc: 'Bocadillo caliente de beicon. Suplemento de beicon incluido.', image: 'bocadillo-beicon.jpg' },
  { name: 'Caliente de lomo adobado', category: 'Bocadillos', price: 4, desc: 'Bocadillo caliente de lomo adobado.', image: 'bocadillo-lomo-adobado.jpg' },
  { name: 'Caliente de tortilla de patatas', category: 'Bocadillos', price: 4, desc: 'Bocadillo caliente de tortilla de patatas.', image: 'bocadillo-tortilla-patatas.jpg' },
  { name: 'Caliente de chistorra', category: 'Bocadillos', price: 4, desc: 'Bocadillo caliente de chistorra.', image: 'bocadillo-chistorra.jpg' },
  { name: 'Sándwich mixto', category: 'Sándwiches', price: 3, desc: 'Sándwich mixto.', image: 'sandwich-mixto.jpg' },
  { name: 'Sándwich vegetal', category: 'Sándwiches', price: 3, desc: 'Lechuga, tomate, queso, mayonesa y atún.', image: 'sandwich-vegetal.jpg' },
  { name: 'Gofre', category: 'Dulces', price: 3, desc: 'Gofre.', image: 'gofre.jpg' },
  { name: 'Crepe', category: 'Dulces', price: 3, desc: 'Crepe.', image: 'crepe.jpg' },
  { name: 'Bollería casera', category: 'Dulces', price: null, desc: 'Pregunta por la variedad y el precio del día.', image: 'croissant.jpg' },
  { name: 'Zumo natural', category: 'Bebidas', price: 2.5, desc: 'Zumo natural.', image: 'zumo-natural.jpg' }
].map(item => ({
  ...item,
  displayImage: item.image === 'bocadillo-jamon-serrano.png' ? item.image : `framed/${item.image}?v=2`
}));

const spacePhotos = [
  { id: 'terraza-pizarra', title: 'Terraza · Pizarra', category: 'Terraza', src: 'assets/terrace/terraza-pizarra.jpg', x: 50, y: 61 },
  { id: 'terraza-mesas', title: 'Terraza · Mesas', category: 'Terraza', src: 'assets/terrace/terraza-mesas.jpg', x: 43, y: 50 },
  { id: 'terraza-vista', title: 'Terraza · Vista general', category: 'Terraza', src: 'assets/terrace/terraza-vista.jpg', x: 50, y: 63 },
  { id: 'comedor-barra', title: 'Comedor · Barra', category: 'Comedor', src: 'assets/interior/comedor-barra.jpg', x: 50, y: 50 },
  { id: 'comedor-mesas', title: 'Comedor · Mesas', category: 'Comedor', src: 'assets/interior/comedor-mesas.jpg', x: 50, y: 50 },
  { id: 'comedor-salon', title: 'Comedor · Salón', category: 'Comedor', src: 'assets/interior/comedor-salon.jpg', x: 50, y: 50 },
  { id: 'comedor-pizarra', title: 'Comedor · Pizarra', category: 'Comedor', src: 'assets/interior/comedor-pizarra.jpg', x: 50, y: 25 }
];

const menuGrid = document.getElementById('menuGrid');
const categoryNav = document.getElementById('categoryNav');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const resultsCount = document.getElementById('resultsCount');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const settingsButton = document.getElementById('settingsButton');
const photoEditor = document.getElementById('photoEditor');
const editorBackdrop = document.getElementById('editorBackdrop');
const editorStatus = document.getElementById('editorStatus');
const heroPhoto = document.getElementById('heroPhoto');
const heroImage = 'assets/products/bocadillo-jamon-serrano.png';
const imageDatabaseName = 'santa-ana-photo-editor';
const imageStoreName = 'photo-edits';

let activeCategory = 'Todas';
let imageDatabasePromise;
let photoEdits = new Map();
let editorStorageError = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
}

function categories() {
  return ['Todas', ...new Set(menuItems.map(item => item.category))];
}

function renderCategories() {
  categoryNav.innerHTML = categories().map(category => `
    <button class="category-btn${category === activeCategory ? ' active' : ''}"
      type="button" data-category="${escapeHtml(category)}" role="tab"
      aria-selected="${category === activeCategory}">${escapeHtml(category)}</button>
  `).join('');

  categoryNav.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderCards();
    });
  });
}

function filteredItems() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  return menuItems.filter(item => {
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    const text = `${item.name} ${item.category} ${item.desc}`.toLocaleLowerCase('es');
    return matchesCategory && (!query || text.includes(query));
  });
}

function renderCards() {
  const items = filteredItems();
  emptyState.hidden = items.length > 0;
  resultsCount.textContent = `${items.length} ${items.length === 1 ? 'opción' : 'opciones'}`;
  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card">
      <div class="card-media">
        <img src="assets/products/${escapeHtml(item.displayImage)}" alt="${escapeHtml(item.name)}" loading="lazy" data-photo-id="${escapeHtml(item.image)}">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${escapeHtml(item.category)}</span>
          <span class="price">${item.price === null ? 'Consultar' : euro.format(item.price)}</span>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    </article>
  `).join('');
  applyPhotoEdits();
}

function getPhotoEdit(id) {
  const savedEdit = photoEdits.get(id);
  if (savedEdit) return savedEdit;
  const spacePhoto = spacePhotos.find(photo => photo.id === id);
  return { id, src: '', zoom: 1, x: spacePhoto ? spacePhoto.x : 50, y: spacePhoto ? spacePhoto.y : 50 };
}

function getOriginalImage(id) {
  if (id === 'hero') return heroImage;
  const item = menuItems.find(product => product.image === id);
  if (item) return `assets/products/${item.displayImage}`;
  const spacePhoto = spacePhotos.find(photo => photo.id === id);
  return spacePhoto ? spacePhoto.src : '';
}

function updatePhotoView(id) {
  const edit = getPhotoEdit(id);
  const src = edit.src || getOriginalImage(id);

  if (id === 'hero') {
    heroPhoto.style.backgroundImage = `url("${src}")`;
    heroPhoto.style.backgroundPosition = `${edit.x}% ${edit.y}%`;
    heroPhoto.style.transform = `scale(${edit.zoom})`;
  } else {
    document.querySelectorAll('img[data-photo-id]').forEach(image => {
      if (image.dataset.photoId !== id) return;
      image.src = src;
      image.style.objectPosition = `${edit.x}% ${edit.y}%`;
      image.style.transform = `scale(${edit.zoom})`;
    });
  }

  document.querySelectorAll('img[data-preview-photo]').forEach(image => {
    if (image.dataset.previewPhoto !== id) return;
    image.src = src;
    image.style.objectPosition = `${edit.x}% ${edit.y}%`;
    image.style.transform = `scale(${edit.zoom})`;
  });
}

function applyPhotoEdits() {
  updatePhotoView('hero');
  menuItems.forEach(item => updatePhotoView(item.image));
  spacePhotos.forEach(photo => updatePhotoView(photo.id));
}

function openImageDatabase() {
  if (!('indexedDB' in window)) {
    return Promise.reject(new Error('Este navegador no permite guardar las fotografías editadas.'));
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(imageDatabaseName, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(imageStoreName)) {
        database.createObjectStore(imageStoreName, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('No se pudo abrir el almacenamiento de fotografías.'));
    request.onblocked = () => reject(new Error('Cierra otras pestañas de esta carta y vuelve a intentarlo.'));
  });
}

function getImageDatabase() {
  if (!imageDatabasePromise) {
    imageDatabasePromise = openImageDatabase().catch(error => {
      imageDatabasePromise = null;
      throw error;
    });
  }
  return imageDatabasePromise;
}

async function loadPhotoEdits() {
  const database = await getImageDatabase();
  const records = await new Promise((resolve, reject) => {
    const transaction = database.transaction(imageStoreName, 'readonly');
    const request = transaction.objectStore(imageStoreName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('No se pudieron leer las fotografías guardadas.'));
    transaction.onabort = () => reject(transaction.error || new Error('Se interrumpió la lectura de las fotografías.'));
  });
  records.forEach(record => {
    if (!photoEdits.has(record.id)) photoEdits.set(record.id, record);
  });
}

async function savePhotoEdit(id) {
  const database = await getImageDatabase();
  const transaction = database.transaction(imageStoreName, 'readwrite');
  transaction.objectStore(imageStoreName).put({ ...getPhotoEdit(id), id });
  await new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error('No se pudieron guardar los cambios.'));
    transaction.onabort = () => reject(transaction.error || new Error('Se interrumpió el guardado.'));
  });
}

async function deletePhotoEdit(id) {
  const database = await getImageDatabase();
  const transaction = database.transaction(imageStoreName, 'readwrite');
  transaction.objectStore(imageStoreName).delete(id);
  await new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error('No se pudo restaurar la fotografía.'));
    transaction.onabort = () => reject(transaction.error || new Error('Se interrumpió la restauración.'));
  });
}

function imageDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error || new Error('No se pudo leer la imagen.'));
    reader.readAsDataURL(file);
  });
}

function setEditorStatus(message, isError = false) {
  editorStatus.textContent = message;
  editorStatus.classList.toggle('error', isError);
}

function photoEditorCard(id, title, subtitle) {
  const edit = getPhotoEdit(id);
  const src = edit.src || getOriginalImage(id);
  return `
    <article class="photo-editor-card" data-editor-photo="${escapeHtml(id)}">
      <div class="editor-photo-preview">
        <img src="${escapeHtml(src)}" alt="" data-preview-photo="${escapeHtml(id)}">
      </div>
      <div class="editor-photo-details">
        <div class="editor-photo-heading">
          <div><h4>${escapeHtml(title)}</h4><p>${escapeHtml(subtitle)}</p></div>
          <button type="button" class="restore-photo" data-restore-photo="${escapeHtml(id)}">Restaurar</button>
        </div>
        <label class="upload-photo">
          <span>Cambiar fotografía</span>
          <input type="file" accept="image/*" data-upload-photo="${escapeHtml(id)}">
        </label>
        <div class="photo-adjustments">
          ${photoRange(id, 'zoom', 'Zoom', edit.zoom, 1, 2.5, 0.05, `${edit.zoom.toFixed(2)}×`)}
          ${photoRange(id, 'x', 'Horizontal', edit.x, 0, 100, 1, `${edit.x}%`)}
          ${photoRange(id, 'y', 'Vertical', edit.y, 0, 100, 1, `${edit.y}%`)}
        </div>
      </div>
    </article>
  `;
}

function photoRange(id, field, label, value, min, max, step, formattedValue) {
  return `
    <label class="photo-range">
      <span>${label}<output data-range-output="${field}">${formattedValue}</output></span>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${value}"
        data-photo-id="${escapeHtml(id)}" data-photo-field="${field}" aria-label="${label}">
    </label>
  `;
}

function renderPhotoEditor() {
  document.getElementById('heroPhotoEditor').innerHTML = photoEditorCard('hero', 'Portada', 'Imagen principal de la página.');
  document.getElementById('productPhotoEditor').innerHTML = menuItems.map(item =>
    photoEditorCard(item.image, item.name, `${item.category} · ${item.price === null ? 'Consultar' : euro.format(item.price)}`)
  ).join('');
  document.getElementById('spacePhotoEditor').innerHTML = spacePhotos.map(photo =>
    photoEditorCard(photo.id, photo.title, photo.category)
  ).join('');
}

function formatRange(field, value) {
  return field === 'zoom' ? `${Number(value).toFixed(2)}×` : `${value}%`;
}

function updatePhotoEditorRange(input) {
  const id = input.dataset.photoId;
  const field = input.dataset.photoField;
  const edit = { ...getPhotoEdit(id), [field]: Number(input.value) };
  photoEdits.set(id, edit);
  input.closest('.photo-range').querySelector('output').textContent = formatRange(field, input.value);
  updatePhotoView(id);
  setEditorStatus('Ajustes sin guardar…');
}

function showPhotoEditor() {
  renderPhotoEditor();
  photoEditor.classList.add('open');
  editorBackdrop.hidden = false;
  requestAnimationFrame(() => editorBackdrop.classList.add('visible'));
  photoEditor.setAttribute('aria-hidden', 'false');
  settingsButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('editor-open');
  if (editorStorageError) {
    setEditorStatus(`No se pudo acceder al almacenamiento: ${editorStorageError.message}`, true);
  } else {
    setEditorStatus('Las fotos y ajustes se guardan automáticamente en este navegador.');
  }
  document.getElementById('closeEditor').focus();
}

function hidePhotoEditor(returnFocus = true) {
  photoEditor.classList.remove('open');
  editorBackdrop.classList.remove('visible');
  photoEditor.setAttribute('aria-hidden', 'true');
  settingsButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('editor-open');
  window.setTimeout(() => { editorBackdrop.hidden = true; }, 220);
  if (returnFocus) settingsButton.focus();
}

async function handlePhotoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const id = input.dataset.uploadPhoto;
  if (!file.type.startsWith('image/')) {
    setEditorStatus('Elige un archivo de imagen.', true);
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    setEditorStatus('La imagen debe ocupar menos de 10 MB.', true);
    return;
  }

  try {
    const edit = { ...getPhotoEdit(id), src: await imageDataUrl(file) };
    photoEdits.set(id, edit);
    updatePhotoView(id);
    await savePhotoEdit(id);
    renderPhotoEditor();
    setEditorStatus('Fotografía guardada. Puedes seguir ajustando el encuadre.');
  } catch (error) {
    setEditorStatus(`No se pudo guardar la fotografía: ${error.message}`, true);
  }
}

async function restorePhoto(id) {
  try {
    await deletePhotoEdit(id);
    photoEdits.delete(id);
    updatePhotoView(id);
    renderPhotoEditor();
    setEditorStatus('Fotografía original restaurada.');
  } catch (error) {
    setEditorStatus(`No se pudo restaurar la fotografía: ${error.message}`, true);
  }
}

searchInput.addEventListener('input', renderCards);
menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Abrir menú');
}));
document.getElementById('year').textContent = new Date().getFullYear();

settingsButton.addEventListener('click', showPhotoEditor);
document.getElementById('closeEditor').addEventListener('click', () => hidePhotoEditor());
document.getElementById('closeEditorFooter').addEventListener('click', () => hidePhotoEditor());
editorBackdrop.addEventListener('click', () => hidePhotoEditor());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && photoEditor.classList.contains('open')) hidePhotoEditor();
});
photoEditor.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = [...photoEditor.querySelectorAll('button:not([disabled]), input:not([disabled])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
photoEditor.addEventListener('input', event => {
  if (event.target.matches('input[type="range"][data-photo-field]')) updatePhotoEditorRange(event.target);
});
photoEditor.addEventListener('change', async event => {
  if (event.target.matches('input[type="file"][data-upload-photo]')) {
    await handlePhotoUpload(event.target);
  } else if (event.target.matches('input[type="range"][data-photo-field]')) {
    try {
      await savePhotoEdit(event.target.dataset.photoId);
      setEditorStatus('Ajustes guardados.');
    } catch (error) {
      setEditorStatus(`No se pudieron guardar los ajustes: ${error.message}`, true);
    }
  }
});
photoEditor.addEventListener('click', async event => {
  const button = event.target.closest('[data-restore-photo]');
  if (button) await restorePhoto(button.dataset.restorePhoto);
});

renderCategories();
renderCards();
renderPhotoEditor();
loadPhotoEdits()
  .then(() => {
    applyPhotoEdits();
    renderPhotoEditor();
  })
  .catch(error => {
    editorStorageError = error;
  });
