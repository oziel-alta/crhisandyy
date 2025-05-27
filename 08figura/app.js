var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var color1 = document.getElementById("colorFondo1");
var color2 = document.getElementById("colorFondo2");
var radius = document.getElementById("radius");
var borde = document.getElementById("borde");
var colorBorde = document.getElementById("colorBorde");

var figura = document.getElementById("figura");

ancho.oninput = crearFigura;
alto.oninput = crearFigura;
color1.onchange = crearFigura;
color2.onchange = crearFigura;
radius.oninput = crearFigura;
borde.oninput = crearFigura;
colorBorde.oninput = crearFigura;

function crearFigura() {
    let anchoFigura = parseInt(ancho.value) || 0;
    let altoFigura = parseInt(alto.value) || 0;
    let rad = parseInt(radius.value) || 0;
    let b = parseInt(borde.value) || 0;
    let colorFondo1 = color1.value;
    let colorFondo2 = color2.value;
    let colorB = colorBorde.value;

    // Actualizar los valores en la UI
    document.getElementById("vancho").textContent = anchoFigura;
    document.getElementById("valto").textContent = altoFigura;
    document.getElementById("vradius").textContent = rad;
    document.getElementById("vborde").textContent = b;

    // Aplicar estilos a la figura
    figura.style.width = anchoFigura + "px";
    figura.style.height = altoFigura + "px";
    figura.style.background = `radial-gradient(circle, ${colorFondo1} 0%, ${colorFondo2} 100%)`;
    figura.style.borderRadius = rad + "%";
    figura.style.borderWidth = b + "px";
    figura.style.borderStyle = "solid";
    figura.style.borderColor = colorB;
}
