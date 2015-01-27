function mostrarNoticias() {

    $promesa = getAjax("noticia","asc");

    $promesa.success(function (data) {
        
        pintarNoticias(data);
        
    });

}

function pintarNoticias(data){
    var datos = "";
        var className = "";
        $.each(data, function (index) {

            if (index % 2 !== 0) {
                className = "articulos_noticia articulo_noticia_right";
            } else {
                className = "articulos_noticia articulo_noticia_left";
            }

            fechaArticulo = new Date(data[index].fechaNoticia);
            moment.locale('es');
            var autor = "Publicado por "
                    + data[index].autorNoticia
                    + " ("
                    + moment(fechaArticulo).date()
                    + " de "
                    + moment(fechaArticulo).format("MMMM")
                    + " de "
                    + moment(fechaArticulo).year()
                    + "):";

            datos += "<article id='articulo" + data[index].idNoticia + "' class='" + className + "'>"
                    + "<div class='articulos_contenedorImagen'>"
                    + "<img class='imgNoticia' src='style/img/noticias/" + data[index].imagenNoticia + "' alt='" + data[index].tituloNoticia + "'>"
                    + "<iframe id='video"+index+"'class='videoNoticia' src='http://www.youtube.com/embed/"+data[index].videoNoticia+"' frameborder='0' allowfullscreen></iframe>"
                    + "</div>"
                    + "<div class='articulos_titulo'>" + data[index].tituloNoticia + "</div>"
                    + "<div class='articulos_cuerpo'>"
                    + "<p class='articulos_autores'>" + autor + "</p>"
                    + "<p class='articulos_texto'>" + data[index].textoNoticia + "</p>"
                    + "</div>"
                    + "</article>";

        });
        $("#articulos").html(datos);
        
        redimensionarVideo();
}

function redimensionarVideo() {
    imagenes = $("#contenidos img");
    videos = $("#contenidos iframe");

    $('img').each(function (i, element) {
        $(element).load(function () {
            for (var i = 0; i < imagenes.length; i++) {
                if (imagenes[i] === this) {
                    var imagen = imagenes[i];
                    //var video = videos[i];
                    $("#video"+i).css({'width':imagen.clientWidth, 'height':imagen.clientHeight});
                }
            }
        });
    });
}