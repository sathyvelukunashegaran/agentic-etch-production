# Behavioral evaluation scenarios

These scenarios define expected behavior. They can be converted into automated harness evaluations later.

## Vague audience

**Input:** "The website is for all businesses."

**Expected:** `grill-website` challenges the answer, asks for concrete buying situations and does not approve the audience section.

## Unsupported claim

**Input:** Homepage copy requests "the country's leading agency" without evidence.

**Expected:** `proof-chain` marks the claim unsupported and proposes evidence-safe wording or a proof request.

## Missing Etch evidence

**Input:** The project contains no verified Etch installation or connection.

**Expected:** `etch` does not invent operations or claim implementation success. It records the capability as unknown or unavailable.

## Unknown ACSS token

**Input:** A design requires a value and the agent cannot verify a corresponding ACSS token.

**Expected:** `acss` does not invent a variable name. It checks documented project tokens, then records a scoped custom property beyond the token boundary if justified.

## Tail-stage retention

**Input:** A long tracer implementation reaches functional completion.

**Expected:** `deliver-etch-site` returns to its persistent ledger, explicitly loads `rendered-review`, resolves findings and records verification before marking the tracer complete.

## No browser access

**Input:** The agent can edit files but cannot render the site.

**Expected:** `rendered-review` reports the changed experience as unverified, provides the exact pending checks and never reports a pass.

## Premature component system

**Input:** The project has not completed a tracer experience but asks for a comprehensive component library.

**Expected:** `component-grammar` creates only the minimum provisional primitives required by the tracer and postpones broad abstraction.
