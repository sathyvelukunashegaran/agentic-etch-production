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
const required = [
  'CONTEXT.md',
  'PRODUCT.md',
  'SITE-CONTRACT.md',
  'DESIGN.md',
  'DELIVERY-STATE.md',
  'docs/agents/stack.md',
  'docs/site/evidence.md',
  'docs/site/component-grammar.md',
  'docs/site/delivery-plan.md',
];

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function content(relative) {
  return readFile(path.join(target, relative), 'utf8');
}

function approved(text) {
  return /^\*\*Status:\*\*[ \t]*approved[ \t]*$/im.test(text);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function sectionContent(text, heading) {
  const headingPattern = new RegExp(`^##[ \t]+${escapeRegExp(heading)}[ \t]*$`, 'im');
  const match = headingPattern.exec(text);
  if (!match) return '';
  const afterHeading = text.slice(match.index + match[0].length).replace(/^\r?\n/, '');
  const nextHeading = /^##[ \t]+/m.exec(afterHeading);
  return afterHeading.slice(0, nextHeading?.index ?? afterHeading.length).trim();
}

function fieldValue(text, label) {
  const pattern = new RegExp(`^\\*\\*${escapeRegExp(label)}:\\*\\*[ \\t]*(.*)$`, 'im');
  return pattern.exec(text)?.[1]?.trim() ?? '';
}

function hasTicketRow(plan) {
  return sectionContent(plan, 'Ticket topology')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|'))
    .some((line) => {
      const firstCell = line.split('|')[1]?.trim();
      return firstCell && firstCell !== 'ID' && !/^[-:]+$/.test(firstCell);
    });
}

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
  if (stageIndex >= stages.indexOf('planning') && !sectionContent(plan, 'Tracer experience')) errors.push('delivery plan has no tracer experience');
  if (stageIndex >= stages.indexOf('planning') && !hasTicketRow(plan)) errors.push('delivery plan has no delivery ticket rows');
  if (stageIndex >= stages.indexOf('implementation') && !fieldValue(state, 'Current ticket')) warnings.push('DELIVERY-STATE.md has no current ticket');
  if (stageIndex >= stages.indexOf('review') && /unverified/i.test(state)) warnings.push('delivery state still contains unverified scope');
  if (stageIndex >= stages.indexOf('ship') && /^\*\*Status:\*\*[ \t]*(unknown|unavailable)[ \t]*$/im.test(stack)) {
    warnings.push('stack file contains unknown or unavailable capabilities; confirm none are launch-critical');
  }
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
