<a href="https://www.smartlink.ai/">
  <img src="https://smartlink.ai/wp-content/uploads/2020/06/smartLINK_HeaderLogo-min.png" alt="smartLINK" width="150" />
</a>

> All-In-One Digital Engagement Platform

<br/>

# Smartlink ESLint Config

[![GitHub Super-Linter](https://github.com/<OWNER>/<REPOSITORY>/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![GitHub Actions](https://github.com/smartlink-ventures/eslint-config/workflows/ci/badge.svg?branch=master)](https://github.com/smartlink-ventures/eslint-config/actions?query=workflow%3Aci)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@smartlinkdev/eslint-config)](https://npmjs.com/package/@smartlinkdev/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@smartlinkdev/eslint-config)](https://npmjs.com/package/@smartlinkdev/eslint-config)

## Getting Started

### Installation

1. Add this package to your devDependencies

```bash
$ npm i -D @smartlinkdev/eslint-config
# or
$ yarn add -D @smartlinkdev/eslint-config
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
    '@smartlinkdev/eslint-config'
  ]
}
```

## Full example

A full example `.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: [
    '@smartlinkdev/eslint-config'
  ]
}
```

## License

[MIT license](https://github.com/smartlink-ventures/eslint-config/blob/master/LICENSE) - Smartlink Ventures, Inc.
