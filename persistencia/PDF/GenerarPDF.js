function generarPDF(miPDF) {
    var jsPDF = require('libs/jsPDF').jsPDF; 
    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(20, 20, 'Titulo');
    doc.setFontSize(16);
    doc.text(20, 30, 'PDF GENERADO');
    
     var file = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, miPDF);
     file.write(doc.output());
     return file;
}