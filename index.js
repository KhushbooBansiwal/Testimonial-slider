let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-card');

document.getElementById('nextBtn').addEventListener('click', showNextSlide);
document.getElementById('prevBtn').addEventListener('click', showPrevSlide);

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateSlide();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateSlide();
}

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active'); 
        if (index === currentIndex) {
            slide.classList.add('active'); 
        }
    });
}
