function mostrarPorSubseccion($secciones, $plataforma) {
    
    switch ($secciones) {
        case "Consolas":
            $secciones = "consola";
            break;
        case "Videojuegos":
            $secciones = "videojuego";
            break;
        case "Noticias":
            $secciones = "noticia";
            break;
        case "Ranking":
            $secciones = "ranking";
            break;
    }

    if ($secciones === "consola" || $secciones === "videojuego") {

        $promesa = getAjaxSubseccionesArticulos($secciones, $plataforma, "asc");

        $promesa.success(function (data) {        
            
            pintarArticulos(data);

        });
    }
    else if ($secciones === "noticia") {

        $promesa = getAjaxSubseccionesGenerico($secciones, $plataforma, "asc");

        $promesa.success(function (data) {

            pintarNoticias(data);

        });

    }
    else if ($secciones === "ranking") {

        document.getElementById('articulos').style.backgroundColor = "transparent";

        $promesa = getAjaxRankingSubseccion($plataforma);

        $promesa.success(function (data) {

            pintarRanking(data);

        });

    }
}
