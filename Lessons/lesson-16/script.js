"use script";

// let alrt = setTimeout(() => {
//   alert("salom");
// }, 2000);

// let alrt = setTimeout(
//   (a, b) => {
//     console.log(a + b);
//   },
//   2000,
//   21,
//   14
// );

let a = 0;
let setInt = setInterval(
  (m, n) => {
    console.log(m + n, a);
    a++;

    if (a == 10) {
      clearInterval(setInt);
    }
  },
  1000,
  4,
  5
);
