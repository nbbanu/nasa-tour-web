const carouselInner = document.querySelector(".carousel-inner");

const carouselItem = document.querySelector(".carousel-item");
const nextBtn = document.querySelector(".carousel-right")
const prevBtn = document.querySelector(".carousel-left")
const allItem = document.querySelectorAll(".carousel-item");

let count = 0;



nextBtn.addEventListener("click", () => {
    let itemWidth = carouselItem.offsetWidth + 30;
    let length = allItem.length * itemWidth;

    if (window.innerWidth + (count * itemWidth) <= length) {
        count++;
        carouselInner.style.transform = `translateX(-${count * itemWidth}px)`;
    }

});
prevBtn.addEventListener("click", () => {
    let itemWidth = carouselItem.offsetWidth + 30;

    if (count > 0) {
        count--;
        carouselInner.style.transform = `translateX(-${count * itemWidth}px)`;
    }
});