'use strict';

/***************** NATIVE UNSHIFT *************************/
// The unshift() method adds new items to the beginning of an array, and returns the new length.

// Note: This method changes the length of an array.

Array.prototype.myUnshift = function(...arg) {
  let newArr = [...arg, ...this];
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }
  return newArr.length;
};

//Test#1

var arr = [1, 2, 3];
var op1 = arr.myUnshift(9);
console.log('O/P#1: ', { op1, arr });

// Test#2

var cars = ['BMW'];
var op2 = cars.myUnshift('Oody');
console.log('O/P#2: ', { op2, cars });

// Test#3

var operatingSystems = ['Windows 98', 'Windows XP', 'OSX 10.1'];
var op3 = operatingSystems.myUnshift('Linux Mint', 'RedHat', 'Slackware');
console.log('O/P#3: ', { op3, operatingSystems });

//Test#4
var num = [1, 2, 3];
var op4 = num.myUnshift({ gh: 4, hvg: 5 }, [3, 2]);
console.log('O/P#4: ', { op4, num });
