function getAjax($tabla, $order) {

    $datos = {'tabla': $tabla, 'orden': $order};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/GenericDAO.php',
        data: $datos
    });
}

function getAjaxSubseccionesArticulos($parametro1, $parametro2, $order) {

    $datos = {'parametro1': $parametro1, 'parametro2': $parametro2, 'orden': $order};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/SubseccionArticulosDAO.php',
        data: $datos
    });

}

function getAjaxSubseccionesGenerico($tabla, $parametro, $order) {

    $datos = {'tabla': $tabla, 'parametro': $parametro, 'orden': $order};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/SubseccionGenericoDAO.php',
        data: $datos
    });
}

function getAjaxRankingSubseccion($parametro) {

    $datos = {'parametro': $parametro};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/SubseccionRankingDAO.php',
        data: $datos
    });
}

function getAjaxRanking() {

    return $.ajax({
        type: 'POST',
        url: 'persistencia/RankingDAO.php'
    });
}


function getAjaxBuscador($tabla, $parametro, $order) {

    $datos = {'tabla': $tabla, 'parametro': $parametro, 'orden': $order};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/BuscadorDAO.php',
        data: $datos
    });
}

function getAjaxUsuarioNew($rol, $correo, $login, $password, $nif, $tf) {
    //Cuando haya más datos, será mejor pasar como parámetro la lista de valores
    //como array asociativo campo=>valor
    $datos = {'rol': $rol, 'correo': $correo, 'login': $login, 'password': $password, 'nif': $nif, 'tf': $tf};

    return $.ajax({
        type: 'POST',
        url: 'persistencia/UsuarioNewDAO.php',
        data: $datos
    });
}

//Comprueba si existe el login introducido en la base de datos al registrar nuevo usuario
function getAjaxLoginGet($login) {
    $datos = {'login': $login};
    return $.ajax({
        type: 'GET',
        url: 'persistencia/LoginGetDAO.php',
        data: $datos
    });
}



//GESTIÓN DE SESIÓN DE USUARIO
function getAjaxLogIn($login, $password) {
    //$datos = {'rolUsuario': $rolUsuario, 'login': $login, 'password': $password};
    $datos = {'login': $login, 'password': $password};
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
