"use script";

// functionName(12, 13);

//decloration function

// function functionName(a, b) {
//   let sum = a + b;
//   console.log(sum);

//   return sum;
// }

//expression function

// const functionName2 = function (a, b) {
//   let sum = a - b;
//   console.log(sum);

//   return sum;
// };

let arr = [1, 2, 3, 45, 6, 7, 8];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);

// let fuc = function () {};

//arrow function

// const arrowFunction = (a = 1, b = 1) => a * b;

// console.log(arrowFunction(100));
// console.log(arrowFunction(100, 0.1));

//
let age = 25;
const user2 = {
  age: 30,
};

const func = (age) => {
  age = 10;
};

const user = {
  fName: "Umar",
  lNmae: "Hamidov",
  login: "umar",
  pass: "password",
  email: "email@gmail.com",
  nowYear: 2023,

  countBirth: function (age, sum) {
    const birthYear = this.nowYear - age;
    return { birthYear, sum };
  },
};

// console.log(user.countBirth(21));

const admin = {
  fName: "Umid",
  lNmae: "Hamidov",
  login: "umid",
  pass: "password",
  email: "email@gmail.com",
  nowYear: 2023,
};

let a = [40, 100];
let b = 50;

// console.log(user.countBirth.call(admin, b));

// console.log(user.countBirth.call(admin, ...a));

//apply

// console.log(user.countBirth.apply(admin, [b]));

// (function () {
//   alert = "hello";
// })();
