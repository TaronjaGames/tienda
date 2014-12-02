function getAjax($tabla) {
    
    $datos = { 'tabla' : $tabla };
    
    return $.ajax({
        type: 'POST',
        url: 'php/GenericDAO.php',
        data: $datos
    });
}



