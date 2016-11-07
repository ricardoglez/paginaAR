// Animation Scripts
$(document).ready(function() {
	$('#arturo0').hover(function() {
		$(this).addClass(' slideInRight');
		//console.log("Activado");
	}, function() {
		$(this).one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function() {
				$(this).removeClass(' slideInRight');
				//console.log("Fin");
			});
	});


	$('#animar0').addClass("hide-me").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		classToRemove: 'invisible',
		offset: 00
	});

	$('#animar1').addClass("hide-me").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		classToRemove: 'invisible',
		offset: 100
	});

	$('#animar2').addClass("hide-me").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		classToRemove: 'invisible',
		offset: 200
	});

	$('#animar-T').addClass("hide-me").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		classToRemove: 'invisible',
		offset: 200
	});



});
