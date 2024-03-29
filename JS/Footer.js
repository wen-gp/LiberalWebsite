class Footer{
    initFooter() {
        let footer = document.createElement('div');
        footer.id = "footer";
        footer.style.width = "100%";
        footer.style.height = "70%";
        footer.style.backgroundColor = "black";
        footer.style.position = "relative";
        // footer.style.bottom = 0;
        // footer.style.left = 0;
        document.body.appendChild(footer);
    
        //#region logo
        {
            let element = document.createElement('img');
            element.src = '../Images/logo1.jpg';
            element.width = 50;
            element.height = 50;
            element.style.position = "absolute";
            element.style.left = "8%";
            element.style.top = "15%";
            footer.appendChild(element);
        }
        //#endregion
    
        //#region 公司介绍
        {
            let element = document.createElement('div');
            element.innerText = "We are committed to infrared modules,\r\nMost of the company's products are \r\nindependently developed, And the domestic \r\nmarket share ranks in the front of the industry,\r\nBreaking th long term monopoly of foreign \r\ncompanies."
            element.style.position = "absolute";
            element.style.left = "8%";
            element.style.top = "30%";
            element.style.color = "rgba(255, 255, 255, 0.7)";
            element.style.fontSize = "15px";
            element.style.fontWeight = 100;
            footer.appendChild(element);
        }
        //#endregion
    
        //#region 产品
        this.#createFooterText(footer, "Products", "32%", "15%", 1, "18px", 600, false);
        this.#createFooterText(footer, "Infrared detectors", "32%", "25%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Infrared module", "32%", "32%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Infrared movement", "32%", "39%", 0.7, "15px", 100, true);
        //#endregion
    
        //#region 行业
        this.#createFooterText(footer, "Industry", "46%", "15%", 1, "18px", 600, false);
        this.#createFooterText(footer, "Mobile hydraulics Applications", "46%", "25%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Industrial Applications", "46%", "32%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Light industrial Applications", "46%", "39%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Further Applications", "46%", "46%", 0.7, "15px", 100, true);
        //#endregion
    
        //#region 服务
        this.#createFooterText(footer, "Service", "64%", "15%", 1, "18px", 600, false);
        this.#createFooterText(footer, "Download", "64%", "25%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Services", "64%", "32%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "FAQs", "64%", "39%", 0.7, "15px", 100, true);
        //#endregion
    
        //#region 快速连接
        this.#createFooterText(footer, "Quick Links", "78%", "15%", 1, "18px", 600, false);
        this.#createFooterText(footer, "About", "78%", "25%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Industry", "78%", "32%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Support", "78%", "39%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "News", "78%", "46%", 0.7, "15px", 100, true);
        this.#createFooterText(footer, "Contact", "78%", "53%", 0.7, "15px", 100, true);
        //#endregion
    
        //联系方式
        this.#createFooterText(footer, "CONNECT WITH US", "8%", "68%", 1, "18px", 600, false);
        this.#createFooterConnect(footer, '../Images/facebook.png', '../Images/facebook1.png', "8%", "75%", true);
        this.#createFooterConnect(footer, '../Images/whatsapp.png', '../Images/whatsapp1.png', "12%", "75%", true);
        this.#createFooterConnect(footer, '../Images/wechat-fill.png', '../Images/wechat-fill1.png', "16%", "75%", true);
        {
            let element = document.createElement('div');
            element.innerText = "Contact Us"
            element.style.width = "7.5%";
            element.style.height = "5.5%";
            element.style.position = "absolute";
            element.style.left = "20%";
            element.style.top = "75%";
            element.style.background = "red";
            element.style.color = "white";
            element.style.fontSize = "15px";
            element.style.fontWeight = 800;
            element.style.alignItems = 'center'; 
            element.style.justifyContent = 'center';
            element.style.border = '2px solid black';  
            element.style.borderRadius = '7px'; 
            element.style.display = 'flex'; 
            footer.appendChild(element);
            element.style.cursor = "pointer";
            element.style.transition = "background 0.3s ease";
            element.addEventListener("mouseover", function () {
                this.style.background = "rgba(50, 50, 50, 0.4)";
            });
            element.addEventListener("mouseout", function () {
                this.style.background = "red"
            });
        }
    
        //分割线
        {
            let element = document.createElement('div');
            element.style.width = "80%";
            element.style.height = "0.1%";
            element.style.position = "absolute";
            element.style.left = "8%";
            element.style.top = "90%";
            element.style.background = "rgba(255, 255, 255, 0.4)";
            footer.appendChild(element);
        }
        this.#createFooterText(footer, "© 2022 YiWu liberal Co., Ltd.", "8%", "92%", 0.7, "10px", 100, true);
    }
    #createFooterText(footer, text, left, top, opacity, fontSize, fontWeight, isSetHover) {
        let element = document.createElement('div');
        element.innerText = text
        element.style.position = "absolute";
        element.style.left = left;
        element.style.top = top;
        element.style.color = `rgba(255, 255, 255, ${opacity})`;
        element.style.fontSize = fontSize;
        element.style.fontWeight = fontWeight;
        footer.appendChild(element);
        if (isSetHover) {
            element.style.cursor = "pointer";
            element.style.transition = "color 0.3s ease";
            element.addEventListener("mouseover", function () {
                this.style.color = "red";
            });
            element.addEventListener("mouseout", function () {
                this.style.color = "rgba(255, 255, 255, 0.7)"
            });
        }
    }
    #createFooterConnect(footer, img, img1, left, top, isSetHover) {
        let element = document.createElement('img');
        element.src = img;
        element.width = 30;
        element.height = 30;
        element.style.position = "absolute";
        element.style.left = left;
        element.style.top = top;
        footer.appendChild(element);
        if (isSetHover) {
            element.style.cursor = "pointer";
            element.style.transition = "color 0.3s ease";
            element.addEventListener("mouseover", function () {
                element.src = img1;
            });
            element.addEventListener("mouseout", function () {
                element.src = img;
            });
        }
    }
}