'use strict';

/***************** NATIVE POP *************************/

// The pop() method removes the last element of an array, and returns that element.

// Note: This method changes the length of an array.

Array.prototype.myPop = function() {
  if (this.length === 0) {
    return undefined;
  }
  var returnValue = this[this.length - 1];
  this.length--;
  return returnValue;
};
