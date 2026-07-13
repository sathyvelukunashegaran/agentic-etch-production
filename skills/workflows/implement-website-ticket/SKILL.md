---
name: implement-website-ticket
description: implement one approved website delivery ticket as a complete vertical slice using evidence-backed copy, approved visual direction, verified etch and automatic.css capabilities, continuous browser iteration, deterministic checks, and an independent final review. use in a fresh context for each substantial tracer or expansion ticket.
disable-model-invocation: true
---

# Implement Website Ticket

Implement exactly one named ticket. The ticket and durable artifacts are the source of truth.

## Start

1. Read `CONTEXT.md`, `PRODUCT.md`, `SITE-CONTRACT.md`, `DESIGN.md`, `DELIVERY-STATE.md`, `docs/agents/stack.md`, `docs/site/evidence.md`, `docs/site/component-grammar.md`, and `docs/site/delivery-plan.md`.
2. Confirm the ticket is on the current frontier and all blockers are resolved.
3. Restate the user-visible outcome and acceptance criteria. Stop if a material product, site, or design decision is missing.

## Explicit discipline sequence

Load only what the ticket needs, normally in this order:

1. `website-copy` for final content;
2. `web-design` for craft and approved-direction fidelity;
3. `component-grammar` for reuse boundaries;
4. `etch` for verified builder operations;
5. `acss` for the token boundary;
6. `rendered-review` for browser evidence and final independent review.

## Build loop

Implement one observable slice at a time:

```text
implement -> render -> inspect -> compare -> correct -> render again
```

- Preserve the approved design's major ingredients.
- Cover realistic states: default, hover, focus, disabled, loading, error, success, empty, overflow, and long or short content where relevant.
- Run the deterministic browser audit described by `rendered-review`; treat it as defect evidence, never proof of completion.
- Record newly verified Etch or ACSS capabilities and limitations.
- Promote component contracts only after rendered repetition proves them.

## Close

Run an independent review against both standards and the ticket contract. Resolve findings or record accepted deviations with an owner. Update `DELIVERY-STATE.md`, the component grammar, and the delivery plan. Commit to the current branch when the environment and project policy permit it.

## Completion criterion

Every ticket criterion has rendered evidence, an explicitly accepted deviation, or a named blocker. Source inspection alone cannot produce a pass.
