module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/prefer-readonly': ['warn'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error'],
  },
};
