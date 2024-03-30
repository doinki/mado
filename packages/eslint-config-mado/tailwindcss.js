require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': ['warn', { whitelist: ['@apply'] }],
  },
  settings: {
    tailwindcss: {
      callees: ['twJoin', 'twMerge', 'cva', 'clsx'],
    },
  },
};
