//masala -1

// let son = Number(prompt("Butun son kiriting"));

// if (son > 0) {
//   alert(++son);
// } else{
//     alert(son);
// }

//masala -2

// let son = Number(prompt("Butun son kiriting"));

// if (son > 0) {
//   alert(++son);
// } else {
//   alert(son-2);
// }

//masala -3

// let son = Number(prompt("Butun son kiriting"));

// if (son > 0) {
//   alert(++son);
// } else if (son < 0) {
//   alert(son - 2);
// } else if (son == 0) {
//   alert(son = 10);
// }

masala - 4;

let a = Number(prompt("Birinchi butun sonni kiriting"));

let b = Number(prompt("Ikkinchi butun sonni kiriting"));

let c = Number(prompt("Uchinchi butun sonni kiriting"));

let positivSum;

if (a > 0 && b > 0 && c > 0) {
  positivSum = 3;
} else if (a < 0 && b > 0 && c > 0) {
  positivSum = 2;
} else if (a > 0 && b < 0 && c > 0) {
  positivSum = 2;
} else if (a > 0 && b > 0 && c < 0) {
  positivSum = 2;
} else if (a < 0 && b < 0 && c > 0) {
  positivSum = 1;
} else if (a < 0 && b > 0 && c < 0) {
  positivSum = 1;
} else if (a > 0 && b < 0 && c < 0) {
  positivSum = 1;
}

console.log(`Positive numbers ${positivSum}`);

//masala -6

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// if (a > b) {
//   alert(a);
// } else if (b > a) {
//   alert(b);
// }

//masala -8

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// if (a > b) {
//   alert(a);
//   alert(b);
// } else if (b > a) {
//   alert(b);
//   alert("a");
// } else if (a < b) {
//   alert(a);
// } else if (b < a) {
//   alert(b);
// }