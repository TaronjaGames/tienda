$("#search").keypress(function (e) {
    if (e.which === 13) {

        var textoABuscar = document.getElementById("search").value;

        $promesa = getAjaxBuscador("articulo", textoABuscar, "asc");

        $promesa.success(function (data) {

            pintarArticulos(data);
            
            var datos = "<div id='rowArticulos' class='row fila'>";

            $.each(data, function (index) {

                datos += pintarArticulos(index, data[index]);

            });
            datos += "</div>";
            $("#articulos").html(datos);

        });
    }
});
