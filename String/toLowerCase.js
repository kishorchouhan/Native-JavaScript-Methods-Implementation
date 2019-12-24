"use strict";

/*****************NATIVE toLowerCase*************/

/*
  The toLowerCase() method returns the value of the string converted to lower case.
  toLowerCase() does not affect the value of the string str itself.
  MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  Characters from A-Z have ASCII code from 65 - 90.
  And characters from a-z have ASCII code from 97-122.
  We're checking this condition to implement this function
*/

String.prototype.myToLowerCase = function() {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    const character = this[i];
    const characterCode = character.charCodeAt();

    if (characterCode >= 65 && characterCode <= 90) {
      result += String.fromCharCode(characterCode + 32);
    } else {
      result += character;
    }
  }

  return result;
};
