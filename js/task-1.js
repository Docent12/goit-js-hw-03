"use strict";
function getLastElementMeta(array) {

    array[0] = array.length - 1;
    // console.log(array[0]);
    array[1] = array[array.length - 1];
    // console.log(array[1]);


  for (let x = 0; x < array.length-1; x += 1) {
    const element = array[x];
      return array[0, 1];
}

    console.log(getLastElementMeta(["apple", "peach", "pear", "bananna"]));
    console.log(getLastElementMeta(["apple", "peach", "pear"]));
    console.log(getLastElementMeta(["apple", "peach"]));
    console.log(getLastElementMeta(["apple"]));