var producto = document.getElementById("producto");
var cantidad = document.getElementById("cantidad");
var enganche = document.getElementById("enganche");
var meses = 6;

producto.onchange = () => { credito(); }
cantidad.oninput = () => { credito(); }
enganche.oninput = () => { credito(); }

document.getElementById("p1").onchange = () => { meses = 6; credito(); }
document.getElementById("p2").onchange = () => { meses = 12; credito(); }
document.getElementById("p3").onchange = () => { meses = 18; credito(); }
document.getElementById("p4").onchange = () => { meses = 24; credito(); }

var productos = [18000, 10000, 15000, 7000, 27000, 20000, 20000, 30000, 27000, 120000];
var imgProductos = ["iphone.avif", "nintendo.jpg", "aipad.avif", "play.avif", "pantalla.avif", "estufa.avif", "refri.jpg", "lavadora.jpg", "sillon.avif", "moto.avif"];

const aMoneda = (valor) => {
  valor = parseFloat(valor);
  return "$" + new Intl.NumberFormat('es-MX').format(valor.toFixed(2));
}

const credito = () => {
  if (producto.selectedIndex <= 0) return;

  let porcentaje = 0;
  let c = parseFloat(cantidad.value);
  let e = parseFloat(enganche.value);
  document.getElementById("vcantidad").textContent = c;

  let pos = producto.selectedIndex - 1;
  let precioContado = c * productos[pos];
  document.getElementById("precio").textContent = `${aMoneda(precioContado)}`;
  document.getElementById('img').src = `img/${imgProductos[pos]}`;

  let plazo = document.getElementsByName("plazo");
  plazo.forEach((p) => {
    if (p.checked) {
      porcentaje = parseFloat(p.value);
    }
  });

  if (porcentaje === 0) return;

  let precioCredito = (precioContado * porcentaje) - e;
  let abonoMensual = (precioCredito / meses).toFixed(2);

  document.getElementById('desglose').innerHTML = `
    <h4>PRECIO DE CONTADO ${aMoneda(precioContado)}</h4>
    <h4>PRECIO CREDITO ${aMoneda(precioCredito)}</h4>
    <h4>ABONO MENSUAL ${aMoneda(abonoMensual)}</h4>
  `;
}


document.getElementById("btnReset").onclick = () => {
  producto.selectedIndex = 0;
  cantidad.value = 1;
  enganche.value = 0;
  document.getElementById("vcantidad").textContent = "1";
  document.getElementById("p1").checked = true;
  meses = 6;

  document.getElementById("precio").textContent = "PRECIO";
  document.getElementById("img").src = "img/iphone.avif";
  document.getElementById("desglose").innerHTML = "DESGLOSE";

  Swal.fire({
    icon: 'success',
    title: 'SE REINICIO CORRECTAMENTE',
    showConfirmButton: false,
    timer: 1500
  });

  credito();
};
