let contador

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const servicio = document.getElementById("servicio").value;

    const nameRegex = /^[A-Za-zÀ-ÿ\s]{2,}$/;
    const edadRegex = /^([1-9][0-9]?|1[01][0-9]|120)$/; // 1-120
    const ciudadRegex = /^[A-Za-zÀ-ÿ\s]{2,}$/;
    const telefonoRegex = /^\+?[0-9\s\-]{7,15}$/;
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = [];

    if (!nameRegex.test(nombre)) errors.push('Nombre inválido');
    if (!nameRegex.test(apellidos)) errors.push('Apellidos inválidos');
    if (!edadRegex.test(edad)) errors.push('Edad inválida');
    if (!ciudadRegex.test(ciudad)) errors.push('Ciudad inválida');
    if (!telefonoRegex.test(telefono)) errors.push('Teléfono inválido');
    if (!correoRegex.test(correo)) errors.push('Correo inválido');
    if (!servicio) errors.push('Seleccione un tipo de servicio');

    if (errors.length) {
        alert('Errores de validación:\n- ' + errors.join('\n- '));
        return false;
    }

    const modalEl = document.getElementById('registroModal');
    if (modalEl && window.bootstrap) {
        const registroModal = new bootstrap.Modal(modalEl);
        registroModal.show();
    } else {
        alert('Registro exitoso');
    }

    document.getElementById('formulario').reset();
    return true;
}

function modooscuro() {
    document.body.classList.tangle("dark")
    

}
document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark") 
})