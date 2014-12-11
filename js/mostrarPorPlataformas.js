function mostrarPorPlataformas($plataforma){
    $promesa=getAjax("articulo","asc");
    
    $promesa.success(function (data){
        datos="";
        $.each(data,function(index){
            
            if(data[index].plataformaArticulo===$plataforma){
             datos+="<div class='articulo'><img src='style/img/articulos/"+data[index].imagenArticulo+".png' alt="+data[index].nombreArticulo+"> </div>";
            }
        });
        $("#articulos").html(datos);
    });
}


