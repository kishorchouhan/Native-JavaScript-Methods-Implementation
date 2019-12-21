"use strict";

/***************** NATIVE FLAT *************************/

Array.prototype.myFlat = function(depth) {
  let result = [];
  depth = depth ? depth : 1;

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth) {
      let arr = this[i];
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
      }
      depth -= 1;
    }
    result.push(this[i]);
  }
  return result;
};

// Test#1:
var arr1 = [1, 2, [3, 4]];
console.log(arr1.myFlat());
// [1, 2, 3, 4]

// Test#2:
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.myFlat());
// [1, 2, 3, 4, [5, 6]]

// Test#3:
var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.myFlat(2));
// [1, 2, 3, 4, 5, 6]

// Test#4:
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.myFlat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
