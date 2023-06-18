/*const sliderContainer = document.querySelector('.Slider-cont');
const track = document.querySelector('.Slider-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.Slider-btn:nth-child(1)');
const nextBtn = document.querySelector('.Slider-btn:nth-child(2)');
let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Ajustar el ancho de las imágenes al tamaño del contenedor
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}px`;
});

// Posicionar las imágenes en línea
track.style.width = `${slideWidth * slides.length}px`;

// Función para desplazar el slider
const moveSlide = (index) => {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
};

// Eventos de clic
prevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlide(prevIndex);
});

nextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlide(nextIndex);
});

// Funciones para avanzar y retroceder las imágenes
function nextImage() {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlide(nextIndex);
}

function previousImage() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlide(prevIndex);
}*/
const sliderContainer = document.querySelector('.Slider-cont');
const track = document.querySelector('.Slider-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.Slider-btn:nth-child(1)');
const nextBtn = document.querySelector('.Slider-btn:nth-child(2)');
let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;
let startPos = 0;
let isDragging = false;
let currentTranslate = 0;
let prevTranslate = 0;

// Ajustar el ancho de las imágenes al tamaño del contenedor
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}px`;
});

// Posicionar las imágenes en línea
track.style.width = `${slideWidth * slides.length}px`;

// Función para desplazar el slider
const moveSlide = (index) => {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
};

// Eventos de clic
prevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlide(prevIndex);
});

nextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlide(nextIndex);
});

// Funciones para avanzar y retroceder las imágenes
function nextImage() {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveSlide(nextIndex);
}

function previousImage() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveSlide(prevIndex);
}

// Función para iniciar el arrastre
const dragStart = (e) => {
  e.preventDefault();
  startPos = getPositionX(e);
  isDragging = true;
  animationID = requestAnimationFrame(drag);
};

// Función para arrastrar
const drag = (e) => {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    setTranslate(currentTranslate);
  }
};

// Función para detener el arrastre
const dragEnd = () => {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const moveBy = currentTranslate - prevTranslate;
  const slideSize = slideWidth;

  // Determinar si avanzar o retroceder después del arrastre
  if (moveBy < -slideSize / 3) {
    currentIndex += 1;
  } else if (moveBy > slideSize / 3) {
    currentIndex -= 1;
  }

  moveSlide(currentIndex);
};

// Agregar eventos de arrastre
track.addEventListener('mousedown', dragStart);
track.addEventListener('touchstart', dragStart);
track.addEventListener('mouseup', dragEnd);
track.addEventListener('touchend', dragEnd);

// Obtener la posición X del evento
const getPositionX = (e) => e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;

// Aplicar el desplazamiento
const setTranslate = (x) => {
  track.style.transform = `translateX(${x}px)`;
};

// Ajustar el ancho del contenedor en cambios de tamaño de ventana
window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  moveSlide(currentIndex);
});
