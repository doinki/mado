import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html
  'jsx-a11y/alt-text': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-ambiguous-text.html
  'jsx-a11y/anchor-ambiguous-text': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html
  'jsx-a11y/anchor-has-content': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html
  'jsx-a11y/anchor-is-valid': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html
  'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html
  'jsx-a11y/aria-props': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-proptypes.html
  'jsx-a11y/aria-proptypes': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html
  'jsx-a11y/aria-role': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html
  'jsx-a11y/aria-unsupported-elements': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html
  'jsx-a11y/autocomplete-valid': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html
  'jsx-a11y/click-events-have-key-events': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/control-has-associated-label.html
  'jsx-a11y/control-has-associated-label': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html
  'jsx-a11y/heading-has-content': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html
  'jsx-a11y/html-has-lang': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html
  'jsx-a11y/iframe-has-title': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html
  'jsx-a11y/img-redundant-alt': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/interactive-supports-focus.html
  'jsx-a11y/interactive-supports-focus': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html
  'jsx-a11y/label-has-associated-control': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/lang.html
  'jsx-a11y/lang': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html
  'jsx-a11y/media-has-caption': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html
  'jsx-a11y/mouse-events-have-key-events': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html
  'jsx-a11y/no-access-key': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html
  'jsx-a11y/no-aria-hidden-on-focusable': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html
  'jsx-a11y/no-autofocus': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html
  'jsx-a11y/no-distracting-elements': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-interactive-element-to-noninteractive-role.html
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-interactions.html
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-to-interactive-role.html
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html
  'jsx-a11y/no-noninteractive-tabindex': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html
  'jsx-a11y/no-redundant-roles': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.html
  'jsx-a11y/no-static-element-interactions': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html
  'jsx-a11y/prefer-tag-over-role': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html
  'jsx-a11y/role-has-required-aria-props': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html
  'jsx-a11y/role-supports-aria-props': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/scope.html
  'jsx-a11y/scope': 'off',
  // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html
  'jsx-a11y/tabindex-no-positive': 'off',
};

export default {
  plugins: ['jsx-a11y'],
  rules,
} satisfies OxlintConfig;
