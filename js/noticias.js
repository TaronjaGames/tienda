function mostrarNoticias() {

    $promesa = getAjax("noticia", "asc");

    $promesa.success(function (data) {
        var datos = "";
        var className = "";
        $.each(data, function (index) {

            if (index % 2 !== 0) {
                className = "articulos_noticia articulo_noticia_right";
            } else {
                className = "articulos_noticia articulo_noticia_left";
            }

            fechaArticulo = new Date(data[index].fechaNoticia);
            moment.locale('es');
            var autor = "Publicado por "
                    + data[index].autorNoticia
                    + " ("
                    + moment(fechaArticulo).date()
                    + " de "
                    + moment(fechaArticulo).format("MMMM")
                    + " de "
                    + moment(fechaArticulo).year()
                    + "):";

            datos += "<article id='articulo" + data[index].idNoticia + "' class='" + className + "'>"
            + "<img src='style/img/noticias/" + data[index].imagenNoticia + "' alt='" + data[index].tituloNoticia + "'>"
            + "<div class='articulos_titulo'>" + data[index].tituloNoticia + "</div>"
            + "<div class='articulos_cuerpo'>"
            + "<p class='articulos_autores'>" + autor + "</p>"
            + "<p class='articulos_texto'>" + data[index].textoNoticia + "</p>"
            + "</div>"
            + "</article>";

        });
        $("#articulos").html(datos);
    });

}