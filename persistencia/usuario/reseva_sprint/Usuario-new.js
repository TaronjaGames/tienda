
function mostrarRegistroUsuario() {
    //alert(accionPrevia);
    if (usuarioLogueado.rolUsuarioLogueado !== "administrador") {
        var esAdmin = false;
        var ocultoUsuario = "none";
        var ocultoAdmin = "block";
    } else {
        esAdmin = true;
        ocultoUsuario = "block";
        ocultoAdmin = "none";
    }

//    var claseCajaFormulario = "";
//    if (accionPrevia === "botonRegistro" || accionPrevia === "panel-admin-usuario-new" || accionPrevia === "opciones-admin-newUsuario" || accionPrevia === "opciones-desplegable-admin-newUsuario") {
//        claseCajaFormulario = "";
//    } else {
//        claseCajaFormulario = " dialog-new";
//    }

//var datos = "<div id='bloqueRegistro' class='caja-formulario" + claseCajaFormulario + "'>\n\
    var datos = "<div id='bloqueRegistro' class='caja-formulario'>\n\
                <p id='tituloRegistroUsuario' class='tituloFormulario'>Registro de nuevo usuario.</p>\n\
                <hr/>\n\
                <section id='registro-bloqueRol' class='registro-bloqueDatos' style='display: " + ocultoUsuario + "'>\n\
                    <label for='registro-select-rol' class='registro-label'>Rol: </label>\n\
                    <select id='registro-select-rol' name='rol' class='registro-select' autofocus='autofocus'>\n\
                        <option value='usuario' selected='selected'>Usuario</option>\n\
                        <option value='administrador'>Administrador</option>\n\
                    </select>\n\
                </section>\n\
                <br id='linea-rol' style='display: " + ocultoUsuario + "'/>\n\
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
                <section id='registro-bloqueCondiciones' class='registro-bloqueDatos' style='display: " + ocultoAdmin + "'>\n\
                    <input id='registro-check-condiciones' type='checkbox' name='condiciones' value='si'/>\n\
                    <label for='registro-check-condiciones' class='registro-label registro-label-check'>\n\
                    Acepto las <a href='#'>condiciones</a> de uso.</label>\n\
                    <label id='registro-label-error-condiciones' for='registro-check-condiciones' class='registro-label-error'>*</label>\n\
                </section>\n\
                <br/>\n\
                <section id='registro-botonera' class='formulario-botonera formulario-new-botonera'>\n\
                    <div id='registro-boton-enviar' class='formulario-boton formulario-new-boton'><span>Enviar</span></div>\n\
                    <div id='registro-boton-listar' class='formulario-boton formulario-new-boton' style='display: " + ocultoUsuario + "'>\n\
                        <span>Ver listado</span>\n\
                    </div>\n\
                    <div id='registro-boton-cancelar-usuario' class='formulario-boton formulario-new-boton' onclick='mostrarNoticias()' style='display: " + ocultoAdmin + "'>\n\
                        <span>Salir</span>\n\
                    </div>\n\
                    <div id='registro-boton-cancelar-admin' class='formulario-boton formulario-new-boton' style='display: " + ocultoUsuario + "'>\n\
                        <span>Salir</span>\n\
                    </div>\n\
                </section>\n\
            </div>";


    //En función del botón de donde venimos...
    if (accionPrevia === "botonRegistro" || accionPrevia === "panel-admin-usuario-new" || accionPrevia === "opciones-admin-newUsuario" || accionPrevia === "opciones-desplegable-admin-newUsuario") {
        $("#articulos").html(datos);//Opción NO-dialog
        if (accionPrevia === "botonRegistro") {
            $("#registro-boton-listar").css("display", "none");
        }
    } else {
        $("#articulos").html(datos);//Para dialog, cambiar a append
        //Definición del dialog
//        $(function () {
//            $("#bloqueRegistro").dialog(
//                    {
//                        autoOpen: false,
//                        modal: true,
//                        title: "Gestión de usuarios",
//                        minWidth: 550
//                    }
//            );
//        });
        $("#registro-boton-listar").css("display", "none");
    }


    var formulario = "registro";
    var listaRequeridos = $("#bloqueRegistro input[class$='input-required']");

    var selectRol = $("#registro-select-rol");
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
        if (!esAdmin) {
            errorValidacion += validarCheckbox(formulario, checkCondiciones.attr('name'), checkCondiciones.is(':checked'));
        }


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
        if (!esAdmin) {
            //Aceptación de condiciones
            checkCondiciones.click(function () {
                    validarCheckbox(formulario, this.name, this.checked);
            });
        }

        return errorValidacion;
    }

    
    //BOTÓN ENVIAR
    $("#registro-boton-enviar").click(function () {
        //alert(accionPrevia);
        var errorValidacion = validarNewUsuario();

        //ENVÍO PARA REGISTRO EN BD
//        alert(errorValidacion);
//        errorValidacion = -1;
        if (errorValidacion === 0) {
            if(usuarioLogueado.rolUsuarioLogueado !== "administrador"){
                var rolUsuario = "usuario";
            } else {
                rolUsuario = selectRol.val();
            }
            registrarUsuario(rolUsuario, inputNombre.val(), inputApe1.val(), inputApe2.val(), inputNif.val(), inputTf.val(), inputCorreo.val(), inputUsuario.val(), inputPassword.val());
        }

    });


    //BOTÓN LISTADO
    $("#registro-boton-listar").click(function () {
        accionPrevia = this.id;
        mostrarListaUsuarios();
    });

    //BOTÓN CANCELAR
    $("#registro-boton-cancelar-admin").click(function () {
        if (accionPrevia === "panel-admin-usuario-new" || accionPrevia === "opciones-admin-newUsuario" || accionPrevia === "opciones-desplegable-admin-newUsuario") {
            if(accionPrevia === "panel-admin-usuario-new"){
                mostrarPanelesUsuario();
            } else {
                mostrarPanelesAdmin();
            }
        } else {
            mostrarListaUsuarios();
//            $("#bloqueRegistro").dialog("close");
            $("#lista-usuarios").jqGrid().trigger("reloadGrid");
        }
    });


}


function registrarUsuario($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password) {
    $promesa = getAjaxUsuarioNew($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El usuario '" + data[0].loginUsuario + "' se ha registrado correctamente");
            if(accionPrevia === "panel-admin-usuario-new" || accionPrevia === "opciones-admin-newUsuario" || accionPrevia === "opciones-desplegable-admin-newUsuario"){
                if (accionPrevia === "panel-admin-usuario-new"){
                    mostrarRegistroUsuario();
                    //mostrarPanelesUsuario();
                } else {
                    mostrarRegistroUsuario();
                    //mostrarPanelesAdmin();
                }
            } else {
                if(accionPrevia === "botonRegistro"){
                    mostrarNoticias();
                } else {
                    mostrarRegistroUsuario();
                    //mostrarListaUsuarios();
                    //$("#bloqueRegistro").dialog("close");
                    jQuery("#lista-usuarios").jqGrid().trigger("reloadGrid");
                }
            }
        } else {
            alert("Ha ocurrido un error: el usuario no ha podido ser registrado");
        }

    });
}



