var filas = document.querySelector('#filas');
var columnas = document.querySelector('#columnas');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var texto = document.querySelector('#contenido');

filas.oninput = () => crearTabla();
columnas.oninput = () => crearTabla();
color1.onchange = () => crearTabla();
color2.onchange = () => crearTabla();
texto.onkeyup = () => crearTabla();

const crearTabla = () => {
    var tabla = document.querySelector('#soylatabla');
    document.querySelector('#vfilas').innerText = filas.value;
    document.querySelector('#vcolumnas').innerText = columnas.value;
    var c1 = color1.value;
    var c2 = color2.value;
    var f = parseInt(filas.value) || 0;
    var c = parseInt(columnas.value) || 0;
    var tablaHTML = "";

    for (var i = 1; i <= f; i++) { // crear las filas de la tabla
        tablaHTML += `<tr style="background: ${i % 2 == 0 ? c1 : c2};">`;
        for (var j = 1; j <= c; j++) { // crear las columnas de la tabla
            tablaHTML += `<td>${texto.value}</td>`;
        }
        tablaHTML += "</tr>";
    }
    
    tabla.innerHTML = tablaHTML;
};
