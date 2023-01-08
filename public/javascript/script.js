const menuBtn = document.querySelector("#menuBtn");
const crosBtn = document.querySelector("#crosBtn");
const navList = document.querySelector("#navList");
const navLink = document.querySelectorAll(".navLinkSm");


navLink.forEach((element, index) => {
    element.addEventListener("click", () => {
        navLink.forEach((element) => {
            
            navList.classList.toggle("hidden");
        });

    });
});

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("hidden");
    

});

crosBtn.addEventListener("click", () => {
    navList.classList.toggle("hidden");
});