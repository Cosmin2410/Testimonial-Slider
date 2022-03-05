let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

//Images changing when button press

let slidePositionImages = 0;
let slidesImages = document.querySelectorAll('.image');
const totalSlidesImages = slidesImages.length;

function updateSlidePositionImages() {
  for (let slide of slidesImages) {
    slide.classList.remove('image-visible');
  }
  slidesImages[slidePositionImages].classList.add('image-visible');
}

//Text changing when text press

let slidePositionText = 0;
let slidesText = document.querySelectorAll('.review');
const totalSlidesText = slidesText.length;

function updateSlidePositionText() {
  for (let slide of slidesText) {
    slide.classList.remove('review-visible');
  }

  slidesText[slidePositionText].classList.add('review-visible');
}
// Buttons changing the image and text when pressed

function moveToNextSlide() {
  if (slidePositionImages === totalSlidesImages - 1) {
    slidePositionImages = 0;
  } else {
    slidePositionImages++;
  }

  if (slidePositionText === totalSlidesText - 1) {
    slidePositionText = 0;
  } else {
    slidePositionText++;
  }

  updateSlidePositionText();
  updateSlidePositionImages();
}

function moveToPrevSlide() {
  if (slidePositionImages === 0) {
    slidePositionImages = totalSlidesImages - 1;
  } else {
    slidePositionImages--;
  }

  if (slidePositionText === 0) {
    slidePositionText = totalSlidesText - 1;
  } else {
    slidePositionText--;
  }

  updateSlidePositionText();
  updateSlidePositionImages();
}
