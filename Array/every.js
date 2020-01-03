'use strict';

/*****************NATIVE EVERY*************************/

Array.prototype.myEvery = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Test#1
var passed = [12, 5, 8, 130, 44].myEvery(function(element) {
  return element >= 10;
});
console.log(passed); // false

// Test#2
passed = [12, 54, 18, 130, 44].myEvery(function(element) {
  return element >= 10;
});
console.log(passed); // true

// Test#3
passed = [12, 54, 18, 130, 44].myEvery(function(element) {
  return element >= 13;
});
console.log(passed); // false

passed = [].myEvery(function(element) {
  return element >= 13;
});
console.log(passed); // true
