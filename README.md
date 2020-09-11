# IIFE

IIFE is javascript Immediately Invoked Function Expression warpper.

## Install
```shell
> npm install @eightnineight/iife
```

## Usage
```javascript
const { IIFE } = require('@eightnineight/iife');

IIFE((str)=> {
  console.log(str);
}, 'test');
```
### Result
```shell
> test
```

### Effect is equal to
```javascript
((str) => {
  console.log(str);
})('test');
```