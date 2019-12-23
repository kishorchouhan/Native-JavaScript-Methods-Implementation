"use strict";

/***************** NATIVE SORT *************************/

Array.prototype.mySort = function(compareFunction) {
  function charCode(input) {
    // if undefined, need to skip
    if (input === undefined || input === null) {
      return input;
    } else {
      return String.prototype.charCodeAt.call(input);
    }
  }

  function originalCompareFunction(a, b) {
    if (charCode(a) > charCode(b) && charCode(b) !== null) {
      return 1;
    } else if (charCode(a) === charCode(b) && a !== b) {
      if (a > b) {
        return 1;
      }
    } else if (charCode(a) === null && Number.isInteger(charCode(b)) === true) {
      return 1;
    } else {
      return 0;
    }
  }
  compareFunction = compareFunction || originalCompareFunction;

  var switched = false;
  while (switched !== true) {
    switched = true;
    for (var i = 0; i < this.length - 1; i++) {
      // Check for holes
      // Switch only if next index is not a hole as well
      if (i in this === false && i + 1 in this !== false) {
        this[i] = this[i + 1];
        delete this[i + 1];
        switched = false;
      }
      // Check for undefined
      // Switch only if next index is not undefined as well
      if (
        this[i] === undefined &&
        i in this === true &&
        this[i + 1] !== undefined
      ) {
        var temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        switched = false;
      }
      // Compare
      if (compareFunction(this[i], this[i + 1]) > 0) {
        var temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        switched = false;
      }
    }
  }
  return this;
};
