'use strict';

/*****************NATIVE FLATMAP*************************/

Array.prototype.myFlatMap = function(callback, thisArg) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }

  let finalResult = [];

  for (let j = 0; j < result.length; j++) {
    if (Array.isArray(result[j])) {
      for (let k = 0; k < result[j].length; k++) {
        if (result[j][k] !== undefined) {
          finalResult.push(result[j][k]);
        }
      }
    } else if (result[j] !== undefined) {
      finalResult.push(result[j]);
    }
  }

  return finalResult;
};

// Test#1
let arr1 = [1, 2, 3, 4];

console.log(
  'Result#1.1: ',
  arr1.myFlatMap(x => [x * 2])
);
// [2, 4, 6, 8]

// only one level is flattened
console.log(
  'Result#1.2: ',
  arr1.myFlatMap(x => [[x * 2]])
);
// [[2], [4], [6], [8]]

// Test#2
let arr2 = ["it's Sunny in", '', 'California'];

console.log(
  'Result#2: ',
  arr2.myFlatMap(x => x.split(' '))
);
// ["it's","Sunny","in", "", "California"]
