// CLICK EVENTS
$(document).ready(function() {
	// link-ify non anchor elements
	$('.linkify[data-href]').on('click', function(e) {
		window.location.href = $(e.target).closest('.linkify').data('href');
	});
	
	// manificent popup
	$('.mfp-map-btn').magnificPopup({ type:'iframe' });
	
	// smooth page scrolling: https://codepen.io/chriscoyier/pen/dpBMVP (per Filipp)
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		if(typeof this.pathname != "undefined") {
			if(
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			){
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if(target.length){
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, function() {
							var $target = $(target);
							$target.focus();
							if($target.is(":focus")){
								return false;
							} else {
								$target.attr('tabindex', '-1');
								$target.focus();
							};
					});
				}
			}
		}
	});
});

// BOOTSTRAP OVERRIDES
$(document).ready(function() {
	$('.main-items>li>a.dropdown-toggle').click(function(e) {
		if(window.innerWidth >= 1080){
			window.location.href = $(this).attr('href');
			return false;
		}
	});
});

$(document).ready(function() {
	var $owl, $prev, $next, $progress, $bar, $more, $moreLink, isPause, isMediaOpen, tick, percentTime;
	
	$owl = $('#feature-carousel');
	
	//Init the carousel
	$owl.owlCarousel({
		// slideSpeed: 500,
		// , paginationSpeed: 500
		singleItem: true
		, afterInit: initOwl
		, afterMove: moved
		, startDragging: pauseOnDragging
	}).on('mouseover', function() {
		isPause = true;
	}).on('mouseout', function() {
		isPause = false;
	});
	
	function initOwl(elem) {
		// create next
		$('<div>', {
			id: 'feature-carousel-next'
		}).click(function() {
			$owl.trigger('owl.next');
		}).prependTo($owl);
		// create prev
		$('<div>', {
			id: 'feature-carousel-prev'
		}).click(function() {
			$owl.trigger('owl.prev');
		}).prependTo($owl);
		
		// create progress+bar
		$bar = $('<div>', {
			id: 'feature-carousel-progress-bar'
		});
		$progress = $('<div>', {
			id: 'feature-carousel-progress'
		}).append($bar).prependTo($owl);
		
		// create more on page content btn
		$moreLink = $('<a>', {
			class: 'more-on-page-btn'
		}).append($('<span>', {
			class: 'icon'
		})).append($('<span>', {
			class: 'scroll-down'
			, text: 'Scroll Down'
		})).append($('<span>', {
			class: 'learn-more'
			, text: 'Learn More'
		})).on('click', function(e) {
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
		$more = $('<div>', {
			id: 'feature-more-on-page'
		}).append($moreLink).prependTo($owl);
		
		// pause when magnificPopup is open
		isMediaOpen = false;
		$('.mfp-video-btn').on('mfpOpen', function(e) {
			// $.magnificPopup.instance
			isMediaOpen = true;
		}).on('mfpClose', function(e) {
			isMediaOpen = false;
		});
		
		// start counting
		start();
	}

	function start() {
		//reset timer
		percentTime = 0;
		isPause = false;
		//run interval every 0.01 second
		tick = setInterval(interval, 10);
	}
	
	function interval() {
		var time = 7;
		
		if(isPause === false && isMediaOpen === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+'%'
			});
			if(percentTime >= 100){
				//slide to next item
				$owl.trigger('owl.next');
			}
		}
	}

	function pauseOnDragging(){
		isPause = true;
	}

	// moved callback
	function moved(){
		clearTimeout(tick);
		start();
	}
});

// TEXT BLOCKS: Panel Slider
// TODO: dragItems doesn't complete if you have inspect open and drag offscreen, not sure if this is an issue/correctable
// TODO: prevent click on drag
(function($, window, document, undefined){
	// console.group('{panelsSlider}');
	
	$.fn.panelsSlider = function(options) {
		// console.group('$.fn.panelsSlider');
		
		options = $.extend( {}, $.fn.panelsSlider.options, options );
		// console.log('options', options);
		
		// console.log('this', this);
		
		this.each(function() {
			init.call(this, options);
		});
		
		// console.groupEnd();
		
		return this;
	};
	
	$.fn.panelsSlider.options = {
		key: 'value'
		// , myMethod: function ( elem, param ) {}
	};
	
	function init(options) {
		// console.group('panelsSlider.init(options)');
		// console.log('options', options);
		
		var $slider, $items, $nextBtn, $prevBtn;
		
		var enableDrag = false;
		var itemIndex = 0;
		var startOffset = 0;
		var startPos = 0;
		var isMouseDown = false;
		
		// console.log('this', this);
		
		$slider = $(this);
		$items = $slider.find('.panels-slider-items');
		$nextBtn = $slider.find('.panels-slider-next');
		$prevBtn = $slider.find('.panels-slider-prev');
		
		$items.on('mouseenter', itemsMouseEnter).on('mouseleave', itemsMouseLeave);
		$nextBtn.on('click', nextBtnClick);
		$prevBtn.on('click', prevBtnClick);
		
		window.addEventListener('resize', throttle(windowResize, 250));
		
		// console.log('$slider', $slider);
		// console.log('$items', $items);
		// console.log('$nextBtn', $nextBtn);
		// console.log('$prevBtn', $prevBtn);
		
		function goTo(targetIndex) {
			// console.group('%cpanelsSlider.goTo(targetIndex)', 'background-color: black; color: white; padding: 3px 5px; border-left: 3px solid orange;');
			// console.info('%ctargetIndex ', 'color: blue;', targetIndex);
			
			// console.log('$slider', $slider);
			// console.log('itemIndex ' + itemIndex);
			
			var currentPos = itemsCurrentOffset();
			// console.log('currentPos', currentPos);
			
			var maxIndex = ($items.children().length) ? $items.children().length - 1 : 0;
			// console.log('maxIndex', maxIndex);
			
			if(targetIndex < 0 || maxIndex <= 0){
				targetIndex = 0;
				// console.log('[RESET] targetIndex', targetIndex);
			} else if(targetIndex > maxIndex){
				targetIndex = maxIndex;
				// console.log('[RESET] targetIndex', targetIndex);
			}
			
			var containerWidth = $slider.width();
			var itemWidth = $items.children().first().outerWidth();
			var totalWidth = itemWidth * $items.children().length;
			var targetPos = targetIndex * itemWidth;
			var maxPos = (totalWidth > containerWidth) ? totalWidth - containerWidth : 0;
			
			// console.log('containerWidth', containerWidth);
			// console.log('itemWidth', itemWidth);
			// console.log('totalWidth', totalWidth);
			// console.log('targetPos', targetPos);
			// console.log('maxPos', maxPos);
			
			if(targetIndex != itemIndex){
				itemIndex = targetIndex;
				$slider.data('index', targetIndex).attr('data-index', targetIndex);
				// console.log('[SET] itemIndex', itemIndex);
			}
			
			if(targetPos > maxPos){
				targetPos = maxPos;
				// console.log('[RESET] targetPos', targetPos);
			}
			
			$items.css('transform', 'translate3d(-' + targetPos + 'px, 0px, 0px)');
			// console.log('[SET] transform', -targetPos);
			
			// console.groupEnd();
		}
		
		function goToNext() {
			// console.group('%cpanelsSlider.goToNext()', 'background-color: black; color: white; padding: 3px 5px; border-left: 3px solid orange;');
			
			var containerWidth = $slider.width();
			var itemsCount = $items.children().length;
			var itemWidth = $items.children().first().outerWidth();
			var totalWidth = itemWidth * itemsCount;
			var maxOffset = (totalWidth > containerWidth) ? totalWidth - containerWidth : 0;
			
			// console.log('containerWidth', containerWidth);
			// console.log('itemWidth', itemWidth);
			// console.log('totalWidth', totalWidth);
			// console.log('maxOffset', maxOffset);
			
			var currentOffset = itemsCurrentOffset();
			// console.log('currentOffset', currentOffset);
			
			var targetOffset = currentOffset + itemWidth;
			// console.log('targetOffset', targetOffset);
			
			if(targetOffset > maxOffset){
				targetOffset = maxOffset;
				// console.log('[LIMIT] targetOffset', targetOffset);
			} else if(targetOffset < 0){
				targetOffset = 0;
				// console.log('[LIMIT] targetOffset', targetOffset);
			}
			
			$items.css('transform', 'translate3d(-' + targetOffset + 'px, 0px, 0px)');
			// console.log('[SET] transform', -targetOffset);
			
			var targetIndex = itemIndex + 1;
			if(targetIndex < 0){
				targetIndex = 0;
			} else if(targetIndex >= itemsCount){
				targetIndex = itemsCount - 1;
			}
			// console.log('targetIndex', targetIndex);
			
			if(itemIndex != targetIndex){
				itemIndex = targetIndex;
				$slider.data('index', targetIndex).attr('data-index', targetIndex);
				// console.log('[SET] itemIndex', itemIndex);
			}
			
			// console.groupEnd();
		}
		
		function goToPrevious() {
			// console.group('%cpanelsSlider.goToPrevious()', 'background-color: black; color: white; padding: 3px 5px; border-left: 3px solid orange;');
			
			var containerWidth = $slider.width();
			var itemsCount = $items.children().length;
			var itemWidth = $items.children().first().outerWidth();
			var totalWidth = itemWidth * itemsCount;
			var maxOffset = (totalWidth > containerWidth) ? totalWidth - containerWidth : 0;
			
			// console.log('containerWidth', containerWidth);
			// console.log('itemWidth', itemWidth);
			// console.log('totalWidth', totalWidth);
			// console.log('maxOffset', maxOffset);
			
			var currentOffset = itemsCurrentOffset();
			// console.log('currentOffset', currentOffset);
			
			var targetOffset = currentOffset - itemWidth;
			// console.log('targetOffset', targetOffset);
			
			if(targetOffset > maxOffset){
				targetOffset = maxOffset;
				// console.log('[LIMIT] targetOffset', targetOffset);
			} else if(targetOffset < 0){
				targetOffset = 0;
				// console.log('[LIMIT] targetOffset', targetOffset);
			}
			
			$items.css('transform', 'translate3d(-' + targetOffset + 'px, 0px, 0px)');
			// console.log('[SET] transform', -targetOffset);
			
			var targetIndex = itemIndex - 1;
			if(targetIndex < 0){
				targetIndex = 0;
			} else if(targetIndex >= itemsCount){
				targetIndex = itemsCount - 1;
			}
			// console.log('targetIndex', targetIndex);
			
			if(itemIndex != targetIndex){
				itemIndex = targetIndex;
				$slider.data('index', targetIndex).attr('data-index', targetIndex);
				// console.log('[SET] itemIndex', itemIndex);
			}
			
			// console.groupEnd();
		}
		
		function itemsCurrentOffset() {
			return Math.abs($items.css('transform').split('(')[1].split(')')[0].split(',')[4]);
		}
		
		function nextBtnClick() {
			// console.group('panelsSlider.nextBtnClick()');
			
			goToNext();
			
			// console.groupEnd();
		}
		
		function prevBtnClick() {
			// console.group('panelsSlider.prevBtnClick()');
			
			goToPrevious();
			
			// console.groupEnd();
		}
		
		function dragItems(e) {
			if(enableDrag && isMouseDown){
				// console.group('panelsSlider.dragItems()');
				
				// console.log('event', event);
				// console.log('e', e);
				// e.preventDefault();
				
				// console.log('startPos', startPos);
				// console.log('startOffset', startOffset);
				
				var delta = startPos - e.pageX;
				var moveTo = 0;
				var maxWidth = $items.width() - $slider.width();
				
				// console.log('delta', delta);
				// console.log('maxWidth', maxWidth);
				
				moveTo = startOffset - delta;
				// console.log('moveTo', moveTo);
				
				if(moveTo > 0){
					moveTo = 0;
				} else if(moveTo < -maxWidth){
					moveTo = -maxWidth;
				}
				
				$items.css('transform', 'translate3d(' + moveTo + 'px, 0px, 0px)');
				// console.log('transform', $items.css('transform'));
				
				// console.groupEnd();
			}
		}
		
		function itemsMouseEnter() {
			// console.group('panelsSlider.itemsMouseEnter()');
			
			enableDrag = true;
			
			$items.on('mousemove', dragItems);
			$(document).on('mousedown', itemsMouseDown).on('mouseup', itemsMouseUp);
			
			// console.groupEnd();
		}
		
		function itemsMouseLeave() {
			// console.group('panelsSlider.itemsMouseLeave()');
			
			enableDrag = false;
			isMouseDown = false;
			
			$items.off('mousemove', dragItems);
			$(document).off('mousedown', itemsMouseDown).off('mouseup', itemsMouseUp);
			
			// console.groupEnd();
		}
		
		function itemsMouseDown(e) {
			event.preventDefault();
			
			isMouseDown = true;
			startPos = e.pageX;
			startOffset = $items.position().left;
			
			// console.group('mouseDOWN');
			// 
			// console.log('startPos', startPos);
			// console.log('transform', $items.css('transform'));
			// console.log('position.left', $items.position().left);
			// 
			// console.groupEnd();
		}
		
		function itemsMouseUp(e) {
			// console.group('mouseUP');
			
			isMouseDown = false;
			
			// $('window').css('cursor', 'auto');
			
			var containerWidth = $slider.width();
			var itemWidth = $items.children().first().width();
			var totalWidth = itemWidth * $items.children().length;
			var maxPos = (totalWidth > containerWidth) ? totalWidth - containerWidth : 0;
			
			// console.log('containerWidth', containerWidth);
			// console.log('itemWidth', itemWidth);
			// console.log('totalWidth', totalWidth);
			// console.log('maxPos', maxPos);
			
			var scrollPos = $items.position().left;
			// console.log('scrollPos', scrollPos);
			
			var scrollNum = (-scrollPos / itemWidth).toFixed(0);
			// console.log('scrollNum', scrollNum);
			
			goTo(scrollNum);
			
			// console.groupEnd();
		}
		
		function windowResize() {
			// console.group('panelsSlider.windowResize()');
			
			goTo(itemIndex);
			
			// console.groupEnd();
		}
		
		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					timeout = null;
					if(!immediate) func.apply(context, args);
				}, wait);
				if(immediate && !timeout) func.apply(context, args);
			};
		};
		
		function throttle(fn, threshhold, scope) {
			threshhold || (threshhold = 250);
			var last, deferTimer;
			return function () {
				var context = scope || this;
				
				var now = +new Date,
				args = arguments;
				if(last && now < last + threshhold) {
					// hold on to it
					clearTimeout(deferTimer);
					deferTimer = setTimeout(function () {
						last = now;
						fn.apply(context, args);
					}, threshhold);
				} else {
					last = now;
					fn.apply(context, args);
				}
			};
		};
		
		// console.groupEnd('panelsSlider.init()');
	}

	//Scroll function for sticky navs
	jQuery(function() {
		var changeClass = _.throttle(function(e) {
			var thisScroll=$(this).scrollTop();
			var notPast= 70;
			
			//if(!disableHeader) { }
			if (thisScroll > notPast) {
				$('body').addClass("floating-header");
			} else {
				$('body').removeClass("floating-header");
			}
		}, 100);
		$(window).on("scroll", changeClass);
		changeClass();
	});
	// console.groupEnd();
})(jQuery, window, document);
