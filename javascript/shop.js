function search(){
    let searchBar = document.querySelector('.search-input') .value.toUpperCase();
    let productlist = document.querySelector('.products');
    let product=document.querySelectorAll('.product-card');
    let getname = document.getElementsByTagName('h3');
    for (let i = 0; i < getname.length; i++){
        if (getname[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        }
        else{
            product[i].style.display = "none";
        }
       
    }
}

// // shop.js

// const products = {
//     "nike-tech-black": {
//       name: "Black Nike Tech",
//       image: "css/images/Nike products/black nike tech.jpg",
//       priceOld: "1100.LE",
//       price: "900 LE"
//     },
//     "nike-tech-grey": {
//       name: "Grey Nike Tech",
//       image: "css/images/Nike products/grey nike tech.jpg",
//       priceOld: "1100.LE",
//       price: "900 LE"
//     },
//     "nike-tshirt-black": {
//       name: "Nike Basic Black T-shirt",
//       image: "css/images/Nike products/black sirt.jpg",
//       priceOld: "600.LE",
//       price: "500 LE"
//     }
//   };
  
//   // Get product key from URL (e.g., ?product=nike-tech-black)
//   const urlParams = new URLSearchParams(window.location.search);
//   const productKey = urlParams.get("product");
  
//   if (productKey && products[productKey]) {
//     const product = products[productKey];
  
//     // Dynamically update content
//     document.getElementById("product-name").textContent = product.name;
//     document.getElementById("product-image").src = product.image;
//     document.getElementById("product-image").alt = product.name;
//     document.getElementById("product-price-old").textContent = product.priceOld;
//     document.getElementById("product-price").textContent = product.price;
//   } else {
//     // Optional: Redirect or show "Product Not Found"
//     document.getElementById("product-name").textContent = "Product Not Found";
//   }
  