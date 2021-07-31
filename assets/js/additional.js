$(document).ready(function(){
  $( "#nav-btn" ).click(function() {
    if($("#mobile-nav-id").height() > 0){
      $("#mobile-nav-id").css('max-height','0');
    }else{
      $("#mobile-nav-id").css('max-height','500px');
    }
  });

  $(window).on('resize', function(){
    $("#mobile-nav-id").css('max-height','0');
  });
});


$('#main').viewer({
  inline: true,
  viewed: function() {
    $image.viewer('zoomTo', 1);
  }
});

