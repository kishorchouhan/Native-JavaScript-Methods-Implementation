'use strict';

/***************** NATIVE CONCAT *************************/

Array.prototype.myConcat = function(...arg) {
  return [...this, ...arg.flat(Infinity)];
};

// Test#1
let arr = [1, 2, 3];
console.log(arr.myConcat([4, 5], [6, 7]).myConcat([8, 9]));
