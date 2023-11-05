
"use strict";
function getLastElementMeta(array) {


    array[0] = array.length - 1;
    array[1] = array[array.length - 1];
    return array;
}

console.log(getLastElementMeta(['apple','peach','pear' ,'bananna']));
console.log(getLastElementMeta(["apple", "peach", "pear"]));
console.log(getLastElementMeta(["apple", "peach"]));
console.log(getLastElementMeta(["apple"]));