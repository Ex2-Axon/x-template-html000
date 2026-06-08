// ============================================================
// AUTO-DISCOVERY GALLERY
// ============================================================
// วิธีเพิ่ม template ใหม่ในอนาคต:
//   รัน: python add-template.py   ← อัปเดต TEMPLATE_IDS ให้อัตโนมัติ
//   หรือเพิ่ม id ลงใน TEMPLATE_IDS ด้านล่างเองก็ได้
// ============================================================
const TEMPLATE_IDS = [
  '001', '002', '003', '004', '005', '006',
  '007', '008', '009', '010', '011', '012',
];

const PAGE_SIZE = 9; // จำนวน card ต่อหน้า (3 คอลัมน์ × 3 แถว)

// ============================================================
// STATE
// ============================================================
let _allTemplates    = [];   // ข้อมูลทั้งหมด (โหลดครั้งเดียว)
let _filteredTemplates = []; // หลัง filter category
let _currentPage     = 1;

// ============================================================
// PARSE MARKDOWN
// ============================================================
function parseTitleFromMarkdown(markdown, fallbackId) {
  for (const line of markdown.split('\n')) {
    const m = line.match(/^#\s+(.+)/);
    if (m) {
      const title = m[1]
        .replace(/\(x-template-html\d+\)/gi, '')
        .replace(/x-template-html\d+[:\s]*/gi, '')
        .replace(/^[-–:]\s*/, '')
        .trim();
      if (title.length > 3) return title;
    }
  }
  return `Template ${fallbackId}`;
}

function parseDescFromMarkdown(markdown) {
  for (const para of markdown.split('\n\n')) {
    const clean = para
      .replace(/^#+\s+.*/gm, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`.*?`/g, '')
      .replace(/[*_[\]()]/g, '')
      .trim();
    if (clean.length > 30) {
      const first = clean.split(/[.。\n]/)[0].trim();
      return first.length > 20 ? first : clean.slice(0, 120);
    }
  }
  return 'A ready-made HTML landing page template, offline-ready and fully customizable.';
}

function guessCategoryFromMarkdown(markdown, title) {
  const text = (markdown + ' ' + title).toLowerCase();
  if (/portfolio|personal|freelanc|showcase|creative/.test(text)) return 'portfolio';
  if (/service|promotion|consult|agency/.test(text))              return 'services';
  return 'business';
}

// ============================================================
// LOAD ALL TEMPLATES (โหลดครั้งเดียว cache ไว้)
// ============================================================
async function loadGalleryData() {
  if (_allTemplates.length) return _allTemplates; // ใช้ cache

  const results = await Promise.all(
    TEMPLATE_IDS.map(async (id) => {
      const name = `x-template-html${id}`;
      try {
        const res = await fetch(`assets/images/${name}.md`);
        if (!res.ok) throw new Error('not found');
        const md = await res.text();
        return {
          id:       name,
          name:     parseTitleFromMarkdown(md, id),
          desc:     parseDescFromMarkdown(md),
          category: guessCategoryFromMarkdown(md, name),
          markdown: md,
        };
      } catch {
        return {
          id:       name,
          name:     `Template ${id}`,
          desc:     'A ready-made HTML landing page template.',
          category: 'business',
          markdown: '',
        };
      }
    })
  );
  _allTemplates = results;
  window._galleryTemplates = results; // ใช้ใน modal
  return results;
}

// ============================================================
// RENDER CARDS — เฉพาะ page ปัจจุบัน
// ============================================================
function renderPage(page) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  _currentPage = page;
  const total      = _filteredTemplates.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const start      = (page - 1) * PAGE_SIZE;
  const slice      = _filteredTemplates.slice(start, start + PAGE_SIZE);

  grid.innerHTML = slice.map((t, i) => {
    const delay = Math.min(i * 0.07, 0.5).toFixed(2);
    return `
    <article class="product-card reveal" data-category="${t.category}" style="transition-delay:${delay}s">
      <img
        src="assets/images/${t.id}.png"
        alt="${escapeHtml(t.name)}"
        loading="lazy"
        onclick="showDetailModal('${t.id}')"
      />
      <span class="product-tag">${capitalize(t.category)}</span>
      <h3>${escapeHtml(t.name)}</h3>
      <p>${escapeHtml(t.desc.slice(0, 110))}${t.desc.length > 110 ? '…' : ''}</p>
      <div class="price-pill">✦ Free</div>
    </article>`;
  }).join('');

  renderPagination(page, totalPages);
  initCardEffects();
  observeReveal();
}

// ============================================================
// PAGINATION UI
// ============================================================
function renderPagination(current, total) {
  // หรือสร้าง container ถ้ายังไม่มี
  let pager = document.getElementById('pagination');
  if (!pager) {
    pager = document.createElement('div');
    pager.id = 'pagination';
    const grid = document.getElementById('gallery-grid');
    grid.parentElement.appendChild(pager);
  }

  if (total <= 1) { pager.innerHTML = ''; return; }

  // สร้างปุ่มหน้าต่าง ๆ
  const pages = buildPageRange(current, total);
  pager.innerHTML = `
    <div class="pagination-inner">
      <button class="page-btn page-prev" onclick="goToPage(${current - 1})" ${current === 1 ? 'disabled' : ''}>
        ← Prev
      </button>
      <div class="page-numbers">
        ${pages.map(p =>
          p === '…'
            ? `<span class="page-ellipsis">…</span>`
            : `<button class="page-btn page-num ${p === current ? 'active' : ''}" onclick="goToPage(${p})">${p}</button>`
        ).join('')}
      </div>
      <button class="page-btn page-next" onclick="goToPage(${current + 1})" ${current === total ? 'disabled' : ''}>
        Next →
      </button>
    </div>
    <p class="page-info">Page ${current} of ${total} &nbsp;·&nbsp; ${_filteredTemplates.length} templates</p>
  `;
}

/** สร้าง array ของเลขหน้า + "…" สำหรับ long pagination */
function buildPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  pages.push(1);
  if (current > 3)              pages.push('…');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }
  if (current < total - 2)      pages.push('…');
  pages.push(total);
  return pages;
}

function goToPage(page) {
  const total = Math.ceil(_filteredTemplates.length / PAGE_SIZE);
  if (page < 1 || page > total) return;
  // scroll ขึ้นไปที่ gallery section
  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderPage(page);
}

// ============================================================
// GENERATE GALLERY (โหลดข้อมูล + render หน้า 1)
// ============================================================
async function generateGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:3rem;color:#475569;font-size:0.9rem">
      Loading templates…
    </div>`;

  await loadGalleryData();
  _filteredTemplates = [..._allTemplates];
  renderPage(1);
}

// ============================================================
// FILTER CATEGORY
// ============================================================
function filterCategory(category) {
  document.querySelectorAll('.filter-button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  _filteredTemplates = category === 'all'
    ? [..._allTemplates]
    : _allTemplates.filter(t => t.category === category);

  renderPage(1); // reset กลับหน้า 1 เสมอเมื่อ filter
}

// ============================================================
// CARD SPOTLIGHT
// ============================================================
function initCardEffects() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width  * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top)  / rect.height * 100).toFixed(1)}%`);
    });
  });
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ============================================================
// HEADER SCROLL SHADOW
// ============================================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 40px rgba(34, 211, 238, 0.08)'
      : '0 1px 40px rgba(34, 211, 238, 0.05)';
  }, { passive: true });
}

// ============================================================
// MODAL
// ============================================================
function showDetailModal(templateId) {
  const modal         = document.getElementById('detail-modal');
  const modalImage    = document.getElementById('modal-image');
  const modalTitle    = document.getElementById('modal-title');
  const modalBody     = document.getElementById('modal-body');
  const modalDownload = document.getElementById('modal-download');
  const modalDemo     = document.getElementById('modal-demo');
  if (!modal) return;

  const t       = (_allTemplates).find(x => x.id === templateId);
  const demoUrl = `https://ex2-axon.github.io/${templateId}/`;

  modalImage.src     = `assets/images/${templateId}.png`;
  modalImage.alt     = t ? t.name : templateId;
  modalImage.title   = 'Click to open demo';
  modalImage.onclick = () => window.open(demoUrl, '_blank');

  modalDownload.href        = `https://github.com/Ex2-Axon/${templateId}.git`;
  modalDownload.textContent = 'Download';
  modalDemo.href            = demoUrl;
  modalDemo.textContent     = 'View Demo';
  modalTitle.textContent    = t ? t.name : templateId;
  modalBody.innerHTML       = t?.markdown ? markdownToHtml(t.markdown) : '<p>No details available.</p>';

  modal.classList.remove('hidden');
}

function closeDetailModal() {
  document.getElementById('detail-modal')?.classList.add('hidden');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetailModal(); });

// ============================================================
// MARKDOWN → HTML  (safe — sanitises href URLs)
// ============================================================
function markdownToHtml(md) {
  // Sanitise a URL: allow only http/https/mailto
  function safeHref(url) {
    try {
      const u = new URL(url, location.href);
      return /^https?:|^mailto:/.test(u.protocol) ? escapeHtml(u.href) : '#';
    } catch { return '#'; }
  }

  return md
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm,   '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g,     '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,     '<em>$1</em>')
    .replace(/_(.*?)_/g,       '<em>$1</em>')
    // Links — sanitise href
    .replace(/\[(.*?)\]\((.*?)\)/g, (_, text, url) =>
      `<a href="${safeHref(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text)}</a>`)
    // List items
    .replace(/^[*-] (.*?)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>')
    // Wrap consecutive <li> groups in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    .split('\n\n')
    .map(p => {
      if (p.match(/^<[huo]|^<li|<strong|<em/)) return p;
      return p.trim() ? `<p>${p}</p>` : '';
    })
    .join('');
}

// ============================================================
// UTILS
// ============================================================
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
// EXPORTS & INIT
// ============================================================
window.filterCategory   = filterCategory;
window.showDetailModal  = showDetailModal;
window.closeDetailModal = closeDetailModal;
window.goToPage         = goToPage;

window.addEventListener('componentsLoaded', () => {
  generateGallery();
  observeReveal();
  initHeaderScroll();
});
