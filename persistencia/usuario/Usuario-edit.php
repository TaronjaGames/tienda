<?php

session_start();
include '../ConnectionFactory.php';

if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {

    $id = $_POST['idUsuario'];
    $rol = $_POST['rolUsuario'];
    $nombre = $_POST['nombreUsuario'];
    $ape1 = $_POST['apellido1Usuario'];
    $ape2 = $_POST['apellido2Usuario'];
    $nif = $_POST['dniUsuario'];
    $tf = $_POST['telefonoUsuario'];
    $correo = $_POST['emailUsuario'];
    $login = $_POST['loginUsuario'];
    $password = $_POST['passwordUsuario'];

    $consulta = "UPDATE usuario"
            . " SET rolUsuario = '" . $rol . "', nombreUsuario = '" . $nombre . "', apellido1Usuario = '" . $ape1 . "',"
            . " apellido2Usuario = '" . $ape2 . "', dniUsuario = '" . $nif . "', telefonoUsuario = '" . $tf . "',"
            . " emailUsuario = '" . $correo . "', loginUsuario = '" . $login . "', passwordUsuario = '" . $password . "'"
            . " WHERE idUsuario = '" . $id . "'";

    $consultaRetorno = "SELECT * FROM usuario WHERE idUsuario = '" . $id . "'";

    $conexion = getConnection();

    if ($conexion->query($consulta)) {
        if ($result = $conexion->query($consultaRetorno)) {
            $datos[] = $result->fetch_assoc();
        }

        closeConnection($conexion);

        header('Content-type: application/json');
        echo json_encode($datos);
    } else {
        echo "Se ha producido un error!";
    }
}
?>
