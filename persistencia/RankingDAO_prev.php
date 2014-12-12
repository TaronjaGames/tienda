<?php

include 'ConnectionFactory.php';

function getRanking() {

    $conexion = getConnection();
    $consulta = "select * from articulo order by ventaArticulo desc limit 10";

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }

        return $datos;
    }
}

$datos = getRanking();

header('Content-type: application/json');
echo json_encode($datos);

?>
