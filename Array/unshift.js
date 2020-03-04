'use strict';

/***************** NATIVE UNSHIFT *************************/
// The unshift() method adds new items to the beginning of an array, and returns the new length.

// Note: This method changes the length of an array.

Array.prototype.myUnshift = function(elements) {
  var argCount = arguments.length;
  var i = this.length - 1;
  // var len = array.length;
  this.length = this.length + argCount;

  if (argCount > 0) {
    if (this.length + argCount > 9.0071993e15) {
      throw new TypeError('Too many arguments...');
    }
  }

  while (i >= argCount - 1) {
    this[i] = this[i - argCount];
    i--;
  }

  var l = 0;
  while (l < arguments.length) {
    this[l] = arguments[l];
    l++;
  }

  return this.length;
};
