<?php

include 'ConnectionFactory.php';

function select($tabla) {

    //REALIZAR CONSULTA

    $conexion = getConnection();

    $consulta = "select * from " . $tabla . " order by 1";

    //EXTRAER DATOS

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }

    //DEVOLVER DATOS

        return $datos;
    }
}

// RECOGIDA DE DATOS

$tabla = $_POST['tabla'];

// CONSULTAR DATOS

$datos = select($tabla);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>
