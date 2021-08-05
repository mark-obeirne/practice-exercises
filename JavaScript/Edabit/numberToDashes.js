/*
////////////// Convert Number to String of Dashes //////////////

Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

Examples
Go(1) ➞ "-"

Go(5) ➞ "-----"

Go(3) ➞ "---"
Notes
You will be provided integers ranging from 1 to 60.
Don't forget to return your result as a string.


*/

function Go(num) {
  return "-".repeat(num);
}

console.log(Go(5));

/* 
    Alternative

    const Go = num => '-'.repeat(num);
*/
