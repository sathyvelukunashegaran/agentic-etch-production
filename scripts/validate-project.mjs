#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const target = path.resolve(args.find((arg) => !arg.startsWith('--')) ?? process.cwd());
const stageArg = args.find((arg) => arg.startsWith('--stage='));
const stage = stageArg?.split('=')[1] ?? 'setup';
const stages = ['setup', 'product', 'specification', 'design', 'planning', 'implementation', 'review', 'ship'];
if (!stages.includes(stage)) throw new Error(`Unknown stage ${stage}. Use ${stages.join(', ')}.`);

const errors = [];
const warnings = [];
const required = ['CONTEXT.md', 'PRODUCT.md', 'SITE-CONTRACT.md', 'DESIGN.md', 'DELIVERY-STATE.md', 'docs/agents/stack.md', 'docs/site/evidence.md', 'docs/site/component-grammar.md', 'docs/site/delivery-plan.md'];

async function exists(file) { try { await stat(file); return true; } catch { return false; } }
async function content(relative) { return readFile(path.join(target, relative), 'utf8'); }
function approved(text) { return /^\*\*Status:\*\*\s*approved\s*$/im.test(text); }

for (const relative of required) {
  if (!(await exists(path.join(target, relative)))) errors.push(`missing ${relative}`);
}

if (!errors.length) {
  const product = await content('PRODUCT.md');
  const contract = await content('SITE-CONTRACT.md');
  const design = await content('DESIGN.md');
  const plan = await content('docs/site/delivery-plan.md');
  const state = await content('DELIVERY-STATE.md');
  const stack = await content('docs/agents/stack.md');
  const stageIndex = stages.indexOf(stage);

  if (stageIndex >= stages.indexOf('product') && !approved(product)) errors.push('PRODUCT.md is not approved');
  if (stageIndex >= stages.indexOf('specification') && !approved(contract)) errors.push('SITE-CONTRACT.md is not approved');
  if (stageIndex >= stages.indexOf('design') && !approved(design)) errors.push('DESIGN.md is not approved');
  if (stageIndex >= stages.indexOf('planning') && !approved(plan)) errors.push('docs/site/delivery-plan.md is not approved');
  if (stageIndex >= stages.indexOf('planning') && !/## Tracer experience\s+\S/im.test(plan)) errors.push('delivery plan has no tracer experience');
  if (stageIndex >= stages.indexOf('implementation') && !/^\*\*Current ticket:\*\*\s*\S/im.test(state)) warnings.push('DELIVERY-STATE.md has no current ticket');
  if (stageIndex >= stages.indexOf('review') && /unverified/i.test(state)) warnings.push('delivery state still contains unverified scope');
  if (stageIndex >= stages.indexOf('ship') && /\*\*Status:\*\*\s*(unknown|unavailable)/i.test(stack)) warnings.push('stack file contains unknown or unavailable capabilities; confirm none are launch-critical');
}

if (warnings.length) {
  console.warn('Project validation warnings:');
  for (const warning of warnings) console.warn(`- ${warning}`);
}
if (errors.length) {
  console.error('Project validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Project artifacts are valid for stage: ${stage}`);
