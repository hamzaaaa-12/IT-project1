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