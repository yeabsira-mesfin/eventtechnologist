# Before publishing this portfolio

## Required issuer correction review

- [ ] Confirm with Cvent whether the spelling on **all three original certificates** should be corrected by the issuer.
- [ ] Original PDFs currently say **Yeabsira Mefin**. The personal portfolio says **Yeabsira Mesfin**.
- [ ] Do not edit the originals to change printed credentials. If Cvent issues replacements, replace the PDFs and regenerate `public/certificates/SHA256SUMS`.

## Required technical checks

- [ ] On a system with npm registry access: `npm install` and commit the resulting `package-lock.json` for reproducible installs.
- [ ] `npm run test`, `npm run check`, `npm run build`.
- [ ] Install Playwright Chromium and run `npm run test:e2e`.
- [ ] Inspect 1440px, 768px, 390px and 320px views, including no sideways scrolling.
- [ ] Check three certificate PDF links, email compose action, external portfolio and keyboard navigation.
- [ ] Deploy through Vercel only after content and certificate name have been reviewed.

No deployment or repository upload is implied by packaging this project.
