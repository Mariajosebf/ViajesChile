$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  $(document).ready(function(){
    $('#contactForm').submit(function(e){
      e.preventDefault(); 
      showAlert();
    });
  });

  function showAlert() {
  
    var alertHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                    'El correo ha sido enviado con éxito.' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                    '</div>';
    $(alertHtml).appendTo('.container');
  }
