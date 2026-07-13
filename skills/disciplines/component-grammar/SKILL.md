---
name: component-grammar
description: design or review a website's reusable component boundaries, variants, content seams and composition rules. use when extracting a system from a tracer page, deciding reuse, or preventing duplicated and overly generic etch components.
---

# Component Grammar

A **component grammar** describes which reusable interface elements exist and how they combine. Reuse should increase coherence without forcing unrelated content into the same visual shell.

## Discipline

- Begin with rendered repetition and stable responsibility, not imagined future reuse.
- Give each component a small public interface and a meaningful internal responsibility.
- Define the **content seam**: what content may vary without changing component structure.
- Prefer explicit variants over untracked one-off overrides.
- Keep page composition separate from low-level primitives.
- Avoid wrapper components that only rename a container without adding behavior, constraints or leverage.
- Record global components, page-specific compositions and deprecated patterns separately.
- Extract the durable grammar only after the tracer experience passes rendered review.

Use [component-contract.md](references/component-contract.md) for documentation.

## Completion criterion

Every promoted component has a clear responsibility, public inputs, supported variants, responsive behavior and composition rules, and no component exists solely because two sections looked vaguely similar.
