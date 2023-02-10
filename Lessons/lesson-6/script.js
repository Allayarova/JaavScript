"use strict";

let arrayName = ["Aziza", "Maryam", "Shahnoza ", "Dilnoza"];

arrayName[2] = "Malika";
arrayName[0] = "Mahliyo";

const numArrays = [12, 18, 20, 25, 24];

console.log(arrayName);

console.log(numArrays);

let numArray = new Array(1, 8, 5, 6, 4, 8);
console.log(numArray.length , numArray);

arrayName.push("Maftuna");
console.log(arrayName);

numArrays.unshift(100);
console.log(numArrays);

arrayName.pop();
console.log(arrayName);


arrayName.shift();
console.log(arrayName);

console.log(numArrays.indexOf(20));


console.log(numArrays.indexOf(400));


console.log(numArrays.includes(20));

console.log(numArrays.includes(400));

numArray.splice(0 ,3);
console.log(numArray);





