class Product {
    name;
    remark;
    description;
    features = [];
    parameters = [];
    carouselChartImgPaths = [];
    applicationImgPaths = [];
    downloadFilePath;
    productContainer;

    constructor(name, remark, description, features, parameters, carouselChartImgPaths, applicationImgPaths, downloadFilePath) {
        this.name = name;
        this.remark = remark;
        this.description = description;
        this.features = features;
        this.parameters = parameters;
        this.carouselChartImgPaths = carouselChartImgPaths;
        this.applicationImgPaths = applicationImgPaths;
        this.downloadFilePath = downloadFilePath;
        this.productContainer = document.createElement("div");
        this.productContainer.style.position = "relative";
        this.productContainer.style.height = "200%";
    }

    create() {
        let briefInfoContainer = document.createElement("div");
        briefInfoContainer.style.position = "relative";
        let productCarouselChart = new CarouselChart();
        let briefInfoLeftContainer = productCarouselChart.create(this.carouselChartImgPaths);
        briefInfoLeftContainer.style.margin = "10%"
        briefInfoContainer.appendChild(briefInfoLeftContainer);

        let briefInfoRightContainer = this.#createBriefInfo();
        briefInfoContainer.appendChild(briefInfoRightContainer);
        this.productContainer.appendChild(briefInfoContainer);

        let descriptionContainer = this.#createDescription();
        this.productContainer.appendChild(descriptionContainer);

        let parameterAndApplicationContainer = document.createElement("div");
        parameterAndApplicationContainer.style.position = "relative";
        parameterAndApplicationContainer.style.left = "5%";
        parameterAndApplicationContainer.style.top = "5%";
        parameterAndApplicationContainer.style.width = '90%';

        let tableContainer = this.#createTable();
        let applicationCarouselChart = new CarouselChart();
        let applicationContainer = applicationCarouselChart.create(this.applicationImgPaths);
        applicationContainer.style.position = "absolute";
        applicationContainer.style.left = "60%";
        applicationContainer.style.top = "0%";
        let download = this.#download();
        download.style.position = "absolute";
        download.style.left = "60%";
        download.style.top = "90%";
        parameterAndApplicationContainer.appendChild(tableContainer);
        parameterAndApplicationContainer.appendChild(applicationContainer);
        parameterAndApplicationContainer.appendChild(download);
        this.productContainer.appendChild(parameterAndApplicationContainer);

        document.body.appendChild(this.productContainer);
    }
    #createBriefInfo() {
        let container = document.createElement("div");
        container.style.position = "absolute";
        container.style.left = "53%";
        container.style.top = "10%";
        container.style.width = "40%";
        container.style.height = "60%";

        let name = document.createElement("div");
        name.innerText = this.name;
        name.style.color = "red";
        name.style.fontSize = "30px";
        name.style.fontWeight = 500;
        container.appendChild(name);

        let remark = document.createElement("div");
        remark.innerText = this.remark;
        remark.style.position = "absolute";
        remark.style.left = "0%";
        remark.style.top = "23%";
        remark.style.color = "black";
        remark.style.fontSize = "20px";
        remark.style.fontWeight = 500;
        container.appendChild(remark);

        if (this.features.length > 0) {
            let featureTitle = document.createElement("div");
            featureTitle.innerText = "Main Features:";
            featureTitle.style.position = "absolute";
            featureTitle.style.left = "0%";
            featureTitle.style.top = "55%";
            featureTitle.style.color = "black";
            featureTitle.style.fontSize = "20px";
            featureTitle.style.fontWeight = 500;
            container.appendChild(featureTitle);

            let topValue = 65;
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                let ul = document.createElement('ul');
                ul.innerText = feature.title;
                ul.style.position = "absolute";
                ul.style.left = "-5%";
                ul.style.top = `${topValue}%`;
                ul.style.fontSize = "16px";
                ul.style.fontWeight = 300;
                ul.style.lineHeight = "20px";
                for (let j = 0; j < feature.items.length; j++) {
                    let item = feature.items[j];
                    let li = document.createElement('li');
                    li.textContent = item;
                    li.style.marginLeft = "30px";
                    ul.appendChild(li);
                }
                container.appendChild(ul);
                topValue += (feature.items.length * 10 + 20);
            }
        }
        return container;
    }
    #createDescription() {
        let container = document.createElement("div");
        container.style.position = "relative";
        container.style.left = "5%";
        container.style.top = "0%";
        container.style.width = "90%";
        container.style.height = "20%";
        container.style.background = "rgba(0,0,0,0.05)";

        let title = document.createElement("div");
        title.style.position = "absolute";
        title.style.left = "0%";
        title.style.top = "0%";
        title.innerText = "Description:";
        title.style.fontSize = "25px";
        title.style.fontWeight = 800;
        container.appendChild(title);

        let value = document.createElement("div");
        value.style.position = "absolute";
        value.style.left = "0%";
        value.style.top = "20%";
        value.style.color = "rgba(0,0,0,0.7)";
        value.innerText = this.description;
        value.style.fontSize = "15px";
        value.style.fontWeight = 300;
        container.appendChild(value);

        return container;
    }
    #createTable() {
        let container = document.createElement("div");
        container.style.position = "relative";
        container.style.width = '90%';
        container.style.height = 'auto';
        let table = document.createElement("table");
        table.style.width = '50%';
        table.style.borderCollapse = 'collapse';
        for (var i = 0; i < this.parameters.length; i++) {
            let parameter = this.parameters[i];
            var tr = document.createElement('tr');
            if(i%2 == 0)
            {
                tr.style.background = "rgba(0,0,0,0.05)";
            }
            for (var j = 0; j < 2; j++) {
                var td = document.createElement('td');
                td.style.border = '1px solid rgba(0,0,0,0.2)';
                td.style.padding = '8px';
                td.style.color = "black";
                if(j == 0){
                    td.textContent = parameter.name;
                    td.style.fontSize = "15px";
                    td.style.fontWeight = 600;
                } 
                else if(j == 1){
                    td.textContent = parameter.value;  
                    td.style.fontSize = "15px";
                    td.style.fontWeight = 300;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        container.appendChild(table)
        return container;
    }
    #download() {  
        var element = document.createElement('a');  
        element.href = this.downloadFilePath;  
        element.download = this.downloadFilePath.split(/[\\/]/).pop();
        element.innerText = "download";
        element.style.cursor = "pointer";
        element.style.textDecoration = "none";
        element.style.display = 'inline-block';
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
        element.style.padding = '20px 30px';
        element.style.borderRadius = '5px'; 
        element.style.alignItems = 'center'; 
        element.style.justifyContent = 'center';
        return element;
    } 
}
//轮播图
class CarouselChart {
    #slideIndex;
    #slides = [];
    #slideWidth;
    #carouselSlide;
    #sliding;
    constructor() {
        this.#slideIndex = 0;
        this.#sliding = false;
    }
    nextSlide() {
        if (this.#sliding) return;
        this.#sliding = true;
        this.#slideIndex++;
        if (this.#slideIndex >= this.#slides.length) {
            this.#slideIndex = 0;
        }
        this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * this.#slideIndex) + 'px)';
        this.#sliding = false;
    }

    prevSlide() {
        if (this.#sliding) return;
        this.#sliding = true;
        this.#slideIndex--;
        if (this.#slideIndex < 0) {
            this.#slideIndex = this.#slides.length - 1;
        }
        this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * this.#slideIndex) + 'px)';
        this.#sliding = false;
    }

    create(imgPaths) {
        let carouselContainer = document.createElement("div");
        carouselContainer.style.position = "relative";
        carouselContainer.style.width = "30%";
        carouselContainer.style.height = "80%";
        carouselContainer.style.overflow = "hidden";

        this.#carouselSlide = document.createElement("div");
        this.#carouselSlide.style.display = "flex";
        this.#carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselContainer.appendChild(this.#carouselSlide);

        for (let i = 0; i < imgPaths.length; i++) {
            const imgPath = imgPaths[i];
            let slide = document.createElement("img");
            slide.style.width = "100%";
            slide.style.flexShrink = "0";
            slide.src = imgPath;
            this.#carouselSlide.appendChild(slide);
            this.#slides.push(slide);
        }
        setTimeout(() => {
            if (this.#slides.length > 0) {
                this.#slideWidth = this.#slides[0].clientWidth;
            }
        }, 0);


        let thumbnailContainer = document.createElement("div");
        thumbnailContainer.style.display = "flex";
        thumbnailContainer.style.justifyContent = "center";
        thumbnailContainer.style.marginTop = "10px";
        carouselContainer.appendChild(thumbnailContainer);

        for (let i = 0; i < imgPaths.length; i++) {
            const imgPath = imgPaths[i];
            let thumbnail = document.createElement("img");
            thumbnail.style.width = "10%";
            thumbnail.style.height = "5%";
            thumbnail.style.margin = "0 5px";
            thumbnail.style.cursor = "pointer";
            thumbnail.setAttribute('data-slide-index', i);
            thumbnail.src = imgPath;
            thumbnail.addEventListener('click', () => {
                let slideIndex = parseInt(thumbnail.getAttribute('data-slide-index'), 10);
                this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * slideIndex) + 'px)';
            });
            thumbnailContainer.appendChild(thumbnail);
        }
        return carouselContainer;
    }
}