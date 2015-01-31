
function mostrarRegistroUsuario() {

    var datos = "<div id='bloqueRegistro' class='caja-formulario dialog-new' style='display: none'>\n\
                <p id='tituloRegistroUsuario' class='tituloFormulario'>Registro de nuevo usuario.</p>\n\
                <hr/>\n\
                <section id='registro-bloqueCorreo' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-correo' class='registro-label'>Correo: </label>\n\
                    <input id='registro-input-correo' name='correo' type='email' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-correo' for='registro-input-correo' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-bloqueUsuario' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-usuario' class='registro-label'>Usuario: </label>\n\
                    <input id='registro-input-usuario' name='usuario' type='text' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-usuario' for='registro-input-usuario' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-bloquePassword' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-password' class='registro-label'>Password: </label>\n\
                    <input id='registro-input-password' name='password' type='password' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-password' for='registro-input-password' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-bloquePasswordRepe' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-passwordRepe' class='registro-label'>Repite password: </label>\n\
                    <input id='registro-input-passwordRepe' name='passwordRepe' type='password' class='registro-input input-required'/>\n\
                    <label id='registro-label-error-passwordRepe' for='registro-input-passwordRepe' class='registro-label-error'>*</label>\n\
                </section>\n\
                <hr/>\n\
                <section id='registro-bloqueNombre' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-nombre' class='registro-label'>Nombre: </label>\n\
                    <input id='registro-input-nombre' name='nombre' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-label-error-nombre' for='registro-input-nombre' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueApe1' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-ape1' class='registro-label'>Apellido 1º: </label>\n\
                    <input id='registro-input-ape1' name='ape1' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-label-error-ape1' for='registro-input-ape1' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueApe2' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-ape2' class='registro-label'>Apellido 2º: </label>\n\
                    <input id='registro-input-ape2' name='ape2' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-label-error-ape2' for='registro-input-ape2' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-bloqueNif' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-nif' class='registro-label'>NIF: </label>\n\
                    <input id='registro-input-nif' title='Formato NIF correcto: 00000000L' name='nif' type='text' class='registro-input input-required' placeholder='Formato: 00000000L'/>\n\
                    <label id='registro-label-error-nif' for='registro-input-nif' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-bloqueTf' class='registro-bloqueDatos'>\n\
                    <label for='registro-input-tf' class='registro-label'>Teléfono: </label>\n\
                    <input id='registro-input-tf' title='Formato: 9 dígitos sin espacios' name='tf' type='text' class='registro-input' placeholder='Formato: 9 dígitos sin espacios'/>\n\
                    <label id='registro-label-error-tf' for='registro-input-tf' class='registro-label-error'></label>\n\
                </section>\n\
                <hr/>\n\
                <span id='msg-requerido' class='registro-label-error'>*Campos requeridos</span>\n\
                <section id='registro-bloqueCondiciones' class='registro-bloqueDatos'>\n\
                    <input id='registro-check-condiciones' type='checkbox' name='condiciones' value='si'/>\n\
                    <label for='registro-check-condiciones' class='registro-label registro-label-check'>\n\
                    Acepto las <a href='#'>condiciones</a> de uso.</label>\n\
                    <label id='registro-label-error-condiciones' for='registro-check-condiciones' class='registro-label-error'>*</label>\n\
                </section>\n\
                <br/>\n\
                <section id='registro-botonera' class='formulario-botonera formulario-new-botonera'>\n\
                    <div id='registro-boton-enviar' class='formulario-boton formulario-new-boton'><span>Enviar</span></div>\n\
                    <div id='registro-boton-cancelar' class='formulario-boton formulario-new-boton'>\n\
                        <span>Salir</span>\n\
                    </div>\n\
                </section>\n\
            </div>";


    $("#articulos").html(datos);

    //Definición del dialog
    $(function () {

        $("#bloqueRegistro").dialog({
            autoOpen: false,
            modal: true,
            title: "Gestión de usuarios",
            minWidth: 550,
            show: "fadeIn",
            hide: "fadeOut"
        });

    });


    var formulario = "registro";
    var listaRequeridos = $("#bloqueRegistro input[class$='input-required']");

    var inputNombre = $("#registro-input-nombre");
    var inputApe1 = $("#registro-input-ape1");
    var inputApe2 = $("#registro-input-ape2");
    var inputNif = $("#registro-input-nif");
    var inputTf = $("#registro-input-tf");
    var inputCorreo = $("#registro-input-correo");
    var inputUsuario = $("#registro-input-usuario");
    var inputPassword = $("#registro-input-password");
    var inputPasswordRepe = $("#registro-input-passwordRepe");
    var checkCondiciones = $("#registro-check-condiciones");


    //VALIDACIONES
    function validarNewUsuario() {
        var errorValidacion = 0;

        //VALIDACIONES AL CLICK
        //Validar campos requeridos
        for (var i = 0; i < listaRequeridos.length; i++) {
            errorValidacion += validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
        }

        //Validar contenidos
        errorValidacion += validarCorreo(formulario, inputCorreo.attr('name'), inputCorreo.val());
        errorValidacion += validarUsuario(formulario, inputUsuario.attr('name'), inputUsuario.val());
        errorValidacion += validarPassword(formulario, inputPassword.attr('name'), inputPassword.val());
        errorValidacion += validarCoincidencia(formulario, inputPasswordRepe.attr('name'), inputPassword.val(), inputPasswordRepe.val());
        errorValidacion += validarNif(formulario, inputNif.attr('name'), inputNif.val().toUpperCase());
        errorValidacion += validarTf(formulario, inputTf.attr('name'), inputTf.val());
        errorValidacion += validarCheckbox(formulario, checkCondiciones.attr('name'), checkCondiciones.is(':checked'));


        //VALIDACIONES DE CORRECCIÓN CON EVENTO DE TECLADO keyup
        $(".input-required").keyup(function () {
            errorValidacion += validarCampoRequerido(formulario, this.name, this.value);
        });
        //Formato correo
        inputCorreo.keyup(function () {
            errorValidacion += validarCorreo(formulario, this.name, this.value);
        });
        //Formato y existencia de usuario
        inputUsuario.keyup(function () {
            errorValidacion += validarUsuario(formulario, this.name, this.value);
        });
        //Formato password
        inputPassword.keyup(function () {
            errorValidacion += validarPassword(formulario, this.name, this.value);
        });
        //Coincidencia password repetido
        inputPasswordRepe.keyup(function () {
            errorValidacion += validarCoincidencia(formulario, this.name, inputPassword.val(), this.value);
        });
        //Formato y Letra NIF
        inputNif.keyup(function () {
            errorValidacion += validarNif(formulario, this.name, this.value.toUpperCase());
        });
        //Formato Tf
        inputTf.keyup(function () {
            errorValidacion += validarTf(formulario, this.name, this.value);
        });
        //Aceptación de condiciones
        checkCondiciones.click(function () {
            errorValidacion += validarCheckbox(formulario, this.name, this.checked);
        });

        return errorValidacion;
    }


    //BOTÓN REGISTRO
    $("#registro-boton-enviar").click(function () {
        var errorValidacion = validarNewUsuario();

        //ENVÍO PARA REGISTRO EN BD
        if (errorValidacion === 0) {
            var rolUsuario = "usuario";
            var numNif = inputNif.val().substring(0, 8);
            var letraNif = (inputNif.val().charAt(8)).toUpperCase();
            var nif = numNif+letraNif;
            registrarUsuario(rolUsuario, inputNombre.val(), inputApe1.val(), inputApe2.val(), nif, inputTf.val(), inputCorreo.val(), inputUsuario.val(), inputPassword.val());
        }

    });
    
    //BOTÓN CANCELAR
    $("#registro-boton-cancelar").click(function () {
        $("#bloqueRegistro").dialog("close");
    });

}


function registrarUsuario($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password) {
    $promesa = getAjaxUsuarioNew($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El usuario '" + data[0].loginUsuario + "' se ha registrado correctamente");
            $("#bloqueRegistro input")
                    .val("")
                    .removeAttr("checked");
            $("#bloqueRegistro").dialog("close");
            //mostrarNoticias();
        } else {
            alert("Ha ocurrido un error: el usuario no ha podido ser registrado");
        }

    });
}



