let products = JSON.parse(localStorage.getItem("products"));

//Card Creating
{
  /* <div class="img">
<img src="../images/home/shoe2.png" alt="" />
<div class="layer">
  <span><i class="ri-heart-line"></i></span>
  <span>get more</span>
  <span><i class="ri-add-circle-line"></i>add to cart</span>
</div>
</div> */
}

function cardCreating(imgUrl, productName, ProductRating, ProductPrice) {
  const cards = document.querySelector(".cards");

  let card = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img = document.createElement("img");
  let nameDiv = document.createElement("div");
  let name = document.createElement("span");
  let rating = document.createElement("div");
  let price = document.createElement("div");
  let layer = document.createElement("div");
  let heart = document.createElement("span");
  let seeMore = document.createElement("span");
  let seeMoreLink = document.createElement("a");
  let addToCart = document.createElement("span");
  // adding attributes
  card.classList.add("card");
  imgDiv.classList.add("img");
  img.src = imgUrl;
  img.alt = productName;
  heart.classList.add("addToFav");
  addToCart.classList.add("addToCart");
  nameDiv.classList.add("name");
  rating.classList.add("rating");
  price.classList.add("price");
  layer.classList.add("layer");
  seeMoreLink.href = `/pages/subPages/shopDetails.html`;
  seeMoreLink.classList.add("seeMore");

  // add text value
  name.innerText = productName;
  price.innerText = "Rs " + ProductPrice;
  rating.innerText = ProductRating;

  // append child
  imgDiv.appendChild(img);
  imgDiv.appendChild(layer);
  layer.appendChild(heart);
  layer.appendChild(seeMoreLink);
  seeMoreLink.appendChild(seeMore);
  layer.appendChild(addToCart);
  nameDiv.appendChild(name);
  card.appendChild(imgDiv);
  card.appendChild(nameDiv);
  card.appendChild(rating);
  card.appendChild(price);

  // append card to cards
  cards.appendChild(card);
  

  // addd inner html code
  heart.innerHTML = '<i class="ri-heart-line"></i>';
  seeMore.innerHTML = "see more";
  addToCart.innerHTML = '<i class="ri-add-circle-line"></i> add to cart';
}

// products.map((product) => {
//   console.log(product); // do something with each product here
// });

//CREATING FUNCTIONS FOR ADD TO CART PRODUCTS
{
  /* <div>
<div class="img">
  <img src="../../images/shoppingCart/tshirt.png" alt="" />
</div>
<div class="details">
  <div class="name">T-shirt Contrast Pocket</div>
  <div class="price">RS: 999</div>
</div>
</div> */
}
let content = document.querySelector(".orders .content");

function cartProduct(
  imgUrl,
  productName,
  productPrice,
  totalPrice,
  productQuantity
) {
  // creating elements

  let order = document.createElement("div");
  let leftDiv = document.createElement("div");
  let rightDiv = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img = document.createElement("img");
  let detailsDiv = document.createElement("div");
  let name = document.createElement("div");
  let price = document.createElement("div");
  let quantitydiv = document.createElement("div");
  let quantitydiv1 = document.createElement("div");
  let quantitydiv2 = document.createElement("div");
  let quantitydiv3 = document.createElement("div");
  let totalDiv = document.createElement("div");
  let total = document.createElement("div");
  let cancle = document.createElement("div");

  //add class name
  order.classList.add("order");
  imgDiv.classList.add("img");
  detailsDiv.classList.add("details");
  name.classList.add("name");
  price.classList.add("price");

  quantitydiv.classList.add("quantity");
  total.classList.add("total");
  cancle.classList.add("cancle");

  // appending child elements
  order.appendChild(leftDiv);
  order.appendChild(rightDiv);
  leftDiv.appendChild(imgDiv);
  imgDiv.appendChild(img);
  leftDiv.appendChild(detailsDiv);
  detailsDiv.appendChild(name);
  detailsDiv.appendChild(price);

  rightDiv.appendChild(quantitydiv);
  rightDiv.appendChild(totalDiv);
  quantitydiv.appendChild(quantitydiv1);
  quantitydiv.appendChild(quantitydiv2);
  quantitydiv.appendChild(quantitydiv3);
  totalDiv.appendChild(total);
  totalDiv.appendChild(cancle);

  // adding inner html

  img.src = imgUrl;
  img.alt = productName;
  name.innerText = productName;
  price.innerText = "Rs: " + productPrice;
  quantitydiv1.innerHTML = `<i class="ri-subtract-line"  ></i>`;
  quantitydiv2.innerText = productQuantity;
  quantitydiv3.innerHTML = `<i class="ri-add-fill"></i>`;

  total.innerHTML = "Rs: " + productPrice * productQuantity;
  cancle.innerHTML = `<i class="ri-close-line"  ></i>`;

  // add attibute
  quantitydiv1.setAttribute("class", "decQun");
  quantitydiv2.setAttribute("class", "qunNumber");

  quantitydiv3.setAttribute("class", "incQun");

  // adding order to content
  content.appendChild(order);
}

/////// FUNCITON FOR PRODUCT DETAILS INTEFOR
let product = document.querySelector("#product");
let productOption = document.querySelector(".productOption");
function productDetails(imgUrl,productName, productRating, productPrice, productDesc,view1ImgLink,view2ImgLink,view3ImgLink,view4ImgLink) {
  //element creating
  let leftDiv = document.createElement("div");
  let view1div = document.createElement("div");
  let view1Img = document.createElement("img");
  let view2div = document.createElement("div");
  let view2Img = document.createElement("img");
  let mainImgDiv = document.createElement("div");
  let mainImg = document.createElement("img");
  let rightDiv = document.createElement("div");
  let view3Div = document.createElement("div");
  let view3Img = document.createElement("img");
  let view4Div = document.createElement("div");
  let view4Img = document.createElement("img");
//////////////////////////////////////////////////
let detailsDiv = document.createElement("div");
let titleDiv = document.createElement("div");
let ratingDiv = document.createElement("div");
let priceDiv = document.createElement("div");
let descDiv = document.createElement('div')
//////////////////////
 
let options = document.createElement('div')
let cart = document.createElement('div')
let buttonDiv = document.createElement('div')
let button = document.createElement('button')
let addToFavDiv = document.createElement('div')
let addToFav = document.createElement('span')




  /// ADD CLASS TO THE ELEMENT

  leftDiv.classList.add("left");
  view1div.classList.add("view1");
  view2div.classList.add("view2");
  mainImgDiv.classList.add("mainImg");
  rightDiv.classList.add("right");
  view3Div.classList.add("view3");
  view4Div.classList.add("view4");
  /////////
  detailsDiv.classList.add('details')
  titleDiv.classList.add('title')
  ratingDiv.classList.add('rating')
  priceDiv.classList.add('price')
  descDiv.classList.add('desc')
/////////////// 
  options.classList.add('options')
  cart.classList.add('cart')
  buttonDiv.classList.add('button') 
  buttonDiv.classList.add('addToCart')
  addToFavDiv.classList.add('addtofv')
  addToFav.classList.add('addToFav')
  view1Img.classList.add('leftImages')
  view2Img.classList.add('leftImages')
  view3Img.classList.add('rightImages')
  view4Img.classList.add('rightImages')
  // append child

  /////////// 

  //ADD ATTRIBUTE

  view1Img.setAttribute("src", view1ImgLink || imgUrl);
  view2Img.setAttribute("src", view2ImgLink||imgUrl);
  mainImg.setAttribute("src", imgUrl);
  view3Img.setAttribute("src",view3ImgLink|| imgUrl);
  view4Img.setAttribute("src",view4ImgLink|| imgUrl);



//appending the tags
leftDiv.appendChild(view1div);
view1div.appendChild(view1Img)

leftDiv.appendChild(view2div);
view2div.appendChild(view2Img)

mainImgDiv.appendChild(mainImg)
rightDiv.appendChild(view3Div);
view3Div.appendChild(view3Img)

rightDiv.appendChild(view4Div);
view4Div.appendChild(view4Img)

product.appendChild(leftDiv);
product.appendChild(mainImgDiv);
product.appendChild(rightDiv);

///////////

productOption.appendChild(detailsDiv);
detailsDiv.appendChild(titleDiv);
detailsDiv.appendChild(ratingDiv);
detailsDiv.appendChild(priceDiv);
detailsDiv.appendChild(descDiv);

//////////////
productOption.appendChild(options)
options.appendChild(cart)
cart.appendChild(addToFavDiv)
cart.appendChild(buttonDiv)
buttonDiv.appendChild(button)
addToFavDiv.appendChild(addToFav)


////////ADD INNER TEXT

titleDiv.innerText = productName;
ratingDiv.innerText = "Rating: " + productRating;
priceDiv.innerText = "Price: Rs " + productPrice;
descDiv.innerText = productDesc;
button.innerText = "Add to Cart";
addToFav.innerText= 'Add To Fav'
}





//////////////careting added toast box////////////////
{/* <div class="addedToast">
<div>
  <span></span>
</div>
<div><span>removed</span></div>
</div> */}

function addingToastCreating (icon,msg){
let addedToastDiv = document.createElement("div");
let messageDiv = document.createElement("div");
let iconDiv = document.createElement("div");
let spanIcon = document.createElement("span");
let spanMessage = document.createElement("span");

//add class name
addedToastDiv.classList.add("addedToast"); 


// append child
addedToastDiv.appendChild(iconDiv);
addedToastDiv.appendChild(messageDiv)
iconDiv.appendChild(spanIcon);
messageDiv.appendChild(spanMessage)


// adding inner html
spanIcon.innerHTML = icon;
spanMessage.innerText = msg;

document.body.appendChild(addedToastDiv)
console.log('toast added')
}
 