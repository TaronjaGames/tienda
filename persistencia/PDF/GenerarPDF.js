function abrirPestana(idPedido) {
    window.open("persistencia/PDF/newPDF.html?idPedido=" + idPedido);
}

function generarPDF(idPedido) {

    var doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(20, 20, 'Factura de la compra');
    doc.setFontSize(16);


    $promesa = getAjaxPDF(idPedido);

    $promesa.success(function (data) {
        
    
$.each(data, function (index) {
        nombreArticulo = data[index].nombreArticulo;
        doc.text(20, 30, nombreArticulo);
    });
});
    doc.output('datauri');
}