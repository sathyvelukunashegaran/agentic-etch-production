# How to Use Agentic Etch Production v0.2

This is the beginner operating manual for Agentic Etch Production.

The system helps an AI agent plan, shape, build, review, and ship WordPress websites made with **Etch** and **Automatic.css**. It is designed to prevent several common agent failures:

- building before the business and user are understood;
- confusing an approved strategy with an approved visual direction;
- inventing claims, Etch operations, or ACSS tokens;
- producing generic AI-looking design;
- creating a speculative component library before real pages exist;
- losing decisions when a long conversation ends;
- declaring work complete without checking the rendered website;
- shipping without backup, rollback, and live verification.

You do not need to memorize the whole system. The files preserve the decisions, and `/ask-etch-production` can recommend the next workflow.

---

## Table of contents

1. [The complete workflow](#1-the-complete-workflow)
2. [What the system contains](#2-what-the-system-contains)
3. [What you need before starting](#3-what-you-need-before-starting)
4. [Install the skills](#4-install-the-skills)
5. [Create a project](#5-create-a-project)
6. [Understand the nine project artifacts](#6-understand-the-nine-project-artifacts)
7. [Choose the next workflow](#7-choose-the-next-workflow)
8. [Run project setup](#8-run-project-setup)
9. [Grill the product](#9-grill-the-product)
10. [Specify the website](#10-specify-the-website)
11. [Shape the visual direction](#11-shape-the-visual-direction)
12. [Plan the tracer and delivery tickets](#12-plan-the-tracer-and-delivery-tickets)
13. [Implement one ticket](#13-implement-one-ticket)
14. [Review independently](#14-review-independently)
15. [Ship the website](#15-ship-the-website)
16. [Complete worked example](#16-complete-worked-example)
17. [Resume in a fresh session](#17-resume-in-a-fresh-session)
18. [Use multiple agents safely](#18-use-multiple-agents-safely)
19. [Use the specialist disciplines](#19-use-the-specialist-disciplines)
20. [Validate project readiness](#20-validate-project-readiness)
21. [Common problems and corrections](#21-common-problems-and-corrections)
22. [Operational checklists](#22-operational-checklists)
23. [Glossary](#23-glossary)
24. [Frequently asked questions](#24-frequently-asked-questions)

---

# 1. The complete workflow

For a new website, the default path is:

```text
/setup-etch-production
        ↓
/grill-website
        ↓
/specify-website
        ↓
/shape-website
        ↓
/plan-website-delivery
        ↓
/implement-website-ticket
        ↓
/review-website
        ↓
/ship-etch-site
```

Run `/implement-website-ticket` once for every substantial delivery ticket. A real website may therefore use it many times.

The stages mean:

| Stage | Main question | Durable output |
|---|---|---|
| Setup | What can this project and agent actually do? | `docs/agents/stack.md` and all project artifacts |
| Grill | Who is this for, what is offered, and what is true? | `CONTEXT.md`, `PRODUCT.md`, evidence register |
| Specify | What must the website and each page accomplish? | `SITE-CONTRACT.md` |
| Shape | What approved visual direction should implementation reproduce? | `DESIGN.md` |
| Plan | What is the tracer, ticket graph, and current frontier? | `docs/site/delivery-plan.md` |
| Implement | Does one vertical ticket work in the browser? | Working site, component updates, evidence, handoff |
| Review | Does the complete result satisfy every contract independently? | Findings and verified delivery state |
| Ship | Does the live production environment work safely? | Production evidence and release record |

The order is intentional:

```text
product truth
→ website obligations
→ visual direction
→ delivery topology
→ implementation
→ independent verification
→ production verification
```

Research, prototypes, diagnosis, and large-project mapping are conditional branches. You do not need to perform every possible activity on every website.

---

# 2. What the system contains

Agentic Etch Production contains two classes of skills.

## Human-invoked workflows

You deliberately start these because they change project state or cross an approval boundary.

| Workflow | Use it when |
|---|---|
| `/setup-etch-production` | The project has not been configured, or capabilities are stale |
| `/ask-etch-production` | You are unsure what should happen next |
| `/grill-website` | Audience, offer, voice, conversion, proof, or design lane is unclear |
| `/specify-website` | Product context is approved but page contracts are missing |
| `/shape-website` | Site requirements are approved but visual direction is not |
| `/plan-website-delivery` | Product, site, and design contracts are approved but work is not ticketed |
| `/implement-website-ticket` | One approved ticket is ready on the current frontier |
| `/review-website` | A tracer, release candidate, or regression needs independent review |
| `/ship-etch-site` | The reviewed release candidate is ready for production |

## Model-invoked disciplines

These hold reusable specialist judgment. A workflow loads them when needed.

| Discipline | Responsibility |
|---|---|
| `website-strategy` | Users, triggering situations, page jobs, information architecture, conversion paths |
| `proof-chain` | Claims, evidence, source quality, and permissible wording |
| `website-copy` | Evidence-backed production copy and calls to action |
| `web-design` | Registers, visual shaping, craft, critique, responsive states, and visual rules |
| `component-grammar` | Reusable component responsibilities, variants, seams, and composition |
| `etch` | Verified Etch operations in the current project |
| `acss` | Verified Automatic.css tokens and custom-CSS boundary |
| `rendered-review` | Continuous and independent browser verification |

You normally invoke the workflows. The workflows orchestrate the disciplines.

---

# 3. What you need before starting

## Required for any use

- An AI agent environment that can load Agent Skills
- A repository or project folder where durable Markdown files can be stored

You can use the strategy, proof, copy, design, component, and review disciplines without automated Etch access.

## Required for full Etch and ACSS implementation

- A WordPress project or staging site
- Etch installed or otherwise available
- Automatic.css installed or otherwise available
- A verified method for the agent to interact with the relevant project surface

Installation alone does not prove automation capability.

The agent must verify individual operations, such as:

- opening or inspecting a page;
- creating and editing elements;
- applying classes;
- creating or editing reusable components;
- binding WordPress data;
- handling forms and states;
- previewing responsive behavior;
- publishing or saving changes.

## Strongly recommended

- A staging site rather than production-only access
- Git or another revision history
- Browser automation or screenshot capability
- DOM and accessibility-tree inspection
- Console and failed-network-request visibility
- A documented deployment process
- A backup and rollback mechanism
- Real business material, customer language, and proof
- One named human with approval authority

## Good first pilot

Start with a real but controlled project containing:

- one primary audience;
- one primary conversion;
- a homepage or focused landing page;
- real copy and proof;
- a header and footer;
- one form or meaningful interaction;
- at least one reusable component;
- responsive obligations;
- one dynamic WordPress element when practical.

Avoid using the first pilot for a large ecommerce, membership, multilingual, or highly regulated website.

---

# 4. Install the skills

## Agent Skills-compatible harness

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

Select the skills required by your harness. At minimum, install the setup and router workflows so the system can orient itself.

## Claude Code plugin

Inside Claude Code:

```text
/plugin marketplace add sathyvelukunashegaran/agentic-etch-production
/plugin install agentic-etch-production@sathyvelukunashegaran
```

Reload the session if newly installed skills do not appear.

## Manual repository checkout

```bash
git clone https://github.com/sathyvelukunashegaran/agentic-etch-production.git
```

The skills are under:

```text
skills/workflows/
skills/disciplines/
```

Manual installation differs by agent harness. The harness must expose each `SKILL.md` and its references or scripts.

## Confirm installation

Ask the agent:

```text
List the Agentic Etch Production workflows and disciplines available in this session. Do not start a workflow yet.
```

You should see the workflows listed in this guide and the eight disciplines.

---

# 5. Create a project

The skills repository and the website project are different repositories or folders.

- The **skills repository** contains the reusable operating system.
- The **website project** contains one real website and its decisions.

Do not store client-specific strategy in the skills repository.

## New project

The scaffold script belongs to a local checkout of Agentic Etch Production.

```bash
cd /path/to/agentic-etch-production
node scripts/scaffold-project.mjs /path/to/website-project
```

Example:

```bash
cd ~/Code/agentic-etch-production
node scripts/scaffold-project.mjs ~/Sites/acme-consulting
```

You may call the script by absolute path while standing elsewhere:

```bash
node ~/Code/agentic-etch-production/scripts/scaffold-project.mjs ~/Sites/acme-consulting
```

Existing files are preserved unless you explicitly pass `--force`.

```bash
node scripts/scaffold-project.mjs /path/to/project --force
```

Use `--force` only after reviewing or backing up existing artifacts.

## Commit the initial artifacts

```bash
git add CONTEXT.md PRODUCT.md SITE-CONTRACT.md DESIGN.md DELIVERY-STATE.md docs/
git commit -m "initialize website production artifacts"
```

This gives you a clean history for later approvals and changes.

---

# 6. Understand the nine project artifacts

The artifacts are the memory of the system. A fresh agent should be able to continue from them without the original conversation.

## `CONTEXT.md` — domain language

Use it for:

- precise meanings of business terms;
- product, service, plan, and audience names;
- accepted abbreviations;
- terminology that should be avoided;
- distinctions that matter to the business.

Do not use it for implementation plans or ticket status.

Example:

```markdown
| Term | Meaning | Avoid |
|---|---|---|
| Website Sprint | A fixed-scope strategy, copy, and implementation engagement | Web design package |
| Qualified project | A project with a decision-maker, active need, budget, and launch window | Any enquiry |
```

## `PRODUCT.md` — product and business context

This owns:

- business outcome;
- users and triggering situations;
- offer and meaningful differentiation;
- conversion intent;
- voice and language;
- brand, product, or hybrid design register;
- physical-use context;
- references and anti-references;
- proof posture and constraints;
- excluded scope;
- open product decisions.

It answers: **What are we making this website for, and what product truth should every later decision respect?**

## `SITE-CONTRACT.md` — website obligations

This owns:

- website outcome;
- conversion paths;
- information architecture;
- page contracts;
- content and dynamic-data requirements;
- functional and integration behavior;
- responsive and accessibility obligations;
- SEO and performance obligations;
- acceptance criteria;
- excluded website behavior.

It answers: **What must the website do?**

It should not prescribe the complete visual solution. That belongs in `DESIGN.md`.

## `DESIGN.md` — visual contract

This owns:

- selected design register;
- physical-use context;
- approved visual direction;
- rejected directions and reasons;
- composition and hierarchy;
- typography system;
- color strategy and roles;
- spacing, shape, and border language;
- imagery, illustration, and icon direction;
- motion and interaction language;
- signature motifs;
- responsive priorities;
- state coverage;
- accessibility and performance constraints;
- visual anti-patterns;
- approved deviations and risks.

It answers: **What should the implemented website look and feel like, and which visual decisions are already approved?**

## `DELIVERY-STATE.md` — execution ledger

This owns:

- current system version;
- current stage;
- current ticket;
- completed approval gates;
- current frontier;
- blockers;
- ticket links;
- verification status;
- accepted deviations;
- session handoff.

Update it whenever a stage changes and before ending a substantial agent session.

## `docs/agents/stack.md` — capability evidence

This owns evidence-backed status for:

- WordPress;
- Etch version and available operations;
- Automatic.css version and token sources;
- browser and screenshot tools;
- accessibility, console, network, and performance tools;
- native image generation;
- browser prototype capability;
- environments;
- deployment, backup, and rollback;
- issue tracker;
- approval authority.

Use the statuses:

- `verified` — direct evidence exists;
- `unavailable` — the capability is known not to exist;
- `unknown` — it has not yet been verified.

## `docs/site/evidence.md` — proof register

Every meaningful public claim maps to evidence.

```markdown
| ID | Claim | Classification | Source | Confidence | Permissible wording | Status |
|---|---|---|---|---|---|---|
| E-001 | 150 projects delivered | verified fact | CRM export, 2026-07-01 | high | More than 150 projects delivered | approved |
| E-002 | Malaysia's leading studio | unavailable | none | low | Do not publish | blocked |
```

A strong marketing idea is not permission to invent proof.

## `docs/site/component-grammar.md` — proven reusable interface contracts

Use this only after rendered implementation proves stable patterns.

For each component, record:

- responsibility;
- public inputs;
- content seam;
- variants;
- allowed compositions;
- states;
- responsive behavior;
- accessibility obligations;
- ACSS tokens;
- custom styling exceptions;
- correct and incorrect usage.

Do not turn every repeated rectangle into a component.

## `docs/site/delivery-plan.md` — tracer and ticket topology

This owns:

- selected tracer experience;
- tracer acceptance criteria;
- vertical delivery tickets;
- dependencies and blocking edges;
- current frontier;
- collision risks and shared seams;
- fresh-context boundaries;
- deferred scope.

It answers: **What is safe and valuable to build next?**

## Ownership rule

A decision should have one authoritative home.

Bad:

```text
Audience definition copied into PRODUCT.md, SITE-CONTRACT.md, DESIGN.md, and every ticket.
```

Better:

```text
PRODUCT.md owns the audience definition.
Other files cite the relevant section.
```

---

# 7. Choose the next workflow

Run:

```text
/ask-etch-production
```

The router should read durable state and recommend exactly one workflow.

Typical routing logic:

| Current condition | Recommended workflow |
|---|---|
| Artifacts or capability evidence missing | `/setup-etch-production` |
| Product, audience, offer, voice, conversion, or proof unclear | `/grill-website` |
| Product approved, page contracts missing | `/specify-website` |
| Site contract approved, visual direction missing | `/shape-website` |
| Product, site, and design approved, tickets missing | `/plan-website-delivery` |
| Approved ticket is unblocked | `/implement-website-ticket` |
| Tracer or release candidate needs independent verification | `/review-website` |
| Review passed and launch safety is ready | `/ship-etch-site` |

Example prompt:

```text
/ask-etch-production

Read the durable project artifacts and recommend exactly one next workflow. Explain the current state, unmet preconditions, and which artifact the workflow should create or update. Do not run the workflow yet.
```

---

# 8. Run project setup

Run inside the website project:

```text
/setup-etch-production
```

Recommended prompt:

```text
Inspect this repository and configure it for Agentic Etch Production v0.2. Verify WordPress, Etch, Automatic.css, browser tooling, visual-exploration capability, environments, deployment, backup, rollback, issue tracking, and approval authority. Search the environment for factual answers before asking me. Record each capability as verified, unavailable, or unknown with evidence. Preserve existing project files.
```

## What setup should inspect

- repository structure and existing agent instructions;
- WordPress signals and configuration;
- Etch installation and version evidence;
- actual Etch operations available to the agent;
- ACSS installation, version, token source, and overrides;
- existing pages, theme, components, and visual system;
- browser, screenshot, DOM, accessibility, console, network, and performance tools;
- image-generation, image-search, or prototype capability;
- local, staging, and production environments;
- deployment, backup, and rollback;
- issue tracker and ticket links;
- approval authority.

## What setup should not do

- start designing pages;
- invent an Etch API or operation;
- invent ACSS token names;
- mark a planned capability as verified;
- overwrite existing approved content;
- silently change existing `AGENTS.md` or `CLAUDE.md` rules.

## Review setup output

Bad capability record:

```markdown
## Etch
Status: verified because the project is intended to use Etch.
```

Good capability record:

```markdown
## Etch
**Status:** verified
**Version or capability evidence:** Plugin version visible in the environment; homepage editor opened successfully.
**Available operations:** Inspect element tree, edit text, apply an existing class, preview page.
**Unavailable or unverified operations:** Reusable component creation, dynamic query binding, publishing.
```

If a required operation remains unknown, the relevant implementation seam remains blocked.

---

# 9. Grill the product

Run:

```text
/grill-website
```

Recommended prompt:

```text
Run a rigorous product clarification session. Ask one decision question at a time, recommend an answer, challenge vague audiences and generic differentiation, and update CONTEXT.md, PRODUCT.md, and docs/site/evidence.md as decisions become clear. Do not specify pages or begin design implementation.
```

## What the grilling session resolves

- business outcome;
- primary users;
- triggering situations;
- offer;
- meaningful differentiation;
- conversion intent;
- voice and vocabulary;
- proof posture;
- design register;
- physical-use context;
- visual references;
- anti-references;
- constraints;
- explicit exclusions.

## Weak and stronger answers

Weak audience:

```text
Small businesses that need a website.
```

Stronger audience:

```text
Owner-led service businesses with an established offer, weak online positioning, and a launch or relaunch planned within the next three months.
```

Weak conversion intent:

```text
Get people to contact us.
```

Stronger conversion intent:

```text
The primary conversion is a qualified project application. Visitors who are not ready may download the planning guide as a secondary conversion.
```

Weak differentiation:

```text
High-quality work and excellent customer service.
```

Stronger differentiation:

```text
Strategy, evidence-backed copy, and implementation are delivered by one accountable team, reducing the handoff gap that usually weakens website projects.
```

## References and anti-references

A reference is useful only when you can say what should be learned from it.

Bad:

```text
Make it like Apple.
```

Better:

```text
Reference Apple only for disciplined product photography and restrained hierarchy. Do not copy the oversized type, monochrome palette, or product-launch rhythm.
```

An anti-reference identifies a direction the project must avoid.

```text
Avoid generic agency pages built from identical rounded cards, purple-blue gradients, stock metrics, and a tiny uppercase label above every section heading.
```

## Approve `PRODUCT.md`

Example approval:

```text
I approve PRODUCT.md as the current product context. Record my name and today's date. Any material audience, offer, voice, conversion, proof, or design-register change must be approved again.
```

Approval belongs in the file, not only in chat.

---

# 10. Specify the website

Run:

```text
/specify-website
```

Recommended prompt:

```text
Synthesize the approved product context and evidence into SITE-CONTRACT.md. Create the minimum information architecture needed for the approved conversion paths. Write observable page contracts for every in-scope page type. Ask only about unresolved decisions that block a coherent specification. Do not choose the final visual direction.
```

## Information architecture

Do not begin with a conventional list of pages. Begin with user journeys.

Example:

```text
Visitor recognizes fit
→ understands the primary service
→ sees relevant proof
→ evaluates project fit
→ completes an application
→ receives confirmation and next steps
```

Pages should exist because they advance a journey, resolve uncertainty, satisfy a requirement, or support necessary discovery.

## Page contract

Each important page or reusable page type should record:

- user and triggering situation;
- page job;
- entry conditions;
- primary conversion;
- fallback action;
- message hierarchy;
- content sequence;
- proof obligations and evidence IDs;
- dynamic content;
- empty, loading, error, and success states;
- interactions and integrations;
- responsive obligations;
- accessibility obligations;
- SEO and performance obligations;
- observable acceptance criteria;
- out-of-scope behavior.

Example:

```markdown
## Primary service page

### User and situation
An owner-led consultancy knows its current website undersells a credible offer and is evaluating whether this engagement fits an upcoming relaunch.

### Page job
Help a qualified visitor understand the service, evaluate fit, trust the delivery model, and begin an application.

### Primary conversion
Start project application.

### Proof obligations
- E-004: completed project count
- E-007: client testimonial about integrated strategy and implementation
- E-011: before-and-after case result

### Acceptance criteria
- The first viewport identifies the audience, problem, and service.
- The primary CTA reaches the application flow.
- Every substantive outcome claim maps to approved evidence.
- Keyboard users can complete the journey.
- The page has no horizontal overflow at required target widths.
```

## Separate requirements from visual solutions

Site contract:

```text
The visitor must be able to compare three engagement options without losing the recommended path.
```

Design contract later decides whether that becomes a table, guided selector, progressive disclosure, or another composition.

## Approve `SITE-CONTRACT.md`

Example:

```text
I approve SITE-CONTRACT.md as the delivery contract. Record the approval. Any material change to page jobs, conversion paths, required proof, functionality, or acceptance criteria must be approved again.
```

---

# 11. Shape the visual direction

Run:

```text
/shape-website
```

Recommended prompt:

```text
Shape the visual direction from the approved PRODUCT.md and SITE-CONTRACT.md. Inspect the existing design system first. Keep the four approval gates separate: shape brief, direction questions, visual evidence, and direction approval. Produce materially different directions rather than palette variations. Do not begin production implementation.
```

## Gate 1: Shape brief

Confirm:

- target surface;
- user and page job;
- content hierarchy;
- conversion priority;
- existing system and assets;
- technical constraints;
- brand, product, or hybrid register;
- scope of the design decision.

A small, clear page may need a compact brief. A stakeholder-heavy or multi-surface project may need a fuller one.

## Gate 2: Direction questions

Resolve:

- atmosphere and emotional register;
- density;
- typography character;
- color commitment;
- imagery and art direction;
- icon language;
- shape and border character;
- motion and interaction character;
- physical-use context;
- reference lessons;
- anti-reference boundaries.

## Gate 3: Visual evidence

Depending on the harness, use:

- generated visual mock directions;
- browser prototypes;
- structured page compositions;
- a small set of real components arranged in alternative directions.

Directions must differ materially in:

- composition;
- hierarchy;
- atmosphere;
- density;
- imagery;
- signature visual moves.

A blue version and a green version of the same layout are not separate directions.

If native image generation is unavailable, the agent should say so explicitly and use browser prototypes or a precise structured direction. It must not silently skip visual evidence.

## Gate 4: Approval

You may:

- approve one direction;
- combine explicitly named parts of directions;
- reject all directions and request another exploration;
- delegate a narrow decision to the agent.

Record selected and rejected directions in `DESIGN.md`.

## Design contract example

```markdown
## Approved direction
Editorial precision with a committed deep-red field, off-white content surfaces, high-contrast serif display type, restrained sans-serif utility type, documentary project imagery, and asymmetric proof compositions.

## Signature motifs
- Full-width red editorial bands at major transitions
- Large cropped project imagery paired with narrow evidence columns
- Inline evidence labels instead of floating icon cards

## Anti-patterns
- No repeated three-card grids unless the content is genuinely peer-level
- No gradient text
- No tiny uppercase eyebrow above every heading
- No generic glass panels

## Responsive priorities
- Preserve proof next to the claim it supports
- Keep application CTA reachable after every major decision section
- Recompose asymmetric pairs into a deliberate sequence rather than stacking blindly
```

Do not begin production implementation until `DESIGN.md` is approved.

---

# 12. Plan the tracer and delivery tickets

Run:

```text
/plan-website-delivery
```

Recommended prompt:

```text
Turn the approved product, site, and design contracts into a tracer-first delivery plan. Select the smallest complete experience with the highest architectural learning value. Define acceptance criteria before creating the remaining vertical tickets. Record blocking edges, collision risks, fresh-context boundaries, and the current frontier.
```

## Choose the tracer

The tracer is the smallest complete user experience that tests the important system assumptions.

A strong tracer tests several of these together:

- product positioning;
- evidence-backed copy;
- approved visual direction;
- component boundaries;
- Etch operations;
- ACSS token usage;
- dynamic data or forms;
- states;
- responsive composition;
- accessibility;
- browser verification.

The homepage is not automatically the tracer.

Examples:

| Website type | Possible tracer |
|---|---|
| Service business | Homepage to qualified application confirmation |
| Directory | Search to listing to detail page |
| Content publication | Article discovery to article to newsletter confirmation |
| Membership | Landing page to registration entry and error state |
| Ecommerce | Category to product to cart entry |

## Write tracer acceptance criteria first

```markdown
## Homepage-to-application tracer

- Intended visitors can recognize fit in the first viewport.
- The approved message hierarchy and visual direction are preserved.
- All substantive claims map to approved evidence.
- The primary CTA reaches the application form.
- Default, focus, validation-error, submitting, success, and failure states exist.
- The journey is keyboard-completable.
- Required target widths have no unintended overflow.
- ACSS owns system spacing, typography, color, and width values.
- Custom CSS exceptions are scoped and documented.
- Browser screenshots, DOM checks, console checks, and network checks are recorded.
```

## Create vertical tickets

Bad decomposition:

```text
Write all copy
Build all pages
Add all CSS
Make everything responsive
Do accessibility
```

Better decomposition:

```text
WEB-001: Deliver the global shell and homepage application tracer
WEB-002: Extract the proven component grammar from the tracer
WEB-003: Deliver the primary service enquiry journey
WEB-004: Deliver the case-study discovery and detail journey
WEB-005: Migrate remaining services onto the approved page architecture
WEB-006: Harden the full site against all contracts
```

Each ticket should include:

- stable ID;
- user-visible outcome;
- included and excluded scope;
- page-contract references;
- design-contract references;
- evidence IDs;
- dependencies and blocking edges;
- required capabilities and disciplines;
- acceptance criteria;
- browser evidence requirements;
- files or artifacts that may change;
- handoff requirements.

## Current frontier

The frontier is the set of approved, unblocked tickets that are safe to start now.

Example:

```markdown
## Current frontier

- WEB-001: Global shell and homepage application tracer

Blocked:
- WEB-002 depends on rendered completion of WEB-001
- WEB-003 depends on WEB-002 component extraction
- WEB-004 may begin after the global shell in WEB-001 is stable
```

Approve the tracer and delivery topology before implementation scales.

---

# 13. Implement one ticket

Use a fresh agent session for each substantial ticket.

Run:

```text
/implement-website-ticket WEB-001
```

Recommended prompt:

```text
Implement WEB-001 only. Read all nine durable artifacts first. Confirm the ticket is on the current frontier and all blockers are resolved. Restate the user-visible outcome and acceptance criteria. Load only the required disciplines. Use continuous rendered iteration and finish with an independent standards-and-contract review. Update DELIVERY-STATE.md and the delivery plan before ending.
```

## Start-of-ticket checks

The agent should verify:

- the named ticket exists;
- dependencies are complete;
- required product, site, and design decisions are approved;
- Etch and ACSS capabilities needed by the ticket are verified;
- the target environment is known;
- acceptance criteria are observable;
- shared components or files are not being changed concurrently by another agent.

## Typical discipline sequence

1. `website-copy`
2. `web-design`
3. `component-grammar`
4. `etch`
5. `acss`
6. `rendered-review`

Not every ticket requires every discipline, but substantial page work usually touches most of them.

## Implementation loop

```text
implement
→ render
→ inspect
→ compare with ticket and design contracts
→ correct
→ render again
```

Use this loop throughout the ticket, not only at the end.

## Preserve the approved direction

The following are blocking fidelity defects unless explicitly accepted:

- major approved composition is missing;
- intended imagery is replaced with generic decorative panels;
- navigation or CTA treatment changes materially;
- signature motifs disappear;
- hierarchy becomes generic;
- density changes enough to alter the character;
- responsive behavior destroys proof adjacency or action priority.

## Cover realistic states

Depending on the ticket:

- default;
- hover;
- focus-visible;
- active;
- disabled;
- loading;
- validation error;
- integration error;
- success;
- empty;
- long content;
- short content;
- missing media;
- first use;
- returning use.

## Respect the ACSS token boundary

Order of preference:

1. verified semantic ACSS tokens and global configuration;
2. verified ACSS utilities or layout capabilities;
3. stable component classes;
4. scoped component custom properties or CSS when the system does not own the requirement.

Never invent an ACSS variable name.

Document justified exceptions in the component grammar.

## Respect the Etch capability gate

If a required operation is unknown:

1. investigate available project tooling and official version-relevant evidence;
2. run a disposable experiment when safe;
3. record the result in `docs/agents/stack.md`;
4. block the seam when capability cannot be verified.

Do not replace implementation with a convincing description.

## Run deterministic checks

The browser audit detects issues such as:

- missing document language or title;
- missing or duplicate main landmarks;
- heading-level jumps;
- duplicate IDs;
- images without `alt` attributes;
- form controls without names;
- actions without accessible names;
- placeholder links;
- horizontal overflow;
- very small interactive targets;
- basic rendered text-contrast failures.

A zero-finding detector report does not mean the page is complete. You must still inspect screenshots, interactions, states, keyboard flow, console, network, performance, and contract fidelity.

## Close the ticket

Every criterion should be one of:

- verified with browser evidence;
- accepted deviation with approver and reason;
- blocked with named owner and next action.

Update:

- `DELIVERY-STATE.md`;
- `docs/site/delivery-plan.md`;
- `docs/site/component-grammar.md` when proven patterns changed;
- `docs/agents/stack.md` when capabilities changed;
- relevant contracts when an approved change occurred.

---

# 14. Review independently

Run:

```text
/review-website
```

Use a fresh agent context when possible.

Recommended prompt:

```text
Review the fixed release candidate independently. Read all durable artifacts. Run deterministic browser checks first, then review each qualitative axis separately. Record findings with severity, page, viewport, state, observed evidence, violated contract, smallest credible correction, disposition, owner, and re-verification. Do not infer a pass from source inspection.
```

## Review axis 1: Product and conversion

- Is the intended audience clear?
- Does each page serve its approved job?
- Does the journey preserve context and trust?
- Is the primary action findable and appropriate?
- Do secondary actions compete unnecessarily?

## Review axis 2: Copy and proof

- Does copy follow the approved message hierarchy?
- Are claims specific and understandable?
- Does every substantive claim have admissible evidence?
- Is proof placed near the uncertainty it resolves?
- Are calls to action appropriate to readiness?

## Review axis 3: Visual direction and craft

- Does implementation preserve the approved atmosphere and composition?
- Are signature motifs present and purposeful?
- Do typography, color, imagery, shape, and motion feel like one system?
- Is hierarchy obvious?
- Has generic card grammar replaced the approved direction?
- Are spacing and alignment deliberate?

## Review axis 4: Components and ACSS

- Are repeated components coherent?
- Are variants explicit?
- Are content seams respected?
- Are ACSS tokens real and correctly used?
- Are custom CSS exceptions scoped and documented?
- Are page-specific patches hiding a missing system decision?

## Review axis 5: Responsive states and accessibility

- required target widths;
- stress widths around reflow points;
- horizontal overflow;
- reading and focus order;
- keyboard completion;
- visible focus;
- labels and error messages;
- headings and landmarks;
- contrast;
- touch targets;
- zoom;
- reduced motion;
- loading, error, success, empty, and long-content states.

## Review axis 6: Stack and performance integrity

- Etch editor and frontend consistency;
- dynamic WordPress data;
- empty query states;
- console errors;
- runtime exceptions;
- failed network requests;
- broken assets;
- unnecessary layout shift;
- performance budgets;
- integration behavior.

## Review axis 7: Contract fidelity

- missing requirements;
- partial requirements;
- unapproved features;
- contradicted product decisions;
- contradicted visual decisions;
- incomplete ticket criteria;
- accepted deviations without records.

## Finding format

```markdown
### High — Form errors are not announced

**Axis:** Responsive states and accessibility
**Page:** Project application
**Viewport:** 390 × 844
**State:** Empty form submission
**Evidence:** Red messages appear visually, but focus remains on the submit button and no live region announces the summary.
**Contract:** The application page requires understandable keyboard and screen-reader error recovery.
**Correction:** Add an error summary, move focus to it, and associate field errors with inputs.
**Disposition:** Open
**Owner:** WEB-006
```

After fixes, re-run the affected page and state. Do not close findings from source inspection alone.

---

# 15. Ship the website

Run only after independent review passes:

```text
/ship-etch-site
```

Recommended prompt:

```text
Ship the reviewed release candidate using only the verified project deployment mechanism. Confirm backup, rollback, release scope, access, ownership, analytics, privacy, and form delivery before deployment. Then verify the live production URL independently and record the release in DELIVERY-STATE.md.
```

## Pre-launch safety

Confirm:

- fixed release revision;
- exact content state;
- approved deviations;
- backup or snapshot;
- rollback procedure;
- production access;
- release owner;
- form-delivery owner;
- analytics owner;
- privacy and consent behavior;
- monitoring or observability;
- launch window and communication.

## Live production verification

Verify production separately from staging:

- homepage and critical pages load;
- navigation works;
- primary conversion completes;
- forms deliver to the intended destination;
- validation and confirmation states work;
- dynamic content is present;
- empty states are safe;
- redirects work;
- canonical URL, title, and description are correct;
- sitemap and robots behavior are correct;
- social metadata is correct;
- analytics events fire;
- consent behavior works;
- responsive targets pass;
- keyboard path passes;
- console and network are clean enough for release;
- performance meets project budgets.

## Stop conditions

Do not launch when:

- rollback is unavailable;
- a critical conversion fails;
- production materially differs from the reviewed candidate;
- legal or privacy behavior is unresolved;
- required live browser verification cannot be performed;
- a launch-critical capability remains unknown.

---

# 16. Complete worked example

This example uses a five-page consultancy website whose goal is qualified project applications.

## Planned pages

```text
Home
Primary Service
Case Studies
About
Apply
```

## Step 1: Scaffold

```bash
cd ~/Code/agentic-etch-production
node scripts/scaffold-project.mjs ~/Sites/northstar-consulting
cd ~/Sites/northstar-consulting
```

Commit the scaffold.

## Step 2: Setup

```text
/setup-etch-production
```

Example results for a suitably configured project:

- WordPress verified;
- Etch page inspection, text editing, class application, and preview verified;
- Etch dynamic query creation remains unknown;
- ACSS installation and token source verified;
- browser screenshots, DOM, console, and network inspection verified;
- staging URL recorded;
- deployment recorded as a hosting workflow;
- rollback recorded as a hosting snapshot.

Do not copy these statuses. Keep your actual unknown or unavailable statuses.

## Step 3: Grill

```text
/grill-website
```

The agent asks:

```text
Which single buying situation should the homepage prioritize?
```

You answer:

```text
An owner-led consultancy has a credible service, but its existing website makes it look generic. The owner wants a stronger position and a qualified application path before a planned relaunch.
```

The conversation eventually produces:

- approved terminology in `CONTEXT.md`;
- approved audience, offer, voice, conversion intent, references, and anti-references in `PRODUCT.md`;
- evidence gaps and approved claims in the evidence register.

## Step 4: Specify

```text
/specify-website
```

The agent builds conversion paths and page contracts.

The main path becomes:

```text
recognize fit
→ understand the primary service
→ evaluate proof
→ assess project fit
→ start application
→ receive confirmation
```

You approve `SITE-CONTRACT.md`.

## Step 5: Shape

```text
/shape-website
```

The agent presents three materially different directions:

1. **Editorial authority** — large project imagery, asymmetric evidence compositions, committed deep-red field, serif display type.
2. **Technical clarity** — neutral product-led system, compact diagrams, structured comparison, restrained blue accent.
3. **Human workshop** — tactile photography, hand-marked process devices, warmer but non-generic color system, conversational hierarchy.

You approve direction 1 but delegate final body-type selection within the agreed character.

The agent records that decision and rejected alternatives in `DESIGN.md`.

## Step 6: Plan

```text
/plan-website-delivery
```

The tracer becomes:

```text
Homepage
→ primary service proof
→ project-fit section
→ application form
→ success state
```

Tickets:

```text
WEB-001 Global shell and homepage application tracer
WEB-002 Extract proven component grammar
WEB-003 Primary service enquiry journey
WEB-004 Case-study discovery and detail journey
WEB-005 About-page trust journey and remaining global content
WEB-006 Whole-site hardening
```

## Step 7: Implement tracer

Start a new session:

```text
/implement-website-ticket WEB-001
```

The agent:

- reads all artifacts;
- confirms the ticket is unblocked;
- writes or reconciles final copy;
- implements semantic structure in Etch;
- applies verified ACSS tokens;
- renders after each meaningful section;
- checks mobile, tablet, desktop, and wide targets;
- tests form states;
- runs the deterministic audit;
- inspects screenshots, keyboard flow, console, and network;
- records unresolved findings;
- updates delivery state.

## Step 8: Extract the system

After the tracer passes, implement `WEB-002` in a fresh session.

The component grammar may promote:

- global header;
- section heading composition;
- evidence block;
- testimonial figure;
- CTA band;
- application form.

It should not create a universal “content card” merely because several sections contain headings and paragraphs.

## Step 9: Complete remaining tickets

Run each ticket in a fresh context. Update the frontier after every completion.

## Step 10: Independent review

```text
/review-website
```

Resolve or explicitly accept findings.

## Step 11: Ship

```text
/ship-etch-site
```

Verify the live application flow, analytics, forms, redirects, metadata, accessibility, and rollback ownership.

---

# 17. Resume in a fresh session

Fresh sessions are expected. They reduce context decay.

Start with:

```text
This is an existing Agentic Etch Production v0.2 project. Read CONTEXT.md, PRODUCT.md, SITE-CONTRACT.md, DESIGN.md, DELIVERY-STATE.md, docs/agents/stack.md, docs/site/evidence.md, docs/site/component-grammar.md, and docs/site/delivery-plan.md. Summarize approved product, site, and design decisions; current frontier; blockers; accepted deviations; and verification status. Do not implement until you identify the correct workflow or ticket.
```

Before ending a session:

```text
Update DELIVERY-STATE.md with the exact completed scope, current stage, current frontier, blockers, ticket and commit links, browser evidence, accepted deviations, decisions requiring approval, and a concise handoff for a fresh agent.
```

A good handoff includes:

- exact ticket and branch;
- completed criteria;
- unresolved criteria;
- files and components changed;
- browser widths and states checked;
- console or network findings;
- decisions made;
- decisions still requiring approval;
- next safe action.

---

# 18. Use multiple agents safely

Parallelism is useful only when dependencies and shared seams are stable.

## Safe parallel example

```text
Agent A: Case-study listing and detail journey
Agent B: Application-form success and failure states
```

This may be safe when both use stable global components and do not modify the same contract.

## Unsafe parallel example

```text
Agent A: Redesign global typography and spacing
Agent B: Build all remaining pages using the current typography and spacing
```

Agent B depends on an unstable shared decision.

## Before parallel work

Record:

- ticket dependencies;
- shared files and components;
- contract sections each agent may change;
- expected merge order;
- collision risks;
- integration owner.

Do not allow two agents to silently make conflicting changes to `DESIGN.md`, global ACSS configuration, or a shared component contract.

---

# 19. Use the specialist disciplines

## `website-strategy`

Example:

```text
Review this sitemap with website-strategy. Explain which pages serve named user situations and conversion paths, and which pages exist only because competitors have them.
```

## `proof-chain`

```text
Audit every substantive homepage claim. Update the evidence register, identify unsupported strength, and propose evidence-safe wording or a proof request.
```

## `website-copy`

```text
Write final copy for the approved primary-service page contract. Use the evidence register. Separate unresolved content requests from production copy and do not provide a list of interchangeable alternatives.
```

## `web-design`

Shape mode:

```text
Use web-design shape mode to propose materially different visual directions for the approved page contract. Preserve product context and keep approval gates separate.
```

Craft mode:

```text
Use web-design craft mode to implement the approved direction. Preserve signature composition, states, responsive priorities, and visual anti-pattern boundaries.
```

Critique mode:

```text
Critique the rendered page against PRODUCT.md, SITE-CONTRACT.md, and DESIGN.md. Report observed evidence and material corrections, not generic design advice.
```

## `component-grammar`

```text
Review the completed tracer. Identify patterns with stable responsibilities and content seams that deserve promotion, page compositions that should remain local, and speculative abstractions that should be removed.
```

## `etch`

```text
Implement this approved section using only Etch operations verified in docs/agents/stack.md. Record any newly verified capability or limitation and do not claim completion without rendered evidence.
```

## `acss`

```text
Style this component using the project's verified ACSS tokens and configuration. Document any scoped custom CSS beyond the token boundary and do not invent variable names.
```

## `rendered-review`

```text
Run continuous rendered review on this vertical slice. Execute deterministic checks, inspect the rendered page at required widths and states, and compare it with the relevant product, site, design, and ticket contracts.
```

---

# 20. Validate project readiness

The project validator checks artifact presence and stage gates.

```bash
node scripts/validate-project.mjs /path/to/project --stage=setup
node scripts/validate-project.mjs /path/to/project --stage=product
node scripts/validate-project.mjs /path/to/project --stage=specification
node scripts/validate-project.mjs /path/to/project --stage=design
node scripts/validate-project.mjs /path/to/project --stage=planning
node scripts/validate-project.mjs /path/to/project --stage=implementation
node scripts/validate-project.mjs /path/to/project --stage=review
node scripts/validate-project.mjs /path/to/project --stage=ship
```

Examples:

- `product` requires approved `PRODUCT.md`;
- `specification` also requires approved `SITE-CONTRACT.md`;
- `design` also requires approved `DESIGN.md`;
- `planning` also requires an approved delivery plan, a nonempty tracer, and at least one real ticket row;
- later stages warn about missing current tickets, unverified scope, or unresolved stack capability.

Validation is a guardrail, not a substitute for human approval or browser review.

Repository maintainers run:

```bash
npm run validate
```

That checks versions, manifests, skill metadata, invocation policy, router coverage, templates, scripts, TODO leakage, and local Markdown links.

---

# 21. Common problems and corrections

## The agent begins implementation immediately

Cause:

- product, site, or design approval was skipped.

Correction:

```text
Stop implementation. Use /ask-etch-production to identify the missing approval boundary. Do not continue until the authoritative artifact is approved.
```

## The agent asks factual questions that the environment can answer

Correction:

```text
Inspect the repository, current website, connected tools, and verified documentation before asking me. Ask me only for business choices, approval decisions, or unavailable access.
```

## Strategy and visual design are mixed together

Correction:

```text
Move audience, offer, voice, and register decisions to PRODUCT.md. Keep page jobs and acceptance criteria in SITE-CONTRACT.md. Keep visual solutions and direction in DESIGN.md.
```

## Shape confirmation is treated as permission to build

Correction:

```text
Shape confirmation advances to direction questions and visual evidence. It is not implementation approval. Complete all four visual gates.
```

## The visual directions are merely palette swaps

Correction:

```text
Produce directions that differ materially in composition, hierarchy, density, imagery, atmosphere, and signature moves. Do not count color variations as separate directions.
```

## The implemented design looks generic

Correction:

```text
Compare the browser output with DESIGN.md. Identify which approved composition, imagery, typography character, color commitment, signature motifs, or density were lost. Correct those material defects before adding decoration.
```

## The agent invents an ACSS token

Correction:

```text
Remove the invented token. Verify the installed ACSS version and token source. Use a real token or record a scoped custom property beyond the token boundary.
```

## The agent claims Etch work is complete without changing Etch

Correction:

```text
Mark the work unimplemented. Verify the required Etch operation and perform it through the actual project control surface. Record the capability status in docs/agents/stack.md.
```

## The component library grows before the tracer works

Correction:

```text
Keep only minimum provisional boundaries required by the tracer. Promote durable components only after rendered repetition proves responsibility, variants, states, and content seams.
```

## The agent uses one enormous conversation for the entire website

Correction:

```text
Update durable artifacts and DELIVERY-STATE.md. Continue each substantial ticket in a fresh context using the artifacts as the source of truth.
```

## Desktop passes but mobile fails

Correction:

```text
Reopen the ticket. Review responsive content priority, reading order, proof adjacency, interactions, and overflow at required and stress widths. Correct the system or component rather than adding unexplained page patches.
```

## The deterministic audit reports zero findings, so the agent declares success

Correction:

```text
Detectors provide evidence, not proof. Continue screenshot inspection, keyboard testing, realistic states, console, network, performance, and qualitative contract review.
```

## There is no browser access

Correction:

```text
Mark the result implemented but unverified. List the exact pages, widths, states, journeys, keyboard checks, console checks, network checks, and performance checks still required.
```

## The workflow feels too heavy for a tiny site

Use:

- one concise `PRODUCT.md`;
- one site contract;
- one focused design direction;
- one tracer;
- a few vertical tickets.

Research and prototypes are conditional, not mandatory.

## The workflow feels too light for a large site

Add:

- separate page-type contracts;
- a decision map;
- explicit shared seams;
- dependency edges;
- multiple tracer experiences when distinct systems require them;
- fresh contexts and independent reviews per workstream.

---

# 22. Operational checklists

## Installation

- [ ] Skills installed
- [ ] Workflows visible
- [ ] Disciplines visible
- [ ] Website project opened in the correct directory
- [ ] Project artifacts scaffolded or migrated
- [ ] Initial artifact state committed

## Setup

- [ ] WordPress status recorded
- [ ] Etch version or evidence recorded
- [ ] Required Etch operations classified
- [ ] ACSS version or evidence recorded
- [ ] Token source recorded
- [ ] Browser tools recorded
- [ ] Visual-exploration tools recorded
- [ ] Staging and production recorded
- [ ] Deployment recorded
- [ ] Backup recorded
- [ ] Rollback recorded
- [ ] Tracker recorded
- [ ] Approval authority recorded

## Product

- [ ] Domain vocabulary established
- [ ] Business outcome defined
- [ ] Primary users defined
- [ ] Triggering situations defined
- [ ] Offer defined
- [ ] Differentiation defined
- [ ] Conversion intent defined
- [ ] Voice defined
- [ ] Proof gaps recorded
- [ ] Design register selected
- [ ] Physical-use context recorded
- [ ] References explained
- [ ] Anti-references explained
- [ ] Scope boundaries recorded
- [ ] `PRODUCT.md` approved

## Specification

- [ ] Conversion paths defined
- [ ] Information architecture justified
- [ ] Page jobs defined
- [ ] Message hierarchy defined
- [ ] Proof obligations mapped
- [ ] Dynamic content and states defined
- [ ] Functional integrations defined
- [ ] Responsive obligations defined
- [ ] Accessibility obligations defined
- [ ] SEO and performance obligations defined
- [ ] Acceptance criteria observable
- [ ] `SITE-CONTRACT.md` approved

## Design

- [ ] Shape brief confirmed
- [ ] Direction questions resolved
- [ ] Existing system inspected
- [ ] Materially different directions produced
- [ ] Visual evidence reviewed
- [ ] Selected direction recorded
- [ ] Rejected directions recorded
- [ ] Signature motifs recorded
- [ ] Responsive priorities recorded
- [ ] State coverage recorded
- [ ] Anti-patterns recorded
- [ ] `DESIGN.md` approved

## Planning

- [ ] Highest-risk assumptions identified
- [ ] Tracer selected
- [ ] Tracer acceptance criteria approved
- [ ] Vertical tickets created
- [ ] Dependencies recorded
- [ ] Shared seams recorded
- [ ] Collision risks recorded
- [ ] Fresh-context boundaries recorded
- [ ] Current frontier recorded
- [ ] Delivery plan approved

## Ticket implementation

- [ ] Ticket is on current frontier
- [ ] Dependencies complete
- [ ] Required capabilities verified
- [ ] Outcome and criteria restated
- [ ] Required disciplines loaded
- [ ] Real copy and proof used
- [ ] Approved direction preserved
- [ ] ACSS tokens verified
- [ ] Custom CSS exceptions documented
- [ ] Etch operations verified
- [ ] Realistic states covered
- [ ] Required widths rendered
- [ ] Deterministic audit run
- [ ] Screenshots inspected
- [ ] Keyboard path checked
- [ ] Console checked
- [ ] Network checked
- [ ] Independent ticket review completed
- [ ] Delivery state and handoff updated

## Whole-site review

- [ ] Fixed revision named
- [ ] Required pages listed
- [ ] Required journeys listed
- [ ] Required widths listed
- [ ] Required states listed
- [ ] Product and conversion reviewed
- [ ] Copy and proof reviewed
- [ ] Visual direction and craft reviewed
- [ ] Components and ACSS reviewed
- [ ] Responsive states and accessibility reviewed
- [ ] Stack and performance reviewed
- [ ] Contract fidelity reviewed
- [ ] Findings resolved, accepted, blocked, or deferred with owners
- [ ] Corrected findings re-verified
- [ ] Shipping recommendation recorded

## Launch

- [ ] Reviewed candidate fixed
- [ ] Release scope recorded
- [ ] Backup confirmed
- [ ] Rollback confirmed
- [ ] Production access confirmed
- [ ] Release owner confirmed
- [ ] Form owner confirmed
- [ ] Analytics owner confirmed
- [ ] Privacy and consent confirmed
- [ ] Observability confirmed
- [ ] Production deployed through verified mechanism
- [ ] Live navigation checked
- [ ] Live conversion checked
- [ ] Live forms checked
- [ ] Live dynamic data checked
- [ ] Live redirects checked
- [ ] Live metadata checked
- [ ] Live analytics checked
- [ ] Live responsive and accessibility checks completed
- [ ] Live console and network checked
- [ ] Release recorded in `DELIVERY-STATE.md`

---

# 23. Glossary

## Acceptance criteria

Observable conditions that must be true before work is complete.

## Blocking edge

A dependency showing that one ticket cannot safely start until another result exists.

## Component grammar

The reusable components, responsibilities, variants, content seams, states, and composition rules that form the interface language.

## Content seam

The boundary inside a component where content may vary without requiring a structural redesign.

## Conversion path

The complete journey from a user's triggering situation to a meaningful action.

## Design register

The broad mode the design serves:

- **brand** — identity and emotional resonance lead;
- **product** — repeated tasks, clarity, and state design lead;
- **hybrid** — marketing and task-led surfaces share a system but use different composition and density rules.

## Durable artifact

A project file that preserves approved decisions or execution state across agent sessions.

## Fresh context

A new agent session that begins from durable project artifacts instead of depending on a long prior conversation.

## Page contract

The durable agreement describing a page's user, job, conversion, content, proof, behavior, and acceptance criteria.

## Physical-use context

A concrete description of who uses the surface, where, under what ambient conditions, with what urgency, and in what mood.

## Proof chain

```text
claim → evidence → source → permissible wording
```

## Rendered truth

The principle that actual browser output and behavior outrank source-code intention, builder state, or an agent's description.

## Signature motif

A distinctive recurring visual move connected to the approved direction, such as a specific composition, transition device, imagery treatment, or evidence pattern.

## Token boundary

The boundary between system-level styling owned by ACSS and component-specific styling that may justify scoped custom CSS.

## Tracer experience

The smallest complete user experience that tests strategy, content, visual direction, implementation, states, responsive behavior, and verification together.

## Vertical ticket

A ticket delivering a complete user-observable outcome instead of one horizontal technical layer.

## Visual evidence

A concrete representation used to approve direction before implementation, such as generated mocks, browser prototypes, or structured page compositions.

## Current frontier

The approved, unblocked tickets that are safe to begin now.

---

# 24. Frequently asked questions

## Do I need Etch automation to use the system?

No. Strategy, proof, copy, visual shaping, component reasoning, and review can still be useful. Etch implementation remains manual or unverified until a real control path is available.

## Must the homepage be the tracer?

No. Choose the smallest complete journey with the highest architectural learning value.

## Do I have to create three visual directions every time?

No fixed number is required. You need enough materially different evidence to make the decision real. A constrained existing system may need fewer alternatives; an ambiguous greenfield brand may need more.

## Can the agent use custom CSS?

Yes. Use verified ACSS system values first. Add the smallest scoped custom styling needed for a component requirement that ACSS does not own, and document the exception.

## Can contracts change after approval?

Yes. Record the proposed change, explain downstream effects, obtain approval, and update dependent artifacts or tickets. Do not silently drift.

## Should every repeated pattern become a component?

No. Promote a component when it has a stable responsibility, meaningful public interface, proven content seam, understood states, and real reuse leverage.

## Should the same agent implement and review?

Continuous self-review is necessary during implementation. A final independent review from a fresh context is still preferable because it reduces confirmation bias and context pollution.

## Can multiple tickets run in parallel?

Yes, when dependencies are complete and shared seams are stable. Record collision risks and ownership first.

## Is a zero-finding browser audit a pass?

No. It means only that the detector did not find the conditions it knows how to detect. Qualitative and interaction review remains required.

## How do I know the system is working?

A fresh agent should be able to read the nine artifacts and accurately explain:

- the approved product and audience;
- page obligations;
- visual direction;
- admissible claims;
- verified stack capabilities;
- component rules;
- delivery topology;
- current frontier;
- blockers and verification state.

The strongest milestone is not merely that one page looks good. It is that another agent can continue and review the work without depending on the original conversation.

---

# Minimal quick-start

From a checkout of Agentic Etch Production:

```bash
node scripts/scaffold-project.mjs /path/to/website-project
```

Then inside the project:

```text
/setup-etch-production
/grill-website
/specify-website
/shape-website
/plan-website-delivery
/implement-website-ticket WEB-001
/review-website
/ship-etch-site
```

Remember:

1. Product truth before page specification.
2. Page obligations before visual solutions.
3. Visual approval before production implementation.
4. One tracer before system expansion.
5. One substantial ticket per fresh context.
6. Verified Etch operations and ACSS tokens only.
7. Browser evidence before completion or shipping.
