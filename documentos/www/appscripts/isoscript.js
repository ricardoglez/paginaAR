$(document).ready(function() {

  $('.main-iso').isotope({
    itemSelector: '.item',
    layoutMode: 'fitColumns'
  });
  // Isotope click function
  $('.iso-nav ul li').click(function() {
    $('.iso-nav ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    console.log('selector ' + selector);

    var selectedPanels = $('.panel').filter(selector);

    console.log(selectedPanels[0]);

    $('.main-iso').isotope({
      filter: selector
    });
    return false;
  });
});
