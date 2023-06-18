const sliderContainer = document.querySelector('.Slider-cont');
const track = document.querySelector('.Slider-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.Slider-btn:nth-child(1)');
const nextBtn = document.querySelector('.Slider-btn:nth-child(2)');
let slideIndex = 0;

// Función para ajustar el ancho de las imágenes
const adjustSlideWidth = () => {
  const slideWidth = sliderContainer.offsetWidth;

  slides.forEach((slide) => {
    slide.style.width = `${slideWidth}px`;
  });

  track.style.width = `${slideWidth * slides.length}px`;

  moveSlide(0);
};

// Función para desplazar el slider
const moveSlide = (index) => {
  const slideWidth = sliderContainer.offsetWidth;

  track.style.transform = `translateX(-${slideWidth * index}px)`;
  slideIndex = index;
};

// Eventos de clic
prevBtn.addEventListener('click', () => {
  const prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  moveSlide(prevIndex);
});

nextBtn.addEventListener('click', () => {
  const nextIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  moveSlide(nextIndex);
});

// Funciones para avanzar y retroceder las imágenes
function nextImage() {
  const nextIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  moveSlide(nextIndex);
}

function previousImage() {
  const prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  moveSlide(prevIndex);
}

// Inicialización y ajuste del ancho de las imágenes
adjustSlideWidth();
