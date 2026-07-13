#!/usr/bin/env node

import { readFile, unlink, writeFile } from 'node:fs/promises';

const guidePath = 'docs/how-to-use.md';
let guide = await readFile(guidePath, 'utf8');

function replaceOnce(label, before, after) {
  const occurrences = guide.split(before).length - 1;
  if (occurrences !== 1) {
    throw new Error(`${label}: expected exactly one match, found ${occurrences}`);
  }
  guide = guide.replace(before, after);
}

replaceOnce(
  'prerequisite scope',
  `## Required\n\n- A WordPress website project or staging site\n- Etch installed or available in the project\n- Automatic.css installed or available in the project\n- An AI agent environment that can load the skills\n- A repository or project folder where durable project files can be stored`,
  `## Required for any usage\n\n- An AI agent environment that can load the skills\n- A repository or project folder where durable project files can be stored\n\nThe strategy, proof, copy, design, component, and review disciplines can be used without automated access to Etch or Automatic.css.\n\n## Required for full Etch and ACSS implementation\n\n- A WordPress website project or staging site\n- Etch installed or available in the project\n- Automatic.css installed or available in the project`
);

replaceOnce(
  'capability questions',
  `- Can it inspect a page?\n- Can it create or modify elements?\n- Can it edit reusable components?\n- Can it bind WordPress data?\n- Can it preview changes?\n- Can it publish changes?\n- Can it inspect responsive states?`,
  `Verify each capability separately:\n\n- page inspection;\n- element creation and editing;\n- reusable component editing;\n- WordPress data binding;\n- preview behavior;\n- publishing behavior;\n- responsive-state inspection.`
);

replaceOnce(
  'contract fidelity wording',
  `- Which requirements are missing?\n- Which are partial?\n- Which unapproved features appeared?\n- Which approved decisions were contradicted?\n- Which deviations were consciously accepted?`,
  `- Identify missing requirements.\n- Flag partially implemented requirements.\n- Find features that appeared without approval.\n- Note approved decisions contradicted by the implementation.\n- Record deviations that were consciously accepted.`
);

replaceOnce(
  'walkthrough scaffold context',
  `## Step 2: Scaffold project memory\n\n\`\`\`bash\nnode scripts/scaffold-project.mjs ~/Sites/consultancy-site\n\`\`\``,
  `## Step 2: Scaffold project memory\n\nThe scaffold script comes from a local checkout of the Agentic Etch Production repository. Run it from that checkout:\n\n\`\`\`bash\ncd /path/to/agentic-etch-production\nnode scripts/scaffold-project.mjs ~/Sites/consultancy-site\n\`\`\`\n\nAlternatively, run the script by its absolute path while remaining in another directory:\n\n\`\`\`bash\nnode /path/to/agentic-etch-production/scripts/scaffold-project.mjs ~/Sites/consultancy-site\n\`\`\``
);

replaceOnce(
  'conditional walkthrough result',
  `Expected result:\n\n- WordPress verified\n- Etch verified for page inspection and editing\n- ACSS verified with token source\n- browser preview verified\n- staging URL recorded\n- deployment recorded as manual\n- rollback recorded as hosting snapshot`,
  `Example result for a suitably configured project:\n\n- WordPress verified\n- Etch verified for page inspection and editing\n- ACSS verified with token source\n- browser preview verified\n- staging URL recorded\n- deployment recorded as manual\n- rollback recorded as hosting snapshot\n\nYour project may produce different results. Keep any capability as \`unknown\` or \`unavailable\` when setup cannot verify it; do not copy the example statuses into the project.`
);

replaceOnce(
  'vague ticket quantity',
  `Use one concise site contract, one tracer, and a small number of tickets. Research and prototypes are conditional, not mandatory.`,
  `Use one concise site contract, one tracer, and a few tickets. Research and prototypes are conditional, not mandatory.`
);

replaceOnce(
  'quick start scaffold context',
  `For a new project, the shortest recommended path is:\n\n\`\`\`bash\nnode scripts/scaffold-project.mjs /path/to/website-project\n\`\`\``,
  `For a new project, the shortest recommended path starts from a local checkout of Agentic Etch Production:\n\n\`\`\`bash\ncd /path/to/agentic-etch-production\nnode scripts/scaffold-project.mjs /path/to/website-project\n\`\`\`\n\nYou may also call \`scripts/scaffold-project.mjs\` by its absolute path from another directory.`
);

await writeFile(guidePath, guide);
await unlink('scripts/apply-guide-review-fixes.mjs');
await unlink('.github/workflows/apply-guide-review-fixes.yml');

console.log('Applied all viable CodeRabbit review fixes and removed temporary automation files.');
