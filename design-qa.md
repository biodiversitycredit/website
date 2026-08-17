# Design QA — current product truth

The original visual QA was produced for a registry-first prototype. That positioning is superseded by the initiative-first direction introduced on 2026-08-17.

## What remains valid

- The dark-indigo / mineral-turquoise / warm-bone visual system.
- Estedad Variable for Persian display typography and Vazirmatn Variable for UI copy.
- The left-copy / right-arch hero composition.
- The bird assembly and restrained Iranian architectural references.
- Responsive RTL behavior and the static Sites/GitHub Pages packaging path.

## What is intentionally changed

- The site no longer presents itself as a national registration or credit-issuance system.
- Prototype project counts, issued-credit counts, verified-project badges, issuance language, and the public registration flow are removed.
- Reference organizations are treated as sources, not endorsements or alignment claims.
- The public homepage now explains the current research stage, roadmap, data foundation, and integrity rules.

## Current acceptance criteria

- Public copy states that no biodiversity credits are currently issued or traded.
- The visible roadmap follows `Initiative → Methodology → Protocol → Pilot → Evidence → Credit`.
- All visible metrics are explicitly data-foundation statistics and traceable to the research dataset.
- No individual or prospective partner names appear in public UI or metadata before formal approval.
- `npm run test:content` guards against regression to unsupported registry/issuance claims.
- `npm run build` and `npm run test:sites` must pass before deployment.
