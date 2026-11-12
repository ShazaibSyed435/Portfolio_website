# Syed Shazaib Zaheer portfolio

Next.js App Router application using JavaScript/JSX, Tailwind CSS 3, Framer Motion, and Lucide icons.

## Run locally

Use Node.js 20.9 or newer and npm. Copy .env.example to .env.local and set your public GitHub and LinkedIn URLs plus contact email. Existing VITE_EMAIL, VITE_GITHUB_URL, and VITE_LINKEDIN_URL values in .env are also supported; NEXT_PUBLIC values take precedence. Only public contact details are passed from the server to the animated components. Keep any future backend credentials server-side, without a NEXT_PUBLIC prefix.

Run npm install, then npm run dev. For production, run npm run build followed by npm start. Run npm run lint for static checks.

## Structure and behavior

- src/app/layout.jsx: server layout, global styles, and the original SEO/social metadata.
- src/app/page.jsx: server-rendered home page composing the original sections.
- src/components: preserved JSX sections; animated sections use client boundaries for Framer Motion. The header owns its scroll listener and mobile-menu state.
- src/app/loading.jsx, error.jsx, and not-found.jsx: loading, retry, and 404 experiences.
- src/lib/site-config.js: server-side environment lookup for public contact links, including legacy Vite names.
- public/Syed_Shazaib_Zaheer.pdf: original resume download.

The original site has one page at / with #about, #skills, #experience, #projects, and #contact anchors. These remain on the home page to preserve smooth scrolling and existing links. Native anchors are retained for same-page scrolling, external profiles, mail, telephone links, and the resume; Next Link handles route navigation in the fallback pages. There are no image assets in the original UI, so next/image is not needed.

The active site has no authentication, backend requests, or contact submission form. The unused Contact copy.jsx is retained for reference, including its inactive commented form. The Supabase dependency is retained but was not used by the original application.

## Background atmosphere

`src/components/AnimatedBackground.jsx` mounts once in the root layout, behind the page content. Its reusable layers live in `src/components/background/`: `AuroraGradients.jsx`, `ParticleField.jsx`, `FloatingObjects.jsx`, and `PerspectiveGrid.jsx`. Their scoped gradients, keyframes, glass reflections, and perspective transforms are in `atmosphere.module.css`. Existing section backgrounds are translucent so the same atmosphere continues throughout the portfolio. The previous page, hero, and contact background glows and unused global animation helpers were removed.

The base is charcoal (#08090D), with navy shading and slow blue, violet, indigo, and cyan light. Glass spheres, a translucent CSS cube, and a faint perspective grid add depth without WebGL, Three.js, or new dependencies. The existing foreground colors, typography, card layouts, section content, and navigation are preserved.

Pointer and scroll parallax update CSS variables through refs; they do not update React state. That animation loop stops when input settles. The particle canvas uses cached glow sprites, at most 44 particles on desktop, 28 on tablet, and 16 on mobile. Drawing is capped at 30 FPS on desktop/tablet and 20 FPS on mobile, with a 2.5-megapixel canvas budget and lower mobile pixel density. Smaller screens hide the 3D objects and one aurora layer.

All background elements are hidden from assistive technology and cannot intercept pointer input. Reduced motion keeps a static atmosphere and disables cursor/scroll parallax; changes to that preference take effect immediately. Background animations pause in hidden tabs. Effects clean up listeners, observers, and animation frames. When a 2D canvas is unavailable, the CSS atmosphere remains visible.

## Verification

The production build and ESLint checks pass. Chrome verification at 320px, 390px, 768px, and 1440px covered section navigation, mobile menu behavior, animations, contact destinations, the resume download, metadata, browser/hydration errors, and the 404 return link. Direct section URLs also restore the section scroll after hydration.

The atmosphere update passed 27 existing functionality checks and 25 background checks in Chrome. Before/after comparisons confirmed identical text, links, headings, and section geometry at all four widths. Additional checks verified bounded particle rendering, mouse and scroll depth, idle stopping, hidden-tab pause/resume, live reduced-motion changes, repeated preference toggles, touch input, one persistent background across route navigation, and the canvas fallback. Desktop and mobile screenshots were also reviewed.

The production dependency audit reports zero vulnerabilities. The full audit still reports 10 advisories in development-tool dependencies (9 moderate, 1 high); compatible fixes were applied without forcing major dependency changes.
