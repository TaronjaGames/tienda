function mostrarRanking() {
    
    document.getElementById('articulos').style.backgroundColor = "transparent";
    
    $promesa = getAjaxRanking();

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
            datos += "<tr class='row'>"
                    + "<td>" + (index + 1) + "</td>"
                    + "<td>"
                    + "<img class='imgRanking' src='style/img/articulos/" + data[index].imagenArticulo + ".png' alt='Imagen_Articulo'/>"
                    + "</td>"
                    + "<td>" + data[index].nombreArticulo + "</td>"
                    + "<td>" + data[index].plataformaArticulo + "</td>"
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


