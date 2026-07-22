# Joe Heffer's CV website

Personal CV & portfolio website for [Joe Heffer](https://heffer.info).

## Structure

```
index.html            # All page content
assets/
  css/styles.css      # Design system + all styling (colors live in :root)
  js/main.js          # Theme toggle, mobile nav, scroll reveal, scroll spy
  favicon.svg          # "JH" monogram favicon
CNAME                 # Custom domain for GitHub Pages (heffer.info)
.nojekyll             # Tells GitHub Pages to serve /assets untouched
```

## Editing content

All content lives directly in `index.html`. To change the color theme, edit
the `--brand-1/2/3` variables at the top of `assets/css/styles.css`.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## License

[MIT](LICENSE) © Joe Heffer
