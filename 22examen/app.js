
const respuestasCorrectas = {
    "1er": "1c",  // 11 jugadores
    "2do": "2d",  // Brasil
    "3er": "3b",  // 90 minutos
    "4to": "4d",  // Rusia
    "5to": "5c",  // Real Madrid
    "6to": "6c",  // Messi
    "7mo": "7b",  // 1930
    "8vo": "8c",  // Federación Internacional de Fútbol Asociación
    "9no": "9c",  // Manos
    "10mo": "10c" // Árbitro central
};

document.getElementById("btnVali").addEventListener("click", function () {
    let aciertos = 0;

    for (let id in respuestasCorrectas) {
        const select = document.getElementById(id);
        if (select && select.value === respuestasCorrectas[id]) {
            aciertos++;
        }
    }

    Swal.fire({
        title: 'Resultado',
        text: `Obtuviste ${aciertos} de 10 respuestas correctas.`,
        icon: aciertos >= 6 ? 'success' : 'error',
        confirmButtonText: 'Aceptar'
    });
});

function guardarAlumno() {
    // Reinicia todos los selects
    const selects = document.querySelectorAll("select");
    selects.forEach(select => select.selectedIndex = 0);

    Swal.fire({
        title: 'Formulario reseteado',
        text: 'Puedes volver a comenzar.',
        icon: 'info',
        confirmButtonText: 'Ok'
    });
}
