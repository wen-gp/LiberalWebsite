class BoxCreator {
    createRowBox(box, className = "", id = "") {
        let element = document.createElement("div");
        element.style.display = "flex";
        element.style.justifyContent = "flex-start";
        element.style.alignItems = "flex-start";
        element.style.flexDirection = "row";
        if(className != ""){
            element.className = className
        }
        if(id != ""){
            element.id = id
        }
        box.appendChild(element);
        return element;
    }
    createColumnBox(box, className = "", id = "") {
        let element = document.createElement("div");
        element.style.display = "flex";
        element.style.justifyContent = "flex-start";
        element.style.alignItems = "flex-start";
        element.style.flexDirection = "column";
        if(className != ""){
            element.className = className
        }
        if(id != ""){
            element.id = id
        }
        box.appendChild(element);
        return element;
    }
}