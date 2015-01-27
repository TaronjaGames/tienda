<?php
session_start();
if(isset($_SESSION["usuarioLogueado"])){

    $respuesta=array(
    'status'  => 200,
    'usuario' => $_SESSION["usuarioLogueado"]
    );
    
}else{
    $respuesta=array(
    'status'  => 401,
    );
}

echo json_encode($respuesta);
?>

