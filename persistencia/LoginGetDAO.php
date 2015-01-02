<?php

include 'ConnectionFactory.php';

function getLogin($login) {
    $conexion = getConnection();
    $consulta = "SELECT loginCliente FROM cliente WHERE loginCliente='" . $login . "'";

    if ($result = $conexion->query($consulta)) {
        $datos[] = $result->fetch_assoc();
    } else {
        echo "Error: " . $conexion->error;
    }

    closeConnection($conexion);

    return $datos;
}

$login = $_GET['login'];

$datos = getLogin($login);

header('Content-type: application/json');
echo json_encode($datos);
?>

