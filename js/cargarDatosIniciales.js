
$(document).ready(function () {

    function subseccionPlataforma() {

        $promesa = getAjax("plataforma", "asc");
        $promesa.success(function (data) {
            listaPlataformas = data;
            //alert(listaPlataformas[2].nombrePlataforma);
            secciones = $('.contieneSecciones');
            $.each(secciones, function (index1) {
                var datos = "";
                $.each(data, function (index2) {
                    datos += "<div class='menuV_subseccion' onclick='mostrarPorSubseccion(\"" + $('#menuV_seccion' + (index1 + 1)).text() + "\",\"" + data[index2].nombrePlataforma + "\")'>" + data[index2].nombrePlataforma + "</div>";
                });

                $('#caja-subsecciones' + (index1 + 1)).append(datos);
            });
            accionarMenuV();
        });
    }


    function mostrarSeccion() {

        $promesa = getAjax("seccion", "asc");

        $promesa.success(function (data) {
            var datos = "";
            var datosDesplegable = "";

            $.each(data, function (index) {
                if (data[index].nombreSeccion === "Inicio") {
                    var on_click = "mostrarNoticias()";
                    datos += "<div class='menuV_inicio' onclick=" + on_click + ">" + data[index].nombreSeccion + "</div>";
                } else {
                    datos += "<div " + "id='contieneSecciones" + index + "' class='contieneSecciones'>";
                    var on_click = "mostrar" + data[index].nombreSeccion + "()";
                    datos += "<div id='menuV_seccion" + index + "' class='menuV_seccion'>" + data[index].nombreSeccion + "</div>\n\
                          <div id='caja-subsecciones" + index + "' class='caja-subsecciones'>\n\
                            <div class='menuV_subseccion menuV_subseccion-todo' onclick=" + on_click + ">Ver todo...</div>\n\
                          </div>";

                }
//            datos += "<div class='menuV_subseccion')>XBOX</div>";
                datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrar" + data[index].nombreSeccion + "()'>" + data[index].nombreSeccion + "</a></li>";
                datos += "</div>";
            });

            if (accionPrevia === "botonRegistro" || accionPrevia === "botonLogin" || usuarioLogueado !== "administrador") {
                $("#menuV_menu").html(datos);
            } else {
                $("#menuV_menu").append(datos);
            }

            $("#opciones_menu_desplegable").append(datosDesplegable);
            subseccionPlataforma();
        });

    }

    function mostrarPlataforma() {

        $promesa = getAjax("plataforma", "asc");

        $promesa.success(function (data) {
            var datos = "";
            var datosDesplegable = "";
            $.each(data, function (index) {
                datos += "<div class='menuH_plataforma' onclick='mostrarPorPlataformas(\"" + data[index].nombrePlataforma + "\")'>" + data[index].nombrePlataforma + "</div>";
                datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrarPorPlataformas(\"" + data[index].nombrePlataforma + "\")'>" + data[index].nombrePlataforma + "</a></li>";
            });
            $("#plataformas").append(datos);
            $("#opciones_menu_desplegable2").append(datosDesplegable);

        });
    }

    function comprobarSesion() {
        $promesa = getAjaxSessionExist();

        $promesa.success(function (data) {
            if (data.status === 200) {
                mostrarMenuLogin(data.usuario);
            } else {
                mostrarNoticias();
            }
        });
    }

    mostrarSeccion();
    comprobarSesion();
    mostrarPlataforma();

    mostrarRegistroUsuario();
    mostrarRegistroUsuarioAdmin();


    $("#botonRegistro").click(function () {
        accionPrevia = this.id;
        $("#bloqueRegistro").dialog("open");
        //mostrarRegistroUsuario();
        //mostrarSeccion();
    });



});

