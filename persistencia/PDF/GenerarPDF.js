function abrirPestana(idPedido) {
    window.open("persistencia/PDF/newPDF.html?idPedido=" + idPedido);
}

function generarPDF(idPedido) {
    $promesa = getAjaxPDF(idPedido);

    $promesa.success(function (data) {

        alto = 55;
        ancho = 10;

        var doc = new jsPDF();
        
        doc.setFontSize(30);
        doc.text(10, alto-40, "Taronja Games");
        doc.setFontSize(12);
        doc.text(10, alto-20, "Numero de pedido: " + data[0].idPedido);
        doc.text(10, alto-15, "Fecha de la compra: " + data[0].fechaPedido);
        doc.text(10, alto-10, "Cliente: "+data[0].nombreUsuario+" "+data[0].apellido1Usuario+" "+data[0].apellido2Usuario);
        doc.setFontSize(14);

        doc.text((ancho + 10), alto+5, "Articulo");
        doc.text((ancho + 70), alto+5, "Cantidad");
        doc.text((ancho + 100), alto+5, "Precio/Unidad");
        doc.text((ancho + 150), alto+5, "Precio total");
        doc.line(0, (alto + 7), 300, (alto + 7));
        alto=alto+5;
        precioFinal=0;

        $.each(data, function (index) {

            doc.setFontSize(12);

            idArticulo = data[index].nombreArticulo;
            cantidadArticulo = data[index].cantidadArticulo;
            precioArticulo = data[index].precioArticulo;
            precioTotal = (parseFloat(precioArticulo) * parseFloat(cantidadArticulo));
            precioTotal.toFixed(2);
            precioFinal=precioFinal+precioTotal;
            precioFinal.toFixed(2);
            
            doc.text((ancho + 10), (alto = alto + 10), idArticulo);
            doc.text((ancho + 70), alto, cantidadArticulo);
            doc.text((ancho + 100), alto, precioArticulo+" €");
            doc.text((ancho + 150), alto, precioTotal+" €");

        });

        doc.line(0, (alto+5), 300, (alto+5));
        doc.text((ancho + 125), alto+10, "Precio Final: ");
        doc.text((ancho + 150), alto+10, precioFinal+" €");

        doc.output('datauri');
    });
}