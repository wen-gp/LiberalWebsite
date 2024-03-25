initHeaders();
function initHeaders() {
    let header = document.createElement('div');
    header.id = "header";
    header.style.width = "100%";
    header.style.height = "70px";
    header.style.background = "rgba(255, 255, 255, 0)";
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.left = 0;
    header.style.transition = "box-shadow 0.3s, height 0.3s, background 0.3s";
    header.classList.add("scrolled");
    header.style.zIndex = 100;

    let logo = document.createElement('img');
    logo.src = '../Images/logo2.png';
    logo.width = 50;
    logo.height = 50;
    logo.style.position = "absolute";
    logo.style.left = "8%";
    logo.style.top = "15%";
    header.appendChild(logo);

    //生成Home
    let home = createHeaderElement("Home", "230px");
    header.appendChild(home);

    document.body.appendChild(header);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.height = "50px";
            header.style.background = "rgba(255, 255, 255, 1)";
            header.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";

            home.style.top = "15px";
            home.style.color = "black"
        } else {
            header.style.height = "70px";
            header.style.background = "rgba(255, 255, 255, 0)";
            header.style.boxShadow = "";

            home.style.top = "25px";
            home.style.color = "white"
        }
    });
}
function createHeaderElement(text, left) {
    let element = document.createElement('div');
    element.innerText = text;
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
    return element;
}