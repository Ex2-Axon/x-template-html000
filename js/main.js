// Gallery data
const galleryData = [
  { id: 1, category: 'business', name: 'Corporate Landing Page', desc: 'A professional business landing page with a strong call to action and headline section.' },
  { id: 2, category: 'portfolio', name: 'Personal Portfolio', desc: 'Showcase work, skills, and projects in a clean, modern layout for freelancers and creatives.' },
  { id: 3, category: 'services', name: 'Service Promotion Page', desc: 'Designed for service providers who want a fast website with pricing and contact information.' },
  { id: 4, category: 'business', name: 'Product Showcase', desc: 'Highlight product features, reviews, and purchase options with a polished layout.' },
];

// Generate gallery cards dynamically
function generateGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = galleryData.map(item => `
    <article class="product-card" data-category="${item.category}">
      <img src="assets/images/x-template-html00${item.id}.png" alt="${item.name}" onclick="showDetailModal('x-template-html00${item.id}', '${item.name}')" />
      <span class="product-tag">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price-pill">Free</div>
    </article>
  `).join('');
}

function filterCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  const activeButtons = document.querySelectorAll('.filter-button');

  activeButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.category === category);
  });

  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    if (category === 'all' || cardCategory === category) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}

// Load and display markdown file in modal
async function showDetailModal(templateName, templateTitle) {
  const modal = document.getElementById('detail-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalDownload = document.getElementById('modal-download');
  const modalDemo = document.getElementById('modal-demo');

  try {
    const demoUrl = `https://ex2-axon.github.io/${templateName}/`;

    // Set image
    modalImage.src = `assets/images/${templateName}.png`;
    modalImage.alt = templateTitle;
    modalImage.title = 'Click to open demo page';
    modalImage.onclick = () => window.open(demoUrl, '_blank');

    // Set download link to GitHub repository
    modalDownload.href = `https://github.com/Ex2-Axon/${templateName}.git`;
    modalDownload.textContent = 'Download';

    // Set demo link
    modalDemo.href = demoUrl;
    modalDemo.textContent = 'View Demo';

    // Load and display markdown
    const response = await fetch(`assets/images/${templateName}.md`);
    if (!response.ok) throw new Error('File not found');

    const markdown = await response.text();
    const htmlContent = markdownToHtml(markdown);

    modalTitle.textContent = templateTitle;
    modalBody.innerHTML = htmlContent;

    modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading detail:', error);
    modalImage.onclick = null;
    modalTitle.textContent = templateTitle;
    modalBody.innerHTML = '<p>Unable to load details. Please try again.</p>';
    modal.classList.remove('hidden');
  }
}

function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  modal.classList.add('hidden');
}

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
  let html = markdown
    // Headings
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
    // Lists
    .replace(/^\* (.*?)$/gm, '<li>$1</li>')
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>')
    // Wrap li in ul
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Paragraphs
    .split('\n\n')
    .map(para => {
      if (para.match(/<[uh][l1-6]|<strong|<em|<li/)) return para;
      return para.trim() ? `<p>${para}</p>` : '';
    })
    .join('');

  return html;
}

window.filterCategory = filterCategory;
window.showDetailModal = showDetailModal;
window.closeDetailModal = closeDetailModal;

// Initialize gallery after components are loaded
window.addEventListener('componentsLoaded', generateGallery);
