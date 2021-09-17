// * Navigation 
const navLinks = document.querySelector(".nav__links");
const navLiksOpenBtn = document.querySelector("#navOpen");
const navLiksCloseBtn = document.querySelector("#navClose");
const navItems = document.querySelectorAll(".nav__item")

// ? Open Navigation
navLiksOpenBtn.addEventListener('click',() => {
    console.log("Open");
    navLinks.classList.remove("close-nav");
    navLinks.classList.add("open-nav");
});
// ? Close Navigation
navLiksCloseBtn.addEventListener('click',() => {
    console.log("Close");
    navLinks.classList.replace("open-nav","close-nav");
});

