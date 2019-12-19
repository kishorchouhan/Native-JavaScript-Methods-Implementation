"use strict";

/*****************Native forEACH*********************/

Array.prototype.myForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    if (i in this)
      // since each array element's index is a property of the array
      // can also be used: if (Object.hasOwnProperty.call(this, i))
      callback(this[i], i, this);
  }
};

// Test#1
var arr1 = ["a", "b", "c", "d"];
arr1.myForEach(function(item) {
  console.log("Test1: ", item);
});
//a
//b
//c
//d

// Test#2
var arr2 = [0, undefined, 2];
arr2[10] = 10;
arr2.myForEach(function(item) {
  console.log("Test2: ", item);
});
//0
//undefined
//2
//10
