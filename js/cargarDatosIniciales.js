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
            img.src = "./img/noticias/"+data[index].imagenNoticia;
            img.alt = data[index].tituloNoticia;

            //DIV TITULO

            texto_titulo = document.createTextNode(data[index].tituloNoticia);

            titulo = document.createElement("div");
            titulo.className = "articulos_titulo";
            titulo.appendChild(texto_titulo);

            //DIV CUERPO

            

            texto = document.createTextNode(data[index].textoNoticia);
            div_texto=document.createElement("p");
            div_texto.className="articulos_texto";
            div_texto.appendChild(texto);
            
            autor = document.createTextNode("Publicado por: "+data[index].autorNoticia +" ("+data[index].fechaNoticia+"):");
            div_autor=document.createElement("p");
            div_autor.className="articulos_autores";
            div_autor.appendChild(autor);
            
            cuerpo = document.createElement("div");
            cuerpo.className = "articulos_cuerpo";
            cuerpo.appendChild(div_autor);
            cuerpo.appendChild(div_texto);

            //CREAR ARTICULO

            articulo.appendChild(img);
            articulo.appendChild(titulo);
            articulo.appendChild(cuerpo);

            //AÑADIR

            document.getElementById("articulos").appendChild(articulo);

        });
    });

}
function mostrarSeccion() {

    $promesa = getAjax("seccion");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuV_seccion'>" + data[index].nombreSeccion + "</div>";
            datosDesplegable += "<div class='menuV_desplegable_seccion'>" + data[index].nombreSeccion + "</div>";
        });
        $("#menuV_menu").append(datos);
        $("#opciones_menu_desplegable").html(datosDesplegable);
    });
}

function mostrarPlataforma() {

    $promesa = getAjax("plataforma");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuH_plataforma'>" + data[index].nombrePlataforma + "</div>";
            datosDesplegable += "<div class='menuV_desplegable_seccion'>" + data[index].nombrePlataforma + "</div>";
        });
        $("#plataformas").append(datos);
        $("#opciones_menu_desplegable2").html(datosDesplegable);
    });
}

mostrarNoticias();
mostrarSeccion();
mostrarPlataforma();




