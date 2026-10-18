import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-access.html
  'jsdoc/check-access': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-property-names.html
  'jsdoc/check-property-names': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html
  'jsdoc/check-tag-names': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/empty-tags.html
  'jsdoc/empty-tags': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html
  'jsdoc/implements-on-classes': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-blank-blocks.html
  'jsdoc/no-blank-blocks': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-defaults.html
  'jsdoc/no-defaults': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param.html
  'jsdoc/require-param': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param-description.html
  'jsdoc/require-param-description': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param-name.html
  'jsdoc/require-param-name': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param-type.html
  'jsdoc/require-param-type': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property.html
  'jsdoc/require-property': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-description.html
  'jsdoc/require-property-description': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-name.html
  'jsdoc/require-property-name': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-type.html
  'jsdoc/require-property-type': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns.html
  'jsdoc/require-returns': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns-description.html
  'jsdoc/require-returns-description': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns-type.html
  'jsdoc/require-returns-type': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-throws-description.html
  'jsdoc/require-throws-description': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-throws-type.html
  'jsdoc/require-throws-type': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields.html
  'jsdoc/require-yields': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields-description.html
  'jsdoc/require-yields-description': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields-type.html
  'jsdoc/require-yields-type': 'off',
};

export default {
  plugins: ['jsdoc'],
  rules,
} satisfies OxlintConfig;
