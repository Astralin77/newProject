"use strict";

const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));


const arr = [2, 13, 26, 13, 23];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
        return a - b;
}