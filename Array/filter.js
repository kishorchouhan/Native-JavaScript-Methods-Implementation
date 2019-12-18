"use strict";

/*****************NATIVE FILTER*************************/

Array.prototype.myFilter = function(callback, thisValue) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisValue, this[i], i, this)) result.push(this[i]);
  }
  return result;
};

//tests
var numbers = [0, 24, 32, 79, 1, 8, 4];
var newNum = numbers.myFilter(function(n) {
  return n >= 10;
});
console.log(newNum); // [ 24, 32, 79 ]
