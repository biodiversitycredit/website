# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product direction

- Selected visual target: Product Design ideation option 2, the dark-indigo assembly-of-birds direction.
- Preserve the product purpose: a credible Persian RTL registry for biodiversity projects and credits, not a cultural or tourism showcase.
- Use Iranian architectural and animal references with restraint: the tall arch and bird assembly carry the identity while data areas stay clean and modern.
- Core palette: midnight indigo, mineral turquoise, warm bone, brick, and a restrained saffron accent.
