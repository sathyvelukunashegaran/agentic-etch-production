# Agentic Etch Production

A reusable agent operating system for planning, shaping, building, reviewing, and shipping WordPress websites with **Etch** and **Automatic.css**.

## Status

Current release: **0.2.0**.

v0.2 combines:

- Small, composable workflows and fresh-context tickets;
- a visual-design subsystem with explicit shaping gates, approved direction, craft rules, and continuous browser iteration;
- professional website-production obligations for strategy, proof, copy, semantics, responsive quality, QA, and launch;
- Etch and ACSS as verified implementation adapters rather than assumed capabilities.

Read the detailed [beginner guide](docs/how-to-use.md).

## Operating path

```text
setup
  -> grill product
  -> specify website
  -> shape visual direction
  -> plan tracer and tickets
  -> implement one ticket per fresh context
  -> review independently
  -> ship and verify production
```


## Install

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

Claude Code:

```text
/plugin marketplace add sathyvelukunashegaran/agentic-etch-production
/plugin install agentic-etch-production@sathyvelukunashegaran
```

## Human-invoked workflows

| Workflow | Responsibility |
|---|---|
| `/setup-etch-production` | Verify capabilities and create or reconcile project artifacts |
| `/ask-etch-production` | Select the next workflow from durable state |
| `/grill-website` | Approve product context, domain language, voice, proof posture, and design lane |
| `/specify-website` | Produce approved conversion paths, information architecture, and page contracts |
| `/shape-website` | Explore and approve a distinctive visual direction in `DESIGN.md` |
| `/plan-website-delivery` | Select the tracer and create vertical tickets with blocking edges |
| `/implement-website-ticket` | Implement one ticket through continuous rendered truth |
| `/review-website` | Run independent whole-site or tracer review |
| `/ship-etch-site` | Deploy and independently verify production |

## Model-invoked disciplines

| Discipline | Responsibility |
|---|---|
| `website-strategy` | Users, page jobs, information architecture, and conversion paths |
| `proof-chain` | Claims, evidence, sources, and permissible wording |
| `website-copy` | Evidence-backed production copy |
| `web-design` | Registers, shaping, craft, critique, responsive states, and visual rules |
| `component-grammar` | Proven component boundaries, variants, and composition rules |
| `etch` | Verified Etch implementation operations |
| `acss` | Verified Automatic.css tokens and custom-CSS boundary |
| `rendered-review` | Continuous and independent browser verification |

## Durable project artifacts

| Artifact | Owns |
|---|---|
| `CONTEXT.md` | Domain language |
| `PRODUCT.md` | Audience, offer, voice, design register, references, and constraints |
| `SITE-CONTRACT.md` | Conversion paths, page contracts, behavior, and acceptance |
| `DESIGN.md` | Approved visual direction, system rules, states, and deviations |
| `DELIVERY-STATE.md` | Current stage, frontier, blockers, evidence, and handoff |
| `docs/agents/stack.md` | Verified technical and tool capabilities |
| `docs/site/evidence.md` | Claim-to-evidence register |
| `docs/site/component-grammar.md` | Proven reusable interface contracts |
| `docs/site/delivery-plan.md` | Tracer, tickets, dependencies, and frontier |

## Project commands

From a checkout of this repository:

```bash
node scripts/scaffold-project.mjs /path/to/new-project
node scripts/validate-project.mjs /path/to/project --stage=design
```

Repository validation:

```bash
npm run validate
```

## Core principles

- **Product context before page specification.**
- **Page contracts before visual solutions.**
- **Visual approval before production implementation.**
- **One tracer before system expansion.**
- **One substantial ticket per fresh context.**
- **ACSS tokens before custom CSS.**
- **Verified Etch operations before claims of implementation.**
- **Browser output before completion claims.**
- **Detectors provide evidence, not proof.**

## License

MIT
