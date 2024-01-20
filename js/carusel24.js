const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btbLeft.addEventListener("click", e => moveToLeft())
btbRight.addEventListener("click", e => moveToRight())

let operacion = 0;
    widthIm = 100 / sliderSection.length;

function moveToRight( ) {
    operacion = operacion + widthIm
    slider.style.transform = 'translate(-${operacion}%)';
}

function moveToLeft( ) {
    
}
