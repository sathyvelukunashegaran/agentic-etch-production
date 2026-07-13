# Agentic Etch Production

A reusable agent operating system for planning, designing, building, reviewing, and shipping WordPress websites with **Etch** and **Automatic.css**.

The repository combines:

- composable agent skills and explicit invocation policy;
- an opinionated but adaptable website delivery path;
- persistent project artifacts instead of conversation-only memory;
- Etch and ACSS as replaceable implementation adapters;
- browser-rendered verification as the source of truth.

## Status

This is the `0.1.0` foundation release. It is intentionally small enough to test in real projects before splitting into more skills.

**New to the system?** Read the detailed [beginner's guide to using Agentic Etch Production](docs/how-to-use.md). It covers installation, project setup, every workflow, project files, a complete worked example, troubleshooting, checklists, and launch.

## Core model

```text
Operating system
  setup -> grill -> deliver -> ship
       \-> router chooses the right entry point

Reusable disciplines
  website strategy
  proof chain
  website copy
  web design
  component grammar
  Etch
  ACSS
  rendered review

Persistent memory
  CONTEXT.md
  SITE-CONTRACT.md
  DELIVERY-STATE.md
  docs/agents/
  docs/site/
```

The default delivery path has six movements:

1. **Understand** the business, user, offer, conversion and proof.
2. **Specify** a durable site contract and acceptance criteria.
3. **Prove** the system with the smallest end-to-end tracer experience.
4. **Systematize** the component grammar only after the tracer works.
5. **Expand** through complete, user-observable delivery tickets.
6. **Harden** against the contract using rendered browser evidence.

Research, prototyping and large-project mapping are conditional branches, not mandatory phases.

## Install

### Agent Skills-compatible harnesses

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

Choose the skills you need. Start with `setup-etch-production` and `ask-etch-production`.

### Claude Code plugin

```text
/plugin marketplace add sathyvelukunashegaran/agentic-etch-production
/plugin install agentic-etch-production@sathyvelukunashegaran
```

### Local project scaffold

From a checkout of this repository:

```bash
node scripts/scaffold-project.mjs /path/to/wordpress-project
```

The scaffold creates the project-memory files used by the skills. Existing files are preserved unless `--force` is supplied.

## Main commands

| Command | Use it when |
|---|---|
| `/setup-etch-production` | A repository has not been configured for the workflow |
| `/ask-etch-production` | You are unsure which workflow fits the situation |
| `/grill-website` | The site, offer, audience, conversion or proof is still unclear |
| `/deliver-etch-site` | The site is understood and needs to be specified and built |
| `/ship-etch-site` | The complete site is hardened and ready for launch verification |

## Model-invoked disciplines

| Discipline | Use it when |
|---|---|
| `website-strategy` | Defining users, page jobs, information architecture or conversion paths |
| `proof-chain` | Creating or reviewing claims, evidence, testimonials or credibility language |
| `website-copy` | Writing evidence-backed page copy and calls to action |
| `web-design` | Defining visual hierarchy, composition, responsive priority or interaction intent |
| `component-grammar` | Deciding reusable component boundaries, variants and composition rules |
| `etch` | Implementing with verified Etch capabilities in the current project |
| `acss` | Applying verified Automatic.css tokens and deciding scoped CSS exceptions |
| `rendered-review` | Reviewing browser output, interactions and contract fidelity |

Model-invoked disciplines are loaded by the workflows or automatically when the task matches.

## Project artifacts

| Artifact | Responsibility |
|---|---|
| `CONTEXT.md` | Canonical domain vocabulary, without implementation detail |
| `SITE-CONTRACT.md` | Approved site goals, journeys, page contracts and acceptance criteria |
| `DELIVERY-STATE.md` | Persistent execution ledger and current frontier |
| `docs/agents/stack.md` | Verified stack capabilities, tools and deployment constraints |
| `docs/site/evidence.md` | Claim-to-evidence register |
| `docs/site/component-grammar.md` | Approved components, variants and composition rules |

See [Project artifacts](docs/project-artifacts.md) for the ownership rules.

## Design principles

- **Rendered truth:** browser output outranks implementation intention.
- **Page contract:** every page has a durable job, conversion path and acceptance criteria.
- **Proof chain:** public claims trace to admissible evidence.
- **Component grammar:** reusable elements form a coherent language, not a pile of similar cards.
- **Token boundary:** ACSS owns system values; custom CSS starts only where the token system ends.
- **Tracer experience:** prove one complete user journey before scaling the system.
- **Fresh execution context:** each substantial delivery ticket starts from its artifact, not an overloaded conversation.

## Validation

```bash
npm run validate
```

Validation checks skill metadata, invocation policy, plugin membership, README coverage, router coverage, version synchronization, TODO leakage and local Markdown links.

## Repository map

```text
skills/
  workflows/       human-invoked orchestration
  disciplines/     model-invoked reusable judgment

templates/project/ persistent project memory
scripts/           deterministic scaffolding and validation
docs/              human-facing architecture and usage
evals/             behavioral scenarios for manual or automated evaluation
```

## Influences

The workflow is inspired by Kevin Geary's web-production methodology and Matt Pocock's composable engineering skills. The implementation here is independently written and specialized for Etch, Automatic.css and browser-verified website delivery.

## License

MIT
