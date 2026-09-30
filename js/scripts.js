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
const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector(".slider"),
    sliderSection1 = document.querySelectorAll(".slider-section_1"),
    sliderSection2 = document.querySelectorAll(".slider-section_2"),
    sliderSection3 = document.querySelectorAll(".slider-section_3"),
    sliderSection4 = document.querySelectorAll(".slider-section_4"),
    sliderSection5 = document.querySelectorAll(".slider-section_5"),
    sliderSection6 = document.querySelectorAll(".slider-section_6"),
    sliderSection7 = document.querySelectorAll(".slider-section_7"),
    sliderSection8 = document.querySelectorAll(".slider-section_8"),
    sliderSection9 = document.querySelectorAll(".slider-section_9"),
    sliderSection10 = document.querySelectorAll(".slider-section_10"),
    sliderSection11 = document.querySelectorAll(".slider-section_11"),
    sliderSection12 = document.querySelectorAll(".slider-section_12"),
    sliderSection13 = document.querySelectorAll(".slider-section_13"),
    sliderSection14 = document.querySelectorAll(".slider-section_14"),
    sliderSection15 = document.querySelectorAll(".slider-section_15");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0,
    counter = 0,
    widthIm = 100 / sliderSection1.length,
    widthIm2 = 100 / sliderSection2.length,
    widthIm3 = 100 / sliderSection3.length,
    widthIm4 = 100 / sliderSection4.length,
    widthIm5 = 100 / sliderSection5.length,
    widthIm6 = 100 / sliderSection6.length,
    widthIm7 = 100 / sliderSection7.length,
    widthIm8 = 100 / sliderSection8.length,
    widthIm9 = 100 / sliderSection9.length,
    widthIm10 = 100 / sliderSection10.length,
    widthIm11 = 100 / sliderSection11.length,
    widthIm12 = 100 / sliderSection12.length,
    widthIm13 = 100 / sliderSection13.length,
    widthIm14 = 100 / sliderSection14.length,
    widthIm15 = 100 / sliderSection15.length;

// Función para manejar el movimiento de los sliders
function moveSlider(slider, counter, widthIm) {
    let operacion = counter * widthIm;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

// Función para inicializar un slider
function initializeSlider(btnLeft, btnRight, slider, sliderSections) {
    let counter = 0;
    const widthIm = 100 / sliderSections.length;

    btnLeft.addEventListener("click", () => {
        counter--;
        if (counter < 0) {
            counter = sliderSections.length - 1;
        }
        moveSlider(slider, counter, widthIm);
    });

    btnRight.addEventListener("click", () => {
        counter++;
        if (counter >= sliderSections.length) {
            counter = 0;
        }
        moveSlider(slider, counter, widthIm);
    });
}

// Inicializar los sliders
initializeSlider(
    document.querySelector(".body-carusel_1 .btn-left"),
    document.querySelector(".body-carusel_1 .btn-right"),
    document.querySelector(".body-carusel_1 .slider"),
    document.querySelectorAll(".body-carusel_1 .slider-section_1")
);

initializeSlider(
    document.querySelector(".body-carusel_2 .btn-left"),
    document.querySelector(".body-carusel_2 .btn-right"),
    document.querySelector(".body-carusel_2 .slider"),
    document.querySelectorAll(".body-carusel_2 .slider-section_2")
);

initializeSlider(
    document.querySelector(".body-carusel_3 .btn-left"),
    document.querySelector(".body-carusel_3 .btn-right"),
    document.querySelector(".body-carusel_3 .slider"),
    document.querySelectorAll(".body-carusel_3 .slider-section_3")
);

initializeSlider(
    document.querySelector(".body-carusel_4 .btn-left"),
    document.querySelector(".body-carusel_4 .btn-right"),
    document.querySelector(".body-carusel_4 .slider"),
    document.querySelectorAll(".body-carusel_4 .slider-section_4")
);

initializeSlider(
    document.querySelector(".body-carusel_5 .btn-left"),
    document.querySelector(".body-carusel_5 .btn-right"),
    document.querySelector(".body-carusel_5 .slider"),
    document.querySelectorAll(".body-carusel_5 .slider-section_5")
);

initializeSlider(
    document.querySelector(".body-carusel_6 .btn-left"),
    document.querySelector(".body-carusel_6 .btn-right"),
    document.querySelector(".body-carusel_6 .slider"),
    document.querySelectorAll(".body-carusel_6 .slider-section_6")
);

initializeSlider(
    document.querySelector(".body-carusel_7 .btn-left"),
    document.querySelector(".body-carusel_7 .btn-right"),
    document.querySelector(".body-carusel_7 .slider"),
    document.querySelectorAll(".body-carusel_7 .slider-section_7")
);

initializeSlider(
    document.querySelector(".body-carusel_8 .btn-left"),
    document.querySelector(".body-carusel_8 .btn-right"),
    document.querySelector(".body-carusel_8 .slider"),
    document.querySelectorAll(".body-carusel_8 .slider-section_8")
);

initializeSlider(
    document.querySelector(".body-carusel_9 .btn-left"),
    document.querySelector(".body-carusel_9 .btn-right"),
    document.querySelector(".body-carusel_9 .slider"),
    document.querySelectorAll(".body-carusel_9 .slider-section_9")
);

initializeSlider(
    document.querySelector(".body-carusel_10 .btn-left"),
    document.querySelector(".body-carusel_10 .btn-right"),
    document.querySelector(".body-carusel_10 .slider"),
    document.querySelectorAll(".body-carusel_10 .slider-section_10")
);

initializeSlider(
    document.querySelector(".body-carusel_11 .btn-left"),
    document.querySelector(".body-carusel_11 .btn-right"),
    document.querySelector(".body-carusel_11 .slider"),
    document.querySelectorAll(".body-carusel_11 .slider-section_11")
);

initializeSlider(
    document.querySelector(".body-carusel_12 .btn-left"),
    document.querySelector(".body-carusel_12 .btn-right"),
    document.querySelector(".body-carusel_12 .slider"),
    document.querySelectorAll(".body-carusel_12 .slider-section_12")
);

initializeSlider(
    document.querySelector(".body-carusel_13 .btn-left"),
    document.querySelector(".body-carusel_13 .btn-right"),
    document.querySelector(".body-carusel_13 .slider"),
    document.querySelectorAll(".body-carusel_13 .slider-section_13")
);

initializeSlider(
    document.querySelector(".body-carusel_14 .btn-left"),
    document.querySelector(".body-carusel_14 .btn-right"),
    document.querySelector(".body-carusel_14 .slider"),
    document.querySelectorAll(".body-carusel_14 .slider-section_14")
);

initializeSlider(
    document.querySelector(".body-carusel_15 .btn-left"),
    document.querySelector(".body-carusel_15 .btn-right"),
    document.querySelector(".body-carusel_15 .slider"),
    document.querySelectorAll(".body-carusel_15 .slider-section_15")
);
//Desplegar Slider proyectos

const proyect1 = document.querySelector(".body-carusel_1"),
    proyect2 = document.querySelector(".body-carusel_2"),
    proyect3 = document.querySelector(".body-carusel_3"),
    proyect4 = document.querySelector(".body-carusel_4"),
    proyect5 = document.querySelector(".body-carusel_5"),
    proyect6 = document.querySelector(".body-carusel_6"),
    proyect7 = document.querySelector(".body-carusel_7"),
    proyect8 = document.querySelector(".body-carusel_8"),
    proyect9 = document.querySelector(".body-carusel_9"),
    proyect10 = document.querySelector(".body-carusel_10"),
    proyect11 = document.querySelector(".body-carusel_11"),
    proyect12 = document.querySelector(".body-carusel_12"),
    proyect13 = document.querySelector(".body-carusel_13"),
    proyect14 = document.querySelector(".body-carusel_14"),
    proyect15 = document.querySelector(".body-carusel_15"),
    
    proyecto1Img = document.querySelector("#proyecto-div_1"),
    proyecto2Img = document.querySelector("#proyecto-div_2"),
    proyecto3Img = document.querySelector("#proyecto-div_3"),
    proyecto4Img = document.querySelector("#proyecto-div_4"),
    proyecto5Img = document.querySelector("#proyecto-div_5"),
    proyecto6Img = document.querySelector("#proyecto-div_6"),
    proyecto7Img = document.querySelector("#proyecto-div_7"),
    proyecto8Img = document.querySelector("#proyecto-div_8"),
    proyecto9Img = document.querySelector("#proyecto-div_9"),
    proyecto10Img = document.querySelector("#proyecto-div_10"),
    proyecto11Img = document.querySelector("#proyecto-div_11"),
    proyecto12Img = document.querySelector("#proyecto-div_12"),
    proyecto13Img = document.querySelector("#proyecto-div_13"),
    proyecto14Img = document.querySelector("#proyecto-div_14"),
    proyecto15Img = document.querySelector("#proyecto-div_15");
    
    proyecto1Img.addEventListener("click", e => activeProyect1())
    proyecto2Img.addEventListener("click", e => activeProyect2())
    proyecto3Img.addEventListener("click", e => activeProyect3())
    proyecto4Img.addEventListener("click", e => activeProyect4())
    proyecto5Img.addEventListener("click", e => activeProyect5())
    proyecto6Img.addEventListener("click", e => activeProyect6())
    proyecto7Img.addEventListener("click", e => activeProyect7())
    proyecto8Img.addEventListener("click", e => activeProyect8())
    proyecto9Img.addEventListener("click", e => activeProyect9())
    proyecto10Img.addEventListener("click", e => activeProyect10())
    proyecto11Img.addEventListener("click", e => activeProyect11())
    proyecto12Img.addEventListener("click", e => activeProyect12())
    proyecto13Img.addEventListener("click", e => activeProyect13())
    proyecto14Img.addEventListener("click", e => activeProyect14())
    proyecto15Img.addEventListener("click", e => activeProyect15())
    
    function activeProyect1() {
        proyect1.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect1.onclick = function (e) {
            if (e.target === proyect1) {
                proyect1.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }
    function activeProyect2() {
        proyect2.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect2.onclick = function (e) {
            if (e.target === proyect2) {
                proyect2.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }
    

    function activeProyect3() {
        proyect3.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect3.onclick = function (e) {
            if (e.target === proyect3) {
                proyect3.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }
    
    function activeProyect4() {
        proyect4.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect4.onclick = function (e) {
            if (e.target === proyect4) {
                proyect4.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }
    
    function activeProyect5() {
        proyect5.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect5.onclick = function (e) {
            if (e.target === proyect5) {
                proyect5.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }
    
    function activeProyect6() {
        proyect6.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect6.onclick = function (e) {
            if (e.target === proyect6) {
                proyect6.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect7() {
        proyect7.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect7.onclick = function (e) {
            if (e.target === proyect7) {
                proyect7.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect8() {
        proyect8.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect8.onclick = function (e) {
            if (e.target === proyect8) {
                proyect8.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect9() {
        proyect9.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect9.onclick = function (e) {
            if (e.target === proyect9) {
                proyect9.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect10() {
        proyect10.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect10.onclick = function (e) {
            if (e.target === proyect10) {
                proyect10.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect11() {
        proyect11.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect11.onclick = function (e) {
            if (e.target === proyect11) {
                proyect11.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect12() {
        proyect12.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect12.onclick = function (e) {
            if (e.target === proyect12) {
                proyect12.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect13() {
        proyect13.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect13.onclick = function (e) {
            if (e.target === proyect13) {
                proyect13.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect14() {
        proyect14.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect14.onclick = function (e) {
            if (e.target === proyect14) {
                proyect14.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

    function activeProyect15() {
        proyect15.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        proyect15.onclick = function (e) {
            if (e.target === proyect15) {
                proyect15.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }
        };
    }

//botones popups

const popupPDF = document.querySelector(".popup-pdf"),
    btnMIC = document.querySelector(".btn-mic"),
    popupDiario = document.querySelector(".popup-diario"),
    popupVideo = document.querySelector(".popup-video"),
    btnVideo = document.querySelector(".btn-video"),
    btnDiario = document.querySelector(".btn-diario");

    btnMIC.addEventListener("click", e => activePopup1())
    btnDiario.addEventListener("click", e => activePopup2())
    btnVideo.addEventListener("click", e => activePopup3())


    function activePopup3() {
        popupVideo.style.display = 'flex';
        document.body.classList.add('no-scroll');
    
        popupVideo.onclick = function () {
                popupVideo.style.display = 'none';
                document.body.classList.remove('no-scroll');
            
        };

    }
