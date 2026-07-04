# Iteration Insights

Purpose: persistent decision log for each major iteration commit.  
How to use: append one new section per commit in chronological order.  
Evaluation lens: structure quality, content confidence, product clarity, and launch risk.

---

## Commit `e2bb159` - Initial scaffold
**Message:** Initial commit: Next.js app, routing, i18n, promo pricing, and project docs

### What improved
- A complete production-capable scaffold was created in one pass: App Router routes, shared UI primitives, bilingual dictionaries, and baseline page coverage.
- Architecture quality is strong for iteration speed: route pages stay thin while content-heavy rendering lives in `components/pages`.
- i18n foundation is solid: `messages/en.json` and `messages/zh.json` established early with consistent key-based structure.
- Core commercial wiring exists from day one (`/programmes` promo query logic), enabling controlled campaign testing.
- Documentation baseline was unusually good for an initial commit (`README.md`, `PROJECT_STATUS.md`, `AI_HANDOFF.md`, `CONTENT_STATUS.md`).

### Risks and quality concerns
- Most page copy was scaffold-grade and likely AI-generated generic language, not source-backed brand content.
- Several sections implied authority and outcomes without explicit evidence links.
- Multiple placeholder-like claims were polished enough to be mistaken as verified truth.
- Visual language was coherent but still template-like in narrative depth.

### Strategic judgement
- This was a high-quality engineering start and a low-confidence content start.
- Correct decision at this stage: keep architecture, replace content.

### Recommended next improvements
1. Keep route/component architecture and avoid premature refactors.
2. Prioritize content extraction and fact-confidence mapping before visual polish.
3. Replace synthetic social proof first (highest trust risk per impression).

---

## Commit `5e1367d` - Programmes rebuild
**Message:** feat(programmes): pathway map, featured course block, arc refresh, i18n

### What improved
- `/programmes` moved from generic tier cards to a stronger product narrative: pathway map, featured course framing, and learning arc detail.
- Information hierarchy improved for conversion: "what this is" -> "how it works" -> pricing -> fit -> FAQ -> CTA.
- Bilingual updates were done in lockstep, reducing translation drift risk.
- The implementation remained data-driven through dictionaries, which keeps future copy revisions low-cost.

### Risks and quality concerns
- Product model tension appeared: featured flagship story vs existing multi-tier pricing can confuse users if not explicitly reconciled.
- Commercial specifics (hours, schedule, outcomes, showcase framing) became more concrete but not all were fully canonical.
- Some claims shifted from descriptive to promise-like language, increasing verification pressure.

### Strategic judgement
- Good and necessary move. This commit materially improved the page's usefulness.
- Bottleneck shifted from "layout quality" to "product truth alignment."

### Recommended next improvements
1. Decide canonical offer model (single flagship vs tiered pathway) and align all blocks.
2. Freeze one approved pricing-and-schedule source before further copy expansion.
3. Add internal fact tags for each public-facing operational claim.

---

## Commit `54ef8b9` - Home rebuild
**Message:** feat(home): rebuild homepage sections and align bilingual copy

### What improved
- Home moved from scaffold hero/cards into a full narrative landing page with clearer brand voice and conversion flow.
- Unsplash dependency was removed from Home, reducing generic-stock feel.
- Message architecture became stronger: positioning -> about/context -> proof -> programme invitation -> testimonials -> CTA.
- Founder visibility and proof framing increased trust potential compared to the original template.

### Risks and quality concerns
- The page became longer and denser; on smaller screens, cognitive load may rise without careful rhythm tuning.
- Several evidence blocks and quotes read as real-world proof and require source/permission confirmation.
- Mixed-language labels (intentional in places) can look inconsistent if not standardized by rule.

### Strategic judgement
- Positive iteration with meaningful brand uplift.
- Risk profile increased because credibility claims became central to the page.

### Recommended next improvements
1. Keep this structure, but tighten copy length for faster scanability on mobile.
2. Replace at least one testimonial placeholder style with a verified source-backed asset.
3. Define a bilingual style rule (when to mix EN/ZH in headings and tags).

---

## Commit `0119f6e` - About rebuild
**Message:** feat(about): rebuild page narrative and founder sections

### What improved
- `/about` shifted to a true brand-story and philosophy page with clearer intent than the original scaffold.
- Holistic framework was formalized into a reusable six-dimension model (`philosophy.items`), improving conceptual consistency.
- Founder representation became richer and more honest (Lynn detailed profile + Jacky pending state instead of invented filler).
- Approach section added practical pedagogy framing beyond abstract mission language.

### Risks and quality concerns
- Founder achievements and institutional references are high-impact trust statements and need explicit source verification.
- Strong story tone can sound definitive where data provenance is still partial.
- Visual complexity increased (many decorative layers), so readability/performance should be monitored.

### Strategic judgement
- Strong improvement in narrative coherence and brand seriousness.
- This is close to "near-final structure," but not "near-final factual confidence."

### Recommended next improvements
1. Verify each founder claim with a private source list before public launch.
2. Add a minimal internal provenance checklist for all About claims.
3. Keep Jacky section explicitly pending until approved bio is finalized.

---

## Commit `e862a84` - Work rebuild + insights log
**Message:** feat(work): rebuild proof page and add iteration insights

### What improved
- The `work` route now communicates proof better: concrete project cards, recognition block, feedback section, gallery CTA, and photos section create a clearer trust funnel.
- Content structure is significantly stronger than the original scaffold: `work.hero`, `work.projects`, `work.recognition`, `work.gallery`, `work.feedback`, and `work.photos` are explicit and maintainable.
- i18n discipline remained good: `messages/en.json` and `messages/zh.json` were updated in parallel with matching schema.
- The repo gained this persistent reflection mechanism (`ITERATION_INSIGHTS.md`), improving continuity for future agents.

### Risks and quality concerns
- Several claims are externally verifiable and should be confirmed before public launch (for example: "9M+ members", selected works, student ages, and quote provenance).
- `workshop-gallery-peach.vercel.app` is now a key external destination; decide whether this is the official long-term gallery domain.
- Multiple screenshot/photo placeholders remain ("Screenshot coming soon", workshop/online photos), which can reduce credibility if left too long.
- The page is visually rich and long; if performance drops on low-end devices, optimize decorative layers and placeholder blocks.

### Strategic judgement
- Overall direction is good for this stage. The page is much closer to a real brand/proof page than the original scaffold.
- Main caveat: content confidence is now the bottleneck, not engineering structure.

### Recommended next improvements
1. Create a fact-check table for every public claim in `work` content and mark each as confirmed/unconfirmed.
2. Replace at least one placeholder screenshot and one real event photo to reduce prototype feel quickly.
3. Add source provenance notes for testimonials (date/channel/consent status) in internal docs.
4. Standardize bilingual tone for mixed English-Chinese labels where needed.
5. After content confirmation, run one pass for accessibility and mobile density tuning on long sections.

---

## Commit `7dd7a6a` - Insights rebuild
**Message:** feat(insights): rebuild channel page structure and bilingual content

### What improved
- `/insights` was upgraded from a generic placeholder page to a channel-style information architecture with clear content lanes: founder essays, conversations, student voices, follow channels, and CTA.
- The data model is now much more publication-ready: `insights.hero`, `insights.articles`, `insights.conversations`, `insights.studentVoices`, and `insights.follow` support staged editorial rollout.
- Pending-state handling was added in both code and content (`pending` flags + visual de-emphasis), which allows honest pre-launch scaffolding without pretending everything is live.
- The page now aligns visually with the rebuilt Home/About/Programmes/Work system, improving cross-site consistency.

### Risks and quality concerns
- Editorial authority claims increased (for example named interview directions and platform channels) while much of the content is still "coming soon".
- If too many cards stay pending for too long, trust can drop because the page feels announced but not delivered.
- Mixed bilingual labels remain a style risk if no explicit language policy is documented.
- The section count and visual density increased; mobile readability and long-scroll fatigue should be validated.

### Strategic judgement
- Strong structural improvement and the right direction for a premium editorial layer.
- The main risk is not engineering but editorial operations readiness (can the team publish at the promised cadence).

### Recommended next improvements
1. Publish at least one full founder essay and one real conversation summary to de-risk the "coming soon" pattern.
2. Define a simple release checklist for each insight item (title, source, status, publish owner, publish date).
3. Add a language-mixing guideline for headings/subtitles to keep tone consistent across EN/ZH.

---

## Commit `142844b` - Contact rebuild + insights timeline expansion
**Message:** feat(contact): rebuild enquiry flow and expand iteration log

### What improved
- `/contact` shifted from email-first to enquiry-first, which better matches the current "staged launch" reality.
- The new contact model is clearer and safer: `contact.enquiry`, `contact.channels`, `contact.guidance`, `contact.prepare`, and `contact.cta`.
- Implementation quality is good: `formUrl` is read from dictionary and safely handled (button enabled only when URL exists), reducing accidental broken-link behavior.
- `ITERATION_INSIGHTS.md` was expanded into a chronological commit-by-commit knowledge log, improving continuity for future AI and human collaborators.

### Risks and quality concerns
- Core conversion still depends on a missing final form URL (`formUrl` empty), so the page communicates intent but not a complete submission flow yet.
- Several channel entries are pending placeholders; this is honest but should be resolved quickly to avoid perceived incompleteness.
- Contact guidance now includes operational claims (course cadence/format/capacity) that must stay synchronized with `/programmes`.
- The page has many decorative and placeholder UI blocks; once real QR/form assets are available, simplify where possible.

### Strategic judgement
- Correct and pragmatic step for this phase: avoids overclaiming unconfirmed contact details while preserving conversion structure.
- The strongest outcome is process maturity: product pages are now coupled with explicit iteration memory, which lowers future rework risk.

### Recommended next improvements
1. Finalize and insert the canonical form URL, then test end-to-end enquiry flow in both locales.
2. Replace QR placeholder with the real asset and add one backup text route if QR fails.
3. Keep `contact` and `programmes` operational facts synchronized via a single source note/checklist.

---

## Commit `b5d0972` - EduOS rebuild
**Message:** feat(eduos): rebuild conceptual page and clarify system layers

### What improved
- `/eduos` moved from a thin conceptual placeholder into a coherent narrative page with clearer purpose, sequence, and user guidance.
- The content model became much stronger and more explicit: `eduos.why`, `eduos.layers`, `eduos.flow`, and expanded `eduos.future` now separate present reality from future direction.
- "No fake dashboard" positioning is reinforced in both layout and copy, which protects brand trust and aligns with the project's honesty-first rule.
- Bilingual dictionaries were upgraded in parallel, preserving structure symmetry and maintainability.
- CTA logic is more practical: family-facing users are routed toward current programmes while keeping a lower-pressure contact path.

### Risks and quality concerns
- EduOS remains concept-heavy; without at least one concrete implementation artifact, some users may still read it as abstract strategy language.
- Decorative complexity increased again; mobile scanability should be validated against real reading behavior.
- Operational statements about current capabilities must remain synchronized with `/programmes` and `/contact` to avoid cross-page drift.
- The term "operating system" can imply product maturity; wording is improved but still needs careful consistency in future edits.

### Strategic judgement
- This is a necessary and high-value rewrite. EduOS now functions as a trustworthy vision page rather than speculative filler.
- The page is structurally near-ready; the next quality jump depends on adding one or two concrete proof anchors.

### Recommended next improvements
1. Add one concrete "already happening" mini-case linked to current programme evidence.
2. Define an explicit glossary for EduOS terms (system, layer, evidence, flow) to prevent wording drift across pages.
3. Run a cross-page consistency check (`programmes`/`contact`/`eduos`) for all operational claims each release cycle.

---

## Commit `b2b5674` - About copy lock + Programmes hero wiring
**Message:** feat(about,programmes): apply founder copy and hero media updates

### What improved
- Jacky's founder profile is now aligned to owner-provided CN/EN first-person copy, reducing "AI rewritten tone" risk.
- `/programmes` hero image is now wired to a real project asset (`/media/programmes/hero/5-week-sprint-camp.webp`) instead of a generic/placeholder visual feel.
- Content trust improved because founder narrative, credentials, and positioning now follow explicit source text rather than inferred edits.

### Risks and quality concerns
- Founder achievements remain high-impact claims and still require an internal verification checklist before external launch.
- If founder copy evolves later, CN/EN updates must continue to be changed together to avoid voice drift.
- Programmes hero currently relies on a single strong image; if campaign narrative expands, additional variants may be needed for reuse.

### Strategic judgement
- This is a quality-control commit: small in code footprint, high in trust impact.
- Correct move to prioritize source-faithful copy over stylistic rewriting at this phase.

### Recommended next improvements
1. Keep founder sections under an explicit "owner-approved copy only" rule.
2. Add one internal provenance note per major founder claim (award/event/date).
3. Prepare 1-2 alternate programme hero assets to support future campaign testing.

---

## Commit `bcd9830` - Branding and SEO stack finalization
**Message:** feat(branding): wire logo assets and complete SEO metadata stack

### What improved
- Added a complete indexing/discovery surface for production deployment: metadata canonicalization, `robots`, `sitemap`, and web app manifest.
- Replaced placeholder site identity with concrete runtime branding assets (navbar logo + icon files + social preview images).
- Standardized icon delivery for modern and legacy clients via `icon.png`, `apple-icon.png`, and `favicon.ico`.

### Risks and quality concerns
- Browser favicon caches can delay visual verification after deploy, causing false negatives during QA.
- OG/Twitter image generation strategy must stay consistent (avoid accidental distortion by resizing without aspect control).

### Strategic judgement
- High-leverage infrastructure commit with low UX disruption; this unlocks safer Vercel launch and cleaner link sharing.

### Recommended next improvements
1. Validate production crawl metadata in Vercel preview/production using real URL inspections.
2. Add a lightweight release checklist for branding assets (source image, crop policy, icon sanity check at 16/32/180 px).
