function añadir(articulo) {
    idc = "c" + articulo.id;

    if (document.getElementById(idc) === null) {

        //DIV PRINCIPAL

        nuevoarticulo = document.createElement("div");
        nuevoarticulo.id = idc;
        nuevoarticulo.className = "carritoArticulo";


        //DIV IMAGEN

        divimagen = document.createElement("div");
        divimagen.className = "enImagen";

        //Creacion etiqueta img

        imagen = articulo.getElementsByTagName("img")[0].cloneNode(true);
        imagen.className = "imgCarrito";


        //DIV TITULO

        divtitulo = document.createElement("div");
        divtitulo.className = "enNombre";

        //Contenido Titulo

        titulo = articulo.getElementsByClassName("producto_titulo")[0].firstChild.cloneNode(true);


        //DIV PRECIO

        divprecio = articulo.getElementsByClassName("producto_precio")[0].cloneNode(true);
        divprecio.className = "enPrecio";


        //DIV CANTIDAD

        divcantidad = document.createElement("div");
        divcantidad.className = "enCantidad";

        //Contenido Cantidad

        cantidad = document.createTextNode("1");


        //DIV TOTAL

        divtotal = divprecio.cloneNode(true);
        divtotal.className = "enTotal";


        //DIV BORRAR

        divborrar = document.createElement("div");
        divborrar.className = "enBorrar";
        divborrar.setAttribute("onclick", "restar(this.parentNode)");
        


        //Contenido Borrar

        imagenborrar = document.createElement("img");
        imagenborrar.src = "style/img/iconos/borrar.png";
        imagenborrar.alt = "Borrar";
        imagenborrar.className = "imgBorrar";


        //DIV BORRAR TODO

        divborrartodo = document.createElement("div");
        divborrartodo.className = "enBorrarTodo";
        divborrartodo.setAttribute("onclick", "eliminar(this.parentNode)");

        //Contenido BorrarTodo

        imagenborrartodo = document.createElement("img");
        imagenborrartodo.src = "style/img/iconos/borrartodo.png";
        imagenborrartodo.alt = "Borrar Todo";
        imagenborrartodo.className = "imgBorrarTodo";


        //ESTRUCTURA DE ETIQUETAS

        divimagen.appendChild(imagen);
        divtitulo.appendChild(titulo);
        divcantidad.appendChild(cantidad);
        divborrar.appendChild(imagenborrar);
        divborrartodo.appendChild(imagenborrartodo);

        nuevoarticulo.appendChild(divimagen);
        nuevoarticulo.appendChild(divtitulo);
        nuevoarticulo.appendChild(divprecio);
        nuevoarticulo.appendChild(divcantidad);
        nuevoarticulo.appendChild(divtotal);
        nuevoarticulo.appendChild(divborrar);
        nuevoarticulo.appendChild(divborrartodo);


        zonaArticulosCarrito = document.getElementById("zonaArticulosCarrito");
        zonaArticulosCarrito.appendChild(nuevoarticulo);

    } else {
        articulomod = document.getElementById(idc);

        //SUMAR CANTIDAD

        cantidadmod = articulomod.getElementsByClassName("enCantidad")[0];
        newcantidad = parseInt(cantidadmod.firstChild.nodeValue) + 1;
        cantidadmod.replaceChild(document.createTextNode(newcantidad), cantidadmod.firstChild);

        //RECALCULAR TOTAL

        totalmod = articulomod.getElementsByClassName("enTotal")[0].getElementsByTagName("span")[0].firstChild;
        totalprecio = parseFloat(articulomod.getElementsByClassName("enPrecio")[0].getElementsByTagName("span")[0].firstChild.nodeValue) * newcantidad;
        totalmod.nodeValue = totalprecio.toFixed(2);
    }
    totalCarrito();

}


function restar(articulo) {
    if (articulo.getElementsByClassName("enCantidad")[0].firstChild.nodeValue > 1) {
        //RESTAR CANTIDAD

        cantidadmod = articulo.getElementsByClassName("enCantidad")[0];
        newcantidad = parseInt(cantidadmod.firstChild.nodeValue) - 1;
        cantidadmod.replaceChild(document.createTextNode(newcantidad), cantidadmod.firstChild);

        //RECALCULAR TOTAL

        totalmod = articulomod.getElementsByClassName("enTotal")[0].getElementsByTagName("span")[0].firstChild;
        totalprecio = parseFloat(articulomod.getElementsByClassName("enPrecio")[0].getElementsByTagName("span")[0].firstChild.nodeValue) * newcantidad;
        totalmod.nodeValue = totalprecio.toFixed(2);

    } else {
        eliminar(articulo);
    }
    totalCarrito();
}

function eliminar(articulo) {

    articulo.parentNode.removeChild(articulo);
    totalCarrito();
}

function totalCarrito(){
    
    // Calculo del total de la Factura
    
    totales=document.getElementById("zonaArticulosCarrito").getElementsByClassName("enTotal");
    FacturaFinal=0;
    
    for(i=0;i<totales.length;i++){
        FacturaFinal=FacturaFinal+parseFloat(totales[i].getElementsByTagName("span")[0].firstChild.nodeValue);
    }

    document.getElementById("importeTotalCarrito").firstChild.nodeValue=FacturaFinal.toFixed(2)+"€";
}

function mostrarCarrito(){
    carrito=document.getElementById("carritoFixed");
    
    if (carrito.className=="hidden"){
        carrito.className="";
    } else{
        carrito.className="hidden";
    }
}
