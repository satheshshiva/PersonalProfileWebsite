<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# sathesh.us — agent guide

Personal site for Sathesh Sivashanmugam, Sr. Cybersecurity Engineer II at American Express. Self-hosted; statically exported.

## Stack

- Next.js 16 (App Router, **`output: "export"`** — static site, no server runtime)
- React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · lucide-react
- Fonts: Inter (body) + Space Grotesk (display) via `next/font`

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # writes static site to ./out
```

There is no `npm start` for production — this is a static export. To preview the built site, serve `./out` with any static server.

## Content updates

**`src/content/profile.ts` is the single source of truth** for every word on the site: name, title, bio, experience entries, projects, skills, certifications, education, socials. Edit that file, run `npm run build`, done.

To replace the downloadable resume, overwrite `public/Sathesh_Sivashanmugam.pdf` (the filename is referenced from `profile.ts`, `Hero.tsx`, and `Nav.tsx` — keep them in sync if you rename it). PDF metadata (`Title`, `Author`) is what browsers show in the tab when viewing — set these with `exiftool` if replacing the file.

## File map

```
src/
├── app/
│   ├── layout.tsx          metadata, fonts, theme root
│   ├── page.tsx            composes all sections in order
│   └── globals.css         theme tokens (--color-*), keyframes, .gradient-text, .grid-bg, .card-glow, .marquee
├── components/
│   ├── Nav.tsx             sticky anchor nav (client)
│   ├── Hero.tsx            client — Framer Motion + Starfield
│   ├── About.tsx           server
│   ├── Experience.tsx      server
│   ├── Projects.tsx        server — handles link vs. no-link cards
│   ├── Skills.tsx          server
│   ├── Contact.tsx         server — mailto CTA + socials
│   ├── Footer.tsx          server
│   ├── GradientText.tsx    server primitive
│   ├── MagneticButton.tsx  client — cursor-magnet wrapper
│   ├── Reveal.tsx          client — Framer Motion scroll reveal
│   ├── SpotlightBackground.tsx  client — cursor-following radial glow
│   ├── Starfield.tsx       client — canvas particles in hero
│   └── BrandIcons.tsx      inline SVG (LinkedInIcon) — lucide-react no longer ships brand icons
└── content/
    └── profile.ts          ← edit this to change site copy
```

## Conventions

- **Server components by default**. Add `"use client"` only for interactivity (motion, refs, event handlers, browser APIs). Server components cannot pass functions/handlers as props, and `output: "export"` builds will fail at prerender time if they try.
- **Don't import `Linkedin` from `lucide-react`** — it isn't exported in the installed version. Use `LinkedInIcon` from `src/components/BrandIcons.tsx`. Add other brand icons there as inline SVGs.
- **Type the data arrays in `profile.ts` with `as Type[]`**, not `satisfies Type[]`. Using `satisfies` narrows away optional fields (`link?` on `Project`), which breaks consumers that check for them.
- **Theme tokens** are declared in `globals.css` under `@theme inline` (`--color-cyan`, `--color-violet`, `--color-pink`, `--color-muted`, `--color-surface`, etc.) and consumed via Tailwind utilities like `bg-cyan/10`, `text-muted`, `border-white/10`.
- Animations come from three reusable primitives — prefer composing them over rolling new motion code: `Reveal` for scroll-in, `MagneticButton` for hover-magnet, `GradientText` for the animated gradient on headings.
- All external links: `target="_blank" rel="noopener noreferrer"`.

## Deploy

`npm run build` produces a fully static site in `out/`. Upload that directory to any static host (S3+CloudFront, Cloudflare Pages, Netlify, GitHub Pages, Nginx). DNS for `sathesh.us` is managed by the user — don't touch it.
