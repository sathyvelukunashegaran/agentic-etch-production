---
name: ask-etch-production
description: route the user to the correct human-invoked website production workflow based on durable project state, uncertainty, design approval, ticket topology, rendered evidence, and shipping readiness.
disable-model-invocation: true
---

# Ask Etch Production

Recommend the next workflow. Do not run another human-invoked workflow on the user's behalf.

## Routes

- Project artifacts or capability evidence are missing: `/setup-etch-production`.
- Audience, offer, voice, conversion, or proof remains unclear: `/grill-website`.
- Product context is approved but page contracts are missing or stale: `/specify-website`.
- The site contract is approved but visual direction is absent or unapproved: `/shape-website`.
- Product, site, and design contracts are approved but no tracer topology exists: `/plan-website-delivery`.
- An approved ticket is on the current frontier: `/implement-website-ticket`.
- A tracer, release candidate, or suspicious regression needs independent verification: `/review-website`.
- Whole-site review passed and launch safety is ready: `/ship-etch-site`.
- A user invokes the v0.1 `/deliver-etch-site` command: use that compatibility router to identify one of the v0.2 workflows above.

## Conditional branches

- Missing external facts: use a research capability, save cited findings, then return to the active workflow.
- A decision needs something concrete to react to: create the cheapest throwaway prototype that answers that question.
- Scope exceeds one planning context: create a decision map before delivery planning.
- A defect resists a first correction: establish a reproduce, minimise, hypothesise, instrument, fix, and regression-check loop.

## Response

State the workflow, why it fits, preconditions, expected durable artifact, and any blocker that prevents starting it.
