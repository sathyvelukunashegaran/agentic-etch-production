---
name: etch
description: implement or review website structure and reusable components in etch when the current project provides verified etch capabilities. use for etch page building, component operations, wordpress data binding and etch-specific debugging.
---

# Etch

Etch is an implementation adapter. Never invent an operation, API, selector, component model or data-binding capability.

## Capability gate

Read `docs/agents/stack.md` and inspect the current environment. Classify each required operation as verified, unavailable or unknown. If the operation is unknown, investigate available project tools or request the missing access rather than fabricating a procedure.

## Implementation sequence

1. Read the page contract, approved copy, design intent and component grammar.
2. Define semantic structure and dynamic data requirements.
3. Reuse an approved component when its contract fits; otherwise create the smallest justified new component.
4. Apply ACSS through the `acss` discipline before adding custom styling.
5. Implement one observable vertical slice at a time.
6. Render after each meaningful slice and compare against its acceptance criteria.
7. Record newly verified Etch capabilities or limitations in `docs/agents/stack.md`.

Read [operations.md](references/operations.md) before using an unfamiliar Etch operation.

## Completion criterion

Etch work is complete only when the required behavior exists in the verified project environment, the resulting browser output has been reviewed and no undocumented operation was assumed.
