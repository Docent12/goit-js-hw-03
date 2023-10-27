
"use strict";
function normalizeInput(input, to) {
  to = "upper" ? input.toUpperCase : input.toLowerCase;
  return input;
}


console.log(normalizeInput("This ISN'T SpaM", "lower"));