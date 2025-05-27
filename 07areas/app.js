var divCuadro=document.querySelector('#cuadro');
var divRectangulo=document.querySelector('#rectangulo');
var divTriangulo=document.querySelector('#triangulo');
var divCirculo=document.querySelector('#circulo');
var divRombo=document.querySelector('#rombo');
var divTrapecio = document.querySelector('#trapecio');



divRectangulo.style.display="none";
divTriangulo.style.display="none";
divCirculo.style.display="none";
divRombo.style.display="none";
divTrapecio.style.display = "none";


var btnCuadro = document.querySelector('#btnCuadro');
var btnRectangulo = document.querySelector('#btnRec');
var btnTri = document.querySelector('#btnTri');
var btnCirculo = document.querySelector('#btnCirculo');
var btnRombo = document.querySelector('#btnRombo');
var btnTrapecio = document.querySelector('#btnTrapecio');



btnCuadro.onclick=()=>{
    divCuadro.style.display="block";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="none";
    divTrapecio.style.display="none";

}
btnRectangulo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="block";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="none";
    divTrapecio.style.display="none";

}
btnTri.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="block";
    divCirculo.style.display="none";
    divRombo.style.display="none";
    divTrapecio.style.display="none";

}
btnCirculo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="block";
    divRombo.style.display="none";
    divTrapecio.style.display="none";

    
}

btnRombo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="block";
    divTrapecio.style.display="none";


}
btnTrapecio.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="none";
    divTrapecio.style.display="block";


}



//CALCULO DE AREA DE CUADRO
document.querySelector('#lado').oninput=()=>{
    let lado=parseInt(document.querySelector('#lado').value);
    document.querySelector('#vlado').innerHTML=lado;
    document.querySelector('#areacuadro').innerHTML=""+(lado*lado)+" m<sup>2</sup>";
}


//CALCULO DE AREA DEL RECTANGULO
var baseRec=document.querySelector('#baserec');
var alturaRec=document.querySelector('#alturarec');

baseRec.oninput=()=>{areaRectangulo()}
alturaRec.oninput=()=>{areaRectangulo()}

const areaRectangulo=()=>{
    let base=parseInt(document.querySelector('#baserec').value);
    let altura=parseInt(document.querySelector('#alturarec').value);
    document.querySelector('#vbaserec').innerHTML=base
    document.querySelector('#valturarec').innerHTML=altura;
    document.querySelector('#arearec').innerHTML=""+(base*altura)+" m<sup>2</sup>";
}

//CALCULO DE AREA DEL TRIANGULO
var baseTri=document.querySelector('#basetri');
var alturaTri=document.querySelector('#alturatri');

baseTri.oninput=()=>{areaTriangulo()}
alturaTri.oninput=()=>{areaTriangulo()}

const areaTriangulo=()=>{
    let base=parseInt(document.querySelector('#basetri').value);
    let altura=parseInt(document.querySelector('#alturatri').value);
    document.querySelector('#vbasetri').innerHTML=base
    document.querySelector('#valturatri').innerHTML=altura;
    document.querySelector('#areatri').innerHTML=""+((base*altura)/2).toFixed(2)+" m<sup>2</sup>";
}

//CALCULO DE AREA DE CIRCULO
document.querySelector('#radio').oninput=()=>{
    let radio=parseInt(document.querySelector('#radio').value);
    document.querySelector('#vradio').innerHTML=radio;
    document.querySelector('#areacirculo').innerHTML=""+(radio*radio*Math.PI).toFixed(2)+" m<sup>2</sup>";
}
//CALCULO DE AREA DE ROMBO
var diagonalMayor = document.querySelector('#diagonalMayor');
var diagonalMenor = document.querySelector('#diagonalMenor');

diagonalMayor.oninput=()=>{areaRombo()}
diagonalMenor.oninput=()=>{areaRombo()}

const areaRombo=()=>{
    let D = parseInt(document.querySelector('#diagonalMayor').value);
    let d = parseInt(document.querySelector('#diagonalMenor').value);
    document.querySelector('#vdiagonalMayor').innerHTML=D;
    document.querySelector('#vdiagonalMenor').innerHTML=d;
    document.querySelector('#arearombo').innerHTML=""+((D*d)/2).toFixed(2)+" m<sup>2</sup>";
}

   // CALCULO DE AREA DEL TRAPECIO
var baseMayor = document.querySelector('#baseMayor');
var baseMenor = document.querySelector('#baseMenor');
var alturaTrapecio = document.querySelector('#alturaTrapecio');

baseMayor.oninput = () => { areaTrapecio(); }
baseMenor.oninput = () => { areaTrapecio(); }
alturaTrapecio.oninput = () => { areaTrapecio(); }

const areaTrapecio = () => {
    let B = parseInt(baseMayor.value);
    let b = parseInt(baseMenor.value);
    let h = parseInt(alturaTrapecio.value);

    document.querySelector('#vbaseMayor').innerHTML = B;
    document.querySelector('#vbaseMenor').innerHTML = b;
    document.querySelector('#valturaTrapecio').innerHTML = h;
    document.querySelector('#areatrapecio').innerHTML = "" + (((B + b) * h) / 2).toFixed(2) + " m<sup>2</sup>";
}
