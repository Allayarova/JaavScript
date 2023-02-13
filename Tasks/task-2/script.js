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

// masala - 4;

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// let c = Number(prompt("Uchinchi butun sonni kiriting"));

// let positivSum;

// if (a > 0 && b > 0 && c > 0) {
//   positivSum = 3;
// } else if (a < 0 && b > 0 && c > 0) {
//   positivSum = 2;
// } else if (a > 0 && b < 0 && c > 0) {
//   positivSum = 2;
// } else if (a > 0 && b > 0 && c < 0) {
//   positivSum = 2;
// } else if (a < 0 && b < 0 && c > 0) {
//   positivSum = 1;
// } else if (a < 0 && b > 0 && c < 0) {
//   positivSum = 1;
// } else if (a > 0 && b < 0 && c < 0) {
//   positivSum = 1;
// }

// console.log(`Positive numbers ${positivSum}`);

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

//masala -9

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// let minNumber;
// let maxNumber;

// if (a > b) {
//   maxNumber = a;
//   minNumber = b;
// } else if (a < b) {
//   maxNumber = b;
//   minNumber = a;
// }

// console.log(
//   `Max number b ${(b = maxNumber)} , Min number a ${(a = minNumber)}`
// );
// console.log(a, b);

//masala -10

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// let sum = a + b;

// if (a != b) {
//   a = sum;
//   b = sum;
//   console.log(a, b);
// } else if ((a = b)) {
//   a = 0;
//   b = 0;
//   console.log(a, b);
// }

//masala -11

// let a = Number(prompt("Birinchi butun sonni kiriting"));

// let b = Number(prompt("Ikkinchi butun sonni kiriting"));

// let sum = a + b;

// c = a > b;
// d = b > a;

// if (a != b) {
//   a = c;
//   b = d;
//   console.log(a, b);
// } else if ((a = b)) {
//   a = 0;
//   b = 0;
//   console.log(a, b);
// }

//masala -13

// let a = Number(prompt("a sonni kiriting"));

// let b = Number(prompt("b sonni kiriting"));

// let c = Number(prompt("c sonni kiriting"));

// let maxNumber;

// if (a < b && a > c) {
//   maxNumber = a;
// } else if (b > a && b < c) {
//   maxNumber = b;
// } else if (c > a && c < b) {
//   maxNumber = c;
// }

// console.log(maxNumber);

//masala -14

let a = Number(prompt("a sonni kiriting"));

let b = Number(prompt("b sonni kiriting"));

let c = Number(prompt("c sonni kiriting"));

let maxNumber;

let minNumber;

if (a > b && b > c) {
  maxNumber = a;
  minNumber = c;

  console.log(a, c);
} else if (a > c && c > b) {
  maxNumber = a;
  minNumber = b;

  console.log(a, b);
} else if (a < b && a > c) {
  maxNumber = b;
  minNumber = c;
  console.log(b, c);
} else if (b > c && c > a) {
  maxNumber = b;
  minNumber = a;

  console.log(a, b);
} else if (c > a && a > b) {
  maxNumber = c;
  minNumber = b;

  console.log(c, b);
} else if (c > b && b > a) {
  maxNumber = c;
  minNumber = a;

  console.log(c, a);
} else if (a > b && b === c) {
  maxNumber = a;
  minNumber = c;

  console.log(a, c);
} else if (b > a && a === c) {
  maxNumber = b;
  minNumber = a;

  console.log(b, a);
} else if (c > b && b === a) {
  maxNumber = c;
  minNumber = b;

  console.log(c, b);
} else if (a == b && b == c) {
  console.log(a, b, c);
}
