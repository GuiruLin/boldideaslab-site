# Bold Ideas Lab — Website

**Bold Ideas Lab** (Chinese name: **敢想实验室**) is a youth-focused creative education brand: AI-assisted projects, mentorship, and outcomes-oriented learning for families who want depth beyond generic tech classes.

This repository is the **production Next.js workspace** for the public marketing site.

---

## Tech stack

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 3.x
- **lucide-react** (icons)

---

## Collaboration Start Here

For future multi-agent collaboration, read in this order:

1. `AGENT.md` (live progress, priorities, session protocol)
2. `README.md` (this file; technical map)
3. `ITERATION_INSIGHTS.md` (commit-level decision history)
4. `public/media/MEDIA_STATUS.md` + `public/media/ASSET_CATALOG.md` (media runtime + mapping)

If any older status doc conflicts with `AGENT.md`, use `AGENT.md` as canonical.

---

## Route map

| Route | App entry | Page component |
|-------|-----------|------------------|
| `/` | `app/page.tsx` | `components/pages/HomePage.tsx` |
| `/about` | `app/about/page.tsx` | `components/pages/AboutPage.tsx` |
| `/programmes` | `app/programmes/page.tsx` | `components/pages/ProgrammesPage.tsx` |
| `/work` | `app/work/page.tsx` | `components/pages/WorkPage.tsx` |
| `/eduos` | `app/eduos/page.tsx` | `components/pages/EduosPage.tsx` |
| `/insights` | `app/insights/page.tsx` | `components/pages/InsightsPage.tsx` |
| `/contact` | `app/contact/page.tsx` | `components/pages/ContactPage.tsx` |

Global shell: `app/layout.tsx` (metadata, `Navbar`, `Footer`, `LanguageProvider`).

---

## Where things live

- **Shared layout:** `components/layout/` (`Navbar`, `Footer`, `LanguageToggle`)
- **UI primitives:** `components/ui/` (`PageHero`, `Section`, `Card`, `ButtonLink`, `CheckList`, `EditorialImage`, `FinalCta`)
- **i18n copy:** `messages/en.json`, `messages/zh.json` — primary text store for both locales
- **Locale + dictionary wiring:** `lib/i18n.ts` (`navItems`, `getDictionary`, types)
- **Client language state:** `components/providers/LanguageProvider.tsx` (toggles `en` / `zh`, persists `boldIdeasLocale` in `localStorage`, sets `document.documentElement.lang`)

---

## SEO, indexing, and icons

- **Primary metadata config:** `app/layout.tsx`
  - title template, description, canonical, OpenGraph, Twitter cards, icon declarations.
- **Crawler rules:** `app/robots.ts` -> `/robots.txt`
- **Sitemap:** `app/sitemap.ts` -> `/sitemap.xml`
- **PWA manifest:** `app/manifest.ts` -> `/manifest.webmanifest`
- **Brand/icon assets in use:**
  - `app/icon.png`
  - `app/apple-icon.png`
  - `app/favicon.ico`
  - `app/opengraph-image.png`
  - `app/twitter-image.png`
  - `public/brand/logo-full.png`

---

## Promo pricing

- Implemented in **`components/pages/ProgrammesPage.tsx`**.
- Reads `?promo=` from the URL (case-insensitive). Active codes: **`workshop`**, **`returning`** (legacy-compatible: **`london`**, **`manchester`**) (see `validPromoCodes` in that file).
- When active: shows promo banner and strikethrough “original” prices; prices and copy strings come from `messages/*.json` under `programmes.pricing`.
- `app/programmes/page.tsx` wraps the page in **`Suspense`** because `useSearchParams()` is used.

---

## Run locally

```bash
cd bold-ideas-lab-web
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:3000`).

```bash
npm run build   # production build
npm run lint    # eslint
```

---

## Repo boundary

- **Inside this repo (`bold-ideas-lab-web/`):** the Next.js app, Tailwind config, and in-repo docs (`README.md`, `AGENT.md`, `ITERATION_INSIGHTS.md`, `PROJECT_STATUS.md`, `AI_HANDOFF.md`, `CONTENT_STATUS.md`).
- **Outside this repo (workspace parent):** `reference_materials/` (HTML prototypes), and analysis/handoff markdown such as `PROJECT_AUDIT.md`, `CONTENT_SOURCE_MAP.md`, `REFERENCE_EXTRACTION.md`. Treat those as **inputs** for content decisions, not as code to merge verbatim.

For live priorities and cross-agent continuity, read **`AGENT.md`** first, then **`AI_HANDOFF.md`** and historical status docs as needed.
