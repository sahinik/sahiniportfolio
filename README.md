# Sahini Komandla — Portfolio

Personal portfolio site for a UX/product designer whose work bridges physical
and digital experiences. Built with Next.js (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion.

## Status

Structural scaffold is in place: routing, content architecture, accessible
navigation, motion primitives, and a case-study template that renders
data-driven sections (text, images, image grids, before/after, quotes,
stats, video).

**Visual design is intentionally placeholder** — colors, typography, and
imagery in `src/app/globals.css` and `src/content/` are neutral defaults
pending the real Figma direction. Swap tokens in `globals.css` and replace
placeholder copy/images in `src/content/` once ready.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a case study

Add a new file in `src/content/projects/` following the `Project` type in
`src/types/project.ts`, then import and add it to the array in
`src/content/projects/index.ts`. The route `/work/[slug]` picks it up
automatically via `generateStaticParams`.

## Structure

- `src/app/` — routes (home, work index, case study template, about,
  playground, resume)
- `src/components/layout/` — header, footer, page transitions, custom cursor
- `src/components/ui/` — buttons, cards, tags, section wrapper
- `src/components/case-study/` — case-study section renderer
- `src/content/` — site copy and project data
- `src/lib/` — motion tokens, reduced-motion hook, metadata helper
