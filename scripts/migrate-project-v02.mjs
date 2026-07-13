#!/usr/bin/env node

import { appendFile, cp, mkdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const templates = path.resolve(here, '../templates/project');
const target = path.resolve(process.argv[2] ?? process.cwd());

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function copyMissing(relative) {
  const source = path.join(templates, relative);
  const destination = path.join(target, relative);
  if (await exists(destination)) {
    console.log(`preserve ${relative}`);
    return;
  }
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination);
  console.log(`create   ${relative}`);
}

for (const relative of ['PRODUCT.md', 'DESIGN.md', 'docs/site/delivery-plan.md']) {
  await copyMissing(relative);
}

const statePath = path.join(target, 'DELIVERY-STATE.md');
if (await exists(statePath)) {
  const state = await readFile(statePath, 'utf8');
  if (!state.includes('## v0.2 migration')) {
    await appendFile(
      statePath,
      `
## v0.2 migration

- [ ] PRODUCT.md reconciled and approved
- [ ] SITE-CONTRACT.md reconciled with v0.2 page contracts
- [ ] DESIGN.md shaped and approved
- [ ] Delivery plan and current frontier created
`,
    );
    console.log('update   DELIVERY-STATE.md');
  } else {
    console.log('preserve DELIVERY-STATE.md migration section');
  }
} else {
  await copyMissing('DELIVERY-STATE.md');
}

console.log(`\nMigrated project artifacts in ${target}`);
