# is-travis [![Build Status](https://travis-ci.org/sindresorhus/is-travis.svg?branch=master)](https://travis-ci.org/sindresorhus/is-travis)

> Check if your code is running on [Travis](https://travis-ci.org)


## Install

```sh
$ npm install --save is-travis
```


## Usage

```js
var isTravis = require('is-travis');

// on you local computer
console.log(isTravis);
//=> false

// on Travis
console.log(isTravis);
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
