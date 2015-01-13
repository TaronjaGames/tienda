<?php

include 'ConnectionFactory.php';

function getRanking($parametro) {

    $conexion = getConnection();
    $consulta = "SELECT * FROM articulo WHERE tipoArticulo = 'videojuego' and plataforma='".$parametro."' ORDER BY ventaArticulo DESC LIMIT 10";

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }
        
        closeConnection($conexion);
        
        return $datos;
    }
}

$parametro = $_POST['parametro'];

$datos = getRanking($parametro);

header('Content-type: application/json');
echo json_encode($datos);

?>