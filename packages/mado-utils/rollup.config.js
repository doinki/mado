import { defineConfig } from '../../rollup.base.js';

export default defineConfig({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          targets: { browsers: ['chrome 67', 'edge 79', 'safari 14', 'firefox 68'] },
        },
      ],
      '@babel/preset-typescript',
    ],
  },
});
