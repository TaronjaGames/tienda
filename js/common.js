
//Variables globales de proyecto
listaPlataformas = "";//Lista de las 'plataformas' cargadas en cargarDatosIniciales.js
usuarioLogueado = "";//Contiene el usuario logueado
accionPrevia = "";//Contiene la id del elemento que desencadena el último evento
//valor: this.id

codigoCuentaBancaria = "E002-S002-1";



//Funciones comunes al proyecto

//Acción al pulsar el icono de la cabecera
function accionarIconoHeader() {
    if (usuarioLogueado.rolUsuarioLogueado !== "administrador") {
        $("#logoImg").click(function () {
            mostrarNoticias();
            //document.location.href = "index.html";
        });
    } else {
        $("#logoImg").click(function () {
            mostrarPanelesAdmin();
        });
    }
}


//COMPORTAMIENTO DEL MENÚ VERTICAL
function accionarMenuV() {
    //Comportamiento secciones
    var paAbajoPaArriba = function () {
        var cajaSubsecciones = $(this).siblings(".caja-subsecciones");
        //cajaSubsecciones.delay(100);
        cajaSubsecciones.slideToggle(800, "easeOutQuad");
        $(this).parent().animate({marginBottom: '15px'}, 800);
        $(this).parent().animate({marginTop: '10px'}, 600);
        $(this).animate({marginRight: '2%'}, 800);
        $(this).css(
                {
//                    "border-bottom-right-radius": "15%",
                    "border-bottom": "3px solid rgba(255,255,255,.7)",
                    "color": "white",
                    "font-weight": "bolder",
                    "font-style": "italic"
                }
        );
    };
    var paArriba = function () {
        var cajaSubseccion = $(this).parent().siblings().children(".caja-subsecciones");
        //subseccion.delay(100);
        cajaSubseccion.slideUp(800);

        //Reseteo al estado inicial
        $(this).parent().siblings().animate({marginBottom: '0px'}, 800);
        $(this).parent().siblings().animate({marginTop: '2px'}, 600);
        $(this).parent().siblings().children(":first-child").animate({marginRight: '5%'}, 800);
        $(this).parent().siblings().children(":first-child").css(
                {
//                    "border-bottom-right-radius": "4px",
                    "border": "none",
                    "color": "rgba(255,255,255,.7)",
                    "font-weight": "normal",
                    "font-style": "normal"
                }
        );
    };
    $(".menuV_seccion").click(paAbajoPaArriba);
    $(".menuV_seccion").click(paArriba);


//Comportamiento subsecciones
    $(".menuV_subseccion").hover(function () {
        $(this).animate({marginLeft: "3%"}, 100);
        $(this).css({
            "background-color": "rgba(255,176,98,.8)",
            "transition-duration": "0.3s"
        });
    }, function () {
        $(this).animate({marginLeft: "0%"});
        $(this).css({
            "background-color": "rgba(255,176,98,.2)"
        });
    });
    $(".menuV_subseccion").click(function () {
        //Reseteo de propiedades
        $(".menuV_subseccion").css(
                {
//                    "border-bottom-right-radius": "4px",
                    "border": "none",
                    "font-weight": "normal",
                    "font-style": "normal",
                    "color": "rgba(255,255,255,.7)"
                }
        );
        //Al clickar
        $(this).css(
                {
//                    "border-bottom-right-radius": "15%",
                    "border-bottom": "3px solid rgba(255,255,255,.7)",
                    "font-weight": "bolder",
                    "font-style": "italic",
                    "color": "rgba(255,255,255,1)"
                }
        );
    });
}


