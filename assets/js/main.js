/* Smooth scroll */
$(document).ready(function(){

    $("a").click(function(event){
        event.preventDefault()

        var gato = this.hash;

        $("html").animate({
            scrollTop: $(gato).offset().top - 70,

        },
        800
        )
    })
})
/* Función que despliega tooltips */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
/* Función que permite ejecutar un modal */
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })