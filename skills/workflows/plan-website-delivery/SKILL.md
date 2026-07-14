---
name: plan-website-delivery
description: turn approved product, site, and design contracts into a tracer-first delivery plan with vertical tickets, blocking edges, acceptance criteria, required disciplines, fresh-context boundaries, and a current execution frontier. use before implementation or when a large website needs to be remapped.
disable-model-invocation: true
---

# Plan Website Delivery

Produce a delivery topology, not a chronological task dump.

## Preconditions

- `PRODUCT.md`, `SITE-CONTRACT.md`, and `DESIGN.md` are approved.
- Stack capabilities required for the first slice have evidence-backed statuses.

## Process

1. Read all durable artifacts and identify the highest-risk assumptions.
2. Select the smallest complete **tracer experience** that tests strategy, proof, visual direction, Etch, ACSS, responsive behavior, and browser verification together.
3. Define tracer acceptance criteria before creating the remaining tickets.
4. Break remaining scope into vertical, user-observable tickets. Use [ticket-contract.md](references/ticket-contract.md).
5. Record blocking edges and the current frontier. Avoid horizontal tickets such as “write all CSS” or “make every page responsive.”
6. Keep each substantial ticket small enough for a fresh agent context.
7. Record the plan in `docs/site/delivery-plan.md` and update `DELIVERY-STATE.md`.
8. Present the tracer and topology for approval.

## Completion criterion

The first executable ticket is unblocked, every ticket delivers a coherent experience or system capability, dependencies are explicit, and another agent can select the current frontier without reconstructing the plan from conversation history.
