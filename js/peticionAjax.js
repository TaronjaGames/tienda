function getAjax($tabla,$order) {
    
    $datos = { 'tabla' : $tabla,'orden' : $order };
    
    return $.ajax({
        type: 'POST',
        url: 'persistencia/GenericDAO.php',
        data: $datos
    });
}

function getAjaxRanking() {
    
    return $.ajax({
        type: 'POST',
        url: 'persistencia/RankingDAO.php'
    });
}



