# How to use Agentic Etch Production v0.2

This guide is for a first-time user who wants an AI agent to help produce a real Etch and Automatic.css website without losing strategy, visual quality, implementation discipline, or browser verification.

## The short path

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

Run `/implement-website-ticket` once for each substantial ticket, preferably in a fresh agent session.

## 1. Install

Agent Skills-compatible harness:

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

Claude Code:

```text
/plugin marketplace add sathyvelukunashegaran/agentic-etch-production
/plugin install agentic-etch-production@sathyvelukunashegaran
```

## 2. Create project memory

The scaffold script exists in a local checkout of this repository:

```bash
cd /path/to/agentic-etch-production
node scripts/scaffold-project.mjs /path/to/website-project
```

For a v0.1 project:

```bash
node scripts/migrate-project-v02.mjs /path/to/website-project
```

The project receives nine durable artifacts. Commit them so every later change is reviewable.

## 3. Understand the files

- `CONTEXT.md`: exact business and product vocabulary.
- `PRODUCT.md`: audience, situations, offer, voice, design lane, references, anti-references, and constraints.
- `SITE-CONTRACT.md`: conversion paths, page jobs, content, proof, behavior, and acceptance.
- `DESIGN.md`: approved visual direction and system rules.
- `DELIVERY-STATE.md`: current stage, current ticket, blockers, evidence, and handoff.
- `docs/agents/stack.md`: what the agent can actually do.
- `docs/site/evidence.md`: what public claims are allowed.
- `docs/site/component-grammar.md`: reusable patterns proven in the browser.
- `docs/site/delivery-plan.md`: tracer, tickets, dependencies, and frontier.

Do not let one file become a duplicate of another. Link to the authoritative artifact.

## 4. Run setup

```text
/setup-etch-production
```

Ask the agent to inspect before asking you factual questions. Setup must verify WordPress, Etch operations, ACSS tokens, browser tools, image-generation or prototype capability, staging, production, deployment, backup, rollback, issue tracking, and approval authority.

A capability is `verified`, `unavailable`, or `unknown`. “We plan to use Etch” is not evidence that the agent can control Etch.

## 5. Grill the product

```text
/grill-website
```

This stage resolves the business and product, not the page layout. Expect one decision question at a time about:

- the primary user and triggering situation;
- the offer and real differentiation;
- the business outcome and conversion intent;
- vocabulary and voice;
- evidence strength and claim limits;
- brand, product, or hybrid design register;
- references and anti-references;
- explicit constraints and excluded scope.

Approve `PRODUCT.md` explicitly. Example:

```text
I approve PRODUCT.md as the product context. Record my name and today's date. Material audience, offer, voice, proof, or register changes require reapproval.
```

## 6. Specify the website

```text
/specify-website
```

This workflow synthesizes approved context into `SITE-CONTRACT.md`; it should not repeat the entire grilling session.

Every important page or page type needs a page contract containing user, situation, page job, conversion, message hierarchy, proof, content sequence, dynamic behavior, states, responsive and accessibility obligations, SEO and performance obligations, and rendered acceptance criteria.

Approve the site contract before shaping or implementation.

## 7. Shape visual direction

```text
/shape-website
```

There are four gates:

1. confirm the shape brief;
2. answer direction questions;
3. review visual evidence;
4. approve or delegate one direction.

Visual evidence may be generated mock directions, browser prototypes, or precise structured compositions depending on the harness. Directions must differ materially; palette swaps do not count.

`DESIGN.md` should record the chosen register, physical-use context, hierarchy, typography, color strategy, imagery, spacing, shape, motion, states, responsive priorities, signature motifs, anti-patterns, and rejected alternatives.

Do not begin production implementation until the direction is approved.

## 8. Plan delivery

```text
/plan-website-delivery
```

Choose the smallest complete tracer experience that tests strategy, proof, visual direction, Etch, ACSS, states, responsive behavior, and browser verification.

Good tracer examples:

- homepage to qualified enquiry confirmation;
- search to directory listing to detail;
- article discovery to newsletter confirmation;
- service page to application state.

Create vertical tickets with blocking edges. Avoid horizontal tickets such as “write all CSS,” “do accessibility,” or “make mobile.” Each substantial ticket should fit one fresh context.

## 9. Implement one ticket

Start a fresh session and run:

```text
/implement-website-ticket WEB-001
```

The agent should read all durable artifacts, verify the ticket is unblocked, and restate the outcome and acceptance criteria.

The normal discipline sequence is copy, design, components, Etch, ACSS, and rendered review. Implementation repeats:

```text
implement -> render -> inspect -> compare -> correct -> render again
```

Cover real states. Use verified ACSS tokens before scoped custom CSS. Do not invent Etch operations. Run the deterministic browser audit, but remember that detector output is defect evidence rather than proof of completion.

Close the ticket only when every criterion has rendered evidence, an accepted deviation, or a named blocker. Update the delivery state and handoff.

## 10. Review independently

```text
/review-website
```

Use a fresh context when possible. Review product and conversion, copy and proof, approved visual direction, components and ACSS, responsive states and accessibility, stack and performance, and all contracts independently.

Every finding needs severity, page, viewport, state, observed evidence, violated contract, correction, disposition, owner, and re-verification.

## 11. Ship

```text
/ship-etch-site
```

Shipping requires a fixed reviewed candidate, backup, rollback, deployment procedure, form and analytics ownership, privacy readiness, and live browser access. Verify production separately from staging.

## Resuming in a new session

Use:

```text
Read CONTEXT.md, PRODUCT.md, SITE-CONTRACT.md, DESIGN.md, DELIVERY-STATE.md, docs/agents/stack.md, docs/site/evidence.md, docs/site/component-grammar.md, and docs/site/delivery-plan.md. Summarize approved decisions, the current frontier, blockers, and verification. Do not implement until you identify the correct workflow or ticket.
```

Before ending a session, require an updated handoff in `DELIVERY-STATE.md`.

## Common corrections

### The agent starts building before design approval

Stop and run `/shape-website`. An approved site contract is not an approved visual direction.

### The agent invents an ACSS token

Remove it, verify the project's actual token source, and use a documented token or a recorded scoped exception.

### The agent says Etch work is complete without controlling Etch

Mark it unimplemented or unverified. Record the exact capability gap in `docs/agents/stack.md`.

### The design is generic

Return to the approved direction. Check whether composition, hierarchy, imagery, typography character, color commitment, and signature motifs survived implementation. Use `web-design` critique mode and browser evidence.

### Too many components appear early

Demote speculative abstractions. Promote only stable responsibilities and content seams proven by rendered repetition.

### A review passes without a browser

Change the status to unverified and list exact pending pages, widths, states, journeys, console checks, and network checks.

## Stage validation

```bash
node scripts/validate-project.mjs /path/to/project --stage=setup
node scripts/validate-project.mjs /path/to/project --stage=product
node scripts/validate-project.mjs /path/to/project --stage=specification
node scripts/validate-project.mjs /path/to/project --stage=design
node scripts/validate-project.mjs /path/to/project --stage=planning
```

## Four rules to remember

1. Product truth before page specification.
2. Visual approval before production implementation.
3. One tracer before system expansion.
4. Browser evidence before completion or shipping.
