const sliderContainer = document.querySelector('.slider');
const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.Slider-btn:nth-child(1)');
const nextBtn = document.querySelector('.Slider-btn:nth-child(2)');

let slideWidth = slides[0].getBoundingClientRect().width;

// Ajustar el ancho de las imágenes al tamaño del contenedor
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}px`;
});

// Posicionar las imágenes en línea
track.style.width = `${slideWidth * slides.length}px`;

// Función para desplazar el slider
const moveSlide = (direction) => {
  const currentTranslate = track.style.transform ? parseInt(track.style.transform.match(/(-?\d+)/)[1]) : 0;
  const moveAmount = direction * slideWidth;
  track.style.transform = `translateX(${currentTranslate + moveAmount}px)`;
};

// Eventos de clic
prevBtn.addEventListener('click', () => moveSlide(1));
nextBtn.addEventListener('click', () => moveSlide(-1));
