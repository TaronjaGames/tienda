function mostrarVideojuegos(){

$promesa = getAjaxArticuloPorTipo("videojuego","asc");

    $promesa.success(function (data) {
        
        pintarArticulos(data);

    });
}