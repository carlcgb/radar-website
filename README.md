# RadarCRM Marketing Website

Standalone marketing site for [radarcrm.ca](https://radarcrm.ca). Built from approved strategy documents — **no code reuse** from the RadarCRM application (`REQ/`).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix)
- French (Québec) single-page site

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run test
npm run lint
```

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` for production demo form delivery.

## Project structure

```
src/
├── app/                 # Routes, layout, API
├── components/
│   ├── nav/             # Sticky nav + mobile drawer
│   ├── sections/        # S1–S15 + form + footer
│   ├── mocks/           # Prospect card, chapter UI mocks
│   ├── ui/              # shadcn + CTA, typography
│   └── seo/             # JSON-LD
├── lib/content/         # Copy constants (website-copy.md)
└── styles/tokens.css    # Design system semantic tokens
docs/
└── DECISIONS.md         # Implementation decisions log
```

## Sections (IA)

NAV → Hero → Trust → Aha → Chapters 01–05 → Mid CTA → Before/After → Testimonials → Sectors → Integrations → Trust → FAQ → Final CTA → Demo Form → Footer

## Deployment

Deploy to Vercel with Toronto edge region. Set environment variables from `.env.example`.

## Source documents

All copy and design specs: `../strategy/` (PRD, architecture, copy, design-system, wireframes).
