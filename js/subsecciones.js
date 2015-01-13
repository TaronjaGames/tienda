function mostrarPorSubseccion($secciones, $plataforma) {

    switch ($secciones) {
        case "Consolas":
            $secciones = "consola";
            break;
        case "Videojuegos":
            $secciones = "videojuego";
            break;
        case "Noticias":
            $secciones = "noticia";
            break;
        case "Ranking":
            $secciones = "ranking";
            break;
    }

    if ($secciones === "consola" || $secciones === "videojuego") {

        $promesa = getAjaxSubseccionesArticulos($secciones, $plataforma, "asc");

        $promesa.success(function (data) {

            datos = "<div id='rowArticulos' class='row fila'>";

            $.each(data, function (index) {
                datos += pintarArticulos(index, data[index]);
            });

            datos += "</div>";
            $("#articulos").html(datos);
        });
    }
    else if ($secciones === "noticia") {

        $promesa = getAjaxSubseccionesGenerico($secciones, $plataforma, "asc");

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
                        + "<div class='articulos_contenedorImagen'>"
                        + "<img src='style/img/noticias/" + data[index].imagenNoticia + "' alt='" + data[index].tituloNoticia + "'>"
                        + "</div>"
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
    else if ($secciones === "ranking") {

        document.getElementById('articulos').style.backgroundColor = "transparent";

        $promesa = getAjaxRankingSubseccion($plataforma);

        $promesa.success(function (data) {

            fechaRanking = new Date();//Fecha actual
            moment.locale('es');//Formato de la fecha

            var datos = "<div id='contenedorRanking'>"
                    + "<p id='tituloRanking'>Ranking de videojuegos por cantidad de ventas</p>"
                    + "<p id='fechaRanking'>(Ranking a fecha: "
                    + moment(fechaRanking).date()
                    + " de "
                    + moment(fechaRanking).format("MMMM")
                    + " de "
                    + moment(fechaRanking).year()
                    + ")</p><br/>"
                    + "<div id='contenedorTablaRanking'>"
                    + "<table id='tablaRanking' class='table table-responsive table-hover'>"//table-striped
                    + "<tr class='row encabezadoRanking'>"
                    + "<th>POSICIÓN</th>"
                    + "<th colspan='2'>VIDEOJUEGO</th>"
                    //+ "<th></th>"
                    + "<th>PLATAFORMA</th>"
                    + "<th>DESCRIPCIÓN</th>"
                    + "<th>Nº DE VENTAS</th>"
                    + "<tr>";

            $.each(data, function (index) {
                datos += "<tr id='filaRanking-" + (index + 1) + "' class='row'>"
                        + "<td id='numeroRanking-" + (index + 1) + "' class='numeroRanking'>" + (index + 1) + "</td>"
                        + "<td>"
                        + "<img class='imgRanking' src='style/img/articulos/" + data[index].imagenArticulo + ".png' alt='Imagen_Articulo'/>"
                        + "</td>"
                        + "<td>" + data[index].nombreArticulo + "</td>"
                        + "<td>" + data[index].plataforma + "</td>"
                        + "<td>" + data[index].descripcionArticulo + "</td>"
                        + "<td>" + data[index].ventaArticulo + "</td>"
                        + "</tr>";
            });

            datos += "</table>"
                    + "</div>"
                    + "</div>";

            $("#articulos").html(datos);

        });

    }
}