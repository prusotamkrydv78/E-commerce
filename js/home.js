const categorys = document.querySelectorAll("h2");

function classChanger(a, b) {
  categorys[a].classList.remove("categoryActive");
  categorys[b].classList.remove("categoryActive");
}

categorys[0].addEventListener("click", function () {
  this.classList.add("categoryActive");
  this.style.transition = ".2s linear";
  classChanger(1, 2);
});

categorys[1].addEventListener("click", function () {
  this.style.transition = ".2s linear";
  this.classList.add("categoryActive");
  classChanger(0, 2);
});
categorys[2].addEventListener("click", function () {
  this.style.transition = ".2s linear";
  this.classList.add("categoryActive");
  classChanger(1, 0);
});
