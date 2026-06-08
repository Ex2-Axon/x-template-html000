# x-template-html000 — Free Landing Page Gallery

[![Deploy to GitHub Pages](https://github.com/Ex2-Axon/x-template-html000/actions/workflows/deploy.yml/badge.svg)](https://ex2-axon.github.io/x-template-html000/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)](https://ex2-axon.github.io/x-template-html000/)
[![No CDN](https://img.shields.io/badge/No--CDN-true-blue)](https://ex2-axon.github.io/x-template-html000/)
[![Templates](https://img.shields.io/badge/Templates-12-cyan)](https://ex2-axon.github.io/x-template-html000/)

> A curated gallery of **12 free HTML5 landing page templates** — all offline-ready, no CDN dependencies, no Google Fonts. Download any template and launch immediately.

**[🌐 Live Demo →](https://ex2-axon.github.io/x-template-html000/)**

---

## ✨ Features

- **12 free templates** — business, portfolio, and services categories
- **Offline-ready** — all fonts and assets hosted locally, zero CDN calls
- **Auto-discovery** — adding a new template requires only 1 line of code
- **Pagination** — 9 cards per page (3×3 grid), lazy-loaded images
- **Animated UI** — scroll reveal, card spotlight, glassmorphism header, hero glow orbs
- **Fully responsive** — mobile-first, tested from 320px to 1440px
- **SEO ready** — Open Graph, Twitter Card, sitemap.xml, robots.txt
- **Accessible** — `prefers-reduced-motion` support, semantic HTML, `alt` attributes

---

## 🗂️ File & Folder Structure

```
x-template-html000/
│
├── index.html                  # Main entry point
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # SEO robots directive
├── add-template.py             # CLI tool — adds a new template slot automatically
│
├── assets/
│   ├── fonts/
│   │   ├── chakra-petch/       # Local .woff2 font files (12 variants)
│   │   └── chakra-petch.css    # @font-face declarations
│   └── images/
│       ├── x-template-html001.png   # Preview screenshot
│       ├── x-template-html001.md    # Template detail / description
│       ├── x-template-html002.png
│       ├── x-template-html002.md
│       └── ...                      # (001–012, add more with add-template.py)
│
├── components/                 # HTML partials loaded via fetch()
│   ├── header.html
│   ├── hero.html
│   ├── modal.html
│   ├── pricing.html
│   ├── contact.html
│   └── footer.html
│
├── css/
│   └── styles.css              # All styles — design tokens, components, animations
│
├── js/
│   ├── components-loader.js    # Fetches & injects HTML partials (data-include)
│   └── main.js                 # Gallery logic, pagination, modal, scroll reveal
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — auto-deploy to GitHub Pages
│
├── LICENSE
└── README.md
```

---

## 🗺️ Site Map

```
/ (index.html)
├── #hero       — Hero section with CTA buttons
├── #gallery    — Paginated template gallery with category filter
│   └── [modal] — Template detail popup (image, description, download, demo)
├── #pricing    — Free forever CTA banner
├── #contact    — Contact information
└── [footer]    — About, Quick Links, Legal, Built With
```

---

## 🚀 Getting Started

### Local Preview

Requires a local HTTP server (browser blocks `fetch()` on `file://`):

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then open **http://localhost:8080**

### Add a New Template

```bash
python add-template.py
```

This will:
1. Find the latest template ID (e.g. `012`) and increment to `013`
2. Create placeholder `x-template-html013.png` and `x-template-html013.md` in `assets/images/`
3. Automatically update `TEMPLATE_IDS` in `js/main.js`

Then replace the placeholder files with real content — done.

---

## 🧩 How It Works

### Component Loading (`js/components-loader.js`)

Scans every `[data-include]` element and replaces it with the fetched HTML partial. Fires a `componentsLoaded` event when all partials are ready, which triggers gallery initialisation.

### Auto-Discovery Gallery (`js/main.js`)

1. Reads `TEMPLATE_IDS` array
2. Fetches each `.md` file and parses: title (from `#` heading), description (first clean paragraph), category (keyword detection)
3. Caches all data in `_allTemplates` — no re-fetching on filter or page change
4. Renders paginated cards (9/page) with CSS transition-delay set per card index

### Pagination

- 9 cards per page (3 columns × 3 rows)
- Prev / Next buttons + numbered page buttons with `…` ellipsis for large sets
- Resets to page 1 on category filter change

---

## 🎨 Template Categories

| Category   | Description |
|------------|-------------|
| `business` | Corporate, product, and brand landing pages |
| `portfolio` | Personal showcase and creative pages |
| `services` | Service promotion and agency pages |

---

## 🛡️ Security Notes

- All external links use `target="_blank" rel="noopener noreferrer"`
- Markdown-to-HTML converter sanitises link `href` values (allows only `https:` / `mailto:`)
- No `eval()`, no dynamic `<script>` injection
- `escapeHtml()` applied to all user-visible template data before DOM insertion

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 (custom, no framework) | Design tokens, animations, responsive layout |
| Vanilla JavaScript (ES2020+) | Gallery, pagination, modal, scroll reveal |
| Chakra Petch (local .woff2) | Typography — offline, no Google Fonts |
| Python 3 | `add-template.py` CLI helper |
| GitHub Actions | Auto-deploy to GitHub Pages |

---

## 📄 License

MIT © 2026 [Microtronic Thailand](https://microtronic.biz/)
