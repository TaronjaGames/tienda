function getAjax($tabla, $order) {

    $datos = {'tabla': $tabla, 'orden': $order};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/GenericDAO.php',
        data: $datos
    });
}

function getAjaxRanking() {

    return $.ajax({
        type: 'POST',
        url: 'persistencia/RankingDAO.php'
    });
}

function getAjaxUsuarioNew($correo, $login, $password, $nif) {

    $datos = {'correo': $correo, 'login': $login, 'password': $password, 'nif': $nif};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/UsuarioNewDAO.php',
        data: $datos
    });
}

function getAjaxLoginGet($login) {
    $datos = {'login': $login};
    return $.ajax({
        type: 'GET',
        url: 'persistencia/LoginGetDAO.php',
        data: $datos
    });
}



//GESTIÓN DE SESIÓN DE USUARIO
function getAjaxLogIn($rolUsuario, $login, $password) {

    $datos = {'rolUsuario': $rolUsuario, 'login': $login, 'password': $password};

    return $.ajax({
        type: 'POST',
        url: 'seguridad/LogInFromDB.php',
        data: $datos
    });
}

function getAjaxLogOut() {

    return $.ajax({
        type: 'POST',
        url: 'seguridad/LogOut.php'
    });
}

