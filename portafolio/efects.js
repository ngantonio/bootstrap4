$(function(){
    $('.galeria .contenedor-img').on('click', function (){
       $('#modal').modal;
       //cuando se haga clickbuscamos la etiqueta img, y tomamos el atributo src de esa etiqueta, que tendra la ruta de esa imagen
       var ruta_img = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_img);
    });

  /*  $('#modal').on('click', function(){
        $('#modal').modal('hide');
     });*/
});