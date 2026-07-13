# Migration from v0.1 to v0.2

## What changed

v0.1 used one large `/deliver-etch-site` workflow and stored product, site, design, and delivery concerns in fewer artifacts. v0.2 separates those decisions and transitions.

## Automatic artifact migration

From a repository checkout:

```bash
node scripts/migrate-project-v02.mjs /path/to/v0.1-project
```

The script preserves existing files and creates missing `PRODUCT.md`, `DESIGN.md`, and `docs/site/delivery-plan.md`. It adds a migration checklist to `DELIVERY-STATE.md`.

## Reconciliation steps

1. Move audience, offer, voice, references, and design-register context into `PRODUCT.md`.
2. Keep domain terms in `CONTEXT.md`.
3. Reconcile page jobs, conversion paths, proof, behavior, and acceptance criteria in `SITE-CONTRACT.md`.
4. Shape and approve the visual direction in `DESIGN.md`.
5. Select the tracer and create vertical tickets in `docs/site/delivery-plan.md`.
6. Set the current frontier in `DELIVERY-STATE.md`.
7. Validate the project at its current stage.

## Legacy command

`/deliver-etch-site` remains as a compatibility router. It recommends one v0.2 workflow but does not perform the whole lifecycle.
