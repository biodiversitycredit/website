# AGENTS.md

## Design workflow

Before making substantial visual changes, use the Product Design plugin's `get-current-selection` and `get-current-theme` when those capabilities are available. Prefer preserving an approved visual direction over generating a new one unless the product direction changed materially.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact unless the deployment contract itself must change. Before a Sites handoff, run `npm run check`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product direction

- Public positioning is **initiative-first, registry-backed**.
- The current product is a research and data initiative, not an operating credit registry or marketplace.
- Preserve the long-term path: `Initiative → Methodology → Protocol → Pilot → Evidence → Credit`.
- The public site must clearly state that credits are not currently issued or traded.
- Research candidates must never be presented as registered, validated, verified, or credit-generating projects.
- Reference frameworks and institutions are sources for research, not endorsements.
- Do not publish names of individuals, prospective partners, media partners, funders, or organizations under discussion before formal public approval.
- Public numbers must be traceable to the research dataset and labeled as data-foundation statistics, not impact or credit metrics.
- Keep claims proportional to evidence. Never collapse observation, claim, validation, verification, issuance, and retirement into one status.
- Sensitive biodiversity locations must not be exposed merely to improve the map or product demo.

## Public data publishing

- Public research data is **first-party**. Do not link the public interface directly to the working Google Sheet.
- Maintain a reviewed, versioned public snapshot in `src/research-data.js` until a proper backend/data pipeline replaces it.
- `/data` is the canonical public data entry point. Collection and record pages must have stable first-party URLs.
- Search must operate over only the approved public snapshot; never leak unpublished rows by querying private sources from the browser.
- Preserve source URLs, licenses, confidence, version/access dates, validation state and caveats at record level when available.
- Do not republish restricted geometry, sensitive species coordinates, or licensed datasets beyond permitted summary use.
- Updating the snapshot requires updating or extending content-integrity tests when new public-risk categories appear.
- `scripts/prepare-sites-build.mjs` must continue producing direct data routes, `sitemap.xml`, and `robots.txt` for production discovery.

## Visual direction

- Retain the selected dark-indigo assembly-of-birds visual identity.
- Use Iranian architectural and animal references with restraint: the tall arch and bird assembly carry the identity while data areas stay clean and modern.
- Core palette: midnight indigo, mineral turquoise, warm bone, brick, and a restrained saffron accent.
- Narrative sections may feel warmer and more human, while data, methodology, and integrity sections should remain precise and institutional.
- The data portal should optimize scanability, provenance, search and record comparison rather than imitate a marketing landing page.
