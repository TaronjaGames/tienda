
function mostrarPanelesAdmin() {
    var panelAdmin = "<div id='caja-paneles-admin' class='caja-paneles'>\n\
                            <p id='titulo-caja-paneles-admin' class='titulo-caja-paneles'>Panel principal Administración</p>\n\
                            <div id='panel-admin-usuario' class='panel-admin' onclick='mostrarPanelesUsuario()'>\n\
                                <img id='iconoGestionUsuarios' class='img-iconoGestion' src='style/img/iconos/iconoGestionUsuarios.png' alt='iconoGestionUsuarios'/>\n\
                                <p id='texto-iconoGestionUsuarios' class='texto-iconoGestion'>Usuarios</p>\n\
                            </div>\n\
                            <div id='panel-admin-producto' class='panel-admin' onclick='mostrarPanelesArticulo()'>\n\
                                <img id='iconoGestionProductos' class='img-iconoGestion' src='style/img/iconos/iconoGestionArticulos.png' alt='iconoGestionProductos'/>\n\
                                <p id='texto-iconoGestionProductos' class='texto-iconoGestion'>Productos</p>\n\
                            </div>\n\
                            <div id='panel-admin-pedido' class='panel-admin' onclick='mostrarListaPedidos()'>\n\
                                <img id='iconoGestionPedidos' class='img-iconoGestion' src='style/img/iconos/iconoGestionPedidos.png' alt='iconoGestionPedidos'/>\n\
                                <p id='texto-iconoGestionPedidos' class='texto-iconoGestion'>Pedidos</p>\n\
                            </div>\n\
                        </div>";

    $("#articulos").html(panelAdmin);
}

function mostrarPanelesUsuario() {
    var panelAdminUsuario = "<div id='caja-paneles-usuario' class='caja-paneles'>\n\
                            <p id='titulo-caja-paneles-usuario' class='titulo-caja-paneles'>Panel gestión usuarios</p>\n\
                            <div id='panel-admin-usuario-new' class='panel-admin'>\n\
                                <img id='iconoGestionUsuarios-new' class='img-iconoGestion' src='style/img/iconos/iconoGestionUsuarios-new.png' alt='iconoNuevoUsuario'/>\n\
                                <p id='texto-iconoGestionUsuarios-new' class='texto-iconoGestion'>Nuevo usuario</p>\n\
                            </div>\n\
                            <div id='panel-admin-usuario-list' class='panel-admin'>\n\
                                <img id='iconoGestionUsuarios-list' class='img-iconoGestion' src='style/img/iconos/iconoGestionUsuarios-list.png' alt='iconoListaUsuarios'/>\n\
                                <p id='texto-iconoGestionUsuarios-list' class='texto-iconoGestion'>Listado</p>\n\
                            </div>\n\
                            <div id='panel-admin-usuario-atras' class='panel-admin' onclick='mostrarPanelesAdmin()'>\n\
                                <img id='iconoGestionUsuarios-atras' class='img-iconoGestion' src='style/img/iconos/iconoVolverAtras.png' alt='iconoVolverAtras'/>\n\
                                <p id='texto-iconoGestionUsuarios-atras' class='texto-iconoGestion'>Panel principal</p>\n\
                            </div>\n\
                        </div>";

    $("#articulos").html(panelAdminUsuario);

    $("#panel-admin-usuario-new").click(function () {
        accionPrevia = this.id;
        //alert(accionPrevia);
        mostrarRegistroUsuarioAdmin();
    });
    $("#panel-admin-usuario-list").click(function () {
        accionPrevia = this.id;
        //alert(accionPrevia);
        mostrarListaUsuarios();
    });
}

function mostrarPanelesArticulo() {
    var panelAdminArticulo = "<div id='caja-paneles-articulo' class='caja-paneles'>\n\
                            <p id='titulo-caja-paneles-articulo' class='titulo-caja-paneles'>Panel gestión articulos</p>\n\
                            <div id='panel-admin-articulo-new' class='panel-admin'>\n\
                                <img id='iconoGestionArticulos-new' class='img-iconoGestion' src='style/img/iconos/iconoGestionArticulos-new.png' alt='iconoNuevoArticulo'/>\n\
                                <p id='texto-iconoGestionArticulos-new' class='texto-iconoGestion'>Nuevo articulo</p>\n\
                            </div>\n\
                            <div id='panel-admin-articulo-list' class='panel-admin'>\n\
                                <img id='iconoGestionArticulos-list' class='img-iconoGestion' src='style/img/iconos/iconoGestionArticulos-list.png' alt='iconoListaArticulos'/>\n\
                                <p id='texto-iconoGestionArticulos-list' class='texto-iconoGestion'>Listado</p>\n\
                            </div>\n\
                            <div id='panel-admin-articulo-atras' class='panel-admin' onclick='mostrarPanelesAdmin()'>\n\
                                <img id='iconoGestionArticulos-atras' class='img-iconoGestion' src='style/img/iconos/iconoVolverAtras.png' alt='iconoVolverAtras'/>\n\
                                <p id='texto-iconoGestionArticulos-atras' class='texto-iconoGestion'>Panel principal</p>\n\
                            </div>\n\
                        </div>";

    $("#articulos").html(panelAdminArticulo);

    $("#panel-admin-articulo-new").click(function () {
        accionPrevia = this.id;
        //alert(accionPrevia);
        mostrarNewArticulo();
    });
    $("#panel-admin-articulo-list").click(function () {
        accionPrevia = this.id;
        //alert(accionPrevia);
        mostrarListaArticulos();
    });
}


