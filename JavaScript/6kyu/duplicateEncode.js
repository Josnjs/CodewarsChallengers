/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
  var lowerC = word.toLowerCase();
  var char1 = "(";
  var char2 = ")";
  var newStr = "";

  for (let i = 0; i < lowerC.length; i++) {
    let count = 0;
    for (let j = 0; j < lowerC.length; j++) {
      if (lowerC[i] === lowerC[j]) {
        count++;
      }
    }
    newStr += count === 1 ? char1 : char2;
  }

  return newStr;
}

console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
