const user = {
  fName: "User",
  login: "user",
  pass: "passUser",
};

const admin = {
  fName: "Admin",
  login: "admin",
  pass: "passAdmin",
};

const customer = {
  fName: "Customer",
  login: "customer",
  pass: "passCustomer",
};

const arr = [admin, user, customer];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].fName == "User") {
    console.log(arr[i]);
  }
}

let mainBtn = document.getElementById("main__btn");
let title = document.querySelector(".main__left--title");
let mainLeft = document.getElementById("main__left");
let btnSbmt = document.getElementById("btn__sbmt");

let addText = `it. Consequuntur veritatis fugiat dolores ullam, deleniti porro
          nobis, minus animi modi sequi ratione a! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consequuntur veritatis fugiat dolores
          ullam, deleniti porro nobis, minus animi modi sequi ratione a!`;

          mainBtn.addEventListener("click", function () {
            console.log("click");

            
            
          })
