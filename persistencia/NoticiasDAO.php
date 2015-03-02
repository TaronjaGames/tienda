<?php

include 'ConnectionFactory.php';

function select($order) {

    //REALIZAR CONSULTA

    $conexion = getConnection();

    $consulta = "select * from noticia order by 1 " . $order;

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

$order = $_POST['orden'];

// CONSULTAR DATOS

$datos = select($order);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>
