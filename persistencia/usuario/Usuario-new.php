<?php
session_start();
include '../ConnectionFactory.php';

function newUsuario($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password) {

    $conexion = getConnection();

    $consulta = "INSERT INTO usuario (idUsuario, rolUsuario, nombreUsuario, apellido1Usuario, apellido2Usuario,"
            . " dniUsuario, telefonoUsuario, emailUsuario, loginUsuario, passwordUsuario)"
            . " VALUES(null, '" . $rol . "', '" . $nombre . "', '" . $ape1 . "', '" . $ape2 . "', '" . $nif . "', '" . $tf . "', '" . $correo . "', '" . $login . "', '" . $password . "')";
    
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
$nombre = $_POST['nombre'];
$ape1 = $_POST['ape1'];
$ape2 = $_POST['ape2'];
$nif = $_POST['nif'];
$tf = $_POST['tf'];
$correo = $_POST['correo'];
$login = $_POST['login'];
$password = $_POST['password'];

$datos = newUsuario($rol, $nombre, $ape1, $ape2, $nif, $tf, $correo, $login, $password);

header('Content-type: application/json');
echo json_encode($datos);

?>
