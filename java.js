
function abrir(ventanaId, contenedorId) {
    document.getElementById(ventanaId).style.display = "block";
    document.getElementById(contenedorId).classList.add("blur");
}

function cerrar(ventanaId, contenedorId) {
    document.getElementById(ventanaId).style.display = "none";
    document.getElementById(contenedorId).classList.remove("blur");
}

