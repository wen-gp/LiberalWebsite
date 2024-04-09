class Header {
    static productType;
    #header = document.createElement('div');
    #elements = [];
    #products = [
        { level1: "Infrared detectors", level2: [{ display: "test111111111", type: "test1" }] },
        { level1: "Infrared module", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Visible light module", level2: [{ display: "test3", type: "test1" }] },
        { level1: "Drone control chip", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Drone flight control chip", level2: [{ display: "test2", type: "test1" }] },
        { level1: "inu", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Hand held observation", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Head mounted night vision device", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Thermal imaging sight", level2: [{ display: "test2", type: "test1" }] },
        { level1: "FPV Drone", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Bulletproof helmet", level2: [{ display: "test2", type: "test1" }] },
        { level1: "Bulletproof vest", level2: [{ display: "test2", type: "test1" }] },
    ];
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
        this.#createElement("Service", "460px", "../HTML/Service.html");
        this.#createElement("About", "560px", "../HTML/About.html");
        this.#createElement("Content", "660px", "../HTML/Content.html");

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
        let ul = this.#createElementWithStyle("ul", {
            listStyleType: "none",
            padding: 0,
            margin: 0,
            color: "white",
            cursor: "pointer",
            position: "fixed",
            top: "25px",
            left: left,
            width: "300px",
            zIndex: 101,
            transition: "top 0.3s, color 0.3s"
        });
        ul.innerText = text + " >";

        for (let i = 0; i < this.#products.length; i++) {
            const info = this.#products[i];
            let level1 = this.#createElementWithStyle("li", {
                listStyleType: "none",
                position: "relative",
                color: "black",
                padding: "8px 16px",
                background: "white",
                display: "none"
            });
            level1.innerText = info.level1;

            let level2UL = this.#createElementWithStyle("ul", {
                listStyleType: "none",
                padding: 0,
                margin: 0,
                position: "absolute",
                top: "0%",
                left: "300px",
                color: "black",
                display: "none",
                minWidth: "50px",
                zIndex: 101,
            });
            for (let j = 0; j < info.level2.length; j++) {
                let level2Info = info.level2[j];
                let level2 = this.#createElementWithStyle("li", {
                    listStyleType: "none",
                    color: "black",
                    padding: "8px 16px",
                    background: "white",
                    display: "none"
                });
                level2.innerText = level2Info.display;
                level2UL.appendChild(level2);
                level1.appendChild(level2UL);

                level2.addEventListener("mouseover", function () {
                    this.style.background = "#ddd";
                });
                level2.addEventListener("mouseout", function () {
                    this.style.background = "white";
                });
                level2.addEventListener("click", function () {
                    Header.productType = level2Info.type;
                    window.location.href = './Products.html?productType=' + encodeURIComponent(level2Info.type);
                });
            }

            level1.addEventListener("mouseover", function () {
                this.style.background = "#ddd";
                for (var i = 0; i < this.children.length; i++) {
                    let child = this.children[i];
                    child.style.display = "block";
                    for (var j = 0; j < child.children.length; j++) {
                        let child1 = child.children[j];
                        child1.style.display = "block";
                    }
                }
            });
            level1.addEventListener("mouseout", function () {
                this.style.background = "white";
                for (var i = 0; i < this.children.length; i++) {
                    let child = this.children[i];
                    child.style.display = "none";
                    for (var j = 0; j < child.children.length; j++) {
                        let child1 = child.children[j];
                        child1.style.display = "none";
                    }
                }
            });
            ul.appendChild(level1);
        }

        ul.addEventListener("mouseover", function () {
            this.style.color = "red";
            for (var i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                child.style.display = "block";
            }
        });
        ul.addEventListener("mouseout", function () {
            if (window.scrollY > 0) {
                this.style.color = "black"
            } else {
                this.style.color = "white"
            }
            for (var i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                child.style.display = "none";
            }
        });

        this.#header.appendChild(ul);
        this.#elements.push(ul);
    }
    #createElementWithStyle(tagName, styleObject) {
        const element = document.createElement(tagName);
        for (let property in styleObject) {
            element.style[property] = styleObject[property];
        }
        return element;
    }
}