"use script";

const arr = [12, 13, 14, 15, 1, 7, 18];

const arr2 = [1, 3, 4, 5, 7, 8];

//slice (immutable)

// let newArr = arr.slice(0, 4);
// console.log(newArr);

// console.log(arr);

//splice (mutable)

// let newArr = arr.splice(0, 4);
// console.log(newArr);

// console.log(arr);

//reverse (mutable)


// let newArr = arr.reverse(0, 4);
// console.log(newArr);

// console.log(arr);

//concat (immutable )

let newArr = arr.concat(arr2);
console.log(newArr);

console.log(arr);








