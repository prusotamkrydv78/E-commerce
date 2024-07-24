const categorys = document.querySelectorAll("h2");
const cards = document.querySelector(".cards");

let newProduct = products.filter((newProduct) => {
  return newProduct.isNew;
});

let bestSellerProduct = products.filter((newProduct) => {
  return newProduct.isBestseller;
});
function classChanger(a, b) {
  categorys[a].classList.remove("categoryActive");
  categorys[b].classList.remove("categoryActive");
}
 
categorys[0].addEventListener("click", function () {
  this.classList.add("categoryActive");
  this.style.transition = ".2s linear";
  classChanger(1, 2);

  cards.innerHTML = "";
  productShowing(products);
});

categorys[1].addEventListener("click", function () {
  this.style.transition = ".2s linear";
  this.classList.add("categoryActive");
  classChanger(0, 2);
  cards.innerHTML = "";
  productShowing(newProduct);
});
categorys[2].addEventListener("click", function () {
  this.style.transition = ".2s linear";
  this.classList.add("categoryActive");
  classChanger(1, 0);
  cards.innerHTML = "";
  productShowing(bestSellerProduct);
});
///////////CARd LOOPING /////////

// creating card
// all elements
function productShowing(arr) {
  arr.forEach((product) => {
    cardCreating(product.image, product.name, "4.5", product.price);
  });
}
productShowing(products);
// console.log(products);
