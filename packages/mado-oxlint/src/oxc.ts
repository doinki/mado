import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html
  'oxc/approx-constant': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html
  'oxc/bad-array-method-on-arguments': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html
  'oxc/bad-bitwise-operator': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html
  'oxc/bad-char-at-comparison': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html
  'oxc/bad-comparison-sequence': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-match-all-arg.html
  'oxc/bad-match-all-arg': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html
  'oxc/bad-min-max-func': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html
  'oxc/bad-object-literal-comparison': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html
  'oxc/bad-replace-all-arg': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html
  'oxc/branches-sharing-code': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/const-comparisons.html
  'oxc/const-comparisons': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html
  'oxc/double-comparisons': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html
  'oxc/erasing-op': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html
  'oxc/misrefactored-assign-op': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html
  'oxc/missing-throw': 'error',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html
  'oxc/no-accumulating-spread': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html
  'oxc/no-async-await': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html
  'oxc/no-async-endpoint-handlers': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html
  'oxc/no-barrel-file': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html
  'oxc/no-const-enum': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html
  'oxc/no-map-spread': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html
  'oxc/no-optional-chaining': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html
  'oxc/no-rest-spread-properties': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html
  'oxc/no-this-in-exported-function': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html
  'oxc/number-arg-out-of-range': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html
  'oxc/only-used-in-recursion': 'warn',
  // https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html
  'oxc/uninvoked-array-callback': 'error',
};

export default {
  plugins: ['oxc'],
  rules,
} satisfies OxlintConfig;
