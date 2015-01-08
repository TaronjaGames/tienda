<?php

include 'ConnectionFactory.php';

function newUsuario($rol, $correo, $login, $password, $nif, $tf) {

    $conexion = getConnection();

    $consulta = "INSERT INTO usuario (idUsuario, rolUsuario, emailUsuario, loginUsuario, passwordUsuario, dniUsuario, telefonoUsuario)"
            . " VALUES(null, '" . $rol . "', '" . $correo . "', '" . $login . "', '" . $password . "', '" . $nif . "', '" . $tf . "')";
    //FALTAN POR IMPLEMENTAR LOS CAMPOS: nombreUsuario, apellido1Usuario, apellido2Usuario
    
    $consultaRetorno = "SELECT * FROM usuario WHERE loginUsuario='" . $login . "'";

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

$rol = $_POST['rol'];
$correo = $_POST['correo'];
$login = $_POST['login'];
$password = $_POST['password'];
$nif = $_POST['nif'];
$tf = $_POST['tf'];

$datos = newUsuario($rol, $correo, $login, $password, $nif, $tf);

header('Content-type: application/json');
echo json_encode($datos);
?>
