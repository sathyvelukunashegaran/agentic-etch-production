---
name: ship-etch-site
description: verify and launch a hardened etch and automatic.css website with explicit checks for live rendering, forms, seo, analytics, redirects, privacy, performance, rollback and post-launch behavior.
disable-model-invocation: true
---

# Ship Etch Site

Shipping is a separate decision from implementation completion.

## Preconditions

- `DELIVERY-STATE.md` says hardening is complete.
- Every unresolved contract deviation is accepted or blocking.
- Deployment and rollback procedures are recorded in `docs/agents/stack.md`.

## Process

1. **Establish release scope.** Record the exact environment, revision and content state being launched.
2. **Load `rendered-review`.** Run the launch axes in [launch-checklist.md](references/launch-checklist.md) against the production candidate.
3. **Verify destructive safety.** Confirm backup, rollback and access before deployment.
4. **Deploy through the project's recorded mechanism.** Do not invent a deployment process.
5. **Verify the live environment independently.** Re-run critical journeys, forms, redirects, metadata, analytics and responsive checks against the production URL.
6. **Record the release.** Update `DELIVERY-STATE.md` with launch time, revision, evidence, known limitations and post-launch owners.

## Stop conditions

Stop rather than launch when rollback is unavailable, critical forms fail, production differs materially from staging, required legal or privacy behavior is unresolved, or browser verification cannot be performed.

## Completion criterion

Shipping is complete only when the production environment has its own rendered evidence, critical conversions work, observability is active and rollback ownership is known.
