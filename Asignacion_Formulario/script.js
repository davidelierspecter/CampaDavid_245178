let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
	//Ayuda a que no se actualicen los campos
	e.preventDefault();
	let pelicula = {
		titulo: document.getElementById("titulo").value,
		anio: document.getElementById("anio").value,
		genero: document.getElementById("genero").value,
		director: document.getElementById("director").value
	};

	agregarTabla(pelicula);
	e.target.reset("");
});

function agregarTabla(pelicula){
	let cuerpo_tabla = document.getElementById("cuerpo_tabla");
	let fila = document.createElement("tr");

	for(let key in pelicula){
		let campo = document.createElement("td");

		campo.textContent = pelicula[key];
		fila.appendChild(campo);
	}

    // boton de editar
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("btn", "btn-warning", "me-2");
    botonEditar.onclick = function () {
        editarFila(fila, pelicula);
    };

    // boton de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger");
    botonEliminar.onclick = function () {
        fila.remove();
    };

    let celdaAcciones = document.createElement("td");
    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonEliminar);
    fila.appendChild(celdaAcciones);

    // agregar fila a la tabla
    cuerpo_tabla.appendChild(fila);
}

function editarFila(fila) {
    let celdas = fila.getElementsByTagName("td");

    let nuevoTitulo = prompt("Editar título:", celdas[0].textContent);
    let nuevoAnio = prompt("Editar año:", celdas[1].textContent);
    let nuevoGenero = prompt("Editar género:", celdas[2].textContent);
    let nuevoDirector = prompt("Editar director:", celdas[3].textContent);

    celdas[0].textContent = nuevoTitulo;
    celdas[1].textContent = nuevoAnio;
    celdas[2].textContent = nuevoGenero;
    celdas[3].textContent = nuevoDirector;
    
}



