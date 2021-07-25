$(document).ready(function(){
    $( "#nav-btn" ).click(function() {
        if($("#mobile-nav-id").height() > 0){
          $("#mobile-nav-id").css('max-height','0');
        }else{s
          $("#mobile-nav-id").css('max-height','600px');
        }
  });
});