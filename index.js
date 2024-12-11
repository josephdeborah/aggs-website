const menu = document.querySelector("#menu")
const navBar = document.querySelector("#navBar")
const header = document.querySelector("header")
menu.addEventListener("click",menuFunc)
function  menuFunc() {
    navBar.style.transition="all .8s ease-in-out"
    navBar.style.left="0";
}


const close = document.querySelector("#closeIcon")
close.addEventListener("click",closeFunc)
function closeFunc() {
    navBar.style.left="-500px";

    
}

// =======================scroll function====================
