let formulario = document.getElementById('formulario');

formulario.addEventListener("submit", function(e){
    let pelicula = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        director: document.getElementById("director").value,
        genero: document.getElementById("genero").value
    };
    agregarTabla(pelicula);
    e.target.reset();
});

function agregarTabla(pelicula){
    let cuerpo_tabla = document.getElementById("cuerpo_tabla");
    let fila = document.createElement("td");

    for (let key in pelicula){
        let campo = document.createElement("td");
        campo.textContent = pelicula[key];
        fila.appendChild(campo);
    }

    cuerpo_tabla.appendChild(fila);
}
