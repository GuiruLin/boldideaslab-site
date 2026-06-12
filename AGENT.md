# AGENT COLLABORATION LOG

Last updated: 2026-04-16  
Status owner: current working agent (must update at end of each meaningful session)

This file is the operational memory for future AI agents and human collaborators.
If any document conflicts with this file, treat this file as the current source of truth.

---

## 1) Current project state

- Framework/base architecture is stable (`Next.js App Router` + `components/pages/*` pattern).
- Core pages have been rebuilt with bilingual content and structured sections:
  - `/`, `/about`, `/programmes`, `/work`, `/insights`, `/contact`, `/eduos`
- Media system is implemented under `public/media/**` with WebP runtime assets.
- Founders section includes owner-approved Jacky CN/EN copy (do not rewrite tone casually).
- `media_backup/` stores non-runtime originals and is ignored by git/deploy.
- Latest pushed commit at this checkpoint: `bcd9830`.

---

## 2) Canonical files to read first

1. `README.md` (stack/routes/run basics)
2. `AGENT.md` (this file; live collaboration state)
3. `ITERATION_INSIGHTS.md` (commit-by-commit rationale log)
4. `public/media/MEDIA_STATUS.md` + `public/media/ASSET_CATALOG.md` (media policy + mapping)
5. `messages/en.json` + `messages/zh.json` + target `components/pages/*.tsx`

Use `PROJECT_STATUS.md` and `CONTENT_STATUS.md` as historical context only unless refreshed.

---

## 3) Non-negotiable collaboration rules

- Do not invent or embellish factual claims (awards, partnerships, outcomes, deadlines, contact promises).
- Keep `messages/en.json` and `messages/zh.json` key structures synchronized for edited sections.
- Prefer editing dictionary copy over hardcoding page text in TSX.
- Preserve verified founder copy exactly when requested by owner.
- Keep runtime media in `public/media/**`; keep non-runtime originals in `media_backup/**`.
- Avoid broad refactors during content/UI iterations; ship focused, reversible changes.

---

## 4) Current priorities (next work waves)

### Wave A — UI/UX unification
- Unify spacing rhythm, typography hierarchy, and section transitions across all pages.
- Normalize CTA styles and button semantics across routes.
- Review mobile readability density on long pages (`home`, `work`, `about`, `eduos`).

### Wave B — Branding system hardening
- Finalize logo usage rules and apply consistently in nav/footer/metadata/social preview.
- Define bilingual style policy (where mixed EN/ZH is allowed vs not allowed).
- Standardize tone by page role: conversion pages vs editorial pages.

### Wave C — Conversion polish
- Finalize Contact form URL / QR assets and wire production values.
- Recheck programmes/contact fact consistency before launch.
- Add lightweight QA pass for locale switching and copy parity.

---

## 5) Session update protocol (mandatory)

After each meaningful session, update this file:

1. Add one entry to `## 6) Session log` (date, author/agent, scope, files, risks, next step).
2. If a commit is created, append analysis to `ITERATION_INSIGHTS.md`.
3. If media paths/policy change, update:
   - `public/media/MEDIA_STATUS.md`
   - `public/media/ASSET_CATALOG.md`
4. If onboarding/read-order changes, update `README.md`.

Do not leave the project with undocumented structural decisions.

---

## 6) Session log

### 2026-04-14 — Agent session (docs + media consolidation)
- Scope:
  - Audited pending changes and removed low-value duplicate media from `public/media`.
  - Aligned `ASSET_CATALOG.md` and `MEDIA_STATUS.md` with actual WebP runtime policy.
  - Wired Work page media usage and committed/pushed all pending assets/docs.
  - Added `b2b5674` entry to `ITERATION_INSIGHTS.md`.
- Main files touched:
  - `components/pages/WorkPage.tsx`
  - `public/media/ASSET_CATALOG.md`
  - `public/media/MEDIA_STATUS.md`
  - `ITERATION_INSIGHTS.md`
  - `.gitignore`
- Commit(s):
  - `bc27e70` — media wiring + stale media cleanup.
- Risks to monitor:
  - Future docs can drift again if AGENT/session protocol is not followed.
  - Contact final production assets (form URL/QR) still require explicit confirmation.
- Suggested next step:
  - Start Wave A UI/UX unification with a single page baseline (recommend `/home`) and then propagate.
### 2026-04-16 — Local iteration (Antigravity + follow-up)
- Note: earlier notes referenced an expected commit; those changes were not pushed until reviewed.
- Scope included: Vision endorsement i18n, form viewform URL, marquee experiments, workshop photo path fixes.

### 2026-04-16 — Polish pass (forms.gle, Vision WebP, Work/About UX)
- Scope:
  - Contact form URL → `forms.gle` short link (bilingual).
  - Vision Academy logo: runtime `vision-academy.webp`; original JPG moved to `media_backup/from_public_media/partners/`.
  - Work feedback: removed infinite marquee (overlap/motion concerns); responsive card grid with warmer layout; cleared placeholder screenshot copy on feedback.
  - Work photos: third workshop caption + `lg:grid-cols-3` so three workshop images show in one row on large screens.
  - About story: compact left-border timeline with `timelineHint` (less empty left column than before).
  - Replaced unprofessional “即将更新 / coming soon” media labels where assets exist (projects, recognition, about hero, insights cover).
- Risks to monitor:
  - Keep endorsement and form URLs owner-approved; update `AGENT` when they change.

### 2026-04-16 — UX layout polish for Contact & EduOS
- Scope:
  - `EduOS`: Rebuilt the `why` grid layout to mirror strict left-aligned editorial Apple-style logic (`body` flows right after `title` on the left; Checklist component vertically centered on the right).
  - `Contact`: Redesigned `enquiry` section away from the previous heavy left/right grid with cross-sells. The new contact section acts purely as a conversion funnel via a minimal, centered, single-column design. Completely eliminated confusing redundant text (like duplicate `formStatus`) and removed extraneous cross-sell options.
- Files touched:
  - `components/pages/EduosPage.tsx`
  - `components/pages/ContactPage.tsx`
- Note: User preferred breaking the left-alignment rule ONLY for the Contact action-page to establish it clearly as a "letter-style" submission modal.

### 2026-04-16 — Branding + SEO + icon stack completion
- Scope:
  - Added site metadata stack in `app/layout.tsx` (canonical, OpenGraph, Twitter, icons, metadataBase).
  - Added generated routes for `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`.
  - Introduced app-level icon files (`icon.png`, `apple-icon.png`, `favicon.ico`) and social preview images.
  - Wired navbar logo to latest brand source and refined logo/text pairing behavior.
- Files touched:
  - `app/layout.tsx`
  - `app/manifest.ts`
  - `app/robots.ts`
  - `app/sitemap.ts`
  - `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`
  - `app/opengraph-image.png`, `app/twitter-image.png`
  - `components/layout/Navbar.tsx`
  - `public/brand/*`
- Commit(s):
  - `bcd9830` — branding assets + SEO metadata stack.
- Risks to monitor:
  - Browser favicon cache can mask updates; hard refresh may be required during validation.
  - OG/Twitter image strategy should remain "no distortion" (fit + background) unless owner requests otherwise.
