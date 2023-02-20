let openBtn = document.getElementById("main__btn");

let closeBtn = document.getElementById("close__btn");

let mainMore = document.querySelector(".main__more");

let openMunuBtn = function () {
  mainMore.style.display = "block";
};

let closeMunuBtn = function () {
  mainMore.style.display = "none";
};

openBtn.addEventListener("click", openMunuBtn);

closeBtn.addEventListener("click", closeMunuBtn);
