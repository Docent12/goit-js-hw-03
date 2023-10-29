
"use strict";
function normalizeInput(input, to) {
  to = "upper" ? input.toUpperCase : input.toLowerCaes;
  return input;
}

console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam");
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM");
console.log(normalizeInput("Big SALE", "lower")); // "big sale";
console.log(normalizeInput("Big SALE", "upper")) ;// "BIG SALE"
 console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
  console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN");
