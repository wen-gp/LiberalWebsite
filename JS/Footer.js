class Footer {
    #boxCreator = new BoxCreator();
    initFooter() {
        let footerBox = this.#boxCreator.createColumnBox(document.body, "", "footer-box");
        let row1 = this.#boxCreator.createRowBox(footerBox, "", "footer-row-1");
        let row1Column1 = this.#boxCreator.createColumnBox(row1, "", "footer-row-1-column-1");

        let logo = document.createElement('img');
        logo.id = "footer-logo";
        logo.src = '../Images/logo1.jpg';
        row1Column1.appendChild(logo);

        let companyIntroduction =  this.#boxCreator.createRowBox(row1Column1, "footer-font footer-row-1-unit-box", "footer-company-introduction");
        companyIntroduction.innerText = "LIBERAL is your one-stop-shop for all your electronic needs. We offer a wide range of electronic components, measurement instruments, tools, hardware components, electrical products, and consumer electronics components. Our commitment to quality and service has made us the most trusted supplier in the microelectronics market."

        let contentTitle = this.#boxCreator.createRowBox(footerBox, "", "footer-content-title");
        contentTitle.innerText = "CONNECT WITH US";

        let contentDetailBox = this.#boxCreator.createRowBox(footerBox, "", "footer-content-detail-box");
        let content1 = this.#boxCreator.createColumnBox(contentDetailBox, "footer-content-font footer-content-item")
        content1.innerText = "sale1@liberal-technology.com";
        let content2 = this.#boxCreator.createColumnBox(contentDetailBox, "footer-content-font footer-content-item")
        content2.innerText = "sale2@liberal-technology.com";
        let content3 = this.#boxCreator.createColumnBox(contentDetailBox, "footer-content-font footer-content-item")
        content3.innerText = "sale3@liberal-technology.com";
        let content4 = this.#boxCreator.createColumnBox(contentDetailBox, "footer-content-font footer-content-item")
        content4.innerText = "+86 13157155835";

        this.#boxCreator.createRowBox(footerBox, "", "footer-line");

        let englishName = this.#boxCreator.createRowBox(footerBox, "", "english-name");
        englishName.innerText = "© 2015 YiWu liberal Co., Ltd.";
    }
}