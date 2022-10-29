const burger = document.querySelector(".burgImg");
const burgerOp = document.querySelector(".burgerOp");
const burgerList = document.querySelector(".burgerList");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const crest = document.querySelector(".close");

burger.addEventListener("click", function () {
  burgerOp.classList.add("_active");
  body.classList.add("_active");
});
crest.addEventListener("click", function () {
  burgerOp.classList.remove("_active");
  body.classList.remove("_active");
});
burgerOp.addEventListener("click", function () {
  burgerOp.classList.remove("_active");
  body.classList.remove("_active");
});

burgerList.addEventListener("click", function () {
  burgerOp.classList.add("_active");
  body.classList.add("_active");
});
