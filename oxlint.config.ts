import { defineConfig } from 'oxlint';

import oxlintConfig from './packages/mado-oxlint/src/index.ts';

export default defineConfig({
  env: {
    builtin: true,
    node: true,
  },
  extends: [oxlintConfig],
  options: {
    typeAware: true,
  },
});
