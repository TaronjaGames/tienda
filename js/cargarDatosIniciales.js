function mostrarMenuDesplegable() {
    var Menu = document.getElementById("menuV");
    Menu.setAttribute("display", "block");
}

function mostrarNoticias() {

    $promesa = getAjax("noticia");

    $promesa.success(function (data) {
        
        $.each(data, function (index) {

            //ARTICULO

            articulo = document.createElement("article");
            articulo.id = "articulo" + data[index].idNoticia;
            if (index % 2 != 0) {
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

}
mostrarNoticias();




