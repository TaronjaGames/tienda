<?php

session_start();

if (isset($_SESSION['usuarioLogueado'])) {

    function realizarTransaccion($importeCarrito) {
        $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria']; //Cuenta origen
        $numeroCuentaTienda = "0002-0002-0001"; //Cuenta destino
        $pinTienda = "6666666666"; //PIN de la tienda en el banco
        $conceptoTransaccion = "Compra TaronjaGames";

        //Ejecución de la transacción
        $url = "http://taronjabank-taronjabank.rhcloud.com/api/Transaccion";
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

