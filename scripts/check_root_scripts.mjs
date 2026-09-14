#!/usr/bin/env node
// Estate root-scripts format guard, adapted for this flat (single-package) repo.
// See threkir/scripts/check_root_scripts.mjs for the workspace variant.
//
// Enforces two things about package.json "scripts":
//   1. The CI contract: dev / build / check / test all exist (ci.yml + deploy.yml
//      invoke them by name — renaming one without updating CI would break merges).
//   2. Estate format: every real script sits under a preceding "//-- group --"
//      comment-key divider; no ungrouped entries appended at the bottom.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkgPath = path.join(rootDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const scripts = pkg.scripts ?? {};
const errors = [];

const DIVIDER = /^\/\/--\s.+\s--$/;
const REQUIRED = ['dev', 'build', 'check', 'test'];

for (const name of REQUIRED) {
	if (!(name in scripts)) {
		errors.push(`missing required script "${name}" (invoked by CI)`);
	}
}

let sawDivider = false;
let realCount = 0;
for (const name of Object.keys(scripts)) {
	if (name.startsWith('//')) {
		if (!DIVIDER.test(name)) {
			errors.push(`malformed divider key "${name}" (expected "//-- group --")`);
		}
		sawDivider = true;
		continue;
	}
	realCount += 1;
	if (!sawDivider) {
		errors.push(`script "${name}" is not under a "//-- group --" divider`);
	}
}

if (errors.length) {
	console.error(`Root scripts validation failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}
console.log(`Root scripts validation passed (${realCount} scripts).`);
