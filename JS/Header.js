initHeaders();
function initHeaders() {
    let header = document.createElement('div');
    header.id = "header";
    header.style.width = "100%";
    header.style.height = "70px";
    header.style.background = "rgba(0, 0, 0, 0.3)";
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.left = 0;
    header.style.transition = "box-shadow 0.3s, height 0.3s, background 0.3s";
    header.classList.add("scrolled");
    header.style.zIndex = 100;
    document.body.appendChild(header);

    let logo = document.createElement('img');
    logo.src = '../Images/logo2.png';
    logo.width = 50;
    logo.height = 50;
    logo.style.position = "absolute";
    logo.style.left = "8%";
    logo.style.top = "15%";
    logo.style.transition = "height 0.3s";
    header.appendChild(logo);

    let elements = [];
    createHeaderElement(elements, header, "Home", "230px", "../HTML/Home.html");
    createHeaderElement(elements, header, "About", "330px", "../HTML/About.html");
    createHeaderElement(elements, header, "Content", "430px", "../HTML/Content.html");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.height = "50px";
            header.style.background = "rgba(255, 255, 255, 1)";
            header.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";
            logo.height = 40;

            for(let i = 0; i < elements.length; i++)
            {
                elements[i].style.top = "15px";
                elements[i].style.color = "black"
            }
        } else {
            header.style.height = "70px";
            header.style.background = "rgba(0, 0, 0, 0.3)";
            header.style.boxShadow = "";
            logo.height = 50;

            for(let i = 0; i < elements.length; i++)
            {
                elements[i].style.top = "25px";
                elements[i].style.color = "white"
            }
        }
    });
}
function createHeaderElement(elements, header, text, left, jump) {
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
    header.appendChild(element);
    elements.push(element);
    return element;
}