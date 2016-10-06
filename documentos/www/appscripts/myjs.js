$(document).ready(function() {
    $('#arturo0').hover(function() {
        $(this).addClass(' slideInRight');
        //console.log("Activado");
    }, function() {
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(' slideInRight');
            //console.log("Fin");
        });
    });
});
