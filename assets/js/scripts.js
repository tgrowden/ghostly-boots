// IIFE
(function() {
  var $ = jQuery;
  // shorthand for $(document).ready
  $(function() {
    $('#toTop').hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {
        $('#toTop').fadeIn();
      } else if ($(this).scrollTop() === 0) {
        $('#toTop').fadeOut();
      }
    });
    $('#toTop').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
  });
}());
