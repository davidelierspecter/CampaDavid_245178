function enviar(){
    let campo_msj = document.getElementById("mensaje");
    let hola = document.querySelector("h1");
    hola.innerHTML = "Hola " + campo_msj.value;    
}
