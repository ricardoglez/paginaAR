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
  adjustLayout();
  setSlider();

  setInterval(checkWindowSize, 1000);
});


function setSlider() {
  var handlesSlider = $('#slider-handles');
  console.log("Setting up.." + handlesSlider.get());
  noUiSlider.create(handlesSlider, {
    start: 1945,
    range: {
      'min': [1945],
      'max': [2016]
    }
  });
}

function adjustLayout() {
  var indexC = 0;
  console.log("iC: " + indexC);
  $('.timeline .panel').each(function(index) {
    var newX = panelWidth * indexC;
    //console.log("nX: " + newX);
    $(this).css('left', newX + 'px');
    var newLabel = $(this).find('.label').html();
    //console.log($('.newLabel').get);
    $('div .bio-container ul').append('<li role="presentation" value=' +
      indexC + '> <a role="menuitem" href="#">' + newLabel + '</a></li>');
    indexC += 1;
  });
  currentPanel = $('.timeline a:last-child()').index();
  activateNAvigation();
  console.log('currentP:' + currentPanel);
}

function activateNAvigation() {
  $('#time-nav li ').on('click', function(event) {
    currentPanel = $(this).val();
    var ind = 0;
    console.log("cP: " + currentPanel);
    //console.log(this, currentPanel);
    timelineWidth = $('.timeline').width();
    $('#time-nav li a').removeClass('.selected');
    $(this).addClass('.selected');
    var timelineOffset = (timelineWidth - panelWidth) * .5;
    var newPosition = ((currentPanel * panelWidth) * -1) + timelineOffset;
    $('.panel_slider').animate({
      left: newPosition + 'px'
    }, 1000);
    console.log("moveto :" + newPosition + "offset" + timelineOffset);
    /* Act on the event */
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

function sortingList() {
  tinysort($('li').toArray());
}
