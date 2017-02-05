$(document).ready(function() {

  $('.navbar-toggle').on('click', function(){
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

   $('.bxslider').bxSlider({
     mode: 'fade',
     speed: 1000,
     pause: 7500,
     controls: false,
     auto: true,
     autoControls: false,
     pager: false,
     easing: 'swing',
   });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
