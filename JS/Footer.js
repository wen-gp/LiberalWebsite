initFooter();
function initFooter() {
    let footer = document.createElement('span');
    footer.id = "footer";
    footer.style.width = "100%";
    footer.style.height = "70%";
    footer.style.backgroundColor = "black";
    footer.style.position = "absolute";
    footer.style.left = 0;
    document.body.appendChild(footer);

    //logo
    let img = document.createElement('img');
    img.src = '../Images/logo1.jpg'; 
    img.width = 50;  
    img.height = 50; 
    img.style.position = "absolute";
    img.style.left = "8%";
    img.style.top = "15%";
    footer.appendChild(img);  

    //公司介绍
    let introduce = document.createElement('div');
    introduce.innerText = "We are committed to infrared modules,\r\nMost of the company's products are \r\nindependently developed, And the domestic \r\nmarket share ranks in the front of the industry,\r\nBreaking th long term monopoly of foreign \r\ncompanies."
    introduce.style.position = "absolute";
    introduce.style.left = "8%";
    introduce.style.top = "30%";
    introduce.style.color = "rgba(255, 255, 255, 0.7)";
    introduce.style.fontSize = "15px";
    introduce.style.fontWeight = 100;
    footer.appendChild(introduce);

    //产品
    let product = document.createElement('div');
    product.innerText = "Products"
    introduce.style.position = "absolute";
    introduce.style.left = "8%";
    introduce.style.top = "30%";
    introduce.style.color = "rgba(255, 255, 255, 0.7)";
    introduce.style.fontSize = "15px";
    introduce.style.fontWeight = 100;
    footer.appendChild(img);  
}
function createFooterItem(text, left) {
    let home = document.createElement('div');
    home.innerText = text;
    home.style.color = "white";
    home.style.transition = "top 0.3s, color 0.3s";
    home.style.cursor = "pointer";
    home.style.position = "fixed";
    home.style.left = left;
    home.style.top = "25px";
    home.addEventListener("mouseover", function () {
        this.style.color = "red";
    });
    home.addEventListener("mouseout", function () {
        if (window.scrollY > 0) {
            this.style.color = "black"
        } else {
            this.style.color = "white"
        }
    });
    return home;
}