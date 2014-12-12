function mostrarRanking() {

    $promesa = getAjaxRanking();

    $promesa.success(function(data) {

        var datos = "<table id='tablaRanking' class='table table-striped table-condensed'>"
                + "<caption id='tituloRanking'>Ranking videojuegos por nº de ventas</caption>";

        $.each(data, function(index) {
            datos += "<tr>"
                    + "<td>" + (index + 1) + "</td>"
                    + "<td>" + data[index].nombreArticulo + "</td>"
                    + "<td>" + data[index].descripcionArticulo + "</td>"
                    + "<td>" + data[index].ventaArticulo + "</td>"
                    + "</tr>";
        });

        fechaRanking = new Date();//Fecha actual
        moment.locale('es');//Formato de la fecha

        datos += "<br/><p>(Ranking a fecha: "
                + moment(fechaRanking).date()
                + " de "
                + moment(fechaRanking).format("MMMM")
                + " de "
                + moment(fechaRanking).year()
                + ")</p>"
                + "</table>";

        $("#articulos").html(datos);

    });

}


