<?php

include 'ConnectionFactory.php';

function select($id) {

    //REALIZAR CONSULTA

    $conexion = getConnection();
    $consulta = "select * from pedido where idPedido=".$id;

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

$id = $_POST['id'];

// CONSULTAR DATOS

$datos = select($id);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>