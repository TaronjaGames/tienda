function pintarArticulos($index, $articulo) {

    //document.getElementById('articulos').style.backgroundColor = "rgba(255,255,255,.80)";

    datos = "<div id='bloqueArticulo-" + $index + "' class='contenedorArticulo col-xs-12 col-sm-6 col-lg-4'>\n\
                <article class='articulo thumbnail'>\n\
                    <div class='contenedorImgArticulo'>\n\
                        <img class='producto_img' src='style/img/articulos/" + $articulo.imagenArticulo + ".png' alt='" + $articulo.nombreArticulo + "'/>\n\
                    </div>\n\
                    <div class='caption'>\n\
                        <p class='producto_titulo'>" + $articulo.nombreArticulo + "</p>\n\
                        <p class='producto_descripcion'>" + $articulo.descripcionArticulo + "</p>\n\
                        <div class='contenedorCompra row'>\n\
                            <div class='producto_precio col-xs-9 col-sm-9 col-lg-8'>" + $articulo.precioArticulo + "€</div>\n\
                            <div class='producto_boton col-xs-3 col-sm-3 col-lg-4'>\n\
                                <a href='#' class='btn btn-success' role='button'>\n\
                                    <span class='glyphicon glyphicon-shopping-cart'></span>\n\
                                </a>\n\
                            </div>\n\
                        </div>\n\
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
                datos += pintarArticulos(index, data[index]);
            }
        });
        datos += "</div>";
        $("#articulos").html(datos);
    });
}