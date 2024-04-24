class Home {
    #bunnerIndex = 0;
    #bunners = document.querySelectorAll('.bunner');
    #productContainer = document.querySelector('.product-container');
    #productList = document.querySelector('.product-module-container');
    #productItems = document.querySelectorAll('.product');
    // #productItemWidth = this.#productContainer.offsetWidth;
    #productItemWidth = 100;
    static #offset = 0;
    #unit = 100 / 3;
    static curProductIndex = 0;

    //bunner
    showBunners() {
        this.showBunnerItem(this.#bunnerIndex);
        setInterval(() => { this.showBunnerItem(this.#bunnerIndex += 1); }, 5000);
    }
    changeBunner(n) {
        this.showBunnerItem(this.#bunnerIndex += 1);
    }
    showBunnerItem(n) {
        if (n > this.#bunners.length - 1) {
            this.#bunnerIndex = 0;
        }
        if (n < 0) {
            this.#bunnerIndex = this.#bunners.length - 1;
        }
        for (let i = 0; i < this.#bunners.length; i++) {
            this.#bunners[i].style.opacity = 0;
        }
        this.#bunners[this.#bunnerIndex].style.opacity = 1;
    }

    //product
    showProducts() {
        this.#productItems.forEach(item => {
            item.style.width = `${this.#productItemWidth}%`;
        });
        setInterval(() => { this.changeProduct(1); }, 3000);
    }
    changeProduct(n) {
        if (Home.curProductIndex == 2 && n > 0) {
            Home.#offset += 2 * this.#unit;
            Home.curProductIndex = 0;
        }
        else if (Home.curProductIndex == 0 && n < 0) {
            Home.#offset -= 2 * this.#unit;
            Home.curProductIndex = 2;
        }
        else {
            Home.curProductIndex += n;
            Home.#offset -= n * this.#unit;
        }
        this.#productList.style.transform = `translateX(${Home.#offset}%)`;
    }

}

