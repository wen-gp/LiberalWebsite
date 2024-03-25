let bunnerIndex = 0;
let bunners = document.querySelectorAll('.bunner');

const productContainer = document.querySelector('.product-container');
const productList = document.querySelector('.product-module-container');
const productItems = document.querySelectorAll('.product');
const productItemWidth = productContainer.offsetWidth;
let offset = 0;
let productIndex = 1;

showBunners();
showProducts();

//bunner
function showBunners() {
    showBunnerItem(bunnerIndex);
    setInterval(function () { showBunnerItem(bunnerIndex += 1); }, 5000);
}
function changeBunner(n) {
    showBunnerItem(bunnerIndex += 1);
}
function showBunnerItem(n) {
    if (n > bunners.length - 1) {
        bunnerIndex = 0;
    }
    if (n < 0) {
        bunnerIndex = bunners.length - 1;
    }
    for (let i = 0; i < bunners.length; i++) {
        bunners[i].style.opacity = 0;
    }
    bunners[bunnerIndex].style.opacity = 1;
}

//product
function showProducts() {
    productItems.forEach(item => {
        item.style.width = `${productItemWidth}px`;
    });
    setInterval(function () { changeProduct(1); }, 3000);
}
function changeProduct(n) {
    offset -= n * productItemWidth;
    if (offset < -(productItemWidth * (productItems.length - 1))) {
        offset = 0;
    }
    else if (offset > 0) {
        offset = -(productItemWidth * (productItems.length - 1));
    }
    productList.style.transform = `translateX(${offset}px)`;
}
