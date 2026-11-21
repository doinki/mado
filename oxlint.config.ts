import oxlintConfig from '@mado/oxlint';
import { defineConfig } from 'oxlint';

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
