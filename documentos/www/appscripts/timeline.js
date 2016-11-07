/*  JavaScript Document                      */
var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanels = 0;
var currentPanel = 0;

$(document).ready(function() {
  panelWidth = $('.timeline .panel').width();
  console.log("panelW: " + panelWidth);
  timelineWidth = $('.timeline').width();
  console.log("timelineW: " + timelineWidth);
  totalPanels = $('.timeline .panel').length;
  //console.log("totalP: " + totalPanels);
  setAparecer();
  adjustLayout();
  setSlider();
  setInterval(checkWindowSize, 1000);
});

function setSlider() {
  var handle = $("#custom-handle");
  $("#slider").slider({
    min: -100,
    max: 62000,
    slide: function(event, ui) {
      var vSlider = $('#slider').slider("value");
      console.log("slider" + vSlider);
      $('.panel_slider').css({
        left: -vSlider
      });;
    }
  });

}

function setAparecer() {
  var apa;
  $('.timeline .main-iso .panel').each(function(index) {
    $(this).addClass('aparece');
  });
  //console.log("Todas Aparecen");
}

function adjustLayout() {
  var indexC = 0;
  $('.timeline .panel.aparece').each(function(index) {
    var newX = panelWidth * indexC;
    $(this).css('left', newX + 'px');
    var newLabel = $(this).find('.label').html();
    $('div .dropdown.bio-container ul.dropdown-menu').append(
      '<li role="presentation" value=' +
      indexC + '> <a role="menuitem" href="#">' + newLabel + '</a></li>');
    indexC += 1;
  });
  currentPanel = $('.timeline a:last-child()').index();
  activateNAvigation();
}

function activateNAvigation() {
  $('#time-nav li ').on('click', function(event) {
    console.log("clicked");
    currentPanel = $(this).val();
    var ind = 0;
    timelineWidth = $('.timeline').width();
    $('#time-nav li a').removeClass('.selected');
    $(this).addClass('.selected');
    var timelineOffset = (timelineWidth - panelWidth) * .5;
    var newPosition = ((currentPanel * panelWidth) * -1) + timelineOffset;
    $('.panel_slider').animate({
      left: newPosition + 'px'
    }, 1000);
    ind = 0;
  });
}

function checkWindowSize() {
  var newTimelineWidth = $('.timeline').width();
  if (newTimelineWidth > 760 && timelineWidth > 760) {

  } else if (newTimelineWidth < 760 && timelineWidth < 760) {

  } else {
    if (newTimelineWidth > 760 && timelineWidth < 760) {
      firstRun = true;
    }
  }
  timelineWidth = newTimelineWidth;
  if (firstRun == true) {
    $('.timeline nav a:nth-child(' + (currentPanel + 1) + ')').trigger(
      'click');
    firstRun = false;
  }
}
