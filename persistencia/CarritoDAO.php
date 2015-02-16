<?php

session_start();
include 'ConnectionFactory.php';

$respuesta = array();

if (isset($_SESSION["usuarioLogueado"])) {

//    include '../servicio/TransaccionBancaria.php';

    // RECOGIDA DE DATOS
    $jsonCarrito = $_POST['carrito'];
//    $objetoCarrito = json_decode($jsonCarrito);
//
//    $curlInfo = realizarTransaccion($objetoCarrito->importeTotal);
//    if ($curlInfo['resultado']) {

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

                //Insertar linea Detalle Pedidos
                $insertDetallePedido = "insert into detallepedido (idArticulo, cantidadArticulo, precioArticulo, idPedido) values ('" . $id . "','" . $cantidad . "','" . $precio . "','" . $idPedido . "')";
                $conexion->query($insertDetallePedido);
            }

            closeConnection($conexion);
            return $idPedido;
        }

        // Llamada al metodo
        $respuesta['idPedido'] = insertCarrito($jsonCarrito);

        $respuesta['status'] = 200;
        $respuesta['mensaje'] = $_SESSION['usuarioLogueado'][0]['loginUsuario'] . ", su compra se ha relizado correctamente";
//    } else {
////        $respuesta['status'] = 0;
////        $respuesta['mensaje'] = "No se ha podido realizar la transacción bancaria";
//        $respuesta['curlInfo'] = $curlInfo;
//    }
} else {
    $respuesta['status'] = 401;
    $respuesta['mensaje'] = "Necesitas estar logueado para poder realizar la compra";
}
header('Content-type: application/json; charset=utf-8');
echo json_encode($respuesta);
?>
