class Home{
    #isEnableReorderBanner = true;
    reorderBanner(isMoveToLeft) {
        if (!this.#isEnableReorderBanner) {
            return;
        }
        this.#isEnableReorderBanner = false;
        let container = document.getElementById("wy-popular-products-carousel-chart__card-long-container");
        let items = Array.from(container.children);
        if (isMoveToLeft) {
            for (let i = 0; i < 2; i++) {
                let firstItem = items.shift();
                items.push(firstItem);
            }
        } else {
            for (let i = 0; i < 2; i++) {
                let lastItem = items.pop();
                items.unshift(lastItem);
            }
        }
        if (isMoveToLeft) {
            container.classList.add("wy-popular-products-carousel-chart__card-long-container-move");
            container.style.transform = "translateX(-50%)";
        }
        else {
            container.classList.add("wy-popular-products-carousel-chart__card-long-container-move");
            container.style.transform = "translateX(0%)";
        }
        setTimeout(() => {
            container.classList.remove("wy-popular-products-carousel-chart__card-long-container-move");
            container.style.transform = "translateX(-25%)";
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            items.forEach(element => {
                container.appendChild(element);
            });
        }, 500);
        this.#isEnableReorderBanner = true;
    }
    jumpToProducts(tag) {
        window.location.href = './Products.html?origin=productMenu&productType=' + encodeURIComponent(tag);
    }
    jumpToProduct(id) {
        for (let i = 0; i < productCards.length; i++) {
            let productCard = productCards[i];
            if(productCard.tags.includes(id)) {
                window.location.href = './Product.html?p=' + encodeURIComponent(JSON.stringify(productCard.product));
                break;
            }
        }

    }
}