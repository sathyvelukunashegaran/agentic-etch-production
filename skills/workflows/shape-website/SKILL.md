---
name: shape-website
description: shape and approve a website's visual direction before implementation by selecting the design register, confirming hierarchy and composition, exploring materially different directions, testing responsive and state implications, and recording the approved system in DESIGN.md. use after an approved site contract and before delivery planning or implementation.
disable-model-invocation: true
---

# Shape Website

Create a concrete visual contract without starting production implementation.

## Preconditions

- `PRODUCT.md` and `SITE-CONTRACT.md` are approved.
- The target page or tracer candidate is known.
- Existing design assets and conventions have been inspected.

## Required discipline

Explicitly load `web-design`. Read its register and shape references before proposing a direction.

## Gates

Do not compress these gates:

1. **Shape brief:** confirm target, user, page job, content hierarchy, constraints, and design register.
2. **Direction questions:** resolve atmosphere, density, typography character, color commitment, imagery, motion, and references or anti-references.
3. **Visual evidence:** present materially different directions through generated images, browser prototypes, or structured compositions appropriate to the available harness.
4. **Direction approval:** obtain explicit approval or explicit delegation before recording the final direction.

If native image generation is available, use it for visual exploration when it materially improves the decision. If it is unavailable, state that constraint and use browser prototypes or a precise structured direction; do not silently skip visual evidence.

## Output

Update `DESIGN.md` with:

- register and physical-use context;
- approved direction and rejected alternatives;
- hierarchy and composition rules;
- typography and color strategy;
- imagery and icon direction;
- spacing, shape, motion, and interaction language;
- responsive priorities and state coverage;
- signature motifs and anti-patterns;
- approved deviations and unresolved design risks.

Use [approval-gates.md](references/approval-gates.md) to verify the handoff.

## Completion criterion

A fresh implementer can reproduce the intended hierarchy, atmosphere, signature moves, states, and responsive priorities without inventing a generic visual system. No production build begins before approval.
