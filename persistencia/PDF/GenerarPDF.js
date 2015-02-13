function abrirPestana(idPedido) {
    window.open("persistencia/PDF/newPDF.html?idPedido=" + idPedido);
}

function generarPDF(idPedido) {
    $promesa = getAjaxPDF(idPedido);

    $promesa.success(function (data) {

        alto = 50;
        ancho = 10;

        var doc = new jsPDF();

        //logo = new Image();
        logo = 'data:image/jpeg;base64,'+Base64.encode('img/logo.jpg');
        //logo.src = 'img/logo.jpg';
        doc.addImage(logo, 'JPEG', 10, 10, 50, 70);

        doc.setFontSize(12);
        doc.text(10, 20, "Numero de pedido: " + data[0].idPedido);
        doc.text(10, 30, "Fecha de la compra: " + new Date());
        doc.setFontSize(14);

        doc.text((ancho + 10), alto, "ID");
        doc.text((ancho + 50), alto, "Cantidad");
        doc.text((ancho + 100), alto, "Precio/Unidad");
        doc.text((ancho + 150), alto, "Precio total");
        doc.line(0, (alto + 5), 300, (alto + 5));

        $.each(data, function (index) {

            doc.setFontSize(12);

            idArticulo = data[index].idArticulo;
            cantidadArticulo = data[index].cantidadArticulo;
            precioArticulo = data[index].precioArticulo;
            precioTotal = (parseFloat(precioArticulo) * parseFloat(cantidadArticulo));
            
            doc.text((ancho + 10), (alto = alto + 10), idArticulo);
            doc.text((ancho + 50), alto, cantidadArticulo);
            doc.text((ancho + 100), alto, precioArticulo);
            doc.text((ancho + 150), alto, precioTotal+"");

        });

        doc.output('datauri');
    });
}