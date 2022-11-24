module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'prettier',
  ],
  rules: {
    //
    // Base
    //
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    //
    //  Plugin React
    //
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,
    //
    //  Plugin react-hooks
    //
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    //
    //  Plugin typescript-eslint
    //
    '@typescript-eslint/no-unused-vars': [
      'warn',
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
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
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
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       'builtin',
    //       'external',
    //       'parent',
    //       'sibling',
    //       'object',
    //       'type',
    //       'index',
    //     ],
    //     'newlines-between': 'always',
    //     pathGroupsExcludedImportTypes: ['react', 'builtin'],
    //     alphabetize: { order: 'asc', caseInsensitive: true },
    //     pathGroups: [
    //       {
    //         pattern: '{react,react-dom/**,react-router-dom}',
    //         group: 'builtin',
    //         position: 'before',
    //       },
    //       {
    //         pattern: '@src/**',
    //         group: 'parent',
    //         position: 'before',
    //       },
    //     ],
    //   },
    // ],
  },
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.ts', '.tsx'],
    //   },
    //   typescript: {},
    // },
  },
};
