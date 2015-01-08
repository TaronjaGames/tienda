<?php

function openSession($usuario) {
    closeSession();
    $_SESSION["usuarioLogueado"] = $usuario;
}

function closeSession() {
    if (isset($_SESSION["usuarioLogueado"])) {
        unset($_SESSION["usuarioLogueado"]);
    }
}

?>
