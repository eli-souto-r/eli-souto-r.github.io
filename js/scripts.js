// Boton despelegar menu
document.querySelector(".btn--menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1--btn-menu");
var line2__bars = document.querySelector(".line2--btn-menu");
var line3__bars = document.querySelector(".line3--btn-menu");
var menu = document.querySelector(".menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1--btn-menu");
    line2__bars.classList.toggle("activeline2--btn-menu");
    line3__bars.classList.toggle("activeline3--btn-menu");
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

//Carusel de los proyectos
const contImgsCrusel    = document.querySelector('.cont--imgs--carusel')
const punto    = document.querySelectorAll('.punto')