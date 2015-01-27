
function mostrarLogin() {

    datos = "<div id='bloqueLogin'>\n\
                <p id='tituloFormularioLogin' class='tituloFormulario'>Formulario de login.</p>\n\
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
                <hr/>\n\
                <a href='javascript:mostrarRegistroUsuario()'>Registro...</a>\n\\n\
                <br/><br/>\n\
                <section id='login-botonera'>\n\
                    <div id='login-boton-entrar' class='boton'><span>Entrar</span></div>\n\
                </section>\n\
            </div>";

    $("#articulos").html(datos);

    var formulario = "login";
    var listaRequeridos = document.getElementsByClassName("input-required");

    pulsado = false;
    document.getElementById("login-boton-entrar").onclick = function () {
        pulsado = true;
        $(".login-label-error").text("");

        var usuario = $("#login-input-usuario").val();
        var password = $("#login-input-password").val();
        if (usuario.length !== 0 && password.length !== 0) {
            logIn(usuario, password);
        } else {
            for (var i = 0; i < listaRequeridos.length; i++) {
                validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
            }
        }
    };

    $(".input-required").keyup(function () {
        if (pulsado) {
            validarCampoRequerido(formulario, this.name, this.value);
        }
    });

}



function logIn($login, $password) {
    $promesa = getAjaxLogIn($login, $password);
    $promesa.success(function (data) {

        //Zona info estado login header derecha
        if (data[0] !== null && data[0].loginUsuario === $login) {
            
            mostrarMenuLogin(data);

        } else {
            alert("Usuario o password incorrectos o usuario no registrado.\n\n Revise los datos introducidos...");
        }

    });

}

function logOut() {
    $promesa = getAjaxLogOut();
    $promesa.success(function () {
        document.location.href = 'index.html';
    });
}

function mostrarMenuLogin(data){
    usuarioLogueado = {rolUsuarioLogueado: data[0].rolUsuario, loginUsuarioLogueado: data[0].loginUsuario};
            var datos = "<div id='cajaInfoLogin' class='dropdown'>\n\
                            <button class='btn dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown'>\n\
                                <span>\n\
                                    <img id='iconoUsuario' src='style/img/iconos/iconoUsuarioTienda.png' alt='iconoUsuario'/>\n\
                                </span>\n\
                                <div id='caja-texto-login'><span id='texto-login'>" + data[0].loginUsuario + "</span></div>\n\
                                <span class='caret'></span>\n\
                            </button>\n\
                            <ul id='opcionesUsuario' class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'>\n\
                                <li role='presentation'>\n\
                                    <a id='enlaceDesconectar' role='menuitem' tabindex='-1' href='#'>Desconectar</a>\n\
                                </li>\n\
                                <li role='presentation'>\n\
                                    <a id='enlaceCambiarUsuario' role='menuitem' tabindex='-1' href='#'>Cambiar usuario</a>\n\
                                </li>\n\
                            </ul>\n\
                        </div>";
            
//                            <li id='opcion-desplegable-usuario-new' role='presentation'>\n\
//                                <a id='enlaceNuevoRegistro' role='menuitem' tabindex='-1' href='#'>Nuevo usuario</a>\n\
//                            </li>";
//
//            if (data[0].rolUsuario === "administrador") {
//                datos += "<li id='opcion-desplegable-articulo-new' role='presentation'>\n\
//                                <a id='enlaceNuevoArticulo' role='menuitem' tabindex='-1' href='#'>Nuevo artículo</a>\n\
//                            </li>";
//            }
           

            $("#cabeceraLogin").html(datos);

            $("#cajaInfoLogin").hover(function () {
                $(this).children("ul").slideToggle(400);
            });

            //Construye menú vertical y paneles de administración
            if (data[0].rolUsuario === "administrador") {

                $("#iconoUsuario").attr("src", "style/img/iconos/iconoUsuarioTienda-rojo.png");

                var menuAdmin = "<div id='titulo-menuV-admin' class='menuV_inicio' onclick='mostrarPanelesAdmin()'>Administración</div>\n\
                              <div id='opciones-admin-usuario' class='menuV_opcion-admin' onclick='mostrarPanelesUsuario()'>Usuarios</div>\n\
                              <div id='opciones-admin-producto' class='menuV_opcion-admin' onclick='mostrarPanelesArticulo()'>Productos</div>\n\
                              <div id='opciones-admin-pedido' class='menuV_opcion-admin' onclick='mostrarListaPedidos()'>Pedidos</div>\n\
                              <div id='opciones-admin-newUsuario' class='menuV_opcion-admin'>Nuevo usuario</div>\n\
                              <div id='opciones-admin-newArticulo' class='menuV_opcion-admin'>Nuevo artículo</div>\n\
                              <br/>";
                
                var menuAdminDesplegable = "<li><a id='opciones-desplegable-admin-panelAdmin' class='menu_desplegable_seccion' href='javascript:mostrarPanelesAdmin()'>Administración</a></li>\n\
                                        <li><a id='opciones-desplegable-admin-usuarios' class='menu_desplegable_seccion' href='javascript:mostrarPanelesUsuario()'>Usuarios</a></li>\n\
                                        <li><a id='opciones-desplegable-admin-articulos' class='menu_desplegable_seccion' href='javascript:mostrarPanelesArticulo()'>Productos</a></li>\n\
                                        <li><a id='opciones-desplegable-admin-pedidos' class='menu_desplegable_seccion' href='javascript:mostrarListaPedidos()'>Pedidos</a></li>\n\
                                        <li><a id='opciones-desplegable-admin-newUsuario' class='menu_desplegable_seccion' href='#'>Nuevo usuario</a></li>\n\
                                        <li><a id='opciones-desplegable-admin-newArticulo' class='menu_desplegable_seccion' href='#'>Nuevo artículo</a></li>";
                
                
                $("#menuV_menu").prepend(menuAdmin);
                $("#opciones_menu_desplegable").html(menuAdminDesplegable);
                
                mostrarPanelesAdmin();

            } else {
                $("#iconoUsuario").attr("src", "style/img/iconos/iconoUsuarioTienda.png");
                $("#menuV_menu").html("");
                mostrarSeccion();
                mostrarNoticias();
            }


            //Acciones del menú desplegable de usuario logueado
            document.getElementById("enlaceDesconectar").onclick = function () {
                logOut();
            };
            document.getElementById("enlaceCambiarUsuario").onclick = function () {
                mostrarLogin();
            };
//            document.getElementById("opcion-desplegable-usuario-new").onclick = function () {
//                accionPrevia = this.id;
//                mostrarRegistroUsuario();
//            };
//            if (data[0].rolUsuario === "administrador") {
//                document.getElementById("opcion-desplegable-articulo-new").onclick = function () {
//                    accionPrevia = this.id;
//                    mostrarNewArticulo();
//                };
//            }
            
            //Acciones click del menuV
            $("#opciones-admin-newUsuario, #opciones-desplegable-admin-newUsuario").click(function () {
                accionPrevia = this.id;
                mostrarRegistroUsuario();

            });
            if (data[0].rolUsuario === "administrador") {
                $("#opciones-admin-newArticulo, #opciones-desplegable-admin-newArticulo").click(function () {
                    accionPrevia = this.id;
                    mostrarNewArticulo();
                });
            }

        }
