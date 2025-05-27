var num=document.querySelector('#num');
var vnum=document.querySelector('#vnum');
var res=document.querySelector('#res');

num.oninput=()=>{
    res.innerHTML="<img src='loading.gif' width='200px' height'200px' class='m-auto'>";
    setTimeout(()=>{

    vnum.innerHTML=num.value;
    let n=parseInt(num.value);

    res.innerHTML=" la raiz cuadrada del numero  " +n+ "  es  " +Math.sqrt(n).toFixed(2);    
},1000);
}
