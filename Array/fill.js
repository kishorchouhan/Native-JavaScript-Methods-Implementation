'use strict';

/***************** NATIVE FILL *************************/

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
// It returns the modified array.

Array.prototype.myFill = function(value, start = 0, end = this.length) {
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

// Test#1
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.myFill(0, 2, 3));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.myFill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.myFill(6));
// expected output: [6, 6, 6, 6]

// Test#2

// console.log([1, 2, 3].myFill(4));
// // [4, 4, 4]
// console.log([1, 2, 3].myFill(4, 1));
// // [1, 4, 4]
// console.log([1, 2, 3].myFill(4, 1, 2));
// // [1, 4, 3]
// console.log([1, 2, 3].myFill(4, 1, 1));
// // [1, 2, 3]
// console.log([1, 2, 3].myFill(4, 3, 3));
// // [1, 2, 3]
// console.log([1, 2, 3].myFill(4, -3, -2));
//// [4, 2, 3]
// console.log([1, 2, 3].myFill(4, NaN, NaN));
// // [1, 2, 3]

// console.log([1, 2, 3].myFill(4, 3, 5));
// //// [1, 2, 3]

// console.log(Array(3).myFill(4));
// // [4, 4, 4]
// console.log([].myFill.call({ length: 3 }, 4));
// // {0: 4, 1: 4, 2: 4, length: 3}
