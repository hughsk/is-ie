# is-ie

Gives you the version of Internet Explorer your code is running in as a float,
or `null` if running in Node/Chrome/Firefox/etc.

## Installation

``` bash
npm install is-ie
```

## Usage

``` javascript
var version = require('is-ie')

if (version === null) {
  start()
} else
if (version <= 9) {
  throw new Error
}
```
