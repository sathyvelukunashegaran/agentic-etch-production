# v0.2 quickstart

## New project

From a checkout of this repository:

```bash
node scripts/scaffold-project.mjs /path/to/website-project
```

Then run:

```text
/setup-etch-production
/grill-website
/specify-website
/shape-website
/plan-website-delivery
/implement-website-ticket
/review-website
/ship-etch-site
```

Run `/implement-website-ticket` once per substantial approved ticket, preferably in a fresh context.

## Existing v0.1 project

```bash
node scripts/migrate-project-v02.mjs /path/to/project
node scripts/validate-project.mjs /path/to/project --stage=setup
```

Reconcile and approve `PRODUCT.md`, `SITE-CONTRACT.md`, and `DESIGN.md`, then create the delivery plan. See [Migration to v0.2](migration-v0.2.md).

## Non-negotiable boundaries

- no full implementation before visual direction approval;
- no invented claims, Etch operations, or ACSS tokens;
- no system-wide component extraction before rendered tracer evidence;
- no completion claim without browser evidence;
- no shipping without independent production verification.
