// let arr = [12, 25, 2, 5, 8, 11];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// let [a, b, c, d] = arr;

// let [a, , b] = arr;
// console.log(a, b);

let arr = [12, 25, 2, 5, 8, 11, [45, 52]];

let [a, b, c, d, e, f, [g, h]] = arr;
console.log(a, b, c, d, e, f, g, h);
