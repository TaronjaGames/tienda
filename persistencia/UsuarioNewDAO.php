<?php

include 'ConnectionFactory.php';

function newUsuario($correo, $login, $password, $nif) {

    $conexion = getConnection();

    $consulta = "INSERT INTO cliente (idCliente, emailCliente, loginCliente, passwordCliente, dniCliente)"
            . " VALUES(null, '" . $correo . "', '" . $login . "', '" . $password . "', '" . $nif . "')";
    
    $consultaRetorno = "SELECT * FROM cliente WHERE loginCliente='" . $login . "'";

    if ($conexion->query($consulta)) {
        if ($result = $conexion->query($consultaRetorno)) {
            $datos[] = $result->fetch_assoc();
        }
    } else {
        echo "Error: " . $conexion->error;
    }

    closeConnection($conexion);

    return $datos;
}

$correo = $_POST['correo'];
$login = $_POST['login'];
$password = $_POST['password'];
$nif = $_POST['nif'];

$datos = newUsuario($correo, $login, $password, $nif);

header('Content-type: application/json');
echo json_encode($datos);
?>
