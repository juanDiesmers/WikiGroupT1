// formuVerificacion.js

function validarFormulario() {
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var descripcion = document.getElementById("descripcion");
    var semestre = document.getElementById("semestre");
    var edad = document.getElementById("edad");

    var mensajeErrorNombres = document.getElementById("errorNombres");
    var mensajeErrorApellidos = document.getElementById("errorApellidos");
    var mensajeErrorCorreo = document.getElementById("errorCorreo");
    var mensajeErrorDescripcion = document.getElementById("errorDescripcion");
    var mensajeErrorSemestre = document.getElementById("errorSemestre");
    var mensajeErrorEdad = document.getElementById("errorEdad");

    var mensajeError = "";

    if (nombres.value === "" || nombres.value.length > 100) {
        nombres.style.borderColor = "red";
        mensajeErrorNombres.innerHTML += "Nombres: Obligatorio, máximo 100 caracteres.<br>";
    } else {
        nombres.style.borderColor = "";
    }

    if (apellidos.value === "" || apellidos.value.length > 100) {
        apellidos.style.borderColor = "red";
        mensajeError += "Apellidos: Obligatorio, máximo 100 caracteres.<br>";
    } else {
        apellidos.style.borderColor = "";
    }

    if (correo.value === "" || correo.value.length > 100 || !correo.value.includes('@') || correo.value.split('@')[1].indexOf('.') === -1 || correo.value.includes(' ') || /[áéíóúñÁÉÍÓÚ]/.test(correo.value)) {
        correo.style.borderColor = "red";
        mensajeError += "Correo: Obligatorio, máximo 100 caracteres, formato incorrecto.<br>";
    } else {
        correo.style.borderColor = "";
    }

    if (semestre.value === "" || semestre.value < 0 || semestre.value > 16) {
        semestre.style.borderColor = "red";
        mensajeError += "Semestre: Debe ser un número entre 0 y 16.<br>";
    } else {
        semestre.style.borderColor = "";
    }

    if (descripcion.value === "") {
        descripcion.style.borderColor = "red";
        mensajeError += "Descripción: Obligatorio.<br>";
    } else {
        descripcion.style.borderColor = "";
    }

    if (edad.value === "" || isNaN(edad.value) || edad.value < 0 || edad.value >= 100) {
        edad.style.borderColor = "red";
        mensajeError += "Edad: Debe ser un número entero entre 0 y 99.<br>";
    } else {
        edad.style.borderColor = "";
    }

    var mensajeErrorDiv = document.getElementById("mensajeError");
    mensajeErrorDiv.innerHTML = mensajeError;

    // Si no hay errores, enviar los datos al controlador
    if (!mensajeError) {
        enviarDatos();
    }
}

function enviarDatos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var descripcion = document.getElementById("descripcion").value;
    var semestre = document.getElementById("semestre").value;
    var edad = document.getElementById("edad").value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombres: nombres,
            apellidos: apellidos,
            correo: correo,
            descripcion: descripcion,
            semestre: semestre,
            edad: edad
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
