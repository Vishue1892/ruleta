document.addEventListener("DOMContentLoaded", function() {
    const wheel = document.getElementById("roulette");
    const resultContainer = document.querySelector(".result-container");
    const infoContainer = document.querySelector(".info-container");
    const arrowIndicator = document.createElement("div");

    // Detalles de la planificación
    const planningDetails = {
        1: "Planificación Reactiva (Reactivo):<br>\
            - Enfoque en la corrección de errores pasados.<br>\
            - Se centra en solucionar problemas a medida que surgen.<br>\
            - No se anticipa ni se planifica proactivamente.<br>\
            - Requiere respuestas rápidas y eficientes ante situaciones imprevistas.<br>\
            - Se basa en la experiencia pasada para abordar problemas similares.",
        2: "Planificación Proactiva (Proactivo):<br>\
            - Busca prevenir problemas antes de que ocurran.<br>\
            - Se enfoca en oportunidades y mejoras antes de que se conviertan en problemas.<br>\
            - Implica la identificación de posibles desafíos futuros y la toma de medidas para evitarlos.<br>\
            - Requiere un enfoque a largo plazo y una mentalidad de mejora continua.<br>\
            - Puede incluir la implementación de estrategias preventivas y la optimización de procesos.",
        3: "Planificación Interactiva (Interactivo):<br>\
            - Combina elementos de las dos primeras categorías.<br>\
            - Busca un enfoque equilibrado que se adapte a las circunstancias específicas.<br>\
            - Implica la capacidad de ajustar planes según sea necesario en respuesta a cambios y desafíos.<br>\
            - Se basa en la flexibilidad y la capacidad de adaptación.<br>\
            - Puede incluir la revisión periódica de objetivos y la toma de decisiones dinámica.",
        4: "Planificación Inactiva (Proactiva e Interactiva):<br>\
            - Reconoce que la planificación puede ser tanto proactiva como interactiva en diferentes situaciones.<br>\
            - Combina la prevención de problemas y la capacidad de respuesta a cambios.<br>\
            - Busca crear un entorno propicio para soluciones emergentes.<br>\
            - Requiere una comprensión profunda del sistema y la capacidad de influir en su evolución.<br>\
            - Puede involucrar la creación de condiciones favorables para la innovación y la autoorganización."
    };

    function spinWheel() {
        // Deshabilita el clic en la ruleta mientras gira
        wheel.style.pointerEvents = "none";

        // Simula el giro de la ruleta
        const spins = 4;  // Número de vueltas
        const duration = 3;  // Duración en segundos
        const degrees = 360 * spins + Math.floor(Math.random() * 360); // Agrega un valor aleatorio al ángulo
        wheel.style.transition = `transform ${duration}s cubic-bezier(0.4, 2.4, 0.2, 1)`;
        wheel.style.transform = `rotate(${degrees}deg)`;

        // Muestra la flecha indicadora
        arrowIndicator.classList.add("arrow-indicator");
        wheel.appendChild(arrowIndicator);

        // Genera un número aleatorio después de la duración del giro
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 4) + 1;
            showResult(randomNumber);
        }, duration * 1000);
    }

    function showResult(number) {
        // Muestra los detalles debajo de la ruleta
        resultContainer.innerHTML = planningDetails[number];
        resultContainer.classList.add("show");

        // Muestra el enlace de detalles después de un segundo
        setTimeout(function() {
            infoContainer.classList.add("show");
            // Cambia el texto y el color de la flecha según lo que cayó
            arrowIndicator.style.borderBottomColor = getArrowColor(number);
            arrowIndicator.innerHTML = getArrowText(number);
            // Habilita el clic en la ruleta nuevamente
            wheel.style.pointerEvents = "auto";
        }, 1000);
    }

    function getArrowText(number) {
        switch (number) {
            case 1:
                return "Reactivo";
            case 2:
                return "Proactivo";
            case 3:
                return "Interactivo";
            case 4:
                return "Proactiva e Interactiva";
            default:
                return "";
        }
    }

    function getArrowColor(number) {
        switch (number) {
            case 1:
                return "#ff5733";
            case 2:
                return "#33ff57";
            case 3:
                return "#5733ff";
            case 4:
                return "#ffcc33";
            default:
                return "";
        }
    }

    // Agrega un evento de clic a la ruleta
    wheel.addEventListener("click", spinWheel);
});
