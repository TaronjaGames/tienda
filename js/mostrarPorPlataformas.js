
function mostrarPorPlataformas($plataforma) {
    
    document.getElementById("audio"+$plataforma).play();

    $promesa = getAjaxArticuloPorPlataforma($plataforma, "asc");
    $promesa.success(function (data) {
        pintarArticulos(data);
    });
}

