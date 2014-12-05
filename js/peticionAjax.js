function getAjax($tabla,$order) {
    
    $datos = { 'tabla' : $tabla,'orden' : $order };
    
    return $.ajax({
        type: 'POST',
        url: 'php/GenericDAO.php',
        data: $datos
    });
}



