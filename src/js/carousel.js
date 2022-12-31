document.querySelectorAll(".carousel-btn.carousel-right").forEach(c => { c.addEventListener('click', next) })
document.querySelectorAll(".carousel-btn.carousel-left").forEach(c => { c.addEventListener('click', prev) })
const allItem = document.querySelectorAll(".carousel-item");

let count = 0

function next(e) {
    const carousel = e.target.closest('.carousel')
    const carouselInner = carousel.querySelector('.carousel-inner')
    const carouselItem = carouselInner.querySelector('.carousel-item')

    let itemWidth = carouselItem.offsetWidth + 30;

    if (carousel.offsetWidth >= ((count - 1) * itemWidth)) {
        count++;

        carouselInner.style.transform = `translateX(-${count * itemWidth}px)`;
    }
}


function prev(e) {
    const carouselInner = e.target.closest('.carousel').querySelector('.carousel-inner')
    const carouselItem = carouselInner.querySelector('.carousel-item')

    let itemWidth = carouselItem.offsetWidth + 30;

    if (count > 0) {
        count--;
        carouselInner.style.transform = `translateX(-${count * itemWidth}px)`;
    }
}


