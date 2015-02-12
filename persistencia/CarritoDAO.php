<?php

session_start();
include 'ConnectionFactory.php';
//include '../servicio/Transaccion.php';


if (isset($_SESSION["usuarioLogueado"])) {

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
    }

// RECOGIDA DE DATOS
    $jsonCarrito = $_POST['carrito'];
// Llamada al metodo
    insertCarrito($jsonCarrito);

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
