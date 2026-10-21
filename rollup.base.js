import { readFileSync } from 'node:fs';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { defineConfig as defineRollupConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

const external = [/node_modules/, /@mado\//];
const extensions = ['.ts'];
const output = {
  dir: 'dist',
  hoistTransitiveImports: false,
  preserveModules: true,
  preserveModulesRoot: 'src',
};

export function defineConfig({
  babel: { plugins: babelPlugins = [], ...babelOptions } = {},
  input = 'src/index.ts',
  plugins = [],
  sourcemap = true,
}) {
  const { dependencies } = JSON.parse(readFileSync('package.json', 'utf8'));

  return defineRollupConfig([
    {
      external,
      input,
      output: [
        { ...output, entryFileNames: '[name].cjs', exports: 'named', format: 'cjs', sourcemap },
        { ...output, format: 'esm', sourcemap },
      ],
      plugins: [
        resolve({ extensions }),
        babel({
          babelHelpers: 'runtime',
          extensions,
          plugins: [...babelPlugins, ['@babel/plugin-transform-runtime', { version: dependencies['@babel/runtime'] }]],
          ...babelOptions,
        }),
        ...plugins,
        terser({ compress: false, mangle: false }),
      ],
    },
    {
      external,
      input,
      output: [{ ...output, entryFileNames: '[name].d.cts' }, output],
      plugins: [dts()],
    },
  ]);
}
