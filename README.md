# DevOps Portfolio (Next.js + Tailwind + SSG)

Portafolio para mostrar proyectos DevOps (CI/CD, IaC, Observabilidad).

## Stack
- Next.js 14 (App Router) + Tailwind CSS
- Modo oscuro/claro (next-themes)
- Exportación estática (`output: 'export'`) compatible con GitHub Pages

## Desarrollo
```bash
pnpm i # o npm install / yarn
pnpm dev # http://localhost:3000
```

## Build & Export (SSG)
```bash
# Si el repo se publica en https://<user>.github.io/<repo>, define BASE_PATH
# Ejemplo: BASE_PATH=/devops-portfolio
BASE_PATH=/devops-portfolio pnpm build
```
Los archivos estáticos se generan en `out/`.

## Publicación en GitHub Pages
1. Crea el repositorio y sube el código.
2. En Settings → Pages, selecciona la rama y carpeta `/out` (usando GitHub Actions o `gh-pages` branch).
3. O usa un workflow de Actions con:
```yaml
name: Deploy Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: BASE_PATH=/REPO npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: './out' }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
Reemplaza `/REPO` por el nombre de tu repo.

## Personalización
- Edita `app/page.tsx` para tu introducción.
- Añade proyectos en `data/projects.ts`.
- Las páginas de detalle se generan estáticamente con `generateStaticParams`.
