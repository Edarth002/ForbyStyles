/*let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show current slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 2 seconds
    setTimeout(showSlides, 2000);

}*/
const carousel = document.querySelector('.carousel');
const slidesContainer = carousel.querySelector('.carousel-slides');
const slides = Array.from(slidesContainer.getElementsByClassName('slide'));
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        updateButtons();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
        updateButtons();
    }
});

showSlide(currentIndex);
updateButtons();
