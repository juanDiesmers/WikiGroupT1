// formuVerificacion.js

var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var correo = document.getElementById("correo");
var descripcion = document.getElementById("descripcion");
var semestre = document.getElementById("semestre");
var edad = document.getElementById("edad");

/*var mensajeErrorNombres = document.getElementById("errorNombres");
var mensajeErrorApellidos = document.getElementById("errorApellidos");
var mensajeErrorCorreo = document.getElementById("errorCorreo");
var mensajeErrorDescripcion = document.getElementById("errorDescripcion");
var mensajeErrorSemestre = document.getElementById("errorSemestre");
var mensajeErrorEdad = document.getElementById("errorEdad");*/

const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

var mensajeError = document.getElementById("mensajeError");
var mensajeChar = document.getElementById("numCaracteres");
var enviarBoton = document.getElementById("enviar");

nombres.addEventListener('input', function() {
    mensajeChar.innerHTML = "Cantidad de caracteres: " + nombres.value.length + "<br> Cantidad de caracteres máximo: 100.<br>";
    if (nombres.value === ""){
        nombres.style.borderColor = "red";
        mensajeError.innerHTML = "Nombres: Obligatorio.<br>";
    } else if(nombres.value.length > 100){
        nombres.style.borderColor = "red";
        mensajeError.innerHTML = "Máximo 100 caracteres.<br>";
        nombres.value = nombres.value.slice(0, 100);
        input.disabled = true;
    }else {
        input.disabled = false;
        nombres.style.borderColor = "";
    }
  });

nombres.addEventListener('blur', function() {
    mensajeChar.innerHTML = "";
});


apellidos.addEventListener('input', function() {
    mensajeChar.innerHTML = "Cantidad de caracteres: " + apellidos.value.length + "<br> Cantidad de caracteres máximo: 100.<br>";
    if (apellidos.value === ""){
        apellidos.style.borderColor = "red";
        mensajeError.innerHTML = "Apellidos: Obligatorio.<br>";
    } else if(apellidos.value.length > 100){
        apellidos.style.borderColor = "red";
        mensajeError.innerHTML = "Máximo 100 caracteres.<br>";
        apellidos.value = apellidos.value.slice(0, 100);
        input.disabled = true;
    }else {
        input.disabled = false;
        apellidos.style.borderColor = "";
    }
  });

apellidos.addEventListener('blur', function() {
    mensajeChar.innerHTML = "";
});

  

  correo.addEventListener('input', function() {
    mensajeChar.innerHTML = "Cantidad de caracteres: " + correo.value.length + "<br> Cantidad de caracteres máximo: 100.<br>";
    if (correo.value === "" || regex.test(correo.value) === false){
        correo.style.borderColor = "red";
        mensajeError.innerHTML = "Correo: Obligatorio, formato incorrecto.<br>";
    } else if(correo.value.length > 100){
        mensajeError.innerHTML = "Máximo 100 caracteres.<br>";
        correo.value = correo.value.slice(0, 100);
    } else{
        input.disabled = false;
        correo.style.borderColor = "";
    }
  });
correo.addEventListener('blur', function() {
    mensajeChar.innerHTML = "";
});

  semestre.addEventListener('input', function() {
    if (semestre.value === "" || semestre.value < 0 || semestre.value > 16) {
        semestre.style.borderColor = "red";
        mensajeError.innerHTML = "Obligatorio. Semestre: Debe ser un número entre 0 y 16.<br>";
    } else {
        semestre.style.borderColor = "";
    }
  });

  descripcion.addEventListener('input', function() {
    if (descripcion.value === "") {
        descripcion.style.borderColor = "red";
        mensajeError.innerHTML = "Descripción: Obligatorio.<br>";
    } else {
        descripcion.style.borderColor = "";
    }
  });

  edad.addEventListener('input', function() {
    if (edad.value === "" || isNaN(edad.value) || edad.value < 0 || edad.value >= 100) {
        edad.style.borderColor = "red";
        mensajeError.innerHTML = "Edad: Obligatorio. Debe ser un número entero entre 0 y 99.<br>";
    } else {
        edad.style.borderColor = "";
    }
  });

  enviarBoton.addEventListener('click', function() {
    var mensajeErrorDiv = document.getElementById("mensajeError");
    mensajeErrorDiv.innerHTML = mensajeError;

    // Si no hay errores, enviar los datos al controlador
    if (!mensajeError) {
        enviarDatos();
    }
  });


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

function capturarEdad(){
	var edad = document.getElementById("edad").value;
	var error = document.getElementById("error4");
	console.log(edad)
	if(edad > 100){
		error.textContent="No se puede tener una edad mayor a 100";
		
	}
	else{
		error.textContent= ""
	}
}


function capturarSemestre(){
	var semestre = document.getElementById("semestre").value;
	var error = document.getElementById("error3");
	console.log(semestre)
	if(semestre < 0 || semestre >16){
		error.textContent="No se puede tener un semestre mayor a 16 ni menor que 0";
		
	}
	else{
		error.textContent= ""
	}
}

function capturarNombre(){
	var palabra = document.getElementById("nombres").value;
	var error = document.getElementById("mensaje");

		error.textContent= palabra.length+"/100";
		
}

function capturarApellido(){
	var palabra = document.getElementById("apellidos").value;
	var error = document.getElementById("mensaje");

		error.textContent= palabra.length+"/100";
		
}


function validarEmail(){
    var mail = document.getElementById("correo").value.trim();
    var error = document.getElementById("error1");

    // Verifica si el correo electrónico está completamente en mayúsculas
    if (mail !== mail.toUpperCase()) {
        error.textContent = "El email debe estar completamente en mayúsculas."+mail.length+"/100";
        return;
    }

    var tieneArroba = false;
    var tienePuntoDespuesArroba = false;

    // Verifica que no haya espacios ni caracteres especiales como tildes o ñ
    var caracteresEspeciales = /[áéíóúüñÁÉÍÓÚÜÑñ\s]/;
    if (caracteresEspeciales.test(mail)) {
        error.textContent = "El email no debe contener espacios ni caracteres especiales."+mail.length+"/100";
        return;
    }

    // Verifica la presencia de '@' y al menos un punto después de '@'
    for (var i = 0; i < mail.length; i++) {
        if (mail[i] === '@') {
            tieneArroba = true;
            for (var j = i + 1; j < mail.length; j++) {
                if (mail[j] === '.') {
                    tienePuntoDespuesArroba = true;
                    break;
                }
            }
            break;
        }
    }

    if (!tieneArroba || !tienePuntoDespuesArroba) {
        error.textContent = "El email debe contener '@' y al menos un punto después de '@'."+mail.length+"/100";
        return;
    }

    error.textContent = ""; // El email es válido
}

function alHome(){
window.location.href = "/grupo12/plantilla/Home";
}