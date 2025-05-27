
var btnAdd = document.getElementById('btnAdd');
var arrayAlumnos = [];

btnAdd.onclick = () => {
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
    actualizarTabla();
    limpiarCampos();
}

const actualizarTabla = () => {
    let tablaAlumnos = document.getElementById("tablaAlumnos");
    let tablaHTML = '';
    arrayAlumnos.forEach((a, index) => {
        tablaHTML += `
        <tr>
            <td>${a.nombre.toUpperCase()}</td>
            <td>${a.ap.toUpperCase()}</td>
            <td>${a.am.toUpperCase()}</td>
            <td>${a.grupo}</td>
            <td>${a.carrera.toUpperCase()}</td>
            <td><button class="btn btn-danger" onclick="eliminarAlumno(${index})"><i class="bi bi-trash"></i> ELIMINAR</button></td>
            <td><button class="btn btn-warning" onclick="editarAlumno(${index})" data-bs-toggle="modal" data-bs-target="#editAlumnoModal"><i class="bi bi-pencil"></i> EDITAR</button></td>
        </tr>`;
    });
    tablaAlumnos.innerHTML = tablaHTML;
}

const editarAlumno = (index) => {
    let alumno = arrayAlumnos[index];
    document.getElementById("enombre").value = alumno.nombre;
    document.getElementById("eap").value = alumno.ap;
    document.getElementById("eam").value = alumno.am;
    document.getElementById("egrupo").value = alumno.grupo;
    document.getElementById("ecarrera").value = alumno.carrera;
    document.getElementById("index").value = index;
}

const guardarAlumno = () => {
    let nombre = document.getElementById("enombre").value;
    let ap = document.getElementById("eap").value;
    let am = document.getElementById("eam").value;
    let grupo = document.getElementById("egrupo").value;
    let carrera = document.getElementById("ecarrera").value;
    let index = document.getElementById("index").value;

    if (nombre.trim() === '' || ap.trim() === '' || am.trim() === '') {
        Swal.fire({ icon: "error", title: "Oops...", text: "Campos vacíos!!" });
        return;
    }

    let alumno = { nombre, ap, am, grupo, carrera };
    arrayAlumnos[index] = alumno;
    actualizarTabla();
    limpiarCampos();
}

const eliminarAlumno = (index) => {
    const missweet = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-3",
            denyButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    missweet.fire({
        title: "¿Estás seguro de eliminar este alumno?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            arrayAlumnos.splice(index, 1);
            actualizarTabla();
            Swal.fire("Alumno eliminado exitosamente", "", "success");
        }
    });
}

const limpiarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("ap").value = "";
    document.getElementById("am").value = "";
    document.getElementById("grupo").selectedIndex = 0;
    document.getElementById("carrera").selectedIndex = 0;
}
