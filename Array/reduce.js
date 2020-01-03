'use strict';

/*****************NATIVE REDUCE*************************/

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let i = 0;

  // Initial value check
  if (typeof initialValue === 'undefined') {
    if (this.length === 0) {
      throw new TypeError('reduce on empty array without initial value');
    }
    [accumulator] = this;
    i = 1;
  }

  for (; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Test#1
var numbers3 = [20, 20, 2, 3];
var total = numbers3.myReduce(function(a, b) {
  return a + b;
}, 10);
console.log(total); // 55

// Test#2
var numbers = [20, 20, 2, 3];
var product = numbers.myReduce(function(a, b) {
  return a * b;
}, 0);
console.log(product); // 0

// Test#3
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].myReduce(function(a, b) {
  return a.concat(b);
});
console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]

// Test#4
[undefined, null, '3', 4, 5].myReduce((acc, cur) => acc * cur); // NaN
