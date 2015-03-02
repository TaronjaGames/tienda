
function mostrarListaArticulos() {

    var datos = "<table id='lista-articulos'></table>\n\
                    <div id='pager-articulos'></div>\n\
                    <div id='lista-articulos-boton-volver-principal' class='formulario-new-boton' style='margin-left: 50px' onclick='mostrarPanelesAdmin()'>\n\
                        <span>Panel principal</span>\n\
                    </div>\n\
                    <div id='lista-usuarios-boton-volver-articulo' class='formulario-new-boton' onclick='mostrarPanelesArticulo()'><span>Panel artículos</span></div>";
    $("#articulos").html(datos);


    jQuery("#lista-articulos").jqGrid({
        url: 'persistencia/articulo/Articulo-findAll.php',
        datatype: "json",
        colNames: ['Id', 'Nombre', 'Descripción', 'Precio', 'Imagen', 'Id plataforma', 'Plataforma', 'Tipo', 'Uds. venta', 'Oferta'],
        colModel: [
            {name: 'idArticulo', index: 'idArticulo', width: 50, align: "center", resizable: true},
            {name: 'nombreArticulo', index: 'nombreArticulo', width: 140, resizable: true},
            {name: 'descripcionArticulo', index: 'descripcionArticulo', width: 100, resizable: true},
            {name: 'precioArticulo', index: 'precioArticulo', width: 70, align: "right", resizable: true},
            {name: 'imagenArticulo', index: 'imagenArticulo', width: 140, resizable: true},
            {name: 'idPlataforma', index: 'idPlataforma', width: 80, align: "center", resizable: true},
            {name: 'plataforma', index: 'plataforma', width: 80, align: "center", resizable: true},
            {name: 'tipoArticulo', index: 'tipoArticulo', width: 80, align: "center", resizable: true},
            {name: 'ventaArticulo', index: 'ventaArticulo', width: 60, align: "center", resizable: true},
            {name: 'ofertaArticulo', index: 'ofertaArticulo', width: 50, align: "right", resizable: true}
        ],
        rowNum: 10,
        rowList: [10, 20, 30],
        pager: '#pager-articulos',
        sortname: 'idArticulo',
        viewrecords: true,
        sortorder: "desc",
        caption: "Gestión de artículos",
        multiselect: true,
        //width: 900,
        height: "100%",
        rownumbers: true
    });
    jQuery("#lista-articulos").jqGrid('navGrid', '#pager-articulos', {add: false, edit: false, del: false, search: false})
            .navSeparatorAdd('#pager-articulos', {
                position: "first"
            })
            //DELETE
            .navButtonAdd('#pager-articulos', {
                caption: "",
                title: "Borrar registros seleccionados",
                buttonicon: "ui-icon-trash",
                onClickButton: function () {
                    var idFila = jQuery("#lista-articulos").jqGrid('getGridParam', 'selarrrow');
                    //Parámetro 'selrow' para recoger un solo id
                    //alert(idFila.length);
                    if (idFila.length !== 0) {
                        for (var i = 0; i < idFila.length; i++) {
                            $promesa = delAjaxById("articulo", idFila[i]);
                            $promesa.success(function (data) {
                                //alert(data);
                            });
                        }
                        jQuery("#lista-articulos").jqGrid().trigger("reloadGrid");
                    } else {
                        alert("No ha seleccionado ningún registro a borrar!");
                    }
                },
                position: "first"
            })
            //UPDATE
            .navButtonAdd('#pager-articulos', {
                caption: "",
                title: "Editar registro",
                buttonicon: "ui-icon-pencil",
                onClickButton: function () {
                    var idFila = jQuery("#lista-articulos").jqGrid('getGridParam', 'selarrrow');
                    //alert(idFila);
                    if (idFila.length === 1) {
                        $promesa = getAjaxById("articulo", idFila[0]);
                        $promesa.success(function (data) {
                            if (data[0] !== null) {
                                var idPlataformaEdit = data[0].idPlataforma;
//                                mostrarEditArticulo();
                                //alert(idPlataformaEdit);
                                
                                $("#editArticulo-input-id").val(data[0].idArticulo);
                                $("#editArticulo-input-nombre").val(data[0].nombreArticulo);
                                $("#editArticulo-input-descripcion").val(data[0].descripcionArticulo);
                                $("#editArticulo-input-precio").val(data[0].precioArticulo);
                                $("#editArticulo-input-imagen").val(data[0].imagenArticulo);
                                $("#editArticulo-input-id-plataforma").val(data[0].idPlataforma);
                                $promesaPlataforma = getAjaxById("plataforma", idPlataformaEdit);
                                $promesaPlataforma.success(function (data) {
                                    $("#editArticulo-select-plataforma> option[value='" + data[0].nombrePlataforma + "']").attr("selected", "selected");
                                });

                                $("#editArticulo-input-tipo").val(data[0].tipoArticulo);
                                if (data[0].ofertaArticulo > 0) {
                                    $("#editArticulo-check-oferta").attr("checked", "checked");
                                    $("#editArticulo-input-oferta").removeAttr("disabled");
                                    $("#editArticulo-input-oferta").val(data[0].ofertaArticulo);
                                }

                                $("#bloqueEditArticulo").dialog("open");
                            }
                        });
                    } else if (idFila.length === 0) {
                        alert("Seleccione un registro para editar!");
                    } else if (idFila.length > 1) {
                        alert("Sólo puede seleccionar un registro para editar!");
                    }
                },
                position: "first"
            })
            //INSERT
            .navButtonAdd('#pager-articulos', {
                caption: "",
                title: "Nuevo registro",
                buttonicon: "ui-icon-plus",
                onClickButton: function () {
//                    mostrarNewArticulo();
                    $("#newArticulo-boton-listar").hide();
                    $("#bloqueNuevoArticulo").dialog("open");
                },
                position: "first"
            });

}

