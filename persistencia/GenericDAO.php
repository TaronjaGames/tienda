<?php

include 'ConnectionFactory.php';

function select($tabla, $order) {

    //REALIZAR CONSULTA

    $conexion = getConnection();

    $consulta = "select * from ".$tabla." order by 1 " . $order;

    //EXTRAER DATOS

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }
        
        closeConnection($conexion);
        
        //DEVOLVER DATOS
        return $datos;
    }
}

// RECOGIDA DE DATOS

$tabla = $_POST['tabla'];
$order = $_POST['orden'];

// CONSULTAR DATOS

$datos = select($tabla, $order);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>
