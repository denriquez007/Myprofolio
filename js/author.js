$(document).ready(function(){
	/*
	Navigation 
	*/
	$('#mainmenu a').each(function(){

		var theHref = $(this).attr('href'); //get the hash ID
		// var theSection = $('#pgHome');
		var theSection = $(theHref); //determine which section

		$(this).click(function(event){
			// kill default behavior - we'll take it from here.
			event.preventDefault();

			// no need to do this twice - window scroll is managing it.
			// $('#mainmenu a').removeClass('theChosenOne');
			// $(this).addClass('theChosenOne');

			// move the window
			$(window).scrollTo(theHref, 1000,{ offset: { top:-80 } });

		});/*end click event*/

	}); /*JQuery Each Loop*/

	/*
	Window Scroll
	*/

	var theSections = $('article > section');	
	var range_s1 = $(theSections[1]).offset().top - 80;
	var range_s2 = $(theSections[2]).offset().top - 80;
	var range_s3 = $(theSections[3]).offset().top - 80;


	var navState = 'static';
	$(window).scroll(function(){
		// how far has the user scrollde
		var howFarScrolled = $(window).scrollTop();

		// console.log(howFarScrolled);

		// Main Menu Fixed State Management
		if (howFarScrolled >= 76 && navState == 'static')
		{
			navState = 'fixed';
			$('body').addClass('fixed-nav');
		}
		else if (howFarScrolled < 76 && navState == 'fixed')
		{
			navState = 'static';
			$('body').removeClass('fixed-nav');
		}

		// console.log(navState);

		// section scroll change the main menu
		if (howFarScrolled < range_s1)
		{
			$('#mainmenu a').removeClass('theChosenOne'); /*remove all*/
			$('#mainmenu a:eq(0)').addClass('theChosenOne');
		}
		else if (howFarScrolled >= range_s1 && howFarScrolled < range_s2)
		{
			$('#mainmenu a').removeClass('theChosenOne'); /*remove all*/
			$('#mainmenu a:eq(1)').addClass('theChosenOne');
		}
		else if (howFarScrolled >= range_s2 && howFarScrolled < range_s3)
		{
			$('#mainmenu a').removeClass('theChosenOne'); /*remove all*/
			$('#mainmenu a:eq(2)').addClass('theChosenOne');
		}
		else if (howFarScrolled >= range_s3)
		{
			$('#mainmenu a').removeClass('theChosenOne'); /*remove all*/
			$('#mainmenu a:eq(3)').addClass('theChosenOne');
		}

	}); // here ends window scroll

	// window resize
	var mobile_state = 'closed';

	function responsive_menu(){
		var winWidth = $(window).width();

		if (winWidth < 700)
		{
			$('#mainmenu').addClass('mobile');
			$('#mainmenu a').css({'display':'none'});
		}
		else
		{
			$('#mainmenu').removeClass('mobile');
			$('#mainmenu a').css({'display':'inline-block'});
		}
		// anytime they resize tuck away the menu and set it back to closed
		mobile_state = 'closed';

		console.log(mobile_state);

	}

	$(window).resize(responsive_menu);
	$(window).scroll(responsive_menu);
	responsive_menu();

	$('#mainmenu .toggle').click(function(){
		if (mobile_state == 'closed')
		{
			mobile_state = 'open';
			$('#mainmenu a').css({'display':'block'});
		}
		else
		{
			mobile_state = 'closed';
			$('#mainmenu a').css({'display':'none'});
		}
		console.log(mobile_state);
	});


	
}); /*end of document ready*/



















