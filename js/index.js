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
const btnOnClick = document.querySelectorAll(".btn");
btnOnClick.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        alert("You Clicked Me, but I preventDefault() by design! - Looks like your staying here!");
        e.preventDefault();

    })
})

//4 - keyPress
const hdrImgRnd = document.querySelector(".intro img");
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
    alert("To hard to use the scrollbar, eh?");
})

//7 - dblClick
const hideOnDblClk = document.querySelectorAll("img");
hideOnDblClk.forEach((itm) => {
    itm.addEventListener("dblclick", (hitm) => {
        itm.style.display = "none";
    })
})

//8 - focus + click + prevent Default
const navFocus = document.querySelectorAll(".nav a");
navFocus.forEach((nitm) => {
    nitm.addEventListener("focus", (e) => {
        nitm.style.color = "blue";
    })
    nitm.addEventListener("click", (e) => {
        e.preventDefault();
    })
})

//9 - resize
window.addEventListener("resize", () => {
    alert("Is this your way of telling me to goto the gym?");
});

//10 - copy + setTimeout Event
const hideALL = document.querySelectorAll("*");
window.addEventListener("copy", () => {
    alert("And what do you think your going to do with that?!")
    hideALL.forEach((itm) => {
        itm.style.display = "none";
    })
    window.setTimeout(() => {
        alert("Lets see you try that again!");
    }, 300)
});

//prevent propigation
const prvtProp = document.querySelector(".content-destination");
prvtProp.addEventListener("click", () => {
    alert("You cliked a base object, Does everything progpigate or bubble up?");

});
const imgClickPrvt = document.querySelector(".content-destination img");
imgClickPrvt.addEventListener("click", (e) => {
        alert("1 message or two?");
        e.stopPropagation();

    })
    //stretch