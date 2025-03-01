module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript', // Uses the recommended rules from airbnb-typescript
    'airbnb/hooks',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    camelcase: 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/no-danger': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
  },
  reportUnusedDisableDirectives: true,
};
