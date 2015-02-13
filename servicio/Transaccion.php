<?php

session_start();

if (isset($_SESSION['usuarioLogueado'])) {
    //$consultaNumCuentaTienda = "";
    //$consultaNumCuentaCliente = "";
    $numeroCuentaCliente = "0002-0002-0002";
    $numeroCuentaTienda = "0002-0002-0001";
    //$pinTienda = "0001";
    $importeCarrito = 55;

    $url = "http://localhost/banco/api/Transaccion";
    $datos = [
        "numeroCuentaOrigen" => $numeroCuentaCliente,
        "numeroCuentaDestino" => $numeroCuentaTienda,
        //"pinTienda" => $pinTienda,
        //"importe" => $_SESSION['importeCarrito'],
        "importe" => $importeCarrito,
        "concepto" => "Compra Taronja"
    ];

    $handler = curl_init();
    curl_setopt($handler, CURLOPT_URL, $url);
    curl_setopt($handler, CURLOPT_POST, true);
    curl_setopt($handler, CURLOPT_POSTFIELDS, $datos);
    //curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($handler);
    curl_close($handler);

//    unset($_SESSION['importeCarrito']);
}
?>

