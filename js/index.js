/* Shared: navbar, scroll highlight, popular products, contact form */
// Pages inside /pages set data-base="../" so image paths still work
const BASE = document.body.dataset.base || '';
const WHATSAPP_NUMBER = '917376874710';
const POPULAR_IDS = ['formula-1-vanilla-shake', 'cell-activator', 'facial-serum'];

const $ = (id) => document.getElementById(id);
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Flat product list with category info (used on both pages)
const ALL_PRODUCTS = [];
PRODUCT_CATEGORIES.forEach((cat) => cat.products.forEach((p) =>
  ALL_PRODUCTS.push(Object.assign({}, p, { categoryId: cat.id, categoryTitle: cat.title, categoryIcon: cat.icon }))));
const findProduct = (id) => ALL_PRODUCTS.find((p) => p.id === id);

function whatsappLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* Mobile menu */
const toggle = $('navToggle'), links = $('navLinks');
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
$('siteHeader').appendChild(navOverlay);
function setMenu(open) {
  links.classList.toggle('open', open);
  navOverlay.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
navOverlay.addEventListener('click', () => setMenu(false));
links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (innerWidth > 820) setMenu(false); });

/* Keep --nav-h equal to the real navbar height */
const header = $('siteHeader');
const measure = () => document.documentElement.style.setProperty('--nav-h', header.offsetHeight + 'px');
measure();
window.addEventListener('resize', measure);

/* Popular products (home page only) */
const popularGrid = $('popularGrid');
if (popularGrid) {
  popularGrid.innerHTML = POPULAR_IDS.map(findProduct).filter(Boolean).map((p) => `
    <a class="card p-card" href="pages/products.html#${esc(p.id)}">
      <div class="img"><img src="${esc(BASE + p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()"></div>
      <div class="card-body"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p></div>
    </a>`).join('');
}

/* Highlight the navbar link of the section on screen (home page only) */
if ($('home') && 'IntersectionObserver' in window) {
  const ids = ['home', 'popular', 'about', 'testimonials', 'contact'];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      document.querySelectorAll('.nav-links a[data-section]').forEach((a) =>
        a.classList.toggle('active', a.dataset.section === en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach((id) => io.observe($(id)));
}

/* Contact form -> WhatsApp */
const form = $('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const picked = [...document.querySelectorAll('input[name="problem"]:checked')].map((i) => i.value);
    const msg = [
      'New Contact Message:', '----------------------',
      `Name: ${$('name').value.trim()}`, `Email: ${$('email').value.trim()}`, `Phone: ${$('phone').value.trim()}`,
      `Interest: ${picked.length ? picked.join(', ') : 'None'}`, `Message: ${$('message').value.trim()}`
    ].join('\n');
    window.open(whatsappLink(msg), '_blank');
    form.reset();
  });
}

/* Clicking the logo goes to the top (on the home page it scrolls up smoothly) */
document.querySelectorAll('[data-top]').forEach((a) => {
  a.addEventListener('click', (e) => {
    if (!$('home')) return;               // on other pages the link opens the home page
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', location.pathname + location.search);
  });
});
