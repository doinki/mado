// @ts-check

import { join } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

import * as importConfig from './dist/import.js';
import { defineConfig } from './dist/index.js';
import * as jsConfig from './dist/javascript.js';
import * as prettierConfig from './dist/prettier.js';
import * as sortConfig from './dist/sort.js';
import * as tsConfig from './dist/typescript.js';
import * as unicornConfig from './dist/unicorn.js';

const gitignorePath = join(import.meta.dirname, '..', '..', '.gitignore');

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  jsConfig.defineConfig(),
  tsConfig.defineConfig({ tsconfigRootDir: import.meta.dirname }),
  importConfig.defineConfig(),
  unicornConfig.defineConfig(),
  sortConfig.defineConfig(),
  prettierConfig.defineConfig(),
);
