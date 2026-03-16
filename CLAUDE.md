# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Greg Homstad. React SPA deployed on Vercel.

## Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/postcss` plugin)
- react-router-dom v7 (BrowserRouter, client-side routing)
- react-helmet-async (SEO meta tags)
- lucide-react + react-icons (icons)
- Fonts: "DM Serif Display" for headings, "Inter" for body (loaded via Google Fonts in `index.html`)
- Design tokens as CSS custom properties in `src/index.css` (--bg, --surface, --accent, --text, --muted, --faint, --border, etc.)

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build (type-check then bundle)
npm run lint     # ESLint
npm run preview  # Serve production build locally
```

No test suite exists. There is no `npm test` command.

## Architecture

- `src/App.tsx` — Shell: BrowserRouter > Navigation + ErrorBoundary + `<main>` with routes + Footer + ScrollProgress + BackToTop
- `src/router/routes.tsx` — All route definitions (lazy-loaded via `React.lazy`)
- `src/pages/` — Page-level components (Home, Resume, CaseStudies, CaseStudyDetail, NotFound)
- `src/components/sections/` — Home page sections (Hero, About, FeaturedCaseStudies, Contact)
- `src/components/layout/` — Navigation, Footer
- `src/components/effects/` — ScrollProgress, BackToTop, LoadingScreen
- `src/data/caseStudies.ts` — Static case study data (5 case studies). No backend.
- `src/seo.ts` — Shared SEO config (SITE_URL, SITE_NAME, SITE_OG_IMAGE, SITE_TWITTER_HANDLE)
- `src/index.css` — Design tokens, global resets, utility classes (.btn-primary, .btn-text, .text-display, .text-label, .editorial-row, .fade-up, .stagger, etc.)

## Routes

| Path | Component |
|------|-----------|
| `/` | Home |
| `/resume` | Resume |
| `/case-studies` | CaseStudies |
| `/case-studies/:slug` | CaseStudyDetail |
| `*` | NotFound |

## Styling Conventions

- Use Tailwind utility classes as primary styling method
- Custom CSS classes in `index.css` for brand-specific patterns (buttons, typography, animations)
- Editorial dark theme: #0C0C0C background, #D4B67E champagne gold accent, #F5F0EB warm white text
- Cards: rounded-2xl, subtle borders (--border), transparent surface backgrounds
- Buttons: `.btn-primary` (outline, inverts on hover) and `.btn-text` (minimal, accent on hover)
- Labels: `.text-label` (uppercase, tracked, accent-colored)
- Headings: `.text-display` (DM Serif Display, tight leading)

## Design Direction

Editorial dark aesthetic — minimal, premium, typographic. Inspired by high-end editorial sites, Linear.app, Stripe.com, Vercel.com.

Key principles:
- Generous whitespace between sections (py-32)
- Large typography hierarchy (hero clamp 3.5-5.5rem, section titles clamp 2-3.5rem, body 0.95rem)
- Structured UI over dense text (summary bands, tag pills, artifact grids)
- Subtle animations (fade-up on scroll, stagger children, page enter)
- Restrained color palette — champagne gold accent on near-black
- Film grain texture overlay for editorial feel

**Important constraint:** Do NOT change text content, wording, or section meaning. Only improve layout, styling, UX, and visual hierarchy.

---

## Production Review Checklist (Product Director Gate)

Before publishing or deploying the portfolio, Claude Code must perform the following validation checks. If any rule fails, do not approve the change for production.

### 1. Confidentiality & Anonymity

This portfolio must not expose proprietary or confidential company information.

**Do NOT expose:**
- Internal system names
- Internal project names
- Proprietary architecture diagrams
- Real database schemas
- Internal dashboards
- Internal screenshots
- Non-public company metrics
- Sensitive operational data

**Allowed references** — content may reference experience in generalized form, such as:
- "Fortune 500 food manufacturing company"
- "Enterprise SAP S/4HANA environment"
- "30+ manufacturing plants"
- "Large-scale ERP reconciliation initiative"

**Avoid directly revealing:**
- Tyson internal tooling
- Internal program names
- Internal system URLs
- Proprietary documentation

If specific company information exists, it must be anonymized or generalized.

### 2. Data Sanitization

All example data must be synthetic or generalized.

| Good | Bad |
|------|-----|
| Plant A, Plant B, Plant C | Springdale Plant 14, Tyson Plant 7 |
| Material ID: MAT-00123 | Real SAP material numbers |

### 3. Case Study Compliance

Case studies must:
- Focus on problem solving and product thinking
- Avoid exposing internal documentation
- Avoid showing real SAP screenshots
- Avoid showing proprietary SQL queries tied to real schemas

If SQL examples are shown:
- Table names must be generalized
- No internal schemas
- No production queries

| Good | Bad |
|------|-----|
| `SELECT component, usage_percent FROM recipe_components` | `SELECT * FROM sap_p02.plmz` |

### 4. Portfolio Narrative Safety

Case studies should communicate:
- Product ownership
- Systems thinking
- Data reconciliation strategy
- Cross-team collaboration

But **not** internal operational detail.

| Good | Bad |
|------|-----|
| Led ERP reconciliation across manufacturing systems, improving data alignment between enterprise platforms. | Fixed PLMZ mapping issue between Tyson SAP plantbom dataset and BOM_MySQL pipeline. |

### 5. Personal Privacy

Validate that the portfolio does not expose:
- Personal phone number
- Home address
- Exact location
- Sensitive personal identifiers

LinkedIn and professional email are acceptable.

### 6. Content Integrity

Claude Code must not modify the meaning of written content.

**Allowed:** layout improvements, typography improvements, spacing, card layouts, animation improvements

**Not allowed:** rewriting Greg's case study narratives, changing professional claims, adding fabricated achievements

### 7. Design Consistency

Verify the design system remains intact:
- Dark editorial background (#0C0C0C)
- Champagne gold accent (#D4B67E)
- Large typography hierarchy (DM Serif Display headings)
- Minimal UI aesthetic
- Consistent card styling
- Subtle motion only

Do not introduce: new color palettes, skeuomorphic UI, light theme unless explicitly requested.

### 8. Performance Verification

Before production approval ensure:
- All page routes are lazy-loaded via React.lazy
- Bundle size remains reasonable
- No large animation libraries introduced
- Images are optimized
- Lighthouse performance score remains strong

### 9. Portfolio Signal Check

The site should clearly communicate Greg's strengths:
- Product Ownership
- Enterprise systems thinking
- SAP / ERP experience
- Data reconciliation expertise
- Cross-functional collaboration
- AI-augmented product delivery

If changes weaken this signal, reject them.

### 10. Final Approval Rule

Claude Code must verify:
- Confidentiality rules satisfied
- No proprietary information exposed
- Portfolio narrative remains accurate
- Design system intact
- Performance acceptable

If all checks pass: **Production release approved.**
