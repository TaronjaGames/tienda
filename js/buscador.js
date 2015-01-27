$("#search").keypress(function (e) {
    if (e.which === 13) {

        var textoABuscar = document.getElementById("search").value;

        $promesa = getAjaxBuscador("articulo", textoABuscar, "asc");

        $promesa.success(function (data) {

            pintarArticulos(data);

        });
    }
});
