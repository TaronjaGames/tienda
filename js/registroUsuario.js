
function mostrarRegistroUsuario() {

    datos = "<div id='bloqueRegistro'>\n\
                <section id='registro-bloqueCorreo' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-correo' class='registro-label'>Correo: </label>\n\
                    <input id='registro-input-correo' name='correo' type='email' class='registro-input input-required' autofocus='autofocus'/>\n\
                    <label id='registro-label-error-correo' for='registro-input-correo' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueUsuario' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-usuario' class='registro-label'>Usuario: </label>\n\
                    <input id='registro-input-usuario' name='usuario' type='text' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-usuario' for='registro-input-usuario' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloquePassword' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-password' class='registro-label'>Password: </label>\n\
                    <input id='registro-input-password' name='password' type='password' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-password' for='registro-input-password' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueNif' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-nif' class='registro-label'>NIF: </label>\n\
                    <input id='registro-input-nif' title='Formato correcto: 00000000L' name='nif' type='text' class='registro-input input-required' placeholder='Formato NIF: 00000000L'/>\n\
                    <label id='registro-label-error-nif' for='registro-input-nif' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueCondiciones' class='registro-bloqueDatos'>\n\
                    <input id='registro-check-condiciones' type='checkbox' name='condiciones' value='si'/>\n\
                    <label for='registro-check-condiciones' class='registro-label registro-label-check'>\n\
                    Acepto las <a href='#'>condiciones</a> de uso.</label>\n\
                    <label id='registro-label-error-condiciones' for='registro-check-condiciones' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-botonera'>\n\
                    <div id='registro-boton-enviar' class='boton'><span>Enviar</span></div>\n\
                </section>\n\
            </div>";

//REPETIR PARA COMPROBAR LA CONTRASEÑA????????

//ESTRUCTURA TIPO BLOQUE DE DATOS:
//                <section id='registro-bloqueCorreo' class='registro-bloqueDatos'>\n\
//                    <label for='registro-input-correo' class='registro-label'>Correo: </label>\n\
//                    <input id='registro-input-correo' name='correo' type='email' class='registro-input input-required' autofocus='autofocus'/>\n\
//                    <label id='registro-label-error-correo' for='registro-input-correo' class='registro-label-error'></label>\n\
//                </section>\n\

    $("#articulos").html(datos);

    formulario = "registro";
    listaRequeridos = document.getElementsByClassName("input-required");

    inputCorreo = $("#registro-input-correo");
    inputUsuario = $("#registro-input-usuario");
    inputPassword = $("#registro-input-password");
    inputNif = $("#registro-input-nif");
    checkCondiciones = $("#registro-check-condiciones");

    pulsado = false;
    document.getElementById("registro-boton-enviar").onclick = function () {
        errorValidacion = 0;
        pulsado = true;
        $(".registro-label-error").text("");

        //Validar campos requeridos
        for (var i = 0; i < listaRequeridos.length; i++) {
            errorValidacion += validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
        }

        //Validar contenidos
        errorValidacion += validarCorreo(formulario, inputCorreo.attr('name'), inputCorreo.val());
        errorValidacion += validarUsuario(formulario, inputUsuario.attr('name'), inputUsuario.val());
        errorValidacion += validarPassword(formulario, inputPassword.attr('name'), inputPassword.val());
        errorValidacion += validarNif(formulario, inputNif.attr('name'), inputNif.val().toUpperCase());
        errorValidacion += validarCheckbox(formulario, checkCondiciones.attr('name'), checkCondiciones.is(':checked'));

        //ENVÍO PARA REGISTRO EN BD
//        alert(errorValidacion);
//        errorValidacion = -1;
        if (errorValidacion === 0) {
            registrarUsuario(inputCorreo.val(), inputUsuario.val(), inputPassword.val(), inputNif.val());
        }

    };// Fin onclick botón enviar formulario


    //VALIDACIONES DE CORRECCIÓN
    //No hacer genérico
    //Campos requeridos
    $(".input-required").keyup(function () {
        if (pulsado) {
            validarCampoRequerido(formulario, this.name, this.value);
        }
    });
    //Formato correo
    inputCorreo.keyup(function () {
        if (pulsado) {
            validarCorreo(formulario, this.name, this.value);
        }
    });
    //Formato y existencia de usuario
    inputUsuario.keyup(function () {
        if (pulsado) {
            validarUsuario(formulario, this.name, this.value);
        }
    });
    //Formato password
    inputPassword.keyup(function () {
        if (pulsado) {
            validarPassword(formulario, this.name, this.value);
        }
    });
    //Formato y Letra NIF
    inputNif.keyup(function () {
        if (pulsado) {
            validarNif(formulario, this.name, this.value.toUpperCase());
        }
    });
    //Aceptación de condiciones
    checkCondiciones.click(function () {
        if (pulsado) {
            validarCheckbox(formulario, this.name, this.checked);
        }
    });

}


function registrarUsuario($correo, $login, $password, $nif) {
    $promesa = getAjaxUsuarioNew($correo, $login, $password, $nif);
    $promesa.success(function (data) {

        alert("El usuario '" + data[0].loginCliente + "' se ha registrado correctamente");
        mostrarLogin();

    });
}



