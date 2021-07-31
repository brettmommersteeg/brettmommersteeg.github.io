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

  var images = document.querySelector('article') 

  var viewer = new Viewer(images, {
    url: 'src',
    navbar: false,
    toolbar: false,
    loading: false,
    rotatable: false,
    title: function (image) {
      return image.alt + ' (' + (this.index + 1) + '/' + this.length + ')';
    },
  })

  
});

