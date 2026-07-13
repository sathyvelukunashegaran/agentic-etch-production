#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const ignoredDirectories = new Set(['.git', 'node_modules']);

/** Record a validation failure without stopping the remaining checks. */
function fail(message) {
  failures.push(message);
}

/** Return whether a path exists. */
async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

/** Recursively collect files while skipping repository and dependency internals. */
async function walk(dir) {
  const output = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...await walk(full));
    else output.push(full);
  }
  return output;
}

/** Parse the scalar types used by this repository's intentionally small frontmatter schema. */
function parseScalar(value) {
  const trimmed = value.trim();
  const quoted = /^(['"])(.*)\1$/.exec(trimmed);
  const unquoted = quoted ? quoted[2] : trimmed;
  if (unquoted === 'true') return true;
  if (unquoted === 'false') return false;
  return unquoted;
}

/** Parse the flat YAML frontmatter fields required by SKILL.md files. */
function frontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);
    data[key] = parseScalar(value);
  }
  return data;
}

const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const plugin = JSON.parse(await readFile(path.join(root, '.claude-plugin/plugin.json'), 'utf8'));
const readme = await readFile(path.join(root, 'README.md'), 'utf8');
if (packageJson.version !== plugin.version) {
  fail(`version mismatch: package.json=${packageJson.version}, plugin=${plugin.version}`);
}

const skillFiles = (await walk(path.join(root, 'skills'))).filter((file) => file.endsWith('/SKILL.md'));
const skillDirs = skillFiles.map((file) => path.dirname(file));
const pluginSkills = new Set(plugin.skills.map((item) => path.resolve(root, item)));
const workflowNames = [];

for (const [index, skillFile] of skillFiles.entries()) {
  const dir = skillDirs[index];
  const relativeDir = path.relative(root, dir).split(path.sep).join('/');
  const markdown = await readFile(skillFile, 'utf8');
  const meta = frontmatter(markdown);

  if (!meta?.name || !meta?.description) fail(`${relativeDir}: missing name or description frontmatter`);
  if (meta?.name !== path.basename(dir)) fail(`${relativeDir}: name must match directory`);

  for (const candidate of await walk(dir)) {
    if (!/\.(?:md|ya?ml|json|mjs|js)$/i.test(candidate)) continue;
    const text = await readFile(candidate, 'utf8');
    if (/\bTODO\b/i.test(text)) {
      fail(`${relativeDir}: unresolved TODO marker in ${path.relative(dir, candidate)}`);
    }
  }

  const agentFile = path.join(dir, 'agents/openai.yaml');
  if (!(await exists(agentFile))) {
    fail(`${relativeDir}: missing agents/openai.yaml`);
    continue;
  }

  const agentYaml = await readFile(agentFile, 'utf8');
  const isWorkflow = relativeDir.startsWith('skills/workflows/');
  const disablesModel = meta?.['disable-model-invocation'] === true;
  const disablesImplicit = /allow_implicit_invocation:\s*false/.test(agentYaml);

  if (isWorkflow) {
    workflowNames.push(meta.name);
    if (!disablesModel) fail(`${relativeDir}: workflow must disable model invocation`);
    if (!disablesImplicit) fail(`${relativeDir}: workflow must disable implicit Codex invocation`);
  } else {
    if (disablesModel) fail(`${relativeDir}: discipline must remain model-invoked`);
    if (disablesImplicit) fail(`${relativeDir}: discipline must not disable implicit invocation`);
  }

  if (!pluginSkills.has(dir)) fail(`${relativeDir}: missing from plugin manifest`);

  const readmeEntry = isWorkflow ? `/${meta?.name}` : `\`${meta?.name}\``;
  if (meta?.name && !readme.includes(readmeEntry)) {
    fail(`${relativeDir}: missing from README skill tables`);
  }
}

for (const pluginPath of pluginSkills) {
  if (!skillDirs.includes(pluginPath)) fail(`${path.relative(root, pluginPath)}: plugin entry has no SKILL.md`);
}

const router = await readFile(path.join(root, 'skills/workflows/ask-etch-production/SKILL.md'), 'utf8');
for (const name of workflowNames.filter((name) => name !== 'ask-etch-production')) {
  if (!router.includes(`/${name}`)) fail(`router does not mention /${name}`);
}

const markdownFiles = (await walk(root)).filter((file) => file.endsWith('.md'));
const linkPattern = /\[[^\]]*\]\((?!https?:|mailto:|#)([^)#]+)(?:#[^)]+)?\)/g;
for (const file of markdownFiles) {
  const content = await readFile(file, 'utf8');
  for (const match of content.matchAll(linkPattern)) {
    const target = path.resolve(path.dirname(file), decodeURIComponent(match[1]));
    if (!(await exists(target))) fail(`${path.relative(root, file)}: broken link ${match[1]}`);
  }
}

if (failures.length) {
  console.error(`Validation failed with ${failures.length} problem(s):`);
  for (const problem of failures) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`Validated ${skillFiles.length} skills, ${markdownFiles.length} Markdown files and ${plugin.skills.length} plugin entries.`);
