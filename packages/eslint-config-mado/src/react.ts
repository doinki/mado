import type { ConfigWithExtends } from '@eslint/config-helpers';
// @ts-expect-error
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTrim from 'eslint-plugin-trim';

export function generateConfig(options?: { files?: Array<string | string[]> }): ConfigWithExtends {
  return {
    files: options?.files || ['**/*.?(c|m)@(j|t)s?(x)'],
    languageOptions: {
      parserOptions: eslintPluginReact.configs['jsx-runtime'].parserOptions,
    },
    name: 'mado/react',
    plugins: {
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      trim: eslintPluginTrim.configs.flat.recommended.plugins.trim,
    },
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs['recommended-latest'].rules,
      ...eslintPluginJsxA11y.flatConfigs.recommended.rules,
      ...eslintPluginTrim.configs.flat.recommended.rules,
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
      'react-hooks/exhaustive-deps': ['warn', { additionalHooks: 'useIsomorphicLayoutEffect' }],
      'react/button-has-type': 'warn',
      'react/forward-ref-uses-ref': 'warn',
      'react/function-component-definition': [
        'warn',
        { namedComponents: ['function-declaration'], unnamedComponents: 'arrow-function' },
      ],
      'react/jsx-boolean-value': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-no-leaked-render': ['warn', { validStrategies: ['coerce', 'ternary'] }],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-sort-props': ['warn', { callbacksLast: true, reservedFirst: true, shorthandLast: true }],
      'react/jsx-uses-react': 'off',
      'react/no-danger': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
    },
    settings: {
      'jsx-a11y': {
        attributes: {
          for: ['htmlFor', 'for'],
        },
        components: {
          Button: 'button',
          Link: 'a',
        },
      },
      react: {
        version: 'detect',
      },
    },
  };
}
