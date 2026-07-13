#!/usr/bin/env node

import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(here, '../templates/project');
const args = process.argv.slice(2);
const force = args.includes('--force');
const positional = args.filter((arg) => !arg.startsWith('-'));
const target = path.resolve(positional[0] ?? process.cwd());

if (args.includes('--help')) {
  console.log('Usage: node scripts/scaffold-project.mjs [target] [--force]');
  process.exit(0);
}

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function copyTree(from, to, relative = '') {
  const entries = await readdir(from, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);
    const display = path.join(relative, entry.name);

    if (entry.isDirectory()) {
      await mkdir(targetPath, { recursive: true });
      await copyTree(sourcePath, targetPath, display);
      continue;
    }

    if ((await exists(targetPath)) && !force) {
      console.log(`skip    ${display}`);
      continue;
    }

    await mkdir(path.dirname(targetPath), { recursive: true });
    await cp(sourcePath, targetPath, { force: true });
    console.log(`${force ? 'write' : 'create'}  ${display}`);
  }
}

await mkdir(target, { recursive: true });
await copyTree(source, target);
console.log(`\nProject memory scaffolded in ${target}`);
