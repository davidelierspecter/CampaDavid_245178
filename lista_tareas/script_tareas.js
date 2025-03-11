
const boton = document.getElementById("agregar"); 

let tareas = [];

boton.onclick = function() {
	agregarTarea();
}



function agregarTarea() {
    let campo = document.getElementById("tarea");
    let tarea = campo.value;
    
    if (tarea === "") {
        console.log("Está vacío");
    } else {
        let lista = document.getElementById("lista_tareas");
        tareas.push(tarea);
        let li = document.createElement("li");
        
        li.innerHTML = tarea;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger", "ms-2");
        
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "Editar";
        botonEditar.classList.add("btn", "btn-warning", "ms-2");
        
        botonEliminar.onclick = function () {
            lista.removeChild(li);
            let index = tareas.indexOf(tarea);
            if (index > -1) {
                tareas.splice(index, 1);
            }
        };
        
        botonEditar.onclick = function () {
            let nuevaTarea = prompt("Edita la tarea:", tarea);
            if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
                let index = tareas.indexOf(tarea);
                if (index > -1) {
                    tareas[index] = nuevaTarea;
                }
                tarea = nuevaTarea;
                li.firstChild.textContent = nuevaTarea;
            }
        };
        
        li.appendChild(botonEditar);
        li.appendChild(botonEliminar);
        
        lista.appendChild(li);
    }
}