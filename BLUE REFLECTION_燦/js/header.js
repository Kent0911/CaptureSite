const parent = document.getElementsByClassName("newinfo");

let node = Array.prototype.slice.call(parent, 0);

node.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.querySelector(".newinfo_dropdown").classList.add("active");
    }, false);

    element.addEventListener("mouseout", () => {
        element.querySelector(".newinfo_dropdown").classList.remove("active");
    }, false);
});