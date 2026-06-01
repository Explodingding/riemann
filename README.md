# Lommel and Uganda Sustainable Resource Research Hub

Dependency-free static research page for comparing Lommel, Belgium's silica-sand resource management model with Uganda's emerging silica-sand and Lake Victoria environmental-protection challenges.

## Features

- Research overview for the Lommel-to-Uganda comparison
- Filterable evidence bank with source links, metrics, findings and implications
- Side-by-side comparison table across resource quality, value chain, environment, energy and governance
- Uganda-focused roadmap and data-collection checklist
- Source trail for the uploaded report and external references

## Technology

- Plain HTML
- Plain CSS
- Plain JavaScript

No Node, React, bundler, install step or Netlify deployment is required.

## Getting started

Open `index.html` directly in a browser, or serve the folder with any static web server.

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.
After the branch is merged into `master`, GitHub can publish the static site directly to GitHub Pages.

If Pages is not already enabled for the repository:

1. Go to the repository on GitHub.
2. Open `Settings` -> `Pages`.
3. Set the build and deployment source to `GitHub Actions`.
4. Run the `Deploy static site to GitHub Pages` workflow, or push to `master`.

## License

This project is available under the MIT license. See `LICENSE` for details.
