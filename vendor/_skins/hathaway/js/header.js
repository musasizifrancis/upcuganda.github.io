$(document).ready(function() {

	hideHeaderMenu = function() {
		$('#header').removeClass('has-open-menu');
		$('#header .nav-section').removeClass('open');
		$('body').off('click', clickForHeaderMenu);
	};
	
	showHeaderMenu = function() {
		$('#header').addClass('has-open-menu');
		$('#header .nav-section').addClass('open');
		$('body').on('click', clickForHeaderMenu);
	};

	clickForHeaderMenu = function(e) {
		var $container = $('#header .nav-section');
		
		// check if tablet-sized+ and open and if click target is not in container
		if(window.innerWidth >= 768 && $container.is('.open') && !$.contains($container[0], e.target)){
			hideHeaderMenu();
		}
	};

	// toggle menu
	$('#header .items-toggle').on('click', function(e) {
		if($('#header .nav-section').is('.open')){
			hideHeaderMenu();
		} else {
			showHeaderMenu();
		}
	});

	// large/desktop dropdowns on hover
	$('#header .items').on('mouseenter', '>li.dropdown', function(e) {
		var $this = $(this);
		
		if(window.innerWidth >= 1080 && $this.not('.open')){
			$this.find('a.dropdown-toggle').dropdown('toggle');
		}
	}).on('mouseleave', '>li.dropdown', function(e) {
		var $this = $(this);
		
		if(window.innerWidth >= 1080 && $this.is('.open')){
			$this.find('a.dropdown-toggle').dropdown('toggle');
		}
	});

	// close menu if resizing and tablet or larger
	$(window).resize(function() {
		if(window.innerWidth >= 1080 && $('#header .nav-section').is('.open')){
			hideHeaderMenu();
		}
	});
	
});
