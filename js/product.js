/* Products page: category list on the left, image + details on the right.
   Link to a product with products.html#<product-id> */
let currentId = null;

const thumb = (p) => `<span class="thumb"><img src="${esc(BASE + p.image)}" alt="" loading="lazy" onerror="this.remove()"></span>`;

function renderSidebar() {
  $('productCount').textContent = ALL_PRODUCTS.length;
  const box = $('categoryList');
  PRODUCT_CATEGORIES.forEach((cat) => {
    const group = document.createElement('div');
    group.className = 'cat-group';
    group.innerHTML = `
      <button class="cat-title" type="button">
        <span><i class="${esc(cat.icon)} cat-icon"></i>${esc(cat.title)}</span>
        <span><span class="cat-count">${cat.products.length}</span><i class="fa-solid fa-chevron-down cat-toggle"></i></span>
      </button>
      <ul class="product-nav">${cat.products.map((p) => `
        <li><a class="product-link" href="#${esc(p.id)}" data-id="${esc(p.id)}">${thumb(p)}<span>${esc(p.name)}</span></a></li>`).join('')}
      </ul>`;
    group.querySelector('.cat-title').addEventListener('click', () => group.classList.toggle('collapsed'));
    box.appendChild(group);
  });
  box.addEventListener('click', (e) => { if (e.target.closest('.product-link')) setDrawer(false); });
}

function selectProduct(id) {
  const p = findProduct(id) || ALL_PRODUCTS[0];
  currentId = p.id;

  document.querySelectorAll('.product-link').forEach((a) => {
    const on = a.dataset.id === p.id;
    a.classList.toggle('active', on);
    if (on) {
      a.closest('.cat-group').classList.remove('collapsed');
      a.scrollIntoView({ block: 'nearest' });
    }
  });

  $('crumbCategory').textContent = p.categoryTitle;
  $('crumbProduct').textContent = p.name;
  $('mobileCurrent').textContent = p.name;
  const wa = whatsappLink(`Hi, I would like to know more about ${p.name}.`);
  $('enquireTop').href = wa;

  const points = Array.isArray(p.details) && p.details.length
    ? `<h3 class="detail-sub">Key points</h3><ul class="detail-list">${p.details.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : '';
  const related = ALL_PRODUCTS.filter((x) => x.categoryId === p.categoryId && x.id !== p.id);

  $('productDetail').innerHTML = `
    <article class="detail-card">
      <div class="detail-image">
        <img src="${esc(BASE + p.image)}" alt="${esc(p.name)}" onerror="this.parentNode.classList.add('no-image');this.remove()">
        <i class="fa-solid fa-leaf detail-fallback"></i>
      </div>
      <div class="detail-info">
        <span class="detail-cat"><i class="${esc(p.categoryIcon)}"></i>${esc(p.categoryTitle)}</span>
        <h2 class="detail-name">${esc(p.name)}</h2>
        <p class="detail-desc">${esc(p.desc)}</p>
        ${points}
        <div class="detail-actions">
          <a class="btn" href="${wa}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp</a>
          <a class="btn outline" href="../index.html#contact"><i class="fa-solid fa-envelope"></i> Contact us</a>
        </div>
      </div>
    </article>
    ${related.length ? `<section class="related"><h3>More in ${esc(p.categoryTitle)}</h3><div class="related-grid">
      ${related.map((r) => `<a class="related-item" href="#${esc(r.id)}">${thumb(r)}<span>${esc(r.name)}</span></a>`).join('')}
    </div></section>` : ''}`;

  $('detailScroll').scrollTop = 0;
  document.title = `${p.name} | Herbalife`;
}

/* Mobile drawer */
function setDrawer(open) {
  $('productSidebar').classList.toggle('open', !!open);
  $('drawerOverlay').classList.toggle('active', !!open);
}
$('openDrawerBtn').addEventListener('click', () => setDrawer(true));
$('drawerOverlay').addEventListener('click', () => setDrawer(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });

/* Start + follow the #hash */
renderSidebar();
const fromHash = () => selectProduct(decodeURIComponent(location.hash.slice(1)));
window.addEventListener('hashchange', fromHash);
fromHash();
