# CBC Hackathon Sponsor Page

Single-page Next.js site for the Claude Builders Club (CBC) MIT Hackathon sponsorship
pitch — event overview, sponsorship tiers, timeline, and team, with a `mailto:` contact
flow. Bootstrapped with `create-next-app`, App Router + Tailwind v4.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page. Content
(sponsorship tiers, timeline, team, "why sponsor" copy) lives as plain data arrays at
the top of `app/page.tsx` — edit those directly rather than the JSX below them.

## Team photos

Team headshots are loaded via `next/image` from external URLs. Any new photo host
must be added to `images.remotePatterns` in `next.config.ts` or the build will fail
to render that image.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint-config-next`, core-web-vitals + TypeScript rules)

## Deploy

Deployed on [Vercel](https://vercel.com); any push to the default branch redeploys.
