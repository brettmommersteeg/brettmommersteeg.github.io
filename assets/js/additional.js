$(document).ready(function(){
    $( "#mobile-nav" ).click(function() {
        if($(mobile-nav-id).height() > 0){
        $(mobile-nav-id).css('height','0');
        }else{
        $(mobile-nav-id).css('height','auto');
        }
  });
});