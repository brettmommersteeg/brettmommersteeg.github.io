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

  // Images in .archive or archive
  var $images = $('.archive img') 
  var $images2 = $('archive img')
  console.log($images)

  $images.viewer({
    inline: true,
    viewed: function() {
      $image.viewer('zoomTo', 1);
    } 
  })

  $images2.viewer({
    inline: true,
    viewed: function() {
      $image.viewer('zoomTo', 1);
    } 
  })

  
});

