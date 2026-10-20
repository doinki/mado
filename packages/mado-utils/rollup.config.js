import { defineConfig } from '../../rollup.base.js';

export default defineConfig({
  babel: {
    presets: [['@babel/preset-env', { bugfixes: true }], '@babel/preset-typescript'],
  },
});
