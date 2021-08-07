/*
////////////// Is the Number a Repdigit //////////////

A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false

*/

function isRepdigit(num) {
  string = num.toString();
  array = string.split("");
  return array.every((char) => char == array[0]);
}

/*
    Alternative

    function isRepdigit(num) {
        return new Set('' + num).size === 1
    }

*/
