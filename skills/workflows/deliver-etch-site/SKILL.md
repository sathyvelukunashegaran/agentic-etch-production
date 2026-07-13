---
name: deliver-etch-site
description: deliver an approved website through six controlled movements: understand, specify, prove a tracer experience, systematize its component grammar, expand through complete tickets and harden against rendered truth.
disable-model-invocation: true
---

# Deliver Etch Site

Use `DELIVERY-STATE.md` as a persistent execution ledger. Re-read it at the start and update it at every movement boundary. Never rely on this conversation as the only record of progress.

## Preconditions

- `/setup-etch-production` is complete.
- `SITE-CONTRACT.md` is approved, or the user accepts a scoped return to `/grill-website`.
- Etch, ACSS and browser capabilities have evidence-backed statuses.

## Movement 1: Understand

Load `website-strategy` and `proof-chain`. Confirm the contract still matches the project and record any new decision. Complete only when open questions are either resolved or explicitly block delivery.

## Movement 2: Specify

Load `website-copy` and `web-design` as needed. Sharpen page contracts, content obligations, design intent and acceptance criteria. Select the smallest end-to-end **tracer experience** that can prove strategy, content, Etch, ACSS and rendering together.

The tracer is not automatically the homepage. Choose the narrowest complete user journey with the highest architectural learning value.

## Movement 3: Prove

Before implementation, write the tracer acceptance criteria into the contract and ledger. Explicitly load:

1. `website-copy` for production content;
2. `web-design` for hierarchy and responsive intent;
3. `component-grammar` for provisional boundaries only;
4. `etch` for verified builder operations;
5. `acss` for the token boundary;
6. `rendered-review` after implementation.

Implement vertically. Render, inspect, compare and correct until every tracer criterion has evidence. A tracer cannot pass without rendered review.

## Movement 4: Systematize

Only after the tracer passes, load `component-grammar` and extract the reusable language into `docs/site/component-grammar.md`. Record components, variants, content seams, composition rules and justified token-boundary exceptions. Do not generalize from hypothetical future pages.

## Movement 5: Expand

Break remaining work into complete user-observable tickets. Each ticket must:

- fit a fresh execution context;
- deliver a coherent journey, page capability or reusable system behavior;
- declare blocking edges;
- cite its page-contract acceptance criteria;
- include rendered verification.

Record the current frontier in `DELIVERY-STATE.md`. Work substantial tickets in fresh contexts, reading the artifacts as the source of truth.

## Movement 6: Harden

Load `rendered-review` for the whole site. Keep its review axes separate. Resolve findings or record explicit accepted deviations in the contract. Do not launch from this workflow.

## Completion criterion

Delivery is complete when every in-scope contract criterion maps to rendered evidence, an accepted deviation or a named launch blocker, and `DELIVERY-STATE.md` accurately identifies the site as ready or not ready for `/ship-etch-site`.
