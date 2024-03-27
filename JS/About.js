moveToImg();
function moveToImg()
{
    let element1 = document.getElementById("about2-div");
    let element2 = document.getElementById("about2-title");
    let element3 = document.getElementById("about2-description");
    element1.addEventListener("mouseover", function () {
        this.style.background = "rgba(0, 0, 0, 0.5)";
        element2.style.top = "52%";
        element3.style.color = "rgba(255, 255, 255, 1)";
    });
    element1.addEventListener("mouseout", function () {
        this.style.background = "rgba(0, 0, 0, 0)";
        element2.style.top = "76%";
        element3.style.color = "rgba(255, 255, 255, 0)";
    });

    let element4 = document.getElementById("about3-div");
    let element5 = document.getElementById("about3-title");
    let element6 = document.getElementById("about3-description");
    element4.addEventListener("mouseover", function () {
        this.style.background = "rgba(0, 0, 0, 0.5)";
        element5.style.top = "10%";
        element6.style.color = "rgba(255, 255, 255, 1)";
    });
    element4.addEventListener("mouseout", function () {
        this.style.background = "rgba(0, 0, 0, 0)";
        element5.style.top = "76%";
        element6.style.color = "rgba(255, 255, 255, 0)";
    });
}