// Your code goes here

//1 - mouseEnter
const lgOnMouse = document.querySelector(".logo-heading");
lgOnMouse.addEventListener("mouseenter", () => {
    lgOnMouse.style.color = "red";
})

//2 - mouseLeave
lgOnMouse.addEventListener("mouseleave", () => {
    lgOnMouse.style.color = "black";
})

//3 - click + preventDefault()
const nvOnClick = document.querySelectorAll("nav a");
nvOnClick.forEach((nv) => {
    nv.addEventListener("click", (e) => {
        alert("You Clicked Me, but I preventDefault() by design! - Looks like your staying here!");
        e.preventDefault();

    })
})

//4 - keyPress
const hdrImgRnd = document.querySelector("img");
document.addEventListener("keypress", () => {
    hdrImgRnd.style.border = "1px solid black";
    hdrImgRnd.style.borderRadius = "150px";
});

//5 - load
window.addEventListener("load", () => {
    alert("Welcome to the FUN BUS!");
})

//6 - wheel
document.addEventListener("wheel", () => {
    alert("To hard to use the scrollbar, eh?")
})

//7 - dblClick
const hideOnDblClk = document.querySelectorAll("img");
hideOnDblClk.forEach((itm) => {
    itm.addEventListener("dblclick", (hidm) => {
        itm.style.display = "none";
    })
})


const ftrfcs = document.querySelector(".footer");
ftrfcs.onfocus(() => {
    alert("This is the End!");
})