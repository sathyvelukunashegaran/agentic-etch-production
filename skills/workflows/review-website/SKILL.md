---
name: review-website
description: run an independent whole-site review against product, site, design, evidence, component, stack, responsive, accessibility, performance, and delivery contracts using rendered browser evidence and deterministic detectors. use after tracer implementation, before shipping, or when regressions or design drift are suspected.
disable-model-invocation: true
---

# Review Website

Review independently from the implementation context whenever possible.

## Preconditions

- The review target and fixed revision are named.
- Required pages, widths, states, and journeys are listed.
- Browser access exists; otherwise the result must remain unverified.

## Process

1. Read all durable artifacts and the current delivery plan.
2. Explicitly load `rendered-review`.
3. Run deterministic browser checks first to collect objective defect evidence.
4. Review the axes independently:
   - product and conversion;
   - copy and proof;
   - approved visual direction and craft;
   - component grammar and ACSS boundary;
   - responsive behavior and accessibility;
   - Etch, WordPress, performance, console, and network integrity;
   - site-contract and ticket fidelity.
5. Record every finding with severity, evidence, violated contract, smallest credible correction, and disposition.
6. Re-run affected pages after fixes. Do not close findings from source inspection alone.
7. Update `DELIVERY-STATE.md` with verified scope, accepted deviations, blockers, and shipping readiness.

Use [review-report.md](references/review-report.md) for the output contract.

## Completion criterion

Every required page, journey, width, and state has browser evidence or is explicitly unverified. No review axis is allowed to hide another axis's failure.
