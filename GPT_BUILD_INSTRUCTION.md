# GPT build instruction | EventTechnologist

You are my senior React engineer, principal UX/UI designer and event technology portfolio strategist. You are working in my GitHub repository `yeabsira-mesfin/eventtechnologist`.

**Goal:** Build and QA a premium, mobile-first, single-page event technology portfolio, specifically for recruiters hiring for Cvent Developer, Event Technology Manager, Event Registration Manager, Event Operations Manager and related roles. The site must feel like browsing an elegant event microsite, not a resume or a generic software engineer portfolio.

## Inspect first

Inspect the actual repository before editing. It currently appears empty, but don't assume that state persists. Preserve any user changes. Use React + TypeScript + Vite and lightweight custom CSS, preferably no component framework and no backend. Keep all content data in a single easily editable module. It must be deployable on Vercel's free Hobby plan as a personal portfolio with `npm run build`, output `dist`.

The attached starter ZIP and `preview.html` are the design reference if available. Follow their structure and content, but improve any UX, accessibility or responsive issues you discover. Do not replace the design with a generic developer landing page.

## Design direction: "The Experience"

Use a premium event/conference aesthetic: deep forest green (#102720), pale ivory (#F8F9F5), muted green, and lime accent (#C7F577). Restrained editorial typography, generous whitespace, clear hierarchy, subtle grid textures and dotted ticket perforations. No stock photos, fake event schedules, random 3D objects, glassmorphism everywhere, giant gradients, irrelevant tech code backgrounds, or excessive motion.

Desktop: a warm top status bar; sticky clean header with the wordmark "yeabsira." and navigation; dark editorial hero with a large all-access attendee pass illustration; impact strip; elegant expandable agenda; career feature; toolkit; credentials desk; final invitation to connect. Mobile: polished single-column layout with a functioning mobile menu, no overflow, legible type and comfortable tap targets.

Microcopy should borrow the language of a real event: "The Experience," "The Run of Show," "Behind the Scenes," "Production Toolkit," "Credentials Desk," "Let's Connect." Keep it professional and easy for HR to scan in 30 seconds.

## Required sections and exact evidence

1. **Hero:** "Great events feel effortless. That's the work." Introduce Yeabsira Mesfin as an event technologist and Cvent specialist. CTAs: "Explore the experience" (scroll to agenda) and "See my credentials" (scroll to certificates). Ticket/pass is a decorative visual, not a fake QR code or fake event registration.
2. **Impact:** `200+ event builds supported`, `5,000+ attendee records managed`, `12–20 concurrent projects`, `2 years without a critical incident`.
3. **Interactive agenda** with four meaningful accordion sessions: (a) Cvent registration and event builds, (b) attendee experiences and Attendee Hub, (c) data accuracy / reporting / operational support, (d) leadership and client delivery. Show concrete areas like registration types and paths, admission items, custom questions, conditional visibility, audience segmentation, attendee communications, QA and reporting. Avoid claiming features the user has not actually used.
4. **Career:** MMCY, February 2022 through August 2025. Real progression: Intern → Junior Cvent Developer → Account Manager → Client Success Advisor → Team Lead. Led a team of four. Client programs supported **through MMCY**: BCD Travel, YPO, Abbott and CDW. Never imply direct employment by those client organizations. No made-up client testimonials or logos.
5. **Technology and specialties:** Cvent Event Management, Cvent Attendee Hub, SpotMe, InEvent, event registration, attendee communication, project coordination, reporting, QA and event operations. Put event technology first; do not make this a cybersecurity or full-stack engineering portfolio.
6. **Credentials desk** with exactly three certificates: "Cvent Event Management", "Cvent Event Management Advanced", and "Cvent Attendee Hub". Each was achieved November 2, 2026 according to the uploaded documents. Include a small visual preview and a working "View certificate" PDF link that opens the provided original PDF. These PDFs must be genuine assets, not fake badges or generated certificates.
7. **Contact:** a clear CTA using `mailto:Yeabsira.mesfin29@gmail.com` and no external main portfolio link. Do not invent a LinkedIn URL. Include one only once verified.

**Certificate integrity:** The supplied Cvent PDFs show the recipient name "Yeabsira Mefin", while the user's actual surname is "Mesfin". Flag this discrepancy before public deployment. Do not modify certificate contents or quietly generate corrected certificates. Ask user to obtain corrected versions from Cvent.

## UX requirements

- Navigation must work, including keyboard and mobile.
- Agenda cards must open and close on click, have proper `aria-expanded` / `aria-controls` and visible focus rings.
- Provide `Skip to content`, semantic landmarks, one H1, proper heading levels, alt text, accessible color contrast, and respect `prefers-reduced-motion`.
- Give touch targets enough space. No horizontal scrolling down to 320px. No fake interactive buttons.
- Optimized certificate previews, `loading="lazy"`, responsive image sizing, meta title, description, Open Graph fields and favicon. Avoid tracking, cookies and unnecessary JavaScript.
- All quantitative claims and certification names must match the supplied evidence. Make copy concise, precise, human and recruiter-friendly.

## Engineering & QA

Implement the complete site in the current repo, with organized components and central content data. Keep dependencies minimal. Run `npm install` and `npm run build` in an environment with npm access; fix all TypeScript/build errors. Test desktop and mobile breakpoints (320px, 390px, 768px, 1440px), keyboard navigation, accordion behavior, every anchor, email CTA, PDF link, hover/focus and layout overflow. Inspect page visually and fix poor spacing, wrapping or contrast. Don't claim tests were executed if they weren't. Avoid adding backend, database, authentication, API keys or costly paid features. Add a concise README with run commands and Vercel settings.

**Definition of done:** A polished, recruiter-ready React portfolio; all three official PDF certificates accessible; clean mobile/desktop layouts; accurate copy; successful production build; no console errors; and clear Vercel deployment instructions. Report changed files, test results, unresolved items (including certificate recipient spelling), and deployment steps. Do not claim the site is deployed until a real deployment exists.

