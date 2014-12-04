<?php

function getConnection() {

    //Conexion a Base de Datos

    $server = "localhost";
    $username = "root";
    $password = "root";
    $databasename = "tienda";


    $conexion = new mysqli($server, $username, $password, $databasename);
    if ($conexion->connect_error) {
        die("Conexion fallida: " . $conexion->connect_error);
    }
    
    //Cambiar Caracteres a UTF-8
    
    mysqli_set_charset($conexion,"utf8");
    
    return $conexion;
}

function closeConnection($conexion) {
    mysqli_close($conexion);
}
?>

