'use strict';

/*****************NATIVE SOME*************************/

Array.prototype.mySome = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// Test#1
var passed = [12, 5, 8, 130, 44].mySome(function(element) {
  return element >= 200;
});
console.log('some: ' + passed); //some: false

// Test#2
var passed = [12, 5, 8, 130, 44].mySome(function(element) {
  return element >= 100;
});
console.log('some: ' + passed); //some: true

// Test#3
var passed = [].mySome(function(element) {
  return element >= 100;
});
console.log('some: ' + passed); //some: false
