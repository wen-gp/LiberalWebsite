class Home {
    #bunnerIndex = 0;
    #bunners = document.querySelectorAll('.bunner');
    #productContainer = document.querySelector('.product-container');
    #productList = document.querySelector('.product-module-container');
    #productItems = document.querySelectorAll('.product');
    #productItemWidth = this.#productContainer.offsetWidth;
    #offset = 0;

    //bunner
    showBunners() {
        this.showBunnerItem(this.#bunnerIndex);
        setInterval(() =>  { this.showBunnerItem(this.#bunnerIndex += 1); }, 5000);
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
            item.style.width = `${this.#productItemWidth}px`;
        });
        setInterval(() => { this.changeProduct(1); }, 3000);
    }
    changeProduct(n) {
        this.#offset -= n * this.#productItemWidth;
        if (this.#offset < -(this.#productItemWidth * (this.#productItems.length - 1))) {
            this.#offset = 0;
        }
        else if (this.#offset > 0) {
            this.#offset = -(this.#productItemWidth * (this.#productItems.length - 1));
        }
        this.#productList.style.transform = `translateX(${this.#offset}px)`;
    }

}

