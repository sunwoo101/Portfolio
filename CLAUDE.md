# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio for Sun Woo Kim (sunwookim.dev), deployed on Vercel.

**Routing:** React Router v7 with two routes — `/` renders `Home` + `Footer`, `*` renders `NotFound`.

**Page structure:** `Home.jsx` composes all sections in order: `Hero → About → Experience → Projects → Education → Contributions → Contact`. Each section lives in `src/Sections/`. The `NavBar` uses anchor links (`#about`, `#experience`, etc.) for in-page navigation.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. The design token palette is defined in `src/tailwind.css` under `@theme` as `--color-palette-*` custom properties (e.g. `palette-background`, `palette-accent`, `palette-border`). Use these tokens — do not hardcode colors. Inter font is loaded via CDN in `index.html`. Font Awesome 6.5 icons are also loaded via CDN.

**Shared components:** `src/Components/TechTag.jsx` renders a styled technology badge; `src/Components/SectionTitle.jsx` renders a consistent section heading.

**Analytics:** `@vercel/analytics` is rendered in `main.jsx` — no changes needed when adding content.