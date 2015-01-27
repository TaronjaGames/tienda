function mostrarConsolas() {
    
$promesa = getAjaxArticuloPorTipo("consola", "asc");

    $promesa.success(function (data) {
               
        pintarArticulos(data);

    });
}