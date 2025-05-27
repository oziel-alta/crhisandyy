var cantidad = document.querySelector('#cantidad')
var de = document.querySelector('#d1')
var a = document.querySelector('#d2')

cantidad.oninput = () => { convertir() }
de.onchange = () => { convertir() }
a.onchange = () => { convertir() }

const convertir = () => {

    let c = parseFloat(cantidad.value)
   document.querySelector('#vcantidad').innerHTML = c
    res.innerHTML = "<img src='loading.gif' width='200px' height='200px' class='m-auto'> "
    setTimeout(() => {
        
        let resultado = 0
        let d1 = de.value
        let d2 = a.value

        if(d1 === d2) {
            resultado = c
        } else if(d1 === "C" && d2 === "F") {
            resultado = (c * 9/5) + 32
        } else if(d1 === "C" && d2 === "K") {
            resultado = c + 273.15
        } else if(d1 === "F" && d2 === "C") {
            resultado = (c - 32) * 5/9
        } else if(d1 === "F" && d2 === "K") {
            resultado = ((c - 32) * 5/9) + 273.15
        } else if(d1 === "K" && d2 === "C") {
            resultado = c - 273.15
        } else if(d1 === "K" && d2 === "F") {
            resultado = ((c - 273.15) * 9/5) + 32
        } else {
            resultado = c
        }

        document.querySelector('#res').innerHTML = `${c}°${d1} <br> son <br> ${resultado.toFixed(2)}°${d2}`
    }, 300)
}

convertir();