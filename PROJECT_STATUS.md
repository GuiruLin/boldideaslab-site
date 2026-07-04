# Project status — Bold Ideas Lab web

> Note: this file is a historical phase snapshot and may lag behind active implementation.  
> Use `AGENT.md` as the live collaboration source of truth.

Last orientation: high-fidelity rebuild phase with branding + SEO stack completed and deployment-ready checks in progress.

---

## Current phase

**High-fidelity content and visual pass** on top of an existing Next.js scaffold: align copy and structure with reference prototypes and agreed brand direction; replace AI-draft and risky placeholders; leave room for final assets (photography, QR, verified contact) later.

---

## Already completed

- Next.js App Router scaffold for all main routes (see `README.md` route map).
- Shared **layout system**: `Navbar`, `Footer`, sticky nav, mobile menu, CTA patterns.
- **Bilingual UI** via JSON dictionaries + client `LanguageProvider` / `LanguageToggle`.
- **Programmes promo** gating via URL query (`ProgrammesPage.tsx` + `Suspense` on route).
- Tailwind **design tokens** aligned with brand palette (`cream`, `ink`, `blue`, `gold`, `red` in `tailwind.config.ts`).
- SEO/indexing routes and metadata stack:
  - `app/layout.tsx` metadata (canonical, OG, Twitter, icons)
  - `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`
- Brand/logo runtime assets:
  - `public/brand/*`
  - `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`
  - `app/opengraph-image.png`, `app/twitter-image.png`

---

## Structurally stable

- Route topology and `navItems` in `lib/i18n.ts`.
- Thin `app/*/page.tsx` → fat `components/pages/*` pattern.
- Reusable UI: `PageHero`, `Section`, `Card`, `FinalCta`, etc.
- i18n file split (`messages/en.json`, `messages/zh.json`) as the right place to edit copy once approved.

---

## Placeholder / draft / unapproved

- **Much of the live JSON copy** in `messages/*.json` is first-pass AI scaffold: plausible but not canonical for pricing, programme shape, testimonials, founder roster, or contact email.
- **Images:** Unsplash URLs hardcoded in page components — stock, not brand assets.
- **Social proof:** Quotes labelled generically (e.g. “Parent reflection”) are not verified testimonials.
- **Metadata:** `app/layout.tsx` uses English `meta` only; client locale does not yet drive `generateMetadata` per language.
- **Product model:** Live site uses a **three-tier** pricing story; reference prototypes describe a **different** flagship (e.g. 5-week sprint + workshop). Unify in a spec before rewriting Programmes as “truth.”

---

## Immediate priorities

1. **Canonical programme spec** (single offering vs tiers, dates, prices, locales) — owner: founders/ops; then update `programmes` in JSON + any UI that depends on tier count.
2. **Programmes page** — highest conversion risk; align structure/copy with approved spec and promo rules.
3. **Home** — replace synthetic testimonial and rhetorical “stats” with approved or honestly labelled content.
4. **About** — replace anonymous founder cards with real Lynn/Jacky story per approved bios; fix known content wiring bug (philosophy section `lead` — see `CONTENT_STATUS.md`).
5. **Work** — wire real project list and permissions; keep or drop gallery URLs per policy.
6. **Contact** — confirm email, form URL, QR; remove or soften unverified promises.

---

## Known issues (non-exhaustive)

- About page: philosophy `Section` uses **`about.whyNow.body`** as `lead` under the philosophy heading (copy/paste wiring error).
- Programme hero image URL in `ProgrammesPage.tsx` should be validated (possible typo in Unsplash id).
- Reference prototypes and live JSON **conflict** on duration, hours, cohort size, and start date — do not merge blindly (see parent `REFERENCE_EXTRACTION.md`).

---

## What not to touch blindly

- **`messages/en.json` / `messages/zh.json`:** easy to break parity or ship false commercial claims.
- **`ProgrammesPage.tsx` promo logic:** changing codes or price fields affects real URL campaigns once published.
- **`LanguageProvider`:** changing storage key or locale values breaks existing users’ saved preference.
- **Do not paste prototype HTML/CSS** from `reference_materials/` into React — extract **content and IA** only.

---

## External references (parent workspace)

- `../PROJECT_AUDIT.md` — scaffold vs content risks.
- `../CONTENT_SOURCE_MAP.md` — A–E block classification.
- `../REFERENCE_EXTRACTION.md` — extracted prototype facts and conflicts.

These files are the **reason** much of the current site copy is treated as draft until replaced.
