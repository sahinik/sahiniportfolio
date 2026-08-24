# Sahini Komandla — Portfolio

Personal portfolio site for a UX/product designer whose work bridges physical
and digital experiences. Built with Next.js (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion.

## Status

Homepage and About are implemented from the Figma file
(`clU6LJwZTxwmRMvEDen2sx`) — real design tokens, real project titles, real
bio copy, real photography. Work index, the case-study template, Playground,
and Resume aren't designed in Figma yet, so they extend the same visual
system by hand.

**Known gaps / things to revisit:**
- The page background color (`--color-paper` in `globals.css`) isn't a
  Figma variable — it's a close visual approximation, not an exact hex.
- Case studies only have title/category/cover image from Figma — the body
  sections are placeholder ("write-up coming soon") until real content
  exists. See `src/content/projects/`.
- "experience" on the About page was an empty box in Figma — implemented as
  a simple placeholder timeline (`src/components/about/Experience.tsx`).
- The footer's "museum" nav item doesn't have a page yet — routed to
  `/playground` as the closest match; confirm intent.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

Colors, type scale, and the button/card specs live in
`src/app/globals.css` (CSS variables) and were pulled directly from the
Figma file's published variables — see the comment at the top of that file.

## Adding a case study

Add a new file in `src/content/projects/` following the `Project` type in
`src/types/project.ts`, then import and add it to the array in
`src/content/projects/index.ts`. The route `/work/[slug]` picks it up
automatically via `generateStaticParams`.

## Structure

- `src/app/` — routes (home, work index, case study template, about,
  playground, resume)
- `src/components/layout/` — header, footer, page transitions, custom cursor
- `src/components/ui/` — buttons, cards, bunny mark, section wrapper
- `src/components/home/`, `src/components/about/` — page-specific sections
- `src/components/case-study/` — case-study section renderer
- `src/content/` — site copy and project data
- `src/lib/` — motion tokens, reduced-motion hook, metadata helper
- `public/images/` — assets pulled from Figma dev-mode, resized/compressed
