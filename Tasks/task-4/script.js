// let a = Number(prompt(" a sonini kiriting "));

// let b = Number(prompt(" b sonini kiriting "));

// let c = Number(prompt(" c sonini kiriting "));

// let d = Number(prompt(" d sonini kiriting "));

// let e = Number(prompt(" e sonini kiriting "));

// function Power(a, b, c, d, e) {
//   a3 = a ** 3;
//   b3 = b ** 3;
//   c3 = c ** 3;
//   d3 = d ** 3;
//   e3 = e ** 3;
//   console.log(a3, b3, c3, d3, e3);
//   return a3, b3, c3, d3, e3;
// }
// Power(a, b, c, d, e);

//masala 2

// let a = Number(prompt(" a sonini kiriting "));

// let b = Number(prompt(" b sonini kiriting "));

// let c = Number(prompt(" c sonini kiriting "));

// function Power234(a, b, c) {
//   a2 = a ** 2;
//   b3 = b ** 3;
//   c4 = c ** 4;

//   console.log(a2, b3, c4);
//   return a2, b3, c4;
// }
// Power234(a, b, c);

//masala 3

let a = Number(prompt(" a sonini kiriting "));

let b = Number(prompt(" b sonini kiriting "));

let c = Number(prompt(" c sonini kiriting "));

let d = Number(prompt(" d sonini kiriting "));

function MEAN(a, b, c, d) {
  ortaarif1 = (a + b) / 2;
  ortaarif2 = (a + c) / 2;
  ortaarif3 = (a + d) / 2;

  ortageom1 = (a * b) ** 0.5;
  ortageom2 = (a * c) ** 0.5;
  ortageom3 = (a * d) ** 0.5;

  console.log(ortaarif1, ortaarif2, ortaarif3);
  console.log(ortageom1, ortageom2, ortageom3);
  return ortaarif1, ortaarif2, ortaarif3, ortageom1, ortageom2, ortageom3;
}
MEAN(a, b, c, d);