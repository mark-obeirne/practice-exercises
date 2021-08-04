/*
////////////// Fix String Case (7kyu) //////////////
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

*/

function solve(s) {
  lower = /[a-z]/g;
  upper = /[A-Z]/g;
  if (s.match(lower) && s.match(upper)) {
    return s.match(lower).length >= s.match(upper).length
      ? s.toLowerCase()
      : s.toUpperCase();
  } else {
    return s;
  }
}

console.log(solve("CoDE"));

// If the string is all one case or the other, lower or upper are empty objects and an error is produced
// s.match produces an object, which has a length. However, it can also result in an empty object (or a null object), which doesn’t have a length. null is a falsey, so we can test if both s.match(lower) and s.match(upper) are true. If so, we can compare lengths. If not, one of these objects is empty, which means it didn’t match a lowercase or uppercase character, so we can simply return the string.

/*
Top Clever Solution:
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
*/
