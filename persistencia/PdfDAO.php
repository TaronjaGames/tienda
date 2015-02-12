<?php

include 'ConnectionFactory.php';

function select($idPedido) {

    //REALIZAR CONSULTA

    $conexion = getConnection();
    $consulta = "select * from detallePedido where idPedido=".$idPedido;

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

$idPedido = $_POST['idPedido'];

// CONSULTAR DATOS

$datos = select($idPedido);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>