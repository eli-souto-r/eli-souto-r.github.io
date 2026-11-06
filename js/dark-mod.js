
const switchButton = document.getElementById('switch');
const luna = document.getElementById('luna');
const sol = document.getElementById('sol');

const elementosDark = [
    document.body,
    document.getElementById('header'),
    document.getElementById('logo'),
    document.getElementById('logo1'),
    document.getElementById('block--contact'),
    document.getElementById('redes--footer'),
    document.getElementById('redes'),
    document.getElementById('cont--abrir'),
    switchButton
];

const preferenciaSistema = window.matchMedia(
    '(prefers-color-scheme: dark)'
);

// Cambia el tema visual

function aplicarTema(oscuro) {

    elementosDark.forEach(elemento => {
        if (elemento) {
            elemento.classList.toggle('dark', oscuro);
        }
    });

    // En modo oscuro aparece el sol
    // En modo claro aparece la luna

    if (sol) {
        sol.classList.toggle('active', oscuro);
    }

    if (luna) {
        luna.classList.toggle('active', !oscuro);
    }
}


// Detecta el tema según la preferencia del usuario
function temaAutomatico() {
    aplicarTema(preferenciaSistema.matches);
}

// Inicialmente sigue el sistema
let modo = 'auto';

temaAutomatico();

// Botón: alterna entre claro y oscuro manualmente
switchButton.addEventListener('click', () => {

    if (modo === 'auto') {
        modo = preferenciaSistema.matches ? 'light' : 'dark';
    } else {
        modo = modo === 'dark' ? 'light' : 'dark';
    }

    aplicarTema(modo === 'dark');
});

// Si está en automático, escucha los cambios del dispositivo
preferenciaSistema.addEventListener('change', evento => {
    if (modo === 'auto') {
        aplicarTema(evento.matches);
    }
});
