//const contImgsCrusel    = document.querySelector('.cont--imgs--carusel')
//const punto    = document.querySelectorAll('.punto')

var position = 0;
function nextImage() {
    position += 1;
    var images = document.querySelectorAll(".Galeria-imagen");
    if (position >= images.length) {
        position = 0;
    }
    for (var i = 0; i < images.length; i++) {
        images[i].style.left = -100* position + "vh";
    }
}
function previousImage() {
    position -= 1;
    var images = document.querySelectorAll(".Galeria-imagen");
    if (position < 0) {
        position = images.length - 1;
    }
    for (var i = 0; i < images.length; i++) {
        images[i].style.left = -100 * position + "vh";
    }
}