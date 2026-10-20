import terser from '@rollup/plugin-terser';

import { defineConfig } from '../../rollup.base.js';

export default defineConfig({
  babel: {
    plugins: [['babel-plugin-react-compiler', { target: '18' }]],
    presets: [
      ['@babel/preset-env', { bugfixes: true }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  },
  plugins: [terser({ compress: false, mangle: false })],
});
