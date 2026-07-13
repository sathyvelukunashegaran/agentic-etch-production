---
name: setup-etch-production
description: configure a repository for the agentic etch production workflow by verifying its wordpress, etch, automatic.css, browser, tracker and deployment capabilities and creating the persistent project artifacts. run once before other production workflows.
disable-model-invocation: true
---

# Setup Etch Production

Configure the current repository without assuming its stack.

## Process

1. **Inspect facts.** Explore the repository, existing agent instructions, WordPress signals, Etch evidence, ACSS evidence, browser tooling, environments, issue tracker and deployment configuration. Look up facts instead of asking the user.
2. **Classify capabilities.** Record each capability as verified, unavailable or unknown. Never infer Etch or ACSS availability from the user's intention alone.
3. **Present findings.** Summarize what exists, what is missing and the recommended configuration.
4. **Resolve decisions one at a time.** Ask only about choices the environment cannot answer: approval authority, tracker, required target widths, deployment destination and similar project policy.
5. **Create project memory.** Use the files described in [project-files.md](references/project-files.md). Preserve existing user content. Merge into an existing `AGENTS.md` or `CLAUDE.md` instead of replacing it.
6. **Record the starting state.** Set `DELIVERY-STATE.md` to the correct current movement and list all setup blockers.

## Completion criterion

Setup is complete only when every capability has an evidence-backed status, the project artifacts exist, the approval authority is known and the next workflow can operate without guessing where durable state belongs.
