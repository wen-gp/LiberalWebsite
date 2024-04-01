class Header {
    #header = document.createElement('div');
    #elements = [];
    #products = [];
    constructor() {
        this.#products.push(new Product("Infrared detectors", ["1", "2", "3"]));
        this.#products.push(new Product("Infrared module", ["4", "5", "6", "7"]));
        this.#products.push(new Product("Infrared movment", ["8", "9", "10"]));
    }
    initHeaders() {
        this.#header.style.width = "100%";
        this.#header.style.height = "70px";
        this.#header.style.background = "rgba(0, 0, 0, 0.3)";
        this.#header.style.position = "fixed";
        this.#header.style.top = 0;
        this.#header.style.left = 0;
        this.#header.style.transition = "box-shadow 0.3s, height 0.3s, background 0.3s";
        this.#header.classList.add("scrolled");
        this.#header.style.zIndex = 100;

        let logo = document.createElement('img');
        logo.src = '../Images/logo2.png';
        logo.width = 50;
        logo.height = 50;
        logo.style.position = "absolute";
        logo.style.cursor = "pointer";
        logo.style.left = "8%";
        logo.style.top = "15%";
        logo.style.transition = "height 0.3s";
        logo.addEventListener('click', function () {
            window.location.href = '../HTML/Home.html';
        });

        this.#createElement("Home", "230px", "../HTML/Home.html");
        this.#createComboBox("Products", "330px");
        this.#createElement("About", "460px", "../HTML/About.html");
        this.#createElement("Content", "560px", "../HTML/Content.html");

        this.#header.appendChild(logo);
        document.body.appendChild(this.#header);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                this.#header.style.height = "50px";
                this.#header.style.background = "rgba(255, 255, 255, 1)";
                this.#header.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";
                logo.height = 40;

                for (let i = 0; i < this.#elements.length; i++) {
                    this.#elements[i].style.top = "15px";
                    this.#elements[i].style.color = "black"
                }
            } else {
                this.#header.style.height = "70px";
                this.#header.style.background = "rgba(0, 0, 0, 0.3)";
                this.#header.style.boxShadow = "";
                logo.height = 50;

                for (let i = 0; i < this.#elements.length; i++) {
                    this.#elements[i].style.top = "25px";
                    this.#elements[i].style.color = "white"
                }
            }
        });
    }
    #createElement(text, left, jump) {
        let element = document.createElement('a');
        element.innerText = text;
        element.style.textDecoration = "none";
        element.href = jump
        element.style.color = "white";
        element.style.transition = "top 0.3s, color 0.3s";
        element.style.cursor = "pointer";
        element.style.position = "fixed";
        element.style.left = left;
        element.style.top = "25px";
        element.style.zIndex = 101;
        element.addEventListener("mouseover", function () {
            this.style.color = "red";
        });
        element.addEventListener("mouseout", function () {
            if (window.scrollY > 0) {
                this.style.color = "black"
            } else {
                this.style.color = "white"
            }
        });
        this.#header.appendChild(element);
        this.#elements.push(element);
        return element;
    }
    #createComboBox(text, left) {
        let element = document.createElement('a');
        element.innerText = text + " >";
        element.style.textDecoration = "none";
        element.style.transition = "top 0.3s, color 0.3s";
        element.style.color = "white";
        element.style.cursor = "pointer";
        element.style.position = "fixed";
        element.style.left = left;
        element.style.top = "25px";
        element.style.zIndex = 101;

        this.#createComboBoxLevel1List(element, left);

        element.addEventListener("mouseover", function () {
            this.style.color = "red";
            for (let i = 0; i < element.children.length; i++) {
                let child = element.children[i];
                child.style.opacity = 1;
            }
        });
        element.addEventListener("mouseout", function () {
            if (window.scrollY > 0) {
                this.style.color = "black"
            } else {
                this.style.color = "white"
            }
            for (let i = 0; i < element.children.length; i++) {
                let child = element.children[i];
                child.style.opacity = 0;
            }
        });
        this.#header.appendChild(element);
        this.#elements.push(element);
    }
    #createComboBoxLevel1List(parent, left) {
        let curTop = 60;
        for (let i = 0; i < this.#products.length; i++) {
            let text = this.#products[i].level1;
            let comboItem = document.createElement('div');
            parent.appendChild(comboItem);

            comboItem.innerText = text;
            comboItem.style.background = "white";
            comboItem.style.opacity = 0;
            comboItem.style.zIndex = 101;
            comboItem.style.height = "50px";
            comboItem.style.width = "270px";
            comboItem.style.position = "fixed";
            comboItem.style.left = left;
            comboItem.style.top = (curTop + 50 * i).toString() + "px";
            comboItem.style.background = "white";
            comboItem.style.transition = "opacity 0.5s ease-in-out";

            comboItem.style.fontSize = "20px";
            comboItem.style.fontWeight = "800";
            comboItem.style.color = "black";
            comboItem.style.display = 'flex';
            comboItem.style.alignItems = 'center';
            comboItem.style.paddingLeft = "30px";

            let newStr = left.replace("px", "");
            let leftNum = Number(newStr);
            leftNum += 300;
            let newLeft = leftNum.toString() + "px";
            this.#createComboBoxLevel2List(comboItem, newLeft, this.#products[i].level2);

            comboItem.addEventListener("mouseover", function () {
                this.style.background = "rgba(0, 0, 0, 0.3)";
                this.style.color = "white";

                for (let i = 0; i < comboItem.children.length; i++) {
                    let child = comboItem.children[i];
                    child.style.opacity = 1;
                }
            });
            comboItem.addEventListener("mouseout", function () {
                this.style.background = "white";
                this.style.color = "black";

                for (let i = 0; i < comboItem.children.length; i++) {
                    let child = comboItem.children[i];
                    child.style.opacity = 0;
                }
            });
        }
    }
    #createComboBoxLevel2List(parent, left, list) {
        let curTop = 60;
        for (let i = 0; i < list.length; i++) {
            let text = list[i];
            let comboItem = document.createElement('div');

            comboItem.innerText = text;
            comboItem.style.background = "white";
            comboItem.style.opacity = 0;
            comboItem.style.zIndex = 101;
            comboItem.style.height = "50px";
            comboItem.style.width = "270px";
            comboItem.style.position = "fixed";
            comboItem.style.left = left;
            comboItem.style.top = (curTop + 50 * i).toString() + "px";
            comboItem.style.background = "white";
            comboItem.style.transition = "opacity 0.5s ease-in-out";

            comboItem.style.fontSize = "20px";
            comboItem.style.fontWeight = "800";
            comboItem.style.color = "black";
            comboItem.style.display = 'flex';
            comboItem.style.alignItems = 'center';
            comboItem.style.paddingLeft = "30px";
            comboItem.addEventListener("mouseover", function () {
                this.style.background = "rgba(0, 0, 0, 0.3)";
                this.style.color = "white";
            });
            comboItem.addEventListener("mouseout", function () {
                this.style.background = "white";
                this.style.color = "black";
            });
            parent.appendChild(comboItem);
        }
    }
}
class Product {
    constructor(level1, level2) {
        this.level1 = level1;
        this.level2 = level2;
    }
    level1;
    level2 = [];
}