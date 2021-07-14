# Smartlink ESLint Config for Vue

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@smartlinkdev/eslint-config-vue)](https://npmjs.com/package/@smartlinkdev/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@smartlinkdev/eslint-config-vue)](https://npmjs.com/package/@smartlinkdev/eslint-config)

## Getting Started

### Installation

1. Add this package to your devDependencies

```bash
$ npm i -D @smartlinkdev/eslint-config-vue
# or
$ yarn add -D @smartlinkdev/eslint-config-vue
```

2. Install `eslint` if not already present locally or globally

```bash
$ npm i -D eslint
# or
$ yarn add -D eslint
```

3. Create a `.eslintrc.js` file
```bash
$ touch .eslintrc.js
```

4. Extend using the plugin
```js
{
  extends: [
    '@smartlinkdev/eslint-config-vue'
  ]
}
```

## Full example

A full example `.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: [
    '@smartlinkdev/eslint-config-vue'
  ]
}
```

## License

[MIT license](https://github.com/smartlink-ventures/eslint-config/blob/master/LICENSE) - Smartlink Ventures, Inc.
