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

// Test
var arr1 = [1, 3];
var arr2 = [1];
var arr3 = [];
var operatingSystems = ['Windows 98', 'Windows XP', 'OSX 10.1'];

var op1 = arr1.myPop();
var op2 = arr2.myPop();
var op3 = arr3.myPop();
var op4 = operatingSystems.myPop();

console.log(op1, arr1);
console.log(op2, arr2);
console.log(op3, arr3);
console.log(op4, operatingSystems);
