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
  var thisValue = [...this];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = thisValue[i];
  }
  this.length--;
  return returnValue;
};

// Tests:

var arr1 = [1, 3];
var arr2 = [1];
var arr3 = [];
var operatingSystems = ['Windows 98', 'Windows XP', 'OSX 10.1'];

var op1 = arr1.myShift();
var op2 = arr2.myShift();
var op3 = arr3.myShift();
var op4 = operatingSystems.myShift();

console.log(op1, arr1);
console.log(op2, arr2);
console.log(op3, arr3);
console.log(op4, operatingSystems);
