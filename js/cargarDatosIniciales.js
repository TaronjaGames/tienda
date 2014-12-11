function mostrarSeccion() {

    $promesa = getAjax("seccion","asc");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuV_seccion' onclick='mostrar"+data[index].nombreSeccion+"()'>" + data[index].nombreSeccion + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='#'>" + data[index].nombreSeccion + "</a></li>";
        });
        $("#menuV_menu").append(datos);
        $("#opciones_menu_desplegable").append(datosDesplegable);
    });
}

function mostrarPlataforma() {

    $promesa = getAjax("plataforma","asc");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuH_plataforma'>" + data[index].nombrePlataforma + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='#'>" + data[index].nombrePlataforma + "</a></li>";
        });
        $("#plataformas").append(datos);
        $("#opciones_menu_desplegable2").append(datosDesplegable);
    });
}

mostrarNoticias();
mostrarSeccion();
mostrarPlataforma();