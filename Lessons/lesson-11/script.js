"use script";

const user = {
  fName: "Mahliyo",
  lName: "Allayarova",
  age: 22,
  auth: {
    login: "Mahliyo",
    pass: " password",
    email: "name@gmail.com",
  },
};

// console.log(user.auth?.pass);
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// for (let el of Object.keys(user)) {
//   console.log(el);
// }

// for (let el of Object.values(user)) {
//   console.log(el);
// }

// for (let el of Object.entries(user)) {
//   console.log(`${el[0]}:${el[1]}`);
// }

//sets

// const arr = [12, 13, 14, 15, 16, 17, 18];
// const saveSet = new Set(arr);
// console.log(saveSet);

const saveSet = new Set([12, 13, 14, 15, 16, 17, 18]);
const save2 = new Set();
console.log(saveSet);
