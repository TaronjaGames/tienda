<?php

include 'ConnectionFactory.php';

function select($idPedido) {

    //REALIZAR CONSULTA

    $conexion = getConnection();
    $consulta = "select articulo.nombreArticulo, detallePedido.idPedido, detallePedido.cantidadArticulo, detallePedido.precioArticulo, usuario.nombreUsuario, usuario.apellido1Usuario, usuario.apellido2Usuario, pedido.fechaPedido 
                from articulo inner join detallepedido inner join usuario inner join pedido 
                on articulo.idArticulo=detallepedido.idArticulo and detallepedido.idPedido=pedido.idPedido and pedido.idCliente=usuario.idUsuario 
                where detallepedido.idPedido=".$idPedido;

    //EXTRAER DATOS

    if ($result = $conexion->query($consulta)) {

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }

        //DEVOLVER DATOS

        return $datos;
    }
}

// RECOGIDA DE DATOS

$idPedido = $_POST['idPedido'];

// CONSULTAR DATOS

$datos = select($idPedido);

//DEVOLVER DATOS

header('Content-type: application/json');
echo json_encode($datos);
?>