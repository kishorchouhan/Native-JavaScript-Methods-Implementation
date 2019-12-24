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

// Test Cases:

// 'It should return the same array.':
console.log([1, 2, 3].mySort());
//[1,2,3]

// 'If no compare function is provided, it should sort from least to greatest.':
console.log([3, 2, 1].mySort());
//[1,2,3]

// 'If no compare function is provided, it should sort based on character code values.':
console.log([1, 10, 3].mySort());
//[1,10,3]

// 'It should sort holes to the end.':
console.log([, 1, 2].mySort());
// [1,2,]

// 'It should sort undefined to the end.':
console.log([undefined, 1, 2].mySort());
// [1,2,undefined]

// 'If holes and undefined exist in array, it should sort undefined before holes.':
console.log([undefined, 3, ,].mySort());
// [3,undefined,]

// 'It should sort multiple holes to the end.':
console.log([, , 1, 2].mySort());
// [1,2,,]

// 'It should sort multiple undefined to the end.':
console.log([undefined, undefined, 1, 2].mySort());
// [1,2,undefined,undefined]

// 'It should sort multiple holes and undefined to the end.':
console.log([, , undefined, undefined, 1, 2].mySort());
// [1,2,undefined,undefined,,]

// 'If character codes are equal but values are different, sort based on value from least to greatest. Numeric.':
console.log([100, 10, 1].mySort());
// [1,10,100]

// 'If character codes are equal but values are different, sort based on value from least to greatest. String.':
console.log(["abcde", "abcd", "abc"].mySort());
// ["abc", "abcd", "abcde"]

// 'It should accept an optional compareFunction. If positive, greatest to least.':
console.log(
  [1, 2].mySort(function(a, b) {
    return b - a;
  })
);
//[2,1]

// 'It should accept an optional compareFunction. If 0, do nothing.':
console.log(
  [3, 1, 2].mySort(function(a, b) {
    return 0;
  })
);
// [3, 1, 2]

// 'Objects can be sorted, given the value of one of their properties. Test for numeric.':
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
// sort by value
console.log(
  items.mySort(function(a, b) {
    return a.value - b.value;
  })
);
/*
[{
  name: "The",
  value: -12
}, {
  name: "Magnetic",
  value: 13
}, {
  name: "Edward",
  value: 21
}, {
  name: "Sharpe",
  value: 37
}, {
  name: "Zeros",
  value: 37
}, {
  name: "And",
  value: 45
}]
*/

// 'Objects can be sorted, given the value of one of their properties. Test for strings.':
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
console.log(
  items.mySort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  })
);
/* 
[{
  name: "And",
  value: 45
}, {
  name: "Edward",
  value: 21
}, {
  name: "Magnetic",
  value: 13
}, {
  name: "Sharpe",
  value: 37
}, {
  name: "The",
  value: -12
}, {
  name: "Zeros",
  value: 37
}]
*/

// 'If no compare function is provided, it should sort null after strings/numbers.':
console.log([null, 1, "hi"].mySort());
// [1, "hi", null]

// 'Edge case':
// [, undefined, undefined, 1, '3', 3, 7, '7', , undefined].sort();
// // [1, 3, "3", "7", 7, undefined, undefined, undefined, empty × 2]

// [, undefined, undefined, 1, '3', 3, 7, '7', , undefined].mySort();
// // [1, "3", 3, 7, "7", undefined, undefined, undefined, empty × 2]
