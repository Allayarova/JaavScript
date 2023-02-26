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

//size

console.log(saveSet.size);

//has

console.log(saveSet.has(14));

//add

saveSet.add(45);
console.log(saveSet);

//dealte

saveSet.delete(14);
console.log(saveSet);

//clear

// saveSet.clear();
// console.log(saveSet);

for (let el2 of saveSet) {
  console.log(el2);
}

const newArr = [...saveSet];

console.log(saveSet);

//map

const map = new Map();

//set

map.set("fName", "Umar");
console.log(map);

//get

console.log(map.get("fName"));

//has

console.log(map.has("fName"));

//delete

// console.log(map);
// map.delete("fName");
// console.log(map);

//clear

// map.clear();
// console.log(map);

//size

console.log(map.size);

const arr2 = [
  ["fName", "Umar"],
  ["lName", "Hamidov"],
  ["age", 25],
  ["login", "umar"],
  ["pass", "password"],
];

console.log(arr2);

// map.set(arr2)
// console.log(map);

const map2 = new Map(arr2);
console.log(map2);

for (const el of map2) {
    console.log(el);
    
}
