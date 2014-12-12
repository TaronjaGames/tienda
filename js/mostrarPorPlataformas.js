function mostrarPorPlataformas($plataforma) {
    $promesa = getAjax("articulo", "asc");

    $promesa.success(function (data) {
        datos = "";
        $.each(data, function (index) {

            if (data[index].plataformaArticulo === $plataforma) {
                datos += pintarArticulos(data[index]);
            }
        });
        $("#articulos").html(datos);
    });
}


