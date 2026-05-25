# sathesh.us

Personal site for Sathesh Sivashanmugam. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. Exports as a fully static site so it can be hosted anywhere. 

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & export

```bash
npm run build
```

Generates a static site in the `out/` directory. Upload the contents of `out/` to any static host (S3 + CloudFront, Cloudflare Pages, Netlify, Nginx, GitHub Pages, etc.).

## Update content

All site content lives in **`src/content/profile.ts`** — name, bio, experience, projects, skills, certifications, education, socials. Edit that file and rebuild.

To replace the downloadable resume, drop a new PDF at `public/resume.pdf`.

## File map

```
src/
├── app/
│   ├── layout.tsx          metadata, fonts, theme root
│   ├── page.tsx            composes all sections
│   └── globals.css         theme tokens, keyframes, utilities
├── components/
│   ├── Nav.tsx             sticky anchor nav
│   ├── Hero.tsx            animated landing
│   ├── About.tsx           bio
│   ├── Experience.tsx      timeline
│   ├── Projects.tsx        research / recognition cards
│   ├── Skills.tsx          tech stack + certifications + education
│   ├── Contact.tsx         email CTA + socials
│   ├── Footer.tsx
│   ├── GradientText.tsx    animated gradient text primitive
│   ├── MagneticButton.tsx  cursor-magnet hover wrapper
│   ├── Reveal.tsx          scroll-triggered fade/slide
│   ├── Starfield.tsx       canvas starfield for hero
│   └── SpotlightBackground.tsx  cursor-following radial glow
└── content/
    └── profile.ts          single source of truth for site copy
```

## Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** — reveal / magnetic / hero animations
- **lucide-react** — icons
- **Inter + Space Grotesk** via `next/font`
