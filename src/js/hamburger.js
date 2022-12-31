const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideMenu = document.querySelector(".sidemenu");
const closeMenuBtn = document.querySelector(".sidemenu .close-menu");



hamburgerMenu.addEventListener("click", () => {
    sideMenu.classList.add("active");
})

closeMenuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
})