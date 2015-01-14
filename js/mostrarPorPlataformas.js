function mostrarPorPlataformas($plataforma) {
    $promesa = getAjax("articulo", "asc");

    $promesa.success(function (data) {
        
        datos = "<div id='rowArticulos' class='row fila'>";
        $.each(data, function (index) {

            if (data[index].plataforma === $plataforma) {
                datos += pintarArticulos(index,data[index]);
            }
        });
        datos += "</div>";
        $("#articulos").html(datos);
    });
}


