const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideMenu = document.querySelector(".sidemenu");
const closeMenuBtn = document.querySelector(".sidemenu .close-menu");



hamburgerMenu.addEventListener("click", () => {
    sideMenu.classList.add("active");
})

closeMenuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
})

const dropdown = document.querySelector(".dropdown");
const dropdownArrow = document.querySelector(".dd-arrow");
const passengersDropdown = document.querySelector(".passengers-dropdown");
const options = document.querySelectorAll(".option");
const mainText = document.querySelector(".main-text");

dropdownArrow.addEventListener("click",() => {
    dropdown.classList.toggle("dropdown-active");
});

for (let option of options){
    option.addEventListener("click", () => {
        let optionText = option.querySelector(".option-text").innerText;
        mainText.innerText = optionText;

    });
}
