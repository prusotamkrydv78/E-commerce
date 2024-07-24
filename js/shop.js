let cards = document.querySelector(".cards");
let filter = document.querySelectorAll(".filter");

console.log(products);
let tags = document.querySelector(".tags");
let prices = document.querySelector(".price");

let sizes = document.querySelector(".size");
let colors = document.querySelector(".colors");
let sortBy = document.querySelector(".sortby");
function productShowing(arr) {
  arr.forEach((product) => {
    cardCreating(product.image, product.name, "4.5", product.price);
  });
}
productShowing(products);

//Filtering according to the category of product
filter[0].addEventListener("click", (e) => {
  tags.classList.toggle("expand");

  prices.classList.remove("expand");
  sizes.classList.remove("expand");

  colors.classList.remove("expand");
});

for (span of tags.children) {
  span.addEventListener("click", (e) => {
    let tag = e.target.innerText.toLowerCase();
    if (tag == "others") {
      cards.innerHTML = "";

      productShowing(products);
      return;
    }
    if (tag == "clothing") {
      cards.innerHTML = "";
      let clothingProducts = products.filter((newProduct) => {
        let clothingProduct =
          (newProduct.category == "mens") +
          (newProduct.category == "womens") +
          (newProduct.category == "shoes");
        return clothingProduct;
      });
      productShowing(clothingProducts);
      return;
    }
    cards.innerHTML = "";
    let filteredProducts = products.filter((newProduct) => {
      return newProduct.category == tag;
    });
    filteredArray = filteredProducts;
    productShowing(filteredProducts);
  });
}

//Filtering according to the price of product
filter[1].addEventListener("click", (e) => {
  prices.classList.toggle("expand");

  tags.classList.remove("expand");
  sizes.classList.remove("expand");

  colors.classList.remove("expand");
});

for (price of prices.children) {
  console.log(price.id);
  price.addEventListener("click", (e) => {
    let price = e.target.id;
    cards.innerHTML = "";
    if (price == "2000+") {
      let products2000 = products.filter((newProduct) => {
        return newProduct.price > 2000;
      });
      productShowing(products2000);
      return;
    }
    let filteredProducts = products.filter((newProduct) => {
      return newProduct.price <= price;
    });
    productShowing(filteredProducts);
  });
}

//Filtering according to the sizes of product
filter[2].addEventListener("click", (e) => {
  sizes.classList.toggle("expand");

  colors.classList.remove("expand");
  prices.classList.remove("expand");
  tags.classList.remove("expand");
});

for (size of sizes.children) {
  size.addEventListener("click", (e) => {
    let size = e.target.innerText;
    cards.innerHTML = "";

    let filteredProducts = products.filter((newProduct) => {
      return newProduct.size == size.toLowerCase();
    });
    if (filteredProducts.length == 0) {
      console.log("out of stock");
    }
    productShowing(filteredProducts);
  });
}

//Filtering according to the sizes of product
filter[3].addEventListener("click", (e) => {
  colors.classList.toggle("expand");

  sizes.classList.remove("expand");
  prices.classList.remove("expand");
  tags.classList.remove("expand");
});

for (color of colors.children) {
  color.addEventListener("click", (e) => {
    let color = e.target.innerText;
    cards.innerHTML = "";

    let filteredProducts = products.filter((newProduct) => {
      return newProduct.color == color.toLowerCase();
    });
    if (filteredProducts.length == 0) {
      cards.innerHTML =
        '<h1 style="text-align:center;"> Out of Stock Search</h1>';
    }
    productShowing(filteredProducts);
  });
}

// filter by price function

for (sort of sortBy.children) {
  sort.addEventListener("click", (e) => {
    colors.classList.remove("expand");

    sizes.classList.remove("expand");
    prices.classList.remove("expand");
    tags.classList.remove("expand");
    if (e.target.id == "lowerToHigher") {
      console.log("lower to higher");
      cards.innerHTML = "";
      let filteredProducts = products.sort((a, b) => a.price - b.price);
      productShowing(filteredProducts);
      return;
    } else {
      console.log("higher to lower");
      cards.innerHTML = "";
      let filteredProducts = products.sort((a, b) => b.price - a.price);
      productShowing(filteredProducts);
      return;
    }
  }); 
}


/// HERE CREATING OBJECT FOR ADD TO CART PRODUCTS AND ADDING THEM INTO LOCALSTORAGE

//HERE GONG TO BUILD SERACH FUNCTIONS
let searchInput = document.querySelector(".searchInput");
// let searchButton = document.querySelector(".searchButton");
let searchText;
 searchInput.addEventListener('input', (e)=>{
 searchText= e.target.value;
 console.log(searchText)
 serarch()
 })
 function serarch(){
   let searchProducts = products.filter((product) => {
     return product.name.toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(' '+searchText.toLowerCase());
   }); 
   cards.innerHTML = "";
   if(searchProducts.length == 0){
     cards.innerHTML = '<h1 style="text-align:center;">No Products Found</h1>';
   }  else{
     productShowing(searchProducts);
   } 
 }