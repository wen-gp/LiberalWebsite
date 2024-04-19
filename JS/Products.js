class ProductCard {
    imgPath;
    name;
    description;
    resolution;
    pixelSize;
    netd;
    #boxCreator = new BoxCreator();
    constructor(imgPath, name, description, resolution = "", pixelSize = "", netd = "") {
        this.imgPath = imgPath ?? "";
        this.name = name ?? "";
        this.description = description ?? "";
        this.resolution = resolution ?? "";
        this.pixelSize = pixelSize ?? "";
        this.netd = netd ?? "";
    }
    create(box, product) {
        let container = this.#boxCreator.createColumnBox(box);
        container.style.height = "100%";
        container.style.width = "16%";
        container.style.background = "white";
        container.style.cursor = "pointer";
        container.style.marginRight = "0%";
        container.style.marginLeft = "6%";
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        container.style.transition = "box-shadow 0.5s";

        let imgContainer = document.createElement('div');
        imgContainer.style.width = "100%";
        imgContainer.style.height = "50%";
        imgContainer.style.position = "relative";
        imgContainer.style.overflow = "hidden";
        imgContainer.style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
        let img = document.createElement('img');
        img.src = this.imgPath;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.position = "absolute";
        img.style.left = "0%";
        img.style.transition = "width 0.5s, height 0.5s, left 0.5s";
        imgContainer.style.transition = "border-bottom 0.5s";
        imgContainer.appendChild(img);
        container.appendChild(imgContainer);

        let nameContainer = document.createElement('div');
        nameContainer.innerText = this.name;
        nameContainer.style.color = "black";
        nameContainer.style.width = "96%";
        nameContainer.style.margin = "14% 2% 0 10%";
        nameContainer.style.fontSize = "1.5rem";
        nameContainer.style.fontWeight = 600;
        container.appendChild(nameContainer);

        let descriptionContainer = document.createElement('div');
        descriptionContainer.innerText = this.description;
        descriptionContainer.style.width = "90%";
        descriptionContainer.style.margin = "2% 2% 0 10%";
        descriptionContainer.style.color = "black";
        descriptionContainer.style.fontSize = "1.0rem";
        descriptionContainer.style.fontWeight = 400;
        container.appendChild(descriptionContainer);

        if (this.resolution != "") {
            let resolutionContainer = document.createElement('div');
            resolutionContainer.innerText = `resolution:${this.resolution}`;
            resolutionContainer.style.width = "90%";
            resolutionContainer.style.margin = "2% 2% 0 10%";
            resolutionContainer.style.color = "rgba(0, 0, 0, 0.6)";
            resolutionContainer.style.fontSize = "1.0rem";
            resolutionContainer.style.fontWeight = 400;
            container.appendChild(resolutionContainer);
        }

        if (this.pixelSizeContainer != "") {
            let pixelSizeContainer = document.createElement('div');
            pixelSizeContainer.innerText = `pixel size:${this.pixelSize}`;
            pixelSizeContainer.style.width = "90%";
            pixelSizeContainer.style.margin = "2% 2% 0 10%";
            pixelSizeContainer.style.color = "rgba(0, 0, 0, 0.6)";
            pixelSizeContainer.style.fontSize = "1.0rem";
            pixelSizeContainer.style.fontWeight = 400;
            container.appendChild(pixelSizeContainer);
        }

        if (this.netdContainer != "") {
            let netdContainer = document.createElement('div');
            netdContainer.innerText = `netd:${this.netd}`;
            netdContainer.style.color = "rgba(0, 0, 0, 0.6)";
            netdContainer.style.width = "90%";
            netdContainer.style.margin = "2% 2% 0 10%";
            netdContainer.style.fontSize = "1.0rem";
            netdContainer.style.fontWeight = 400;
            container.appendChild(netdContainer);
        }
        this.#addEventListeners(container, imgContainer, img, product);
    }
    #addEventListeners(container, imgContainer, img, product) {
        container.addEventListener('mouseover', function () {
            container.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.6)';
            img.style.left = "-2.5%";
            img.style.width = "105%";
            img.style.height = "105%";
            imgContainer.style.borderBottom = "2px solid rgba(255, 0, 0, 1)";
        });
        container.addEventListener('mouseout', function () {
            container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
            img.style.left = "0%";
            img.style.width = "100%";
            img.style.height = "100%";
            imgContainer.style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
        });
        container.addEventListener('click', function () {
            window.location.href = './Product.html?p=' + encodeURIComponent(JSON.stringify(product));
        });
    }
}
class ProductBuilder {
    #boxCreator = new BoxCreator();
    build() {
        let n = 0;
        let box;
        for (let i = 0; i < productCards.length; i++) {
            const productCard = productCards[i];
            if (productCard.type == this.#getQueryParam('productType')) {
                if (n == 0) {
                    box = this.#boxCreator.createRowBox(document.body);
                    box.style.width = "100%";
                    box.style.height = `50vh`;
                    box.style.margin = "4% 0% 4% 4%";
                }
                let c = productCard.card;
                let card = new ProductCard(c.imgPath, c.name, c.description, c.resolution, c.pixelSize, c.netd);
                card.create(box, productCard.product);
                n++;
                if (n == 4) {
                    n = 0;
                }
            }
        }
    }
    #getQueryParam(name) {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        return params.get(name);
    }
}