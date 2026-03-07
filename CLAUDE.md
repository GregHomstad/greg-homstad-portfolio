# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Greg Homstad. React SPA deployed on Vercel.

## Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/postcss` plugin)
- react-router-dom v7 (BrowserRouter, client-side routing)
- react-helmet-async (SEO meta tags)
- Fonts: "Exo 2" for headings, "Roboto Mono" for body (loaded via Google Fonts in `index.html`)
- Design tokens as CSS custom properties in `src/index.css` (--brand, --accent, --bg, --surface, --text, --muted, etc.)

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build (type-check then bundle)
npm run lint     # ESLint
npm run preview  # Serve production build locally
```

No test suite exists. There is no `npm test` command.

## Architecture

- `src/App.tsx` — Shell: BrowserRouter > Navigation + `<main>` with routes + Footer
- `src/router/routes.tsx` — All route definitions. `/resources/templates` must precede `/resources/:slug`
- `src/pages/` — Page-level components (Home, Resume, CaseStudies, CaseStudyDetail, Resources, ResourceDetail, Templates)
- `src/components/sections/` — Home page sections (Hero, About, WhatIDo, HowIThink, Impact, EnterpriseStack, FeaturedCaseStudies, Contact, SkillsVisualization)
- `src/components/layout/` — Navigation, Footer, ParticleBackground (lazy-loaded)
- `src/components/ui/` — Reusable primitives (Button, Card, Badge, Tag)
- `src/data/` — Static content data (caseStudies.ts, resources.ts, templates.ts). No backend.
- `src/index.css` — Design tokens, global resets, utility classes (.brand-gradient, .btn-brand, .btn-ghost, .card-shadow, etc.)

## Styling Conventions

- Use Tailwind utility classes as primary styling method
- Custom CSS classes in `index.css` for brand-specific patterns (gradients, shadows, buttons)
- Color palette: white background, cyan (#0DCFBA) to purple (#6B5EF8) gradient accent, dark gray text (#1D1D1F)
- Cards: rounded-2xl, subtle borders (--border), soft shadows (.card-shadow)
- Buttons: .btn-brand (filled gradient) and .btn-ghost (outline) with hover lift animations

## Design Direction

This site targets an Apple-style aesthetic: minimal, premium, airy. Design inspiration from Apple.com, Linear.app, Stripe.com, Vercel.com.

Key principles:
- Generous whitespace between sections
- Large typography hierarchy (hero 64-80px, section titles 36-48px, body 16-18px)
- Structured UI over dense text (feature cards, stat blocks, highlight panels)
- Subtle animations (fade-in on scroll, hover lift on cards)
- Restrained color palette

**Important constraint:** Do NOT change text content, wording, or section meaning. Only improve layout, styling, UX, and visual hierarchy.
