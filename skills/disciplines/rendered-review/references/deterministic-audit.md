# Deterministic browser audit

Use `scripts/browser-audit.js` inside the rendered page context. The script installs `window.agenticEtchAudit()` and returns structured findings.

Typical Playwright-style use:

```js
await page.addScriptTag({ path: 'skills/disciplines/rendered-review/scripts/browser-audit.js' });
const report = await page.evaluate(() => window.agenticEtchAudit());
```

The detector checks document language and title, landmarks, heading jumps, duplicate IDs, image alternatives, form labels, accessible action names, empty links, horizontal overflow, small interactive targets, and basic rendered text contrast.

The browser harness must separately collect console errors, failed network requests, runtime exceptions, performance metrics, keyboard flow, reduced-motion behavior, and screenshot evidence. Resolve detector findings, then run qualitative review against the durable contracts.
