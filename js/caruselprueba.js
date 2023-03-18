//const contImgsCrusel    = document.querySelector('.cont--imgs--carusel')
//const punto    = document.querySelectorAll('.punto')

var imagenes = [
    "imagen1.png",
    "imagen2.png",
    "imagen3.png",
    "imagen4.png"
]

var contador = 0;

function mostrarImagen(imagen) {
    document.getElementById("Galeria-imagen").src = imagen;
}

function retrocederImagen() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    mostrarImagen(imagenes[contador]);
}

function avanzarImagen() {
    contador++;
    if (contador >= imagenes.length) {
        contador = 0;
    }
    mostrarImagen(imagenes[contador]);
}
