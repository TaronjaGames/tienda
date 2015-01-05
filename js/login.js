
function mostrarLogin() {

    datos = "<div id='bloqueLogin'>\n\
                <section id='login-bloqueRolCliente' class='login-bloqueDatos'>\n\
                    <input id='login-radio-cliente' type='radio' name='login-radio-rol' value='Cliente' checked='checked'/>\n\
                    <label for='login-radio-cliente' class='login-label login-label-radio'>Cliente</label>\n\
                </section>\n\
                <section id='login-bloqueRolEmpleado' class='login-bloqueDatos'>\n\
                    <input id='login-radio-empleado' type='radio' name='login-radio-rol' value='Empleado'/>\n\
                    <label for='login-radio-empleado' class='login-label login-label-radio'>Empleado</label>\n\
                </section>\n\
                <hr/>\n\
                <section id='login-bloqueUsuario' class='login-bloqueDatos'>\n\
                    <label for='login-input-usuario' class='login-label'>Usuario: </label>\n\
                    <input name='usuario' id='login-input-usuario' type='text' autofocus='autofocus' class='login-input input-required'/>\n\
                    <label id='login-label-error-usuario' for='login-input-usuario' class='login-label-error'></label>\n\
                </section>\n\
                <section id='login-bloquePassword' class='login-bloqueDatos'>\n\
                    <label for='login-input-password' class='login-label'>Password: </label>\n\
                    <input name='password' id='login-input-password' type='password' class='login-input input-required'/>\n\
                    <label id='login-label-error-password' for='login-input-password' class='login-label-error'></label>\n\
                </section>\n\
                <br/>\n\
                <section id='login-botonera'>\n\
                    <div id='login-boton-entrar' class='boton'><span>Entrar</span></div>\n\
                </section>\n\
            </div>";

    $("#articulos").html(datos);

    var formulario = "login";
    var listaRequeridos = document.getElementsByClassName("input-required");
    var listaRadios = document.getElementsByName("login-radio-rol");

    document.getElementById("login-boton-entrar").onclick = function () {
        $(".login-label-error").text("");

        for (var i = 0; i < listaRadios.length; i++) {
            if (listaRadios[i].checked) {
                var rolUsuario = listaRadios[i].value;
            }
        }

        var usuario = $("#login-input-usuario").val();
        var password = $("#login-input-password").val();
        if (usuario.length !== 0 && password.length !== 0) {
            logIn(rolUsuario, usuario, password);
        } else {
            for (var i = 0; i < listaRequeridos.length; i++) {
                validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
            }
        }
    };

    $(".input-required").keyup(function () {
        validarCampoRequerido(formulario, this.name, this.value);
    });

}



function logIn($rolUsuario, $login, $password) {
    $promesa = getAjaxLogIn($rolUsuario, $login, $password);
    $promesa.success(function (data) {

        if ($rolUsuario === "Cliente" && data[0] != null) {
            var login = data[0].loginCliente;
        } else if ($rolUsuario === "Empleado" && data[0] != null) {
            login = data[0].loginEmpleado;
        }

        if (data[0] != null && login === $login) {
            var datos = "<div id='cajaInfoLogin' class='dropdown'>\n\
                        <button class='btn dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown'>\n\
                            <span>\n\
                                <img id='iconoUsuario' src='style/img/iconos/iconoUsuarioTienda.png' alt='iconoUsuario'/>\n\
                            </span>\n\
                            <div id='caja-texto-login'><span id='texto-login'>" + login + "</span></div>\n\
                            <span class='caret'></span>\n\
                        </button>\n\
                        <ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'>\n\
                            <li role='presentation'>\n\
                                <a id='enlaceDesconectar' role='menuitem' tabindex='-1' href='#'>Desconectar</a>\n\
                            </li>\n\
                            <li role='presentation'>\n\
                                <a id='enlaceCambiarUsuario' role='menuitem' tabindex='-1' href='#'>Cambiar usuario</a>\n\
                            </li>\n\
                            <li role='presentation'>\n\
                                <a id='enlaceNuevoRegistro' role='menuitem' tabindex='-1' href='#'>Nuevo usuario</a>\n\
                            </li>\n\
                            <li role='presentation'>\n\
                                <a id='enlaceDatosUsuario' role='menuitem' tabindex='-1' href='#'>Datos cuenta</a>\n\
                            </li>\n\
                            <li role='presentation'>\n\
                                <a id='enlacePedidos' role='menuitem' tabindex='-1' href='#'>Lista pedidos</a>\n\
                            </li>\n\
                        </ul>\n\
                    </div>";

            //$("#botonLogin").css("display","none");
            //$("#cabeceraLogin").append(datos);
            $("#cabeceraLogin").html(datos);
            mostrarNoticias();

            document.getElementById("enlaceDesconectar").onclick = function () {
                logOut();
            };
            document.getElementById("enlaceCambiarUsuario").onclick = function () {
                mostrarLogin();
            };
            document.getElementById("enlaceNuevoRegistro").onclick = function () {
                mostrarRegistroUsuario();
            };

        } else {
            alert("Usuario o password incorrectos o usuario no registrado como " + $rolUsuario + ".\n\n Revise los datos introducidos...");
        }

    });

}

function logOut() {
    $promesa = getAjaxLogOut();
    $promesa.success(function () {
        document.location.href = 'index.html';
    });
}


