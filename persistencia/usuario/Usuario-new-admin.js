
function mostrarRegistroUsuarioAdmin() {

//    var claseCajaFormulario = "";
//    if (accionPrevia === "botonRegistro" || accionPrevia === "panel-admin-usuario-new" || accionPrevia === "opciones-admin-newUsuario" || accionPrevia === "opciones-desplegable-admin-newUsuario") {
//        claseCajaFormulario = "";
//    } else {
//        claseCajaFormulario = " dialog-new";
//    }

//var datos = "<div id='bloqueRegistro' class='caja-formulario" + claseCajaFormulario + "'>\n\
    var datos = "<div id='bloqueRegistro-admin' class='caja-formulario dialog-new' style='display: none'>\n\
                <p id='tituloRegistroUsuario-admin' class='tituloFormulario'>Registro de nuevo usuario.</p>\n\
                <hr/>\n\
                <section id='registro-admin-bloqueRol' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-select-rol' class='registro-label'>Rol: </label>\n\
                    <select id='registro-admin-select-rol' name='rol' class='registro-select' autofocus='autofocus'>\n\
                        <option value='usuario' selected='selected'>Usuario</option>\n\
                        <option value='administrador'>Administrador</option>\n\
                    </select>\n\
                </section>\n\
                <br id='linea-rol'/>\n\
                <section id='registro-admin-bloqueCorreo' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-correo' class='registro-label'>Correo: </label>\n\
                    <input id='registro-admin-input-correo' name='correo' type='email' class='registro-input input-required'/>\n\
                    <label id='registro-admin-label-error-correo' for='registro-admin-input-correo' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-admin-bloqueUsuario' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-usuario' class='registro-label'>Usuario: </label>\n\
                    <input id='registro-admin-input-usuario' name='usuario' type='text' class='registro-input input-required'/>\n\
                    <label id='registro-admin-label-error-usuario' for='registro-admin-input-usuario' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-admin-bloquePassword' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-password' class='registro-label'>Password: </label>\n\
                    <input id='registro-admin-input-password' name='password' type='password' class='registro-input input-required'/>\n\
                    <label id='registro-admin-label-error-password' for='registro-admin-input-password' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-admin-bloquePasswordRepe' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-passwordRepe' class='registro-label'>Repite password: </label>\n\
                    <input id='registro-admin-input-passwordRepe' name='passwordRepe' type='password' class='registro-input input-required'/>\n\
                    <label id='registro-admin-label-error-passwordRepe' for='registro-admin-input-passwordRepe' class='registro-label-error'>*</label>\n\
                </section>\n\
                <hr/>\n\
                <section id='registro-admin-bloqueNombre' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-nombre' class='registro-label'>Nombre: </label>\n\
                    <input id='registro-admin-input-nombre' name='nombre' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-admin-label-error-nombre' for='registro-admin-input-nombre' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-admin-bloqueApe1' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-ape1' class='registro-label'>Apellido 1º: </label>\n\
                    <input id='registro-admin-input-ape1' name='ape1' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-admin-label-error-ape1' for='registro-admin-input-ape1' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-admin-bloqueApe2' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-ape2' class='registro-label'>Apellido 2º: </label>\n\
                    <input id='registro-admin-input-ape2' name='ape2' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='registro-admin-label-error-ape2' for='registro-admin-input-ape2' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='registro-admin-bloqueNif' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-nif' class='registro-label'>NIF: </label>\n\
                    <input id='registro-admin-input-nif' title='Formato NIF correcto: 00000000L' name='nif' type='text' class='registro-input input-required' placeholder='Formato: 00000000L'/>\n\
                    <label id='registro-admin-label-error-nif' for='registro-admin-input-nif' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='registro-admin-bloqueTf' class='registro-bloqueDatos'>\n\
                    <label for='registro-admin-input-tf' class='registro-label'>Teléfono: </label>\n\
                    <input id='registro-admin-input-tf' title='Formato: 9 dígitos sin espacios' name='tf' type='text' class='registro-input' placeholder='Formato: 9 dígitos sin espacios'/>\n\
                    <label id='registro-admin-label-error-tf' for='registro-admin-input-tf' class='registro-label-error'></label>\n\
                </section>\n\
                <hr/>\n\
                <span id='msg-requerido' class='registro-label-error'>*Campos requeridos</span>\n\
                <br/>\n\
                <section id='registro-admin-botonera' class='formulario-botonera formulario-new-botonera'>\n\
                    <div id='registro-admin-boton-enviar' class='formulario-boton formulario-new-boton'><span>Enviar</span></div>\n\
                    <div id='registro-admin-boton-listar' class='formulario-boton formulario-new-boton'>\n\
                        <span>Ver listado</span>\n\
                    </div>\n\
                    <div id='registro-admin-boton-cancelar' class='formulario-boton formulario-new-boton'>\n\
                        <span>Salir</span>\n\
                    </div>\n\
                </section>\n\
            </div>";


    $("#articulos").html(datos);

    //Definición del dialog
    $("#bloqueRegistro-admin").dialog(
            {
                autoOpen: false,
                modal: true,
                title: "Gestión de usuarios",
                minWidth: 550,
                show: "fadeIn",
                hide: "fadeOut"
            }
    );


    var formulario = "registro-admin";
    var listaRequeridos = $("#bloqueRegistro-admin input[class$='input-required']");

    var selectRol = $("#registro-admin-select-rol");
    var inputNombre = $("#registro-admin-input-nombre");
    var inputApe1 = $("#registro-admin-input-ape1");
    var inputApe2 = $("#registro-admin-input-ape2");
    var inputNif = $("#registro-admin-input-nif");
    var inputTf = $("#registro-admin-input-tf");
    var inputCorreo = $("#registro-admin-input-correo");
    var inputUsuario = $("#registro-admin-input-usuario");
    var inputPassword = $("#registro-admin-input-password");
    var inputPasswordRepe = $("#registro-admin-input-passwordRepe");

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


        //VALIDACIONES DE CORRECCIÓN CON EVENTO DE TECLADO keyup
        $(".input-required").keyup(function () {
            validarCampoRequerido(formulario, this.name, this.value);
        });
        //Formato correo
        inputCorreo.keyup(function () {
            validarCorreo(formulario, this.name, this.value);
        });
        //Formato y existencia de usuario
        inputUsuario.keyup(function () {
            validarUsuario(formulario, this.name, this.value);
        });
        //Formato password
        inputPassword.keyup(function () {
            validarPassword(formulario, this.name, this.value);
        });
        //Coincidencia password repetido
        inputPasswordRepe.keyup(function () {
            validarCoincidencia(formulario, this.name, inputPassword.val(), this.value);
        });
        //Formato y Letra NIF
        inputNif.keyup(function () {
            validarNif(formulario, this.name, this.value.toUpperCase());
        });
        //Formato Tf
        inputTf.keyup(function () {
            validarTf(formulario, this.name, this.value);
        });

        return errorValidacion;
    }


    //BOTÓN ENVIAR
    $("#registro-admin-boton-enviar").click(function () {
        //alert(accionPrevia);
        var errorValidacion = validarNewUsuario();

        //ENVÍO PARA REGISTRO EN BD
        if (errorValidacion === 0) {
            var numNif = inputNif.val().substring(0, 8);
            var letraNif = (inputNif.val().charAt(8)).toUpperCase();
            var nif = numNif+letraNif;
            registrarUsuarioAdmin(selectRol.val(), inputNombre.val(), inputApe1.val(), inputApe2.val(), nif, inputTf.val(), inputCorreo.val(), inputUsuario.val(), inputPassword.val());
        }

    });


    //BOTÓN LISTADO
    $("#registro-admin-boton-listar").click(function () {
        accionPrevia = this.id;
        mostrarListaUsuarios();
    });


    //BOTÓN CANCELAR
    $("#registro-admin-boton-cancelar").click(function () {
        $("#bloqueRegistro-admin").dialog("close");
        $("#lista-usuarios").jqGrid().trigger("reloadGrid");
    });


}


function registrarUsuarioAdmin($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password) {
    $promesa = getAjaxUsuarioNew($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El usuario '" + data[0].loginUsuario + "' se ha registrado correctamente");

            $("#bloqueRegistro-admin input").val("");
            $("#bloqueRegistro-admin input").removeAttr("checked");
            jQuery("#lista-usuarios").jqGrid().trigger("reloadGrid");
        } else {
            alert("Ha ocurrido un error: el usuario no ha podido ser registrado");
        }

    });
}



