class ProductCard {
    top;
    left;
    imgPath;
    name;
    description;
    resolution;
    pixelSize;
    netd;
    constructor(top, left, imgPath, name, description, resolution = "", pixelSize = "", netd = "") {
        this.top = top;
        this.left = left;
        this.imgPath = imgPath;
        this.name = name;
        this.description = description;
        this.resolution = resolution;
        this.pixelSize = pixelSize;
        this.netd = netd;
    }
    create() {
        let productContainer = document.getElementsByClassName("products-container")[0];

        let absoluteContainer = document.createElement('div');
        absoluteContainer.style.height = "50%";
        absoluteContainer.style.width = "15%";
        absoluteContainer.style.position = "absolute";
        absoluteContainer.style.top = this.top;
        absoluteContainer.style.left = this.left;
        let container = document.createElement('div');
        container.style.height = "100%";
        container.style.width = "100%";
        container.style.position = "relative";
        container.style.background = "white";
        container.style.cursor = "pointer";
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        container.style.transition = "box-shadow 0.5s";
        absoluteContainer.appendChild(container);
        productContainer.appendChild(absoluteContainer);

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
        nameContainer.style.position = "absolute";
        nameContainer.style.left = "10%";
        nameContainer.style.top = "55%";
        nameContainer.style.fontSize = "20px";
        nameContainer.style.fontWeight = 600;
        container.appendChild(nameContainer);

        let descriptionContainer = document.createElement('div');
        descriptionContainer.innerText = this.description;
        descriptionContainer.style.color = "black";
        descriptionContainer.style.position = "absolute";
        descriptionContainer.style.left = "10%";
        descriptionContainer.style.top = "62%";
        descriptionContainer.style.fontSize = "15px";
        descriptionContainer.style.fontWeight = 400;
        container.appendChild(descriptionContainer);

        if (this.resolution != "") {
            let resolutionContainer = document.createElement('div');
            resolutionContainer.innerText = `resolution:${this.resolution}`;
            resolutionContainer.style.color = "rgba(0, 0, 0, 0.6)";
            resolutionContainer.style.position = "absolute";
            resolutionContainer.style.left = "10%";
            resolutionContainer.style.top = "78%";
            resolutionContainer.style.fontSize = "15px";
            resolutionContainer.style.fontWeight = 400;
            container.appendChild(resolutionContainer);
        }

        if (this.pixelSizeContainer != "") {
            let pixelSizeContainer = document.createElement('div');
            pixelSizeContainer.innerText = `pixel size:${this.pixelSize}`;
            pixelSizeContainer.style.color = "rgba(0, 0, 0, 0.6)";
            pixelSizeContainer.style.position = "absolute";
            pixelSizeContainer.style.left = "10%";
            pixelSizeContainer.style.top = "83%";
            pixelSizeContainer.style.fontSize = "15px";
            pixelSizeContainer.style.fontWeight = 400;
            container.appendChild(pixelSizeContainer);
        }

        if (this.netdContainer != "") {
            let netdContainer = document.createElement('div');
            netdContainer.innerText = `netd:${this.netd}`;
            netdContainer.style.color = "rgba(0, 0, 0, 0.6)";
            netdContainer.style.position = "absolute";
            netdContainer.style.left = "10%";
            netdContainer.style.top = "88%";
            netdContainer.style.fontSize = "15px";
            netdContainer.style.fontWeight = 400;
            container.appendChild(netdContainer);
        }
        this.#addEventListeners(container, imgContainer, img);
    }
    #addEventListeners(container, imgContainer, img) {
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
    }
}