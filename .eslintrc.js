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
    // Favorite
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
    // Base
    //
    'no-cond-assign': WARN, // disallow assignment in conditional expressions
    'no-console': IGNORE, // disallow use of console (off by default in the node environment)
    'no-const-assign': ERROR, // disallow assignment to const-declared variables
    'no-constant-condition': IGNORE, // disallow use of constant expressions in conditions
    'no-control-regex': WARN, // disallow control characters in regular expressions
    'no-debugger': WARN, // disallow use of debugger
    'no-dupe-class-members': ERROR, // Disallow duplicate name in class members
    'no-dupe-keys': ERROR, // disallow duplicate keys when creating object literals
    'no-empty': IGNORE, // disallow empty statements
    'no-ex-assign': WARN, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': WARN, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': IGNORE, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': IGNORE, // disallow unnecessary semicolons
    'no-func-assign': WARN, // disallow overwriting functions written as function declarations
    'no-inner-declarations': IGNORE, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': WARN, // disallow invalid regular expression strings in the RegExp constructor
    'no-negated-in-lhs': WARN, // disallow negation of the left operand of an in expression
    'no-obj-calls': WARN, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': WARN, // disallow multiple spaces in a regular expression literal
    'no-reserved-keys': IGNORE, // disallow reserved words being used as object literal keys (off by default)
    'no-sparse-arrays': WARN, // disallow sparse arrays
    'no-unreachable': ERROR, // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': WARN, // disallow comparisons with the value NaN
    'valid-jsdoc': IGNORE, // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': WARN, // Ensure that the results of typeof are compared against a valid string
    //
    //  Base Best Practices
    //
    'block-scoped-var': IGNORE, // treat var statements as if they were block scoped (off by default)
    complexity: IGNORE, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': IGNORE, // require return statements to either always or never specify values
    curly: IGNORE, // specify curly brace conventions for all control statements
    'default-case': IGNORE, // require default case in switch statements (off by default)
    'dot-notation': WARN, // encourages use of dot notation whenever possible
    eqeqeq: [WARN, 'allow-null'], // require the use of === and !==
    'guard-for-in': IGNORE, // make sure for-in loops have an if statement (off by default)
    'no-alert': WARN, // disallow the use of alert, confirm, and prompt
    'no-caller': WARN, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': WARN, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': IGNORE, // disallow else after a return in an if (off by default)
    'no-eq-null': IGNORE, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': ERROR, // disallow use of eval()
    'no-extend-native': WARN, // disallow adding to native types
    'no-extra-bind': WARN, // disallow unnecessary function binding
    'no-fallthrough': WARN, // disallow fallthrough of case statements
    'no-floating-decimal': IGNORE, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': WARN, // disallow use of eval()-like methods
    'no-labels': WARN, // disallow use of labeled statements
    'no-iterator': WARN, // disallow usage of __iterator__ property
    'no-lone-blocks': WARN, // disallow unnecessary nested blocks
    'no-loop-func': IGNORE, // disallow creation of functions within loops
    'no-multi-str': IGNORE, // disallow use of multiline strings
    'no-native-reassign': IGNORE, // disallow reassignments of native objects
    'no-new': WARN, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': ERROR, // disallow use of new operator for Function object
    'no-new-wrappers': WARN, // disallows creating new instances of String,Number, and Boolean
    'no-octal': WARN, // disallow use of octal literals
    'no-octal-escape': WARN, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-proto': WARN, // disallow usage of __proto__ property
    'no-redeclare': IGNORE, // disallow declaring the same variable more then once
    'no-return-assign': WARN, // disallow use of assignment in return statement
    'no-script-url': WARN, // disallow use of javascript: urls.
    'no-self-compare': WARN, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': WARN, // disallow use of comma operator
    'no-unused-expressions': IGNORE, // disallow usage of expressions in statement position
    'no-useless-escape': WARN, // disallow escapes that don't have any effect in literals
    'no-void': WARN, // disallow use of void operator (off by default)
    'no-warning-comments': IGNORE, // disallow usage of configurable warning terms in comments": WARN,                        // e.g. TODO or FIXME (off by default)
    'no-with': WARN, // disallow use of the with statement
    radix: WARN, // require use of the second argument for parseInt() (off by default)
    'semi-spacing': IGNORE, // require a space after a semi-colon
    'vars-on-top': IGNORE, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': IGNORE, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: WARN, // require or disallow Yoda conditions
    //
    //  Base variables
    //
    'no-catch-shadow': WARN, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': WARN, // disallow deletion of variables
    'no-label-var': WARN, // disallow labels that share a name with a variable
    'no-shadow': WARN, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': WARN, // disallow shadowing of names such as arguments
    'no-undef': ERROR, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undefined': IGNORE, // disallow use of undefined variable (off by default)
    'no-undef-init': WARN, // disallow use of undefined when initializing variables
    'no-unused-vars': [
      WARN,
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ], // disallow declaration of variables that are not used in the code
    'no-use-before-define': IGNORE, // disallow use of variables before they are defined
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
    'react-native/no-color-literals': WARN,
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
