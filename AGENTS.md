# Repository operating rules

This repository contains composable website-production skills.

## Invocation classes

- `skills/workflows/` are human-invoked transitions. They set `disable-model-invocation: true` and `policy.allow_implicit_invocation: false`.
- `skills/disciplines/` are model-invoked judgment. They use trigger-rich descriptions and remain available for implicit invocation.
- A workflow may explicitly load disciplines. It must not silently invoke another human workflow.

## v0.2 artifact boundary

- `CONTEXT.md`: domain language;
- `PRODUCT.md`: audience, offer, voice, register, references, constraints;
- `SITE-CONTRACT.md`: page and behavior obligations;
- `DESIGN.md`: approved visual direction;
- `DELIVERY-STATE.md`: current execution state;
- `docs/site/delivery-plan.md`: tracer, tickets, dependencies, frontier.

Do not duplicate a decision across artifacts. Link to the authoritative file.

## Promotion invariants

Every promoted skill has `SKILL.md`, `agents/openai.yaml`, a plugin entry, README coverage, no unresolved TODO markers, and checkable completion criteria. Every workflow is represented in `ask-etch-production`.

Keep `package.json`, `.claude-plugin/plugin.json`, README status, and CHANGELOG synchronized.

## Skill-writing rules

- Keep `SKILL.md` as a control plane and references one level deep.
- Use concrete triggers and observable completion criteria.
- Add a skill only when independent invocation, reuse, or context isolation earns it.
- Never claim Etch, ACSS, browser, image-generation, deployment, or rollback capability without project evidence.
- Never claim rendered review passed without real browser evidence.
- Deterministic detector output is evidence, not proof.

## Validation

Run `npm run validate` after changing skills, manifests, versions, templates, router coverage, scripts, or Markdown links.
