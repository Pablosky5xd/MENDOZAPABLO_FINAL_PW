// Función para dar la bienvenida al usuario
function darBienvenida() {
    const nombreUsuario = document.getElementById("nombre-usuario").value;

    if (nombreUsuario.trim() !== "") {
        const mensajeBienvenida = `¡Bienvenido, ${nombreUsuario}!`;
        document.getElementById("mensaje").innerText = mensajeBienvenida;
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
