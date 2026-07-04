# Content status — Bold Ideas Lab web

> Note: this file is a historical content snapshot and may lag behind current implementation.  
> Use `AGENT.md` for live progress tracking and update this file only during dedicated refresh passes.

Per-route snapshot for **structure**, **copy**, **assets**, and **rewrite priority**. Aligns with parent workspace audits (`../PROJECT_AUDIT.md`, `../CONTENT_SOURCE_MAP.md`, `../REFERENCE_EXTRACTION.md`).
Branding/SEO technical infrastructure (icons, OG, sitemap, robots, manifest) is now in place; this file focuses on page-content truthfulness and rollout readiness.

**Legend — structural status:** `stable` | `needs adjustment` | `needs rebuild`  
**Rewrite priority:** `P0` (do first) … `P3` (later)

---

## `/` — Home

| | |
|--|--|
| **Page role** | Primary entry; brand promise; funnel to Programmes / About / Contact. |
| **Structural status** | **stable** — hero → sections → CTA flow is sound. |
| **Content — usable** | Section architecture; generic value props can be refined from reference zh tone. |
| **Content — draft** | Most body copy in `messages/*.json` `home.*` is AI-first-pass English/Chinese. |
| **Content — placeholder** | Unsplash hero/studio images in `HomePage.tsx`. |
| **Content — risky / confirm** | “Parent reflection” quote; “Now enrolling”; any claim tied to a programme not yet canonical. |
| **Assets missing** | Brand photography; optional video; real testimonial assets if used. |
| **Rewrite priority** | **P1** after Programmes spec (home must match flagship story). |

---

## `/about` — About

| | |
|--|--|
| **Page role** | Trust: story, values, team. |
| **Structural status** | **needs adjustment** — philosophy `Section` uses wrong `lead` (`about.whyNow.body` under philosophy title); founder cards are placeholders. |
| **Content — usable** | Philosophy grid **structure**; reference prototypes have strong Lynn narrative + holistic framework (outside repo). |
| **Content — draft** | Current story/founders JSON is generic; replace with approved Lynn/Jacky copy. |
| **Content — placeholder** | Story column dotted panel; founder colour bars instead of photos. |
| **Content — risky / confirm** | Any founder credential or award list before legal/comms sign-off. |
| **Assets missing** | Founder photos; optional image carousel; geography line (London/Manchester vs other) per canonical spec. |
| **Rewrite priority** | **P2** — high trust value once bios approved. |

---

## `/programmes` — Programmes

| | |
|--|--|
| **Page role** | Conversion core: what we sell, for whom, price, next step. |
| **Structural status** | **stable** for a tiered/pricing grid **or** **needs rebuild** if canonical product becomes a single flagship + roadmap (IA may change). |
| **Content — usable** | Journey steps pattern; FAQ layout; promo **mechanism** (URL-based). |
| **Content — draft** | Reference `课程.html` describes **Coolest AI Projects / 5-week / £399 / workshop £349** etc.; live JSON describes **Starter/Builder/Showcase** in GBP — **product model conflict** must be resolved before this page is “true.” |
| **Content — placeholder** | Hero stock image. |
| **Content — risky / confirm** | All prices, tier names, inclusions, promo codes (`workshop`, `returning`, plus legacy `london` / `manchester`), FAQ promises. |
| **Assets missing** | Cohort photos; syllabus PDF optional; calendar graphic. |
| **Rewrite priority** | **P0** — top priority; blocks honest Home/Contact copy. |

---

## `/work` — Student Work

| | |
|--|--|
| **Page role** | Proof: real student output and social proof. |
| **Structural status** | **stable** — gallery + criteria + CTA. |
| **Content — usable** | Reference lists named projects + gallery URLs (parent `REFERENCE_EXTRACTION.md`); best external “real” anchors in the workspace. |
| **Content — draft** | Current gallery items are illustrative blurbs, not verified case studies. |
| **Content — placeholder** | Thumbnails are pattern blocks; “Mentor note” quote is synthetic. |
| **Content — risky / confirm** | External links (e.g. Vercel gallery); student names/ages on public pages; testimonial permission. |
| **Assets missing** | Project screenshots; video embeds; optional Chunwan/award graphics with approved claims. |
| **Rewrite priority** | **P2** — strong trust lift once assets and permissions clear. |

---

## `/eduos` — EduOS

| | |
|--|--|
| **Page role** | Vision: learning OS / long-term platform story — not hard product marketing. |
| **Structural status** | **stable** — notice + modules + diagram + CTA. |
| **Content — usable** | Disclaimer-style framing (“vision, not shipped product”) is directionally correct. |
| **Content — draft** | Module prose is conceptual. |
| **Content — placeholder** | Hero stock image. |
| **Content — risky / confirm** | Any implication that software is live or that modules exist as shipped features. |
| **Assets missing** | No prototype in `reference_materials/` for EduOS — diagrams/product shots if ever needed. |
| **Rewrite priority** | **P3** — keep modest until a separate product brief exists. |

---

## `/insights` — Insights

| | |
|--|--|
| **Page role** | Depth: essays, conversations, brand intellect. |
| **Structural status** | **stable** — featured grid + future sections. |
| **Content — usable** | “Coming soon” pattern is honest. |
| **Content — draft** | Reference has article **titles/blurbs** for Lynn; live site has different placeholder essay titles. |
| **Content — placeholder** | No real `href`; interview cards are shells. |
| **Content — risky / confirm** | Claims about guests (e.g. institutions named in reference) without published media. |
| **Assets missing** | Cover images; podcast/video URLs. |
| **Rewrite priority** | **P2–P3** — can track real publications as they ship. |

---

## `/contact` — Contact

| | |
|--|--|
| **Page role** | Conversion end-state: how to enquire safely. |
| **Structural status** | **stable** — inquiry cards + checklist + email panel. |
| **Content — usable** | Checklist of what to include in a message (non-binding prompts). |
| **Content — draft** | Inquiry **types** are reasonable; labels need alignment with real ops routes. |
| **Content — placeholder** | Hero stock image. |
| **Content — risky / confirm** | **`hello@boldideaslab.com`** — not confirmed by reference prototypes (they used “coming soon” for email). Any “we reply in 24h” style promise. |
| **Assets missing** | QR code; Google Form (or other) URL; confirmed social deep links. |
| **Rewrite priority** | **P1** — must not assert wrong inbox or SLA before launch. |

---

## Cross-cutting notes

- **English vs Chinese:** keep `en.json` / `zh.json` keys aligned when editing; default metadata in `layout.tsx` is English-only today.  
- **Promo:** programme prices in JSON interact with `ProgrammesPage.tsx` — changing tiers or keys requires code + JSON together.  
- **Do not ship** synthetic testimonials or unverified pricing while this file still marks them risky.
