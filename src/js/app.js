(function($) {

	// get window height
	var windowHeight = window.innerHeight;

	// init ScrollMagic
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
				triggerHook: 'onLeave'
		}
	});

	// attach a scene to each section
	$('section').each(function() {
		var name = $(this).attr('id');

		new ScrollMagic.Scene({
			triggerElement: this
		})
		.setPin(this)
		.addIndicators({name: name})
		.addTo(controller);
	})

	// add active class to each sections
	new ScrollMagic.Scene({
		offset: windowHeight*3
	})
	.setClassToggle('section#four', 'is-active')
	.addTo(controller);

})(jQuery);



