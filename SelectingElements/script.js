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

  // document.querySelector(".parentBox__firstChild").remove();

  // parentBox.classList.add("addClass")

  //   parentBox.classList.remove("parentBox");

  //   parentBox.classList.toggle("parentBox");

  //   const containsClass = parentBox.classList.contains("parentBox");
  //   alert(containsClass);

  window.scrollTo({ top: "0px", behavior: "smooth" });
};

changeBtn.addEventListener("click", changeBtnClicked);
