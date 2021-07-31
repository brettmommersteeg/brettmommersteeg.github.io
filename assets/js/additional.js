$(document).ready(function(){
    $( "#nav-btn" ).click(function() {
        if($("#mobile-nav-id").height() > 0){
          $("#mobile-nav-id").css('max-height','0');
        }else{
          $("#mobile-nav-id").css('max-height','500px');
        }
  });
  
});