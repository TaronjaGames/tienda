

function mostrarNoticias() {

    $promesa = getAjax("noticia","asc");

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
            img.src = "./style/img/noticias/"+data[index].imagenNoticia;
            img.alt = data[index].tituloNoticia;

            //DIV TITULO

            texto_titulo = document.createTextNode(data[index].tituloNoticia);

            titulo = document.createElement("div");
            titulo.className = "articulos_titulo";
            titulo.appendChild(texto_titulo);

            //DIV CUERPO
            
            fechaArticulo=new Date(data[index].fechaNoticia);
            moment.locale('es');
            
            autor = document.createTextNode(
                    "Publicado por "
                    +data[index].autorNoticia 
                    +" ("
                    +moment(fechaArticulo).date()
                    +" de "
                    +moment(fechaArticulo).format("MMMM")
                    +" de "
                    +moment(fechaArticulo).year()
                    +"):");
            div_autor=document.createElement("p");
            div_autor.className="articulos_autores";
            div_autor.appendChild(autor);
            
            texto = document.createTextNode(data[index].textoNoticia);
            div_texto=document.createElement("p");
            div_texto.className="articulos_texto";
            div_texto.appendChild(texto);
            
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

    $promesa = getAjax("seccion","asc");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuV_seccion'>" + data[index].nombreSeccion + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='#'>" + data[index].nombreSeccion + "</a></li>";
        });
        $("#menuV_menu").append(datos);
        $("#opciones_menu_desplegable").append(datosDesplegable);
    });
}

function mostrarPlataforma() {

    $promesa = getAjax("plataforma","asc");

    $promesa.success(function(data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function(index) {
            datos += "<div class='menuH_plataforma'>" + data[index].nombrePlataforma + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='#'>" + data[index].nombrePlataforma + "</a></li>";
        });
        $("#plataformas").append(datos);
        $("#opciones_menu_desplegable2").append(datosDesplegable);
    });
}

//mostrarNoticias();
mostrarSeccion();
mostrarPlataforma();




