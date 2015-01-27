
function mostrarEditUsuario() {

    if (usuarioLogueado.rolUsuarioLogueado !== "administrador") {
        var visible = "none";
    } else {
        visible = "block";
    }

//    var datos = "<div id='bloqueRegistro' class='caja-formulario dialog-editar'>\n\
    var datos = "<div id='bloqueEditUsuario' class='caja-formulario'>\n\
                <p id='tituloEditUsuario' class='tituloFormulario'>Edición de usuario.</p>\n\
                <hr/>\n\
                <section id='editUsuario-bloqueRol' class='registro-bloqueDatos' style='display: " + visible + "'>\n\
                    <label for='editUsuario-select-rol' class='registro-label'>Rol: </label>\n\
                    <select id='editUsuario-select-rol' name='rol' class='registro-select' autofocus='autofocus'>\n\
                        <option value='usuario' selected='selected'>Usuario</option>\n\
                        <option value='administrador'>Administrador</option>\n\
                    </select>\n\
                </section>\n\
                <br id='linea-rol' style='display: " + visible + "'/>\n\
                <section id='editUsuario-bloqueId' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-id' class='registro-label'>Id usuario: </label>\n\
                    <input id='editUsuario-input-id' name='id' type='text' class='registro-input' disabled/>\n\
                </section>\n\
                <section id='editUsuario-bloqueCorreo' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-correo' class='registro-label'>Correo: </label>\n\
                    <input id='editUsuario-input-correo' name='correo' type='email' class='registro-input input-required'/>\n\
                    <label id='editUsuario-label-error-correo' for='editUsuario-input-correo' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editUsuario-bloqueUsuario' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-usuario' class='registro-label'>Usuario: </label>\n\
                    <input id='editUsuario-input-usuario' name='usuario' type='text' class='registro-input input-required'/>\n\
                    <label id='editUsuario-label-error-usuario' for='editUsuario-input-usuario' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editUsuario-bloquePassword' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-password' class='registro-label'>Password: </label>\n\
                    <input id='editUsuario-input-password' name='password' type='text' class='registro-input input-required'/>\n\
                    <label id='editUsuario-label-error-password' for='editUsuario-input-password' class='registro-label-error'>*</label>\n\
                </section>\n\
                <hr/>\n\
                <section id='editUsuario-bloqueNombre' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-nombre' class='registro-label'>Nombre: </label>\n\
                    <input id='editUsuario-input-nombre' name='nombre' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='editUsuario-label-error-nombre' for='editUsuario-input-nombre' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='editUsuario-bloqueApe1' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-ape1' class='registro-label'>Apellido 1º: </label>\n\
                    <input id='editUsuario-input-ape1' name='ape1' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='editUsuario-label-error-ape1' for='editUsuario-input-ape1' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='editUsuario-bloqueApe2' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-ape2' class='registro-label'>Apellido 2º: </label>\n\
                    <input id='editUsuario-input-ape2' name='ape2' type='text' class='registro-input input-required-NO'/>\n\
                    <label id='editUsuario-label-error-ape2' for='editUsuario-input-ape2' class='registro-label-error'></label>\n\
                </section>\n\
                <section id='editUsuario-bloqueNif' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-nif' class='registro-label'>NIF: </label>\n\
                    <input id='editUsuario-input-nif' title='Formato NIF correcto: 00000000L' name='nif' type='text' class='registro-input input-required' placeholder='Formato: 00000000L'/>\n\
                    <label id='editUsuario-label-error-nif' for='editUsuario-input-nif' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editUsuario-bloqueTf' class='registro-bloqueDatos'>\n\
                    <label for='editUsuario-input-tf' class='registro-label'>Teléfono: </label>\n\
                    <input id='editUsuario-input-tf' title='Formato: 9 dígitos sin espacios' name='tf' type='text' class='registro-input' placeholder='Formato: 9 dígitos sin espacios'/>\n\
                    <label id='editUsuario-label-error-tf' for='editUsuario-input-tf' class='registro-label-error'></label>\n\
                </section>\n\
                <hr/>\n\
                <span id='editUsuario-msg-requerido' class='registro-label-error'>*Campos requeridos</span>\n\
                <br/>\n\
                <section id='editUsuario-botonera' class='formulario-botonera formulario-edit-botonera'>\n\
                    <div id='editUsuario-boton-enviar' class='formulario-boton formulario-edit-boton'><span>Enviar</span></div>\n\
                    <div id='editUsuario-boton-cerrar' class='formulario-boton formulario-edit-boton'><span>Salir</span></div>\n\
                </section>\n\
            </div>";

    $("#articulos").html(datos);//Para dialog, cambiar a append
    //Definición del dialog
//    $(function () {
//        $("#bloqueEditUsuario").dialog(
//                {
//                    autoOpen: false,
//                    modal: true,
//                    title: "Gestión de usuarios",
//                    minWidth: 550
//                }
//        );
//    });


    var formulario = "editUsuario";
    var listaRequeridos = $("#bloqueEditUsuario input[class$='input-required']");

    var inputId = $("#editUsuario-input-id");
    var selectRol = $("#editUsuario-select-rol");
    var inputNombre = $("#editUsuario-input-nombre");
    var inputApe1 = $("#editUsuario-input-ape1");
    var inputApe2 = $("#editUsuario-input-ape2");
    var inputNif = $("#editUsuario-input-nif");
    var inputTf = $("#editUsuario-input-tf");
    var inputCorreo = $("#editUsuario-input-correo");
    var inputUsuario = $("#editUsuario-input-usuario");
    var inputPassword = $("#editUsuario-input-password");


    //VALIDACIONES
    function validarEditUsuario() {
        var errorValidacion = 0;

        //VALIDACIONES AL CLICK
        //Validar campos requeridos
        for (var i = 0; i < listaRequeridos.length; i++) {
            errorValidacion += validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
        }

        //Validar contenidos
        errorValidacion += validarCorreo(formulario, inputCorreo.attr('name'), inputCorreo.val());
        errorValidacion += comprobarEspacios(formulario, inputUsuario.attr('name'), inputUsuario.val());
        errorValidacion += validarPassword(formulario, inputPassword.attr('name'), inputPassword.val());
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
            comprobarEspacios(formulario, this.name, this.value);
        });
        //Formato password
        inputPassword.keyup(function () {
            validarPassword(formulario, this.name, this.value);
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

    //BOTÓN EDITAR
    $("#editUsuario-boton-enviar").click(function () {
        var errorValidacion = validarEditUsuario();

        //ENVÍO PARA REGISTRO EN BD
//        alert(errorValidacion);
//        errorValidacion = -1;
        if (errorValidacion === 0) {
            editarUsuario(inputId.val(), selectRol.val(), inputNombre.val(), inputApe1.val(), inputApe2.val(), inputNif.val(), inputTf.val(), inputCorreo.val(), inputUsuario.val(), inputPassword.val());
        }

    });// Fin onclick botón enviar formulario


    //BOTÓN CANCELAR
    $("#editUsuario-boton-cerrar").click(function () {
        mostrarListaUsuarios();
//            $("#bloqueEditUsuario").dialog("close");
        $("#lista-usuarios").jqGrid().trigger("reloadGrid");
    });


}


function editarUsuario($id, $rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password) {
    $promesa = getAjaxUsuarioEdit($id, $rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El usuario '" + data[0].loginUsuario + "' se ha actualizado correctamente");
            mostrarListaUsuarios();
//            $("#bloqueEditUsuario").dialog("close");
            jQuery("#lista-usuarios").jqGrid().trigger("reloadGrid");
        } else {
            alert("Ha ocurrido un error: el usuario no ha podido ser actualizado");
        }

    });
}



