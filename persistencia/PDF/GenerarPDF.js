function abrirPestana(idPedido) {
    window.open("persistencia/PDF/newPDF.html?idPedido=" + idPedido);
}

function generarPDF(idPedido) {
    $promesa = getAjaxPDF(idPedido);

    $promesa.success(function (data) {

        alto = 55;
        ancho = 10;

        var doc = new jsPDF();

//        logo = Base64.encode('logo.jpeg');
//        doc.addImage(logo, 'JPEG', 10, 10, 50, 70);
        
        doc.setFontSize(30);
        doc.text(10, alto-40, "Taronja Games");
        doc.setFontSize(12);
        doc.text(10, alto-20, "Numero de pedido: " + data[0].idPedido);
        doc.text(10, alto-10, "Fecha de la compra: " + new Date());
        doc.setFontSize(14);

        doc.text((ancho + 10), alto+5, "ID");
        doc.text((ancho + 50), alto+5, "Cantidad");
        doc.text((ancho + 100), alto+5, "Precio/Unidad");
        doc.text((ancho + 150), alto+5, "Precio total");
        doc.line(0, (alto + 7), 300, (alto + 7));
        alto=alto+5;
        precioFinal=0;

        $.each(data, function (index) {

            doc.setFontSize(12);

            idArticulo = data[index].idArticulo;
            cantidadArticulo = data[index].cantidadArticulo;
            precioArticulo = data[index].precioArticulo;
            precioTotal = (parseFloat(precioArticulo) * parseFloat(cantidadArticulo));
            precioFinal=precioFinal+precioTotal;
            
            doc.text((ancho + 10), (alto = alto + 10), idArticulo);
            doc.text((ancho + 50), alto, cantidadArticulo);
            doc.text((ancho + 100), alto, precioArticulo);
            doc.text((ancho + 150), alto, precioTotal+"");

        });

        doc.line(0, (alto+5), 300, (alto+5));
        doc.text((ancho + 125), alto+10, "Precio Final: ");
        doc.text((ancho + 150), alto+10, ""+precioFinal);

        doc.output('datauri');
    });
}