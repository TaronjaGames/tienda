<?php

session_start();
include '../persistencia/ConnectionFactory.php';
include 'SessionFactory.php';

function getUsuario($rolUsuario, $login, $password) {

    closeSession();

    $conexion = getConnection();

    $consulta = "SELECT * FROM " . strtolower($rolUsuario)
            . " WHERE login" . $rolUsuario . "='" . $login . "'"
            . " AND password" . $rolUsuario . "='" . $password . "'";

    if ($result = $conexion->query($consulta)) {
        $datos[] = $result->fetch_assoc();
        openSession($datos);
    }
    
    closeConnection($conexion);
    
    return $datos;
}

$rolUsuario = $_POST['rolUsuario'];
$login = $_POST['login'];
$password = $_POST['password'];

$datos = getUsuario($rolUsuario, $login, $password);

header('Content-type: application/json');
echo json_encode($datos);
?>
