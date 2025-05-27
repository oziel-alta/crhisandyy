texto=document.querySelector('#texto')
traduccion=document.querySelector('#traduccion')

texto.onkeyup=()=>{
    var frase='<p>'+texto.value+'</p>';

    frase=frase.replaceAll('a','<b>a</b>f<b>a</b>');
    frase=frase.replaceAll('e','<c>e</c>f<c>e</c>');
    frase=frase.replaceAll('i','<h>i</h>f<h>i</h>');
    frase=frase.replaceAll('o','<d>o</d>f<d>o</d>');
    frase=frase.replaceAll('u','<l>u</l>f<l>u</l>');

    traduccion.innerHTML=frase;
}