// Boton despelegar menu
document.querySelector(".Header-btn").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".Header-line1");
var line2__bars = document.querySelector(".Header-line2");
var line3__bars = document.querySelector(".Header-line3");
var menu = document.querySelector(".Header-nav");

function animateBars(){
    line1__bars.classList.toggle("Header-line--line1");
    line2__bars.classList.toggle("Header-line--line2");
    line3__bars.classList.toggle("Header-line--line3");
    menu.classList.toggle("active")
}

// Trayectoria slider
const formacionButton = document.getElementById('btn--formacion');
const trabajoButton = document.getElementById('btn--trabajo');
const trabajo = document.getElementById('div--trabajo');
const formacion = document.getElementById('div--formacion');


formacionButton.onclick = function(){
    trabajo.style.display="none";
    formacion.style.display="flex";
    formacionButton.style.color="#BF0417";
    trabajoButton.style.color="";
}

trabajoButton.onclick = function(){
    formacion.style.display="none";
    trabajo.style.display="flex";
    formacionButton.style.color="";
    trabajoButton.style.color="#BF0417";
    
}

//Contacto popup
const contactoButton = document.getElementById('abrir');
const cerrarButton = document.getElementById('cerrar');
const blockContact = document.getElementById('block--contact');
const contContacto = document.getElementById('cont--abrir');


contactoButton.onclick = function(){
    blockContact.style.display="flex";
    contContacto.style.display="none";
}


cerrarButton.onclick = function(){
    blockContact.style.display="none";
    contContacto.style.display="flex";
    
}

//Slider proyectos
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
