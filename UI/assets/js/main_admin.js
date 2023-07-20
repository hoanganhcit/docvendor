$(document).ready(function() {
	$('.user_dropdown').dropdown();
	$('.tabs').tabs();
	$('.sidenav').sidenav({
		edge: "right"
	});
	$('.datepicker').datepicker();
	$('.timepicker').timepicker();
	$('.collapsible').collapsible();
	$('select').formSelect(); 
	$('.tooltipped').tooltip();
	$('.modal').modal({
		opacity: 0.7
	}); 

	$('.toggle-sidenav').click(function(){
		$('.side-nav').toggleClass('hide-nav');
		$('main').toggleClass('full-left');
		$('footer').toggleClass('full-left');
		$(this).toggleClass('margin0');
	}); 
	var $window = $(window),
	$side_nav = $('#slide-out');
	$main = $('main');
	$footer = $('footer');
	$toggle = $('.toggle-sidenav');

	$window.resize(function resize() {
		if ($window.width() < 1366) {
			$side_nav.addClass('hide-nav');
			$main.addClass('full-left');
			$footer.addClass('full-left');
			$toggle.addClass('margin0');
			return true;
		}

		$side_nav.removeClass('hide-nav');
		$main.removeClass('full-left');
		$footer.removeClass('full-left');
		$toggle.removeClass('margin0');
	}).trigger('resize');

	$('.userDropdown').click(function(){
		$('.dropdown-nav').toggleClass('show'); 	 
	}); 
	$('.sidenav-trigger').click(function(){
		$('.sidenav-overlay').css('visibility', 'visible');
	}); 
	$('.collapse-menu').click(function(){
		$('.collapsible_menu').slideToggle();
	}); 
}); 