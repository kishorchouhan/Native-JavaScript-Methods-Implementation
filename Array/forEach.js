"use strict";

/*****************Native forEACH*********************/

Array.prototype.myForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Test
var arr = ["a", "b", "c", "d"];
arr.myForEach(function(item) {
  console.log(item);
});
//a
//b
//c
//d
