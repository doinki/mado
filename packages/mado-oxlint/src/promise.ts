import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html
  'promise/always-return': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html
  'promise/avoid-new': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
  'promise/catch-or-return': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html
  'promise/no-callback-in-promise': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html
  'promise/no-multiple-resolved': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html
  'promise/no-nesting': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html
  'promise/no-new-statics': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html
  'promise/no-promise-in-callback': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html
  'promise/no-return-in-finally': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
  'promise/no-return-wrap': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html
  'promise/param-names': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html
  'promise/prefer-await-to-callbacks': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
  'promise/prefer-await-to-then': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
  'promise/prefer-catch': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html
  'promise/spec-only': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html
  'promise/valid-params': 'off',
};

export default {
  plugins: ['promise'],
  rules,
} satisfies OxlintConfig;
