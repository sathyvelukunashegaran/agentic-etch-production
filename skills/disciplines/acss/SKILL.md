---
name: acss
description: apply or review automatic.css tokens, utilities and project configuration while respecting the token boundary. use when styling etch components, choosing spacing, typography, colors, grids, widths or deciding whether custom css is justified.
---

# Automatic.css

The **token boundary** separates system styling from component-specific styling:

- inside the boundary, use verified ACSS configuration, semantic tokens and utilities;
- beyond the boundary, add the smallest scoped custom CSS that expresses a component requirement the token system does not own.

## Capability gate

Verify ACSS is active, identify its version or available token source and inspect project overrides. Never invent token names.

## Styling order

1. Start with semantic ACSS tokens and global configuration.
2. Apply verified layout and utility capabilities when they preserve component meaning.
3. Give stable component responsibilities dedicated component classes.
4. Add scoped custom properties or CSS only after documenting why ACSS does not cover the requirement.
5. Keep page-specific exceptions out of global configuration unless they are genuinely systemic.
6. Render and inspect the result at required widths.

Read [token-boundary.md](references/token-boundary.md) when deciding between ACSS and custom CSS.

## Completion criterion

Every styling value is traceable to a verified ACSS token, an approved project-level configuration or a documented component-specific exception, and no invented variable or redundant global rule remains.
