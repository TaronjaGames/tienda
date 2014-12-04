function mostrarMenuDesplegable() {
    var Menu = document.getElementById("menuV");
    Menu.setAttribute("display", "block");
}

function mostrarNoticias() {

    $promesa = getAjax("noticia");

    $promesa.success(function(data) {
        
        
        $.each(data, function(index) {

            //ARTICULO

            articulo = document.createElement("article");
            articulo.id = "articulo" + data[index].idNoticia;
            if (index % 2 !== 0) {
                articulo.className = "articulos_noticia articulo_noticia_right";
            } else {
                articulo.className = "articulos_noticia articulo_noticia_left";
            }

            //IMG

            img = document.createElement("img");
            img.src = data[index].imagenNoticia;
            img.alt = data[index].tituloNoticia;

            //DIV TITULO

            texto_titulo = document.createTextNode(data[index].tituloNoticia);

            titulo = document.createElement("div");
            titulo.className = "articulos_titulo";
            titulo.appendChild(texto_titulo);

            //DIV CUERPO

            texto_cuerpo = document.createTextNode(data[index].textoNoticia);

            cuerpo = document.createElement("div");
            cuerpo.className = "articulos_cuerpo";
            cuerpo.appendChild(texto_cuerpo);

            //CREAR ARTICULO

            articulo.appendChild(img);
            articulo.appendChild(titulo);
            articulo.appendChild(cuerpo);

            //AÑADIR

            document.getElementById("articulos").appendChild(articulo);

        });
    });

}/*
function mostrarPlataformas() {

    $promesa = getAjax("plataforma");

    $promesa.success(function(data) {

        $.each(data, function(index) {



        });
    });
}*/
function mostrarSeccion() {

    $promesa = getAjax("seccion");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuV_seccion'>" + data[index].nombreSeccion + "</div>";
            datosDesplegable += "<div class='menuV_desplegable_seccion'>" + data[index].nombreSeccion + "</div>";
        });
        $("#menuV_menu").html(datos);
        $("#opciones_menu_desplegable").html(datosDesplegable);
    });
}
mostrarNoticias();
mostrarSeccion();




