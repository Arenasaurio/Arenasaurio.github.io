document.addEventListener("DOMContentLoaded", function () {
    const mensaje = "Hola, soy César Eduardo Arenas Sánchez";
    const textEl = document.getElementById("intro-text");
    let i = 0;
    let repeticiones = 0;
    const maxRepeticiones = 5;
    let escribiendo = true;

    function animar() {
        if (escribiendo) {
            // Escribir
            if (i < mensaje.length) {
                textEl.textContent += mensaje.charAt(i);
                i++;
                setTimeout(animar, 80);
            } else {
                // Terminó de escribir
                repeticiones++;
                
                // Si ya completó todas las repeticiones, dejar el texto y terminar
                if (repeticiones >= maxRepeticiones) {
                    return; // Termina aquí, deja el texto visible
                }
                
                // Si no, continúa con el borrado
                escribiendo = false;
                setTimeout(animar, 1500); // Pausa antes de borrar
            }
        } else {
            // Borrar
            if (i > 0) {
                textEl.textContent = mensaje.substring(0, i - 1);
                i--;
                setTimeout(animar, 40); // Borrar más rápido
            } else {
                // Terminó de borrar, empezar a escribir de nuevo
                escribiendo = true;
                setTimeout(animar, 500);
            }
        }
    }

    animar();
});