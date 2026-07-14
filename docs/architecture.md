# Architecture — v0.2

## Composition

v0.2 separates four concerns:

1. **Operating workflows** control consequential transitions and remain human-invoked.
2. **Reusable disciplines** provide focused judgment and may be model-invoked.
3. **Implementation adapters** isolate Etch, ACSS, and WordPress capability from strategy and design.
4. **Durable artifacts** preserve approved decisions and execution state across fresh contexts.

## Workflow topology

```text
setup -> grill -> specify -> shape -> plan -> implement ticket -> review -> ship
```

The path is a default, not a rigid universal pipeline. Research, prototypes, bug diagnosis, and large-scope wayfinding branch only when uncertainty earns them.

## Workflow boundaries

Each consequential transition owns one durable output and one approval boundary. This keeps contexts small, makes independent review possible, and prevents strategy, visual direction, planning, implementation, and shipping from collapsing into one overloaded command.

## Design subsystem

`web-design` is one deep discipline with conditional references rather than many small aesthetic skills. It separates product context, page obligations, and the approved visual contract; selects brand, product, or hybrid registers; and supports shape, craft, and critique modes.

Visual shaping uses distinct gates: brief, direction questions, visual evidence, and approval. Browser iteration continues throughout implementation rather than appearing only at final QA.

## Feedback loops

- deterministic project-artifact validation;
- deterministic rendered DOM audit;
- browser screenshots and DOM inspection;
- keyboard, console, network, and performance checks;
- qualitative design critique;
- independent contract review.

The rate of trustworthy feedback is the system's speed limit.
