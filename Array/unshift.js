'use strict';

/***************** NATIVE UNSHIFT *************************/
// The unshift() method adds new items to the beginning of an array, and returns the new length.

// Note: This method changes the length of an array.

Array.prototype.myUnshift = function(...arg) {
  let newArr = [...arg, ...this];
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }
  return newArr.length;
};
