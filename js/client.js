'use strict';

const original = 'Java Script isnt that hard';

console.log(original)

document.querySelector(".original").innerHTML = original;

function spongebobCase (text) {
  let altCaps = "";
  for ( let i = 0; i < text.length; i++) {
     altCaps += i % 2 == 0 ? text.charAt(i).toUpperCase() : text.charAt(i);
  }
  return altCaps;  
}

let altered = spongebobCase(original)

console.log(altered)

document.querySelector(".spongebob-case").innerHTML = altered;