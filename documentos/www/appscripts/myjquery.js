$(document).ready(function() {


  var stickyNavTop = $('#bread').offset().top;
  stickyNavTop = stickyNavTop - 90;

  $('#bread').wrap('<div class="bread-placeholder"></div>');

  $('.bread-placeholder').height($('#bread').outerHeight());

  $('#bread').wrapInner('<div class= "bread-inner"><div/>');
  var stickyNav = function() {

    var scrollTop = $(window).scrollTop();
    if (scrollTop >= stickyNavTop) {
      $('#bread').addClass('sticky');
      $('.bread-placeholder').addClass('sticky');
    } else {
      $('#bread').removeClass('sticky');
      $('.bread-placeholder').removeClass('sticky');
    }
  };

  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });


});
