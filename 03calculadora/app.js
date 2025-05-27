var btnSuma=document.querySelector('#btnSuma');
var btnResta=document.querySelector('#btnResta');
var btnMulti=document.querySelector('#btnMulti');
var btnDivi=document.querySelector('#btnDivi');

btnSuma.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1+num2;
    document.querySelector('#result').innerHTML=resultado;
}
btnResta.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1-num2;
    document.querySelector('#result').innerHTML=resultado;
}
btnMulti.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    var resultado=num1*num2;
    document.querySelector('#result').innerHTML=resultado;
}
btnDivi.onclick=()=>{
    var num1=parseFloat(document.querySelector('#num1').value);
    var num2=parseFloat(document.querySelector('#num2').value);
    if(num2!=0){
        var resultado=num1/num2;
        document.querySelector('#result').innerHTML=resultado.toFixed(2);
    }else{
        document.querySelector('#result').innerHTML="No se puede dividir por cero";
    }
}
