let allUser = JSON.parse(localStorage.getItem("allUserDetails"));

let userData = allUser.find((user) => user.username == loginedUser.username);

let productId = userData.addtocartproducts.map((id) => {
  return id;
});

let pro = productId.filter((product) => product === product);

let protoshow = products.map((product) => {
  for (let i = 0; i < products.length; i++) {
    if (product.id == pro[i]) {
      i++;
      return product;
    }
  }
  return;
});

function removeDuplicates(arr) {
  return arr.filter((obj, index, self) => {
    return index === self.findIndex((t) => t.id === obj.id);
  });
}

let productToShow = [];

protoshow.forEach((product) => {
  if (product) {
    productToShow.push(product);
  }
});
productToShow.forEach((element) => {
  let imgUrl = element.image || "";

  let productName = element.name;

  let productprice = element.price;

  let quntityNumber = 1;
  let totalPrice = productprice * quntityNumber;
  cartProduct(imgUrl, productName, productprice, totalPrice, quntityNumber);
});

function getUniqueElements(arr) {
  let uniqueSet = new Set(arr);
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

//adding functility for cancling produuts.firstElementChild.firstElementChild.firstElementChild.alt
let cancleBtns = document.querySelectorAll(".cancle");

for (cancleBtn of cancleBtns) {
  cancleBtn.addEventListener("click", (e) => {
    let contentDiv = document.querySelector(".content");
    let productItem =
      e.target.parentElement.parentElement.parentElement.parentElement;
    contentDiv.removeChild(productItem);
    console.log(productItem);
    let productName =
      e.target.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.firstElementChild.firstElementChild.alt;
    let product = products.find((product) => product.name == productName);
    let productId = product.id;
    console.log(productId);
    let updatedProducts = removeSpecificElement(
      userData.addtocartproducts,
      productId
    );
    console.log(updatedProducts);
    userData.addtocartproducts = updatedProducts;
    console.log(allUser);
    localStorage.setItem("allUserDetails", JSON.stringify(allUser));
    localStorage.setItem(
      "cartIndexValues",
      JSON.stringify(userData.addtocartproducts.length)
    );
    console.log(userData.addtocartproducts.length);
    cartIndex.innerHTML = userData.addtocartproducts.length;
    cartTotalling();
  });
}
cartIndex.innerHTML = userData.addtocartproducts.length;

function removeSpecificElement(arr, elementToRemove) {
  let uniqueSet = new Set(arr);

  uniqueSet.delete(elementToRemove);

  let uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

// functionlity for increasing and decreasing product Number
let incrementBtns = document.querySelectorAll(".incQun");
let decrementBtns = document.querySelectorAll(".decQun");

for (incrementBtn of incrementBtns) {
  incrementBtn.addEventListener("click", (e) => {
    let quntityNumber = e.target.parentElement.previousSibling;
    let quntityNumberValue = e.target.parentElement.previousSibling.innerText;
    quntityNumber.innerText = ++quntityNumberValue;
    let totalPrice =
      e.target.parentElement.parentElement.nextSibling.firstElementChild;

    let totalPriceValue = totalPrice.innerText.slice(4) * quntityNumberValue;
    totalPrice.innerText = "Rs: " + totalPriceValue / (quntityNumberValue - 1);
    cartTotalling();
  });
}

for (decrementBtn of decrementBtns) {
  decrementBtn.addEventListener("click", (e) => {
    let quntityNumber = e.target.parentElement.nextSibling;
    let quntityNumberValue = e.target.parentElement.nextSibling.innerText;
    let productName =
      e.target.parentElement.parentElement.parentElement.previousSibling
        .firstElementChild.firstElementChild.alt;
    let product = products.find((product) => product.name == productName);

    if (quntityNumberValue <= 1) {
      // alert("not allowed");
      return;
    } else {
      quntityNumber.innerText = --quntityNumberValue;

      let totalPrice =
        e.target.parentElement.parentElement.nextSibling.firstElementChild;

      let totalPriceValue = product.price * quntityNumberValue;
      totalPrice.innerText = "Rs: " + totalPriceValue;
    }
    cartTotalling();
  });
}

//Cart totallin functionality code
function cartTotalling() {
  let totalPrices = document.querySelectorAll(".total");
  let subTotalPrice = document.querySelector(".subTotalPrice");
  let cartTotalPrice = document.querySelector(".totalPrice");

  let totalPriceArray = [];

  for (totalPrice of totalPrices) {
    let totalPrices = totalPrice.innerText.slice(4);
    totalPriceArray.push(totalPrices);
  }

  // add all the element of totalPriceArray
  if (totalPriceArray.length > 0) {
    let subTotal = totalPriceArray.reduce(function (total, currentValue) {
      return Number(total) + Number(currentValue);
    });
    subTotalPrice.innerText = "Rs: " + subTotal;

    cartTotalPrice.innerText = "Rs: " + subTotal;
    cuponCodeFun(subTotal,cartTotalPrice);
  }
}
cartTotalling();

function cuponCodeFun(subTotal,cartTotalPrice) {
  let couponCode = document.querySelector(".couponCode");
  let applyCouponBtn = document.querySelector(".applyCouponBtn");
  let cuponCode = "dis";
  applyCouponBtn.addEventListener("click", () => {
    if (couponCode.value == cuponCode) {
      let totalWithDis = subTotal - (subTotal / 100) * 15;
      cartTotalPrice.innerText = "Rs: " + totalWithDis;
      console.log("itemTotal");
    }else{
      alert("Invalid Coupon Code");
      couponCode.value = "";
    }
  });
}
