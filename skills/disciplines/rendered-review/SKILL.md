---
name: rendered-review
description: review a website through rendered browser evidence across strategy, copy and proof, visual hierarchy, component integrity, responsive accessibility, stack correctness and specification fidelity. use after implementation, for regressions, or before launch.
---

# Rendered Review

**Rendered truth** means the browser's observable output outranks markup intention, builder state or the agent's description of what should happen.

## Evidence requirement

Use a real browser, screenshots, DOM inspection, accessibility information, keyboard interaction, console output and network behavior as available. If the environment cannot render the changed experience, report it as unverified and list the exact pending checks. Never infer a pass from source inspection alone.

## Review axes

Run the axes in [review-axes.md](references/review-axes.md) independently:

1. strategy and conversion;
2. copy and proof;
3. visual hierarchy and component grammar;
4. responsive behavior and accessibility;
5. Etch, ACSS and WordPress integrity;
6. site-contract fidelity.

For every finding record severity, observed evidence, violated contract or rule, and the smallest credible correction. Keep the axes separate so strength in one cannot hide failure in another.

## Completion criterion

A review is complete when every required page, target width and critical interaction has evidence or is explicitly marked unverified, and each finding has a disposition: fixed, accepted, blocked or deferred with an owner.
