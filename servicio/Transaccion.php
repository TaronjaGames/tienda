<?php

session_start();

if (isset($_SESSION['usuarioLogueado'])) {

    function realizarTransaccion($importeCarrito) {
        $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria']; //Cuenta origen
        $numeroCuentaTienda = "0002-0002-0001"; //Cuenta destino -> Consultar BD
        $pinTienda = "1111111111"; //PIN de la tienda en el banco -> Consultar BD
        $conceptoTransaccion = "Compra TaronjaGames";

        //Ejecución de la transacción
        $url = "http://localhost/banco/api/Transaccion";
        $datos = [
            "numeroCuentaOrigen" => $numeroCuentaCliente,
            "numeroCuentaDestino" => $numeroCuentaTienda,
            "importe" => $importeCarrito,
            "concepto" => $conceptoTransaccion,
            "apiKey" => $pinTienda
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

