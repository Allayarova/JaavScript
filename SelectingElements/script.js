"use script";

const parentBox = document.getElementById("parentBox");

const parentBoxFirstChild = document.getElementsByClassName(
  "parentBox__firstChild"
);

const changeBtn = document.getElementById("changeBtn");

// const createChild = document.createElement("div");

const changeBtnClicked = () => {
  const createChild = document.createElement("div");
  createChild.innerHTML = "<p>Hello world</p>";
//   parentBox.prepend(createChild);    

//   parentBox.append(createChild);  

//   parentBox.before(createChild);  
//   parentBox.after(createChild);  

document.querySelector(".parentBox__firstChild").remove();
};

changeBtn.addEventListener("click", changeBtnClicked);


