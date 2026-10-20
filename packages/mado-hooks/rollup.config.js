import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' with { type: 'json' };

const external = [/node_modules/, /@mado\//];
const input = 'src/index.ts';
const extensions = ['.ts'];
const output = {
  dir: 'dist',
  hoistTransitiveImports: false,
  preserveModules: true,
  preserveModulesRoot: 'src',
};

export default defineConfig([
  {
    external,
    input,
    output: [
      { ...output, entryFileNames: '[name].cjs', format: 'cjs', sourcemap: true },
      { ...output, format: 'esm', sourcemap: true },
    ],
    plugins: [
      resolve({ extensions }),
      babel({
        babelHelpers: 'runtime',
        extensions,
        plugins: [
          ['babel-plugin-react-compiler', { target: '18' }],
          ['@babel/plugin-transform-runtime', { version: packageJson.dependencies['@babel/runtime'] }],
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              bugfixes: true,
              targets: { browsers: ['chrome 80', 'safari 13.1', 'firefox 74', 'opera 67'] },
            },
          ],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      terser({ compress: false, mangle: false }),
    ],
  },
  {
    external,
    input,
    output: [
      { ...output, entryFileNames: '[name].d.cts', format: 'cjs' },
      { ...output, format: 'esm' },
    ],
    plugins: [dts()],
  },
]);
