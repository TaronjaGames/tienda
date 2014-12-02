<?php

function getConnection() {

    $conexion = mysql_connect("localhost", "root", "root") or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db("tienda", $conexion) or die('No se pudo seleccionar la base de datos');
    mysql_query('set character set utf8');

    return $conexion;
}

function closeConnection($conexion) {
    mysql_close($conexion);
}

function select($tabla) {

    //REALIZAR CONSULTA

    $conexion = getConnection();

    $consulta = "select * from " .$tabla." order by idNoticia desc";
    $resultado = mysql_query($consulta, $conexion);

    //CREACION DE ARRAY

    while ($fila = mysql_fetch_array($resultado,MYSQL_ASSOC)) {
        $datos[] = $fila;
    }

    closeConnection($conexion);

    return $datos;
}

// RECOGIDA DE DATOS

$tabla = $_POST['tabla'];

// CONSULTAR DATOS

$datos = select($tabla);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>
