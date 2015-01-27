<?php

session_start();
include 'ConnectionFactory.php';

if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {

    $tabla = $_POST['tabla'];
    $id = $_POST['id'];
    
    $tablaMayus = ucwords($tabla);

    $conexion = getConnection();

    $consulta = "DELETE FROM " . $tabla . " WHERE id" . $tablaMayus . " = " . $id;
    
    if ($conexion->query($consulta)) {
        echo "Los registros seleccionados se han borrado correctamente!";
    } else {
        echo "Se ha producido un error!";
    }

    closeConnection($conexion);
}
?>


