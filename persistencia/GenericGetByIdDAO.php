<?php

session_start();
include 'ConnectionFactory.php';

if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {

    $tabla = $_POST['tabla'];
    $id = $_POST['id'];
    
    $tablaMayus = ucwords($tabla);

    $conexion = getConnection();

    $consulta = "SELECT * FROM " . $tabla . " WHERE id" . $tablaMayus . " = " . $id;
    if ($result = $conexion->query($consulta)) {
        $datos[] = $result->fetch_assoc();
    } else {
        echo "Se ha producido un error!";
    }

    closeConnection($conexion);

    header('Content-type: application/json');
    echo json_encode($datos);
}
?>


