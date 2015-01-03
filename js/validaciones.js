//GESTIÓN MENSAJES
function mostrarMensaje(formulario, dato, mensaje, tipoMensaje) {
    var campo = "#" + formulario + "-input-" + dato;
    var labelError = "#" + formulario + "-label-error-" + dato;

    $(labelError).text(mensaje);
    if (tipoMensaje === "error") {
        $(campo).css('backgroundColor', 'rgba(255,102,0,.6)');
        $(campo).css('color', 'white');
    }
}
function quitarMensaje(formulario, dato) {
    var campo = "#" + formulario + "-input-" + dato;
    var labelError = "#" + formulario + "-label-error-" + dato;

    $(labelError).text("");
    $(campo).css('backgroundColor', 'white');
    $(campo).css('color', 'black');
}


//COMPROBAR CONTENIDO DE ESPACIOS EN BLANCO
function comprobarEspacios(formulario, dato, valor) {
    var error = 0;
    if (/^\s+|\s+|\s+$/.test(valor)) {
        //uno o más espacios principio(^) | enmedio | final($)
        var mensajeEspacios = " *No debe contener espacios";
        mostrarMensaje(formulario, dato, mensajeEspacios, "error");
        error = -1;
    }
    return error;
}


//VALIDACIÓN CAMPOS REQUERIDOS
function validarCampoRequerido(formulario, dato, valorInput) {
    var error = 0;
    var mensajeRequerido = " *Campo requerido";
    if (valorInput.length === 0) {
        mostrarMensaje(formulario, dato, mensajeRequerido, "error");
        error = -1;
    } else {
        quitarMensaje(formulario, dato);
    }
    return error;
}


//VALIDACIÓN CORREO ELECTRÓNICO
function validarCorreo(formulario, dato, correo) {
    var error = 0;
    var mensajeCorreo = " *Formato incorrecto";
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo)) && correo !== "") {
        mostrarMensaje(formulario, dato, mensajeCorreo, "error");
        error = -1;
    } else {
        if (correo !== "") {
            quitarMensaje(formulario, dato);
        }
    }
    //DIFERENTES PATRONES:
    //   /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/
    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    //   /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/

    return error;
}


//VALIDACIÓN USUARIO(LOGIN)
function validarUsuario(formulario, dato, login) {
    var error = 0;
    error = comprobarEspacios(formulario, dato, login);
    if (error === 0) {
        $promesa = getAjaxLoginGet(login);
        $promesa.success(function (data) {
            if (data[0] !== null) {
                var mensajeLogin = " *El usuario ya existe";
                mostrarMensaje(formulario, dato, mensajeLogin, "error");
                //Desde dentro de success, la variable error no toma el valor de -1
                //Solucionado haciendo UNIQUE a loginCliente en la BD
            }
        });
    }
    return error;
}


//VALIDACIÓN PASSWORD
function validarPassword(formulario, dato, password) {
    var error = comprobarEspacios(formulario, dato, password);

    return error;
}


//VALIDACIÓN NIF
function validarNif(formulario, dato, nif) {
    var error = 0;
    var mensajeFormatoNif = " *Formato correcto: 00000000-L";
    var mensajeLetraNif = " *La letra del NIF ha sido corregida";
    var numNif = nif.substring(0, 8);
    var letraNifInicial = nif.charAt(9);
    if ((nif.length > 0 && nif.length !== 10) && (isNaN(numNif) || !isNaN(letraNifInicial))) {
        mostrarMensaje(formulario, dato, mensajeFormatoNif, "error");
        error = -1;
    } else {
        if (nif.length > 0 && error === 0) {
            var listaCaracteres = "TRWAGMYFPDXBNJZSQVHLCKET";
            var letraNifCorregida = listaCaracteres.charAt(numNif % 23);
            if (letraNifInicial !== letraNifCorregida) {
                var nifCorregido = numNif + "-" + letraNifCorregida;
                $("#" + formulario + "-input-" + dato).val(nifCorregido);
                mostrarMensaje(formulario, dato, mensajeLetraNif);
            }
        }

    }
    return error;
}


//VALIDACIÓN CHECKBOX
function validarCheckbox(formulario, dato, valorCheck) {
    var error = 0;
    var mensajeCheck = "  *Debe aceptar las condiciones de uso";
    if (valorCheck === false) {
        mostrarMensaje(formulario, dato, mensajeCheck, "error");
        error = -1;
    } else {
        quitarMensaje(formulario, dato);
    }
    return error;
}

