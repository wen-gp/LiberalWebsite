class About{
    moveToImg()
    {
        let elementAbout2 = document.getElementById("about2-div");
        let element1 = document.getElementById("about-img1");
        let element2 = document.getElementById("about2-title");
        let element3 = document.getElementById("about2-description");
        elementAbout2.addEventListener("mouseover", function () {
            element1.style.filter = "brightness(50%)";
            element2.style.top = "52%";
            element3.style.color = "rgba(255, 255, 255, 1)";
        });
        elementAbout2.addEventListener("mouseout", function () {
            element1.style.filter = "brightness(100%)";
            element2.style.top = "76%";
            element3.style.color = "rgba(255, 255, 255, 0)";
        });
    
        let elementAbout3 = document.getElementById("about3-div");
        let element4 = document.getElementById("about-img2");
        let element5 = document.getElementById("about3-title");
        let element6 = document.getElementById("about3-description");
        elementAbout3.addEventListener("mouseover", function () {
            element4.style.filter = "brightness(50%)";
            element5.style.top = "10%";
            element6.style.color = "rgba(255, 255, 255, 1)";
        });
        elementAbout3.addEventListener("mouseout", function () {
            element4.style.filter = "brightness(100%)";
            element5.style.top = "76%";
            element6.style.color = "rgba(255, 255, 255, 0)";
        });
    }
}