let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function moveCarousel(direction) {
  const lastIndex = carouselItems.length - 1;

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = lastIndex;
  } else if (currentIndex > lastIndex) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
