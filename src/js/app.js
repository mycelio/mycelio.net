import introScene from './scenes/introScene';

$(document).ready(function(){

	// get window height
	var windowHeight = window.innerHeight;

	// init ScrollMagic
	var controller = new ScrollMagic.Controller();

	introScene(controller, windowHeight);


});


