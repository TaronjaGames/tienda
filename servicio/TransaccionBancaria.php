<?php

session_start();

function ejecutarTransaccion($importeCarrito) {
    $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria']; //Cuenta origen (cta. cliente)
    $numeroCuentaTienda = "0002-0002-0001"; //Cuenta destino (cta. Tienda)
    $pinTienda = "6666666666"; //PIN del usuario tienda en el banco
    $conceptoTransaccion = "Compra en TaronjaGames";

    //Ejecución de la transacción
//    $url = "http://172.16.205.18:8084/banco/api/Transaccion";
    $url = "http://taronjabank-taronjabank.rhcloud.com/api/Transaccion";
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
    curl_setopt($handler, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
    curl_setopt($handler, CURLOPT_PROXY, "wpad.fpmislata.local:8080");
    curl_setopt($handler, CURLOPT_PROXYPORT, 8080);
//    curl_setopt($ch, CURLOPT_PROXYUSERPWD, "user-proxy:user-pass");
    curl_setopt($handler, CURLOPT_URL, $url);
    curl_setopt($handler, CURLOPT_POST, true);
    curl_setopt($handler, CURLOPT_POSTFIELDS, $json);
    curl_setopt($handler, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($json))
    ); //Tiempo máximo de espera para conectar
    curl_setopt($handler, CURLOPT_CONNECTTIMEOUT, 60); //Tiempo máximo de espera para conectar

    $result = curl_exec($handler);
    $errorDescription = curl_error($handler);
    $errorNum = curl_errno($handler);
    $http_status = curl_getinfo($handler, CURLINFO_HTTP_CODE);

    if ($http_status !== 404) {
        $curlInfo = [
            'status' => 200,
            'mensaje' => "La transacción bancaria se ha realizado correctamente"
        ];
    } else if ($http_status === 404) {
        $curlInfo = [
            'status' => 404,
            'mensaje' => "Error " . $http_status . ": no se ha podido conectar al servidor del banco"
        ];
    } else if ($http_status !== 404 && $http_status !== 200) {
        $curlInfo = [
            'status' => $http_status,
            'mensaje' => "Error " . $http_status . ": no se ha podido realizar la transacción"
        ];
    }

    curl_close($handler);

    return $curlInfo;
}

$importeCarrito = $_POST['importeCarrito'];

header('Content-type: application/json; charset=utf-8');
echo json_encode(ejecutarTransaccion($importeCarrito));
?>

