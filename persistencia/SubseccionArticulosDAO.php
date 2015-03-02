<?php

include 'ConnectionFactory.php';

function select($parametro1, $parametro2, $order) {

    //REALIZAR CONSULTA

    $conexion = getConnection();
    $consulta = "select * from articulo where tipoArticulo='".$parametro1."' and plataforma = '".$parametro2."' order by 1 " . $order;

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

$parametro1 = $_POST['parametro1'];
$parametro2 = $_POST['parametro2'];
$order = $_POST['orden'];

// CONSULTAR DATOS

$datos = select($parametro1, $parametro2, $order);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>