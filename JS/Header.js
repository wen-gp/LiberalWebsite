class Header {
    static productType;
    #header = document.createElement('div');
    #elements = [];
    // #products = [];
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
        this.#createElement("Contact", "660px", "../HTML/Contact.html");
        let searchBox = this.#createSearchElement("760px");

        this.#header.appendChild(logo);
        document.body.appendChild(this.#header);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                this.#header.style.height = "50px";
                this.#header.style.background = "rgba(255, 255, 255, 1)";
                this.#header.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";
                logo.height = 40;
                searchBox.style.top = "10px";

                for (let i = 0; i < this.#elements.length; i++) {
                    this.#elements[i].style.top = "15px";
                    this.#elements[i].style.color = "black"
                }
            } else {
                this.#header.style.height = "70px";
                this.#header.style.background = "rgba(0, 0, 0, 0.3)";
                this.#header.style.boxShadow = "";
                logo.height = 50;
                searchBox.style.top = "20px";

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
            zIndex: 101,
            transition: "top 0.3s, color 0.3s"
        });
        ul.innerText = text + " >";

        for (let i = 0; i < productTypes.length; i++) {
            const info = productTypes[i];
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
                width:"130%",
                position: "absolute",
                top: "0%",
                left: "100%",
                color: "black",
                display: "none",
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

                let level3UL = this.#createElementWithStyle("ul", {
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    width:"120%",
                    position: "absolute",
                    top: "0%",
                    left: "100%",
                    color: "black",
                    display: "none",
                    zIndex: 101,
                });
                for (let k = 0; k < level2Info.level3.length; k++) {
                    let level3Info = level2Info.level3[k];
                    let level3 = this.#createElementWithStyle("li", {
                        listStyleType: "none",
                        color: "black",
                        padding: "8px 16px",
                        background: "white",
                        display: "none"
                    });
                    level3.innerText = level3Info.display;
                    level3UL.appendChild(level3);
                    level3.addEventListener("mouseover", function () {
                        this.style.background = "#ddd";
                    });
                    level3.addEventListener("mouseout", function () {
                        this.style.background = "white";
                    });
                    level3.addEventListener("click", function () {
                        if (level3Info.type != "") {
                            window.location.href = './Products.html?origin=productMenu&productType=' + encodeURIComponent(level3Info.type);
                        }
                    });
                }
                level2.appendChild(level3UL);
                level2UL.appendChild(level2);

                level2.addEventListener("mouseover", function () {
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
                level2.addEventListener("mouseout", function () {
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
                level2.addEventListener("click", function () {
                    if (level3Info.type != "") {
                        window.location.href = './Products.html?origin=productMenu&productType=' + encodeURIComponent(level2Info.type);
                    }
                });
            }
            level1.appendChild(level2UL);
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
    #createSearchElement(left) {
        let box = document.createElement("div");
        box.style.display = "flex";
        box.style.justifyContact = "flexStart";
        box.style.alignItems = "flexStart";
        box.style.flexDirection = "row";
        box.style.position = "fixed";
        box.style.top = "20px";
        box.style.left = left;
        box.style.height = "30px";
        box.style.width = "230px";
        box.style.transition = "top 0.3s";

        let element = document.createElement('input');
        element.type = "text";
        element.placeholder = "Search";
        element.style.borderWidth = "0px";
        element.style.borderColor = "rgba(0,0,0,0)";
        element.style.transition = "width 0.5s";
        element.style.height = "100%";
        element.style.width = "50px";
        element.style.zIndex = 101;
        element.style.color = "black";
        element.addEventListener("mouseover", function () {
            element.style.width = "200px";
            element.style.color = "black";
        });
        element.addEventListener("mouseout", function () {
            if (window.scrollY > 0) {
                this.style.color = "black"
            } else {
                this.style.color = "white"
            }
            element.style.width = "50px";
            element.style.color = "black";
        });
        element.addEventListener('focus', function () {
            element.style.borderColor = 'rgba(0,0,0,0.0)';
            element.style.outline = '0';
        });
        element.addEventListener('input', function (event) {
            element.style.width = "200px";
            element.style.color = "black";
        });

        let img = document.createElement("img");
        img.src = '../Images/search.png';
        img.style.width = "30px";
        img.style.height = "107%";
        img.style.transition = "height 0.3s";
        img.style.background = "white";
        img.addEventListener('click', () => {
            this.#search(element.value);
        });
        img.addEventListener("mouseover", function () {
            img.src = '../Images/search1.png';
            element.style.width = "200px";
        });
        img.addEventListener("mouseout", function () {
            img.src = '../Images/search.png';
            element.style.width = "50px";
        });
        box.appendChild(element);
        box.appendChild(img);
        this.#header.appendChild(box);
        return box;
    }
    #search(text){
        window.location.href = './Products.html?origin=search&p=' + encodeURIComponent(text);
    }
}