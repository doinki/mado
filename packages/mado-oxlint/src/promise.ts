import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html
  'promise/always-return': ['warn', { ignoreLastCallback: true }],
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html
  'promise/avoid-new': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
  'promise/catch-or-return': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html
  'promise/no-callback-in-promise': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html
  'promise/no-multiple-resolved': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html
  'promise/no-nesting': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html
  'promise/no-new-statics': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html
  'promise/no-promise-in-callback': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html
  'promise/no-return-in-finally': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
  'promise/no-return-wrap': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html
  'promise/param-names': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html
  'promise/prefer-await-to-callbacks': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
  'promise/prefer-await-to-then': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
  'promise/prefer-catch': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html
  'promise/spec-only': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html
  'promise/valid-params': 'error',
};

export default {
  plugins: ['promise'],
  rules,
} satisfies OxlintConfig;
