import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.html
  'react-perf/jsx-no-jsx-as-prop': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-array-as-prop.html
  'react-perf/jsx-no-new-array-as-prop': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-function-as-prop.html
  'react-perf/jsx-no-new-function-as-prop': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html
  'react-perf/jsx-no-new-object-as-prop': 'off',
};

export default {
  plugins: ['react-perf'],
  rules,
} satisfies OxlintConfig;
