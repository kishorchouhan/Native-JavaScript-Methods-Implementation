'use strict';

/***************** NATIVE toUpperCase *************/

/*
  The toUpperCase() method returns the value of the string converted to uppercase.
  This method does not affect the value of the string itself since JavaScript strings are immutable.
  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
  Characters from A-Z have ASCII code from 65 - 90.
  And characters from a-z have ASCII code from 97-122.
  We're checking this condition to implement this function.
*/

String.prototype.myToUpperCase = function() {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    const character = this[i];
    const characterCode = character.charCodeAt();

    if (characterCode >= 97 && characterCode <= 122) {
      result += String.fromCharCode(characterCode - 32);
    } else {
      result += character;
    }
  }

  return result;
};
