
function mostrarEditArticulo() {

//var datos = "<div id='bloqueEditArticulo' class='caja-formulario dialog-editar'>\n\
    var datos = "<div id='bloqueEditArticulo' class='caja-formulario'>\n\
                <p id='titulo-formulario-articulo-edit' class='tituloFormulario'>Edición de artículo.</p>\n\
                <hr/>\n\
                <section id='editArticulo-bloqueId' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-id' class='registro-label'>Id artículo: </label>\n\
                    <input id='editArticulo-input-id' name='id' type='text' class='registro-input' disabled/>\n\
                </section>\n\
                <section id='editArticulo-bloqueNombre' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-nombre' class='registro-label'>Nombre: </label>\n\
                    <input id='editArticulo-input-nombre' name='nombre' type='text' class='registro-input input-required' autofocus='autofocus'/>\n\
                    <label id='editArticulo-label-error-nombre' for='editArticulo-input-nombre' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloqueDescripcion' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-descripcion' class='registro-label'>Descripción: </label>\n\
                    <input id='editArticulo-input-descripcion' name='descripcion' type='text' class='registro-input input-required'/>\n\
                    <label id='editArticulo-label-error-descripcion' for='editArticulo-input-descripcion' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloquePrecio' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-precio' class='registro-label'>Precio: </label>\n\
                    <input id='editArticulo-input-precio' name='precio' type='text' class='registro-input input-required'/>\n\
                    <label id='editArticulo-label-error-precio' for='editArticulo-input-precio' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloqueImagen' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-imagen' class='registro-label'>Imagen: </label>\n\
                    <input id='editArticulo-input-imagen' name='imagen' type='text' class='registro-input input-required'/>\n\
                    <label id='editArticulo-label-error-imagen' for='editArticulo-input-imagen' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloqueIdPlataforma' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-id-plataforma' class='registro-label' disabled>Id plataforma: </label>\n\
                    <input id='editArticulo-input-id-plataforma' name='idPlataforma' type='text' class='registro-input' disabled/>\n\
                </section>\n\
                <section id='editArticulo-bloquePlataforma' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-select-plataforma' class='registro-label'>Plataforma: </label>\n\
                    <select id='editArticulo-select-plataforma' name='plataforma' class='registro-select input-select-required'>\n\
                    </select>\n\
                    <label id='editArticulo-label-error-plataforma' for='editArticulo-select-plataforma' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloqueTipo' class='registro-bloqueDatos'>\n\
                    <label for='editArticulo-input-tipo' class='registro-label'>Tipo artículo: </label>\n\
                    <input id='editArticulo-input-tipo' name='tipo' type='text' class='registro-input input-required'/>\n\
                    <label id='editArticulo-label-error-tipo' for='editArticulo-input-tipo' class='registro-label-error'>*</label>\n\
                </section>\n\
                <section id='editArticulo-bloqueOferta' class='registro-bloqueDatos'>\n\
                    <input id='editArticulo-check-oferta' name='check-oferta' type='checkbox'/>\n\
                    <label id='editArticulo-label-precio-oferta' for='editArticulo-check-oferta' class='registro-label'>Precio artículo en oferta: </label>\n\
                    <input id='editArticulo-input-oferta' name='oferta' type='text' class='registro-input-corto' disabled/>\n\
                    <label id='editArticulo-label-error-oferta' for='editArticulo-input-oferta' class='registro-label-error'></label>\n\
                </section>\n\
                <hr/>\n\
                <span id='msg-requerido' class='registro-label-error'>*Campos requeridos</span>\n\
                <br/>\n\
                <section id='editArticulo-botonera' class='formulario-botonera formulario-edit-botonera'>\n\
                    <div id='editArticulo-boton-guardar' class='formulario-boton formulario-edit-boton'><span>Guardar</span></div>\n\
                    <div id='editArticulo-boton-cerrar' class='formulario-boton formulario-edit-boton'><span>Salir</span></div>\n\
                </section>\n\
            </div>";

    $("#articulos").html(datos);//Para dialog, cambiar a append
    //Definición del dialog
//    $(function () {
//        $("#bloqueEditArticulo").dialog(
//                {
//                    autoOpen: false,
//                    modal: true,
//                    title: "Gestión de productos",
//                    minWidth: 550
//                }
//        );
//    });
    
    $("#editArticulo-check-oferta").change(function () {
        if (this.checked) {
            $("#editArticulo-input-oferta").removeAttr("disabled");
        } else {
            $("#editArticulo-input-oferta").attr('disabled', 'disabled');
            $("#editArticulo-input-oferta").val("");
            $("#editArticulo-label-error-oferta").text("");
        }
    });


    function cargarPlataformaEdit() {
        var datos = "<option id='mensaje-lista-option-plataforma' class='mensaje-lista-option' value='...'>-- Elige una opción --</option>";
        $.each(listaPlataformas, function (index) {
            datos += "<option class='option-plataforma' value='" + listaPlataformas[index].nombrePlataforma + "'>" + listaPlataformas[index].nombrePlataforma + "</option>";
        });

        $("#editArticulo-select-plataforma").append(datos);
    }
    cargarPlataformaEdit();//Carga las plataformas en el select
    
    
    var formulario = "editArticulo";
    var listaRequeridos = $("#bloqueEditArticulo input[class$='input-required']");

    var inputId = $("#editArticulo-input-id");
    var inputNombre = $("#editArticulo-input-nombre");
    var inputDescripcion = $("#editArticulo-input-descripcion");
    var inputPrecio = $("#editArticulo-input-precio");
    var inputImg = $("#editArticulo-input-imagen");
    var inputIdPlataforma = $("#editArticulo-input-id-plataforma");
    var selectPlataforma = $("#editArticulo-select-plataforma");
    var inputTipo = $("#editArticulo-input-tipo");
    var inputOferta = $("#editArticulo-input-oferta");
    
    
    //VALIDACIONES
    function validarEditArticulo() {
        var errorValidacion = 0;

        //VALIDACIONES AL CLICK
        //Validar campos requeridos
        for (var i = 0; i < listaRequeridos.length; i++) {
            errorValidacion += validarCampoRequerido(formulario, listaRequeridos[i].name, listaRequeridos[i].value);
        }
        errorValidacion += validarOptionRequerido(formulario, selectPlataforma.attr('name'), selectPlataforma.val());

        //Validar contenidos
        errorValidacion += comprobarPrecio(formulario, inputPrecio.attr('name'), inputPrecio.val());
        if (!($("#editArticulo-input-oferta").attr('disabled'))) {
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
    
    //BOTÓN EDITAR
    pulsado = false;
    $("#editArticulo-boton-guardar").click(function () {
        var errorValidacion = validarEditArticulo();

        //ENVÍO PARA REGISTRO EN BD
        if (errorValidacion === 0) {
            editarArticulo(inputId.val(), inputNombre.val(), inputDescripcion.val(), inputPrecio.val(), inputImg.val(), inputIdPlataforma.val(), selectPlataforma.val(), inputTipo.val(), inputOferta.val());
        }

    });
    
    
    //BOTÓN CANCELAR
    $("#editArticulo-boton-cerrar").click(function(){
        mostrarListaArticulos();
//        $("#bloqueEditArticulo").dialog("close");
        $("#lista-articulos").jqGrid().trigger("reloadGrid");
    });
    

}



function editarArticulo($id, $nombre, $descrip, $precio, $img, $idPlataforma, $plataforma, $tipo, $precioOferta) {
    $promesa = getAjaxArticuloEdit($id, $nombre, $descrip, $precio, $img, $idPlataforma, $plataforma, $tipo, $precioOferta);
    $promesa.success(function (data) {
        if (data[0] !== null) {
            alert("El artículo '" + data[0].nombreArticulo + "' se ha actualizado correctamente");
            mostrarListaArticulos();
//            $("#bloqueEditArticulo").dialog("close");
            jQuery("#lista-articulos").jqGrid().trigger("reloadGrid");
        } else {
            alert("Ha ocurrido un error: el artículo no ha podido ser actualizado");
        }

    });
}

