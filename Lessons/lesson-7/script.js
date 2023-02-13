"use strict";

let arr = [
  [12, 20, ["git", "github", "gitlab"], 30],
  ["js", "go", "java", "c#"],
  ["html", "css", "sass"],
];

console.log(arr[0][2][1]);

const user1 = {
  fName: "Mahliyo",
  login: "Mahliyo",
  parol: "120212",
  email: "email@gmail.com",
  phoneNumber: "97 867 00 07",
  year: "2001",
  now: "2023",

  location: {
    davlat: "UZB",
    tuman: "Toshkent",
  },

  age:function () {
    let a = this.now - this.year;
    return a;

  
    

    
  }


  
};

  console.log(user1.age());
  


