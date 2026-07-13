---
name: deliver-etch-site
description: compatibility router for projects or users still invoking the v0.1 monolithic delivery command. inspect durable state and recommend the single correct v0.2 workflow without performing specification, design, planning, implementation, review, or shipping itself.
disable-model-invocation: true
---

# Deliver Etch Site — v0.1 Compatibility Router

This command is retained so existing projects do not fail after upgrading to v0.2. It no longer owns the entire lifecycle.

Read the project artifacts and recommend exactly one next command:

- missing product clarity: `/grill-website`;
- missing or unapproved site contract: `/specify-website`;
- missing or unapproved visual direction: `/shape-website`;
- missing tracer and ticket topology: `/plan-website-delivery`;
- executable ticket on the current frontier: `/implement-website-ticket`;
- completed tracer or release candidate needing verification: `/review-website`;
- reviewed release candidate ready for launch: `/ship-etch-site`.

Explain the migration briefly and identify the artifact the recommended workflow will create or update. Do not silently chain into another human-invoked workflow.
