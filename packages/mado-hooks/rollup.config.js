import { globSync } from 'node:fs';
import { basename } from 'node:path';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

const external = [/node_modules/, /@mado\//];
const inputFiles = globSync('src/**/*.ts').reduce((acc, file) => {
  const name = basename(file, '.ts');
  acc[name] = file;
  return acc;
}, {});
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default defineConfig([
  {
    external,
    input: inputFiles,
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      terser({ compress: false, mangle: false }),
    ],
    treeshake: true,
  },
  {
    external,
    input: inputFiles,
    output: [
      { dir: 'dist', entryFileNames: '[name].d.cts', format: 'cjs' },
      { dir: 'dist', format: 'esm' },
    ],
    plugins: [dts()],
  },
]);
