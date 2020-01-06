
# sa-company-registration-number-regex
[![package version](https://img.shields.io/npm/v/sa-company-registration-number-regex.svg?style=flat-square)](https://npmjs.org/package/sa-company-registration-number-regex)
[![package downloads](https://img.shields.io/npm/dm/sa-company-registration-number-regex.svg?style=flat-square)](https://npmjs.org/package/sa-company-registration-number-regex)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/sa-company-registration-number-regex.svg?style=flat-square)](https://npmjs.org/package/sa-company-registration-number-regex)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Regular expression for matching South African Company Registration Number

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install sa-company-registration-number-regex
$ # OR
$ yarn add sa-company-registration-number-regex
```

## Usage

```js
const saCompanyRegistration = require('sa-company-registration-number-regex')

console.log(saCompanyRegistration({ exact: true }).test('2001/012511/07')) // true

```

The `exact` argument only match an exact string. Default is global.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request

## License

MIT
