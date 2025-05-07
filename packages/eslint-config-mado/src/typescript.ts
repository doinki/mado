import type { ConfigWithExtends } from 'typescript-eslint';
import { parser, plugin } from 'typescript-eslint';

export interface GenerateConfigOptions {
  /**
   * @example './tsconfig.eslint.json'
   */
  project?: string | boolean | string[] | null;

  /**
   * @example import.meta.dirname
   */
  tsconfigRootDir: string;
}

export function generateConfig(options: GenerateConfigOptions): ConfigWithExtends {
  return {
    files: ['**/*.?(c|m)ts?(x)'],
    languageOptions: {
      parser,
      parserOptions: {
        ...options,
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
      sourceType: 'module',
    },
    name: 'eslint-config-blog/typescript',
    plugins: {
      '@typescript-eslint': plugin,
    },
    rules: {
      ...eslintRecommended,
      ...recommendedTypeChecked,
      ...stylisticTypeChecked,
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-exports': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/no-loop-func': 'warn',
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-misused-spread': 'warn',
      '@typescript-eslint/no-mixed-enums': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/no-unnecessary-template-expression': 'warn',
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
      '@typescript-eslint/unified-signatures': 'warn',
      'no-loop-func': 'off',
      'no-useless-constructor': 'off',
    },
  };
}

// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
const eslintRecommended = {
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'getter-return': 'off', // ts(2378)
  'no-class-assign': 'off', // ts(2629)
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-func-assign': 'off', // ts(2630)
  'no-import-assign': 'off', // ts(2632) & ts(2540)
  // TODO - remove this once we no longer support ESLint v8
  'no-new-native-nonconstructor': 'off', // ts(7009)
  'no-new-symbol': 'off', // ts(7009)
  'no-obj-calls': 'off', // ts(2349)
  'no-redeclare': 'off', // ts(2451)
  'no-setter-return': 'off', // ts(2408)
  'no-this-before-super': 'off', // ts(2376) & ts(17009)
  'no-undef': 'off', // ts(2304) & ts(2552)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
  'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
  'no-with': 'off', // ts(1101) & ts(2410)
  'prefer-const': 'error', // ts provides better types with const
  'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
  'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
} as const;

// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/recommended-type-checked.ts
const recommendedTypeChecked = {
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-promise-reject-errors': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/unbound-method': 'error',
  'no-array-constructor': 'off',
  'no-implied-eval': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'prefer-promise-reject-errors': 'off',
  'require-await': 'off',
} as const;

// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/stylistic-type-checked.ts
const stylisticTypeChecked = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  'dot-notation': 'off',
  'no-empty-function': 'off',
} as const;
