<?php

session_start();

function realizarTransaccion($importeCarrito) {
    $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria']; //Cuenta origen (cta. cliente)
    $numeroCuentaTienda = "0002-0002-0001"; //Cuenta destino (cta. Tienda)
    $pinTienda = "6666666666"; //PIN del usuario tienda en el banco
    $conceptoTransaccion = "Compra en TaronjaGames";

    //Ejecución de la transacción
    $url = "http://172.16.205.18:8084/banco/api/Transaccion";
//    $url = "http://taronjabank-taronjabank.rhcloud.com/api/Transaccion";
    $datosEnviados = [
        "numeroCuentaOrigen" => $numeroCuentaCliente,
        "numeroCuentaDestino" => $numeroCuentaTienda,
        "importe" => $importeCarrito,
        "concepto" => $conceptoTransaccion,
        "apiKey" => $pinTienda
    ];
    $json = json_encode($datosEnviados);
//    echo $json;

    $handler = curl_init();
    curl_setopt($handler, CURLOPT_URL, $url);
    curl_setopt($handler, CURLOPT_POST, true);
    curl_setopt($handler, CURLOPT_POSTFIELDS, $json);
    curl_setopt($handler, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($json))
    );
    curl_setopt($handler, CURLOPT_CONNECTTIMEOUT, 10);//Tiempo máximo de espera para conectar
//    curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);

    $result = curl_exec($handler);
    $errorDescription = curl_error($handler);
    $errorNum = curl_errno($handler);
    $http_status = curl_getinfo($handler, CURLINFO_HTTP_CODE);

    $curlInfo = [
        'resultado' => $result,
        'estadoHttp' => $http_status,
        'errorDescription' => $errorDescription,
        'errorNum' => $errorNum
    ];

    return $curlInfo;
}
?>

