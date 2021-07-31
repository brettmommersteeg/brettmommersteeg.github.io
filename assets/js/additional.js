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
  var images = document.querySelectorAll('.archive img') 
  var $images2 = $('archive img')

  var viewer = new Viewer(images[0], {
    url: 'data-original',
    title: function (image) {
      return image.alt + ' (' + (this.index + 1) + '/' + this.length + ')';
    },
  });

  // $images.viewer({
  //   inline: true,
  //   viewed: function() {
  //     $image.viewer('zoomTo', 1);
  //   } 
  // })

  // $images2.viewer({
  //   inline: true,
  //   viewed: function() {
  //     $image.viewer('zoomTo', 1);
  //   } 
  // })

  
});

