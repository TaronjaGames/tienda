$("#search").keypress(function (e) {
    if (e.which === 13) {
        $promesa = getAjax("articulo", "asc");

        $promesa.success(function (data) {

            datos = "<div id='rowArticulos' class='row fila'>";

            $.each(data, function (index) {
                nombreArticulo = data[index].nombreArticulo.toLowerCase();
                textoABuscar = document.getElementById("search").value.toLowerCase();

                if (nombreArticulo.search(textoABuscar) !== -1) {
                    datos += pintarArticulos(index, data[index]);
                }
            });
            datos += "</div>";
            $("#articulos").html(datos);

        });
    }
});