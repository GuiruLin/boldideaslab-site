# Media Asset Guide

This folder stores all website media assets used by the Next.js app.

## Why this exists
- Keep asset locations predictable across humans and AI agents.
- Avoid dumping files directly under `public/`.
- Make future scaling easier (new pages, more galleries, localization variants).

## Base rule
- Put assets under: `public/media/<page>/<module>/...`
- Access in code via URL path starting with `/media/...`
  - Example file: `public/media/work/projects/color-theory/cover.webp`
  - Example URL: `/media/work/projects/color-theory/cover.webp`

## Naming conventions
- Prefer lowercase and kebab-case.
- No spaces in filenames.
- Use descriptive names, not camera defaults.
- Preferred extensions:
  - Photos/screenshots: `.webp` (preferred), `.jpg` (fallback)
  - Logos/graphics: `.svg` or `.png`
- Suggested patterns:
  - Single main image: `cover.webp`
  - Multiple images: `01.webp`, `02.webp`, `03.webp`
  - Carousel images: `carousel-01.webp`, `carousel-02.webp`
  - Testimonial screenshots: `quote-01.webp`, `quote-02.webp`
  - QR code: `qr-main.png`

## Recommended dimensions (practical defaults)
- Hero / section cover: 1600x1000
- Card thumbnail: 1200x675 (16:9)
- Portrait founder image: 1200x1500 (4:5)
- Screenshot / quote image: 1200x900
- QR code: 1024x1024 (PNG)

## Priority order (fill first)
1. `work/projects/*` and `work/recognition/*` (strongest proof assets)
2. `contact/enquiry/qr` (conversion-critical)
3. `about/founders/*` (trust-critical)
4. `home/proof-gallery` and `home/testimonials`
5. `insights/*` and `eduos/*` concept visuals

## Working style for now
- It is okay to keep one image per module at first.
- Add more files only when content is ready.
- Do not force full population of every folder yet.

## Notes
- `.gitkeep` files exist only to preserve empty folders in git.
- Replace placeholder visuals in code gradually as assets become available.

## HEIC conversion (recommended)
- Preferred for problematic HEIC files:
  - `heif-convert input.heic output.jpg`
- Optional web optimization:
  - `ffmpeg -y -i output.jpg -q:v 70 output.webp`
- Why this path:
  - Some HEIC files can decode incorrectly (black output) with certain tools.
  - `heif-convert` has been more reliable for these assets in this project.
