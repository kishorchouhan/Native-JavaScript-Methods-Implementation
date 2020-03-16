'use strict';

/*****************Object.is()*************************/

// The Object.is() method determines whether two values are the same value.

/* 
Syntax:
  Object.is(value1, value2);

Parameters:
  value1
    The first value to compare.
  value2
    The second value to compare.

Return value:
  A Boolean indicating whether or not the two arguments are the same value.
*/

Object.myIs = function(x, y) {
  if (x === y) {
    // +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // NaN == NaN
    return x !== x && y !== y;
  }
};

// Test

console.log(Object.myIs('foo', 'foo')); // true
console.log(Object.myIs(window, window)); // true

console.log(Object.myIs('foo', 'bar')); // false
console.log(Object.myIs([], [])); // false

var foo = { a: 1 };
var bar = { a: 1 };
console.log(Object.myIs(foo, foo)); // true
console.log(Object.myIs(foo, bar)); // false

console.log(Object.myIs(null, null)); // true

// Special Cases
console.log(Object.myIs(0, -0)); // false
console.log(Object.myIs(-0, -0)); // true
console.log(Object.myIs(NaN, 0 / 0)); // true
