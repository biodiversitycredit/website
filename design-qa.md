# Design QA

**Source visual truth**

- `selected-reference.png`
- 1586 × 992 px, desktop concept, normalized to 1365 × 934 for the full-view comparison.

**Implementation evidence**

- `implementation-desktop-final.png`
- Browser-rendered capture: 1348 × 926 px.
- Cloud-browser CSS viewport: 1363 × 936, device pixel ratio 1.
- State: homepage, top of page, default project selected.

**Comparison evidence**

- Full view: `qa-comparison.png`
- Focused hero typography and CTA region: `qa-hero-comparison.png`
- The focused comparison was required because the Persian display type, line wraps, CTA proportions, and secondary-copy hierarchy are central to the selected direction.

**Findings**

- No actionable P0, P1, or P2 mismatch remains.
- Fonts and typography: Estedad Variable reproduces the broad editorial Persian display character and Vazirmatn Variable keeps long-form UI copy readable. Heading scale, two-line wrapping, turquoise emphasis, and optical weight match the source hierarchy.
- Spacing and layout rhythm: the final desktop pass restores the source's left-copy/right-arch composition, preserves the wide negative-space field, and keeps the slim standards band directly below the hero. The project module continues below the fold intentionally so the responsive product can expose a complete registry flow rather than freeze the source mock's overlapping preview.
- Colors and visual tokens: midnight indigo, mineral turquoise, warm bone, brick, and saffron accents align with the source. Contrast remains readable in the hero, buttons, and data band.
- Image quality and asset fidelity: the bird arch, brand mark, and wetland project image are dedicated raster assets. They match the selected Iranian architectural and avian art direction; no placeholder, CSS drawing, handcrafted SVG, or emoji substitutes are present.
- Copy and content: the selected headline is preserved. Supporting copy was tightened into a credible registry proposition, and the visible version 0.3 data-source link uses the supplied Google Sheet URL.
- P3: the dedicated bird panel is more naturalistic and materially textured than the flatter mock illustration. This is retained because it grounds the identity in the supplied Shazdeh Garden reference without affecting hierarchy or usability.

**Interaction and runtime checks**

- Tested the primary “ثبت پروژه جدید” flow from opening the dialog through required-field entry, action selection, successful submission, and closing the success state.
- Tested switching the featured project through its tab controls.
- Tested anchor navigation and the external version 0.3 data-source link configuration.
- App-origin browser console errors: 0. Browser-extension noise was excluded from the app-console count.
- Production build: passed.
- Sites packaging tests: 4 passed, 0 failed.

**Comparison history**

1. Initial browser capture found a P1 composition mismatch: the hero copy and bird arch were horizontally reversed from the selected source.
2. Fixed the grid direction while preserving RTL inside each content region.
3. Recaptured at the same homepage state and compared the normalized full view and focused hero region. The source's left-copy/right-arch composition, hierarchy, palette, and action grouping now align.

**Open questions**

- None blocking this build. Mobile-specific visual fidelity is governed by the implemented responsive rules; the selected source itself is desktop-only.

**Implementation checklist**

- [x] Selected direction recreated as a responsive RTL product.
- [x] Dedicated identity, hero, and project assets installed.
- [x] Primary registration interaction works end to end.
- [x] Google Sheet version 0.3 URL applied.
- [x] Browser and console checks passed.
- [x] Production and Sites packaging checks passed.

**Follow-up polish**

- A future brand pass can redraw the bird assembly as a custom vector family after the visual identity is legally and culturally reviewed.

final result: passed
