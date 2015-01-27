<?php

session_start();
include '../ConnectionFactory.php';

if ($_SESSION["usuarioLogueado"][0]['rolUsuario'] == "administrador") {

    $nombre = $_POST['nombreArticulo'];
    $descrip = $_POST['descripcionArticulo'];
    $precio = $_POST['precioArticulo'];
    $img = $_POST['imagenArticulo'];
    $plataf = $_POST['plataforma'];
    $tipo = $_POST['tipoArticulo'];
    $precioOferta = $_POST['ofertaArticulo'];
    if ($precioOferta === "") {
        $precioOferta = 0;
    }


    $consulta = "INSERT INTO articulo (idArticulo, nombreArticulo, descripcionArticulo, precioArticulo, imagenArticulo,"
            . " plataforma, tipoArticulo, ofertaArticulo)"
            . " VALUES(null, '" . $nombre . "', '" . $descrip . "', '" . $precio . "', '" . $img . "', "
            . "'" . $plataf . "', '" . $tipo . "', '" . $precioOferta . "')";

    $consultaRetorno = "SELECT * FROM articulo WHERE idArticulo >= ALL(SELECT idArticulo FROM articulo)";

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
