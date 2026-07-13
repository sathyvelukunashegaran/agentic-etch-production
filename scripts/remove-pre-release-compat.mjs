#!/usr/bin/env node

import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const read = (relative) => readFile(path.join(root, relative), 'utf8');
const write = (relative, content) => writeFile(path.join(root, relative), content);

const packageJson = JSON.parse(await read('package.json'));
delete packageJson.scripts['migrate:v0.2'];
await write('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);

const plugin = JSON.parse(await read('.claude-plugin/plugin.json'));
plugin.skills = plugin.skills.filter((entry) => entry !== './skills/workflows/deliver-etch-site');
await write('.claude-plugin/plugin.json', `${JSON.stringify(plugin, null, 2)}\n`);

let readme = await read('README.md');
readme = readme
  .replace(
    'Read the [beginner guide](docs/how-to-use.md) or the [v0.1 migration guide](docs/migration-v0.2.md).',
    'Read the detailed [beginner guide](docs/how-to-use.md).',
  )
  .replace(/\n`\/deliver-etch-site` remains available[^\n]*\n/, '\n')
  .replace(
    '| `/setup-etch-production` | Verify capabilities and create or migrate project artifacts |',
    '| `/setup-etch-production` | Verify capabilities and create or reconcile project artifacts |',
  )
  .replace(/^\| `\/deliver-etch-site`.*\n/m, '')
  .replace(/^node scripts\/migrate-project-v02\.mjs.*\n/m, '');
await write('README.md', readme);

let architecture = await read('docs/architecture.md');
architecture = architecture.replace(
  /## Why delivery was decomposed[\s\S]*?(?=## Design subsystem)/,
  '## Workflow boundaries\n\nEach consequential transition owns one durable output and one approval boundary. This keeps contexts small, makes independent review possible, and prevents strategy, visual direction, planning, implementation, and shipping from collapsing into one overloaded command.\n\n',
);
await write('docs/architecture.md', architecture);

let quickstart = await read('docs/quickstart.md');
quickstart = quickstart.replace(/## Existing v0\.1 project[\s\S]*?(?=## Non-negotiable boundaries)/, '');
await write('docs/quickstart.md', quickstart);

await write(
  'CHANGELOG.md',
  `# Changelog\n\n## 0.2.0 — Design and delivery system\n\n- defines explicit specification, shaping, planning, ticket implementation, review, and shipping workflows;\n- adds \`PRODUCT.md\`, \`DESIGN.md\`, and \`docs/site/delivery-plan.md\` as durable project artifacts;\n- deepens the web-design discipline with conditional registers, shape, craft, critique, state, responsive, visual-rule, and anti-pattern references;\n- adds continuous rendered iteration and a deterministic browser audit;\n- adds stage-aware project artifact validation;\n- expands behavioral evaluation scenarios and beginner documentation.\n`,
);

let evals = await read('evals/scenarios.md');
evals = evals.replace(/\n## Legacy command[\s\S]*$/, '\n');
await write('evals/scenarios.md', evals.trimEnd() + '\n');

let router = await read('skills/workflows/ask-etch-production/SKILL.md');
router = router.replace(/^.*v0\.1.*\/deliver-etch-site.*\n/m, '');
await write('skills/workflows/ask-etch-production/SKILL.md', router);

let setup = await read('skills/workflows/setup-etch-production/SKILL.md');
setup = setup
  .replace(
    'creating the durable product, site, design, delivery, evidence, and component artifacts.',
    'creating or reconciling the durable product, site, design, delivery, evidence, and component artifacts.',
  )
  .replace('Create or migrate the project artifacts', 'Create or reconcile the project artifacts');
await write('skills/workflows/setup-etch-production/SKILL.md', setup);

let projectFiles = await read('skills/workflows/setup-etch-production/references/project-files.md');
projectFiles = projectFiles.replace(
  /Use `scripts\/scaffold-project\.mjs`[^\n]+/,
  'Use `scripts/scaffold-project.mjs` when a repository checkout is available. When artifacts already exist, preserve them and reconcile ownership instead of overwriting approved content.',
);
await write('skills/workflows/setup-etch-production/references/project-files.md', projectFiles);

let guide = await read('docs/how-to-use.md');
guide = guide
  .replace(
    '5. [Create or migrate a project](#5-create-or-migrate-a-project)',
    '5. [Create a project](#5-create-a-project)',
  )
  .replace('# 5. Create or migrate a project', '# 5. Create a project')
  .replace(/## Existing v0\.1 project[\s\S]*?(?=## Commit the initial artifacts)/, '')
  .replace(/^\| `\/deliver-etch-site`.*\n/m, '')
  .replace(/## What does `\/deliver-etch-site` do now\?[\s\S]*?(?=## How do I know the system is working\?)/, '');
await write('docs/how-to-use.md', guide);

for (const relative of [
  'docs/migration-v0.2.md',
  'scripts/migrate-project-v02.mjs',
  'skills/workflows/deliver-etch-site/SKILL.md',
  'skills/workflows/deliver-etch-site/agents/openai.yaml',
  'scripts/remove-pre-release-compat.mjs',
  '.github/workflows/remove-pre-release-compat.yml',
]) {
  await rm(path.join(root, relative), { force: true });
}

console.log('Removed pre-release compatibility and migration surface.');
