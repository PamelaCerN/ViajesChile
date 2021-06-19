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

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })