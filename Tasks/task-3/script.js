//masala 2

// let a = Number(prompt(" a butun sonini kirirting  a<b "));

// let b = Number(prompt(" b butun sonini kirirting  a<b "));

// let sum = "";

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

//masala 3

// let a = Number(prompt(" a butun sonini kirirting  a<b "));

// let b = Number(prompt(" b butun sonini kirirting  a<b "));

// for (let i = b; i > a; i--) {
//   console.log(i);

// }

//masala 4

// let a = Number(prompt(" 1 kg kanfet narxini kiriting "));

// for (let i = 1; i <= 10; i++) {
//   console.log(i*a);

// }

//masala 5

// let a = Number(prompt(" 1 kg kanfet narxini kiriting "));

// for (let i = 1; i <= 10; i++) {
//   console.log((i / 10) * a);
// }

//masala 6

//masala 7

// let a = Number(prompt(" a butun sonini kirirting  a<b "));

// let b = Number(prompt(" b butun sonini kirirting  a<b "));

// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum = sum + i;
// }
// console.log(sum);

//masala -8

// let a = Number(prompt(" a butun sonini kirirting  a<b "));

// let b = Number(prompt(" b butun sonini kirirting  a<b "));

// let sum = 1;

// for (let i = a; i <= b; i++) {
//   sum = sum * i;
// }
// console.log(sum);

//masala 9

// let a = Number(prompt(" a butun sonini kirirting  a<b "));

// let b = Number(prompt(" b butun sonini kirirting  a<b "));

// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum = sum + i ** 2;
// }
// console.log(sum);

// masala -10

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + 1 + 1 / i;
// }
// console.log(sum);

//masala 11

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + n ** 2 + (n + i) ** 2;
// }
// console.log(sum);

// masala 12

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let sum = 1;

// for (let i = 1; i <= 2n; i++) {
//   sum = (sum * i) / 10;
// }
// console.log(sum);

//masala 13

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % 2) {
//     sum += (-1 * i) / 10;
//   } else {
//     sum += i / 10;
//   }
// }
// console.log(sum);

//masala 14

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let sum = 0;

// for (let i = 1; i < n; i++) {
//   console.log(i**2);
// }

//masala 15

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let a = Number(prompt(" a butun sonini kirirting  "));

// let sum = 0;

// for (let i = 1; i < a; i++) {
//   for (let j = 1; j < n; j++) {
//     console.log(i**j);
//   }
// }

// //masala 16

// let n = Number(prompt(" n butun sonini kirirting  n>0 "));

// let a = Number(prompt(" a butun sonini kirirting  "));

// let sum = 1;

// for (let i = 1; i < n; i++) {
//   console.log(a ** i);
// }

//masala 17

let n = Number(prompt(" n butun sonini kirirting  n>0 "));

let a = Number(prompt(" a butun sonini kirirting  "));

let sum = 0;

for (let i = 1; i < n; i++) {
  console.log(a ** i);
  console.log((sum += a ** i)); 
}
