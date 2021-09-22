module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {},
      node: { extensions: ['.js', '.ts'] },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: 2,
    'no-console': 'off',
    'no-unused-vars': ['warn', { args: 'none' }],
    'no-constant-condition': 1,
    'no-global-assign': ['error', { exceptions: ['require'] }],
    // new rule
    'linebreak-style': 0,
    'arrow-parens': [2, 'as-needed'],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'object-curly-newline': ['error', { multiline: true }],
    // variables false for pub/sub hook function
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/prop-types': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['error', { js: ' never' }],
    // eslint-disable-next-line no-underscore-dangle
    /* eslint-disable guard-for-in */
    /* eslint-disable no-restricted-syntax */
    // eslint-disable-next-line no-continue
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
};
