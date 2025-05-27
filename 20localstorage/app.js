// EJEMPLO 1
const guardamensaje=()=>{
    let mjs =document.getElementById("mensaje").value
localStorage.setItem("mensaje",mjs)
}
const borrarmensaje=()=>{
    document.getElementById("mensaje").value=""

}
const recuperarmensaje=()=>{
    let mensaje=localStorage.getItem("mensaje")
    document.getElementById("mensaje").value=mensaje
}

//EJEMPLO 2
const guardar=()=>{
    let key =document.getElementById("key").value
    let value =document.getElementById("value").value

localStorage.setItem(key,value)
}
const borrar=()=>{
    document.getElementById("key").value=""
    document.getElementById("value").value=""

}
const borrarLS=()=>{
    localStorage.clear()

}
const recuperar=()=>{
    let key =document.getElementById("key").value
    let v =localStorage.getItem(key)
console.log(v)
if(v){
    document.getElementById("value").value=v
}else{
    document.getElementById("value").value="NO HAY NADA"
}
localStorage.setItem(key,value)
}
//ejemplo 3
guardar3 = () => {
    let nombre = document.getElementById("nombre").value;
    let ap = document.getElementById("ap").value;
    let am = document.getElementById("am").value;
    let grupo = document.getElementById("grupo").value;
    let carrera = document.getElementById("carrera").value;

    if (nombre.trim() === '' || ap.trim() === '' || am.trim() === '') {
        Swal.fire({ icon: "error", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let alumno = { nombre, ap, am, grupo, carrera };
    arrayAlumnos.push(alumno);

    let key =document.getElementById(alumno).value

localStorage.setItem("alumno",JSON.stringify(alumno));

}

