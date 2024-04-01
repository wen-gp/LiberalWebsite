class ProductCard {
    top;
    left;
    imgPath;
    name;
    description;
    resolution;
    pixelSize;
    netd;
    constructor(top, left, imgPath = '', name = '', description = '', resolution = '', pixelSize = '', netd = '') {
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
        let container = document.createElement('div');
        container.style.height = "40%";
        container.style.width = "20%";
        container.style.position = "relative";
        container.style.top = this.top;
        container.style.left = this.left;
        container.style.background = "white";
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'
        container.style.transition = "boxShadow 1s ease";
        container.addEventListener('mouseover', function () {
            this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.6)';
        });
        container.addEventListener('mouseout', function () {
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        });

        let imgContainer = document.createElement('div');
        let nameContainer = document.createElement('div');
        let descriptionContainer = document.createElement('div');
        let resolutionContainer = document.createElement('div');
        let pixelSizeContainer = document.createElement('div');
        let netdContainer = document.createElement('div');

        document.body.appendChild(container);
    }
}