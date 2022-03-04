let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');
let slidePosition = 0;
let slides = document.querySelectorAll('.image');
const totalSlides = slides.length;

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('image-visible');
  }
  slides[slidePosition].classList.add('image-visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
