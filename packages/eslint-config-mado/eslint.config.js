import { join } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { config } from 'typescript-eslint';

import * as importConfig from './dist/import.js';
import * as jsConfig from './dist/javascript.js';
import * as prettierConfig from './dist/prettier.js';
import * as sortConfig from './dist/sort.js';
import * as tsConfig from './dist/typescript.js';
import * as unicornConfig from './dist/unicorn.js';

const gitignorePath = join(import.meta.dirname, '..', '..', '.gitignore');

export default config(
  includeIgnoreFile(gitignorePath),
  jsConfig.generateConfig(),
  tsConfig.generateConfig({
    tsconfigRootDir: import.meta.dirname,
  }),
  importConfig.generateConfig(),
  unicornConfig.generateConfig(),
  sortConfig.generateConfig(),
  prettierConfig.generateConfig(),
);
