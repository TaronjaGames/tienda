 a=0;
function subseccionPlataforma() {

    $promesa = getAjax("plataforma", "asc");
    if(a!==1){
    $promesa.success(function (data) {
        secciones=$('.contieneSecciones');
        $.each(secciones, function (index1) {
           var datos = "";
           $.each(data, function (index2) {
           datos += "<div class='menuV_subseccion' onclick='mostrarPorFiltros(\""+$('#contieneSecciones'+(index1+1)).text()+"," +data[index2].nombrePlataforma+"\")'>" + data[index2].nombrePlataforma + "</div>";
        });
        $('#contieneSecciones'+(index1+1)).append(datos);
        });
    });
    a=1;    
}
}


function mostrarSeccion() {

    $promesa = getAjax("seccion", "asc");

    $promesa.success(function (data) {
        var datos = "";
        var datosDesplegable = "";

        $.each(data, function (index) {
            if (data[index].nombreSeccion === "Inicio") {
                var on_click = "mostrarNoticias()";
                datos += "<div class='menuV_inicio' onclick=" + on_click + ">" + data[index].nombreSeccion + "</div>";
            } else {
                datos += "<div "+"id='contieneSecciones"+index+"' class='contieneSecciones'>";
                var on_click = "mostrar" + data[index].nombreSeccion + "()";
                datos += "<div class='menuV_seccion' onclick=" + on_click + ">" + data[index].nombreSeccion + "</div>";

            }
//            datos += "<div class='menuV_subseccion')>XBOX</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrar" + data[index].nombreSeccion + "()'>" + data[index].nombreSeccion + "</a></li>";
            datos += "</div>";
        });
        
        $("#menuV_menu").append(datos);
        $("#opciones_menu_desplegable").append(datosDesplegable);
    });
    
}

function mostrarPlataforma() {

    $promesa = getAjax("plataforma", "asc");

    $promesa.success(function (data) {
        var datos = "";
        var datosDesplegable = "";
        $.each(data, function (index) {
            datos += "<div class='menuH_plataforma' onclick='mostrarPorPlataformas(\"" + data[index].nombrePlataforma + "\")'>" + data[index].nombrePlataforma + "</div>";
            datosDesplegable += "<li><a class='menu_desplegable_seccion' href='javascript:mostrarPorPlataformas(\"" + data[index].nombrePlataforma + "\")'>" + data[index].nombrePlataforma + "</a></li>";
        });
        $("#plataformas").append(datos);
        $("#opciones_menu_desplegable2").append(datosDesplegable);
    });
}

mostrarSeccion();
mostrarNoticias();
mostrarPlataforma();
$(document).ajaxComplete(function(){
           subseccionPlataforma();
           
        });
