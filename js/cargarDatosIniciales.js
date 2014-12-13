function mostrarSeccion() {

    $promesa = getAjax("seccion","asc");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            if (data[index].nombreSeccion === "Inicio"){
                var on_click = "mostrarNoticias()";
                //var on_click = "document.location.href = 'index.html'";
            } else {
                var on_click = "mostrar" + data[index].nombreSeccion + "()";
            }
            datos += "<div class='menuV_seccion' onclick=" + on_click + ">" + data[index].nombreSeccion + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrar"+data[index].nombreSeccion+"()'>" + data[index].nombreSeccion + "</a></li>";
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
            datos += "<div class='menuH_plataforma' onclick='mostrarPorPlataformas(\""+data[index].nombrePlataforma+"\")'>" + data[index].nombrePlataforma + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrarPorPlataformas(\""+data[index].nombrePlataforma+"\")'>" + data[index].nombrePlataforma + "</a></li>";
        });
        $("#plataformas").append(datos);
        $("#opciones_menu_desplegable2").append(datosDesplegable);
    });
}

mostrarNoticias();
mostrarSeccion();
mostrarPlataforma();
