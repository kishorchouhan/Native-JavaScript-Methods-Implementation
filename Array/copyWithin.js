'use strict';

/***************** NATIVE COPYWITHIN *************************/

/*
The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

Note: this method overwrites the original array.

Parameter Values: target, start, end

Parameter(Description):

  target	(Required) The index position to copy the elements to
  start	(Optional) The index position to start copying elements from  (default is 0)
  end	(Optional) The index position to stop copying elements from (default is array.length)
*/

Array.prototype.myCopyWithin = function(target, start = 0, end = this.length) {
  if (target < 0) {
    target = this.length + target;
    if (target < 0) {
      target = 0;
    }
  }
  if (start < 0) {
    start = this.length + start;
    if (start < 0) {
      start = 0;
    }
  }
  if (end < 0) {
    end = this.length + end;
  }
  if (target >= this.length || start >= end) {
    return this;
  }
  let arr = [...this];
  let iteratorCount =
    end - start <= this.length - start ? end - start : this.length - start;
  for (let i = 0; i < iteratorCount; i++) {
    this[target] = arr[start];
    target++;
    start++;
    if (target >= this.length) {
      return this;
    }
  }
  return this;
};

const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.myCopyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.myCopyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

// Test#2
console.log([1, 2, 3, 4, 5].myCopyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].myCopyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].myCopyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].myCopyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
