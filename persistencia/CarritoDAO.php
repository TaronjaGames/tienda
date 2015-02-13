<?php

session_start();
include 'ConnectionFactory.php';

$respuesta = array();

if (isset($_SESSION["usuarioLogueado"])) {

//    function realizarTransaccion($importeCarrito) {
//        //$consultaNumCuentaTienda = "";
//        //$consultaNumCuentaCliente = "";
//        $numeroCuentaCliente = "0002-0002-0002";
////        $numeroCuentaCliente = $_SESSION['usuarioLogueado'][0]['numeroCuentaBancaria'];
//        $numeroCuentaTienda = "0002-0002-0001";
//        //$pinTienda = "0001";
//
//        $url = "http://localhost/banco/api/Transaccion";
//        $datos = [
//            "numeroCuentaOrigen" => $numeroCuentaCliente,
//            "numeroCuentaDestino" => $numeroCuentaTienda,
//            "importe" => $importeCarrito,
//            "concepto" => "Compra Taronja"
//        ];
//
//        $handler = curl_init();
//        curl_setopt($handler, CURLOPT_URL, $url);
//        curl_setopt($handler, CURLOPT_POST, true);
//        curl_setopt($handler, CURLOPT_POSTFIELDS, $datos);
//        //curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
//        $response = curl_exec($handler);
//        curl_close($handler);
//    }

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

//        realizarTransaccion($importeCarrito);
        closeConnection($conexion);
        return $idPedido;
    }

// RECOGIDA DE DATOS
    $jsonCarrito = $_POST['carrito'];
// Llamada al metodo
    $respuesta['idPedido'] = insertCarrito($jsonCarrito);
// Respuesta
    $respuesta['status'] = 200;
    $respuesta['mensaje'] = $_SESSION['usuarioLogueado'][0]['loginUsuario'] . ", su compra se ha relizado correctamente";
} else {
    $respuesta['status'] = 401;
    $respuesta['mensaje'] = "Necesitas estar logueado para poder realizar la compra";
}
echo json_encode($respuesta);
?>
