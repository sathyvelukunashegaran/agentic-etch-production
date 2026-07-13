# Token-boundary decisions

Use ACSS for system concerns such as:

- spacing scale;
- typography scale;
- semantic colors;
- content and section widths;
- grid behavior;
- border and radius conventions;
- global interactive states.

Custom component CSS is justified when it expresses:

- a component-specific state or relationship;
- an interaction not represented by the system;
- a local composition rule;
- a deliberate art-direction exception approved in the design contract.

Document exceptions in `docs/site/component-grammar.md`. Do not promote an exception into global configuration merely to avoid writing scoped CSS.
