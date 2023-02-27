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

console.log(user.countBirth(21));

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

console.log(user.countBirth.call(admin, b));

console.log(user.countBirth.call(admin, ...a));

//apply

console.log(user.countBirth.apply(admin, [b]));
