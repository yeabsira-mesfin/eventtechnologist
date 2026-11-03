# Yeabsira Mesfin | Event Technology Experience

A recruiter-focused event technology portfolio presented as an independent, premium event microsite. Built with **React 19**, **TypeScript**, **Vite 6**, and custom CSS. No backend, database, authentication, paid product, API key, or environment variable is needed.

> This is a personal portfolio, not an official Cvent property. The attendee pass is decorative and does not represent an actual event or registration.

## Run locally

Prerequisite: Node.js 20.19+ or 22+ and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Test and build

```bash
npm run test   # dependency-free content, original PDF checksum and link-source assertions
npm run check  # complete TypeScript check after npm install
npm run build  # TypeScript check + Vite production build
npm run preview
npm run test:e2e  # desktop/mobile Playwright Chromium tests; requires browser installation
```

Before launch, confirm the homepage, 4 agenda sessions, mobile navigation, all 3 PDF links, mailto and external website. The Playwright test suite covers 1440px, 768px, 390px and 320px layouts, interactive navigation, keyboard accordion use, PDF responses, links and JavaScript errors. On first local use, install the browser using `npx playwright install chromium`. `tests/portfolio.test.mjs` validates source and assets. GitHub Actions runs both test suites, TypeScript and the build on pushes and pull requests.

## Content and component map

- `src/content.ts`: verified metrics, profile and contact information, session detail, progression, clients, tools, certificate metadata, and file paths.
- `src/components/`: reusable icon, section heading and responsive navigation.
- `src/sections/Agenda.tsx`: keyboard-operable, single-open accordion with native buttons and ARIA states.
- `src/sections/Credentials.tsx`: certification previews and direct links to original PDFs.
- `src/App.tsx`: hero, decorative pass, impact, MMCY timeline, production toolkit, contact and page composition.
- `src/styles.css`: design system, layouts, responsive styles, focus states and reduced-motion support.
- `public/certificates/`: original PDFs, plus `SHA256SUMS` to guard against accidental edits.
- `public/previews/`: small WebP crops of the real certificates, loaded lazily.
- `preview.html`: the supplied **static design reference**; production uses `src/`.

The four career impact metrics and named client programs are the user's claims. The client programs were supported **through MMCY** and do not imply employment directly by BCD Travel, YPO, Abbott or CDW. Do not introduce new testimonials, certificates or employment claims without verification.

## Certificate spelling correction needed before publication

The **original** Cvent Event Management, Event Management Advanced and Attendee Hub PDFs all print **“Yeabsira Mefin”**, not **“Yeabsira Mesfin”**. The professional name on this site is **Yeabsira Mesfin**. This mismatch was confirmed in the PDF text and must be reviewed and, if erroneous, corrected by the issuing organization before publicly promoting the certificates. Do **not** edit or regenerate the original certificates to change their contents. All three PDFs in `public/certificates/` are the originals supplied in the starter ZIP.

## Deploy to Vercel Hobby

1. Push the **contents of this project folder**, not the enclosing ZIP directory, to the `main` branch of [`yeabsira-mesfin/eventtechnologist`](https://github.com/yeabsira-mesfin/eventtechnologist). Keep the three PDF files and preview images in `public/`.
2. In [Vercel](https://vercel.com/new), choose **Add New → Project** and import that GitHub repository.
3. Confirm Framework Preset **Vite**, Root Directory **./**, Build Command **`npm run build`**, and Output Directory **`dist`**. These values are also in `vercel.json`.
4. No environment variables or secrets are required. Select **Deploy**.
5. Visit the new URL to verify each certificate link opens a PDF, then check the 4 responsive viewport widths and mobile keyboard navigation.

Vercel Hobby may be suitable for a personal portfolio, subject to its plan terms. The repository is not automatically deployed by this archive.

## Accessibility

Semantic landmarks and heading order, a skip-to-main-content link, native accordion buttons with `aria-expanded` and linked panels, meaningful focus styles, menu Escape-key handling, image alt text, visible link labels, keyboard navigation, and reduced-motion behavior. No JavaScript tracking or third-party font service.

## Later additions (only with verified material)

A downloadable resume, permission-approved event screenshots/case studies, and a verified LinkedIn URL are natural follow-ups. Nothing about them is fabricated in this version.

## First push to an empty GitHub repository (Windows PowerShell)

After extracting the ZIP, open a terminal inside the extracted `eventtechnologist` project folder. If the remote is still empty:

```powershell
git init
git branch -M main
git remote add origin https://github.com/yeabsira-mesfin/eventtechnologist.git
git add .
git commit -m "Build event technology portfolio"
git push -u origin main
```

If you already initialized or cloned the repository, **do not reinitialize it**. Instead, copy the extracted project files into your existing working tree, review the changes, and commit/push normally.
