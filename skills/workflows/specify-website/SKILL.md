---
name: specify-website
description: synthesize approved product context, evidence, and existing discussion into a durable website specification with conversion paths, information architecture, page contracts, content obligations, functional requirements, and observable acceptance criteria. use after grilling and before visual direction or delivery planning.
disable-model-invocation: true
---

# Specify Website

Convert approved understanding into `SITE-CONTRACT.md`. This workflow synthesizes; it does not repeat the full interview.

## Preconditions

- `/setup-etch-production` has created the v0.2 project artifacts.
- `PRODUCT.md` is approved, or the remaining gaps are explicitly named.
- `CONTEXT.md` and `docs/site/evidence.md` are current.

## Process

1. Read `CONTEXT.md`, `PRODUCT.md`, the evidence register, existing site material, and the relevant conversation.
2. Explicitly load `website-strategy` and `proof-chain`.
3. Draft the minimum information architecture that serves the approved conversion paths.
4. Write a page contract for every in-scope page type. Use [page-contract.md](references/page-contract.md).
5. Separate requirements from design solutions. Record design obligations, but leave the visual solution to `/shape-website` and `DESIGN.md`.
6. Define content, dynamic-data, responsive, accessibility, performance, SEO, and integration obligations where they affect acceptance.
7. List open decisions and blockers. Ask only questions that prevent a coherent specification.
8. Present the contract for explicit human approval and record the approver and date.

## Completion criterion

A fresh agent can explain why every page exists, who it serves, what action it advances, what proof it requires, and which rendered observations determine completion. The contract is approved before `/shape-website` or `/plan-website-delivery` proceeds.
