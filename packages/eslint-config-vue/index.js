module.exports = {
  extends: [
    '@smartlinkdev/eslint-config',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/max-attributes-per-line': [2, {
      singleline: 2,
      multiline: {
        max: 1,
      },
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['vue', 'vue-router'],
      custom: [],
      threshold: 1,
    }],
    'vue/no-reserved-component-names': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
  },
}
