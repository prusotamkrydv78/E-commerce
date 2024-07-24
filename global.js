//search tab functiona adding

// addingToastCreating('<i class="ri-check-double-line"></i>', "added");
let loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || {};
let searchBtn = document.querySelector(".search");
let searchBar = document.querySelector(".searchBar");
let closeSearchBar = document.querySelector(".closeSearchBar");

searchBtn.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";

  searchBar.classList.toggle("showSearchBar");
});

closeSearchBar.addEventListener("click", () => {
  searchBar.classList.toggle("showSearchBar");

  document.body.style.overflowY = "unset";
});

// go back funcion

let goBack = document.querySelector(".goBack");
if (goBack !== null) {
  window.onload = function () {
    let url = window.navigation.currentEntry.url;
    let previousUrl = document.referrer;

    goBack.addEventListener("click", function () {
      window.location.href = previousUrl;
    });
  };
}

///shoppingDetails code
let seeMoreProducts = document.querySelectorAll(".seeMore");

for (seeMoreProduct of seeMoreProducts) {
  seeMoreProduct.addEventListener("click", (e) => {
    productIdentifier =
      e.target.parentElement.parentElement.parentElement.firstElementChild.alt;

    let productToShow = products.filter(
      (product) => product.name === productIdentifier
    );
    localStorage.setItem("productIdentifier", JSON.stringify(productToShow));
  });
}

let addToCart = document.querySelectorAll(".addToCart");
let addToCartProducts = [];
let allAddToCartProducts = [];
let allExistingAddToCartProducts = [];
let cartIndexValue = 0;
let cartIndex = document.querySelector(".cartIndex");
cartIndex.innerHTML = cartIndexValue;
cartIndexValue = localStorage.getItem("cartIndexValues");
cartIndex.innerHTML = cartIndexValue;

for (addToCart of addToCart) {
  addToCart.addEventListener("click", (e) => {
    if(loginedUser.username != undefined)
    {
      
    allExistingAddToCartProducts =
      JSON.parse(localStorage.getItem("addToCartProducts")) || [];

    let addToCartProduct =
      e.target.parentElement.previousElementSibling.getAttribute("alt") ||
      e.target.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.firstElementChild.innerText;

    let matchedProduct = products.find((product) => {
      if (product.name == addToCartProduct) {
        return product;
      }
    });

    addCartProductToUserData(matchedProduct);

    allExistingAddToCartProducts.push(matchedProduct);

    allAddToCartProducts = removeDuplicates(allExistingAddToCartProducts);
    console.log(allAddToCartProducts);
    localStorage.setItem(
      "addToCartProducts",
      JSON.stringify(allAddToCartProducts)
    );
    let addedToCartProducts = JSON.parse(
      localStorage.getItem("addToCartProducts")
    );

    function removeDuplicates(arr) {
      return arr.filter((obj, index, self) => {
        return index === self.findIndex((t) => t.id === obj.id);
      });
    }

    cartIndexValue = localStorage.getItem("cartIndexValues");
    cartIndex.innerHTML = cartIndexValue;

    addingToastCreating('<i class="ri-check-double-line"></i>', "added");
    let addedToast = document.querySelector(".addedToast");

    addedToast.classList.add("showAddedToast");
    setTimeout(() => {
      addedToast.classList.remove("showAddedToast");
      setTimeout(() => {
        document.body.removeChild(addedToast);
      }, 100);
    }, 500);

  }
  else{
    console.log('plz login')
  }
  });
}
function getUniqueElements(arr) {
  let uniqueSet = new Set(arr);
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
function addCartProductToUserData(matchedProduct) {
 
  if (loginedUser.username == undefined) {
    console.log("plz login");
    return;
  } else {
    console.log("first");
    let allUser = JSON.parse(localStorage.getItem("allUserDetails")) || [];

    let username = loginedUser.username;
    let user = allUser.find((user) => user.username == username);
    user.addtocartproducts.push(matchedProduct.id);
    user.addtocartproducts = getUniqueElements(user.addtocartproducts);

    function getUniqueElements(arr) {
      let uniqueSet = new Set(arr);
      let uniqueArray = Array.from(uniqueSet);
      return uniqueArray;
    }
    let uniqueUser = getUniqueElements(allUser);
    localStorage.setItem("allUserDetails", JSON.stringify(uniqueUser));
    localStorage.setItem(
      "cartIndexValues",
      JSON.stringify(user.addtocartproducts.length)
    );
    console.log(user.addtocartproducts.length);
  }
}
// else{
//   alert('you are not logged in');
// }

// }

//

/// HERE CREATING OBJECT FOR FAVORITE PRODUCTS AND ADDING THEM INTO LOCALSTORAGE
let addToFavs = document.querySelectorAll(".addToFav");
let favoriteProducts = [];
let allFavoriteProducts = [];

for (addToFav of addToFavs) {
  addToFav.addEventListener("click", (e) => {
    if(loginedUser.username !=undefined){
   
    let favoriteProduct =
      e.target.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.firstElementChild.innerText ||
      e.target.parentElement.parentElement.previousElementSibling.getAttribute(
        "alt"
      );

    let matchedProduct = products.find((product) => {
      if (product.name == favoriteProduct) {
        return product;
      }
    });

    if (favoriteProducts.includes(matchedProduct)) {
      addingToastCreating(
        '<i class="ri-check-double-line"></i>',
        "already added"
      );
      let addedToast = document.querySelector(".addedToast");
      addedToast.classList.add("showAddedToast");
      setTimeout(() => {
        addedToast.classList.remove("showAddedToast");

        document.body.removeChild(addedToast);
      }, 1500);
      return;
    } else if (allFavoriteProducts.includes(matchedProduct)) {
      return;
    } else {
      if (loginedUser) {
        favoriteProducts.push({
          ...matchedProduct,
          username: loginedUser.username,
        });
      }
    }
    function removeDuplicates(arr) {
      return arr.filter((obj, index, self) => {
        return index === self.findIndex((t) => t.id === obj.id);
      });
    }

    allFavoriteProducts = removeDuplicates(favoriteProducts);
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify(allFavoriteProducts)
    );

    addingToastCreating('<i class="ri-check-double-line"></i>', "  added");
    let addedToast = document.querySelector(".addedToast");
    addedToast.classList.add("showAddedToast");
    setTimeout(() => {
      addedToast.classList.remove("showAddedToast");
      document.body.removeChild(addedToast);
    }, 1500);
       
  }
  });
}

// ***************************profile meanu funtionality is here ***************************
let profileBtn = document.querySelector(".profile");
let profileMenu = document.querySelector(".profileMenu");
let userName = document.querySelector(".userName");
let fullName = document.querySelector(".fullName");
let email = document.querySelector('.email')
let logOutBtn = document.querySelector('.logOut');
profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("profileMenuShow");
});

console.log(loginedUser.username);
if(loginedUser.username == undefined){
  profileMenu.classList.add('login')
  profileMenu.innerHTML = ` <div class="close"><i class="ri-close-line"></i></div><div> <a href="/user/register/register.html"
                  ><span>Login</span></a></div>`
  console.log("plz login")
}else{

  userName.innerText=loginedUser.username
  fullName.innerText = loginedUser.fullName
  email.innerText = loginedUser.email
  
  logOutBtn.addEventListener("click",()=>{
    localStorage.setItem('loginedUser',JSON.stringify({}));
    localStorage.setItem('cartIndexValues',0)
    window.location.href = 'index.html';
  })
} 

let close = document.querySelector(".close");
close.addEventListener("click", () => {
  profileMenu.classList.remove("profileMenuShow");
  console.log("close")
});