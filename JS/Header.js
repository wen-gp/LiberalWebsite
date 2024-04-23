class Header {
    static productType;
    #header = document.createElement('div');
    #elements = [];
    #products = [
        {
            "level1": "Electronic Components",
            "level2": [
                {
                    "display": "Sensor",
                    "type": "",
                    "level3": [
                        {
                            "display": "Magnetic Field Sensor (Hall)",
                            "type": "Magnetic Field Sensor (Hall)"
                        },
                        {
                            "display": "Optical Sensors",
                            "type": "Optical Sensors"
                        },
                        {
                            "display": "Position Distance Sensor",
                            "type": "Position Distance Sensor"
                        },
                        {
                            "display": "Gas Flow Sensor",
                            "type": "Gas Flow Sensor"
                        },
                        {
                            "display": "Temperature Sensor",
                            "type": "Temperature Sensor"
                        },
                        {
                            "display": "Angle Sensor (Encoder)",
                            "type": "Angle Sensor (Encoder)"
                        },
                        {
                            "display": "Liquid Level Sensor",
                            "type": "Liquid Level Sensor"
                        },
                        {
                            "display": "Force Sensor (Weighing Sensor)",
                            "type": "Force Sensor (Weighing Sensor)"
                        },
                        {
                            "display": "Accelerometer",
                            "type": "Accelerometer"
                        },
                        {
                            "display": "Fluid Flow Sensor",
                            "type": "Fluid Flow Sensor"
                        },
                        {
                            "display": "Humidity Sensor",
                            "type": "Humidity Sensor"
                        },
                        {
                            "display": "Gas Sensor",
                            "type": "Gas Sensor"
                        },
                        {
                            "display": "Pressure Sensor",
                            "type": "Pressure Sensor"
                        },
                        {
                            "display": "Inertial Measurement Unit (IMU)",
                            "type": "Inertial Measurement Unit (IMU)"
                        },
                        {
                            "display": "Tilt Sensor",
                            "type": "Tilt Sensor"
                        },
                        {
                            "display": "Sadar",
                            "type": "Sadar"
                        },
                        {
                            "display": "Other Sensors",
                            "type": "Other Sensors"
                        }
                    ]
                },
                {
                    "display": "Chip",
                    "type": "",
                    "level3": [
                        {
                            "display": "Analog Front End (AFE)",
                            "type": "Analog Front End (AFE)"
                        },
                        {
                            "display": "ADC Chip",
                            "type": "ADC Chip"
                        },
                        {
                            "display": "DAC Chip",
                            "type": "DAC Chip"
                        },
                        {
                            "display": "Switching Power Supply Microcircuit",
                            "type": "Switching Power Supply Microcircuit"
                        },
                        {
                            "display": "Video Image Processing Chip",
                            "type": "Video Image Processing Chip"
                        },
                        {
                            "display": "Memory Chip",
                            "type": "Memory Chip"
                        },
                        {
                            "display": "Programmable Logic Chip",
                            "type": "Programmable Logic Chip"
                        },
                        {
                            "display": "Standard Logic Chip",
                            "type": "Standard Logic Chip"
                        },
                        {
                            "display": "Other Microcircuits",
                            "type": "Other Microcircuits"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Measuring Instruments",
            "level2": [
                {

                    "display": "Thermal Imaging Equipment",
                    "type": "",
                    "level3": [
                        {
                            "display": "Complete Machine",
                            "type": "Complete Machine"
                        },
                        {
                            "display": "Module",
                            "type": "Module"
                        },
                        {
                            "display": "Detector",
                            "type": "Detector"
                        }
                    ]
                },
                {
                    "display": "Oscilloscopes and Accessories",
                    "type": "",
                    "level3": [
                        {
                            "display": "Digital Oscilloscope",
                            "type": "Digital Oscilloscope"
                        },
                        {
                            "display": "Portable Oscilloscope",
                            "type": "Portable Oscilloscope"
                        },
                        {
                            "display": "Analog Oscilloscope",
                            "type": "Analog Oscilloscope"
                        },
                        {
                            "display": "Oscilloscope Accessories",
                            "type": "Oscilloscope Accessories"
                        }
                    ]
                },
                {
                    "display": "Multimeter",
                    "type": "",
                    "level3": [
                        {
                            "display": "General Purpose Digital Multimeter",
                            "type": "General Purpose Digital Multimeter"
                        },
                        {
                            "display": "Benchtop Digital Multimeter",
                            "type": "Benchtop Digital Multimeter"
                        },
                        {
                            "display": "High-Precision Digital Multimeter",
                            "type": "High-Precision Digital Multimeter"
                        },
                        {
                            "display": "Analog Multimeter",
                            "type": "Analog Multimeter"
                        },
                        {
                            "display": "Multimeter Accessories",
                            "type": "Multimeter Accessories"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Display Device",
            "level2": [
                {
                    "display": "Indicators And Displays",
                    "type": "",
                    "level3": [
                        {
                            "display": "Vacuum Fluorescent Display (VFD) Modules",
                            "type": "VFD Modules"
                        },
                        {
                            "display": "Liquid Crystal Displays (LCDs)",
                            "type": "LCDs"
                        },
                        {
                            "display": "LCD Graphic Indicators",
                            "type": "LCD Graphic Indicators"
                        },
                        {
                            "display": "Symbolic LCD Indicators",
                            "type": "Symbolic LCD Indicators"
                        },
                        {
                            "display": "Luminous and Gas Discharge Indicators",
                            "type": "Luminous and Gas Discharge Indicators"
                        },
                        {
                            "display": "Digital Segment Indicators",
                            "type": "Digital Segment Indicators"
                        },
                        {
                            "display": "Organic Light-Emitting Diodes (OLEDs)",
                            "type": "OLEDs"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Switch, Connector",
            "level2": [
                {
                    "display": "Connector",
                    "type": "",
                    "level3": [
                        {
                            "display": "Circular Industrial Connector",
                            "type": "Circular Industrial Connector"
                        },
                        {
                            "display": "Rectangular Industrial Connector",
                            "type": "Rectangular Industrial Connector"
                        }
                    ]
                },
                {
                    "display": "Switch",
                    "type": "",
                    "level3": [
                        {
                            "display": "Limit Switch",
                            "type": "Limit Switch"
                        },
                        {
                            "display": "Proximity Switch",
                            "type": "Proximity Switch"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Tool",
            "level2": [
                {
                    "display": "Tool Set",
                    "type": "",
                    "level3": [
                        {
                            "display": "Multi-Function Tool Kit",
                            "type": "Multi-Function Tool Kit"
                        },
                        {
                            "display": "Hand Tool Kit",
                            "type": "Hand Tool Kit"
                        },
                        {
                            "display": "Folding Tool Set",
                            "type": "Folding Tool Set"
                        }
                    ]
                },
                {
                    "display": "Electric Tools",
                    "type": "",
                    "level3": [
                        {
                            "display": "Glue Gun",
                            "type": "Glue Gun"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Consumables",
            "level2": [
                {
                    "display": "Packing Material",
                    "type": "Packing Material",
                    "level3": []
                }
            ]
        },
        {
            "level1": "Installing Products",
            "level2": [
                {
                    "display": "Shells",
                    "type": "",
                    "level3": [
                        {
                            "display": "Machined Shell",
                            "type": "Machined Shell"
                        },
                        {
                            "display": "Plastic Shell",
                            "type": "Plastic Shell"
                        },
                        {
                            "display": "Shielded Shell",
                            "type": "Shielded Shell"
                        },
                        {
                            "display": "Explosion-proof Shell",
                            "type": "Explosion-proof Shell"
                        },
                        {
                            "display": "Shell Accessories",
                            "type": "Shell Accessories"
                        }
                    ]
                }
            ]
        },
        {
            "level1": "Module",
            "level2": [
                {
                    "display": "Printed Circuit Board",
                    "type": "Printed Circuit Board",
                    "level3": []
                }
            ]
        },
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
                    position: "absolute",
                    top: "0%",
                    left: "100%",
                    color: "black",
                    display: "none",
                    zIndex: 101,
                });
                for (let K = 0; K < level2Info.level3.length; j++) {
                    let level3Info = level2Info.level3[j];
                    let level3 = this.#createElementWithStyle("li", {
                        listStyleType: "none",
                        color: "black",
                        padding: "8px 16px",
                        background: "white",
                        display: "none"
                    });
                    level3UL.appendChild(level3);
                    level2.appendChild(level3UL);
                    level3.addEventListener("mouseover", function () {
                        this.style.background = "#ddd";
                    });
                    level3.addEventListener("mouseout", function () {
                        this.style.background = "white";
                    });
                    level3.addEventListener("click", function () {
                        if (level3.type != "") {
                            window.location.href = './Products.html?productType=' + encodeURIComponent(level3Info.type);
                        }
                    });
                }

                level2UL.appendChild(level2);
                level1.appendChild(level2UL);

                level2.addEventListener("mouseover", function () {
                    this.style.background = "#ddd";
                });
                level2.addEventListener("mouseout", function () {
                    this.style.background = "white";
                });
                level2.addEventListener("click", function () {
                    if (level2.type != "") {
                        window.location.href = './Products.html?productType=' + encodeURIComponent(level2Info.type);
                    }
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
    #createSearchElement(left) {
        let box = document.createElement("div");
        box.style.display = "flex";
        box.style.justifyContent = "flexStart";
        box.style.alignItems = "flexStart";
        box.style.flexDirection = "row";
        box.style.position = "fixed";
        box.style.top = "20px";
        box.style.left = left;
        // box.style.background = "pink";
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
        img.addEventListener('click', function () {
            alert("搜索中...");
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
}