# Media Implementation Status

Last updated: 2026-04-16

This file explains what is finished, what is pending, and why decisions were made.

## 1) Scope completed

- Created a page/module media structure under `public/media/`.
- Imported reference assets from `../reference_materials/**/素材/**`.
- Skipped assets explicitly marked as discarded (`舍弃删除`, `废弃删除`).
- Converted problematic HEIC workshop files to valid JPG with `heif-convert`.
- Generated WebP variants for all imported PNG/JPG files.
- Wired real assets into key pages:
  - `work` (projects, recognition, feedback, photos)
  - `about` (hero visual, founder portraits)
  - `programmes` hero image
  - `insights` (Oxford PhD conversation cover)

## 2) Current format policy

- Runtime/deploy format: use `.webp` in page code where available.
- Source preservation: keep original JPG/PNG files in `media_backup/from_public_media/` (outside `public/`).
- Why:
  - Better web performance.
  - Smaller deploy payload for Vercel.
  - Non-destructive workflow for future edits (backup files are still kept locally).

## 3) What is already wired in code

### `/work`
- Project cards use:
  - `/media/work/projects/*/cover.webp`
- Recognition cards use:
  - `/media/work/recognition/spring-gala/*.webp`
- Feedback cards use:
  - `/media/work/feedback/*.webp`
- Photo groups use:
  - `/media/work/photos/workshop/*.webp`
  - `/media/work/photos/online-course/*.webp`

### `/about`
- Hero visual uses:
  - `/media/about/hero-carousel/workshop-student-pitch-cover.webp`
- Founder portraits use:
  - `/media/about/founders/lynn/profile.webp`
  - `/media/about/founders/jacky/profile.webp`

### `/programmes`
- Hero now uses:
  - `/media/programmes/hero/5-week-sprint-camp.webp`
- Partner endorsement logo (runtime):
  - `/media/partners/vision-academy.webp` (original JPG in `media_backup/from_public_media/partners/`)

### `/insights`
- Oxford PhD conversation card uses:
  - `/media/insights/conversations/covers/oxford-phd-interview.webp`

## 4) What is imported but not yet wired

- Additional About hero carousel images under:
  - `public/media/about/hero-carousel/`

Reason: these are useful assets, but not all have dedicated UI slots yet.  
Note: duplicate seed/backup files were removed from `public/media` to keep deploy payload lean.

## 5) Title/subtitle strategy (for future AI + operators)

### Decision rule
- If an image is context-heavy (workshop moment, screenshot, testimonial):
  - Use a short **main title** (scene/category).
  - Add a clarifying **subtitle** (what exactly happened).
- If an image is a direct project cover (e.g. Color Theory):
  - Main title can be project name.
  - Subtitle optional unless ambiguity exists.

### Why this rule
- Many screenshots are not self-explanatory without context.
- Captions reduce interpretation errors for parents/partners.
- Keeps bilingual editing predictable when content changes later.

### Where captions are defined now
- Suggested caption mapping is documented in:
  - `public/media/ASSET_CATALOG.md`

## 6) Known pending decisions

- Whether Home should display a real rotating carousel now or keep current abstract style.
- Whether Contact should replace QR placeholder with a real QR image now that form URL is live.
- Final bilingual caption style policy (EN-only, ZH-only, or mixed in selected sections).

## 7) Recommended next pass

1. Add at least 1 real image to Home hero/proof area.
2. Decide and wire Contact QR asset once final form URL is approved.
3. If About hero should rotate, implement a simple 3-5 image carousel from existing imported files.
4. After media is stable, run one optimization pass (dimensions/quality budget) before launch.
