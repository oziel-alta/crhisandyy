var cargo = document.querySelector('#cargo');
var horas = document.querySelector('#horas');
var antiguedad = document.querySelector('#antiguedad');
var sb = document.querySelector('#sb');
var isr = document.querySelector('#isr');
var cb = document.querySelector('#cb');
var ss = document.querySelector('#ss');
var es = document.querySelector('#es');
var sindi = document.querySelector('#sindi');
var anti = document.querySelector('#anti');
var afo = document.querySelector('#afo');
var tp = document.querySelector('#tp');
var td = document.querySelector('#td');
var sn = document.querySelector('#sn');
var bono = document.querySelector('#bono');
var pension = document.querySelector('#pension');
var sueldodoxhora = 0;

cargo.onchange = calcular;
horas.oninput = calcular;
antiguedad.oninput = calcular;

function calcular() {
    let h = parseFloat(horas.value);
    document.querySelector('#vhoras').innerHTML = h;
    let van = parseFloat(antiguedad.value);
    document.querySelector('#vantiguedad').innerHTML = van;

    switch (cargo.value) {
        case "DIRECTOR": sueldodoxhora = 400; break;
        case "GERENTE": sueldodoxhora = 300; break;
        case "EJECUTIVO": sueldodoxhora = 200; break;
        case "INTENDENTE": sueldodoxhora = 150; break;
    }
    
    let vsb = (h > 40) ? (40 * sueldodoxhora) + ((h - 40) * sueldodoxhora * 2) : h * sueldodoxhora;
    let vcb = vsb * 0.1;
    let ce = vsb * 0.005;
    let ant = van * 150;
    let vbono = vsb * 0.07; // Nueva percepción (Bono)
    let totalp = vsb + vcb + ce + ant + vbono;

    sb.innerHTML = "$ " + vsb.toFixed(2);
    cb.innerHTML = "$ " + vcb.toFixed(2);
    es.innerHTML = "$ " + ce.toFixed(2);
    anti.innerHTML = "$ " + ant.toFixed(2);
    bono.innerHTML = "$ " + vbono.toFixed(2);
    tp.innerHTML = "$ " + totalp.toFixed(2);

    let visr = vsb * 0.16;
    let vss = vsb * 0.04625;
    let vs = vsb * 0.01;
    let vaf = vsb * 0.061;
    let vpension = vsb * 0.03; // Nueva deducción (Pensión)
    let totalld = visr + vs + vaf + vss + vpension;

    isr.innerHTML = "$ " + visr.toFixed(2);
    ss.innerHTML = "$ " + vss.toFixed(2);
    sindi.innerHTML = "$ " + vs.toFixed(2);
    afo.innerHTML = "$ " + vaf.toFixed(2);
    pension.innerHTML = "$ " + vpension.toFixed(2);
    td.innerHTML = "$ " + totalld.toFixed(2);

    let vsn = totalp - totalld;
    sn.innerHTML = "$ " + vsn.toFixed(2);
}