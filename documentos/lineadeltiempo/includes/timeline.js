/*  JavaScript Document                      */
var timelineWidth = 0;
var panelWidth = 0;
var firstRun = true;
var totalPanels = 0;
var currentPanel = 0;
$(document).ready(function() {
    panelWidth = $('.timeline .panel').width();
    console.log("panelW: "+panelWidth);
    timelineWidth = $('.timeline').width();
    console.log("timelineW: "+timelineWidth);
    totalPanels = $('.timeline .panel').length;
    console.log("totalP: "+totalPanels);
    adjustLayout();
    setInterval(checkWindowSize, 1000);
});

function adjustLayout() {
  var indexC= 0;
    $('.timeline #bio.panel').each(function(index) {
        var newX = panelWidth * index;
        //console.log(newX);
        $(this).css('left', newX + 'px');

        var newLabel = $(this).find('.label').html();
        //console.log($('.newLabel').get);
        $('div .bio-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
         indexC+=1;
    });

    $('.timeline #estudios.panel').each(function(index) {
        var newX = panelWidth * indexC;
        //console.log(newX);
        $(this).css('left', newX + 'px');

        var newLabel = $(this).find('.label').html();
        //console.log($('.newLabel').get);
        $('div .estudios-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
        indexC+=1;
    });
    $('.timeline #premios.panel').each(function(index) {
        var newX = panelWidth * indexC;
        //console.log(newX);
        $(this).css('left', newX + 'px');

        var newLabel = $(this).find('.label').html();
        //console.log($('.newLabel').get);
        $('div .premios-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
        indexC+=1;
    });
    $('.timeline #expoI.panel').each(function(index) {
        var newX = panelWidth * indexC;
        //console.log(newX);
        $(this).css('left', newX + 'px');
        var newLabel = $(this).find('.label').html();
        //console.log($('.newLabel').get);
        $('div .exposcionionesI-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
        indexC+=1;
    });
    $('.timeline #publicaciones.panel').each(function(index) {
        var newX = panelWidth * indexC;
        //console.log(newX);
        $(this).css('left', newX + 'px');
        var newLabel = $(this).find('.label').html();
        //console.log($('.newLabel').get);
        $('div .publicaciones-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
        indexC+=1;
    });
    $('.timeline #expoC.panel').each(function(index) {
      var newX = panelWidth * indexC;
      //console.log(newX);
      $(this).css('left', newX + 'px');
      var newLabel = $(this).find('.label').html();
      //console.log($('.newLabel').get);
      $('div .exposicionesC-container ul').append('<li> <a href="#">' + newLabel + '</a></li>');
      indexC+=1;
  });


    currentPanel = $('.timeline nav a:last-child()').index();
    activateNAvigation();
    console.log('currentP:'+currentPanel);
    for(var i = 0; i <= ($('#expoI.panel').length)-1; i++){
      console.log("Exposiciones I"+i+": "+$('#expoI.panel').get(i));
    }
}

function activateNAvigation() {
  console.log("activate");
    $('.timeline nav a').on('click', function(event) {
        console.log("clicked");
        currentPanel = $(this).index();
        timelineWidth = $('.timeline').width();
        $('.timeline nav a').removeClass('selected');
        $(this).addClass('selected');
        var timelineOffset = (timelineWidth - panelWidth) * .5;
        var newPosition = ((currentPanel * panelWidth) * -1) + timelineOffset;
        $('.panel_slider').animate({
            left: newPosition + 'px'
        }, 1000);
        var backgroundWidth = $('.timeline .backgroumd_slider img').width();
        var moveAmount = (backgroundWidth - timelineWidth) / totalPanels;
        console.log("move");
        /* Act on the event */
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
        $('.timeline nav a:nth-child(' + (currentPanel + 1) + ')').trigger('click');
        firstRun = false;
    }
}
