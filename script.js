const menuItems = [
  { name: 'Aceite y tomate', category: 'Tostadas', price: 1.5, desc: 'Pan tostado con aceite y tomate.', image: 'tostada-aceite-tomate.jpg' },
  { name: 'Mantequilla', category: 'Tostadas', price: 1.5, desc: 'Pan tostado con mantequilla.', image: 'tostada-mantequilla.jpg' },
  { name: 'Mantequilla y mermelada', category: 'Tostadas', price: 1.5, desc: 'Pan tostado con mantequilla y mermelada.', image: 'tostada-mermelada.jpg' },
  { name: 'Sobrasada', category: 'Tostadas', price: 1.5, desc: 'Pan tostado con sobrasada.', image: 'tostada-sobrasada.jpg' },
  { name: 'Paté', category: 'Tostadas', price: 1.5, desc: 'Pan tostado con paté.', image: 'tostada-pate.jpg' },
  { name: 'Gratinada de jamón serrano y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con jamón serrano y queso.', image: 'tostada-jamon-serrano-queso.jpg' },
  { name: 'Gratinada de jamón de York y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con jamón de York y queso.', image: 'tostada-york-queso.jpg' },
  { name: 'Gratinada de pechuga de pavo y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con pechuga de pavo y queso.', image: 'tostada-pechuga-pavo-queso.jpg' },
  { name: 'Gratinada de sobrasada y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con sobrasada y queso.', image: 'tostada-sobrasada-queso.jpg' },
  { name: 'Gratinada de paté y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con paté y queso.', image: 'tostada-pate-queso.jpg' },
  { name: 'Gratinada de atún y queso', category: 'Tostadas', price: 2, desc: 'Tostada gratinada con atún y queso.', image: 'tostada-atun-queso.jpg' },
  { name: 'Bocadillo de jamón de pata', category: 'Bocadillos fríos', price: 5, desc: 'Bocadillo de jamón de pata.', image: 'bocadillo-jamon-serrano.png' },
  { name: 'Jamón de York', category: 'Bocadillos fríos', price: 3.5, desc: 'Bocadillo de jamón de York.', image: 'bocadillo-york.jpg' },
  { name: 'Pechuga de pavo', category: 'Bocadillos fríos', price: 3.5, desc: 'Bocadillo de pechuga de pavo.', image: 'bocadillo-pavo.jpg' },
  { name: 'Queso', category: 'Bocadillos fríos', price: 3.5, desc: 'Bocadillo de queso.', image: 'bocadillo-queso.jpg' },
  { name: 'Atún', category: 'Bocadillos fríos', price: 3.5, desc: 'Bocadillo de atún.', image: 'bocadillo-atun.jpg' },
  { name: 'Caliente de beicon', category: 'Bocadillos calientes', price: 4.5, desc: 'Bocadillo caliente de beicon. Suplemento de beicon incluido.', image: 'bocadillo-beicon.jpg' },
  { name: 'Caliente de lomo adobado', category: 'Bocadillos calientes', price: 4, desc: 'Bocadillo caliente de lomo adobado.', image: 'bocadillo-lomo-adobado.jpg' },
  { name: 'Caliente de tortilla de patatas', category: 'Bocadillos calientes', price: 4, desc: 'Bocadillo caliente de tortilla de patatas.', image: 'bocadillo-tortilla-patatas.jpg' },
  { name: 'Caliente de chistorra', category: 'Bocadillos calientes', price: 4, desc: 'Bocadillo caliente de chistorra.', image: 'bocadillo-chistorra.jpg' },
  { name: 'Sándwich mixto', category: 'Sándwiches', price: 3, desc: 'Sándwich mixto.', image: 'sandwich-mixto.jpg' },
  { name: 'Sándwich vegetal', category: 'Sándwiches', price: 3, desc: 'Lechuga, tomate, queso, mayonesa y atún.', image: 'sandwich-vegetal.jpg' },
  { name: 'Gofre', category: 'Dulces', price: 3.5, desc: 'Gofre.', image: 'gofre.jpg' },
  { name: 'Crepe', category: 'Dulces', price: 3, desc: 'Crepe.', image: 'crepe.jpg' },
  { name: 'Bollería casera', category: 'Dulces', price: null, desc: 'Pregunta por la variedad y el precio del día.', image: 'croissant.jpg' },
  { name: 'Zumo natural', category: 'Bebidas', price: 2.5, desc: 'Zumo natural.', image: 'zumo-natural.jpg' }
].map(item => ({
  ...item,
  displayImage: `web/${item.image.replace(/\.[^.]+$/, '.webp')}`
}));

const featuredProductIds = [
  'bocadillo-jamon-serrano.png',
  'tostada-jamon-serrano-queso.jpg',
  'bocadillo-beicon.jpg',
  'gofre.jpg'
];
const specialtyProductIds = ['sandwich-vegetal.jpg', 'crepe.jpg', 'zumo-natural.jpg'];
const spacePhotos = [
  { id: 'terraza-pizarra', title: 'Terraza · Pizarra', category: 'Terraza', src: 'assets/terrace/web/terraza-pizarra.webp', x: 50, y: 61 },
  { id: 'terraza-mesas', title: 'Terraza · Mesas', category: 'Terraza', src: 'assets/terrace/web/terraza-mesas.webp', x: 43, y: 50 },
  { id: 'terraza-vista', title: 'Terraza · Vista general', category: 'Terraza', src: 'assets/terrace/web/terraza-vista.webp', x: 50, y: 63 },
  { id: 'comedor-barra', title: 'Comedor · Barra', category: 'Comedor', src: 'assets/interior/web/comedor-barra.webp', x: 50, y: 50 },
  { id: 'comedor-mesas', title: 'Comedor · Mesas', category: 'Comedor', src: 'assets/interior/web/comedor-mesas.webp', x: 50, y: 50 },
  { id: 'comedor-salon', title: 'Comedor · Salón', category: 'Comedor', src: 'assets/interior/web/comedor-salon.webp', x: 50, y: 50 },
  { id: 'comedor-pizarra', title: 'Comedor · Pizarra', category: 'Comedor', src: 'assets/interior/web/comedor-pizarra.webp', x: 50, y: 25 }
];

const menuGrid = document.getElementById('menuGrid');
const featuredGrid = document.getElementById('featuredGrid');
const specialtyGrid = document.getElementById('specialtyGrid');
const mostOurSection = document.getElementById('mostOurSection');
const specialtySection = document.getElementById('especialidades');
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
const heroImage = 'assets/cover/web/hero-santa-ana.webp';
const photoViewer = document.getElementById('photoViewer');
const photoViewerImage = document.getElementById('photoViewerImage');
const photoViewerCaption = document.getElementById('photoViewerCaption');
const closePhotoViewer = document.getElementById('closePhotoViewer');
const imageDatabaseName = 'santa-ana-photo-editor';
const imageStoreName = 'photo-edits';
const menuSettingsStoreName = 'menu-settings';
const menuSettingsId = 'catalog';
const webImageDataLimit = 20 * 1024 * 1024;

let activeCategory = 'Todas';
let editorCategoryFilter = 'Todas';
let imageDatabasePromise;
let photoEdits = new Map();
let menuSettings = {
  id: menuSettingsId,
  productCategories: {},
  productOrder: [],
  customCategories: [],
  productDetails: {},
  customProducts: [],
  contentVersion: 1
};
let editorStorageError = null;
let scrollObserver;
let lastPhotoTrigger = null;
let productFieldSaveQueue = Promise.resolve();
let menuSettingsSaveQueue = Promise.resolve();

function observeScrollReveal(elements) {
  if (!scrollObserver) return;
  elements.forEach((element, index) => {
    if (element.classList.contains('scroll-reveal')) return;
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
    scrollObserver.observe(element);
  });
}

function initializeScrollAnimations() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
  observeScrollReveal(document.querySelectorAll('.hero-content, .featured-heading, .featured-card, .section-head, .menu-toolbar, .menu-card, .terrace-heading, .terrace-photo, .location-layout, .footer-grid, .footer-bottom'));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
}

function getProductCategory(item) {
  return menuSettings.productCategories[item.image] || item.category;
}

function getProductDetails(item) {
  return menuSettings.productDetails[item.image] || {};
}

function getProductName(item) {
  return getProductDetails(item).name || item.name;
}

function getProductDescription(item) {
  const details = getProductDetails(item);
  return Object.prototype.hasOwnProperty.call(details, 'description') ? details.description : item.desc;
}

function getProductPrice(item) {
  const details = getProductDetails(item);
  return Object.prototype.hasOwnProperty.call(details, 'price') ? details.price : item.price;
}

function isProductVisible(item) {
  return getProductDetails(item).visible !== false;
}

function getAllMenuItems() {
  return [...menuItems, ...menuSettings.customProducts];
}

function getProductImageSource(item) {
  return item.isCustom ? item.webImage || item.originalImage : `assets/products/${item.displayImage}`;
}

function getMenuCategories() {
  return [...new Set([...getAllMenuItems().map(getProductCategory), ...menuSettings.customCategories])];
}

function categories() {
  return ['Todas', ...getMenuCategories()];
}

function getOrderedMenuItems() {
  const order = new Map(menuSettings.productOrder.map((id, index) => [id, index]));
  return getAllMenuItems().sort((a, b) => {
    const aIndex = order.get(a.image);
    const bIndex = order.get(b.image);
    if (aIndex === undefined && bIndex === undefined) return 0;
    if (aIndex === undefined) return 1;
    if (bIndex === undefined) return -1;
    return aIndex - bIndex;
  });
}

function renderCategories() {
  if (activeCategory !== 'Todas' && !getMenuCategories().includes(activeCategory)) activeCategory = 'Todas';
  categoryNav.innerHTML = categories().map(category => `
    <button class="category-btn${category === activeCategory ? ' active' : ''}"
      type="button" data-category="${escapeHtml(category)}"
      aria-pressed="${category === activeCategory}">${escapeHtml(category)}</button>
  `).join('');

  categoryNav.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderCards();
    });
  });
}

function renderProductShowcase(grid, productIds, showLinks = false) {
  const items = productIds
    .map(id => getAllMenuItems().find(item => item.image === id))
    .filter(item => item && isProductVisible(item));

  grid.innerHTML = items.map(item => `
    <article class="featured-card">
      <button class="featured-photo photo-trigger" type="button" data-photo-trigger
        aria-label="Ampliar foto: ${escapeHtml(getProductName(item))}">
        <img src="${escapeHtml(getProductImageSource(item))}" alt="${escapeHtml(getProductName(item))}"
          loading="lazy" decoding="async" data-photo-id="${escapeHtml(item.image)}">
        <span class="photo-placeholder" hidden>Foto próximamente</span>
      </button>
      <div class="featured-card-body">
        <div class="card-meta">
          <span class="card-category">${escapeHtml(getProductCategory(item))}</span>
          <span class="price">${getProductPrice(item) === null ? 'Consultar' : euro.format(getProductPrice(item))}</span>
        </div>
        <h3>${escapeHtml(getProductName(item))}</h3>
        <p class="showcase-description">${escapeHtml(getProductDescription(item))}</p>
        ${showLinks ? `<a class="featured-card-link" href="#carta" data-featured-product="${escapeHtml(item.image)}">Ver en carta <span aria-hidden="true">→</span></a>` : ''}
      </div>
    </article>
  `).join('');
}

function renderFeaturedProducts() {
  renderProductShowcase(featuredGrid, featuredProductIds, true);
  renderProductShowcase(specialtyGrid, specialtyProductIds);
}

function filteredItems() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  return getOrderedMenuItems().filter(item => {
    const category = getProductCategory(item);
    const matchesCategory = activeCategory === 'Todas' || category === activeCategory;
    const text = `${getProductName(item)} ${category} ${getProductDescription(item)}`.toLocaleLowerCase('es');
    return isProductVisible(item) && matchesCategory && (!query || text.includes(query));
  });
}

function renderCards() {
  const items = filteredItems();
  const showEditorialSections = activeCategory === 'Todas' && !searchInput.value.trim();
  emptyState.hidden = items.length > 0;
  mostOurSection.hidden = !showEditorialSections || !featuredGrid.children.length;
  specialtySection.hidden = !showEditorialSections || !specialtyGrid.children.length;
  resultsCount.textContent = `${items.length} ${items.length === 1 ? 'opción' : 'opciones'}`;
  if (scrollObserver) menuGrid.querySelectorAll('.scroll-reveal').forEach(card => scrollObserver.unobserve(card));
  menuGrid.innerHTML = items.map((item, index) => {
    const positionInPattern = index % 8;
    const layoutClass = positionInPattern === 0
      ? 'menu-card-wide'
      : positionInPattern === 4 ? 'menu-card-wide menu-card-reverse' : '';
    return `
    <article class="menu-card ${layoutClass}" data-product-id="${escapeHtml(item.image)}"
      data-product-name="${escapeHtml(getProductName(item))}">
      <button class="card-media photo-trigger" type="button" data-photo-trigger
        aria-label="Ampliar foto: ${escapeHtml(getProductName(item))}">
        <img src="${escapeHtml(getProductImageSource(item))}" alt="${escapeHtml(getProductName(item))}"
          loading="lazy" decoding="async" data-photo-id="${escapeHtml(item.image)}">
        <span class="photo-placeholder" hidden>Foto próximamente</span>
      </button>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${escapeHtml(getProductCategory(item))}</span>
          <span class="price">${getProductPrice(item) === null ? 'Consultar' : euro.format(getProductPrice(item))}</span>
        </div>
        <h3>${escapeHtml(getProductName(item))}</h3>
        <p>${escapeHtml(getProductDescription(item))}</p>
      </div>
    </article>
  `;
  }).join('');
  observeScrollReveal(menuGrid.querySelectorAll('.menu-card'));
  applyPhotoEdits();
}

function resetMenuFilters() {
  if (activeCategory === 'Todas' && !searchInput.value) return;
  activeCategory = 'Todas';
  searchInput.value = '';
  renderCategories();
  renderCards();
}

function getPhotoEdit(id) {
  const savedEdit = photoEdits.get(id);
  if (savedEdit) return savedEdit;
  const spacePhoto = spacePhotos.find(photo => photo.id === id);
  return { id, src: '', removed: false, zoom: 1, x: spacePhoto ? spacePhoto.x : id === 'hero' ? 80 : 50, y: spacePhoto ? spacePhoto.y : 50 };
}

function getOriginalImage(id) {
  if (id === 'hero') return heroImage;
  const item = getAllMenuItems().find(product => product.image === id);
  if (item) return getProductImageSource(item);
  const spacePhoto = spacePhotos.find(photo => photo.id === id);
  return spacePhoto ? spacePhoto.src : '';
}

function updatePhotoFallback(image) {
  const placeholder = image.closest('.photo-trigger')?.querySelector('.photo-placeholder');
  if (!placeholder || !image.complete) return;
  const hasImage = image.naturalWidth > 0;
  image.hidden = !hasImage;
  placeholder.hidden = hasImage;
}

function bindPhotoFallback(image) {
  if (!image.dataset.fallbackBound) {
    image.dataset.fallbackBound = 'true';
    image.addEventListener('load', () => updatePhotoFallback(image));
    image.addEventListener('error', () => updatePhotoFallback(image));
  }
  updatePhotoFallback(image);
}

function updatePhotoView(id) {
  const edit = getPhotoEdit(id);
  const src = edit.src || getOriginalImage(id);

  if (id === 'hero') {
    heroPhoto.style.backgroundImage = edit.removed ? 'none' : `url("${src}")`;
    heroPhoto.style.backgroundPosition = `${edit.x}% ${edit.y}%`;
    heroPhoto.style.transform = `scale(${edit.zoom})`;
  } else {
    document.querySelectorAll('img[data-photo-id]').forEach(image => {
      if (image.dataset.photoId !== id) return;
      image.hidden = Boolean(edit.removed);
      const container = image.closest('.card-media, .terrace-photo, .featured-photo, .feature-photo');
      if (container) container.hidden = Boolean(edit.removed);
      if (!edit.removed) {
        if (image.getAttribute('src') !== src) image.src = src;
        if (container) bindPhotoFallback(image);
      }
      image.style.objectPosition = `${edit.x}% ${edit.y}%`;
      image.style.transform = `scale(${edit.zoom})`;
    });
  }

  document.querySelectorAll('img[data-preview-photo]').forEach(image => {
    if (image.dataset.previewPhoto !== id) return;
    if (image.getAttribute('src') !== src) image.src = src;
    image.hidden = Boolean(edit.removed);
    image.closest('.editor-photo-preview').classList.toggle('empty', Boolean(edit.removed));
    image.style.objectPosition = `${edit.x}% ${edit.y}%`;
    image.style.transform = `scale(${edit.zoom})`;
  });
}

function applyPhotoEdits() {
  updatePhotoView('hero');
  getAllMenuItems().forEach(item => updatePhotoView(item.image));
  spacePhotos.forEach(photo => updatePhotoView(photo.id));
}

function openImageDatabase() {
  if (!('indexedDB' in window)) {
    return Promise.reject(new Error('Este navegador no permite guardar las fotografías editadas.'));
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(imageDatabaseName, 2);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(imageStoreName)) {
        database.createObjectStore(imageStoreName, { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains(menuSettingsStoreName)) {
        database.createObjectStore(menuSettingsStoreName, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
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

function normalizeMenuSettings(record) {
  const customProducts = [];
  if (Array.isArray(record?.customProducts)) {
    record.customProducts.forEach(product => {
      if (!product || typeof product !== 'object' || Array.isArray(product)) return;
      const image = typeof product.image === 'string' ? product.image.trim().slice(0, 100) : '';
      const name = typeof product.name === 'string' ? product.name.trim().slice(0, 100) : '';
      const category = typeof product.category === 'string' ? product.category.trim().slice(0, 40) : '';
      const description = typeof product.desc === 'string' ? product.desc.trim().slice(0, 300) : '';
      const originalImage = typeof product.originalImage === 'string' &&
        product.originalImage.startsWith('data:image/') &&
        product.originalImage.length <= 14 * 1024 * 1024 ? product.originalImage : '';
      const webImage = typeof product.webImage === 'string' &&
        product.webImage.startsWith('data:image/') &&
        product.webImage.length <= webImageDataLimit ? product.webImage : originalImage;
      const price = product.price === null
        ? null
        : typeof product.price === 'number' && Number.isFinite(product.price) && product.price >= 0
          ? product.price
          : undefined;
      if (!image.startsWith('custom-') || !name || !category || !originalImage || price === undefined ||
          menuItems.some(item => item.image === image) ||
          customProducts.some(item => item.image === image)) return;
      customProducts.push({ image, name, category, desc: description, price, originalImage, webImage, displayImage: '', isCustom: true });
    });
  }

  const allItems = [...menuItems, ...customProducts];
  const validIds = new Set(allItems.map(item => item.image));
  const productCategories = {};
  const savedCategories = record?.productCategories;
  if (savedCategories && typeof savedCategories === 'object' && !Array.isArray(savedCategories)) {
    Object.entries(savedCategories).forEach(([id, name]) => {
      const cleanName = typeof name === 'string' ? name.trim().slice(0, 40) : '';
      if (validIds.has(id) && cleanName) productCategories[id] = cleanName;
    });
  }

  const productDetails = {};
  const savedDetails = record?.productDetails;
  if (savedDetails && typeof savedDetails === 'object' && !Array.isArray(savedDetails)) {
    Object.entries(savedDetails).forEach(([id, details]) => {
      if (!validIds.has(id) || !details || typeof details !== 'object' || Array.isArray(details)) return;
      const cleanDetails = {};
      if (typeof details.name === 'string') {
        const name = details.name.trim().slice(0, 100);
        if (name) cleanDetails.name = name;
      }
      if (typeof details.description === 'string') {
        cleanDetails.description = details.description.trim().slice(0, 300);
      }
      if (details.price === null) {
        cleanDetails.price = null;
      } else if (typeof details.price === 'number' && Number.isFinite(details.price) && details.price >= 0) {
        cleanDetails.price = details.price;
      }
      if (typeof details.visible === 'boolean') cleanDetails.visible = details.visible;
      if (Object.keys(cleanDetails).length) productDetails[id] = cleanDetails;
    });
  }

  const productCategoryNames = new Set(allItems.map(item =>
    (productCategories[item.image] || item.category).toLocaleLowerCase('es')
  ));
  const customCategories = [];
  if (Array.isArray(record?.customCategories)) {
    record.customCategories.forEach(name => {
      const cleanName = typeof name === 'string' ? name.trim().slice(0, 40) : '';
      const normalizedName = cleanName.toLocaleLowerCase('es');
      if (cleanName && normalizedName !== 'todas' && !productCategoryNames.has(normalizedName) &&
          !customCategories.some(category => category.toLocaleLowerCase('es') === normalizedName)) {
        customCategories.push(cleanName);
      }
    });
  }

  const productOrder = [];
  if (Array.isArray(record?.productOrder)) {
    record.productOrder.forEach(id => {
      if (validIds.has(id) && !productOrder.includes(id)) productOrder.push(id);
    });
  }
  const contentVersion = Number.isInteger(record?.contentVersion) && record.contentVersion > 0
    ? record.contentVersion
    : 0;
  return { id: menuSettingsId, productCategories, productOrder, customCategories, productDetails, customProducts, contentVersion };
}

async function loadMenuSettings() {
  const database = await getImageDatabase();
  const record = await new Promise((resolve, reject) => {
    const transaction = database.transaction(menuSettingsStoreName, 'readonly');
    const request = transaction.objectStore(menuSettingsStoreName).get(menuSettingsId);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('No se pudieron leer las categorías guardadas.'));
    transaction.onabort = () => reject(transaction.error || new Error('Se interrumpió la lectura de las categorías.'));
  });
  if (record) {
    menuSettings = normalizeMenuSettings(record);
    if (!menuSettings.contentVersion) {
      const productDetails = { ...menuSettings.productDetails };
      productDetails['bocadillo-jamon-serrano.png'] = {
        ...productDetails['bocadillo-jamon-serrano.png'],
        name: 'Bocadillo de jamón de pata',
        price: 5
      };
      productDetails['gofre.jpg'] = {
        ...productDetails['gofre.jpg'],
        price: 3.5
      };
      await saveMenuSettings({ productDetails, contentVersion: 1 });
    }
  }
}

async function saveMenuSettings(changes) {
  const saveOperation = menuSettingsSaveQueue.then(async () => {
    const nextSettings = { ...menuSettings, ...changes, id: menuSettingsId };
    const database = await getImageDatabase();
    const transaction = database.transaction(menuSettingsStoreName, 'readwrite');
    transaction.objectStore(menuSettingsStoreName).put(nextSettings);
    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error || new Error('No se pudieron guardar los cambios de la carta.'));
      transaction.onabort = () => reject(transaction.error || new Error('Se interrumpió el guardado de la carta.'));
    });
    menuSettings = normalizeMenuSettings(nextSettings);
  });
  menuSettingsSaveQueue = saveOperation.catch(() => {});
  await saveOperation;
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

async function prepareUploadedImage(file) {
  const originalImage = await imageDataUrl(file);
  const bitmap = await createImageBitmap(file);
  try {
    const longest = Math.max(bitmap.width, bitmap.height);
    const shortest = Math.min(bitmap.width, bitmap.height);
    let scale = shortest < 768 ? Math.min(3, 768 / shortest) : 1;
    if (longest * scale > 3840) scale = 3840 / longest;

    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('No se pudo preparar la versión web de la fotografía.');
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const webBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.95));
    if (!webBlob || webBlob.type !== 'image/webp') {
      throw new Error('Este navegador no pudo crear una versión WebP de alta calidad.');
    }
    const webImage = await imageDataUrl(webBlob);
    if (webImage.length > webImageDataLimit) {
      throw new Error('La versión WebP supera el límite de almacenamiento de 20 MB.');
    }
    return { originalImage, webImage };
  } finally {
    bitmap.close();
  }
}

function setEditorStatus(message, isError = false) {
  editorStatus.textContent = message;
  editorStatus.classList.toggle('error', isError);
}

function photoEditorCard(id, title, subtitle, productControls = '') {
  const edit = getPhotoEdit(id);
  const src = edit.src || getOriginalImage(id);
  return `
    <article class="photo-editor-card" data-editor-photo="${escapeHtml(id)}">
      <div class="editor-photo-preview${edit.removed ? ' empty' : ''}">
        <img src="${escapeHtml(src)}" alt="" data-preview-photo="${escapeHtml(id)}"${edit.removed ? ' hidden' : ''}>
      </div>
      <div class="editor-photo-details">
        <div class="editor-photo-heading">
          <div><h4>${escapeHtml(title)}</h4><p>${escapeHtml(subtitle)}</p></div>
          <div class="editor-photo-actions">
            <button type="button" class="delete-photo" data-delete-photo="${escapeHtml(id)}"
              aria-label="Eliminar foto de ${escapeHtml(title)}"${edit.removed ? ' disabled' : ''}>Eliminar</button>
            <button type="button" class="restore-photo" data-restore-photo="${escapeHtml(id)}">Restaurar</button>
          </div>
        </div>
        ${productControls}
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

function renderProductPhotoEditor() {
  const categoriesForProducts = getMenuCategories();
  document.getElementById('productCount').textContent = `${getAllMenuItems().length} productos`;
  if (editorCategoryFilter !== 'Todas' && !categoriesForProducts.includes(editorCategoryFilter)) {
    editorCategoryFilter = 'Todas';
  }

  const filter = document.getElementById('productPhotoCategoryFilter');
  filter.innerHTML = [
    '<option value="Todas">Todas las categorías</option>',
    ...categoriesForProducts.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
  ].join('');
  filter.value = editorCategoryFilter;

  const renameSelect = document.getElementById('renameCategorySelect');
  renameSelect.innerHTML = categoriesForProducts
    .map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join('');
  const addProductCategory = document.getElementById('newProductCategory');
  const previousProductCategory = addProductCategory.value;
  addProductCategory.innerHTML = categoriesForProducts
    .map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join('');
  addProductCategory.value = categoriesForProducts.includes(previousProductCategory)
    ? previousProductCategory
    : categoriesForProducts[0] || '';

  const items = getOrderedMenuItems().filter(item =>
    editorCategoryFilter === 'Todas' || getProductCategory(item) === editorCategoryFilter
  );
  if (!items.length) {
    document.getElementById('productPhotoEditor').innerHTML =
      '<p class="editor-empty">Todavía no hay productos en esta categoría. Puedes asignarlos desde “Todas las categorías”.</p>';
    return;
  }

  document.getElementById('productPhotoEditor').innerHTML = items.map((item, index) => {
    const category = getProductCategory(item);
    const name = getProductName(item);
    const price = getProductPrice(item);
    const visible = isProductVisible(item);
    const categoryOptions = categoriesForProducts.map(option =>
      `<option value="${escapeHtml(option)}"${option === category ? ' selected' : ''}>${escapeHtml(option)}</option>`
    ).join('');
    const controls = `
      <div class="editor-product-controls">
        <div class="editor-product-fields">
          <label class="editor-select-label">
            <span>Nombre del producto</span>
            <input type="text" maxlength="100" value="${escapeHtml(name)}"
              data-product-field="name" data-product-id="${escapeHtml(item.image)}">
          </label>
          <label class="editor-select-label editor-description-field">
            <span>Descripción</span>
            <textarea maxlength="300" rows="2" data-product-field="description"
              data-product-id="${escapeHtml(item.image)}">${escapeHtml(getProductDescription(item))}</textarea>
          </label>
          <label class="editor-select-label">
            <span>Precio</span>
            <span class="editor-price-field">
              <input type="number" min="0" step="0.01" inputmode="decimal"
                value="${price === null ? '' : escapeHtml(price)}" placeholder="Sin precio"
                data-product-field="price" data-product-id="${escapeHtml(item.image)}">
              <span aria-hidden="true">€</span>
            </span>
          </label>
          <label class="editor-select-label">
            <span>Categoría del producto</span>
            <select data-product-category="${escapeHtml(item.image)}">${categoryOptions}</select>
          </label>
          <label class="editor-visibility">
            <input type="checkbox" data-product-visible="${escapeHtml(item.image)}"
              ${visible ? ' checked' : ''}>
            <span class="editor-visibility-label">Mostrar producto en la carta</span>
            <span class="editor-visibility-state" data-visibility-state>${visible ? 'ON' : 'OFF'}</span>
          </label>
        </div>
        <div class="editor-order-actions" aria-label="Ordenar ${escapeHtml(name)}">
          <button type="button" data-move-product="up" data-product-id="${escapeHtml(item.image)}"
            aria-label="Subir ${escapeHtml(name)}"${index === 0 ? ' disabled' : ''}>↑</button>
          <button type="button" data-move-product="down" data-product-id="${escapeHtml(item.image)}"
            aria-label="Bajar ${escapeHtml(name)}"${index === items.length - 1 ? ' disabled' : ''}>↓</button>
        </div>
      </div>
    `;
    return photoEditorCard(
      item.image,
      name,
      `${category} · ${price === null ? 'Consultar' : euro.format(price)}`,
      controls
    );
  }).join('');
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
  renderProductPhotoEditor();
  document.getElementById('spacePhotoEditor').innerHTML = spacePhotos.map(photo =>
    photoEditorCard(photo.id, photo.title, photo.category)
  ).join('');
}

function renderMenuViews() {
  renderCategories();
  renderFeaturedProducts();
  renderCards();
  renderPhotoEditor();
}

async function renameMenuCategory() {
  await Promise.all([productFieldSaveQueue, menuSettingsSaveQueue]);
  const categorySelect = document.getElementById('renameCategorySelect');
  const previousName = categorySelect.value;
  const newName = document.getElementById('renameCategoryInput').value.trim().slice(0, 40);
  if (!newName || newName.toLocaleLowerCase('es') === 'todas') {
    setEditorStatus('Escribe un nombre válido para la categoría.', true);
    return;
  }
  if (newName.toLocaleLowerCase('es') !== previousName.toLocaleLowerCase('es') &&
      getMenuCategories().some(category => category.toLocaleLowerCase('es') === newName.toLocaleLowerCase('es'))) {
    setEditorStatus('Ya existe una categoría con ese nombre.', true);
    return;
  }
  if (newName === previousName) {
    setEditorStatus('Elige un nombre distinto para la categoría.', true);
    return;
  }

  const productCategories = { ...menuSettings.productCategories };
  getOrderedMenuItems().forEach(item => {
    if (getProductCategory(item) === previousName) productCategories[item.image] = newName;
  });
  const customCategories = menuSettings.customCategories.map(category =>
    category === previousName ? newName : category
  );
  try {
    await saveMenuSettings({ productCategories, customCategories });
    if (activeCategory === previousName) activeCategory = newName;
    if (editorCategoryFilter === previousName) editorCategoryFilter = newName;
    document.getElementById('renameCategoryInput').value = '';
    renderMenuViews();
    setEditorStatus(`Categoría cambiada a «${newName}».`);
  } catch (error) {
    setEditorStatus(`No se pudo cambiar la categoría: ${error.message}`, true);
  }
}

async function addMenuCategory() {
  await Promise.all([productFieldSaveQueue, menuSettingsSaveQueue]);
  const input = document.getElementById('newCategoryInput');
  const newName = input.value.trim().slice(0, 40);
  if (!newName || newName.toLocaleLowerCase('es') === 'todas') {
    setEditorStatus('Escribe un nombre válido para la categoría.', true);
    return;
  }
  if (getMenuCategories().some(category => category.toLocaleLowerCase('es') === newName.toLocaleLowerCase('es'))) {
    setEditorStatus('Ya existe una categoría con ese nombre.', true);
    return;
  }
  try {
    await saveMenuSettings({
      customCategories: [...menuSettings.customCategories, newName]
    });
    input.value = '';
    renderMenuViews();
    setEditorStatus(`Categoría «${newName}» creada. Ya puedes asignarle productos.`);
  } catch (error) {
    setEditorStatus(`No se pudo crear la categoría: ${error.message}`, true);
  }
}

async function addMenuProduct() {
  await Promise.all([productFieldSaveQueue, menuSettingsSaveQueue]);
  const nameInput = document.getElementById('newProductName');
  const descriptionInput = document.getElementById('newProductDescription');
  const priceInput = document.getElementById('newProductPrice');
  const categoryInput = document.getElementById('newProductCategory');
  const imageInput = document.getElementById('newProductImage');
  const name = nameInput.value.trim().slice(0, 100);
  const category = categoryInput.value;
  const file = imageInput.files[0];

  if (!name) {
    setEditorStatus('Escribe el nombre del producto que quieres añadir.', true);
    nameInput.focus();
    return;
  }
  if (!getMenuCategories().includes(category)) {
    setEditorStatus('Selecciona una categoría válida para el producto.', true);
    categoryInput.focus();
    return;
  }
  if (!file || !file.type.startsWith('image/')) {
    setEditorStatus('Elige una fotografía para el nuevo producto.', true);
    imageInput.focus();
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    setEditorStatus('La imagen debe ocupar menos de 10 MB.', true);
    return;
  }
  if (priceInput.value !== '' &&
      (!priceInput.validity.valid || !Number.isFinite(priceInput.valueAsNumber) || priceInput.valueAsNumber < 0)) {
    setEditorStatus('Introduce un precio válido con hasta dos decimales.', true);
    priceInput.focus();
    return;
  }

  try {
    const uuid = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const image = `custom-${uuid}`;
    const { originalImage, webImage } = await prepareUploadedImage(file);
    const product = {
      image,
      name,
      category,
      desc: descriptionInput.value.trim().slice(0, 300),
      price: priceInput.value === '' ? null : priceInput.valueAsNumber,
      originalImage,
      webImage,
      displayImage: '',
      isCustom: true
    };
    const productOrder = [...getOrderedMenuItems().map(item => item.image), image];
    await saveMenuSettings({
      customProducts: [...menuSettings.customProducts, product],
      productOrder
    });
    nameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    document.getElementById('addProductDetails').open = false;
    renderMenuViews();
    setEditorStatus(`«${name}» se añadió a la carta.`);
  } catch (error) {
    setEditorStatus(`No se pudo añadir el producto: ${error.message}`, true);
  }
}

async function changeProductCategory(id, category) {
  await Promise.all([productFieldSaveQueue, menuSettingsSaveQueue]);
  const item = getAllMenuItems().find(product => product.image === id);
  if (!item || !getMenuCategories().includes(category)) {
    setEditorStatus('No se pudo cambiar la categoría del producto.', true);
    renderPhotoEditor();
    return;
  }

  const productCategories = { ...menuSettings.productCategories };
  if (category === item.category) delete productCategories[id];
  else productCategories[id] = category;

  try {
    await saveMenuSettings({ productCategories });
    renderMenuViews();
    setEditorStatus(`«${getProductName(item)}» ahora está en «${category}».`);
  } catch (error) {
    setEditorStatus(`No se pudo mover el producto: ${error.message}`, true);
    renderPhotoEditor();
  }
}

async function saveProductField(input) {
  const id = input.dataset.productId || input.dataset.productVisible;
  const item = getAllMenuItems().find(product => product.image === id);
  const field = input.dataset.productField || 'visible';
  if (!item || !['name', 'description', 'price', 'visible'].includes(field)) {
    setEditorStatus('No se pudo guardar el producto.', true);
    return;
  }

  let value;
  if (field === 'name') {
    value = input.value.trim().slice(0, 100);
    if (!value) {
      setEditorStatus('El nombre del producto no puede estar vacío.', true);
      input.focus();
      return;
    }
  } else if (field === 'description') {
    value = input.value.trim().slice(0, 300);
  } else if (field === 'price') {
    if (input.value === '') {
      value = null;
    } else if (!input.validity.valid || !Number.isFinite(input.valueAsNumber) || input.valueAsNumber < 0) {
      setEditorStatus('Introduce un precio válido con hasta dos decimales.', true);
      input.focus();
      return;
    } else {
      value = input.valueAsNumber;
    }
  } else {
    value = input.checked;
  }

  const saveOperation = productFieldSaveQueue.then(async () => {
    const details = { ...getProductDetails(item), [field]: value };
    const productDetails = { ...menuSettings.productDetails, [item.image]: details };
    await saveMenuSettings({ productDetails });
    renderFeaturedProducts();
    renderCards();

    const card = input.closest('.photo-editor-card');
    const name = getProductName(item);
    const price = getProductPrice(item);
    if (card?.isConnected) {
      card.querySelector('.editor-photo-heading h4').textContent = name;
      card.querySelector('.editor-photo-heading p').textContent =
        `${getProductCategory(item)} · ${price === null ? 'Consultar' : euro.format(price)}`;
      card.querySelector('[data-delete-photo]').setAttribute('aria-label', `Eliminar foto de ${name}`);
      card.querySelector('[data-restore-photo]').setAttribute('aria-label', `Restaurar foto de ${name}`);
      card.querySelectorAll('[data-move-product]').forEach(button => {
        button.setAttribute('aria-label', `${button.dataset.moveProduct === 'up' ? 'Subir' : 'Bajar'} ${name}`);
      });
      if (field === 'visible') {
        card.querySelector('[data-visibility-state]').textContent = input.checked ? 'ON' : 'OFF';
      }
    }
    setEditorStatus(`Cambios guardados para «${name}».`);
  });
  productFieldSaveQueue = saveOperation.catch(() => {});
  try {
    await saveOperation;
  } catch (error) {
    if (field === 'visible') input.checked = isProductVisible(item);
    setEditorStatus(`No se pudo guardar el producto: ${error.message}`, true);
  }
}

async function moveProductPhoto(id, direction) {
  await Promise.all([productFieldSaveQueue, menuSettingsSaveQueue]);
  const visibleItems = getOrderedMenuItems().filter(item =>
    editorCategoryFilter === 'Todas' || getProductCategory(item) === editorCategoryFilter
  );
  const currentIndex = visibleItems.findIndex(item => item.image === id);
  const targetItem = visibleItems[currentIndex + direction];
  if (currentIndex < 0 || !targetItem) return;

  const productOrder = getOrderedMenuItems().map(item => item.image);
  const currentOrderIndex = productOrder.indexOf(id);
  const targetOrderIndex = productOrder.indexOf(targetItem.image);
  [productOrder[currentOrderIndex], productOrder[targetOrderIndex]] =
    [productOrder[targetOrderIndex], productOrder[currentOrderIndex]];

  try {
    await saveMenuSettings({ productOrder });
    renderCards();
    renderPhotoEditor();
    setEditorStatus('Orden de las fotos guardado.');
  } catch (error) {
    setEditorStatus(`No se pudo guardar el orden: ${error.message}`, true);
  }
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
    setEditorStatus('Las fotos, categorías y el orden se guardan automáticamente en este navegador.');
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
    const { originalImage, webImage } = await prepareUploadedImage(file);
    const edit = { ...getPhotoEdit(id), src: webImage, originalSrc: originalImage, removed: false };
    photoEdits.set(id, edit);
    updatePhotoView(id);
    await savePhotoEdit(id);
    renderPhotoEditor();
    setEditorStatus('Original conservado y versión web guardada. Puedes seguir ajustando el encuadre.');
  } catch (error) {
    setEditorStatus(`No se pudo guardar la fotografía: ${error.message}`, true);
  }
}

async function restorePhoto(id) {
  try {
    const currentEdit = getPhotoEdit(id);
    if (currentEdit.originalSrc) {
      const spacePhoto = spacePhotos.find(photo => photo.id === id);
      const restored = {
        id,
        src: '',
        originalSrc: currentEdit.originalSrc,
        removed: false,
        zoom: 1,
        x: spacePhoto ? spacePhoto.x : 50,
        y: spacePhoto ? spacePhoto.y : 50
      };
      photoEdits.set(id, restored);
      await savePhotoEdit(id);
    } else {
      await deletePhotoEdit(id);
      photoEdits.delete(id);
    }
    updatePhotoView(id);
    renderPhotoEditor();
    setEditorStatus('Fotografía original restaurada.');
  } catch (error) {
    setEditorStatus(`No se pudo restaurar la fotografía: ${error.message}`, true);
  }
}

async function removePhoto(id) {
  try {
    const edit = { ...getPhotoEdit(id), src: '', removed: true };
    photoEdits.set(id, edit);
    updatePhotoView(id);
    await savePhotoEdit(id);
    renderPhotoEditor();
    setEditorStatus('Fotografía eliminada de este navegador. Puedes restaurarla cuando quieras.');
  } catch (error) {
    setEditorStatus(`No se pudo eliminar la fotografía: ${error.message}`, true);
  }
}

function openPhotoViewer(trigger) {
  const image = trigger.querySelector('img[data-photo-id]');
  if (!image || image.hidden) return;
  lastPhotoTrigger = trigger;
  photoViewerImage.src = image.currentSrc || image.src;
  photoViewerImage.alt = image.alt;
  photoViewerCaption.textContent = image.alt || trigger.getAttribute('aria-label') || 'Fotografía';
  photoViewer.showModal();
  closePhotoViewer.focus();
}

function setMobileMenuOpen(isOpen) {
  mobileNav.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuBtn.textContent = isOpen ? '×' : '☰';
}

searchInput.addEventListener('input', renderCards);
document.querySelectorAll('a[href="#carta"]').forEach(link => {
  if (!link.matches('[data-featured-product]')) link.addEventListener('click', resetMenuFilters);
});
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#carta') resetMenuFilters();
});
menuBtn.addEventListener('click', () => {
  setMobileMenuOpen(!mobileNav.classList.contains('open'));
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMobileMenuOpen(false);
}));
featuredGrid.addEventListener('click', event => {
  const link = event.target.closest('[data-featured-product]');
  if (!link) return;
  resetMenuFilters();
  const productCard = [...menuGrid.querySelectorAll('.menu-card')]
    .find(card => card.dataset.productId === link.dataset.featuredProduct);
  if (productCard) {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.setTimeout(() => productCard.scrollIntoView({ behavior, block: 'center' }), 0);
  }
});
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-photo-trigger]');
  if (trigger) openPhotoViewer(trigger);
});
closePhotoViewer.addEventListener('click', () => photoViewer.close());
photoViewer.addEventListener('click', event => {
  if (event.target === photoViewer) photoViewer.close();
});
photoViewer.addEventListener('close', () => {
  photoViewerImage.removeAttribute('src');
  if (lastPhotoTrigger && lastPhotoTrigger.isConnected && !lastPhotoTrigger.closest('[hidden]')) lastPhotoTrigger.focus();
  lastPhotoTrigger = null;
});
document.getElementById('year').textContent = new Date().getFullYear();

settingsButton.addEventListener('click', showPhotoEditor);
document.getElementById('closeEditor').addEventListener('click', () => hidePhotoEditor());
document.getElementById('closeEditorFooter').addEventListener('click', () => hidePhotoEditor());
editorBackdrop.addEventListener('click', () => hidePhotoEditor());
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (photoEditor.classList.contains('open')) {
    hidePhotoEditor();
  } else if (mobileNav.classList.contains('open')) {
    setMobileMenuOpen(false);
    menuBtn.focus();
  }
});
photoEditor.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = [...photoEditor.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), summary')];
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
  if (event.target.matches('input[data-product-field], textarea[data-product-field], input[data-product-visible]')) {
    await saveProductField(event.target);
  } else if (event.target.id === 'productPhotoCategoryFilter') {
    editorCategoryFilter = event.target.value;
    renderProductPhotoEditor();
  } else if (event.target.matches('select[data-product-category]')) {
    await changeProductCategory(event.target.dataset.productCategory, event.target.value);
  } else if (event.target.matches('input[type="file"][data-upload-photo]')) {
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
  if (event.target.closest('#createProductButton')) {
    await addMenuProduct();
    return;
  }
  if (event.target.closest('#renameCategoryButton')) {
    await renameMenuCategory();
    return;
  }
  if (event.target.closest('#addCategoryButton')) {
    await addMenuCategory();
    return;
  }
  const moveButton = event.target.closest('[data-move-product]');
  if (moveButton) {
    await moveProductPhoto(moveButton.dataset.productId, moveButton.dataset.moveProduct === 'up' ? -1 : 1);
    return;
  }
  const deleteButton = event.target.closest('[data-delete-photo]');
  if (deleteButton) {
    await removePhoto(deleteButton.dataset.deletePhoto);
    return;
  }
  const button = event.target.closest('[data-restore-photo]');
  if (button) await restorePhoto(button.dataset.restorePhoto);
});

if (window.location.hash === '#carta') {
  activeCategory = 'Todas';
  searchInput.value = '';
}

renderCategories();
renderFeaturedProducts();
renderCards();
renderPhotoEditor();
initializeScrollAnimations();
document.querySelectorAll('.photo-trigger img[data-photo-id]').forEach(bindPhotoFallback);
loadPhotoEdits()
  .then(() => {
    applyPhotoEdits();
    renderPhotoEditor();
  })
  .catch(error => {
    editorStorageError = error;
  });
loadMenuSettings()
  .then(() => renderMenuViews())
  .catch(error => {
    editorStorageError = error;
  });
