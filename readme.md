# is-travis [![Build Status](https://travis-ci.org/sindresorhus/is-travis.svg?branch=master)](https://travis-ci.org/sindresorhus/is-travis)

> Check if your code is running on [Travis](https://travis-ci.org)


## Install

```
$ npm install is-travis
```


## Usage

```js
const isTravis = require('is-travis');

// On your local computer
console.log(isTravis);
//=> false

// On Travis
console.log(isTravis);
//=> true
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
