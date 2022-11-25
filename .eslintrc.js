const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'unused-imports',
    'prettier',
    'import',
  ],
  rules: {
    //
    // Base
    //
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    camelcase: ERROR,
    'spaced-comment': ERROR,
    quotes: [ERROR, 'single'],
    'no-duplicate-imports': ERROR,
    //
    //  Plugin typescript-eslint
    //
    '@typescript-eslint/consistent-type-definitions': IGNORE,
    '@typescript-eslint/ban-types': IGNORE,
    //
    //  Plugin React
    //
    'react/display-name': IGNORE,
    'react/jsx-boolean-value': IGNORE,
    'react/jsx-no-comment-textnodes': WARN,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-sort-props': IGNORE,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/jsx-key': [WARN, { checkFragmentShorthand: true }],
    'react/no-did-mount-set-state': WARN,
    'react/no-did-update-set-state': WARN,
    'react/no-multi-comp': IGNORE,
    'react/no-string-refs': WARN,
    'react/no-unknown-property': ERROR,
    'react/prop-types': IGNORE,
    'react/react-in-jsx-scope': WARN,
    'react/self-closing-comp': WARN,
    'react/wrap-multilines': IGNORE,
    //
    //  Plugin react-hooks
    //
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    //
    //  Plugin react-native
    //
    'react-native/no-unused-styles': WARN,
    'react-native/split-platform-components': ERROR,
    'react-native/no-inline-styles': WARN,
    'react-native/no-color-literals': ERROR,
    'react-native/no-raw-text': ERROR,
    'react-native/no-single-element-style-arrays': ERROR,
    //
    //  Plugin typescript-eslint
    //
    '@typescript-eslint/no-unused-vars': [
      WARN,
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_$',
      },
    ],
    //
    //  Plugin unused-imports
    //
    'unused-imports/no-unused-imports': ERROR,
    'unused-imports/no-unused-vars': [
      WARN,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //
    //  Plugin import
    //
    'import/order': [
      ERROR,
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react', 'builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
