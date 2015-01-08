<?php

include 'ConnectionFactory.php';

function getRanking() {

    $conexion = getConnection();
    $consulta = "SELECT * FROM articulo WHERE tipoArticulo = 'videojuego' ORDER BY ventaArticulo DESC LIMIT 10";

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }
        
        closeConnection($conexion);
        
        return $datos;
    }
}

$datos = getRanking();

header('Content-type: application/json');
echo json_encode($datos);

?>
