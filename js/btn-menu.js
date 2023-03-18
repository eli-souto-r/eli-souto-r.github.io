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


