<?php

session_start();
include 'ConnectionFactory.php';

$respuesta = array();

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


        for ($i = 0; $i < count($carrito->articulos); $i++) {

            //Id

            $id = $carrito->articulos[$i]->id;

            //Consulta de precio
            $consulta = "select precioArticulo from articulo where idArticulo=" . $id;
            if ($result = $conexion->query($consulta)) {
                while ($row = $result->fetch_assoc()) {
                    $datos[] = $row;
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
