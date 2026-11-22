import { defineConfig } from 'oxlint';

import imports from './packages/mado-oxlint/src/import.ts';
import node from './packages/mado-oxlint/src/node.ts';
import oxc from './packages/mado-oxlint/src/oxc.ts';
import promise from './packages/mado-oxlint/src/promise.ts';
import sort from './packages/mado-oxlint/src/sort.ts';
import typescript from './packages/mado-oxlint/src/typescript.ts';
import unicorn from './packages/mado-oxlint/src/unicorn.ts';
import vitest from './packages/mado-oxlint/src/vitest.ts';

export default defineConfig({
  env: {
    builtin: true,
    node: true,
  },
  extends: [imports, node, oxc, promise, sort, typescript, unicorn, vitest],
  options: {
    typeAware: true,
  },
});
