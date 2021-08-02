/*
////////////// RGB To Hex Conversion (5 kyu) //////////////

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b) {
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }
  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }
  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }

  let rHex = r.toString(16).toUpperCase();
  if (rHex.length === 1) {
    rHex = `0${rHex}`;
  }
  let gHex = g.toString(16).toUpperCase();
  if (gHex.length === 1) {
    gHex = `0${gHex}`;
  }
  let bHex = b.toString(16).toUpperCase();
  if (bHex.length === 1) {
    bHex = `0${bHex}`;
  }

  return `${rHex}${gHex}${bHex}`;
}

console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(148, 0, 211)); // returns 9400D3

/* Best Solutions */

/* 
function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }
*/
