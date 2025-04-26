# CLI + Web App (SolidJS) Project

[![Deploy Web App to GitHub Pages](https://github.com/yourusername/cli-web-solidjs/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/cli-web-solidjs/actions/workflows/deploy.yml)

This project contains:
- A CLI app (Node.js + Commander + Inquirer + Chalk)
- A Web App (Vite + SolidJS)
- Shared business logic between CLI and Web
- Auto-deploy to GitHub Pages using GitHub Actions

## Commands
```bash
npm run cli         # Run CLI app (development)
npm run cli:build   # Build CLI app (production)
npm run web:dev     # Run SolidJS web app (development)
npm run web:build   # Build SolidJS web app (production)
npm run web:preview # Preview production web app locally
npm run deploy      # Manually trigger deploy to GitHub Pages
```

> Auto deployment occurs on every push to `main`, or you can trigger manually via GitHub Actions UI.
