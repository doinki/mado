import type { OxlintConfig } from 'oxlint';

import imports from './import.ts';
import node from './node.ts';
import oxc from './oxc.ts';
import promise from './promise.ts';
import react from './react.ts';
import sort from './sort.ts';

const config: OxlintConfig = {
  extends: [imports, node, oxc, promise, react, sort],
  jsPlugins: ['eslint-plugin-trim'],
  rules: {
    'trim/argument': 'warn',
    'trim/class-name': 'warn',
  },
};

export default config;
