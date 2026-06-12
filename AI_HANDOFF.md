# AI handoff — Bold Ideas Lab web

Read this file **before** editing the site. Humans and automation should treat it as binding project context.

If this file conflicts with `AGENT.md`, follow `AGENT.md` first and then update this file.

---

## Read order

1. `AGENT.md` — live project state, active priorities, session protocol  
2. `README.md` — stack, routes, i18n, promo, run commands  
3. `ITERATION_INSIGHTS.md` — commit-by-commit decisions  
4. This file — brand boundaries, strategy, rules  
5. `PROJECT_STATUS.md` / `CONTENT_STATUS.md` — historical snapshots (refresh when needed)  

If the task is content-heavy, also open the parent workspace docs:

- `../PROJECT_AUDIT.md`
- `../CONTENT_SOURCE_MAP.md`
- `../REFERENCE_EXTRACTION.md`

Then open the relevant `components/pages/*.tsx` and the matching keys in `messages/en.json` and `messages/zh.json`.

---

## Brand boundary

- **In scope:** **Bold Ideas Lab** / **敢想实验室** only.
- **Out of scope:** Do **not** introduce **CoAI**, **CoAI Education**, or parent-org branding on this consumer-facing site unless the project owners explicitly add that requirement to this repo’s docs.

---

## Brand feel (directional)

- **Apple-like restraint:** generous whitespace, clear hierarchy, calm typography — not noisy “AI slop” layouts.
- **Palette:** cream background; **blue** primary; **gold** accents; **red** sparingly for emphasis — see `tailwind.config.ts` and `globals.css`.
- **Avoid:** dark cyber-tech futurism, bootcamp aggression, generic STEM-school clipart tone, meme-y AI hype.

---

## Audience priority (for copy and IA)

1. International families (education + outcomes + trust)  
2. UK Chinese parents (zh quality matters; cultural nuance)  
3. Potential partners (schools, orgs — clarity and credibility)  
4. Students (aspirational but respectful; not talking down)  
5. Future institutions (secondary; keep door open without enterprise jargon overload)

---

## Site strategy

- **Conversion + brand:** the site should both **convert enquiries** and **earn trust**.
- **Most conversion-sensitive:** **Home**, **Programmes**, **Contact** — pricing, promises, CTAs, and contact paths must not be invented.
- **Trust builders:** **About**, **Work** — bios, track record, real projects, testimonials only with approval.
- **Lower-pressure depth:** **EduOS**, **Insights** — vision and editorial; still no fabricated facts or fake article links.

---

## Source-of-truth rules

| Source | Rule |
|--------|------|
| **This repo’s JSON + TSX** | **Not** automatic truth for commercial facts, awards, testimonials, or contact details. |
| **`reference_materials/` (outside repo)** | Rich **draft** input; prototypes **conflict** on dates/duration/pricing details — reconcile in a **single canonical spec** before publishing. |
| **Parent audit / extraction docs** | Respect risk calls: no fake social proof, no unverified email, no conflicting programme claims. |

**Hard stops — do not invent:**

- Testimonials or attributed quotes  
- Founder credentials, employers, awards, speaking slots  
- Prices, discounts, deadlines, cohort sizes, or “limited seats”  
- Contact email, phone, form URLs, QR codes  
- Partnerships, press, rankings, or “900万用户”-style stats without approved wording  

If missing: use **honest placeholders** (“Details to be announced”, “Coming soon”) or ask the project owner — do not fabricate specificity.

---

## Working method

- **Reuse structure** (`Section`, `Card`, grids) where it still matches the approved IA.
- **Rewrite content** in `messages/en.json` / `messages/zh.json` in tandem; keep keys in sync unless the team explicitly wants locale-specific keys.
- **Images:** prefer tasteful placeholders (pattern blocks, labelled empty states) over wrong stock that implies real cohorts — until real assets exist.
- **Do not** copy raw prototype HTML/CSS into production components.

---

## Recommended page rebuild order

1. **Programmes** — depends on canonical product/pricing spec  
2. **Home** — must reflect final programme story and remove synthetic proof  
3. **About** — founder truth and philosophy  
4. **Work** — real projects, links, permissions  
5. **Insights** — titles/blurbs/links only when real or clearly marked future  
6. **Contact** — verified channels and promises  
7. **EduOS** — keep conceptual and legally safe; weakest external reference base

---

## Change discipline

- Make **targeted** edits: one route or one concern per PR/session when possible.
- After content edits: quick pass for **zh/en parity** for changed keys.
- Do not refactor unrelated components or rename design tokens for fun.
- If adding new env-dependent URLs (forms, analytics), document them in `README.md` or `PROJECT_STATUS.md` once confirmed.

---

## When in doubt

Prefer **shorter, honest, reversible** copy over impressive unverified claims. The brand goal is **premium and trustworthy**, not maximally polished fiction.
