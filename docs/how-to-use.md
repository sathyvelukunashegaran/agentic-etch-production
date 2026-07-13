# How to Use Agentic Etch Production

This guide explains how to use Agentic Etch Production from the beginning, even if you have never used agent skills, workflow files, Etch automation, or a structured website-production system before.

The system is designed to help an AI coding agent plan, design, build, review, and eventually ship WordPress websites made with **Etch** and **Automatic.css**.

It does not replace your judgment. It gives the agent a reliable operating method so it is less likely to:

- start building before the website is understood;
- invent claims, Etch operations, or ACSS tokens;
- forget decisions made earlier;
- create a large speculative component library;
- declare a page complete without seeing it in a browser;
- lose context when work continues in a new session.

---

## Table of contents

1. [What this repository is](#1-what-this-repository-is)
2. [What you need before starting](#2-what-you-need-before-starting)
3. [How the system works](#3-how-the-system-works)
4. [Install the skills](#4-install-the-skills)
5. [Prepare your website project](#5-prepare-your-website-project)
6. [Understand the project files](#6-understand-the-project-files)
7. [Choose the correct workflow](#7-choose-the-correct-workflow)
8. [Run setup](#8-run-setup)
9. [Clarify the website](#9-clarify-the-website)
10. [Approve the site contract](#10-approve-the-site-contract)
11. [Deliver the first tracer experience](#11-deliver-the-first-tracer-experience)
12. [Turn the tracer into a reusable system](#12-turn-the-tracer-into-a-reusable-system)
13. [Build the remaining website](#13-build-the-remaining-website)
14. [Review the rendered website](#14-review-the-rendered-website)
15. [Ship the website](#15-ship-the-website)
16. [Complete beginner walkthrough](#16-complete-beginner-walkthrough)
17. [How to resume work in a new session](#17-how-to-resume-work-in-a-new-session)
18. [How to work with tickets and multiple agents](#18-how-to-work-with-tickets-and-multiple-agents)
19. [How the individual disciplines work](#19-how-the-individual-disciplines-work)
20. [Common problems and fixes](#20-common-problems-and-fixes)
21. [Recommended first pilot project](#21-recommended-first-pilot-project)
22. [Project checklists](#22-project-checklists)
23. [Glossary](#23-glossary)
24. [Frequently asked questions](#24-frequently-asked-questions)

---

# 1. What this repository is

Agentic Etch Production is a collection of reusable instructions called **skills**.

A skill teaches an AI agent how to perform a particular task or follow a particular standard. Instead of explaining your preferred process again in every conversation, you install the skills once and invoke them when needed.

This repository contains two kinds of skills.

## Human-invoked workflows

These are the major commands that you deliberately start:

| Workflow | Purpose |
|---|---|
| `/setup-etch-production` | Inspect and configure a project before production begins |
| `/ask-etch-production` | Recommend the correct workflow when you are unsure what to do next |
| `/grill-website` | Clarify the business, audience, offer, pages, conversion path, and evidence |
| `/deliver-etch-site` | Specify, build, systematize, expand, and harden the website |
| `/ship-etch-site` | Verify and launch a completed website safely |

These workflows are human-invoked because they can make consequential changes to project state.

## Model-invoked disciplines

These are specialist capabilities that a workflow or the agent loads when required:

| Discipline | Responsibility |
|---|---|
| `website-strategy` | Users, page jobs, information architecture, and conversions |
| `proof-chain` | Claims, evidence, source quality, and permissible wording |
| `website-copy` | Evidence-backed copy and calls to action |
| `web-design` | Hierarchy, visual direction, responsive priority, and interaction intent |
| `component-grammar` | Reusable components, variants, content seams, and composition rules |
| `etch` | Verified Etch implementation operations |
| `acss` | Verified Automatic.css tokens and scoped CSS decisions |
| `rendered-review` | Browser-based review and specification fidelity |

You normally do not need to invoke every discipline manually. The main workflows explicitly load them at the right time.

---

# 2. What you need before starting

The workflow is most useful when you have the following.

## Required for any usage

- An AI agent environment that can load the skills
- A repository or project folder where durable project files can be stored

The strategy, proof, copy, design, component, and review disciplines can be used without automated access to Etch or Automatic.css.

## Required for full Etch and ACSS implementation

- A WordPress website project or staging site
- Etch installed or available in the project
- Automatic.css installed or available in the project

## Strongly recommended

- A staging environment rather than direct production access
- Browser automation or at least screenshot capability
- Access to inspect the rendered DOM, console, and network behavior
- A source of business information such as a brief, existing site, customer notes, or founder interview
- Real proof such as testimonials, metrics, certifications, case studies, or screenshots
- A Git repository so changes can be reviewed and reverted

## Important limitation

The system does not assume that the agent can control Etch merely because Etch is installed.

The agent must verify what it can actually do in the current environment. For example:

Verify each capability separately:

- page inspection;
- element creation and editing;
- reusable component editing;
- WordPress data binding;
- preview behavior;
- publishing behavior;
- responsive-state inspection.

Unknown capability must remain marked as **unknown** until evidence is found.

The same rule applies to Automatic.css. The agent must never invent a token or variable name.

---

# 3. How the system works

The default path has six production movements.

```text
Understand
  -> Specify
  -> Prove
  -> Systematize
  -> Expand
  -> Harden
  -> Ship
```

## Understand

The system determines:

- who the website is for;
- what situation brought the visitor to the site;
- what the business offers;
- why the offer is different;
- what action the visitor should take;
- what claims can be supported;
- what remains unknown.

## Specify

The understanding is converted into a durable contract that defines:

- website outcomes;
- user journeys;
- sitemap;
- page jobs;
- message hierarchy;
- proof requirements;
- design intent;
- functional behavior;
- responsive requirements;
- accessibility requirements;
- acceptance criteria.

## Prove

The system chooses one small but complete user experience and implements it from beginning to end.

This is called the **tracer experience**.

The tracer is not necessarily the homepage. It is the smallest experience that tests the important assumptions of the project.

Examples:

- Service business: homepage to enquiry form
- Directory: search to listing to detail page
- Membership site: landing page to registration entry
- Ecommerce site: category to product to cart entry
- Content site: article discovery to article to newsletter signup

## Systematize

Only after the tracer works does the agent extract reusable patterns:

- global primitives;
- components;
- component variants;
- content seams;
- composition rules;
- responsive behavior;
- ACSS token usage;
- justified custom CSS exceptions.

## Expand

The remaining work is divided into complete user-observable tickets. Each ticket should deliver a useful page, journey, or capability rather than one technical layer.

## Harden

The complete website is reviewed against the contract using actual browser evidence.

## Ship

The production candidate is deployed and then verified again on the live URL.

---

# 4. Install the skills

The exact installation method depends on your agent environment.

## Option A: Agent Skills-compatible environment

Run:

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

After installation, confirm that the five workflows are visible:

```text
setup-etch-production
ask-etch-production
grill-website
deliver-etch-site
ship-etch-site
```

## Option B: Claude Code plugin

Add the marketplace:

```text
/plugin marketplace add sathyvelukunashegaran/agentic-etch-production
```

Install the plugin:

```text
/plugin install agentic-etch-production@sathyvelukunashegaran
```

Restart or refresh the agent session if your environment requires it.

## Option C: Manual use

You can clone the repository and point your agent environment at the skill directories.

```bash
git clone https://github.com/sathyvelukunashegaran/agentic-etch-production.git
```

The skills live in:

```text
skills/workflows/
skills/disciplines/
```

Manual installation varies by agent platform. The important requirement is that each skill's `SKILL.md` and supporting files are available to the agent.

## Confirm installation

Ask your agent:

```text
List the Agentic Etch Production workflows available in this session. Do not run any workflow yet.
```

You should see the five workflows and, ideally, the eight model-invoked disciplines.

---

# 5. Prepare your website project

The skills repository and your website project are separate things.

- The **skills repository** contains the reusable operating method.
- The **website project** contains one client's or one business's actual website files and decisions.

Do not put client-specific strategy into the skills repository.

## Create the project memory files

From a checkout of Agentic Etch Production, run:

```bash
node scripts/scaffold-project.mjs /path/to/your/wordpress-project
```

Example on macOS:

```bash
node scripts/scaffold-project.mjs ~/Sites/acme-website
```

Example when already inside the target project:

```bash
node /path/to/agentic-etch-production/scripts/scaffold-project.mjs .
```

The command creates:

```text
CONTEXT.md
SITE-CONTRACT.md
DELIVERY-STATE.md
docs/agents/stack.md
docs/site/evidence.md
docs/site/component-grammar.md
```

Existing files are preserved by default.

## Force replacement

Use `--force` only when you intentionally want to replace existing scaffold files:

```bash
node scripts/scaffold-project.mjs /path/to/project --force
```

Do not use `--force` on a real project unless you have reviewed or backed up the existing project-memory files.

## Commit the empty scaffold

It is useful to commit the starting files before the workflow begins:

```bash
git add CONTEXT.md SITE-CONTRACT.md DELIVERY-STATE.md docs/
git commit -m "initialize agentic website workflow"
```

This makes later changes easy to inspect.

---

# 6. Understand the project files

These files are the memory of the workflow. They allow a fresh agent session to continue without reading every previous conversation.

## `CONTEXT.md`

This file defines the business and product vocabulary.

Use it for:

- exact meanings of important terms;
- names of services, plans, products, audiences, or programs;
- terminology that should be used consistently;
- terminology that should be avoided.

Do not use it for:

- implementation details;
- temporary design ideas;
- ticket status;
- code architecture.

Example:

```markdown
| Term | Meaning | Avoid |
|---|---|---|
| Strategy Sprint | A two-week paid engagement that produces a validated website direction | Discovery call, consultation package |
| Qualified lead | A decision-maker with an active project, budget, and launch window | Any email subscriber |
```

## `SITE-CONTRACT.md`

This is the most important strategic file.

It defines what the website must accomplish.

It should eventually contain:

- business outcome;
- users and triggering situations;
- offer and differentiation;
- conversion paths;
- information architecture;
- page contracts;
- visual register;
- content model;
- functionality;
- responsive obligations;
- accessibility obligations;
- out-of-scope boundaries;
- open decisions.

The status should remain `draft` until you explicitly approve it.

## `DELIVERY-STATE.md`

This is the execution ledger.

It records:

- the current movement;
- completed work;
- blockers;
- current frontier;
- delivery ticket links;
- verification status;
- session handoff information.

The agent should update it at meaningful boundaries, especially before ending a session.

## `docs/agents/stack.md`

This file records verified technical capabilities.

It should answer:

- Is WordPress confirmed?
- Is Etch confirmed?
- Which Etch operations are available?
- Is Automatic.css confirmed?
- Where are the ACSS tokens documented or discoverable?
- What browser tools are available?
- Which staging and production environments exist?
- How is deployment performed?
- How is rollback performed?
- Which issue tracker is used?

A capability must have evidence. Intention is not evidence.

## `docs/site/evidence.md`

This file maps claims to evidence.

Example:

```markdown
| ID | Claim | Classification | Source | Confidence | Permissible wording | Status |
|---|---|---|---|---|---|---|
| E-001 | 150 projects delivered | verified fact | CRM export dated 2026-07-01 | high | More than 150 projects delivered | approved |
| E-002 | Best agency in Malaysia | unavailable | none | low | Do not publish | blocked |
```

## `docs/site/component-grammar.md`

This file defines the reusable interface language after the tracer has been tested.

It should not become a speculative catalogue of everything the site might need.

For each component, record:

- responsibility;
- inputs;
- content seam;
- variants;
- allowed compositions;
- responsive behavior;
- accessibility obligations;
- ACSS usage;
- custom CSS exceptions.

---

# 7. Choose the correct workflow

When you are uncertain, run:

```text
/ask-etch-production
```

The router should recommend one of the main workflows.

## Use `/setup-etch-production` when

- the project has never used this system;
- project-memory files are missing;
- Etch capability is unclear;
- ACSS capability is unclear;
- browser verification is not configured;
- deployment or rollback is unknown.

## Use `/grill-website` when

- the audience is vague;
- the offer is unclear;
- the business says the website is "for everyone";
- page purpose is unknown;
- the sitemap is based on habit rather than user journeys;
- copy depends on unsupported claims;
- the website has no clear conversion path.

## Use `/deliver-etch-site` when

- setup is complete;
- the site contract is approved;
- you are ready to specify or build the tracer;
- the tracer is ready to become a reusable system;
- remaining pages need to be ticketed and delivered;
- the full site needs hardening.

## Use `/ship-etch-site` when

- the entire site is complete;
- hardening is complete;
- launch blockers are resolved;
- deployment and rollback are known;
- you are ready to verify the production environment.

---

# 8. Run setup

Open the website project in your agent environment and run:

```text
/setup-etch-production
```

A useful accompanying prompt is:

```text
Inspect this repository and configure it for Agentic Etch Production. Verify WordPress, Etch, Automatic.css, browser tooling, environments, deployment, rollback, and issue tracking. Do not assume a capability merely because the project intends to use it. Record findings in the project artifacts and ask me only about decisions that cannot be discovered from the environment.
```

## What setup should inspect

The agent should inspect:

- repository structure;
- existing `AGENTS.md` or `CLAUDE.md`;
- WordPress files or configuration;
- Etch installation or connection evidence;
- ACSS installation and token evidence;
- local or remote browser tools;
- staging and production configuration;
- deployment scripts or hosting integration;
- rollback method;
- issue tracker;
- existing project documentation.

## What setup should not do

Setup should not:

- start designing pages;
- create final copy;
- invent missing integrations;
- claim that Etch is controllable without evidence;
- overwrite existing project instructions;
- mark unknown capabilities as verified.

## Review the result

Open `docs/agents/stack.md` and check that each major capability is one of:

- verified;
- unavailable;
- unknown.

Bad entry:

```markdown
## Etch
Status: available because the client wants to use Etch
```

Good entry:

```markdown
## Etch
Status: verified
Evidence: Etch plugin version shown in project environment and page editor successfully opened
Available operations: inspect page tree, edit text, add class, preview page
Unverified operations: reusable component creation, dynamic data binding, publishing
```

Do not proceed to implementation while a required operation remains unknown.

---

# 9. Clarify the website

Run:

```text
/grill-website
```

A useful prompt is:

```text
Help me clarify this website rigorously. Ask one decision question at a time, recommend an answer, challenge vague claims, and update CONTEXT.md, SITE-CONTRACT.md, and docs/site/evidence.md as decisions become clear. Do not start implementation.
```

## Why the workflow asks questions

The workflow is designed to discover decisions that cannot be found in the repository.

The agent should research facts from available materials and ask you only about choices such as:

- which audience matters most;
- what outcome matters most;
- which action is the primary conversion;
- which offer should lead;
- what the business is willing to claim;
- what visual register fits the brand;
- what is intentionally out of scope.

## Good answers versus weak answers

Weak audience answer:

```text
Small businesses and anyone who needs a website.
```

Stronger answer:

```text
Owner-led service businesses with an existing offer, weak online positioning, and a launch or relaunch planned within the next three months.
```

Weak conversion answer:

```text
Get in touch.
```

Stronger answer:

```text
The primary conversion is a qualified project application. Visitors who are not ready can download the website planning guide as the secondary action.
```

Weak differentiation:

```text
We provide high-quality service and care about customers.
```

Stronger differentiation:

```text
The engagement combines positioning, copy, and implementation in one accountable team, reducing the handoff gap between strategy and production.
```

## What must be resolved

Before approval, the workflow should resolve:

1. Business outcome
2. Primary users
3. Triggering situations
4. Offer
5. Differentiation
6. Primary conversion
7. Secondary conversion
8. Sitemap
9. Page jobs
10. Message hierarchy
11. Proof obligations
12. Visual register
13. Functional requirements
14. Responsive requirements
15. Accessibility requirements
16. Out-of-scope boundaries
17. Open risks

---

# 10. Approve the site contract

The site contract is a decision boundary.

Implementation should not scale until the contract is approved.

## Review the contract

Check whether a fresh person could answer:

- Who is the site for?
- What problem or situation brought them here?
- What does the business offer?
- Why should the visitor believe it?
- What should the visitor do next?
- Why does each major page exist?
- Which claims are supported?
- What does success look like?
- What is not included?

## Approval wording

You can approve with a clear instruction such as:

```text
I approve SITE-CONTRACT.md as the current delivery contract. Mark it approved and record today's date. Any material change to audience, offer, conversion, sitemap, or proof should return for approval.
```

Approval should be recorded in the file, not only remembered in chat.

Example:

```markdown
**Status:** approved
**Approved by:** Sathy Velukunashegaran
**Approved on:** 2026-07-14
```

## Changes after approval

The contract may change, but changes must be explicit.

A material change includes:

- changing the primary audience;
- adding a new offer;
- changing the main conversion;
- adding a new page type;
- making a new unsupported claim;
- changing the visual direction substantially;
- adding a major functional requirement.

Record the change and approval rather than silently changing implementation.

---

# 11. Deliver the first tracer experience

Run:

```text
/deliver-etch-site
```

A useful starting prompt is:

```text
Begin delivery from the approved site contract. Select the smallest end-to-end tracer experience that gives us the most architectural learning. Write its acceptance criteria before implementation. Do not expand into the full website until the tracer has passed rendered review.
```

## Choose the tracer

The best tracer is:

- small enough to complete;
- complete enough for a real user to experience;
- strategically important;
- technically representative;
- likely to reveal component, Etch, ACSS, responsive, and content problems.

## Example tracer for a service business

```text
Homepage hero
-> primary service explanation
-> proof section
-> project-fit section
-> application CTA
-> application form
-> confirmation state
```

## Example tracer acceptance criteria

```markdown
### Homepage-to-application tracer

- The intended audience can identify that the service is for them within the first viewport.
- The primary value proposition matches the approved message hierarchy.
- Every substantive claim has an approved evidence reference.
- The primary CTA leads to the application form.
- The form contains required labels, errors, and confirmation behavior.
- Keyboard users can complete the journey.
- No horizontal overflow exists at 360px, 768px, 1024px, and 1440px.
- ACSS tokens are used for system spacing, typography, colors, and widths.
- Any custom CSS exception is documented in the component grammar.
- The rendered journey has been reviewed in a real browser.
```

## Implementation sequence

The workflow should explicitly load the disciplines in this order when relevant:

1. `website-copy`
2. `web-design`
3. `component-grammar`
4. `etch`
5. `acss`
6. `rendered-review`

The agent should then repeat:

```text
Implement
-> Render
-> Inspect
-> Compare with contract
-> Correct
-> Render again
```

## Do not accept source-only completion

The following is not sufficient:

```text
The classes are present and the HTML looks correct, so the page is complete.
```

The page must be rendered and checked.

If browser access is unavailable, the status must be:

```text
Implemented but unverified
```

not:

```text
Passed
```

---

# 12. Turn the tracer into a reusable system

After the tracer passes rendered review, the workflow enters **Systematize**.

Now the agent can update:

```text
docs/site/component-grammar.md
```

## Promote only proven patterns

A pattern deserves promotion when:

- it has a stable responsibility;
- it appears more than once or has clear high-leverage reuse;
- its content can vary within a defined seam;
- its responsive behavior is understood;
- its accessibility obligations are known;
- it has passed rendered review.

## Example component entry

```markdown
## Proof card

**Responsibility:** Present one specific credibility signal next to the claim it supports.

**Inputs:**
- proof type
- headline
- supporting text
- source label
- optional image

**Content seam:** Text length may vary within the documented limits; proof type may be testimonial, metric, certification, or case result.

**Variants:**
- compact
- featured

**Responsive behavior:**
- three-column layout at wide widths
- one-column sequence below the project grid breakpoint

**Accessibility:**
- testimonial attribution remains text, not image-only
- decorative quotation marks are ignored by assistive technology

**ACSS:**
- semantic spacing and typography tokens
- project surface and border tokens

**Custom CSS exception:**
- none
```

## Avoid premature abstraction

Do not create a universal component simply because two sections both contain a heading and text.

The component must have a reusable responsibility, not merely a similar shape.

---

# 13. Build the remaining website

After systematizing the tracer, enter **Expand**.

The remaining work should be divided into vertical delivery tickets.

## Bad ticket decomposition

```text
Create all CSS
Build all headers
Write all copy
Make everything responsive
Do accessibility
```

These tickets separate technical layers and delay usable outcomes.

## Better ticket decomposition

```text
Deliver the primary service enquiry journey
Deliver the case-study discovery and detail journey
Deliver the reusable service-template architecture
Migrate remaining services onto the approved template
Deliver mobile navigation and global footer behavior
```

Each ticket should include:

- purpose;
- user-visible outcome;
- relevant page contract;
- dependencies;
- blocking relationships;
- required skills;
- acceptance criteria;
- rendered verification requirements.

## Example ticket

```markdown
# Deliver primary service enquiry journey

## Outcome
A qualified visitor can understand the primary service, review relevant proof, and submit a project application.

## Includes
- primary service page
- proof components
- CTA transition
- application form
- confirmation state

## Depends on
- approved service page contract
- approved proof entries E-004, E-006, and E-009
- global navigation component

## Acceptance criteria
- page message hierarchy matches the contract
- form works in browser
- mobile and keyboard journeys pass rendered review
- no invented ACSS tokens
- component changes are recorded in component grammar
```

## Use fresh sessions

For substantial tickets, begin a fresh agent session.

Ask the new agent to read:

```text
CONTEXT.md
SITE-CONTRACT.md
DELIVERY-STATE.md
docs/agents/stack.md
docs/site/evidence.md
docs/site/component-grammar.md
```

This is safer than continuing one extremely long conversation.

---

# 14. Review the rendered website

Rendered review is not a visual polish pass. It is a multi-axis verification process.

## Review axis 1: Strategy and conversion

Check:

- Is the intended audience clear?
- Does each page have one coherent job?
- Can the visitor find the intended action?
- Does the conversion path preserve trust and context?
- Are secondary actions distracting from the primary action?

## Review axis 2: Copy and proof

Check:

- Does the copy follow the approved message hierarchy?
- Are claims specific?
- Does every important claim have evidence?
- Is proof placed near the uncertainty it resolves?
- Are calls to action suitable for the visitor's readiness?

## Review axis 3: Visual hierarchy and component grammar

Check:

- Is the most important information visually dominant?
- Does spacing reveal structure?
- Are repeated components coherent?
- Are variants intentional?
- Has excessive card usage flattened the hierarchy?
- Does the visual register match the audience and offer?

## Review axis 4: Responsive behavior and accessibility

Check:

- required widths;
- horizontal overflow;
- reading order;
- keyboard navigation;
- visible focus;
- landmarks;
- heading hierarchy;
- labels and error messages;
- contrast;
- touch target size;
- reduced-motion behavior;
- content priority on small screens.

## Review axis 5: Stack integrity

Check:

- Etch editor and frontend agree;
- dynamic WordPress data renders correctly;
- empty states are handled;
- ACSS tokens are valid;
- custom CSS is scoped and documented;
- no avoidable duplicate styles exist;
- console errors are absent;
- network requests succeed.

## Review axis 6: Contract fidelity

Check:

- Identify missing requirements.
- Flag partially implemented requirements.
- Find features that appeared without approval.
- Note approved decisions contradicted by the implementation.
- Record deviations that were consciously accepted.

## Finding format

Use a consistent finding format:

```markdown
### High: Application form errors are not announced

**Observed evidence:** Submitting an empty form displays red text visually, but focus remains on the submit button and no live region announces the error.

**Contract:** Accessibility obligations require understandable form errors for keyboard and screen-reader users.

**Correction:** Add an error summary, move focus to it after failed submission, and associate field errors with their inputs.

**Disposition:** Open
```

---

# 15. Ship the website

Run:

```text
/ship-etch-site
```

Only run this after hardening is complete.

## Pre-launch requirements

The workflow should confirm:

- exact release scope;
- staging candidate;
- backup or snapshot;
- rollback procedure;
- production access;
- responsible owner;
- form-delivery owner;
- analytics owner;
- unresolved deviations;
- launch blockers.

## Production verification

The live site must be checked separately from staging.

Verify:

- homepage loads;
- navigation works;
- primary conversion works;
- forms deliver correctly;
- confirmation states work;
- dynamic content is present;
- redirects work;
- metadata is correct;
- indexability is correct;
- analytics fires;
- consent behavior works;
- no production-only console or network errors appear;
- required responsive widths still pass.

## Stop conditions

Do not launch when:

- rollback is unknown;
- critical forms fail;
- production differs materially from staging;
- legal or privacy requirements are unresolved;
- the agent cannot verify the live site;
- a critical journey is blocked.

---

# 16. Complete beginner walkthrough

This example shows how a beginner might use the system for a small service-business website.

## Project

A consultancy wants a five-page website:

```text
Home
Services
About
Case Studies
Contact
```

The business wants more qualified project applications.

## Step 1: Install the skills

```bash
npx skills@latest add sathyvelukunashegaran/agentic-etch-production
```

## Step 2: Scaffold project memory

The scaffold script comes from a local checkout of the Agentic Etch Production repository. Run it from that checkout:

```bash
cd /path/to/agentic-etch-production
node scripts/scaffold-project.mjs ~/Sites/consultancy-site
```

Alternatively, run the script by its absolute path while remaining in another directory:

```bash
node /path/to/agentic-etch-production/scripts/scaffold-project.mjs ~/Sites/consultancy-site
```

## Step 3: Open the project in the agent

```bash
cd ~/Sites/consultancy-site
```

Start your preferred agent from this directory.

## Step 4: Run setup

```text
/setup-etch-production
```

Ask the agent to inspect everything it can before asking questions.

Example result for a suitably configured project:

- WordPress verified
- Etch verified for page inspection and editing
- ACSS verified with token source
- browser preview verified
- staging URL recorded
- deployment recorded as manual
- rollback recorded as hosting snapshot

Your project may produce different results. Keep any capability as `unknown` or `unavailable` when setup cannot verify it; do not copy the example statuses into the project.

## Step 5: Clarify the site

```text
/grill-website
```

The agent asks questions such as:

```text
Which single buying situation should the homepage prioritize?
```

You answer:

```text
An owner-led consulting business has a credible service but its current website makes the offer look generic, and the owner wants a repositioned website before a planned launch.
```

The workflow continues one decision at a time.

## Step 6: Approve the contract

After reviewing `SITE-CONTRACT.md`, say:

```text
I approve this contract. Record the approval. Use the homepage-to-project-application journey as the tracer.
```

## Step 7: Deliver the tracer

```text
/deliver-etch-site
```

The agent writes tracer acceptance criteria and then builds:

```text
Homepage
-> service proof
-> project-fit section
-> contact form
-> confirmation state
```

## Step 8: Review browser evidence

The agent checks:

```text
360px
768px
1024px
1440px
keyboard flow
form errors
console
network
```

The tracer remains open until the criteria pass.

## Step 9: Extract component grammar

The agent records proven components such as:

- site header
- section heading
- proof card
- testimonial block
- CTA band
- application form

## Step 10: Create delivery tickets

The remaining work becomes:

```text
Ticket 1: Deliver Services page and enquiry transition
Ticket 2: Deliver Case Studies listing and detail experience
Ticket 3: Deliver About page trust journey
Ticket 4: Complete global navigation and footer
Ticket 5: Whole-site hardening
```

## Step 11: Complete each ticket in a fresh session

At the start of each session, ask:

```text
Read the project artifacts, summarize the current frontier, and implement only the named ticket. Do not change approved strategy without recording a contract change. Finish with rendered review and update DELIVERY-STATE.md.
```

## Step 12: Harden and ship

After all tickets pass:

```text
/ship-etch-site
```

The agent verifies the live production environment and records the release.

---

# 17. How to resume work in a new session

Starting fresh is expected, not a failure.

Use this prompt:

```text
This is an existing Agentic Etch Production project. Read CONTEXT.md, SITE-CONTRACT.md, DELIVERY-STATE.md, docs/agents/stack.md, docs/site/evidence.md, and docs/site/component-grammar.md. Summarize the approved contract, current frontier, blockers, and verification status. Do not implement anything until you tell me which workflow or ticket should run next.
```

The agent should not require the entire old conversation.

## Before ending a session

Ask the agent:

```text
Update DELIVERY-STATE.md with what was completed, what remains open, links to relevant tickets or commits, verification status, and a concise handoff for a fresh agent session.
```

A good handoff contains:

- current movement;
- exact completed scope;
- unresolved findings;
- current branch or commit;
- next ticket;
- files that changed;
- browser evidence collected;
- decisions requiring human approval.

---

# 18. How to work with tickets and multiple agents

This system supports multiple agents when work is divided by complete outcomes.

## Good parallel work

Two tickets can run in parallel when they do not modify the same component contract or depend on unresolved shared decisions.

Example:

```text
Agent A: Case-study listing and detail journey
Agent B: Contact form and confirmation journey
```

This may be safe if both depend on stable global components.

## Unsafe parallel work

```text
Agent A: Redesign global typography
Agent B: Finish every page using current typography
```

The second task depends on an unstable shared decision.

## Record blocking edges

In `DELIVERY-STATE.md`, write:

```markdown
## Ticket links

- WEB-12: Global navigation and shell
- WEB-13: Homepage tracer, blocked by WEB-12
- WEB-14: Service enquiry journey, blocked by WEB-13 component extraction
- WEB-15: Case-study journey, may start after WEB-12
```

## Fresh-agent ticket prompt

```text
Implement ticket WEB-14 only. Read all project artifacts first. Confirm its dependencies are complete. Load the required domain and stack disciplines explicitly. Use the ticket's acceptance criteria as the completion boundary. Finish with rendered review and update DELIVERY-STATE.md.
```

---

# 19. How the individual disciplines work

## `website-strategy`

Use when deciding:

- audience;
- triggering situation;
- offer;
- page purpose;
- sitemap;
- user journey;
- conversion path.

Example request:

```text
Review this proposed sitemap using website-strategy. Explain which pages have a clear job and which pages exist only because competitors have them.
```

## `proof-chain`

Use when working with:

- statistics;
- testimonials;
- outcome claims;
- rankings;
- certifications;
- comparisons;
- guarantees;
- customer counts.

Example request:

```text
Use proof-chain to audit every claim on this homepage. Update the evidence register and block anything that cannot be published safely.
```

## `website-copy`

Use after page strategy is approved.

Example request:

```text
Write the primary service page from its approved page contract and evidence register. Use final copy, not a list of alternatives. Mark any unresolved proof request clearly.
```

## `web-design`

Use for:

- hierarchy;
- composition;
- typography roles;
- color roles;
- image direction;
- responsive priority;
- interaction intent.

Example request:

```text
Define two materially different visual directions for this approved page contract. Explain how each direction supports the audience and offer. Do not implement either direction yet.
```

## `component-grammar`

Use after real patterns appear.

Example request:

```text
Review the completed tracer and identify which patterns deserve reusable components, which should remain page compositions, and which are accidental similarities.
```

## `etch`

Use only with verified project capability.

Example request:

```text
Use the verified Etch capabilities recorded in docs/agents/stack.md to implement this approved page section. Do not assume unsupported operations. Record any newly verified limitation.
```

## `acss`

Use for system styling.

Example request:

```text
Style this component using only verified project ACSS tokens where possible. Document any required custom CSS beyond the token boundary.
```

## `rendered-review`

Use after implementation and before launch.

Example request:

```text
Run rendered-review on the homepage-to-application journey. Keep the six review axes separate and provide browser evidence for every pass or failure.
```

---

# 20. Common problems and fixes

## Problem: The agent starts building immediately

Cause:

- no approved site contract;
- workflow was skipped;
- user prompt asked for implementation before understanding.

Fix:

```text
Stop implementation. Run /grill-website and produce an approved SITE-CONTRACT.md before continuing.
```

## Problem: The agent asks too many factual questions

Cause:

- it is asking you for information available in the repository or environment.

Fix:

```text
Inspect the repository, existing website, and connected tools for factual answers. Ask me only about business or approval decisions that cannot be discovered.
```

## Problem: The agent invents an ACSS token

Cause:

- token source was not verified;
- the agent guessed a familiar variable pattern.

Fix:

```text
Remove the invented token. Verify the project's actual ACSS version and token source. Use a documented token or record a scoped custom CSS exception.
```

## Problem: The agent claims Etch work is complete without changing Etch

Cause:

- Etch capability was assumed;
- source-level planning was confused with implementation.

Fix:

```text
Mark this work unimplemented. Verify which Etch operations are available in the current project and perform the change through those verified operations.
```

## Problem: The design looks generic

Cause:

- the visual register was not defined;
- content hierarchy was weak;
- every section used the same card treatment;
- design was implemented before strategy was resolved.

Fix:

```text
Use web-design to review the page's visual register, hierarchy, composition, and responsive priority against the approved contract. Create materially different prototypes before revising production.
```

## Problem: The agent builds too many components

Cause:

- abstraction occurred before a tracer existed;
- visual similarity was mistaken for reusable responsibility.

Fix:

```text
Return to component-grammar. Keep only components with a stable responsibility and content seam proven by rendered use. Demote speculative components to page composition.
```

## Problem: The agent forgets earlier decisions

Cause:

- decisions existed only in conversation;
- project artifacts were not updated;
- the session became too long.

Fix:

```text
Stop. Reconcile the conversation with the project artifacts, update DELIVERY-STATE.md, and continue in a fresh session using the files as the source of truth.
```

## Problem: A page passes desktop but fails mobile

Cause:

- responsive work was treated as a final cleanup stage;
- content priority was not designed.

Fix:

```text
Reopen the ticket. Run rendered-review at all required widths, verify reading order and proof adjacency, and correct the component rather than adding page-specific patches where possible.
```

## Problem: The agent says review passed without screenshots or browser access

Cause:

- source inspection was incorrectly treated as rendered evidence.

Fix:

```text
Change the review status to unverified. List the exact pages, widths, and interactions that still require browser evidence.
```

## Problem: The workflow feels too heavy for a tiny site

Cause:

- every possible artifact or phase is being expanded unnecessarily.

Fix:

Use one concise site contract, one tracer, and a few tickets. Research and prototypes are conditional, not mandatory.

## Problem: The workflow feels too light for a large site

Cause:

- the contract or ticket graph is too coarse.

Fix:

Split page contracts, create a decision map, identify dependencies, and use fresh sessions for each vertical slice.

---

# 21. Recommended first pilot project

Do not begin with the most complicated client site.

Choose a real but controlled project containing:

- one primary conversion;
- one landing page or homepage;
- real copy;
- real proof;
- header and footer;
- one form;
- at least one reusable component;
- responsive requirements;
- one dynamic WordPress element if possible.

Avoid for the first pilot:

- large ecommerce;
- complex memberships;
- multilingual sites;
- highly regulated claims;
- dozens of custom post types;
- direct production-only access.

## Good first-pilot target

```text
Homepage
-> primary offer
-> proof
-> project-fit criteria
-> enquiry form
-> confirmation state
```

The first pilot is successful when a fresh agent can continue the work using only the repository and project artifacts.

---

# 22. Project checklists

## Installation checklist

- [ ] Skills installed
- [ ] Five workflows visible
- [ ] Website project opened in the correct directory
- [ ] Project memory scaffolded
- [ ] Initial scaffold committed

## Setup checklist

- [ ] WordPress status verified
- [ ] Etch status verified
- [ ] Etch operations recorded
- [ ] ACSS status verified
- [ ] ACSS token source recorded
- [ ] Browser tools recorded
- [ ] Staging URL recorded
- [ ] Production URL recorded
- [ ] Deployment method recorded
- [ ] Rollback method recorded
- [ ] Approval authority recorded

## Strategy checklist

- [ ] Business outcome defined
- [ ] Primary audience defined
- [ ] Triggering situation defined
- [ ] Offer defined
- [ ] Differentiation defined
- [ ] Primary conversion defined
- [ ] Sitemap justified
- [ ] Page jobs defined
- [ ] Message hierarchy defined
- [ ] Proof gaps recorded
- [ ] Visual register defined
- [ ] Scope boundaries defined
- [ ] Site contract approved

## Tracer checklist

- [ ] Tracer selected
- [ ] Acceptance criteria written
- [ ] Copy approved
- [ ] Proof references approved
- [ ] Design intent recorded
- [ ] Etch capability confirmed
- [ ] ACSS capability confirmed
- [ ] Implementation complete
- [ ] Required widths reviewed
- [ ] Keyboard journey reviewed
- [ ] Form or interaction states reviewed
- [ ] Console reviewed
- [ ] Network behavior reviewed
- [ ] Findings resolved or accepted

## Expansion checklist

- [ ] Component grammar extracted
- [ ] Remaining work ticketed vertically
- [ ] Dependencies recorded
- [ ] Current frontier recorded
- [ ] Each substantial ticket uses a fresh context
- [ ] Each ticket ends with rendered review

## Launch checklist

- [ ] Hardening complete
- [ ] Backup confirmed
- [ ] Rollback confirmed
- [ ] Release scope recorded
- [ ] Production deployment completed
- [ ] Live primary journey verified
- [ ] Forms verified
- [ ] Redirects verified
- [ ] SEO metadata verified
- [ ] Analytics verified
- [ ] Privacy and consent verified
- [ ] Production errors checked
- [ ] Release recorded in `DELIVERY-STATE.md`

---

# 23. Glossary

## Acceptance criteria

Observable conditions that must be true before work is considered complete.

## Component grammar

The rules governing which reusable interface components exist, what they are responsible for, and how they combine.

## Content seam

The boundary within a component where content may vary without requiring the component structure to change.

## Conversion path

The complete journey from a visitor's intent to a meaningful action.

## Discipline

A reusable specialist skill that provides focused judgment inside one or more workflows.

## Durable artifact

A project file that preserves decisions or state across agent sessions.

## Evidence register

A table connecting public claims to evidence, sources, confidence, permissible wording, and publication status.

## Fresh context

A new agent session that starts from durable artifacts rather than depending on a very long previous conversation.

## Page contract

The durable agreement describing who a page serves, what job it performs, how it converts, what it says, what proof it needs, and how completion is verified.

## Proof chain

The connection:

```text
claim -> evidence -> source -> permissible wording
```

## Rendered truth

The principle that actual browser behavior is the authoritative result, not the agent's intention or source-code description.

## Token boundary

The boundary between system-level styling controlled by ACSS and component-specific styling that may require scoped custom CSS.

## Tracer experience

The smallest complete user experience that tests strategy, content, implementation, responsive behavior, and verification together.

## Vertical ticket

A ticket that delivers a complete user-observable outcome rather than only one technical layer.

## Visual register

The coherent level of formality, energy, density, contrast, imagery, and motion appropriate to the audience and offer.

## Workflow

A human-invoked sequence that manages a consequential project transition.

---

# 24. Frequently asked questions

## Do I have to run every workflow for every site?

No. Setup should run once per project. The website should be grilled when strategy is unclear. Delivery may cover multiple movements depending on current state. Shipping runs only at launch.

## Must the homepage always be the tracer?

No. Choose the smallest complete journey that provides the most useful architectural learning.

## Can I use this without Etch automation?

You can use the strategy, proof, copy, design, component, and review disciplines. Etch implementation must remain manual or unverified until a real control path exists.

## Can the agent use custom CSS?

Yes, but only beyond the documented ACSS token boundary. Custom CSS should be scoped, justified, and recorded in the component grammar.

## Can I change the approved contract?

Yes. Record the change, explain its effect, and obtain explicit approval before scaling the new direction.

## Should I put client documents in this repository?

No. Put client-specific material in the client or website project. This repository should remain reusable.

## Should I add more skills immediately?

No. Add a skill only when real usage shows that independent invocation, reuse, or context isolation justifies it.

## What should I do when I am unsure which command to run?

Run:

```text
/ask-etch-production
```

## How do I know the system is working?

The strongest signal is that a fresh agent can read the project artifacts, explain the approved website, identify the current frontier, and continue without relying on the original conversation.

## What is the best first use?

Run the workflow on one controlled real project and complete one tracer experience from strategy through browser verification.

---

# Minimal quick-start summary

For a new project, the shortest recommended path starts from a local checkout of Agentic Etch Production:

```bash
cd /path/to/agentic-etch-production
node scripts/scaffold-project.mjs /path/to/website-project
```

You may also call `scripts/scaffold-project.mjs` by its absolute path from another directory.

Then, inside the agent:

```text
/setup-etch-production
/grill-website
/deliver-etch-site
/ship-etch-site
```

Remember the four most important rules:

1. Do not build without an approved contract.
2. Do not invent claims, Etch operations, or ACSS tokens.
3. Prove one complete tracer experience before scaling.
4. Do not declare completion without rendered browser evidence.
