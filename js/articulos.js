function pintarArticulos($articulo) {

    //document.getElementById('articulos').style.backgroundColor = "rgba(255,255,255,.80)";

    datos = "<div class='col-xs-12 col-sm-6 col-lg-4'>\n\
                <article id='producto01' class='articulo  thumbnail'>\n\
                    <div id='contenedorImgArticulo'>\n\
                        <img class='producto_img' src='style/img/articulos/" + $articulo.imagenArticulo + ".png' alt='" + $articulo.nombreArticulo + "'/>\n\
                    </div>\n\
                    <div class='caption'>\n\
                        <p class='producto_titulo'>" + $articulo.nombreArticulo + "</p>\n\
                        <p class='producto_descripcion'>" + $articulo.descripcionArticulo + "</p>\n\
                        <p class='producto_precio col-xs-10'>" + $articulo.precioArticulo + "€</p>\n\
                        <p class='producto_boton col-xs-2'>\n\
                            <a href='#' class='btn btn-primary' role='button'>\n\
                                <span class='glyphicon glyphicon-shopping-cart'></span>\n\
                            </a>\n\
                        </p>\n\
                    </div>\n\
                </article>\n\
            </div>";

    return datos;
}

function mostrarArticulos($tipo) {

    //document.getElementById('articulos').style.backgroundColor = "rgba(255,255,255,.80)";

    $promesa = getAjax("articulo", "asc");

    $promesa.success(function (data) {

        datos = "<div id='rowArticulos' class='row fila'>";

        $.each(data, function (index) {

            if ($tipo === data[index].tipoArticulo) {
                datos += pintarArticulos(data[index]);
            }
        });
        datos += "</div>";
        $("#articulos").html(datos);
    });
}