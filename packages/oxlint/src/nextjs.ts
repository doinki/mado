import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/google-font-display.html
  'nextjs/google-font-display': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/google-font-preconnect.html
  'nextjs/google-font-preconnect': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/inline-script-id.html
  'nextjs/inline-script-id': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/next-script-for-ga.html
  'nextjs/next-script-for-ga': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-assign-module-variable.html
  'nextjs/no-assign-module-variable': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-async-client-component.html
  'nextjs/no-async-client-component': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-before-interactive-script-outside-document.html
  'nextjs/no-before-interactive-script-outside-document': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-css-tags.html
  'nextjs/no-css-tags': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-document-import-in-page.html
  'nextjs/no-document-import-in-page': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-duplicate-head.html
  'nextjs/no-duplicate-head': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-head-element.html
  'nextjs/no-head-element': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-head-import-in-document.html
  'nextjs/no-head-import-in-document': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-html-link-for-pages.html
  'nextjs/no-html-link-for-pages': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-img-element.html
  'nextjs/no-img-element': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-page-custom-font.html
  'nextjs/no-page-custom-font': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-script-component-in-head.html
  'nextjs/no-script-component-in-head': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.html
  'nextjs/no-styled-jsx-in-document': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-sync-scripts.html
  'nextjs/no-sync-scripts': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-title-in-document-head.html
  'nextjs/no-title-in-document-head': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-typos.html
  'nextjs/no-typos': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.html
  'nextjs/no-unwanted-polyfillio': 'off',
};

export default {
  plugins: ['nextjs'],
  rules,
} satisfies OxlintConfig;
