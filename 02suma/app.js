const Suma=()=>{
    try{
        let num1=parseInt(prompt("numero 1:  "));
        let num2=parseInt(prompt("numero 2:  "));
        let suma=num1+num2;
        alert("la suma es: "+suma);
    }catch(e){
        alert("debes introducir valores numericos");
    }
}
const Resta=()=>{
    try{
        let num1=parseInt(prompt("numero 1:  "));
        let num2=parseInt(prompt("numero 2:  "));
        let resta=num1-num2;
        alert("la resta es: "+resta);
    }catch(e){
        alert("debes introducir valores numericos");
    }
}
const Multiplicacion=()=>{
    try{
        let num1=parseInt(prompt("numero 1:  "));
        let num2=parseInt(prompt("numero 2:  "));
        let Multiplicacion=num1*num2;
        alert("la multiplicacion es: "+Multiplicacion);
    }catch(e){
        alert("debes introducir valores numericos");
    }
}
const Division=()=>{
    try{
        let num1=parseInt(prompt("numero 1:  "));
        let num2=parseInt(prompt("numero 2:  "));
        let Division=num1/num2;
        alert("la division es: "+Division);
    }catch(e){
        alert("debes introducir valores numericos");
    }
}