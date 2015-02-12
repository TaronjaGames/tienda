function abrirPestana(idPedido) {
    window.open("persistencia/PDF/newPDF.html?idPedido=" + idPedido);
}

function generarPDF(idPedido) {
    $promesa = getAjaxPDF(idPedido);

    $promesa.success(function (data) {
        
        alto=30;
        ancho=10;
        
        var doc = new jsPDF();

        alert(JSON.stringify(data));
        
        //doc.line(coorX1, coorY1, coorX2, coorY2);

        doc.setFontSize(22);
        doc.text(10, 20, 'Factura de la compra');
        doc.setFontSize(16);

        $.each(data, function (index) {
            idArticulo = data[index].idArticulo;
            precioArticulo = data[index].precioArticulo;
            doc.text((ancho=ancho+10), (alto=alto+10), idArticulo);
            doc.text((ancho=ancho+10), (alto=alto+10), precioArticulo);
        });

        doc.output('datauri');
    });
}