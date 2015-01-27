<?php

session_start();
include '../ConnectionFactory.php';

if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {

    $id = $_POST['idArticulo'];
    $nombre = $_POST['nombreArticulo'];
    $descrip = $_POST['descripcionArticulo'];
    $precio = $_POST['precioArticulo'];
    $img = $_POST['imagenArticulo'];
    //$idPlataf = $_POST['idPlataforma']; // , idPlataforma = '" . $idPlataf . "'
    $plataf = $_POST['plataforma'];
    $tipo = $_POST['tipoArticulo'];
    //$venta = $_POST['ventaArticulo'];  //, ventaArticulo = '" . $venta . "'
    $precioOferta = $_POST['ofertaArticulo'];
    if ($precioOferta === "") {
        $precioOferta = 0;
    }

    $consulta = "UPDATE articulo"
            . " SET nombreArticulo = '" . $nombre . "', descripcionArticulo = '" . $descrip . "', precioArticulo = '" . $precio . "',"
            . " imagenArticulo = '" . $img . "', plataforma = '" . $plataf . "',"
            . " tipoArticulo = '" . $tipo . "', ofertaArticulo = '" . $precioOferta . "'"
            . " WHERE idArticulo = '" . $id . "'";

    $consultaRetorno = "SELECT * FROM articulo WHERE idArticulo = '" . $id . "'";

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
