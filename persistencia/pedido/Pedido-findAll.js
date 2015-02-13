
function mostrarListaPedidos() {

//    <label id='label-check-multiselect' for='check-multiselect'>Activar multiselección&nbsp;</label>\n\
//    <input type='checkbox' id='check-multiselect' value='multiselect-activado'/>


//                 <input id='boton-detalle' type='button' value='Ver detalle'/>

    //Tabla maestra (pedido)
    var datos = "<table id='lista-pedidos'></table>\n\
                 <div id='pager-pedidos'></div>";
    $("#articulos").html(datos);

    //Tabla detalle (detallepedido)
    var datosDetalle = "<table id='lista-detallepedido'></table>\n\
                        <div id='pager-detallepedido'></div>";
    $("#articulos").append(datosDetalle);

    var datosBotonVolver = "<div id='lista-pedidos-boton-volver-principal' class='formulario-new-boton' style='margin-left: 50px' onclick='mostrarPanelesAdmin()'>\n\
                                <span>Panel principal</span>\n\
                            </div>";
    $("#articulos").append(datosBotonVolver);



    //TABLA MAESTRA (pedido) /////////////////////////////////////////////////////////////////////////
    jQuery("#lista-pedidos").jqGrid({
        url: 'persistencia/pedido/Pedido-findAll.php',
        datatype: "json",
        colNames: ['Id pedido', 'Fecha', 'DNI cliente', 'Usuario', 'Importe pedido'/*, 'Moneda'*/],
        colModel: [
            {name: 'idPedido', index: 'idPedido', width: 50, align: "center", resizable: true},
            {name: 'fechaPedido', index: 'fechaPedido', width: 70, align: "center", resizable: true},
            {name: 'dniUsuario', index: 'dniUsuario', width: 50, align: "center", resizable: true},
            {name: 'loginUsuario', index: 'loginUsuario', width: 50, align: "center", resizable: true},
            {name: 'importePedido', index: 'importePedido', width: 50, align: "right", sortable: false, search: false,
                formatter: {
                    number: {
                        decimalSeparator: ".",
                        thousandsSeparator: "",
                        decimalPlaces: "2"
                                //defaultValue: '0.00'
                    }
                }
            }/*,
            {name: 'moneda', index: 'moneda', width: 40, align: "center", resizable: false, search: false}*/
        ],
        rowNum: 10,
        rowList: [10, 20, 30],
        pager: '#pager-pedidos',
        sortname: 'idPedido',
        viewrecords: true,
        sortorder: "desc",
        caption: "Gestión de pedidos",
        //multiselect: true,
        width: 550,
        height: "100%",
        rownumbers: true,
        onSelectRow: function (ids) {
            //alert(this.rows.length);
            if (ids === null) {
                ids = 0;
                if (jQuery("#lista-detallepedido").jqGrid('getGridParam', 'records') > 0)
                {
                    jQuery("#lista-detallepedido").jqGrid('setGridParam', {url: "persistencia/detallepedido/DetallePedido-findAll.php?q=1&id=" + ids, page: 1});
                    jQuery("#lista-detallepedido").jqGrid('setCaption', "Detalle del pedido: " + ids)
                            .trigger('reloadGrid');
                }
            } else {
                jQuery("#lista-detallepedido").jqGrid('setGridParam', {url: "persistencia/detallepedido/DetallePedido-findAll.php?q=1&id=" + ids, page: 1});
                jQuery("#lista-detallepedido").jqGrid('setCaption', "Detalle del pedido: " + ids)
                        .trigger('reloadGrid');
            }
        }

    })
            .jqGrid('navGrid', '#pager-pedidos', {add: false, edit: false, del: false, search: false},
            {url: "persistencia/pedido/Pedido-new-grid.php"}, //url add
            {url: "persistencia/pedido/Pedido-edit.php"}, //url edit
            {url: "persistencia/pedido/Pedido-delete.php"}//url delete
            );
//            .jqGrid('filterToolbar', {
//                searchOperators: false,
//                searchOnEnter: false,
//                autosearch: true
//            })


    //TABLA DETALLE (detallepedido) //////////////////////////////////////////////////////////////////
    jQuery("#lista-detallepedido").jqGrid({
        url: 'persistencia/detallepedido/DetallePedido-findAll.php',
        datatype: "json",
        colNames: ['Id línea', 'Articulo', 'Cantidad', 'Precio', 'Id Pedido', 'Importe línea'/*, 'Moneda'*/],
        colModel: [
            {name: 'idDetallePedido', index: 'idDetallePedido', width: 50, align: "center", resizable: true},
            {name: 'nombreArticulo', index: 'nombreArticulo', width: 90, resizable: true},
            {name: 'cantidadArticulo', index: 'cantidadArticulo', width: 50, align: "center", resizable: true},
            {name: 'precioArticulo', index: 'precioArticulo', width: 50, align: "right", resizable: true},
            {name: 'idPedido', index: 'idPedido', width: 50, align: "center", resizable: true},
            {name: 'importeLinea', index: 'importeLinea', width: 70, align: "right", sortable: false, search: false,
                formatter: {
                    number: {
                        decimalSeparator: ".",
                        thousandsSeparator: "",
                        decimalPlaces: "2"
                                //defaultValue: '0.00'
                    }
                }
            }/*,
            {name: 'moneda', index: 'moneda', width: 40, align: "center", resizable: false, search: false}*/
        ],
        rowNum: 10,
        rowList: [10, 20, 30],
        pager: '#pager-detallepedido',
        sortname: 'idDetallePedido',
        viewrecords: true,
        sortorder: "asc",
        caption: "Detalle de pedido",
        //multiselect: true,
        width: 600,
        height: "100%",
        rownumbers: true
    })
            .jqGrid('navGrid', '#pager-detallepedido', {add: false, edit: false, del: false, search: false});
//            .jqGrid('filterToolbar', {
//                searchOperators: false,
//                searchOnEnter: false,
//                autosearch: true
//            })

}




//FORMATO DE FECHAS
//jQuery.jgrid = {
//...
//   formatter : {
//     integer : {thousandsSeparator: " ", defaultValue: '0'},
//     number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
//     currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
//     date : {
//       dayNames: [
//         "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
//         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//       ],
//       monthNames: [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//       ],
//       AmPm : ["am","pm","AM","PM"],
//       S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
//       srcformat: 'Y-m-d',
//       newformat: 'd/m/Y',
//       parseRe: /[Tt\\\/:_;.,\t\s-]/,
//       masks : {
//         ISO8601Long:"Y-m-d H:i:s",
//         ISO8601Short:"Y-m-d",
//         ShortDate: "n/j/Y",
//         LongDate: "l, F d, Y",
//         FullDateTime: "l, F d, Y g:i:s A",
//         MonthDay: "F d",
//         ShortTime: "g:i A",
//         LongTime: "g:i:s A",
//         SortableDateTime: "Y-m-d\\TH:i:s",
//         UniversalSortableDateTime: "Y-m-d H:i:sO",
//         YearMonth: "F, Y"
//       },
//       reformatAfterEdit : false
//     },
//     baseLinkUrl: '',
//     showAction: '',
//     target: '',
//     checkbox : {disabled:true},
//     idName : 'id'
//   }
//...

