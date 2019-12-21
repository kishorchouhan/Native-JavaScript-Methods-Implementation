"use strict";

/*****************NATIVE FLATMAP*************************/

Array.prototype.myFlatMap = function(callback, thisArg) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }
};
