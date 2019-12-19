"use strict";

/*****************NATIVE MAP*************************/

Array.prototype.myMap = function(callback, thisArg) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(thisArg, this[i], i, this));
  }
  return arr;
};

//tests
var arr = ["abc", "def", "ghi"];
var numbers = [16, 25, 36];

var goodT = arr.myMap(function(n) {
  return n;
});

var squareRoot = numbers.myMap(function(num) {
  return Math.sqrt(num);
});

console.log(goodT); // ["abc", "def", "ghi"]
console.log(squareRoot); // [ 4, 5, 6 ]
