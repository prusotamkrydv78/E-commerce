let productDetailsProduct = JSON.parse(
  localStorage.getItem("productIdentifier") 
)|| [];
// console.log(productDetailsProduct);
let relatedProducts=[];
console.log(productDetailsProduct.length)
let section = document.querySelector('section')
if(productDetailsProduct.length == 0){
section.innerHTML=`<div class="notFound">
        <div class="heading">No Product Found</div>
        <div>
         <a href="../shop.html">
                  <button>shop now</button>
                </a>
        </div>
      </div>`
}
productDetailsProduct.forEach((element) => {
  productImgUrl = element.image;
  let productName = element.name;
  productRating = element.rating || 4.5;
  productPrice = element.price;
  productDesc = element.description;
  view1ImgLink = element.moreimages[0];
  view2ImgLink = element.moreimages[1];
  view3ImgLink = element.moreimages[2];
  view4ImgLink = element.moreimages[3];
  productDetails(
    productImgUrl,
    productName,
    productRating, 
    productPrice,
    productDesc,
    view1ImgLink,
    view2ImgLink,
    view3ImgLink,
    view4ImgLink
  );
  relatedProducts = products.filter(
    (product) => product.category == element.category
  );
  // console.log(element.name);
});

// /// adding products to the related products cards

relatedProducts.forEach((product) => {
  cardCreating(product.image, product.name, 4.5, product.price);
});

let leftImages = document.querySelectorAll('.leftImages');

for(image of leftImages){
  image.addEventListener('click', (e) => {
    let mainImg= e.target.parentElement.parentElement.nextElementSibling.firstChild
    let mainImgUrl = mainImg.src
    let img = e.target; 
    let imgUrl = img.src
    console.log(mainImgUrl)
    mainImg.src = imgUrl
    img.src = mainImgUrl
  })
}
let rightImages = document.querySelectorAll('.rightImages');
 
for(image of rightImages){
  image.addEventListener('click', (e) => {
    let mainImg= e.target.parentElement.parentElement.previousElementSibling.firstChild
    let mainImgUrl = mainImg.src
    let img = e.target; 
    let imgUrl = img.src
    console.log(mainImg)
    mainImg.src = imgUrl
    img.src = mainImgUrl
  })
}
