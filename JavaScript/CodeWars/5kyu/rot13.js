/*
////////////// Rot13 (5 kyu) //////////////

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let converted = [];
  for (let char of message.split("")) {
    if (alpha.includes(char.toLowerCase())) {
      let num = alpha.indexOf(char.toLowerCase()) + 13;
      if (num > 25) {
        num = num - 26;
      }
      if (char === char.toLowerCase()) {
        converted.push(alpha[num]);
      } else {
        converted.push(alpha[num].toUpperCase());
      }
    } else {
      converted.push(char);
    }
  }
  return converted.join("");
}

console.log(rot13("Hello there, General Kenobi"));

/* 
Top Clever Solution

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

*/
