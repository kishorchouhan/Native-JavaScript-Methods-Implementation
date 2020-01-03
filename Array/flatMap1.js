'use strict';

/*****************NATIVE FLATMAP*************************/

Array.prototype.myFlatMap = function(callback, thisArg) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    var output = callback.call(thisArg, this[i], i, this);

    if (Array.isArray(output)) {
      for (let j = 0; j < output.length; j++) {
        if (j in output) {
          result.push(output[j]);
        }
      }
    } else if (i in this) {
      result.push(output);
    }
  }

  return result;
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
