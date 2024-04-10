class ProductCard {
    imgPath;
    name;
    description;
    resolution;
    pixelSize;
    netd;
    #boxCreator = new BoxCreator();
    constructor(imgPath, name, description, resolution = "", pixelSize = "", netd = "") {
        this.imgPath = imgPath;
        this.name = name;
        this.description = description;
        this.resolution = resolution;
        this.pixelSize = pixelSize;
        this.netd = netd;
    }
    create(box, product) {
        let container = this.#boxCreator.createColumnBox(box);
        container.style.height = "100%";
        container.style.width = "15%";
        container.style.background = "white";
        container.style.cursor = "pointer";
        container.style.marginRight = "8%";
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
        nameContainer.style.margin = "6% 2% 0 10%";
        nameContainer.style.fontSize = "1.5rem";
        nameContainer.style.fontWeight = 600;
        container.appendChild(nameContainer);

        let descriptionContainer = document.createElement('div');
        descriptionContainer.innerText = this.description;
        descriptionContainer.style.width = "96%";
        descriptionContainer.style.margin = "2% 2% 0 10%";
        descriptionContainer.style.color = "black";
        descriptionContainer.style.fontSize = "1.0rem";
        descriptionContainer.style.fontWeight = 400;
        container.appendChild(descriptionContainer);

        if (this.resolution != "") {
            let resolutionContainer = document.createElement('div');
            resolutionContainer.innerText = `resolution:${this.resolution}`;
            resolutionContainer.style.width = "96%";
            resolutionContainer.style.margin = "2% 2% 0 10%";
            resolutionContainer.style.color = "rgba(0, 0, 0, 0.6)";
            resolutionContainer.style.fontSize = "1.0rem";
            resolutionContainer.style.fontWeight = 400;
            container.appendChild(resolutionContainer);
        }

        if (this.pixelSizeContainer != "") {
            let pixelSizeContainer = document.createElement('div');
            pixelSizeContainer.innerText = `pixel size:${this.pixelSize}`;
            pixelSizeContainer.style.width = "96%";
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
            netdContainer.style.width = "96%";
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
    #productCards = [
        {
            "type": "test1",
            "card": { "imgPath": "../Images/产品模块1.webp", "name": "iGS412", "description": "No shutter infrared movement", "resolution": "382×288", "pixelSize": "12μm", "netd": "<30mK" },
            "product": {
                "name": "GST212W",
                "remark": "Wafer-Level-Package 256×192/12μm VOx Microbolometer Uncooled Thermal Detector Sensor",
                "description":
                    "GST212W is one of the Wafer Level Packing (WLP) uncooled infrared detectors developed " +
                    "by Global Sensor Technology (GST). Wafer level packaging (WLP) is the process of completing " +
                    "high vacuum packaging directly on the entire MEMS wafer, then scribing and cutting to make " +
                    "a single infrared detector.\n\nThis long wave vanadium oxide (VOx) microbolometer focal plane " +
                    "array IR detector covers wavelength from 8 to 14μm. And its resolution is 256×192 with pixel " +
                    "size at 12μm.\n\nThe GST212W infrared FPA detector is specially developed for small size, light " +
                    "weight & low price (SWaP), which has achieved high volume production with annual output up to " +
                    "1,000,000 pieces. Due to its lightweight and low price, GST212W uncooled thermal detector can " +
                    "be widely used in many industries such as Thermography, Security Monitoring, Outdoors, AIoT, " +
                    "Intelligent Hardware, Smart Building, Smart Home, UAV Payloads, Epidemic Prevention, ADAS and " +
                    "many other new emerging markets like consumer electronics. \n\nUntil now, we have provided our " +
                    "customers with various mature and stable infrared thermal imaging solutions. It’s very easy for " +
                    "WLP ir detector sensors developed by GST to be integrated into infrared thermal camera products " +
                    "and greatly reduces the cost for customers.",
                "features": [
                    { "title": "Meet Growing Demands", "items": ["Volume production at lower cost"] },
                    { "title": "Easier Integration", "items": ["Ultra-small size", "Ultra-light weight", "TECless technology"] },
                    { "title": "Optimal & Sharp Imaging", "items": ["High sensitivity, typical NETD < 40mK", "Excellent image quality with frame rate at 30Hz"] }
                ],
                "parameters": [
                    { "name": "Model", "value": "GST212W" },
                    { "name": "Sensitive Material", "value": "Vanadium Oxide" },
                    { "name": "Resolution", "value": "256×192" },
                    { "name": "Pixel Size", "value": "12μm" },
                    { "name": "Spectral Range", "value": "8~14μm" },
                    { "name": "Typical NETD", "value": "<40mK" },
                    { "name": "Digital Output", "value": "Built-in 14 bits ADC" },
                    { "name": "Thermal Time Constant", "value": "<12ms" },
                    { "name": "Max Frame Rate", "value": "30Hz" },
                    { "name": "Power Consumption", "value": "≤75mW" },
                    { "name": "Size (mm)", "value": "10.53×7.44×1.45 (Without PCB Board)" },
                    { "name": "Weight", "value": "<0.5g" },
                    { "name": "Operating Temperature", "value": "-40°C ~ +85°C" }
                ],
                "carouselChartImgPaths": ["../Images/产品模块1.webp", "../Images/产品模块2.webp", "../Images/产品模块3.webp"],
            }
        },
    ];
    build() {
        let n = 0;
        let box;
        let rowCount = Math.floor(this.#productCards.length / 4);
        if (this.#productCards.length % 4 > 0) {
            rowCount++;
        }
        for (let i = 0; i < this.#productCards.length; i++) {
            if (n == 0) {
                box = this.#boxCreator.createRowBox(document.body);
                box.style.width = "84%";
                box.style.height = `50vh`;
                box.style.margin = "4% 8% 2% 14%";
            }
            const productCard = this.#productCards[i];
            if (productCard.type == this.#getQueryParam('productType')) {
                let c = productCard.card;
                let card = new ProductCard(c.imgPath, c.name, c.description, c.resolution, c.pixelSize, c.netd);
                card.create(box, productCard.product);
            }
            n++;
            if (n == 4) {
                n = 0;
            }
        }
    }
    #getQueryParam(name) {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        return params.get(name);
    }
}