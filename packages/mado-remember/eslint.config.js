import { join } from 'node:path';

import { config, includeIgnoreFile } from 'eslint-config-mado';
import * as importConfig from 'eslint-config-mado/import';
import * as jsConfig from 'eslint-config-mado/javascript';
import * as prettierConfig from 'eslint-config-mado/prettier';
import * as sortConfig from 'eslint-config-mado/sort';
import * as tsConfig from 'eslint-config-mado/typescript';
import * as unicornConfig from 'eslint-config-mado/unicorn';

const gitignorePath = join(import.meta.dirname, '..', '..', '.gitignore');

export default config(
  includeIgnoreFile(gitignorePath),
  jsConfig.generateConfig(),
  tsConfig.generateConfig({
    tsconfigRootDir: import.meta.dirname,
  }),
  importConfig.generateConfig({
    project: join(import.meta.dirname, '..', 'packages', '*', 'tsconfig.json'),
  }),
  unicornConfig.generateConfig(),
  sortConfig.generateConfig(),
  prettierConfig.generateConfig(),
);
