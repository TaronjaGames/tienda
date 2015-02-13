
//DECLARACION DE CLASES

//Articulo

function Articulo() {
    this.id;
    this.nombre;
    this.cantidad;
    this.precio;
}
Carrito.prototype.getTotal = function () {
    return this.precio * this.cantidad;
}

//Carrito

function Carrito() {
    this.articulos = new Array();
}

Carrito.prototype.getArticulo = function (idArticulo) {

    for (i = 0; i < this.articulos.length; i++) {
        if (this.articulos[i].id == idArticulo) {
            return this.articulos[i];
        }
    }
    return null;
}

Carrito.prototype.getArticuloIndex = function (idArticulo) {

    for (i = 0; i < this.articulos.length; i++) {
        if (this.articulos[i].id == idArticulo) {
            return i;
        }
    }
    return null;
}

Carrito.prototype.añadirArticulo = function (articulo) {
    this.articulos.push(articulo);
}

Carrito.prototype.eliminarArticulo = function (idArticulo) {
    this.articulos.splice(this.getArticuloIndex(idArticulo), 1);
}

Carrito.prototype.vaciarCarrito = function () {
    this.articulos.splice(0, this.articulos.length);
}

//FUNCIONES DEL CARRITO

carrito = new Carrito();
function añadirCarrito(nodoArticulo) {

    nodoArticuloId = nodoArticulo.id.slice(nodoArticulo.id.indexOf("-") + 1);
    idc = "c_" + nodoArticuloId;
    if (document.getElementById(idc) === null) {

        //DIV PRINCIPAL

        nuevoarticulo = document.createElement("div");
        nuevoarticulo.id = idc;
        nuevoarticulo.className = "carritoArticulo";
        //DIV IMAGEN

        divimagen = document.createElement("div");
        divimagen.className = "enImagen";
        //Creacion etiqueta img

        imagen = nodoArticulo.getElementsByTagName("img")[0].cloneNode(true);
        imagen.className = "imgCarrito";
        //DIV TITULO

        divtitulo = document.createElement("div");
        divtitulo.className = "enNombre";
        //Contenido Titulo

        titulo = nodoArticulo.getElementsByClassName("producto_titulo")[0].firstChild.cloneNode(true);
        //DIV PRECIO

        divprecio = nodoArticulo.getElementsByClassName("producto_precio")[0].cloneNode(true);
        divprecio.className = "enPrecio";
        //DIV BORRAR

        divborrar = document.createElement("div");
        divborrar.className = "enBorrar";
        divborrar.setAttribute("onclick", "restarCarrito(this.parentNode)");
        //Contenido Borrar

        imagenborrar = document.createElement("img");
        imagenborrar.src = "style/img/iconos/borrar.png";
        imagenborrar.alt = "Restar";
        imagenborrar.className = "imgBorrar";
        //DIV CANTIDAD

        divcantidad = document.createElement("div");
        divcantidad.className = "enCantidad";
        //DIV SUMAR

        divsumar = document.createElement("div");
        divsumar.className = "enSumar";
        divsumar.setAttribute("onclick", "sumarCarrito(this.parentNode)");
        //Contenido Borrar

        imagensumar = document.createElement("img");
        imagensumar.src = "style/img/iconos/mas.png";
        imagensumar.alt = "Sumar";
        imagensumar.className = "imgSumar";
        //Contenido Cantidad

        cantidad = document.createTextNode("1");
        //DIV TOTAL

        divtotal = divprecio.cloneNode(true);
        divtotal.className = "enTotal";
        //DIV BORRAR TODO

        divborrartodo = document.createElement("div");
        divborrartodo.className = "enBorrarTodo";
        divborrartodo.setAttribute("onclick", "eliminarCarrito(this.parentNode)");
        //Contenido BorrarTodo

        imagenborrartodo = document.createElement("img");
        imagenborrartodo.src = "style/img/iconos/borrartodo.png";
        imagenborrartodo.alt = "Borrar Todo";
        imagenborrartodo.className = "imgBorrarTodo";
        //ESTRUCTURA DE ETIQUETAS

        divimagen.appendChild(imagen);
        divtitulo.appendChild(titulo);
        divborrar.appendChild(imagenborrar);
        divcantidad.appendChild(cantidad);
        divsumar.appendChild(imagensumar);
        divborrartodo.appendChild(imagenborrartodo);
        nuevoarticulo.appendChild(divimagen);
        nuevoarticulo.appendChild(divtitulo);
        nuevoarticulo.appendChild(divprecio);
        nuevoarticulo.appendChild(divborrar);
        nuevoarticulo.appendChild(divcantidad);
        nuevoarticulo.appendChild(divsumar);
        nuevoarticulo.appendChild(divtotal);
        nuevoarticulo.appendChild(divborrartodo);
        zonaArticulosCarrito = document.getElementById("zonaArticulosCarrito");
        zonaArticulosCarrito.appendChild(nuevoarticulo);
        //Añadir a Carrito

        articulo = new Articulo();
        articulo.id = nodoArticuloId;
        articulo.cantidad = 1;
        articulo.nombre = nodoArticulo.getElementsByClassName("producto_titulo")[0].firstChild.nodeValue;
        articulo.precio = nodoArticulo.getElementsByClassName("producto_precio")[0].getElementsByTagName("span")[0].firstChild.nodeValue;
        carrito.añadirArticulo(articulo);
        totalCarrito();
    } else {
        articulomod = document.getElementById(idc);
        //SUMAR CANTIDAD

        cantidadmod = articulomod.getElementsByClassName("enCantidad")[0];
        newcantidad = parseInt(cantidadmod.firstChild.nodeValue) + 1;
        cantidadmod.replaceChild(document.createTextNode(newcantidad), cantidadmod.firstChild);
        //Sumar Cantidad al Carrito

        carrito.getArticulo(nodoArticuloId).cantidad++;
        //RECALCULAR TOTAL

        recalcularSubtotalCarrito(articulomod, newcantidad);
    }



    //INDICAR NUEVO ARTICULO AÑADIDO AL CARRITO

    if ($('#carritoFixed').css('display') == 'none') {

        //CSS
        $('#botonCarrito').css({'background-color': '#5CB85C', 'border-color': '#4CAE4C'});
        $('#botonCarritoNew').css({'display': 'inline-block'});
        //Cantidad de nuevos articulos indicada en el boton del carrito
        var newCantidad = parseInt($('#botonCarritoNew').text()) + 1;
        $('#botonCarritoNew').html(newCantidad);
        //Parpadeo del boton

        $('#botonCarrito').animate({opacity: 0.5}).animate({opacity: 1});
    }

}


function restarCarrito(nodoArticulo) {
    if (nodoArticulo.getElementsByClassName("enCantidad")[0].firstChild.nodeValue > 1) {
//RESTAR CANTIDAD

        cantidadmod = nodoArticulo.getElementsByClassName("enCantidad")[0];
        newcantidad = parseInt(cantidadmod.firstChild.nodeValue) - 1;
        cantidadmod.replaceChild(document.createTextNode(newcantidad), cantidadmod.firstChild);
        //Restar Cantidad al Carrito

        carrito.getArticulo(nodoArticuloId).cantidad--;
        //RECALCULAR TOTAL

        recalcularSubtotalCarrito(nodoArticulo, newcantidad);
    } else {
        eliminarCarrito(nodoArticulo);
    }
}

function sumarCarrito(nodoArticulo) {

//SUMAR CANTIDAD

    cantidadmod = nodoArticulo.getElementsByClassName("enCantidad")[0];
    newcantidad = parseInt(cantidadmod.firstChild.nodeValue) + 1;
    cantidadmod.replaceChild(document.createTextNode(newcantidad), cantidadmod.firstChild);
    //Sumar Cantidad al Carrito

    carrito.getArticulo(nodoArticuloId).cantidad++;
    //RECALCULAR TOTAL

    recalcularSubtotalCarrito(nodoArticulo, newcantidad);
}

function recalcularSubtotalCarrito(nodoArticulo, newCantidad) {
    totalmod = nodoArticulo.getElementsByClassName("enTotal")[0].getElementsByTagName("span")[0].firstChild;
    totalprecio = parseFloat(nodoArticulo.getElementsByClassName("enPrecio")[0].getElementsByTagName("span")[0].firstChild.nodeValue) * newCantidad;
    totalmod.nodeValue = totalprecio.toFixed(2);
    totalCarrito();
}

function eliminarCarrito(nodoArticulo) {

    nodoArticulo.parentNode.removeChild(nodoArticulo);
    //eliminar del carrito

    carrito.eliminarArticulo(nodoArticuloId);
    totalCarrito();
}

function vaciarCarrito() {
    $("#zonaArticulosCarrito").empty();
    totalCarrito();
    carrito.vaciarCarrito();
}

function totalCarrito() {

// Calculo del total de la Factura

    totales = document.getElementById("zonaArticulosCarrito").getElementsByClassName("enTotal");
    FacturaFinal = 0;
    for (i = 0; i < totales.length; i++) {
        FacturaFinal = FacturaFinal + parseFloat(totales[i].getElementsByTagName("span")[0].firstChild.nodeValue);
    }

    document.getElementById("importeTotalCarrito").firstChild.nodeValue = FacturaFinal.toFixed(2) + "€";
}

function mostrarCarrito() {

    if ($('#carritoFixed').css('display') == 'none') {

        $('#carritoFixed').fadeIn('slow');
        $('#botonCarrito').css({'background-color': '#337AB7', 'border-color': '#2E6DA4'});
        $('#botonCarritoNew').css({'display': 'none'});
        $('#botonCarritoNew').html(0);
    } else {
        $('#carritoFixed').fadeOut('slow');
    }
}

function enviarCarrito($carrito) {
    if ($carrito.articulos.length !== 0) {
        confirmacion = confirm("¿Está seguro de que desea confirmar la compra?");
        if (confirmacion === true) {
            $promesa = getAjaxCarrito($carrito);

            $promesa.success(function (data) {

                if (data.status == 401) {
                    alert("Necesitas estar logueado para poder realizar la compra");
                    $("#bloqueLogin").dialog("open");
                } else if (data.status == 200) {
                    alert(data.mensaje);
                    abrirPestana(data.idPedido);
                    mostrarCarrito();
                    vaciarCarrito();
                }
            });
        }
    } else {
        alert("No tienes ningun articulo en el carrito");
    }
}