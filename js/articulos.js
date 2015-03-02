function pintarArticulos(data) {

    var datos = "<div id='rowArticulos' class='row fila'>";


    $.each(data, function (index) {
            

    datos += "<div id='bloqueArticulo-" + data[index].idArticulo + "' class='contenedorArticulo col-xs-12 col-sm-6 col-lg-4'>\n\
                <article class='articulo thumbnail'>\n\
                    <div class='contenedorImgArticulo'>\n\
                        <img class='producto_img' src='style/img/articulos/" + data[index].imagenArticulo + ".png' alt='" + data[index].nombreArticulo + "'/>\n\
                    </div>\n\
                    <div class='caption'>\n\
                        <p class='producto_titulo'>" + data[index].nombreArticulo + "</p>\n\
                        <p class='producto_descripcion'>" + data[index].descripcionArticulo + "</p>\n\
                        <div class='contenedorCompra row'>\n\
                            <div class='producto_precio col-xs-9 col-sm-9 col-lg-8'>\n\
                                <span>" + data[index].precioArticulo + "</span>\n\
                                <span>€</span>\n\
                            </div>\n\
                            <div class='producto_boton col-xs-3 col-sm-3 col-lg-4' onclick='añadirCarrito(this.parentNode.parentNode.parentNode.parentNode)'>\n\
                                <a href='#' class='btn btn-success' role='button'>\n\
                                    <span class='glyphicon glyphicon-shopping-cart'></span>\n\
                                </a>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </article>\n\
            </div>";
    });
    datos += "</div>";
    $("#articulos").html(datos);
}
