# RadarCRM Marketing Website — Implementation Decisions

**Date:** June 2026  
**Scope:** Standalone site at `radarcrm/website/` — zero reuse of REQ application UI.

## Pre-Implementation Validation

### Architecture (PRD + website-architecture.md + wireframes v2)

| Decision | Resolution |
|----------|------------|
| Page structure | Single page `/` with 17 landmarks: NAV, S1–S15, FOOTER, demo form `#demo` |
| S3 Aha | Merge Problem pillars + Monday timeline into one `#aha` section (PRD/wireframes over copy §3/§4 split) |
| Extra copy sections | Features §6, Workflow §7, ROI §9 absorbed into chapters S4–S8 and S9 — not separate sections |
| Mid-page CTA copy | Wireframes/PRD: *"Votre queue intelligente commence lundi."* |
| Nav login label | PRD: *Connexion* → `https://app.radarcrm.ca` |
| Footer language toggle | PRD: FR-only at launch — no EN toggle |
| Demo form | Embedded after S15 at `#demo` |
| JSON-LD | Organization + WebPage + FAQPage (PRD §11) |

### Copy (website-copy.md)

- All live copy from approved sections only; register *vous* throughout.
- Testimonials: designed quotes flagged in `lib/content/testimonials.ts` for replacement.
- Banned CTAs: no *Essai gratuit*, *S'inscrire*, *En savoir plus*.

### Design System (design-system.md)

- Tokens: semantic CSS variables in `styles/tokens.css`, mapped to Tailwind + shadcn theme.
- Fonts: Syne (display), Geist (sans via npm), DM Mono (mono) — self-hosted via `next/font`, no Google CDN in production.
- Chartreuse `#A4C639` only on: primary buttons, scores, eyebrows, active states.
- Dark mode default; light via `data-theme` + class on `<html>`.

### Wireframes (wireframes v2)

- Grid: 12-col, max-width 1200px, padding 80/48/32/16px at 1920/1440/1024/390.
- Mobile-first breakpoints: 390 → 1024 → 1440 → 1920.
- FAQ: native `<details>` on mobile; shadcn Accordion on desktop with same content.

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 App Router | PRD §15, SSG/SSR, API routes for form |
| Language | TypeScript | Required |
| Styling | Tailwind CSS v4 | Design system Tailwind config |
| Components | shadcn/ui (Radix) | User requirement; customized to RadarCRM tokens |
| Icons | lucide-react | Design system §11 |
| Validation | zod + react-hook-form | Demo form |
| Email | Resend API (optional env) | Graceful mock when key absent |

## shadcn Integration

- shadcn primitives styled with RadarCRM semantic tokens (not default zinc/slate).
- Custom marketing components live outside shadcn: ProspectCard, chapter mocks, LogoMark.

## Phase completion (June 2026)

- **Phases 0–7:** Initial implementation in `website/`
- **Build:** `npm run build` passes
- **Tests:** 6 unit tests (form schema + content completeness)
- **Lint:** ESLint clean
- **Pending before production:** Logo SVG, OG image 1200×630, Resend + SPF/DKIM, real testimonials, GA4/Plausible env vars


- No third-party scripts except deferred GA4/Plausible when env vars set.
- `prefers-reduced-motion`: all animations disabled globally.
- Images: SVG mocks preferred; no heavy hero PNG.

## Accessibility

- WCAG 2.2 AA target; skip link, landmarks, single H1, focus-visible ring `--shadow-focus`.
