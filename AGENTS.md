# Repository operating rules

This repository is a collection of composable agent skills for Etch and Automatic.css website production.

## Skill classes

- `skills/workflows/` contains human-invoked orchestration. Every workflow must set `disable-model-invocation: true` and `policy.allow_implicit_invocation: false`.
- `skills/disciplines/` contains model-invoked reusable judgment. These skills must use trigger-rich descriptions and must not disable implicit invocation.

A workflow may explicitly load disciplines. A discipline must not silently start a workflow.

## Promotion invariants

Every promoted skill must:

1. contain `SKILL.md` and `agents/openai.yaml`;
2. appear in `.claude-plugin/plugin.json`;
3. appear in the appropriate skill table in `README.md`;
4. have no unresolved `TODO` markers;
5. use project artifacts rather than conversation memory for durable state.

Every workflow must be represented in `ask-etch-production`. A router that omits a workflow is incorrect.

Keep `package.json` and `.claude-plugin/plugin.json` versions synchronized.

## Skill-writing rules

- Keep `SKILL.md` as a control plane. Move conditional detail into one-level-deep `references/` files.
- Use checkable completion criteria, not vague instructions such as "make sure it looks good".
- Prefer positive target behavior over long prohibition lists.
- Keep each meaning in one authoritative location.
- Add a skill only when independent invocation, reuse or context isolation earns the added complexity.
- Do not claim Etch, ACSS or browser capability without evidence from the current project.
- Do not claim a review passed without rendered browser evidence.

## Validation

Run `npm run validate` after changing skills, manifests, versions, router coverage or Markdown links.
