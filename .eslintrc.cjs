module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'pstcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-var': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-extra-semi': 'off',
    'no-case-declarations': 'off',
    'no-async-promise-executor': 'off',
    'no-restricted-imports': ['off'],
    'import/no-unresolved': 'off',
    'react/jsx-uses-vars': 'warm',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'no-irregular-whitespace': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/display-name': 'off',
  },
}
