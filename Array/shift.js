'use strict';

/***************** NATIVE SHIFT *************************/

// The shift() method removes the first item of an array.

// Note: This method changes the length of the array.

// Note: The return value of the shift method is the removed item.

// Note: this method will change the original array.

Array.prototype.myShift = function() {
  if (this.length === 0) {
    return undefined;
  }
  var returnValue = this[0];
  var thisValue = this;
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = thisValue[i];
  }
  this.length--;
  return returnValue;
};
