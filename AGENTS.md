# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run check`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

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

## Visual direction

- Retain the selected dark-indigo assembly-of-birds visual identity.
- Use Iranian architectural and animal references with restraint: the tall arch and bird assembly carry the identity while data areas stay clean and modern.
- Core palette: midnight indigo, mineral turquoise, warm bone, brick, and a restrained saffron accent.
- Narrative sections may feel warmer and more human, while data, methodology, and integrity sections should remain precise and institutional.
