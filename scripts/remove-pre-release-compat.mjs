#!/usr/bin/env node

import { readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

async function read(relative) {
  return readFile(path.join(root, relative), 'utf8');
}

async function write(relative, content) {
  await writeFile(path.join(root, relative), content);
}

function replaceOnce(content, before, after, label) {
  const count = content.split(before).length - 1;
  if (count !== 1) throw new Error(`${label}: expected one match, found ${count}`);
  return content.replace(before, after);
}

function removeSection(content, start, end, label) {
  const startIndex = content.indexOf(start);
  if (startIndex === -1) throw new Error(`${label}: start marker not found`);
  const endIndex = content.indexOf(end, startIndex + start.length);
  if (endIndex === -1) throw new Error(`${label}: end marker not found`);
  return `${content.slice(0, startIndex)}${content.slice(endIndex)}`;
}

const packagePath = 'package.json';
const packageJson = JSON.parse(await read(packagePath));
delete packageJson.scripts['migrate:v0.2'];
await write(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);

const pluginPath = '.claude-plugin/plugin.json';
const plugin = JSON.parse(await read(pluginPath));
plugin.skills = plugin.skills.filter((entry) => entry !== './skills/workflows/deliver-etch-site');
await write(pluginPath, `${JSON.stringify(plugin, null, 2)}\n`);

let readme = await read('README.md');
readme = replaceOnce(
  readme,
  'Read the [beginner guide](docs/how-to-use.md) or the [v0.1 migration guide](docs/migration-v0.2.md).',
  'Read the detailed [beginner guide](docs/how-to-use.md).',
  'README guide link',
);
readme = replaceOnce(
  readme,
  '\n`/deliver-etch-site` remains available only as a v0.1 compatibility router.\n',
  '\n',
  'README compatibility paragraph',
);
readme = replaceOnce(
  readme,
  '| `/setup-etch-production` | Verify capabilities and create or migrate project artifacts |',
  '| `/setup-etch-production` | Verify capabilities and create or reconcile project artifacts |',
  'README setup row',
);
readme = replaceOnce(
  readme,
  '| `/deliver-etch-site` | Route v0.1 usage to the correct v0.2 workflow |\n',
  '',
  'README compatibility row',
);
readme = replaceOnce(
  readme,
  'node scripts/scaffold-project.mjs /path/to/new-project\nnode scripts/migrate-project-v02.mjs /path/to/v0.1-project\nnode scripts/validate-project.mjs /path/to/project --stage=design',
  'node scripts/scaffold-project.mjs /path/to/new-project\nnode scripts/validate-project.mjs /path/to/project --stage=design',
  'README commands',
);
await write('README.md', readme);

let architecture = await read('docs/architecture.md');
architecture = replaceOnce(
  architecture,
  '## Why delivery was decomposed\n\nThe v0.1 `/deliver-etch-site` workflow owned specification, design, planning, implementation, system extraction, expansion, and review. That made the happy path explicit but concentrated too much context and made independent review difficult.\n\nv0.2 gives each consequential transition one durable output and one approval boundary. `/deliver-etch-site` now routes legacy invocations without chaining workflows.\n',
  '## Workflow boundaries\n\nEach consequential transition owns one durable output and one approval boundary. This keeps contexts small, makes independent review possible, and prevents strategy, visual direction, planning, implementation, and shipping from collapsing into one overloaded command.\n',
  'architecture workflow rationale',
);
await write('docs/architecture.md', architecture);

let quickstart = await read('docs/quickstart.md');
quickstart = removeSection(
  quickstart,
  '## Existing v0.1 project\n',
  '## Non-negotiable boundaries\n',
  'quickstart compatibility section',
);
await write('docs/quickstart.md', quickstart);

await write(
  'CHANGELOG.md',
  `# Changelog\n\n## 0.2.0 — Design and delivery system\n\n- defines explicit specification, shaping, planning, ticket implementation, review, and shipping workflows;\n- adds \`PRODUCT.md\`, \`DESIGN.md\`, and \`docs/site/delivery-plan.md\` as durable project artifacts;\n- deepens the web-design discipline with conditional registers, shape, craft, critique, state, responsive, visual-rule, and anti-pattern references;\n- adds continuous rendered iteration and a deterministic browser audit;\n- adds stage-aware project artifact validation;\n- expands behavioral evaluation scenarios and beginner documentation.\n`,
);

let evals = await read('evals/scenarios.md');
const legacyScenario = evals.indexOf('## Legacy command\n');
if (legacyScenario === -1) throw new Error('evaluation compatibility scenario: start marker not found');
evals = evals.slice(0, legacyScenario).trimEnd() + '\n';
await write('evals/scenarios.md', evals);

let router = await read('skills/workflows/ask-etch-production/SKILL.md');
router = replaceOnce(
  router,
  '- A user invokes the v0.1 `/deliver-etch-site` command: use that compatibility router to identify one of the v0.2 workflows above.\n',
  '',
  'router compatibility route',
);
await write('skills/workflows/ask-etch-production/SKILL.md', router);

let setup = await read('skills/workflows/setup-etch-production/SKILL.md');
setup = replaceOnce(
  setup,
  'creating the durable product, site, design, delivery, evidence, and component artifacts.',
  'creating or reconciling the durable product, site, design, delivery, evidence, and component artifacts.',
  'setup description',
);
setup = replaceOnce(
  setup,
  '4. Create or migrate the project artifacts listed in [project-files.md](references/project-files.md). Preserve existing user content and merge agent instructions rather than replacing them.',
  '4. Create or reconcile the project artifacts listed in [project-files.md](references/project-files.md). Preserve existing user content and merge agent instructions rather than replacing them.',
  'setup process',
);
await write('skills/workflows/setup-etch-production/SKILL.md', setup);

let projectFiles = await read('skills/workflows/setup-etch-production/references/project-files.md');
projectFiles = replaceOnce(
  projectFiles,
  'Use `scripts/scaffold-project.mjs` for a new project and `scripts/migrate-project-v02.mjs` for a v0.1 project when a repository checkout is available. Never overwrite approved content without explicit instruction.',
  'Use `scripts/scaffold-project.mjs` when a repository checkout is available. When artifacts already exist, preserve them and reconcile ownership instead of overwriting approved content.',
  'project files guidance',
);
await write('skills/workflows/setup-etch-production/references/project-files.md', projectFiles);

let guide = await read('docs/how-to-use.md');
guide = replaceOnce(
  guide,
  '5. [Create or migrate a project](#5-create-or-migrate-a-project)',
  '5. [Create a project](#5-create-a-project)',
  'guide toc',
);
guide = replaceOnce(
  guide,
  '# 5. Create or migrate a project',
  '# 5. Create a project',
  'guide heading',
);
guide = removeSection(
  guide,
  '## Existing v0.1 project\n',
  '## Commit the initial artifacts\n',
  'guide compatibility section',
);
guide = replaceOnce(
  guide,
  '| `/deliver-etch-site` | A v0.1 project still uses the old command and needs routing |\n',
  '',
  'guide workflow row',
);
guide = removeSection(
  guide,
  '## What does `/deliver-etch-site` do now?\n',
  '## How do I know the system is working?\n',
  'guide compatibility FAQ',
);
await write('docs/how-to-use.md', guide);

for (const relative of [
  'docs/migration-v0.2.md',
  'scripts/migrate-project-v02.mjs',
  'skills/workflows/deliver-etch-site/SKILL.md',
  'skills/workflows/deliver-etch-site/agents/openai.yaml',
]) {
  await rm(path.join(root, relative), { force: true });
}

await rm(path.join(root, 'scripts/remove-pre-release-compat.mjs'), { force: true });
await rm(path.join(root, '.github/workflows/remove-pre-release-compat.yml'), { force: true });

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(full));
    else output.push(full);
  }
  return output;
}

const forbidden = /v0\.1|migration-v0\.2|migrate-project-v02|deliver-etch-site|compatibility router|legacy command/i;
for (const file of await walk(root)) {
  const info = await stat(file);
  if (!info.isFile() || info.size > 2_000_000) continue;
  let text;
  try {
    text = await readFile(file, 'utf8');
  } catch {
    continue;
  }
  if (forbidden.test(text)) {
    throw new Error(`pre-release compatibility language remains in ${path.relative(root, file)}`);
  }
}

console.log('Removed all pre-release compatibility and migration surface.');
