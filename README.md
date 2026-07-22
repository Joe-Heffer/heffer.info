# heffer.info

Personal CV & portfolio website for **Joe Heffer** — a fast, dependency-free
static site with a bold, modern design. No build step, no frameworks: just
HTML, CSS, and a little vanilla JavaScript.

## ✨ Features

- Bold, modern hero with an animated gradient backdrop
- Light **and** dark themes (auto-detected, with a manual toggle that remembers your choice)
- Sections: **About**, **Experience** (timeline), **Selected Work** (project cards), **Contact**
- Smooth-scrolling nav with active-section highlighting and a mobile menu
- Subtle scroll-reveal animations — and full respect for `prefers-reduced-motion`
- Accessible, semantic markup and a responsive layout from ~320px up
- Zero external requests: system fonts, inline SVG favicon, no CDNs

## 📁 Structure

```
index.html            # All page content (edit your details here)
assets/
  css/styles.css      # Design system + all styling (colors live in :root)
  js/main.js          # Theme toggle, mobile nav, scroll reveal, scroll spy
  favicon.svg         # "JH" monogram favicon
CNAME                 # Custom domain for GitHub Pages (heffer.info)
.nojekyll             # Tells GitHub Pages to serve /assets untouched
```

## ✏️ Editing your content

All content lives in `index.html`, marked with `<!-- EDIT: ... -->` comments.
Replace anything in `[ square brackets ]` with your real details:

- **Hero** — your role/title and tagline
- **About** — your bio paragraphs, the "Toolkit" skills, and "At a glance" facts
- **Experience** — duplicate a `<li class="timeline__item">` block per role/education entry
- **Projects** — duplicate an `<article class="card">` block per project
- **Contact** — set your real **LinkedIn** URL (search for `your-handle`)

To change the color theme, edit the `--brand-1/2/3` variables at the top of
`assets/css/styles.css`.

## 🖥️ Run locally

No tooling required — just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static file server works.)

## 🚀 Deploy on GitHub Pages

1. Push to GitHub.
2. Repo **Settings → Pages** → set **Source** to *Deploy from a branch*, and
   pick your branch (e.g. `main`) with the `/ (root)` folder.
3. The included `CNAME` file serves the site at **heffer.info**. In your DNS,
   point the domain at GitHub Pages:
   - Apex `heffer.info` → four `A` records: `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` → `CNAME` to `joe-heffer.github.io`
4. Enable **Enforce HTTPS** once the certificate is issued.

## 📄 License

[MIT](LICENSE) © Joe Heffer
