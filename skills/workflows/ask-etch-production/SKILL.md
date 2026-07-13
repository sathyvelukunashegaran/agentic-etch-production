---
name: ask-etch-production
description: route the user to the correct human-invoked etch production workflow based on the project's current state and uncertainty.
disable-model-invocation: true
---

# Ask Etch Production

Recommend the next workflow. Do not run another human-invoked workflow on the user's behalf.

## Routes

- Project memory or stack capabilities are missing: `/setup-etch-production`.
- Audience, offer, conversion, page purpose or proof remains unclear: `/grill-website`.
- The site is understood and needs a contract, tracer, component system or implementation tickets: `/deliver-etch-site`.
- The complete site has passed hardening and needs launch verification: `/ship-etch-site`.

## Conditional branches

- Missing external facts: use a research capability if the harness provides one, then return findings to the active workflow.
- A decision requires something concrete to react to: create the cheapest throwaway prototype that can answer that single question.
- The effort is too large to map within one session: use a wayfinding or decision-mapping workflow if installed; otherwise create a durable decision map before delivery.
- A rendered defect resists a first fix: establish a reproducible browser feedback loop before changing implementation.

## Response

State the recommended workflow, why it fits, its required preconditions and what durable artifact it should produce.
