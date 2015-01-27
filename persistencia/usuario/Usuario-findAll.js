
function mostrarListaUsuarios() {

//    //Html para el formulario de búsqueda
//    var datosSearchForm = "<div class='h'>Buscar por:</div>\n\
//                            <div>\n\
//                                <input type='checkbox' id='autosearch' onclick='enableAutosubmit(this.checked)'>Activar autobúsqueda<br/>\n\
//                                Código<br/>\n\
//                                <input type='text' id='search_cd' onkeydown='doSearch(arguments[0]||event)'/>\n\
//                            </div>\n\
//                            <div>\n\
//                                Name<br/>\n\
//                                <input type='text' id='item' onkeydown='doSearch(arguments[0]||event)'/>\n\
//                                <button onclick='gridReload()' id='submitButton' style='margin-left:30px;'>Buscar</button>\n\
//                            </div>\n\
//                            <br/>";

    var datos = "<table id='lista-usuarios'></table>\n\
                    <div id='pager-usuarios'></div>\n\
                    <div id='lista-usuarios-boton-volver-principal' class='formulario-new-boton' style='margin-left: 50px' onclick='mostrarPanelesAdmin()'>\n\
                        <span>Panel principal</span>\n\
                    </div>\n\
                    <div id='lista-usuarios-boton-volver-usuario' class='formulario-new-boton' onclick='mostrarPanelesUsuario()'><span>Panel usuarios</span></div>";
    $("#articulos").html(datos);



    jQuery("#lista-usuarios").jqGrid({
        url: 'persistencia/usuario/Usuario-findAll.php',
        datatype: "json",
        colNames: ['Id', 'Rol', 'Nombre', 'Apellido1', 'Apellido2', 'Dni', 'Tfno.', 'eMail', 'Login', 'Password'],
        colModel: [
            {name: 'idUsuario', index: 'idUsuario', width: 50, align: "center", resizable: true},
            {name: 'rolUsuario', index: 'rolUsuario', width: 90, resizable: true},
            {name: 'nombreUsuario', index: 'nombreUsuario', width: 80, resizable: true},
            {name: 'apellido1Usuario', index: 'apellido1Usuario', width: 80, resizable: true},
            {name: 'apellido2Usuario', index: 'apellido2Usuario', width: 80, resizable: true},
            {name: 'dniUsuario', index: 'dniUsuario', width: 80, align: "right", resizable: true},
            {name: 'telefonoUsuario', index: 'telefonoUsuario', width: 80, align: "right", resizable: true},
            {name: 'emailUsuario', index: 'emailUsuario', width: 160, resizable: true, formatter: 'email'},
            {name: 'loginUsuario', index: 'loginUsuario', width: 90, resizable: true},
            {name: 'passwordUsuario', index: 'passwordUsuario', width: 90, resizable: true}
        ],
// // Ejemplo de más opciones para el colModel
// colModel:[
//   {name:'name',label:'Name', width:150,editable: true},
//   {name:'id',width:50, sorttype:"int", editable: true,formatter:strongFmatter},
//   {name:'email',label:'Email', width:150,editable: true,formatter:'email'},
//   {name:'stock',label:'Stock', width:60, align:"center", editable: true,formatter:'checkbox',edittype:"checkbox"},
//   {name:'item.price',label:'Price', width:100, align:"right", editable: true,formatter:'currency'},//currency es una función del usuario
//   {name:'item.weight',label:'Weight',width:60, align:"right", editable: true,formatter:'number'},
//   {name:'ship',label:'Ship Via',width:90, editable: true,formatter:'select', edittype:"select",editoptions: value:"2:FedEx;1:InTime;3:TNT;4:ARK;5:ARAMEX"}},      
//   {name:'note',label:'Notes', width:100, sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"20"}}      
// ],

        rowNum: 10,
        rowList: [10, 20, 30],
        pager: '#pager-usuarios',
        sortname: 'idUsuario',
        viewrecords: true,
        sortorder: "desc",
        caption: "Gestión de usuarios",
        multiselect: true,
        //width: "100%",
        height: "100%",
        rownumbers: true
    });
    jQuery("#lista-usuarios").jqGrid('navGrid', '#pager-usuarios', {add: false, edit: false, del: false, search: false})
            .navSeparatorAdd('#pager-usuarios', {
                position: "first"
            })
            //DELETE
            .navButtonAdd('#pager-usuarios', {
                caption: "",
                buttonicon: "ui-icon-trash",
                onClickButton: function() {
                    var idFila = jQuery("#lista-usuarios").jqGrid('getGridParam', 'selarrrow');
                    //Parámetro 'selrow' para recogería un solo id
                    //alert(idFila.length);
                    if (idFila.length !== 0) {
                        for (var i = 0; i < idFila.length; i++) {
                            $promesa = delAjaxById("usuario", idFila[i]);
                            $promesa.success(function(data) {
                                //alert(data);
                            });
                        }
                        jQuery("#lista-usuarios").jqGrid().trigger("reloadGrid");
                    } else {
                        alert("No ha seleccionado ningún registro a borrar!");
                    }
                },
                position: "first"
            })
            //UPDATE
            .navButtonAdd('#pager-usuarios', {
                caption: "",
                buttonicon: "ui-icon-pencil",
                onClickButton: function() {
                    var idFila = jQuery("#lista-usuarios").jqGrid('getGridParam', 'selarrrow');
                    //alert(idFila);
                    if (idFila.length === 1) {
                        $promesa = getAjaxById("usuario", idFila[0]);
                        $promesa.success(function(data) {
                            if (data[0] !== null) {
                                mostrarEditUsuario();
                                
                                $("#editUsuario-select-rol option[value='" + data[0].rolUsuario + "']").attr("selected", "selected");
                                $("#editUsuario-input-id").val(data[0].idUsuario);
                                $("#editUsuario-input-correo").val(data[0].emailUsuario);
                                $("#editUsuario-input-usuario").val(data[0].loginUsuario);
                                $("#editUsuario-input-password").val(data[0].passwordUsuario);
                                $("#editUsuario-input-nombre").val(data[0].nombreUsuario);
                                $("#editUsuario-input-ape1").val(data[0].apellido1Usuario);
                                $("#editUsuario-input-ape2").val(data[0].apellido2Usuario);
                                $("#editUsuario-input-nif").val(data[0].dniUsuario);
                                $("#editUsuario-input-tf").val(data[0].telefonoUsuario);
                                
//                                $("#bloqueEditUsuario").dialog("open");
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
            .navButtonAdd('#pager-usuarios', {
                caption: "",
                buttonicon: "ui-icon-plus",
                onClickButton: function() {
                    //alert(accionPrevia);
                    mostrarRegistroUsuario();
//                    $("#bloqueRegistro").dialog("open");
                },
                position: "first"
            });


}











//----------------------------------------------------------------------------------

//HTML PARA FORMULARIO BUSCAR ENCIMA DE LA TABLA
//    <div class="h">Search By:</div>
//<div>
//	<input type="checkbox" id="autosearch" onclick="enableAutosubmit(this.checked)"> Enable Autosearch <br/>
//	Code<br />
//	<input type="text" id="search_cd" onkeydown="doSearch(arguments[0]||event)" />
//</div>
//<div>
//	Name<br>
//	<input type="text" id="item" onkeydown="doSearch(arguments[0]||event)" />
//	<button onclick="gridReload()" id="submitButton" style="margin-left:30px;">Search</button>
//</div>
//
//<br />


//FUNCIONES PARA FORMULARIO BUSCAR
//    var timeoutHnd;
//    var flAuto = false;
//
//    function doSearch(ev) {
//        if (!flAuto)
//            return;
//    //var elem = ev.target||ev.srcElement;
//        if (timeoutHnd)
//            clearTimeout(timeoutHnd)
//        timeoutHnd = setTimeout(gridReload, 500)
//    }
//
//    function gridReload() {
//        var nm_mask = jQuery("#item_nm").val();
//        var cd_mask = jQuery("#search_cd").val();
//        jQuery("#bigset").jqGrid('setGridParam', {url: "bigset.php?nm_mask=" + nm_mask + "&cd_mask=" + cd_mask, page: 1}).trigger("reloadGrid");
//    }
//    function enableAutosubmit(state) {
//        flAuto = state;
//        jQuery("#submitButton").attr("disabled", state);
//    }
//----------------------------------------------------------------------------------




//----------------------------------------------------------------------------------
//FUNCIÓN PARA USAR EL DATEPICKER DE JQUERY UI
//    function pickdates(id) {
//        jQuery("#" + id + "_sdate", "#rowed6").datepicker({dateFormat: "yy-mm-dd"});
//    }
//----------------------------------------------------------------------------------



