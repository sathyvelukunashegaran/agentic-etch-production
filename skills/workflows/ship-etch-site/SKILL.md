---
name: ship-etch-site
description: verify and launch a reviewed etch and automatic.css website with explicit production checks for live rendering, conversions, seo, analytics, redirects, privacy, performance, backup, rollback, observability, and post-launch ownership.
disable-model-invocation: true
---

# Ship Etch Site

Shipping is a separate decision from implementation and review completion.

## Preconditions

- `/review-website` has verified the fixed release candidate.
- Every unresolved product, site, design, and delivery deviation is accepted or blocking.
- Deployment, backup, rollback, access, and ownership are recorded in `docs/agents/stack.md`.

## Process

1. Record the exact environment, revision, content state, approved deviations, and release owner.
2. Explicitly load `rendered-review` and run the launch checklist against the production candidate.
3. Confirm backup, rollback, form delivery, analytics ownership, privacy behavior, and observability before deployment.
4. Deploy only through the verified project mechanism.
5. Verify the live environment independently: critical journeys, forms, dynamic data, redirects, metadata, indexability, analytics, consent, responsive widths, accessibility, console, network, and performance budgets.
6. Record launch time, revision, evidence, known limitations, rollback owner, and post-launch actions in `DELIVERY-STATE.md`.

## Stop conditions

Stop when rollback is unavailable, critical conversions fail, production materially differs from the candidate, legal or privacy behavior is unresolved, or live browser verification cannot be performed.

## Completion criterion

Production has its own rendered evidence, critical conversions work, observability is active, and rollback and post-launch ownership are explicit.
