'use strict';

/***************** NATIVE FLAT *************************/

Array.prototype.myFlat = function(depth) {
  if (depth === undefined) {
    depth = 1;
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      --depth;

      let arr = this[i].myFlat(depth);

      for (let j = 0; j < arr.length; j++) {
        if (j in arr) {
          result.push(arr[j]);
        }
      }
    } else if (i in this) {
      result.push(this[i]);
    }
  }

  return result;
};

// Test#1:
var arr1 = [1, 2, [3, 4]];
console.log('Result#1: ', arr1.myFlat());
// [1, 2, 3, 4]

// Test#2:
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log('Result#2: ', arr2.myFlat());
// [1, 2, 3, 4, [5, 6]]

// Test#3:
var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log('Result#3: ', arr3.myFlat(2));
// [1, 2, 3, 4, 5, 6]

// Test#4:
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log('Result#4: ', arr4.myFlat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Test#5:
var arr5 = [1, 2, , 4, 5, undefined];
console.log('Result#5: ', arr5.flat());
// [1, 2, 4, 5, undefined]
