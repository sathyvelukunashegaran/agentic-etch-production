---
name: rendered-review
description: inspect real browser output continuously during implementation or independently after implementation using deterministic DOM checks and separate qualitative review axes for product, conversion, proof, design fidelity, component integrity, responsive accessibility, stack correctness, performance, and specification fidelity.
---

# Rendered Review

**Rendered truth** means observable browser behavior outranks source intention, builder state, or an agent's description.

## Modes

- **Continuous:** run after each meaningful vertical slice so defects shape implementation early.
- **Independent:** run from a fresh context for tracer, regression, release-candidate, or production review.

## Evidence

Use a real browser, screenshots, DOM inspection, accessibility information, keyboard interaction, console output, network behavior, and performance information as available. If the target cannot be rendered, report it as unverified.

Run the deterministic audit in [deterministic-audit.md](references/deterministic-audit.md) before qualitative critique. Detector output is defect evidence only.

## Review axes

1. product, user situation, and conversion;
2. copy, claims, and proof;
3. approved visual direction and craft;
4. component grammar and ACSS token boundary;
5. responsive behavior, states, and accessibility;
6. Etch, WordPress, console, network, and performance integrity;
7. site-contract, design-contract, and ticket fidelity.

For each finding record severity, page, viewport, state, evidence, violated contract, correction, disposition, and verification after correction.

## Completion criterion

Every required page, journey, target width, and state has evidence or is explicitly unverified. No axis may hide another axis's failure.
