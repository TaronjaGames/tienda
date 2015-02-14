<?php

session_start();
include 'ConnectionFactory.php';


if (isset($_SESSION["usuarioLogueado"])) {

    function realizarTransaccion($importeCarrito) {
        if (isset($_SESSION['usuarioLogueado'])) {
            $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria']; //Cuenta origen (cta. cliente)
//            echo "Número de cuenta del cliente: " . $numeroCuentaCliente;
            $numeroCuentaTienda = "0002-0002-0006"; //Cuenta destino (cta. Tienda)
            $pinTienda = "6666666666"; //PIN de la tienda en el banco
            $conceptoTransaccion = "Compra en TaronjaGames";

            //Ejecución de la transacción
            $url = "http://taronjabank-taronjabank.rhcloud.com/api/Transaccion";
//        $url = "172.16.205.18:8084/banco/api/Transaccion";
            $datosEnviados = [
                "numeroCuentaOrigen" => $numeroCuentaCliente,
                "numeroCuentaDestino" => $numeroCuentaTienda,
                "importe" => $importeCarrito,
                "concepto" => $conceptoTransaccion,
                "apiKey" => $pinTienda
            ];
//            echo json_encode($datos);

            $handler = curl_init();
            curl_setopt($handler, CURLOPT_URL, $url);
            curl_setopt($handler, CURLOPT_POST, true);
            curl_setopt($handler, CURLOPT_POSTFIELDS, $datosEnviados);
            //curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
            //$respuesta = curl_exec($handler);
            curl_exec($handler);
            curl_close($handler);
        }
    }

    function insertCarrito($jsonCarrito) {

        $conexion = getConnection();

        //Insertar Pedido
        $fecha = date("Ymd");
        $idCliente = $_SESSION['usuarioLogueado'][0]['idUsuario'];

        $insertPedido = "insert into pedido (fechaPedido, idCliente) values ('" . $fecha . "','" . $idCliente . "')";
        $conexion->query($insertPedido);

        //Insertar DetallePedidos
        $carrito = json_decode($jsonCarrito);

        $idPedido = $conexion->insert_id;

        $importeCarrito = 0;

        for ($i = 0; $i < count($carrito->articulos); $i++) {

            //Id carrito
            $id = $carrito->articulos[$i]->id;

            //Consulta de precio
            $consulta = "select precioArticulo from articulo where idArticulo=" . $id;
            if ($result = $conexion->query($consulta)) {
                while ($row = $result->fetch_assoc()) {
                    $datos[0] = $row;
                }
            }
            $precio = $datos[0]['precioArticulo'];

            //Cantidad
            $cantidad = $carrito->articulos[$i]->cantidad;

            $importeCarrito += $precio * $cantidad;

            //Insertar linea Detalle Pedidos
            $insertDetallePedido = "insert into detallepedido (idArticulo, cantidadArticulo, precioArticulo, idPedido) values ('" . $id . "','" . $cantidad . "','" . $precio . "','" . $idPedido . "')";
            $conexion->query($insertDetallePedido);
        }
        closeConnection($conexion);

        return $importeCarrito;
    }

// RECOGIDA DE DATOS
    $jsonCarrito = $_POST['carrito'];

// Llamada al metodo
    $importeCarrito = insertCarrito($jsonCarrito);

    realizarTransaccion($importeCarrito);

// Respuesta
    $respuesta = array(
        'status' => 200,
        'mensaje' => $_SESSION['usuarioLogueado'][0]['loginUsuario'] . ", su compra se ha relizado correctamente"
    );
} else {
    $respuesta = array(
        'status' => 401,
        'mensaje' => "Necesitas estar logueado para poder realizar la compra"
    );
}
echo json_encode($respuesta);
?>
