module.exports = {
  extends: [
    '@smartlinkdev/eslint-config',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/max-attributes-per-line': [2, {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/no-potential-component-option-type': ['error', {
      presets: ['all'],
    }],
    'vue/no-reserved-component-names': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
  },
};
