'use strict';

/*****************NATIVE PUSH*************************/

Array.prototype.myPush = function(...arg) {
  let newArr = [...this, ...arg];
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }
  return newArr.length;
};

// Test#1
let arr = [1, 2, 3];
console.log(arr.myPush(4, 5, 6));
console.log(arr);
