import introScene from './scenes/introScene';
import kitScene from './scenes/kitScene';

$(document).ready(function(){

	// get window height
	var windowHeight = window.innerHeight;

	// init ScrollMagic
	var controller = new ScrollMagic.Controller();

	introScene(controller, windowHeight);
	kitScene(controller, windowHeight);


});


