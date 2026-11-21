import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/node/callback-return.html
  'node/callback-return': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/exports-style.html
  'node/exports-style': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html
  'node/global-require': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/handle-callback-err.html
  'node/handle-callback-err': ['warn', '^(err|error)$'],
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html
  'node/no-exports-assign': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-mixed-requires.html
  'node/no-mixed-requires': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html
  'node/no-new-require': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html
  'node/no-path-concat': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html
  'node/no-process-env': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-sync.html
  'node/no-sync': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/node/no-top-level-await.html
  'node/no-top-level-await': 'off',
};

export default {
  plugins: ['node'],
  rules,
} satisfies OxlintConfig;
