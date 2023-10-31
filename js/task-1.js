
"use strict";
function normalizeInput(input, to) {
    to == "upper" ? input.toUpperCase() : input.toLowerCase();
    console.log(to);
    console.log(input.toUpperCase());

    return ;


}

console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam");
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM");
console.log(normalizeInput("Big SALE", "lower")); // "big sale";
console.log(normalizeInput("Big SALE", "upper")) ;// "BIG SALE"
 console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
  console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN");
