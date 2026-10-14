// Boton despelegar menu
document.querySelector(".Header-btn").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".Header-line1");
var line2__bars = document.querySelector(".Header-line2");
var line3__bars = document.querySelector(".Header-line3");
var menu = document.querySelector(".Header-nav");

function animateBars() {
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


formacionButton.onclick = function () {
    trabajo.style.display = "none";
    formacion.style.display = "flex";
    formacionButton.style.color = "#BF0417";
    trabajoButton.style.color = "";
}

trabajoButton.onclick = function () {
    formacion.style.display = "none";
    trabajo.style.display = "flex";
    formacionButton.style.color = "";
    trabajoButton.style.color = "#BF0417";

}

//Contacto popup
const contactoButton = document.getElementById('abrir');
const cerrarButton = document.getElementById('cerrar');
const blockContact = document.getElementById('block--contact');
const contContacto = document.getElementById('cont--abrir');


contactoButton.onclick = function () {
    blockContact.style.display = "flex";
    contContacto.style.display = "none";
}


cerrarButton.onclick = function () {
    blockContact.style.display = "none";
    contContacto.style.display = "flex";

}

//Slider proyectos

/* =========================================
   SLIDERS DE PROYECTOS
   Compatible con los 15 carruseles actuales
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Inicializar automáticamente todos los carruseles
    document.querySelectorAll(".body-carousel").forEach((carousel) => {

        const slider = carousel.querySelector(".slider");
        const btnLeft = carousel.querySelector(".btn-left");
        const btnRight = carousel.querySelector(".btn-right");

        if (!slider || !btnLeft || !btnRight) return;

        let counter = 0;

        // Detectar las diapositivas de este carrusel
        const getSlides = () =>
            Array.from(slider.children).filter((element) =>
                element.classList.contains("slider-section")
            );

        // Actualizar anchuras, posición y navegación
        function updateSlider() {
            const slides = getSlides();
            const total = slides.length;

            if (total === 0) {
                counter = 0;
                slider.style.width = "100%";
                slider.style.transform = "translateX(0)";
                return;
            }

            // Ajustar el índice si se eliminan imágenes
            counter = Math.max(0, Math.min(counter, total - 1));

            // Adaptar automáticamente el ancho al número de imágenes
            slider.style.width = `${total * 100}%`;

            slides.forEach((slide) => {
                slide.style.flex = `0 0 ${100 / total}%`;
                slide.style.boxSizing = "border-box";
            });

            // Mover el carrusel a la imagen seleccionada
            slider.style.transform =
                `translateX(-${counter * (100 / total)}%)`;

            slider.style.transition = "transform 0.6s ease";

            // Desactivar los botones si solo hay una imagen
            btnLeft.disabled = total <= 1;
            btnRight.disabled = total <= 1;
        }

        // Imagen anterior
        btnLeft.addEventListener("click", (event) => {
            event.preventDefault();

            const total = getSlides().length;
            if (total <= 1) return;

            counter = (counter - 1 + total) % total;
            updateSlider();
        });

        // Imagen siguiente
        btnRight.addEventListener("click", (event) => {
            event.preventDefault();

            const total = getSlides().length;
            if (total <= 1) return;

            counter = (counter + 1) % total;
            updateSlider();
        });

        // Detectar imágenes añadidas o eliminadas del carrusel
        const observer = new MutationObserver(() => {
            updateSlider();
        });

        observer.observe(slider, { childList: true });

        // Primera inicialización
        updateSlider();
    });


    /* =========================================
       ABRIR Y CERRAR LOS POPUPS DE PROYECTOS
       ========================================= */

    for (let number = 1; number <= 15; number++) {

        const opener = document.getElementById(`proyecto-div_${number}`);
        const popup = document.querySelector(
            `.body-carusel_${number}`
        );

        // Si falta el proyecto o el carrusel, continuar
        if (!opener || !popup) continue;

        // Abrir el carrusel correspondiente
        opener.addEventListener("click", () => {
            popup.style.display = "flex";
            document.body.classList.add("no-scroll");
        });

        // Cerrar al pulsar fuera del contenido
        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                popup.style.display = "none";

                document.body.classList.remove("no-scroll");
            }
        });
    }


    /* =========================================
       CERRAR POPUPS CON LA TECLA ESCAPE
       ========================================= */

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;

        document.querySelectorAll(".body-carousel").forEach((popup) => {
            if (getComputedStyle(popup).display !== "none") {
                popup.style.display = "none";
            }
        });

        document.body.classList.remove("no-scroll");
    });

});



//botones popups
const popupPDF = document.querySelector(".popup-pdf"),
    btnMIC = document.querySelector(".btn-mic"),
    popupDiario = document.querySelector(".popup-diario"),
    btnDiario = document.querySelector(".btn-diario");

btnMIC.addEventListener("click", e => activePopup1());
btnDiario.addEventListener("click", e => activePopup2());


// POPUPS DE VÍDEO

const botonesVideo = document.querySelectorAll(".btn-video");
const popupsVideo = document.querySelectorAll(".popup-video");

botonesVideo.forEach((boton, index) => {

    boton.addEventListener("click", function(e) {

        e.preventDefault();
        e.stopPropagation();

        const popup = popupsVideo[index];

        if (!popup) return;

        popup.style.display = "flex";
        document.body.classList.add("no-scroll");

    });

});

popupsVideo.forEach((popup) => {

    popup.addEventListener("click", function(e) {

        if (e.target === popup) {

            const video = popup.querySelector("video");

            popup.style.display = "none";

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

            document.body.classList.remove("no-scroll");
        }

    });

});
