# Quickstart

## 1. Install the skills

Install through an Agent Skills-compatible harness or the Claude Code plugin instructions in the root README.

## 2. Configure the project

Run `/setup-etch-production` in the WordPress repository. The workflow inspects the repository and records only verified Etch, ACSS, browser and deployment capabilities.

For local scaffolding:

```bash
node /path/to/agentic-etch-production/scripts/scaffold-project.mjs .
```

## 3. Choose the entry point

Run `/ask-etch-production` when uncertain.

Typical new project:

```text
/setup-etch-production
/grill-website
/deliver-etch-site
/ship-etch-site
```

## 4. Keep approvals durable

Approve changes in the relevant project artifact, not only in chat. At minimum, the site contract and tracer acceptance criteria must be approved before implementation scales.

## 5. Treat browser evidence as mandatory

A page is not complete because markup or CSS exists. The changed experience must be rendered and checked at its required widths and interaction states. If browser access is unavailable, the workflow records the result as unverified rather than passed.
