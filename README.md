# Yeabsira Mesfin · Event Technology

A React, TypeScript and Vite portfolio presented as an interactive event experience. The existing Vercel project deploys from `main`.

## Explore

- `/`: welcome lobby, interactive pass, impact metrics
- `/experience`: Event Hub and meaningful portfolio destinations
- `/mobile-apps`: six-screen mobile career experience
- `/sessions` and `/sessions/01` through `/sessions/04`: professional agenda and detail views
- `/career`: selectable MMCY career stages and client disclosure
- `/credentials`: original certificate previews and PDF links
- `/contact`: email invitation

React Router handles navigation and browser history. `vercel.json` rewrites application routes while retaining static asset paths. The UI respects reduced motion and supports keyboard navigation and a mobile menu. Mobile phone content expands naturally rather than creating a nested scrolling region.

## Development and validation

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

To test an existing server, set `BASE_URL` to its URL; Playwright then skips starting a second server. The suite covers 11 direct routes and refreshes, 4 viewport widths (1440, 768, 390, 320), phone screens, session and career interactions, navigation, original PDFs, contact links and reduced motion. GitHub Actions runs the checks on pushes and pull requests.

## Verified content

Edit `src/content.ts` for career information. Client companies were supported through MMCY, not direct employers. Individual career-stage dates and unverified client-specific work must not be invented. The portfolio contains no registration simulator or backend.

Original certificate PDFs and WebP previews are retained in `public/`. `public/certificates/SHA256SUMS` verifies byte-for-byte preservation. The PDFs display “Yeabsira Mefin”; the correct name is Yeabsira Mesfin. This discrepancy is documented on the credentials page. Certificates were awarded November 2, 2026.
