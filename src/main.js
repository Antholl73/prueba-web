// src/main.js
import scrollama from 'scrollama';

// ========================================================
// 1. DATOS HISTÓRICOS DE CADA PASO
// ========================================================
// En lugar de mezclar datos con lógica, creamos un objeto
// que defina qué debe mostrar la pantalla en cada fase.
const stepData = {
    1: {
        title: "1939: Invasión de Polonia",
        description: "Comienza la Blitzkrieg. La infantería mecanizada y la Luftwaffe destruyen las líneas defensivas en semanas.",
        color: "#8b0000" // Rojo oscuro militar
    },
    2: {
        title: "1940: La Caída de Francia",
        description: "Las Ardenas son flanqueadas. Las fuerzas aliadas son evacuadas en Dunkerque y París queda bajo control nazi.",
        color: "#2f4f4f" // Gris pizarra
    },
    3: {
        title: "1941: Operación Barbarroja",
        description: "Tres millones de soldados del Eje invaden la URSS a lo largo de un frente de casi 3.000 kilómetros.",
        color: "#800020" // Borgoña / Sangre
    },
    4: {
        title: "1941: Pearl Harbor",
        description: "El ataque sorpresa en el Pacífico despierta al gigante industrial: Estados Unidos entra formalmente en la contienda.",
        color: "#1c3b57" // Azul marino naval
    }
};

// ========================================================
// 2. ELEMENTOS DEL DOM
// ========================================================
const graphicBox = document.getElementById('graphic-content');
const stepElements = document.querySelectorAll('.step');

// ========================================================
// 3. INICIALIZACIÓN DE SCROLLAMA
// ========================================================
const scroller = scrollama();

function initScrollytelling() {
    scroller
        .setup({
            step: '#scrolly article .step', // Qué elementos vigilar
            offset: 0.5,                    // Punto gatillo: a la mitad exacta de la pantalla (50%)
            debug: true                     // ¡Línea de calibración visual! La usaremos para aprender
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

    // Si el usuario redimensiona la ventana, recalculamos las posiciones
    window.addEventListener('resize', scroller.resize);
}

// ========================================================
// 4. MANEJADORES DE EVENTOS (HANDLERS)
// ========================================================

/**
 * Se ejecuta cuando una tarjeta (.step) cruza la línea del 50% de la pantalla
 * @param {Object} response - Contiene el elemento, el índice y la dirección ('down' o 'up')
 */
function handleStepEnter(response) {
    const stepNumber = response.element.dataset.step;
    const currentInfo = stepData[stepNumber];

    // 1. Resaltamos la tarjeta activa y apagamos las demás
    stepElements.forEach(el => el.classList.remove('is-active'));
    response.element.classList.add('is-active');

    // 2. Si tenemos datos para este paso, actualizamos la capa visual
    if (currentInfo) {
        graphicBox.style.borderColor = currentInfo.color;
        graphicBox.innerHTML = `
      <div style="text-align: center; padding: 2rem; animation: fadeIn 0.4s ease;">
        <span style="color: ${currentInfo.color}; font-weight: 700; letter-spacing: 2px;">PASO ${stepNumber} ACTIVO</span>
        <h2 style="font-size: 2rem; margin: 1rem 0;">${currentInfo.title}</h2>
        <p style="max-width: 600px; color: #a0a5b1;">${currentInfo.description}</p>
      </div>
    `;
    }

    console.log(`Entrando al paso ${stepNumber} hacia: ${response.direction}`);
}

/**
 * Se ejecuta cuando una tarjeta abandona el punto de activación
 */
function handleStepExit(response) {
    console.log(`Saliendo del paso ${response.element.dataset.step} hacia: ${response.direction}`);
}

// Arrancamos la interacción
initScrollytelling();