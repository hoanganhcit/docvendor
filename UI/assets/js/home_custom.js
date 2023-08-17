$(document).ready(function() {
	// $('#homepage').fullpage({
	// 	verticalCentered: false,
	// 	navigation: true,
	// 	anchors: ['home', 'about', 'business', 'customers', 'contact'] 
	// });


	// var menuDecoration = $(".menu-btn-morphing-object");
	// if(menuDecoration.length){
	// 	var morphing = anime({
	// 		targets: '.menu-btn-morphing-path',
	// 		d: [
	// 		{ value: 'M49.8,20.5c0,13.3-7.8,29.2-21.1,29.2S0.4,35.1,0.4,21.8S10.7,0.9,23.9,0.9S49.8,7.3,49.8,20.5z' },
	// 		{ value: 'M49.7,25.9c0,13.3-4.1,23.8-17.4,23.8S0.4,39.5,0.4,26.3S15.1,0.6,28.4,0.6S49.7,12.7,49.7,25.9z' },
	// 		{ value: 'M49.5,22.4c0,13.3-9.2,27-22.5,27S0.3,35.4,0.3,22.2S11,0.6,24.2,0.6S49.5,9.1,49.5,22.4z' },
	// 		{ value: 'M49.8,29.3c0,13.3-14.9,20.5-28.2,20.5S0.8,38.6,0.8,25.4S15.9,0.2,29.2,0.2S49.8,16,49.8,29.3z' },
	// 		],
	// 		easing: 'easeOutQuad',
	// 		duration: 9000,
	// 		loop: true,
	// 		autoplay: true
	// 	});
	// }

	// var morphing = anime({
	// 	targets: '#home-morphing-path-2',
	// 	d: [
	// 	{ value: 'M1052.2,541.3c0,218.7-387.1,333.1-624.3,333.1S10.6,544.9,10.6,326.2S579.5,34,816.6,34S1052.2,322.6,1052.2,541.3z' },
	// 	{ value: 'M1072.6,488.4c0,218.7-176.7,393.7-413.8,393.7S36.9,765.5,36.9,546.8S395.4,11.9,632.5,11.9S1072.6,269.7,1072.6,488.4z' },
	// 	{ value: 'M1027.1,447.6c0,218.7-248.4,432.3-485.5,432.3S19,633.1,19,414.5S357.1,18.5,594.2,18.5S1027.1,228.9,1027.1,447.6z' },
	// 	{ value: 'M1070.2,472.6c0,218.7-317.4,389.1-554.5,389.1S9.1,800.7,9.1,582.1S195.7,13,432.8,13S1070.2,253.9,1070.2,472.6z' },
	// 	],
	// 	easing: 'easeOutQuad',
	// 	duration: 9000,
	// 	loop: true,
	// 	autoplay: true
	// });
	// var morphing = anime({
	// 	targets: '#home-morphing-path-1',
	// 	d: [
	// 	{ value: 'M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S52.6,623.8,52.6,405.1S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z' },
	// 	{ value: 'M1062.1,502.6c0,218.7-239.9,355.5-477,355.5S43.6,637.3,43.6,418.6S480.2,39,717.3,39S1062.1,283.9,1062.1,502.6z' },
	// 	{ value: 'M1022.4,500.3c0,218.7-243.7,379.6-480.8,379.6S19,633.1,19,414.5S238.5,45.1,475.6,45.1S1022.4,281.6,1022.4,500.3z' },
	// 	{ value: 'M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S26.7,626.5,26.7,407.8S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z' },
	// 	],
	// 	easing: 'easeOutQuad',
	// 	duration: 9000,
	// 	loop: true,
	// 	autoplay: true
	// }); 
	
	// var quoteDecoration = $(".quote-morphing-object");
	// if(quoteDecoration.length){
	// 	var morphing = anime({
	// 		targets: '.quote-morphing-path',
	// 		d: [
	// 		{ value: 'M585.1,320c0,148.3-64.7,263-213.1,263S30,532.3,30,384S232.7,13.6,381,13.6S585.1,171.7,585.1,320z' },
	// 		{ value: 'M595,320c0,148.3-203.7,280-352,280S13.6,364.3,13.6,216S132.7,51,281,51S595,171.7,595,320z' },
	// 		{ value: 'M585.1,307c0,148.3-185.7,293-334.1,293S28.9,395.3,28.9,247S224.7,28,373,28S585.1,158.7,585.1,307z' },
	// 		{ value: 'M585.1,354.1c0,148.3-151.7,234-300,234S13.6,448.3,13.6,300S178.8,13.6,327.1,13.6S585.1,205.8,585.1,354.1z' }
	// 		],
	// 		easing: 'easeOutQuad',
	// 		duration: 9000,
	// 		loop: true,
	// 		autoplay: true
	// 	});
	// }
});



$(document).ready(function(){  
	$('select').formSelect();
	$('.tooltipped').tooltip();
	$('.collapsible').collapsible();   

	$('.info_cvc').click(function(){ 
		$('.security_info').toggleClass('show');
	}); 
	$('.security_info .close').click(function(){ 
		$('.security_info').toggleClass('show');
	}); 
}); 