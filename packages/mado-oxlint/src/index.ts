import type { OxlintConfig } from 'oxlint';

import eslint from './eslint.ts';
import imports from './import.ts';
import node from './node.ts';
import oxc from './oxc.ts';
import promise from './promise.ts';
import react from './react.ts';
import sort from './sort.ts';
import typescript from './typescript.ts';
import unicorn from './unicorn.ts';
import vitest from './vitest.ts';

const config: OxlintConfig = {
  extends: [eslint, imports, node, oxc, promise, react, sort, typescript, unicorn, vitest],
  jsPlugins: ['eslint-plugin-trim'],
  rules: {
    'trim/argument': 'warn',
    'trim/class-name': 'warn',
  },
};

export default config;
