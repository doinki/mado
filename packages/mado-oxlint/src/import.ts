import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
  'import/consistent-type-specifier-style': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/default.html
  'import/default': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
  'import/export': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html
  'import/exports-last': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html
  'import/extensions': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
  'import/first': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html
  'import/group-exports': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html
  'import/max-dependencies': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
  'import/named': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
  'import/namespace': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html
  'import/newline-after-import': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
  'import/no-absolute-path': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
  'import/no-amd': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html
  'import/no-anonymous-default-export': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html
  'import/no-commonjs': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
  'import/no-cycle': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html
  'import/no-default-export': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
  'import/no-duplicates': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
  'import/no-dynamic-require': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html
  'import/no-empty-named-blocks': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
  'import/no-mutable-exports': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
  'import/no-named-as-default': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html
  'import/no-named-as-default-member': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
  'import/no-named-default': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html
  'import/no-named-export': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html
  'import/no-namespace': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html
  'import/no-nodejs-modules': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
  'import/no-relative-parent-imports': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
  'import/no-self-import': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html
  'import/no-unassigned-import': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
  'import/no-webpack-loader-syntax': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html
  'import/prefer-default-export': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html
  'import/unambiguous': 'off',
};

export default {
  plugins: ['import'],
  rules,
} satisfies OxlintConfig;
