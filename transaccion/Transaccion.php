<?php

session_start();
include '../persistencia/CarritoDAO.php';

if (isset($_SESSION['usuarioLogueado'])) {

    function realizarTransaccion($importeCarrito) {//Función a ejecutar desde CarritoDAO.php
        //$consultaNumCuentaTienda = "";
        //$consultaNumCuentaCliente = "";

        $numeroCuentaTienda = "0002-0002-0001";
        $numeroCuentaCliente = "0002-0002-0002";
//        $pinTienda = "0001";

        $url = "http://localhost/banco/api/Transaccion";
        $datos = [
            "cuentaTienda" => $numeroCuentaTienda,
            "cuentaCliente" => $numeroCuentaCliente,
//            "pinTienda" => $pinTienda,
            "cantidad" => $importeCarrito,
            "concepto" => "Compra Taronja"
        ];

        $handler = curl_init();
        curl_setopt($handler, CURLOPT_URL, $url);
        curl_setopt($handler, CURLOPT_POST, true);
        curl_setopt($handler, CURLOPT_POSTFIELDS, $datos);
        //curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($handler);
        curl_close($handler);
    }

}
?>

