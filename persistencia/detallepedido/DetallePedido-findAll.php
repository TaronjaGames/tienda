<?php

session_start();
include '../ConnectionFactory.php';



$examp = $_GET["q"]; //query number

$page = $_GET['page']; // get the requested page
$limit = $_GET['rows']; // get how many rows we want to have into the grid
$sidx = $_GET['sidx']; // get index row - i.e. user click to sort
$sord = $_GET['sord']; // get the direction

$id = $_GET['id'];


if (!$sidx) {
    $sidx = 1;
}


switch ($examp) {
    
    case 1:
        $conexion = getConnection();
        $consultaCount = "SELECT COUNT(*) AS count FROM detallepedido WHERE idPedido=" . $id;

        $result = $conexion->query($consultaCount);
        $row = $result->fetch_assoc();
        $count = $row['count'];

        if ($count > 0) {
            $total_pages = ceil($count / $limit);
        } else {
            $total_pages = 0;
        }

        if ($page > $total_pages) {
            $page = $total_pages;
        }

        $start = $limit * $page - $limit; // do not put $limit*($page - 1)
        if ($start < 0) {
            $start = 0;
        }
        
        $SQL = "SELECT d.idDetallePedido, a.nombreArticulo, d.cantidadArticulo,"
                . " concat(d.precioArticulo, ' €') AS precioArticulo, d.idPedido,"
                . " concat(round(d.cantidadArticulo*d.precioArticulo,2),' €') AS importeLinea"
                . " FROM detallepedido d, articulo a"
                . " WHERE d.idArticulo = a.idArticulo"
                . " AND d.idPedido=" . $id . " ORDER BY $sidx $sord LIMIT $start , $limit";
        
        
        $result = $conexion->query($SQL);

        $respuesta = new stdClass();
        $respuesta->page = $page;
        $respuesta->total = $total_pages;
        $respuesta->records = $count;
        $i = 0;

        while ($row = $result->fetch_assoc()) {
            $respuesta->rows[$i]['id'] = $row['idDetallePedido'];
            $respuesta->rows[$i]['cell'] = array($row['idDetallePedido'], $row['nombreArticulo'], $row['cantidadArticulo'],
                $row['precioArticulo'], $row['idPedido'], $row['importeLinea']/*, "€"*/);
            $i++;
        }
        closeConnection($conexion);
        echo json_encode($respuesta);
        break;
}
?>

