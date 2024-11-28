// Función para enviar el formulario
function enviarFormulario(event) {
    event.preventDefault(); // Evita el envío real del formulario
    const nombre = document.getElementById("nombre").value;
    const calificacion = document.getElementById("calificacion").value;
    const mensaje = document.getElementById("mensaje").value;
    const remitente = document.getElementById("remitente").value;

    if (nombre && calificacion && mensaje && remitente) {
        alert(`Formulario enviado correctamente por ${remitente}`);
        // Aquí se simula el envío por correo
        console.log(`Enviado a correo: ${remitente}
Nombre: ${nombre}
Calificación: ${calificacion}
Mensaje: ${mensaje}`);
        document.getElementById("formulario").reset(); // Limpia el formulario
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("formulario").reset();
    alert("Formulario limpiado.");
}
