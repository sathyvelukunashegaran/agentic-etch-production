# Architecture

## Three layers

### Operating workflows

Human-invoked workflows own consequential transitions: setup, clarification, delivery and launch. They maintain persistent state and explicitly load the disciplines required by each movement.

### Reusable disciplines

Model-invoked disciplines hold focused judgment. They can be loaded by a workflow or selected automatically when a task matches their trigger description.

### Project memory

Project files carry decisions across sessions. The workflow never relies on a long conversation to remember approved strategy, evidence, page obligations or delivery state.

## Default path

```text
setup
  -> understand
  -> specify
  -> prove one tracer experience
  -> systematize the component grammar
  -> expand through delivery tickets
  -> harden against the contract
  -> ship
```

The default path is opinionated, but research, prototyping and large-project mapping are conditional. A five-page brochure site should not pay the process cost of a complex membership platform.

## Invocation boundary

Workflows are explicit because they can modify durable state, create tickets, build a site or launch it. Disciplines are implicit because they provide reusable judgment inside many contexts.

A workflow may say, "load `website-strategy` before interviewing." It must not merely gesture at the discipline with soft language such as "consider strategy where appropriate."

## Fresh-context boundary

Understanding and specification benefit from one continuous reasoning context. Substantial delivery tickets should start in fresh contexts and read their requirements from project artifacts. This controls context decay and makes parallel work possible.

## Stack boundary

Website strategy, proof, copy, design, component grammar and rendered review are stack-independent. `etch` and `acss` are adapters. Future adapters can replace them without rewriting the operating system.
