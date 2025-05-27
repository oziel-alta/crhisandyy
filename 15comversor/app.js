var cantidad=document.querySelector('#cantidad')
var de=document.querySelector('#d1')
var a=document.querySelector('#d2')

cantidad.oninput=()=>{convertir()}
de.oninput=()=>{convertir()}
a.oninput=()=>{convertir()}

const convertir=()=>{
    let c=parseFloat(cantidad.value)
    document.querySelector('#vcantidad').innerHTML=c
    res.innerHTML="<img src='loading.gif' width='200px' height'200px' class='m-auto'>";
    setTimeout(()=>{
    let res=0
    let d1=de.value
    let d2=a.value

    


    if(d1=="USD" && d2=="MXN"){
        res=c*20.52;
    }else if(d1=="USD" && d2=="COP"){
        res=c*4391.84
    }else if(d1=="USD" && d2=="EUR"){
        res=c*0.92
    }else if(d1=="MXN" && d2=="USD"){
        res=c*0.049
    }else if(d1=="MXN" && d2=="COP"){
        res=c*212.39
    }else if(d1=="MXN" && d2=="EUR"){
        res=c*0.045
    }else if(d1=="COP" && d2=="USD"){
        res=c*0.00023
    }else if(d1=="COP" && d2=="MXN"){
        res=c*0.0047
    }else if(d1=="COP" && d2=="EUR"){
        res=c*0.00021
    }else if(d1=="EUR" && d2=="USD"){
        res=c*1.09
    }else if(d1=="EUR" && d2=="MXN"){
        res=c*22.41
    }else if(d1=="EUR" && d2=="COP"){
        res=c*4791.80
    }else{
        res=c
    }

    
    
    document.querySelector('#res').innerHTML=`${c} ${d1} <br>son <br> ${res.toFixed(5)} ${d2}`

    
        
    },300);
}

convertir();