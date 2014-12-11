function mostrarArticulos($tipo) {

    $promesa = getAjax("articulo", "asc");

    $promesa.success(function (data) {

        var datos = "";

        $.each(data, function (index) {

            if ($tipo === data[index].tipoArticulo) {

                datos += "<div class='articulos'>\n\
                <img src='style/img/articulos/" + data[index].imagenArticulo + ".png' alt='" + data[index].nombreArticulo + "'>\n\
                </div>";
            }
        });
        $("#articulos").html(datos);
    });
}