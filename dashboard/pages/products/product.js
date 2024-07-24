const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const productCategory = document.getElementById("productCategory");
const proudctQuantity = document.getElementById("productQuantity");
const productSize = document.getElementById("productSize");
const productColor = document.getElementById("productColor");
const productImage = document.getElementById("productImage");

const submit = document.getElementById("submit");
const products = [];

let addMoreImagesBtn = document.querySelector('.addMoreImagesBtn')
let fieldForMoreImages = document.querySelectorAll(".fieldForMoreImage")

let imagesLink = []
let fieldForMoreImage1 = document.querySelector('.fieldForMoreImage1')
let fieldForMoreImage2 = document.querySelector('.fieldForMoreImage2')
let fieldForMoreImage3 = document.querySelector('.fieldForMoreImage3')
let fieldForMoreImage4 = document.querySelector('.fieldForMoreImage4')
addMoreImagesBtn.addEventListener("click",()=>{
  
  for(fieldForMoreImage of fieldForMoreImages){
   
    if(fieldForMoreImage.value.length <=0){
      alert('please fill the field for more images')
      return
    }
    imagesLink.push(fieldForMoreImage.value)
  }
  console.log(imagesLink)
  imagesFiled.classList.toggle("imagesFieldShow")
  document.body.style.overflow="unset"
  

  })

function addProduct() {
  const productNameValue = productName.value;
  const productPriceValue = Number(productPrice.value);
  const productDescriptionValue = productDescription.value;
  const productCategoryValue = productCategory.value;
  const productQuantityValue = Number(proudctQuantity.value);
  const productSizeValue = productSize.value;
  const productColorValue = productColor.value;
  const productImageValue = productImage.value;
const moreProductImages = imagesLink ||[]
  // create a new product osbject
  const newProduct = {
    id: Date.now(),
    name: productNameValue,
    price: productPriceValue,
    description: productDescriptionValue,
    image: productImageValue,
    category: productCategoryValue,
    quantity: productQuantityValue,
    size: productSizeValue,
    color: productColorValue,
    isBestseller: true,
    isNew: false, 
    moreimages: moreProductImages
  };

  // add the new product to the products array
  products.push(newProduct);

  // clear the input fields
}
function clearInput() {
  productName.value = "";
  productPrice.value = "";
  productDescription.value = "";
  productImage.value = "";
}
// ADDing validation
let fileds = document.querySelectorAll(".input");

let exstingData = JSON.parse(localStorage.getItem("products")) || [];

submit.addEventListener("click", (event) => {
  event.preventDefault();
  for (filed of fileds) {
    if (filed.value == "") {
      alert(`fill the ${filed.name}`);
      return;
    }
  }
  if (productName.value.length < 5) {
    alert("Product name should be at least 5 characters");
    return;
  }
  if (productDescription.value.length < 5) {
    alert("Product descripton should be at least 5 characters");
    console.log("ijajdsf");
    return;
  }
  addProduct();
  let allProducts = exstingData.concat(products);
  localStorage.setItem("products", JSON.stringify(allProducts));
  clearInput();
  fieldForMoreImage1.value = ''
  fieldForMoreImage2.value = ''
  fieldForMoreImage3.value = ''
  fieldForMoreImage4.value = ''
  window.location.reload()

});


// function for add more products image
let addMoreImages = document.querySelector('.addMoreImages');
let imagesFiled = document.querySelector('.imagesField')
 
addMoreImages.addEventListener("click",()=>{
console.log('addMoreImages clicked')
imagesFiled.classList.toggle("imagesFieldShow")
document.body.style.overflow="hidden"

})


