// Your code goes here
const lgOnMouse = document.querySelector(".logo-heading");
lgOnMouse.addEventListener("mouseenter", () => {
    lgOnMouse.style.color = "red";
})
lgOnMouse.addEventListener("mouseleave", () => {
    lgOnMouse.style.color = "black";
})

const nvOnClick = document.querySelectorAll("nav a");
nvOnClick.forEach((nv) => {
    nv.addEventListener("click", () => {
        alert("You Clicked Me!");

    })
})