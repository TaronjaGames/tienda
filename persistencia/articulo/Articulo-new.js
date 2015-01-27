
function mostrarNewArticulo() {

    //Sólo para dialog
//    var claseCajaFormulario = "";
//    if (accionPrevia === "panel-admin-articulo-new" || accionPrevia === "opciones-admin-newArticulo") {
//        claseCajaFormulario = "";
//    } else {
//        claseCajaFormulario = "dialog-new";
//    }

//var datos = "<div id='bloqueNuevoArticulo' class='caja-formulario " + claseCajaFormulario + "'>\n\
    var datos = "<div id='bloqueNuevoArticulo' class='caja-formulario'>\n\
                <p id='titulo-formulario-articulo-new' class='tituloFormulario'>Registro de nuevo artículo.</p>\n\
                <hr/>\n\
                <section id='newArticulo-bloqueNombre' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-input-nombre' class='registro-label'>Nombre: </label>\n\
                    <input id='newArticulo-input-nombre' name='nombre' type='text' class='registro-input input-required'/>\n\
                    <label id='newArticulo-label-error-nombre' for='newArticulo-input-nombre' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloqueDescripcion' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-input-descripcion' class='registro-label'>Descripción: </label>\n\
                    <input id='newArticulo-input-descripcion' name='descripcion' type='text' class='registro-input input-required'/>\n\
                    <label id='newArticulo-label-error-descripcion' for='newArticulo-input-descripcion' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloquePrecio' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-input-precio' class='registro-label'>Precio: </label>\n\
                    <input id='newArticulo-input-precio' name='precio' type='text' class='registro-input input-required'/>\n\
                    <label id='newArticulo-label-error-precio' for='newArticulo-input-precio' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloqueImagen' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-input-imagen' class='registro-label'>Imagen: </label>\n\
                    <input id='newArticulo-input-imagen' name='imagen' type='text' class='registro-input input-required'/>\n\
                    <label id='newArticulo-label-error-imagen' for='newArticulo-input-imagen' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloquePlataforma' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-select-plataforma' class='registro-label'>Plataforma: </label>\n\
                    <select id='newArticulo-select-plataforma' name='plataforma' class='registro-select input-select-required'>\n\
                    </select>\n\
                    <label id='newArticulo-label-error-plataforma' for='newArticulo-select-plataforma' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloqueTipo' class='registro-bloqueDatos'>\n\
                    <label for='newArticulo-input-tipo' class='registro-label'>Tipo artículo: </label>\n\
                    <input id='newArticulo-input-tipo' name='tipo' type='text' class='registro-input input-required'/>\n\
                    <label id='newArticulo-label-error-tipo' for='newArticulo-input-tipo' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='newArticulo-bloqueOferta' class='registro-bloqueDatos'>\n\
                    <input id='newArticulo-check-oferta' name='check-oferta' type='checkbox'/>\n\
                    <label id='newArticulo-label-precio-oferta' for='newArticulo-check-oferta' class='registro-label'>Precio artículo en oferta: </label>\n\
                    <input id='newArticulo-input-oferta' name='oferta' type='text' class='registro-input-corto' disabled/>\n\
                    <label id='newArticulo-label-error-oferta' for='newArticulo-input-oferta' class='registro-label-error'></label>\n\
                </section>\n\
                <hr/>\n\
                <span id='msg-requerido' class='registro-label-error'>*Campos requeridos</span>\n\
                <br/>\n\
                <section id='newArticulo-botonera' class='formulario-botonera formulario-new-botonera'>\n\
                    <div id='newArticulo-boton-enviar' class='formulario-boton formulario-new-boton'><span>Enviar</span></div>\n\
                    <div id='newArticulo-boton-listar' class='formulario-boton formulario-new-boton'><span>Ver listado</span></div>\n\
                    <div id='newArticulo-boton-cancelar' class='formulario-boton formulario-new-boton'>\n\
                        <span>Salir</span>\n\
                    </div>\n\
                </section>\n\
            </div>";

    //En función del botón de donde venimos...
    if (accionPrevia === "panel-admin-articulo-new" || accionPrevia === "opciones-admin-newArticulo" || accionPrevia === "opciones-desplegable-admin-newArticulo") {
        $("#articulos").html(datos);//Para no dialog
    } else {
        $("#articulos").html(datos);//Para dialog, cambiar a append
        //Definición del dialog
//        $(function () {
//            $("#bloqueNuevoArticulo").dialog(
//                    {
//                        autoOpen: false,
//                        modal: true,
//                        title: "Gestión de artículos",
//                        minWidth: 550
//                    }
//            );
//        });
        $("#newArticulo-boton-listar").css("display", "none");
    }

    $("#newArticulo-check-oferta").change(function () {
        if (this.checked) {
            $("#newArticulo-input-oferta").removeAttr("disabled");
        } else {
            $("#newArticulo-input-oferta").attr('disabled', 'disabled');
            $("#newArticulo-input-oferta").val("");
            $("#newArticulo-label-error-oferta").text("");
        }
    });

    function cargarPlataformaNew() {

        $promesa = getAjax("plataforma", "asc");

        $promesa.success(function (data) {
            var datos = "<option id='mensaje-lista-option-plataforma' class='mensaje-lista-option' value='...'>-- Elige una opción --</option>";
            $.each(data, function (index) {
                datos += "<option value='" + data[index].nombrePlataforma + "'>" + data[index].nombrePlataforma + "</option>";
            });

            $("#newArticulo-select-plataforma").append(datos);
        });
    }
    cargarPlataformaNew();



    var formulario = "newArticulo";
    var listaRequeridos = $("#bloqueNuevoArticulo input[class$='input-required']");

    var inputNombre = $("#newArticulo-input-nombre");
    var inputDescripcion = $("#newArticulo-input-descripcion");
    var inputPrecio = $("#newArticulo-input-precio");
    var inputImg = $("#newArticulo-input-imagen");
    var selectPlataforma = $("#newArticulo-select-plataforma");
    var inputTipo = $("#newArticulo-input-tipo");
    var inputOferta = $("#newArticulo-input-oferta");


    //VALIDACIONES
    function validarNewArticulo() {
        var errorValidacion = 0;

        //VALIDACIONES AL CLICK
        //Validar campos requeridos
        for (var i = 0; i < listaRequeridos.length; i++) {
            errorValidacion += validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
        }
        errorValidacion += validarOptionRequerido(formulario, selectPlataforma.attr('name'), selectPlataforma.val());

        //Validar contenidos
        errorValidacion += comprobarPrecio(formulario, inputPrecio.attr('name'), inputPrecio.val());
        if (!($("#newArticulo-input-oferta").attr('disabled'))) {
            errorValidacion += comprobarPrecio(formulario, inputOferta.attr('name'), inputOferta.val());
        }


        //VALIDACIONES DE CORRECCIÓN CON EVENTO DE TECLADO keyup
        $(".input-required").keyup(function () {
            validarCampoRequerido(formulario, this.name, this.value);
        });
        //Seleccion de plataforma
        selectPlataforma.change(function () {
            validarOptionRequerido(formulario, this.name, this.value);
        });
        //Formato precio
        inputPrecio.keyup(function () {
            comprobarPrecio(formulario, this.name, this.value);
        });

        //Formato precioOferta
        inputOferta.keyup(function () {
            comprobarPrecio(formulario, this.name, this.value);
        });

        return errorValidacion;
    }

    $("#newArticulo-boton-enviar").click(function () {
        var errorValidacion = validarNewArticulo();

        //ENVÍO PARA REGISTRO EN BD
        if (errorValidacion === 0) {
            grabarArticulo(inputNombre.val(), inputDescripcion.val(), inputPrecio.val(), inputImg.val(), selectPlataforma.val(), inputTipo.val(), inputOferta.val());
        }

    });


    //BOTÓN LISTAR
    $("#newArticulo-boton-listar").click(function () {
        accionPrevia = this.id;
        mostrarListaArticulos();
    });

    //BOTÓN CANCELAR
    $("#newArticulo-boton-cancelar").click(function () {
        if (accionPrevia === "panel-admin-articulo-new" || accionPrevia === "opciones-admin-newArticulo" || accionPrevia === "opciones-desplegable-admin-newArticulo") {
            if (accionPrevia === "panel-admin-articulo-new") {
                mostrarPanelesArticulo();
            } else {
                mostrarPanelesAdmin();
            }
        } else {
            mostrarListaArticulos();
//            $("#bloqueNuevoArticulo").dialog("close");
            $("#lista-articulos").jqGrid().trigger("reloadGrid");
        }
    });

}

function grabarArticulo($nombre, $descrip, $precio, $img, $plataforma, $tipo, $precioOferta) {
    $promesa = getAjaxArticuloNew($nombre, $descrip, $precio, $img, $plataforma, $tipo, $precioOferta);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El artículo '" + data[0].nombreArticulo + "' se ha grabado correctamente");
            if (accionPrevia === "panel-admin-articulo-new" || accionPrevia === "opciones-admin-newArticulo" || accionPrevia === "opciones-desplegable-admin-newArticulo") {
                if (accionPrevia === "panel-admin-articulo-new") {
                    mostrarNewArticulo();
                    //mostrarPanelesArticulo();
                } else {
                    mostrarNewArticulo();
                    //mostrarPanelesAdmin();
                }
            } else {
//            $(".registro-input").val("");
//            $(".registro-select option[value='...']").attr("selected","selected");
//                mostrarListaArticulos();
//            $("#bloqueNuevoArticulo").dialog("close");
                mostrarNewArticulo();
                jQuery("#lista-articulos").jqGrid().trigger("reloadGrid");
            }
        } else {
            alert("Ha ocurrido un error: el artículo no ha podido ser guardado");
        }
    });
}



