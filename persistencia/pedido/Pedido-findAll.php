<?php

session_start();
include '../ConnectionFactory.php';
//echo var_dump($_SESSION["usuarioLogueado"][0]['rolUsuario']);
if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {
        
    $page = $_GET['page']; // get the requested page
    $limit = $_GET['rows']; // get how many rows we want to have into the grid
    $sidx = $_GET['sidx']; // get index row - i.e. user click to sort
    $sord = $_GET['sord']; // get the direction
    if (!$sidx) {
        $sidx = 1;
    }

    $consultaCount = "SELECT COUNT(*) AS count FROM pedido";

    $conexion = getConnection();

    $result = $conexion->query($consultaCount);
    $row = $result->fetch_assoc();
    $count = $row['count'];

    if ($count > 0) {
        $total_pages = ceil($count / $limit);
    } else {
        $total_pages = 0;
    }
    if ($page > $total_pages)
        $page = $total_pages;
    $start = $limit * $page - $limit; // do not put $limit*($page - 1)

    $SQL = "SELECT p.idPedido, p.fechaPedido, u.dniUsuario, u.loginUsuario, concat(round(sum(d.cantidadArticulo*d.precioArticulo),2),' €') AS importePedido"
            . " FROM pedido p, detallepedido d, usuario u"
            . " WHERE p.idPedido = d.idPedido AND p.idCliente = u.idUsuario"
            . " GROUP BY p.idPedido"
            . " ORDER BY $sidx $sord LIMIT $start , $limit";

    $result = $conexion->query($SQL);

    $respuesta = new stdClass();
    $respuesta->page = $page;
    $respuesta->total = $total_pages;
    $respuesta->records = $count;
    $i = 0;

    while ($row = $result->fetch_assoc()) {
        $respuesta->rows[$i]['id'] = $row['idPedido'];
        $respuesta->rows[$i]['cell'] = array($row['idPedido'], $row['fechaPedido'], $row['dniUsuario'], $row['loginUsuario'], $row['importePedido']/*, "€"*/);
        $i++;
    }
    closeConnection($conexion);
    echo json_encode($respuesta);
} else {
    echo "Operación no permitida";
}
?>

