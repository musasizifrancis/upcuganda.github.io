window.addEventListener("DOMContentLoaded", function () {
  initImpeachVideo()
  initMobileViewHeight()
  initMobileNav()
  initHasDropDown()
  initAccordion()
  initHoverJs()
  initTabNav()
  initBackgroundVideo()
  initTab()
  //initSubscribePopUp()
  initAlertPopUp()
  initAnchorLink()
  initFancybox()
  initSlickCarousel()
  initMainCalendar()
  initSameHeight()
  initSubscribePopUpImpeach()
  initSubscribePopUpTimeline()
  setTimeout(function () {
    document.body.classList.add('page-loaded');
  });
  jQuery(".impeachment .back-to-top").click(function() {
    $("body").removeClass("nav-active");
  });
})

function captchaFunction() {
    jQuery('.captcha-holder').addClass('visible');
}
function captchaFunctionPop() {
    jQuery('.captcha-holder-pop').addClass('visible');
}

// align blocks height
function initSameHeight() {
  jQuery('.services-slider.broken').sameHeight({
    elements: '.services-item',
    useMinHeight: true,
    flexible: true,
    multiLine: true,
    biggestHeight: true
  });
}

function initSubscribePopUpImpeach() {
  const holder = jQuery('.impeachment .popup-holder');
  const hiddenClose = jQuery('.impeachment .js-subscribe-opener');

  setTimeout(() => {
    PopupControl('popup','.subscribe-opener',[1,5,10])
    //jQuery('body.impeachment').addClass('popup-active');
  }, 1500);
  
  hiddenClose.on('click', function (event) {
    event.preventDefault();
    jQuery('.impeachment').toggleClass('popup-active');
  });
}

function initSubscribePopUpTimeline() {
  const holder = jQuery('.internal .popup-holder');
  const hiddenClose = jQuery('.internal .js-subscribe-opener');

  hiddenClose.on('click', function (event) {
    event.preventDefault();
    jQuery('body.internal').toggleClass('popup-active');
  });
}

// Cookie and Popup Control
function createCookie(name,value,days) {
  var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    } 
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// JS Popup port
function PopupControl(cookieName, popupLink, integerArray){
  if($(popupLink).length>0){
    if(readCookie(cookieName + '-session') != 'true' && readCookie('nopop') != 'true'){
      var visitCount = parseInt(readCookie(cookieName), 10);
      if(isNaN(visitCount)){
        visitCount = 1; }
      for (index = 0; index < integerArray.length; index++){
        if(integerArray[index] == visitCount){
          setTimeout(function(){ $(popupLink).click(); }, 3000); }
      }
      createCookie(cookieName + '-session', 'true');
      createCookie(cookieName, visitCount + 1, 365);
    }
  }
}


jQuery(function () {
  var countUpStart = false; 
  var $win = $(window);
  $win.scroll(function () {

  if ($('.statistics-bar').length){
    var elementTop = $('.statistics-bar').offset().top;
    var elementHeight = $('.statistics-bar').outerHeight();
    var windowHeight = $(window).height();
    var windowScroll = $(this).scrollTop();
  }
 

  // Accessibility JS for count up statstic
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log("Count up animation disabled");
  }
  else if (windowScroll > (elementTop + elementHeight - windowHeight) && (!countUpStart)){
    initCountUp();
    countUpStart = true;
  }

  });
});

function initCountUp () {
  const options = {
    duration: 6
  }

  var stat1 = jQuery('#target1').html();
  var stat2 = jQuery('#target2').html();
  var stat3 = jQuery('#target3').html();
  var stat4 = jQuery('#target4').html();

  var countUp1 = new CountUp('target1', stat1, options);
  var countUp2 = new CountUp('target2', stat2, options);
  var countUp3 = new CountUp('target3', stat3, options);
  var countUp4 = new CountUp('target4', stat4, options);
  countUp1.start();
  countUp2.start();
  countUp3.start();
  countUp4.start();
}

//  calendar functions and init
function getEventsAndRefreshDatepicker(year, month, dpInst){

  $.getJSON('../ajax-events.aspx', 
    {
      month: month,
      year: year
    },
    function(jsonData){
      dates = jsonData; 
      //console.log('got events for ' + month + '/' + year);
      // for no apparent reason,
      // $(dpInst).datepicker('refresh'); does not work.
      $('#main-calendar').datepicker('refresh');
      // re-hover the tooltips
    }
  );
}

function pad(n, width, z) {  
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var dates = {}; 

function initMainCalendar(){  

  //console.log('initialize datepicker jQuery plugin');

  $('#main-calendar').datepicker({

    dateFormat: 'yy-mm-dd', 
    minDate: '2000-01-01',  
    maxDate: '+3m', 
    onChangeMonthYear: function(year, month, dpInst){ 
      getEventsAndRefreshDatepicker(year, month, dpInst);  
    },
    beforeShowDay: function(date) {

      var dateKey = date.getFullYear() + '-' + pad(date.getMonth() + 1, 2) + '-' + pad(date.getDate(), 2);
 
      if (dates[dateKey]) { 

        var daysEvents = dates[dateKey].events; 

        if (!daysEvents.length) {  
          return [false, '', ''];  
        }

        var text = [];

        for (var evIdx = 0; evIdx < daysEvents.length; evIdx++) {
          text.push(daysEvents[evIdx].name);
        }

        if (daysEvents.length == 1) {
          dates[dateKey].link = '/calendar/eventsingle.aspx?EventID=' + daysEvents[0].id;
        }

        else {
          dates[dateKey].link = '/calendar/?Day=' + dateKey;
        }

        return [true, 'date-match', text.join('<hr/>')];
      }

      if (date.toDateString() == (new Date()).toDateString()){
        return [false, '', 'No Events Today'];
      }
      return [false, '', ''];
    },
    onSelect: function(dateText, dpInst) {
      window.location = dates[dateText].link; 
    }
  });
  getEventsAndRefreshDatepicker(new Date().getFullYear(), new Date().getMonth() + 1, $('#main-calendar'));
}

// Initialize Swiper
function initSlickCarousel() {
  jQuery('.services-slider.main-slide').slick({
    infinite: false,
    slidesToScroll: 1,
    rows: 0,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    prevArrow: '<button class="slick-button slick-prev"><span class="hidden">Slide prev</span></button>',
    nextArrow: '<button class="slick-button slick-next"><span class="hidden">Slide next</span></button>',
    slidesToShow: 4,
    draggable: false,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        rows: 2,
      }
    }, {
      breakpoint: 768,
      settings: {
        rows: 4,
        slidesToScroll: 1,
        slidesToShow: 1,
      }
    }]
  });

  jQuery('.video-block').slick({
    slidesToScroll: 1,
    rows: 0,
    slidesToScroll: 1,
    slidesToShow: 3,
    // adaptiveHeight: true
    arrows: true,
    prevArrow: '<button class="slick-button slick-prev"><span class="hidden">Slide prev</span></button>',
    nextArrow: '<button class="slick-button slick-next"><span class="hidden">Slide next</span></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });

  jQuery('.gallery-slider').slick({
    rows: 0,
    arrows: true,
    prevArrow: '<button class="slick-button slick-prev"><span class="hidden">Slide prev</span></button>',
    nextArrow: '<button class="slick-button slick-next"><span class="hidden">Slide next</span></button>',
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
    infinite: true,
    draggable: true
  });

  //jQuery('.gallery-slider').on('mousedown', function (event, slick, direction) {
  //  jQuery('.gallery-slider [data-fancybox]').off('click')
  //});
  //jQuery('.gallery-slider').on('mouseup', function (event, slick, direction) {
  //  jQuery('.gallery-slider [data-fancybox]').on('click')
  //});
}

// lightbox init
function initFancybox() {
  jQuery('a.lightbox, [data-fancybox]').fancybox({
    parentEl: 'body',
    hash: false,
    backFocus: false,
    touch: true,
    margin: [0, 0],
    thumbs : {
      autoStart : true,
    },
    slideShow : {
        autoStart : false,
        speed     : 3000,
    }
  });
}

// AnchorLink init
function initAnchorLink() {
  new SmoothScroll({
    anchorLinks: '.back-to-top',
    extraOffset: 0,
    wheelBehavior: 'none'
  });
}


function initAlertPopUp() {
  const alertHolederOpenClass = 'alert-open';
  const alertHolder = jQuery('.alert-wrapper');
  const alertCose = alertHolder.find('.alert-close');
  setTimeout(function () {
    jQuery('body').addClass(alertHolederOpenClass);
  }, 2000);
  
  alertCose.on('click', function (event) {
    event.preventDefault();
    if (jQuery('body').hasClass(alertHolederOpenClass)) {
      jQuery('body').removeClass(alertHolederOpenClass);
      console.log(111)
    } else {
      jQuery('body').addClass(alertHolederOpenClass);
      console.log(222)
    }
  });
}

// content tabs init
function initTab() {
  var tablists = document.querySelectorAll('[role=tablist].manual');
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
}

// background video init
function initBackgroundVideo () {
  const holder = jQuery('.bg-video-holder');
  const classActive = 'video-active';
  let isPlay = false;

  if (!holder) return;

  const video = holder.find('.bg-video')[0];
  const btnPlay = holder.find('.js-btn-play');

  function eventListener (e) {
    e.preventDefault();
    if (isPlay) {
      video.pause();
      isPlay = false;
    } else {
      holder.addClass(classActive);
      video.play();
      isPlay = true;
    }
  }

  btnPlay.on('click', eventListener);

  if (video) {
      video.onended = function (e) {
      holder.removeClass(classActive);
      isPlay = false;
    };
  }
 

  jQuery('.bg-video').backgroundVideo({
    activeClass: 'video-active'
  });
}

// background video init
function initImpeachVideo () { 
  jQuery('.bg-impeach').backgroundVideo({
    activeClass: 'video-active'
  });
}

function initTabNav() {
  jQuery(".main-nav").tabNav({
    items: "li",
    hoverClass: 'hover-tab'
  });
}

function initHoverJs() {
  var holder = document.querySelector('.main-nav')
  var hoverJs = new HoverJs(holder)
  var responsiveHelper = window.ResponsiveHelper;
  responsiveHelper.addRange({
    "1024..": {
      on: function on() {
        hoverJs.init();
      },
      off: function off() {
        hoverJs.destroy();
      }
    }
  });
}

function initAccordion() {
  var responsiveHelper = window.ResponsiveHelper;
  responsiveHelper.addRange({
    '..1023': {
      on: function () {
        jQuery(".main-nav").slideAccordion({
          opener: ".has-drop-down-a",
          slider: ">.drop",
          animSpeed: 300,
          collapsible: true,
          allowClickWhenExpanded: true,
          activeClass: "active-item"
        });

        jQuery(".acc-content").slideAccordion({
          opener: ".acc-opener",
          slider: ".acc-slide",
          animSpeed: 300,
          collapsible: true,
          activeClass: "active"
        });
      },
      off: function () {
        jQuery(".main-nav").slideAccordion('destroy');
        jQuery(".acc-content").slideAccordion('destroy');
      }
    }
  });
}

function initHasDropDown() {
  var menuItems = document.querySelectorAll(".main-nav")[0];
  var hasDropDown = new HasDropDown(menuItems);
  hasDropDown.init();
}

function initMobileViewHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
  window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  });
}

function initMobileNav() {
  var mobileNavHolder = jQuery('body');
  mobileNavHolder.mobileNav({
    menuActiveClass: 'nav-active',
    menuOpener: '.nav-opener, .nav-close',
    hideOnClickOutside: true,
    menuDrop: '.main-nav-drop'
  });

  var searchHolder = jQuery('.search-form');
  searchHolder.mobileNav({
    menuActiveClass: 'search-active',
    menuOpener: '.search-opener',
    hideOnClickOutside: true,
    menuDrop: '.search-drop'
  });
}


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype ?
        "symbol" :
        typeof obj;
    };
  }
  return _typeof(obj);
}

if (window.NodeList && !window.NodeList.prototype.forEach) {
  window.NodeList.prototype.forEach = Array.prototype.forEach
}

(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector
  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null
    if (this.matches(selector)) return this
    if (!this.parentElement) {
      return null
    } else return this.parentElement.closest(selector)
  }
}(window.Element.prototype))

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {} else {
    return left instanceof right;
  }
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}


/*
 * Simple Mobile Navigation
 */
;
(function ($) {
  function MobileNav(options) {
    this.options = $.extend({
      container: null,
      hideOnClickOutside: false,
      menuActiveClass: 'nav-active',
      menuOpener: '.nav-opener',
      menuDrop: '.nav-drop',
      toggleEvent: 'click',
      outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
    }, options);
    this.initStructure();
    this.attachEvents();
  }
  MobileNav.prototype = {
    initStructure: function () {
      this.page = $('html');
      this.container = $(this.options.container);
      this.opener = this.container.find(this.options.menuOpener);
      this.drop = this.container.find(this.options.menuDrop);
    },
    attachEvents: function () {
      var self = this;

      if (activateResizeHandler) {
        activateResizeHandler();
        activateResizeHandler = null;
      }

      this.outsideClickHandler = function (e) {
        if (self.isOpened()) {
          var target = $(e.target);
          if (!target.closest(self.opener).length && !target.closest(self.drop).length) {
            self.hide();
          }
        }
      };

      this.openerClickHandler = function (e) {
        e.preventDefault();
        self.toggle();
      };

      this.opener.on(this.options.toggleEvent, this.openerClickHandler);
    },
    isOpened: function () {
      return this.container.hasClass(this.options.menuActiveClass);
    },
    show: function () {
      this.container.addClass(this.options.menuActiveClass);
      this.makeCallback('onShow', this);
      if (this.options.hideOnClickOutside) {
        this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
      }
    },
    hide: function () {
      this.container.removeClass(this.options.menuActiveClass);
      this.makeCallback('onHide', this);
      if (this.options.hideOnClickOutside) {
        this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
      }
    },
    toggle: function () {
      if (this.isOpened()) {
        this.hide();
      } else {
        this.show();
      }
    },
    makeCallback: function (name) {
      if (typeof this.options[name] === "function") {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    },
    destroy: function () {
      this.container.removeClass(this.options.menuActiveClass);
      this.opener.off(this.options.toggleEvent, this.clickHandler);
      this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
    }
  };

  var activateResizeHandler = function () {
    var win = $(window),
      doc = $('html'),
      resizeClass = 'resize-active',
      flag, timer;
    var removeClassHandler = function () {
      flag = false;
      doc.removeClass(resizeClass);
    };
    var resizeHandler = function () {
      if (!flag) {
        flag = true;
        doc.addClass(resizeClass);
      }
      clearTimeout(timer);
      timer = setTimeout(removeClassHandler, 500);
    };
    win.on('resize orientationchange', resizeHandler);
  };

  $.fn.mobileNav = function (opt) {
    var args = Array.prototype.slice.call(arguments);
    var method = args[0];

    return this.each(function () {
      var $container = jQuery(this);
      var instance = $container.data('MobileNav');

      if (typeof opt === 'object' || typeof opt === 'undefined') {
        $container.data('MobileNav', new MobileNav($.extend({
          container: this
        }, opt)));
      } else if (typeof method === 'string' && instance) {
        if (typeof instance[method] === 'function') {
          args.shift();
          instance[method].apply(instance, args);
        }
      }
    });
  };
}(jQuery));

var HasDropDown =
  /*#__PURE__*/
  (function () {
    function HasDropDown(holder, options) {

      var dafaultOptions = {
        items: "li",
        drop: "ul",
        link: "a",
        dropClass: "has-drop-down",
        linkClass: "has-drop-down-a"
      };
      var optionsValid =
        _typeof(options) === "object" || typeof options === "undefined";
      this.options = optionsValid ?
        _objectSpread({}, dafaultOptions, {}, options) :
        dafaultOptions;
      this.holder = holder;
      this.items = holder.querySelectorAll(this.options.items);
    }

    _createClass(HasDropDown, [{
        key: "init",
        value: function init() {
          if (!this.items.length) return;
          this.sort();
          this.makeCallBack("onInit", this);
        }
      },
      {
        key: "sort",
        value: function sort() {
          var _this = this;

          this.items.forEach(function (element) {
            var drop = element.querySelector(_this.options.drop);
            var link = element.querySelector(_this.options.link);

            if (drop) {
              element.classList.add(_this.options.dropClass);
              if (link) link.classList.add(_this.options.linkClass);
            }
          });
        }
      },
      {
        key: "makeCallBack",
        value: function makeCallBack(functionName) {
          if (typeof this.options[functionName] === "function") {
            for (
              var _len = arguments.length,
                environs = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1; _key < _len; _key++
            ) {
              environs[_key - 1] = arguments[_key];
            }

            this.options[functionName](environs.length ? environs : this);
          }
        }
      }
    ]);

    return HasDropDown;
  })();


/*
 * jQuery Accordion plugin new
 */
;
(function (root, factory) {

  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.SlideAccordion = factory(jQuery);
  }
}(window, function ($) {

  'use strict';
  var accHiddenClass = 'js-acc-hidden';

  function SlideAccordion(options) {
    this.options = $.extend(true, {
      allowClickWhenExpanded: false,
      activeClass: 'active',
      opener: '.opener',
      slider: '.slide',
      animSpeed: 300,
      collapsible: true,
      event: 'click',
      scrollToActiveItem: {
        enable: false,
        breakpoint: 767, // max-width
        animSpeed: 600,
        extraOffset: null
      }
    }, options);
    this.init();
  }

  SlideAccordion.prototype = {
    init: function () {
      if (this.options.holder) {
        this.findElements();
        this.setStateOnInit();
        this.attachEvents();
        this.makeCallback('onInit');
      }
    },

    findElements: function () {
      this.$holder = $(this.options.holder).data('SlideAccordion', this);
      this.$items = this.$holder.find(':has(' + this.options.slider + ')');
    },

    setStateOnInit: function () {
      var self = this;

      this.$items.each(function () {
        if (!$(this).hasClass(self.options.activeClass)) {
          $(this).find(self.options.slider).addClass(accHiddenClass);
        }
      });
    },

    attachEvents: function () {
      var self = this;

      this.accordionToggle = function (e) {
        var $item = jQuery(this).closest(self.$items);
        var $actiItem = self.getActiveItem($item);

        if (!self.options.allowClickWhenExpanded || !$item.hasClass(self.options.activeClass)) {
          e.preventDefault();
          self.toggle($item, $actiItem);
        }
      };

      this.$items.on(this.options.event, this.options.opener, this.accordionToggle);
    },

    toggle: function ($item, $prevItem) {
      if (!$item.hasClass(this.options.activeClass)) {
        this.show($item);
      } else if (this.options.collapsible) {
        this.hide($item);
      }

      if (!$item.is($prevItem) && $prevItem.length) {
        this.hide($prevItem);
      }

      this.makeCallback('beforeToggle');
    },

    show: function ($item) {
      var $slider = $item.find(this.options.slider);

      $item.addClass(this.options.activeClass);
      $slider.stop().hide().removeClass(accHiddenClass).slideDown({
        duration: this.options.animSpeed,
        complete: function () {
          $slider.removeAttr('style');
          if (
            this.options.scrollToActiveItem.enable &&
            window.innerWidth <= this.options.scrollToActiveItem.breakpoint
          ) {
            this.goToItem($item);
          }
          this.makeCallback('onShow', $item);
        }.bind(this)
      });

      this.makeCallback('beforeShow', $item);
    },

    hide: function ($item) {
      var $slider = $item.find(this.options.slider);

      $item.removeClass(this.options.activeClass);
      $slider.stop().show().slideUp({
        duration: this.options.animSpeed,
        complete: function () {
          $slider.addClass(accHiddenClass);
          $slider.removeAttr('style');
          this.makeCallback('onHide', $item);
        }.bind(this)
      });

      this.makeCallback('beforeHide', $item);
    },

    goToItem: function ($item) {
      var itemOffset = $item.offset().top;

      if (itemOffset < $(window).scrollTop()) {
        // handle extra offset
        if (typeof this.options.scrollToActiveItem.extraOffset === 'number') {
          itemOffset -= this.options.scrollToActiveItem.extraOffset;
        } else if (typeof this.options.scrollToActiveItem.extraOffset === 'function') {
          itemOffset -= this.options.scrollToActiveItem.extraOffset();
        }

        $('body, html').animate({
          scrollTop: itemOffset
        }, this.options.scrollToActiveItem.animSpeed);
      }
    },

    getActiveItem: function ($item) {
      return $item.siblings().filter('.' + this.options.activeClass);
    },

    makeCallback: function (name) {
      if (typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    },

    destroy: function () {
      this.$holder.removeData('SlideAccordion');
      this.$items.off(this.options.event, this.options.opener, this.accordionToggle);
      this.$items.removeClass(this.options.activeClass).each(function (i, item) {
        $(item).find(this.options.slider).removeAttr('style').removeClass(accHiddenClass);
      }.bind(this));
      this.makeCallback('onDestroy');
    }
  };

  $.fn.slideAccordion = function (opt) {
    var args = Array.prototype.slice.call(arguments);
    var method = args[0];

    return this.each(function () {
      var $holder = jQuery(this);
      var instance = $holder.data('SlideAccordion');

      if (typeof opt === 'object' || typeof opt === 'undefined') {
        new SlideAccordion($.extend(true, {
          holder: this
        }, opt));
      } else if (typeof method === 'string' && instance) {
        if (typeof instance[method] === 'function') {
          args.shift();
          instance[method].apply(instance, args);
        }
      }
    });
  };

  (function () {
    var tabStyleSheet = $('<style type="text/css">')[0];
    var tabStyleRule = '.' + accHiddenClass;
    tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important; width: 100% !important;}';
    if (tabStyleSheet.styleSheet) {
      tabStyleSheet.styleSheet.cssText = tabStyleRule;
    } else {
      tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
    }
    $('head').append(tabStyleSheet);
  }());

  return SlideAccordion;
}));

/*
 * Responsive Layout helper
 */
window.ResponsiveHelper = (function ($) {
  // init variables
  var handlers = [];
  var prevWinWidth;
  var win = $(window);
  var nativeMatchMedia = false; // detect match media support

  if (window.matchMedia) {
    if (window.Window && window.matchMedia === Window.prototype.matchMedia) {
      nativeMatchMedia = true;
    } else if (window.matchMedia.toString().indexOf("native") > -1) {
      nativeMatchMedia = true;
    }
  } // prepare resize handler

  function resizeHandler() {
    var winWidth = win.width();

    if (winWidth !== prevWinWidth) {
      prevWinWidth = winWidth; // loop through range groups

      $.each(handlers, function (index, rangeObject) {
        // disable current active area if needed
        $.each(rangeObject.data, function (property, item) {
          if (item.currentActive && !matchRange(item.range[0], item.range[1])) {
            item.currentActive = false;

            if (typeof item.disableCallback === "function") {
              item.disableCallback();
            }
          }
        }); // enable areas that match current width

        $.each(rangeObject.data, function (property, item) {
          if (!item.currentActive && matchRange(item.range[0], item.range[1])) {
            // make callback
            item.currentActive = true;

            if (typeof item.enableCallback === "function") {
              item.enableCallback();
            }
          }
        });
      });
    }
  }

  win.bind("load resize orientationchange", resizeHandler); // test range

  function matchRange(r1, r2) {
    var mediaQueryString = "";

    if (r1 > 0) {
      mediaQueryString += "(min-width: " + r1 + "px)";
    }

    if (r2 < Infinity) {
      mediaQueryString +=
        (mediaQueryString ? " and " : "") + "(max-width: " + r2 + "px)";
    }

    return matchQuery(mediaQueryString, r1, r2);
  } // media query function

  function matchQuery(query, r1, r2) {
    if (window.matchMedia && nativeMatchMedia) {
      return matchMedia(query).matches;
    } else if (window.styleMedia) {
      return styleMedia.matchMedium(query);
    } else if (window.media) {
      return media.matchMedium(query);
    } else {
      return prevWinWidth >= r1 && prevWinWidth <= r2;
    }
  } // range parser

  function parseRange(rangeStr) {
    var rangeData = rangeStr.split("..");
    var x1 = parseInt(rangeData[0], 10) || -Infinity;
    var x2 = parseInt(rangeData[1], 10) || Infinity;
    return [x1, x2].sort(function (a, b) {
      return a - b;
    });
  } // export public functions

  return {
    addRange: function addRange(ranges) {
      // parse data and add items to collection
      var result = {
        data: {}
      };
      $.each(ranges, function (property, data) {
        result.data[property] = {
          range: parseRange(property),
          enableCallback: data.on,
          disableCallback: data.off
        };
      });
      handlers.push(result); // call resizeHandler to recalculate all events

      prevWinWidth = null;
      resizeHandler();
    }
  };
})(jQuery);

var HoverJs =
  /*#__PURE__*/
  (function () {
    function HoverJs(holder, options) {

      var dafaultOptions = {
        dropClass: ".has-drop-down",
        linkClass: ".has-drop-down-a",
        activeClass: "hover-js"
      };
      var optionsValid =
        _typeof(options) === "object" || typeof options === "undefined";
      this.options = optionsValid ?
        _objectSpread({}, dafaultOptions, {}, options) :
        dafaultOptions;
      this.isTouch = !!("ontouchstart" in document.documentElement);
      this.holder = holder;
      this.clickHandler = this.clickHandler.bind(this);
      this.clickOutSideHandker = this.clickOutSideHandker.bind(this);
      this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
      this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    _createClass(HoverJs, [{
        key: "init",
        value: function init() {
          if (!this.holder || !!this.holder.HoverJs) return;
          this.holder.HoverJs = this;
          this.findElements();
          this.isTouch ? this.initTouchEvent() : this.initEvent();
          this.makeCallBack("onInit");
        }
      },
      {
        key: "findElements",
        value: function findElements() {
          this.itemsParent = this.holder.querySelectorAll(
            this.options.dropClass
          );
          this.itemsLink = this.holder.querySelectorAll(
            ""
            .concat(this.options.dropClass, ">")
            .concat(this.options.linkClass)
          );
        }
      },
      {
        key: "initTouchEvent",
        value: function initTouchEvent() {
          var _this2 = this;

          this.itemsLink.forEach(function (element) {
            element.addEventListener("click", _this2.clickHandler);
          });
          document.addEventListener("click", this.clickOutSideHandker);
        }
      },
      {
        key: "initEvent",
        value: function initEvent() {
          var _this3 = this;

          this.itemsParent.forEach(function (element) {
            element.addEventListener("mouseenter", _this3.mouseEnterHandler);
            element.addEventListener("mouseleave", _this3.mouseLeaveHandler);
          });
        }
      },
      {
        key: "mouseEnterHandler",
        value: function mouseEnterHandler(e) {
          this.addHover(e.target);
        }
      },
      {
        key: "mouseLeaveHandler",
        value: function mouseLeaveHandler(e) {
          this.removeHover(e.target);
        }
      },
      {
        key: "clickHandler",
        value: function clickHandler(e) {
          var target = e.target;
          var parent = target.closest(this.options.dropClass);

          if (!parent.classList.contains(this.options.activeClass)) {
            e.preventDefault();
            this.addHover(parent);
            this.removeRestHover(parent);
          }
        }
      },
      {
        key: "clickOutSideHandker",
        value: function clickOutSideHandker(e) {
          if (!e.target.closest(this.options.dropClass)) {
            this.removeRestHover();
          }
        }
      },
      {
        key: "addHover",
        value: function addHover(item) {
          item.classList.add(this.options.activeClass);
        }
      },
      {
        key: "removeHover",
        value: function removeHover(item) {
          item.classList.remove(this.options.activeClass);
        }
      },
      {
        key: "removeRestHover",
        value: function removeRestHover(item) {
          var _this4 = this;

          this.parentArr = item ? [item] : [];
          var itemOrParent = true;
          if (item) this.searchParent(item);
          this.itemsParent.forEach(function (element) {
            if (element.classList.contains(_this4.options.activeClass)) {
              itemOrParent = true;

              _this4.parentArr.forEach(function (item) {
                if (element === item) itemOrParent = false;
              });

              if (itemOrParent) _this4.removeHover(element);
            }
          });
        }
      },
      {
        key: "searchParent",
        value: function searchParent(curentParent) {
          var parent = curentParent.parentElement.closest(
            this.options.dropClass
          );
          if (!parent) return false;
          this.parentArr.push(parent);
          this.searchParent(parent);
        }
      },
      {
        key: "makeCallBack",
        value: function makeCallBack(functionName) {
          if (typeof this.options[functionName] === "function") {
            for (
              var _len2 = arguments.length,
                environs = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1; _key2 < _len2; _key2++
            ) {
              environs[_key2 - 1] = arguments[_key2];
            }

            this.options[functionName](environs.length ? environs : this);
          }
        }
      },
      {
        key: "destroy",
        value: function destroy() {
          var _this5 = this;

          this.removeRestHover();
          this.holder.HoverJs = "";
          this.itemsParent.forEach(function (element) {
            element.removeEventListener("mouseenter", _this5.mouseEnterHandler);
            element.removeEventListener("mouseleave", _this5.mouseLeaveHandler);

            _this5.removeHover(element);
          });
          this.itemsLink.forEach(function (element) {
            element.removeEventListener("click", _this5.clickHandler);
          });
          document.removeEventListener("click", this.clickOutSideHandker);
          this.makeCallBack("onDestroy");
        }
      }
    ]);

    return HoverJs;
  })();

/*
 * Accessible TAB navigation
 */
;
(function ($) {
  var isWindowsPhone = /Windows Phone/.test(navigator.userAgent);
  var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

  $.fn.tabNav = function (opt) {
    var options = $.extend({
      hoverClass: 'hover',
      items: 'li',
      opener: '>a',
      delay: 10
    }, opt);

    if (isWindowsPhone || isTouchDevice) {
      return this;
    }

    return this.each(function () {
      var nav = $(this),
        items = nav.find(options.items);

      items.each(function (index, navItem) {
        var item = $(this),
          navActive, touchNavActive;
        var link = item.find(options.opener),
          timer;

        link.bind('focus', function () {
          navActive = nav.hasClass('js-nav-active');
          touchNavActive = window.TouchNav && TouchNav.isActiveOn(navItem);
          if (!navActive || touchNavActive) {
            initSimpleNav();
          }
          item.trigger(navActive && touchNavActive ? 'itemhover' : 'mouseenter');
        }).bind('blur', function () {
          item.trigger(navActive && touchNavActive ? 'itemleave' : 'mouseleave');
        });

        var initSimpleNav = function () {
          if (!initSimpleNav.done) {
            initSimpleNav.done = true;
            item.hover(function () {
              clearTimeout(timer);
              timer = setTimeout(function () {
                item.addClass(options.hoverClass);
              }, options.delay);
            }, function () {
              clearTimeout(timer);
              timer = setTimeout(function () {
                item.removeClass(options.hoverClass);
              }, options.delay);
            });
          }
        };
      });
    });
  };
}(jQuery));

/*
 * jQuery video background plugin
*/
; (function ($, $win) {
  var BgVideoController = (function () {
    var videos = [];

    return {
      init: function () {
        $win.on('load.bgVideo resize.bgVideo orientationchange.bgVideo', this.resizeHandler.bind(this));
      },

      resizeHandler: function () {
        if (this.isInit) {
          $.each(videos, this.resizeVideo.bind(this));
        }
      },

      buildPoster: function ($video, $holder) {
        $holder.css({
          'background-image': 'url(' + $video.attr('poster') + ')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        });
      },

      resizeVideo: function (i) {
        var item = videos[i];
        var styles = this.getDimensions({
          videoRatio: item.ratio,
          maskWidth: item.$holder.outerWidth(),
          maskHeight: item.$holder.outerHeight()
        });

        item.$video.css({
          width: styles.width,
          height: styles.height,
          marginTop: styles.top,
          marginLeft: styles.left
        });
      },

      getRatio: function ($video) {
        return $video[0].videoWidth / $video[0].videoHeight ||
          $video.attr('width') / $video.attr('height') ||
          $video.width() / $video.height();
      },

      getDimensions: function (data) {
        var ratio = data.videoRatio,
          slideWidth = data.maskWidth,
          slideHeight = slideWidth / ratio;

        if (slideHeight < data.maskHeight) {
          slideHeight = data.maskHeight;
          slideWidth = slideHeight * ratio;
        }
        return {
          width: slideWidth,
          height: slideHeight,
          top: (data.maskHeight - slideHeight) / 2,
          left: (data.maskWidth - slideWidth) / 2
        };
      },

      add: function ($video, options) {
        var $holder = options.videoHolder ? $video.closest(options.videoHolder) : $video.parent();
        var item = {
          $video: $video,
          $holder: $holder,
          options: options
        };

        if ($video.attr('poster')) {
          this.buildPoster($video, $holder);
        }

        if ($video[0].readyState) {
          this.onVideoReady(item);
          if ($video[0].paused) {
            $video[0].play();
          } else {
            $holder.addClass(options.activeClass);
          }
        } else {
          $video.one('loadedmetadata', function () {
            if ($video[0].paused) {
              $video[0].play();
            } else {
              $holder.addClass(options.activeClass);
            }
            this.onVideoReady(item);
          }.bind(this));
        }

        $video.one('play', function () {
          $holder.addClass(options.activeClass);
          this.makeCallback.apply($.extend(true, {}, this, item), ['onPlay']);
        }.bind(this));


        this.makeCallback.apply($.extend(true, {}, this, item), ['onInit']);
        return this;
      },

      onVideoReady: function (item) {
        if (!this.isInit) {
          this.isInit = true;
          this.init();
        }
        videos.push($.extend(item, {
          ratio: this.getRatio(item.$video)
        }));
        this.resizeVideo(videos.length - 1);
      },

      destroy: function ($video) {
        if (!$video) {
          videos = videos.filter(this.destroySingle);
        } else {
          videos = videos.filter(function (item) {
            var removeFlag = item.$video.is($video);

            removeFlag && this.destroySingle(item);

            return !removeFlag;
          }.bind(this));
        }

        if (!videos.length) {
          this.isInit = false;
          $win.off('.bgVideo');
        }
      },

      destroySingle: function (item) {
        item.$video.removeAttr('style').removeData('BackgroundVideo')[0].pause();
        item.$holder.removeClass(item.options.activeClass);
      },

      makeCallback: function (name) {
        if (typeof this.options[name] === 'function') {
          var args = Array.prototype.slice.call(arguments);
          args.shift();
          this.options[name].apply(this, args);
        }
      }
    };
  }());

  $.fn.backgroundVideo = function (opt) {
    var args = Array.prototype.slice.call(arguments);
    var method = args[0];
    var options = $.extend({
      activeClass: 'video-active',
      videoHolder: null
    }, opt);

    return this.each(function () {
      var $video = jQuery(this);
      var instance = $video.data('BackgroundVideo');

      if (typeof opt === 'object' || typeof opt === 'undefined') {
        $video.data('BackgroundVideo', BgVideoController.add($video, options));
      } else if (typeof method === 'string' && instance) {
        if (typeof instance[method] === 'function') {
          args.shift();
          instance[method].apply(instance, args);
        }
      }
    });
  };

  window.BgVideoController = BgVideoController;

  return BgVideoController;
}(jQuery, jQuery(window)));


/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   tabs-manual.js
 *
 *   Desc:   Tablist widget that implements ARIA Authoring Practices
 */

"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var TabsManual = /*#__PURE__*/ function () {
  function TabsManual(groupNode) {
    _classCallCheck(this, TabsManual);

    this.tablistNode = groupNode;
    this.tabs = [];
    this.firstTab = null;
    this.lastTab = null;
    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);
      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }

      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  _createClass(TabsManual, [{
    key: "setSelectedTab",
    value: function setSelectedTab(currentTab) {
      for (var i = 0; i < this.tabs.length; i += 1) {
        var tab = this.tabs[i];

        if (currentTab === tab) {
          tab.setAttribute('aria-selected', 'true');
          tab.removeAttribute('tabindex');
          this.tabpanels[i].classList.remove('is-hidden');
        } else {
          tab.setAttribute('aria-selected', 'false');
          tab.tabIndex = -1;
          this.tabpanels[i].classList.add('is-hidden');
        }
      }
    }
  }, {
    key: "moveFocusToTab",
    value: function moveFocusToTab(currentTab) {
      currentTab.focus();
    }
  }, {
    key: "moveFocusToPreviousTab",
    value: function moveFocusToPreviousTab(currentTab) {
      var index;

      if (currentTab === this.firstTab) {
        this.moveFocusToTab(this.lastTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index - 1]);
      }
    }
  }, {
    key: "moveFocusToNextTab",
    value: function moveFocusToNextTab(currentTab) {
      var index;

      if (currentTab === this.lastTab) {
        this.moveFocusToTab(this.firstTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index + 1]);
      }
    }
    /* EVENT HANDLERS */

  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var tgt = event.currentTarget,
        flag = false;

      switch (event.key) {
        case 'ArrowLeft':
          this.moveFocusToPreviousTab(tgt);
          flag = true;
          break;

        case 'ArrowRight':
          this.moveFocusToNextTab(tgt);
          flag = true;
          break;

        case 'Home':
          this.moveFocusToTab(this.firstTab);
          flag = true;
          break;

        case 'End':
          this.moveFocusToTab(this.lastTab);
          flag = true;
          break;

        default:
          break;
      }

      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    } // Since this example uses buttons for the tabs, the click onr also is activated
    // with the space and enter keys

  }, {
    key: "onClick",
    value: function onClick(event) {
      this.setSelectedTab(event.currentTarget);
    }
  }]);

  return TabsManual;
}();

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */ ) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

/*!
 * SmoothScroll module
 */
;
(function ($, exports) {
  // private variables
  var page,
    win = $(window),
    activeBlock, activeWheelHandler,
    wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll');

  // animation handlers
  function scrollTo(offset, options, callback) {
    // initialize variables
    var scrollBlock;
    if (document.body) {
      if (typeof options === 'number') {
        options = {
          duration: options
        };
      } else {
        options = options || {};
      }
      page = page || $('html, body');
      scrollBlock = options.container || page;
    } else {
      return;
    }

    // treat single number as scrollTop
    if (typeof offset === 'number') {
      offset = {
        top: offset
      };
    }

    // handle mousewheel/trackpad while animation is active
    if (activeBlock && activeWheelHandler) {
      activeBlock.off(wheelEvents, activeWheelHandler);
    }
    if (options.wheelBehavior && options.wheelBehavior !== 'none') {
      activeWheelHandler = function (e) {
        if (options.wheelBehavior === 'stop') {
          scrollBlock.off(wheelEvents, activeWheelHandler);
          scrollBlock.stop();
        } else if (options.wheelBehavior === 'ignore') {
          e.preventDefault();
        }
      };
      activeBlock = scrollBlock.on(wheelEvents, activeWheelHandler);
    }

    // start scrolling animation
    scrollBlock.stop().animate({
      scrollLeft: offset.left,
      scrollTop: offset.top
    }, options.duration, function () {
      if (activeWheelHandler) {
        scrollBlock.off(wheelEvents, activeWheelHandler);
      }
      if ($.isFunction(callback)) {
        callback();
      }
    });
  }

  // smooth scroll contstructor
  function SmoothScroll(options) {
    this.options = $.extend({
      anchorLinks: 'a[href^="#"]', // selector or jQuery object
      container: null, // specify container for scrolling (default - whole page)
      extraOffset: null, // function or fixed number
      activeClasses: null, // null, "link", "parent"
      easing: 'swing', // easing of scrolling
      animMode: 'duration', // or "speed" mode
      animDuration: 800, // total duration for scroll (any distance)
      animSpeed: 1500, // pixels per second
      anchorActiveClass: 'anchor-active',
      sectionActiveClass: 'section-active',
      wheelBehavior: 'stop', // "stop", "ignore" or "none"
      useNativeAnchorScrolling: false // do not handle click in devices with native smooth scrolling
    }, options);
    this.init();
  }
  SmoothScroll.prototype = {
    init: function () {
      this.initStructure();
      this.attachEvents();
      this.isInit = true;
    },
    initStructure: function () {
      var self = this;

      this.container = this.options.container ? $(this.options.container) : $('html,body');
      this.scrollContainer = this.options.container ? this.container : win;
      this.anchorLinks = jQuery(this.options.anchorLinks).filter(function () {
        return jQuery(self.getAnchorTarget(jQuery(this))).length;
      });
    },
    getId: function (str) {
      try {
        return '#' + str.replace(/^.*?(#|$)/, '');
      } catch (err) {
        return null;
      }
    },
    getAnchorTarget: function (link) {
      // get target block from link href
      var targetId = this.getId($(link).attr('href'));
      return $(targetId.length > 1 ? targetId : 'html');
    },
    getTargetOffset: function (block) {
      // get target offset
      var blockOffset = block.offset().top;
      if (this.options.container) {
        blockOffset -= this.container.offset().top - this.container.prop('scrollTop');
      }

      // handle extra offset
      if (typeof this.options.extraOffset === 'number') {
        blockOffset -= this.options.extraOffset;
      } else if (typeof this.options.extraOffset === 'function') {
        blockOffset -= this.options.extraOffset(block);
      }
      return {
        top: blockOffset
      };
    },
    attachEvents: function () {
      var self = this;

      // handle active classes
      if (this.options.activeClasses && this.anchorLinks.length) {
        // cache structure
        this.anchorData = [];

        for (var i = 0; i < this.anchorLinks.length; i++) {
          var link = jQuery(this.anchorLinks[i]),
            targetBlock = self.getAnchorTarget(link),
            anchorDataItem = null;

          $.each(self.anchorData, function (index, item) {
            if (item.block[0] === targetBlock[0]) {
              anchorDataItem = item;
            }
          });

          if (anchorDataItem) {
            anchorDataItem.link = anchorDataItem.link.add(link);
          } else {
            self.anchorData.push({
              link: link,
              block: targetBlock
            });
          }
        };

        // add additional event handlers
        this.resizeHandler = function () {
          if (!self.isInit) return;
          self.recalculateOffsets();
        };
        this.scrollHandler = function () {
          self.refreshActiveClass();
        };

        this.recalculateOffsets();
        this.scrollContainer.on('scroll', this.scrollHandler);
        win.on('resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll', this.resizeHandler);
      }

      // handle click event
      this.clickHandler = function (e) {
        self.onClick(e);
      };
      if (!this.options.useNativeAnchorScrolling) {
        this.anchorLinks.on('click', this.clickHandler);
      }
    },
    recalculateOffsets: function () {
      var self = this;
      $.each(this.anchorData, function (index, data) {
        data.offset = self.getTargetOffset(data.block);
        data.height = data.block.outerHeight();
      });
      this.refreshActiveClass();
    },
    toggleActiveClass: function (anchor, block, state) {
      anchor.toggleClass(this.options.anchorActiveClass, state);
      block.toggleClass(this.options.sectionActiveClass, state);
    },
    refreshActiveClass: function () {
      var self = this,
        foundFlag = false,
        containerHeight = this.container.prop('scrollHeight'),
        viewPortHeight = this.scrollContainer.height(),
        scrollTop = this.options.container ? this.container.prop('scrollTop') : win.scrollTop();

      // user function instead of default handler
      if (this.options.customScrollHandler) {
        this.options.customScrollHandler.call(this, scrollTop, this.anchorData);
        return;
      }

      // sort anchor data by offsets
      this.anchorData.sort(function (a, b) {
        return a.offset.top - b.offset.top;
      });

      // default active class handler
      $.each(this.anchorData, function (index) {
        var reverseIndex = self.anchorData.length - index - 1,
          data = self.anchorData[reverseIndex],
          anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

        if (scrollTop >= containerHeight - viewPortHeight) {
          // handle last section
          if (reverseIndex === self.anchorData.length - 1) {
            self.toggleActiveClass(anchorElement, data.block, true);
          } else {
            self.toggleActiveClass(anchorElement, data.block, false);
          }
        } else {
          // handle other sections
          if (!foundFlag && (scrollTop >= data.offset.top - 1 || reverseIndex === 0)) {
            foundFlag = true;
            self.toggleActiveClass(anchorElement, data.block, true);
          } else {
            self.toggleActiveClass(anchorElement, data.block, false);
          }
        }
      });
    },
    calculateScrollDuration: function (offset) {
      var distance;
      if (this.options.animMode === 'speed') {
        distance = Math.abs(this.scrollContainer.scrollTop() - offset.top);
        return (distance / this.options.animSpeed) * 1000;
      } else {
        return this.options.animDuration;
      }
    },
    onClick: function (e) {
      var targetBlock = this.getAnchorTarget(e.currentTarget),
        targetOffset = this.getTargetOffset(targetBlock);

      e.preventDefault();
      scrollTo(targetOffset, {
        container: this.container,
        wheelBehavior: this.options.wheelBehavior,
        duration: this.calculateScrollDuration(targetOffset)
      });
      this.makeCallback('onBeforeScroll', e.currentTarget);
    },
    makeCallback: function (name) {
      if (typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    },
    destroy: function () {
      var self = this;

      this.isInit = false;
      if (this.options.activeClasses) {
        win.off('resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll', this.resizeHandler);
        this.scrollContainer.off('scroll', this.scrollHandler);
        $.each(this.anchorData, function (index) {
          var reverseIndex = self.anchorData.length - index - 1,
            data = self.anchorData[reverseIndex],
            anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

          self.toggleActiveClass(anchorElement, data.block, false);
        });
      }
      this.anchorLinks.off('click', this.clickHandler);
    }
  };

  // public API
  $.extend(SmoothScroll, {
    scrollTo: function (blockOrOffset, durationOrOptions, callback) {
      scrollTo(blockOrOffset, durationOrOptions, callback);
    }
  });

  // export module
  exports.SmoothScroll = SmoothScroll;
}(jQuery, this));



/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   tabs-manual.js
 *
 *   Desc:   Tablist widget that implements ARIA Authoring Practices
 */

"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var TabsManual = /*#__PURE__*/ function () {
  function TabsManual(groupNode) {
    _classCallCheck(this, TabsManual);

    this.tablistNode = groupNode;
    this.tabs = [];
    this.firstTab = null;
    this.lastTab = null;
    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);
      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }

      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  _createClass(TabsManual, [{
    key: "setSelectedTab",
    value: function setSelectedTab(currentTab) {
      for (var i = 0; i < this.tabs.length; i += 1) {
        var tab = this.tabs[i];

        if (currentTab === tab) {
          tab.setAttribute('aria-selected', 'true');
          tab.removeAttribute('tabindex');
          this.tabpanels[i].classList.remove('is-hidden');
        } else {
          tab.setAttribute('aria-selected', 'false');
          tab.tabIndex = -1;
          this.tabpanels[i].classList.add('is-hidden');
        }
      }
    }
  }, {
    key: "moveFocusToTab",
    value: function moveFocusToTab(currentTab) {
      currentTab.focus();
    }
  }, {
    key: "moveFocusToPreviousTab",
    value: function moveFocusToPreviousTab(currentTab) {
      var index;

      if (currentTab === this.firstTab) {
        this.moveFocusToTab(this.lastTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index - 1]);
      }
    }
  }, {
    key: "moveFocusToNextTab",
    value: function moveFocusToNextTab(currentTab) {
      var index;

      if (currentTab === this.lastTab) {
        this.moveFocusToTab(this.firstTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index + 1]);
      }
    }
    /* EVENT HANDLERS */

  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var tgt = event.currentTarget,
        flag = false;

      switch (event.key) {
        case 'ArrowLeft':
          this.moveFocusToPreviousTab(tgt);
          flag = true;
          break;

        case 'ArrowRight':
          this.moveFocusToNextTab(tgt);
          flag = true;
          break;

        case 'Home':
          this.moveFocusToTab(this.firstTab);
          flag = true;
          break;

        case 'End':
          this.moveFocusToTab(this.lastTab);
          flag = true;
          break;

        default:
          break;
      }

      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    } // Since this example uses buttons for the tabs, the click onr also is activated
    // with the space and enter keys

  }, {
    key: "onClick",
    value: function onClick(event) {
      this.setSelectedTab(event.currentTarget);
    }
  }]);

  return TabsManual;
}();

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */ ) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
! function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o, i, a, s = [],
      r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o))
  }
  if (t.console = t.console || {
      info: function (t) {}
    }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
          preload: !1
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0
            }
          }
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto"
          }
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1
        },
        touch: {
          vertical: !0,
          momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 3e3
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls"
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close"
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom"
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom"
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom"
          },
          de: {
            CLOSE: "Schlie&szlig;en",
            NEXT: "Weiter",
            PREV: "Zur&uuml;ck",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Vergr&ouml;&szlig;ern"
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n
      },
      d = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 1e3 / 60)
        }
      }(),
      u = function () {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
          t.clearTimeout(e)
        }
      }(),
      f = function () {
        var t, n = e.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (t in o)
          if (void 0 !== n.style[t]) return o[t];
        return "transitionend"
      }(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return n.each(e, function (t, e) {
          n.isArray(e) && (o[t] = e)
        }), o
      },
      g = function (t) {
        var o, i;
        return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
          x: t.getBoundingClientRect().left + t.offsetWidth / 2,
          y: t.getBoundingClientRect().top + t.offsetHeight / 2
        }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
      },
      b = function (t, e, o) {
        var i = this;
        i.opts = h({
          index: o
        }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
      };
    n.extend(b.prototype, {
        init: function () {
          var o, i, a = this,
            s = a.group[a.currIndex],
            r = s.opts;
          r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || ""
          }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
            container: o
          }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
            a.$refs[t] = o.find(".fancybox-" + t)
          }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex)
        },
        translate: function (t, e) {
          var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            return void 0 === n[e] ? t : n[e]
          })
        },
        addContent: function (t) {
          var e, o = this,
            i = n.makeArray(t);
          n.each(i, function (t, e) {
            var i, a, s, r, c, l = {},
              d = {};
            n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
              type: "html",
              src: e + ""
            }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: !1
                }
              }
            })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
              trapFocus: !0,
              infobar: 0,
              toolbar: 0,
              smallBtn: 0,
              keyboard: 0,
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,
              clickContent: !1,
              clickSlide: !1,
              clickOutside: !1,
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1
            })), o.group.push(l)
          }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
        },
        addEvents: function () {
          var e = this;
          e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.close(t)
          }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.previous()
          }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.next()
          }).on("click.fb", "[data-fancybox-zoom]", function (t) {
            e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
          }), s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
              e.update(t)
            })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
              e.$refs.stage.show(), e.update(t)
            }, n.fancybox.isMobile ? 600 : 250))
          }), r.on("keydown.fb", function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
            if (9 == a) return void(i.opts.trapFocus && e.focus(t));
            if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a)
          }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
            e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
          }), e.idleInterval = t.setInterval(function () {
            ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
          }, 1e3))
        },
        removeEvents: function () {
          var e = this;
          s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t)
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t)
        },
        jumpTo: function (t, e) {
          var o, i, a, s, r, c, l, d, u, f = this,
            h = f.group.length;
          if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
            if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
            if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
            c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0)
            }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
              o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
              });
              var i = o.pos * c.width + o.pos * o.opts.gutter;
              n.fancybox.setTranslate(o.$slide, {
                top: 0,
                left: i - l.left + u
              }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
                top: 0,
                left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
              }, e, function () {
                o.$slide.css({
                  transform: "",
                  opacity: ""
                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete()
              })
            })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
              r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
            }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image")
          }
        },
        createSlide: function (t) {
          var e, o, i = this;
          return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
            pos: t,
            $slide: e,
            isLoaded: !1
          }), i.updateSlide(i.slides[t])), i.slides[t]
        },
        scaleToActual: function (t, e, o) {
          var i, a, s, r, c, l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;
          l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
            top: s,
            left: a,
            scaleX: r,
            scaleY: c
          }, o || 366, function () {
            l.isAnimating = !1
          }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
        },
        scaleToFit: function (t) {
          var e, o = this,
            i = o.current,
            a = i.$content;
          o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
            top: e.top,
            left: e.left,
            scaleX: e.width / a.width(),
            scaleY: e.height / a.height()
          }, t || 366, function () {
            o.isAnimating = !1
          }))
        },
        getFitPos: function (t) {
          var e, o, i, a, s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
          return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u)
        },
        update: function (t) {
          var e = this;
          n.each(e.slides, function (n, o) {
            e.updateSlide(o, t)
          })
        },
        updateSlide: function (t, e) {
          var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
          o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
        },
        centerSlide: function (t) {
          var e = this,
            o = e.current,
            i = o.$slide;
          !e.isClosing && o && (i.siblings().css({
            transform: "",
            opacity: ""
          }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
            top: 0,
            left: 0,
            opacity: 1
          }, void 0 === t ? 0 : t, function () {
            i.css({
              transform: "",
              opacity: ""
            }), o.isComplete || e.complete()
          }, !1))
        },
        isMoved: function (t) {
          var e, o, i = t || this.current;
          return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
        },
        updateCursor: function (t, e) {
          var o, i, a = this,
            s = a.current,
            r = a.$refs.container;
          s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
        },
        isZoomable: function () {
          var t, e = this,
            n = e.current;
          if (n && !e.isClosing && "image" === n.type && !n.hasError) {
            if (!n.isLoaded) return !0;
            if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
          }
          return !1
        },
        isScaledDown: function (t, e) {
          var o = this,
            i = !1,
            a = o.current,
            s = a.$content;
          return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i
        },
        canPan: function (t, e) {
          var o = this,
            i = o.current,
            a = null,
            s = !1;
          return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
            width: t,
            height: e
          } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s
        },
        loadSlide: function (t) {
          var e, o, i, a = this;
          if (!t.isLoading && !t.isLoaded) {
            if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
            switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
              case "image":
                a.setImage(t);
                break;
              case "iframe":
                a.setIframe(t);
                break;
              case "html":
                a.setContent(t, t.src || t.content);
                break;
              case "video":
                a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                break;
              case "inline":
                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                break;
              case "ajax":
                a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                  url: t.src,
                  success: function (e, n) {
                    "success" === n && a.setContent(t, e)
                  },
                  error: function (e, n) {
                    e && "abort" !== n && a.setError(t)
                  }
                })), o.one("onReset", function () {
                  i.abort()
                });
                break;
              default:
                a.setError(t)
            }
            return !0
          }
        },
        setImage: function (t) {
          var o, i = this;
          setTimeout(function () {
            var e = t.$image;
            i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
          }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
            n(this).remove(), t.$ghost = null
          }, o.onload = function () {
            i.afterLoad(t)
          }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
        },
        checkSrcset: function (e) {
          var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
          if (s) {
            i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
              var e = {};
              return t.trim().split(/\s+/).forEach(function (t, n) {
                var o = parseInt(t.substring(0, t.length - 1), 10);
                if (0 === n) return e.url = t;
                o && (e.value = o, e.postfix = t[t.length - 1])
              }), e
            }), o.sort(function (t, e) {
              return t.value - e.value
            });
            for (var r = 0; r < o.length; r++) {
              var c = o[r];
              if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                n = c;
                break
              }
            }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
          }
        },
        setBigImage: function (t) {
          var o = this,
            i = e.createElement("img"),
            a = n(i);
          t.$image = a.one("error", function () {
            o.setError(t)
          }).one("load", function () {
            var e;
            t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
              t.$ghost && !o.isClosing && t.$ghost.hide()
            }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
          }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
        },
        resolveImageSlideSize: function (t, e, n) {
          var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);
          t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
        },
        setIframe: function (t) {
          var e, o = this,
            i = t.opts.iframe,
            a = t.$slide;
          t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
            this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
          }), a.on("refresh.fb", function () {
            var n, o, s = t.$content,
              r = i.css.width,
              c = i.css.height;
            if (1 === e[0].isReady) {
              try {
                n = e.contents(), o = n.find("body")
              } catch (t) {}
              o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
                width: "100%",
                "max-width": "100%",
                height: "9999px"
              }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden")
            }
          })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
            try {
              n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
            } catch (t) {}
            n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
          })
        },
        setContent: function (t, e) {
          var o = this;
          o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
          }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
        },
        setError: function (t) {
          t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
        },
        showLoading: function (t) {
          var e = this;
          (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
        },
        hideLoading: function (t) {
          var e = this;
          (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
        },
        afterLoad: function (t) {
          var e = this;
          e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
            return 2 == t.button && t.preventDefault(), !0
          }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
        },
        adjustCaption: function (t) {
          var e, n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;
          s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
        },
        adjustLayout: function (t) {
          var e, n, o, i, a = this,
            s = t || a.current;
          s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
        },
        revealContent: function (t) {
          var e, o, i, a, s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;
          return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
            s.isAnimating = !1, s.complete()
          })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
            r.removeClass(o).css({
              transform: "",
              opacity: ""
            }), t.pos === s.currPos && s.complete()
          }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
        },
        getThumbPos: function (t) {
          var e, o, i, a, s, r = !1,
            c = t.$thumb;
          return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1
          }, e.width > 0 && e.height > 0 && r)
        },
        complete: function () {
          var t, e = this,
            o = e.current,
            i = {};
          !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
            o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
          }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
          }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
        },
        preload: function (t) {
          var e, n, o = this;
          o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
        },
        focus: function (t, o) {
          var i, a, s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
          s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
            return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
          }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
        },
        activate: function () {
          var t = this;
          n(".fancybox-container").each(function () {
            var e = n(this).data("FancyBox");
            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
          }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
        },
        close: function (t, e) {
          var o, i, a, s, r, c, l, u = this,
            f = u.current,
            h = function () {
              u.cleanUp(t)
            };
          return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
            u.update()
          }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
              top: s.top,
              left: s.left,
              scaleX: s.width / l.width,
              scaleY: s.height / l.height,
              width: l.width,
              height: l.height
            }, r = f.opts.zoomOpacity,
            "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)))
        },
        cleanUp: function (e) {
          var o, i, a, s = this,
            r = s.current.opts.$orig;
          s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
        },
        trigger: function (t, e) {
          var o, i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;
          if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
          "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
        },
        updateControls: function () {
          var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
          o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
        },
        hideControls: function (t) {
          var e = this,
            n = ["infobar", "toolbar", "nav"];
          !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
            return "fancybox-show-" + t
          }).join(" ")), this.hasHiddenControls = !0
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
          t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls()
        }
      }), n.fancybox = {
        version: "3.5.7",
        defaults: a,
        getInstance: function (t) {
          var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
        },
        open: function (t, e, n) {
          return new b(t, e, n)
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close(t))
        },
        destroy: function () {
          this.close(!0), r.add("body").off("click.fb-start", "**")
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        use3d: function () {
          var n = e.createElement("div");
          return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
        }(),
        getTranslate: function (t) {
          var e;
          return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
            top: e.top || 0,
            left: e.left || 0,
            width: e.width,
            height: e.height,
            opacity: parseFloat(t.css("opacity"))
          })
        },
        setTranslate: function (t, e) {
          var n = "",
            o = {};
          if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
        },
        animate: function (t, e, o, i, a) {
          var s, r = this;
          n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
            (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
              top: e.top,
              left: e.left,
              width: s.width * e.scaleX,
              height: s.height * e.scaleY,
              scaleX: 1,
              scaleY: 1
            }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c))
          }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
            t.trigger(f)
          }, o + 33))
        },
        stop: function (t, e) {
          t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
        }
      }, n.fn.fancybox = function (t) {
        var e;
        return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
          options: t
        }, i) : this.off("click.fb-start").on("click.fb-start", {
          items: this,
          options: t
        }, i), this
      }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
          $trigger: n(this)
        })
      }),
      function () {
        var t = null;
        r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              t = n(this);
              break;
            case "mouseup":
              t = null;
              break;
            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
              break;
            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus")
          }
        })
      }()
  }
}(window, document, jQuery),
function (t) {
  "use strict";
  var e = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "https://www.youtube-nocookie.com/embed/$4",
        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
      },
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        }
      },
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
        }
      }
    },
    n = function (e, n, o) {
      if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
        e = e.replace("$" + t, n || "")
      }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
    };
  t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s, r, c, l, d, u, f, p = a.src || "",
      h = !1;
    s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
          }
        }
        return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType)
  });
  var o = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function (t) {
      var e, n = this;
      if (this[t].loaded) return void setTimeout(function () {
        n.done(t)
      });
      this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t)
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t)
      }, document.body.appendChild(e))
    },
    done: function (e) {
      var n, o, i;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function (t) {
            0 == t.data && n.next()
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next()
      })))
    }
  };
  t(document).on({
    "afterShow.fb": function (t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
    }
  })
}(jQuery),
function (t, e, n) {
  "use strict";
  var o = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60)
      }
    }(),
    i = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e)
      }
    }(),
    a = function (e) {
      var n = [];
      e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
      for (var o in e) e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
      return n
    },
    s = function (t, e, n) {
      return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    },
    r = function (t) {
      if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
      for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
        if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
      return !1
    },
    c = function (e) {
      var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
      return i || a
    },
    l = function (t) {
      for (var e = !1;;) {
        if (e = c(t.get(0))) break;
        if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
      }
      return e
    },
    d = function (t) {
      var e = this;
      e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
      c = n(o.target),
      d = i.instance,
      u = d.current,
      f = u.$slide,
      p = u.$content,
      h = "touchstart" == o.type;
    if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
        top: 0,
        left: 0
      }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
  }, d.prototype.onSwipe = function (e) {
    var a, s = this,
      r = s.instance,
      c = s.isSwiping,
      l = s.sliderStartPos.left || 0;
    if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        })
      }), s.$container.addClass("fancybox-is-sliding"))
    });
    else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - i.top,
          left: o.left - i.left
        })
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
    }
  }, d.prototype.onPan = function () {
    var t = this;
    if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void(t.startPoints = t.newPoints);
    t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos)
    })
  }, d.prototype.limitMovement = function () {
    var t, e, n, o, i, a, s = this,
      r = s.canvasWidth,
      c = s.canvasHeight,
      l = s.distanceX,
      d = s.distanceY,
      u = s.contentStartPos,
      f = u.left,
      p = u.top,
      h = u.width,
      g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    }
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
      a = i.canvasWidth,
      s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    }
  }, d.prototype.onZoom = function () {
    var e = this,
      a = e.contentStartPos,
      r = a.width,
      c = a.height,
      l = a.left,
      d = a.top,
      u = s(e.newPoints[0], e.newPoints[1]),
      f = u / e.startDistanceBetweenFingers,
      p = Math.floor(r * f),
      h = Math.floor(c * f),
      g = (r - p) * e.percentageOfImageAtPinchPointX,
      b = (c - h) * e.percentageOfImageAtPinchPointY,
      m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
      v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
      y = m - e.centerPointStartX,
      x = v - e.centerPointStartY,
      w = l + (g + y),
      $ = d + (b + x),
      S = {
        top: $,
        left: w,
        scaleX: f,
        scaleY: f
      };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, d.prototype.ontouchend = function (t) {
    var o = this,
      s = o.isSwiping,
      r = o.isPanning,
      c = o.isZooming,
      l = o.isScrolling;
    if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
    o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
      i = !1,
      a = o.instance.group.length,
      s = Math.abs(o.distanceX),
      r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
  }, d.prototype.endPanning = function () {
    var t, e, o, i = this;
    i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
  }, d.prototype.endZooming = function () {
    var t, e, o, i, a = this,
      s = a.instance.current,
      r = a.newWidth,
      c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)))
  }, d.prototype.onTap = function (e) {
    var o, i = this,
      s = n(e.target),
      r = i.instance,
      c = r.current,
      l = e && a(e) || i.startPoints,
      d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
      u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
      f = function (t) {
        var o = c.opts[t];
        if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
          case "close":
            r.close(i.startEvent);
            break;
          case "toggleControls":
            r.toggleControls();
            break;
          case "next":
            r.next();
            break;
          case "nextOrClose":
            r.group.length > 1 ? r.next() : r.close(i.startEvent);
            break;
          case "zoom":
            "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
        }
      };
    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
      else if (s.is(".fancybox-slide")) o = "Slide";
      else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content"
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o)
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o)
      }, 500) : f("click" + o);
      return this
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e))
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy()
  })
}(window, document, jQuery),
function (t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  });
  var n = function (t) {
    this.instance = t, this.init()
  };
  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function () {
      var t = this,
        n = t.instance,
        o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle()
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
    },
    set: function (t) {
      var n = this,
        o = n.instance,
        i = o.current;
      i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
        scaleX: 1
      }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
    },
    clear: function () {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
    },
    start: function () {
      var t = this,
        e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
    },
    stop: function () {
      var t = this,
        e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
    },
    toggle: function () {
      var t = this;
      t.isActive ? t.stop() : t.start()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e))
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
    },
    "afterShow.fb": function (t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set()
    },
    "afterKeydown.fb": function (n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
    },
    "beforeClose.fb onDeactivate.fb": function (t, e) {
      var n = e && e.SlideShow;
      n && n.stop()
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
      o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set())
  })
}(document, jQuery),
function (t, e) {
  "use strict";
  var n = function () {
    for (var e = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];
      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
        return n
      }
    }
    return !1
  }();
  if (n) {
    var o = {
      request: function (e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
      },
      exit: function () {
        t[n.exitFullscreen]()
      },
      toggle: function (e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement])
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled])
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
        n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
    })
  }
  e(t).on({
    "onInit.fb": function (t, e) {
      var i;
      if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle()
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
    },
    "beforeClose.fb": function (t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
    }
  })
}(document, jQuery),
function (t, e) {
  "use strict";
  var n = "fancybox-thumbs";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);
  var o = function (t) {
    this.init(t)
  };
  e.extend(o.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function (t) {
      var e = this,
        n = t.group,
        o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
      for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++);
      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle()
      }), e.isActive = !0) : e.$button.hide()
    },
    create: function () {
      var t, o = this,
        i = o.instance,
        a = o.opts.parentEl,
        s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"))
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
    },
    focus: function (t) {
      var e, n, o = this,
        i = o.$list,
        a = o.$grid;
      o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, t))
    },
    update: function () {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
    },
    hide: function () {
      this.isVisible = !1, this.update()
    },
    show: function () {
      this.isVisible = !0, this.update()
    },
    toggle: function () {
      this.isVisible = !this.isVisible, this.update()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      var n;
      e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show())
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250)
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
    },
    "beforeClose.fb": function (t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
    }
  })
}(document, jQuery),
function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t]
    })
  }
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function (t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t, o, i = e.fancybox.getInstance(),
      a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function (t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0)
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1
          })
        },
        mobile: {
          autoFocus: !1
        }
      }
    }))
  })
}(document, jQuery),
function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1),
      n = e.split("-"),
      o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
      i = n.join("-");
    return {
      hash: e,
      index: o < 1 ? 1 : o,
      gallery: i
    }
  }

  function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
  }

  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
  }
  n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    })
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({
      "onInit.fb": function (t, e) {
        var n, i;
        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
      },
      "beforeShow.fb": function (n, o, i, s) {
        var r;
        i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
        }, 300)))
      },
      "beforeClose.fb": function (n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(),
        e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");
        if (i && i.currentHash) return e = i, !1
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o())
    }, 50))
  })
}(window, document, jQuery),
function (t, e) {
  "use strict";
  var n = (new Date).getTime();
  e(t).on({
    "onInit.fb": function (t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
          i = (new Date).getTime();
        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
      })
    }
  })
}(document, jQuery);
 

/*
 * jQuery Datepicker plugin
 */
; (function ($, $win) {

  'use strict';

  var DateMatcher = {
    getMatch: function (source, date) {
      var result = [true, ''];
      var self = this;

      $.each(source, function (key, value) {
        var parsedDate = self.parseDate(key);

        if (parsedDate.valueOf() === date.valueOf()) {
          result = [!value.disabled, value.class || 'active'];
        }
      });

      return result;
    },

    parseDate: function (dateStr) {
      var dateArr = dateStr.split('/');
      return new Date(parseInt(dateArr[2], 10), parseInt(dateArr[1], 10) - 1, parseInt(dateArr[0], 10));
    }
  };

  var Datepicker = {
    initSimple: function ($el, options) {
      $.Deferred(function (defer) {
        if (options.source) {
          $.getJSON(options.source)
            .done(defer.resolve)
            .fail(defer.reject);
        } else defer.resolve();
      }).then(function (source) {
        if (source) {
          options.beforeShowDay = function (date) {
            return DateMatcher.getMatch(source, date);
          };
        }

        $el.datepicker($.extend({
          dateFormat: 'd/mm/yy'
        }, options));
      });
    },
    initRange: function ($el, options) {
      var $inputFrom = $el.find('[data-datepicker-from]');
      var $inputTo = $el.find('[data-datepicker-to]');

      this.initSimple($inputFrom, $.extend({}, options, $inputFrom.data('datepickerFrom'), {
        defaultDate: 0,
        onClose: function (selectedDate) {
          $inputTo.datepicker('option', 'minDate', selectedDate);
        }
      }));

      this.initSimple($inputTo, $.extend({}, options, $inputTo.data('datepickerTo'), {
        defaultDate: 1,
        onClose: function (selectedDate) {
          $inputFrom.datepicker('option', 'maxDate', selectedDate);
        }
      }));
    }
  };

  $.fn.uiDatepicker = function (opt) {
    return this.each(function () {
      var $el = $(this);
      var data = $.extend(true, opt || {}, $el.data('datepicker') || {});
      var method = 'init' + (data.rangepicker ? 'Range' : 'Simple');

      Datepicker[method]($el, data);
    });
  };
}(jQuery, jQuery(window)));

var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// playground: stackblitz.com/edit/countup-typescript
var CountUp = /** @class */ (function () {
  function CountUp (target, endVal, options) {
    var _this = this;
    this.target = target;
    this.endVal = endVal;
    this.options = options;
    this.version = '2.0.7';
    this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: true,
      useGrouping: true,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: ''
    };
    this.finalEndVal = null; // for smart easing
    this.useEasing = true;
    this.countDown = false;
    this.error = '';
    this.startVal = 0;
    this.paused = true;
    this.count = function (timestamp) {
      if (!_this.startTime) {
        _this.startTime = timestamp;
      }
      var progress = timestamp - _this.startTime;
      _this.remaining = _this.duration - progress;
      // to ease or not to ease
      if (_this.useEasing) {
        if (_this.countDown) {
          _this.frameVal = _this.startVal - _this.easingFn(progress, 0, _this.startVal - _this.endVal, _this.duration);
        } else {
          _this.frameVal = _this.easingFn(progress, _this.startVal, _this.endVal - _this.startVal, _this.duration);
        }
      } else {
        if (_this.countDown) {
          _this.frameVal = _this.startVal - ((_this.startVal - _this.endVal) * (progress / _this.duration));
        } else {
          _this.frameVal = _this.startVal + (_this.endVal - _this.startVal) * (progress / _this.duration);
        }
      }
      // don't go past endVal since progress can exceed duration in the last frame
      if (_this.countDown) {
        _this.frameVal = (_this.frameVal < _this.endVal) ? _this.endVal : _this.frameVal;
      } else {
        _this.frameVal = (_this.frameVal > _this.endVal) ? _this.endVal : _this.frameVal;
      }
      // decimal
      _this.frameVal = Number(_this.frameVal.toFixed(_this.options.decimalPlaces));
      // format and print value
      _this.printValue(_this.frameVal);
      // whether to continue
      if (progress < _this.duration) {
        _this.rAF = requestAnimationFrame(_this.count);
      } else if (_this.finalEndVal !== null) {
        // smart easing
        _this.update(_this.finalEndVal);
      } else {
        if (_this.callback) {
          _this.callback();
        }
      }
    };
    // default format and easing functions
    this.formatNumber = function (num) {
      var neg = (num < 0) ? '-' : '';
      var result, x, x1, x2, x3;
      result = Math.abs(num).toFixed(_this.options.decimalPlaces);
      result += '';
      x = result.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? _this.options.decimal + x[1] : '';
      if (_this.options.useGrouping) {
        x3 = '';
        for (var i = 0, len = x1.length; i < len; ++i) {
          if (i !== 0 && (i % 3) === 0) {
            x3 = _this.options.separator + x3;
          }
          x3 = x1[len - i - 1] + x3;
        }
        x1 = x3;
      }
      // optional numeral substitution
      if (_this.options.numerals && _this.options.numerals.length) {
        x1 = x1.replace(/[0-9]/g, function (w) {
          return _this.options.numerals[+w];
        });
        x2 = x2.replace(/[0-9]/g, function (w) {
          return _this.options.numerals[+w];
        });
      }
      return neg + _this.options.prefix + x1 + x2 + _this.options.suffix;
    };
    this.easeOutExpo = function (t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    };
    this.options = __assign(__assign({}, this.defaults), options);
    this.formattingFn = (this.options.formattingFn) ?
      this.options.formattingFn : this.formatNumber;
    this.easingFn = (this.options.easingFn) ?
      this.options.easingFn : this.easeOutExpo;
    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.endVal = this.validateValue(endVal);
    this.options.decimalPlaces = Math.max(0 || this.options.decimalPlaces);
    this.resetDuration();
    this.options.separator = String(this.options.separator);
    this.useEasing = this.options.useEasing;
    if (this.options.separator === '') {
      this.options.useGrouping = false;
    }
    this.el = (typeof target === 'string') ? document.getElementById(target) : target;
    if (this.el) {
      this.printValue(this.startVal);
    } else {
      this.error = '[CountUp] target is null or undefined';
    }
  }
  // determines where easing starts and whether to count down or up
  CountUp.prototype.determineDirectionAndSmartEasing = function () {
    var end = (this.finalEndVal) ? this.finalEndVal : this.endVal;
    this.countDown = (this.startVal > end);
    var animateAmount = end - this.startVal;
    if (Math.abs(animateAmount) > this.options.smartEasingThreshold) {
      this.finalEndVal = end;
      var up = (this.countDown) ? 1 : -1;
      this.endVal = end + (up * this.options.smartEasingAmount);
      this.duration = this.duration / 2;
    } else {
      this.endVal = end;
      this.finalEndVal = null;
    }
    if (this.finalEndVal) {
      this.useEasing = false;
    } else {
      this.useEasing = this.options.useEasing;
    }
  };
  // start animation
  CountUp.prototype.start = function (callback) {
    if (this.error) {
      return;
    }
    this.callback = callback;
    if (this.duration > 0) {
      this.determineDirectionAndSmartEasing();
      this.paused = false;
      this.rAF = requestAnimationFrame(this.count);
    } else {
      this.printValue(this.endVal);
    }
  };
  // pause/resume animation
  CountUp.prototype.pauseResume = function () {
    if (!this.paused) {
      cancelAnimationFrame(this.rAF);
    } else {
      this.startTime = null;
      this.duration = this.remaining;
      this.startVal = this.frameVal;
      this.determineDirectionAndSmartEasing();
      this.rAF = requestAnimationFrame(this.count);
    }
    this.paused = !this.paused;
  };
  // reset to startVal so animation can be run again
  CountUp.prototype.reset = function () {
    cancelAnimationFrame(this.rAF);
    this.paused = true;
    this.resetDuration();
    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.printValue(this.startVal);
  };
  // pass a new endVal and start animation
  CountUp.prototype.update = function (newEndVal) {
    cancelAnimationFrame(this.rAF);
    this.startTime = null;
    this.endVal = this.validateValue(newEndVal);
    if (this.endVal === this.frameVal) {
      return;
    }
    this.startVal = this.frameVal;
    if (!this.finalEndVal) {
      this.resetDuration();
    }
    this.finalEndVal = null;
    this.determineDirectionAndSmartEasing();
    this.rAF = requestAnimationFrame(this.count);
  };
  CountUp.prototype.printValue = function (val) {
    var result = this.formattingFn(val);
    if (this.el.tagName === 'INPUT') {
      var input = this.el;
      input.value = result;
    } else if (this.el.tagName === 'text' || this.el.tagName === 'tspan') {
      this.el.textContent = result;
    } else {
      this.el.innerHTML = result;
    }
  };
  CountUp.prototype.ensureNumber = function (n) {
    return (typeof n === 'number' && !isNaN(n));
  };
  CountUp.prototype.validateValue = function (value) {
    var newValue = Number(value);
    if (!this.ensureNumber(newValue)) {
      this.error = "[CountUp] invalid start or end value: " + value;
      return null;
    } else {
      return newValue;
    }
  };
  CountUp.prototype.resetDuration = function () {
    this.startTime = null;
    this.duration = Number(this.options.duration) * 1000;
    this.remaining = this.duration;
  };
  return CountUp;
}());


/*
 * jQuery SameHeight plugin
 */
 ;(function($){
  $.fn.sameHeight = function(opt) {
    var options = $.extend({
      skipClass: 'same-height-ignore',
      leftEdgeClass: 'same-height-left',
      rightEdgeClass: 'same-height-right',
      elements: '>*',
      flexible: false,
      multiLine: false,
      useMinHeight: false,
      biggestHeight: false
    },opt);
    return this.each(function(){
      var holder = $(this), postResizeTimer, ignoreResize;
      var elements = holder.find(options.elements).not('.' + options.skipClass);
      if(!elements.length) return;

      // resize handler
      function doResize() {
        elements.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', '');
        if(options.multiLine) {
          // resize elements row by row
          resizeElementsByRows(elements, options);
        } else {
          // resize elements by holder
          resizeElements(elements, holder, options);
        }
      }
      doResize();

      // handle flexible layout / font resize
      var delayedResizeHandler = function() {
        if(!ignoreResize) {
          ignoreResize = true;
          doResize();
          clearTimeout(postResizeTimer);
          postResizeTimer = setTimeout(function() {
            doResize();
            setTimeout(function(){
              ignoreResize = false;
            }, 10);
          }, 100);
        }
      };

      // handle flexible/responsive layout
      if(options.flexible) {
        $(window).bind('resize orientationchange fontresize', delayedResizeHandler);
      }

      // handle complete page load including images and fonts
      $(window).bind('load', delayedResizeHandler);
    });
  };

  // detect css min-height support
  var supportMinHeight = typeof document.documentElement.style.maxHeight !== 'undefined';

  // get elements by rows
  function resizeElementsByRows(boxes, options) {
    var currentRow = $(), maxHeight, maxCalcHeight = 0, firstOffset = boxes.eq(0).offset().top;
    boxes.each(function(ind){
      var curItem = $(this);
      if(curItem.offset().top === firstOffset) {
        currentRow = currentRow.add(this);
      } else {
        maxHeight = getMaxHeight(currentRow);
        maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
        currentRow = curItem;
        firstOffset = curItem.offset().top;
      }
    });
    if(currentRow.length) {
      maxHeight = getMaxHeight(currentRow);
      maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
    }
    if(options.biggestHeight) {
      boxes.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', maxCalcHeight);
    }
  }

  // calculate max element height
  function getMaxHeight(boxes) {
    var maxHeight = 0;
    boxes.each(function(){
      maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    return maxHeight;
  }

  // resize helper function
  function resizeElements(boxes, parent, options) {
    var calcHeight;
    var parentHeight = typeof parent === 'number' ? parent : parent.height();
    boxes.removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass).each(function(i){
      var element = $(this);
      var depthDiffHeight = 0;
      var isBorderBox = element.css('boxSizing') === 'border-box' || element.css('-moz-box-sizing') === 'border-box' || element.css('-webkit-box-sizing') === 'border-box';

      if(typeof parent !== 'number') {
        element.parents().each(function(){
          var tmpParent = $(this);
          if(parent.is(this)) {
            return false;
          } else {
            depthDiffHeight += tmpParent.outerHeight() - tmpParent.height();
          }
        });
      }
      calcHeight = parentHeight - depthDiffHeight;
      calcHeight -= isBorderBox ? 0 : element.outerHeight() - element.height();

      if(calcHeight > 0) {
        element.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', calcHeight);
      }
    });
    boxes.filter(':first').addClass(options.leftEdgeClass);
    boxes.filter(':last').addClass(options.rightEdgeClass);
    return calcHeight;
  }
}(jQuery));


/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function (e) { function t (t, n) { var s, o, u, r = t.nodeName.toLowerCase(); return "area" === r ? (s = t.parentNode, o = s.name, t.href && o && "map" === s.nodeName.toLowerCase() ? (u = e("img[usemap='#" + o + "']")[0], !!u && i(u)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || n : n) && i(t) } function i (t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return "hidden" === e.css(this, "visibility") }).length } e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function (t) { var i = this.css("position"), n = "absolute" === i, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function () { var t = e(this); return n && "static" === t.css("position") ? !1 : s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && o.length ? o : e(this[0].ownerDocument || document) }, uniqueId: function () { var e = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (i) { return !!e.data(i, t) } }) : function (t, i, n) { return !!e.data(t, n[3]) }, focusable: function (i) { return t(i, !isNaN(e.attr(i, "tabindex"))) }, tabbable: function (i) { var n = e.attr(i, "tabindex"), s = isNaN(n); return (s || n >= 0) && t(i, !s) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) { function n (t, i, n, o) { return e.each(s, function () { i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), o && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), u = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + i] = function (t) { return void 0 === t ? u["inner" + i].call(this) : this.each(function () { e(this).css(o, n(this, t) + "px") }) }, e.fn["outer" + i] = function (t, s) { return "number" != typeof t ? u["outer" + i].call(this, t) : this.each(function () { e(this).css(o, n(this, t, !0, s) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) { return function (i, n) { return "number" == typeof i ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), n && n.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), disableSelection: function () { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.bind(e + ".ui-disableSelection", function (e) { e.preventDefault() }) } }(), enableSelection: function () { return this.unbind(".ui-disableSelection") }, zIndex: function (t) { if (void 0 !== t) return this.css("zIndex", t); if (this.length) for (var i, n, s = e(this[0]); s.length && s[0] !== document;) { if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n; s = s.parent() } return 0 } }), e.ui.plugin = { add: function (t, i, n) { var s, o = e.ui[t].prototype; for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]) }, call: function (e, t, i, n) { var s, o = e.plugins[t]; if (o && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (s = 0; s < o.length; s++)e.options[o[s][0]] && o[s][1].apply(e.element, i) } } });


/*
       (accessible)
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1@accessible360.1
  Author: Jason Webb (Accessible360)
 Website: https://accessible360.com
    Docs: https://accessible360.github.io/accessible-slick
    Repo: https://github.com/Accessible360/accessible-slick
  Issues: https://github.com/Accessible360/accessible-slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function ($) {
  'use strict';
  var Slick = window.Slick || {};

  Slick = (function () {

    var instanceUid = 0;

    function Slick (element, settings) {

      var _ = this,
        dataSettings;

      _.defaults = {
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        arrowsPlacement: null,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" type="button">' +
          '<span class="slick-prev-icon" aria-hidden="true"></span>' +
          '<span class="slick-sr-only">Previous</span>' +
          '</button>',
        nextArrow: '<button class="slick-next" type="button">' +
          '<span class="slick-next-icon" aria-hidden="true"></span>' +
          '<span class="slick-sr-only">Next</span>' +
          '</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (slider, i) {
          return $('<button type="button">' +
            '<span class="slick-dot-icon" aria-hidden="true"></span>' +
            '<span class="slick-sr-only">Go to slide ' + (i + 1) + '</span>' +
            '</button>');
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        infinite: true,
        initialSlide: 0,
        instructionsText: null,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        playIcon: '<span class="slick-play-icon" aria-hidden="true"></span>',
        pauseIcon: '<span class="slick-pause-icon" aria-hidden="true"></span>',
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        regionLabel: 'carousel',
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useAutoplayToggleButton: true,
        useCSS: true,
        useGroupRole: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };

      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        $instructionsText: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $pauseButton: null,
        $pauseIcon: null,
        $playIcon: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };

      $.extend(_, _.initials);

      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;

      dataSettings = $(element).data('slick') || {};

      _.options = $.extend({}, _.defaults, settings, dataSettings);

      _.currentSlide = _.options.initialSlide;

      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.autoPlayToggleHandler = $.proxy(_.autoPlayToggleHandler, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);

      _.instanceUid = instanceUid++;

      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


      _.registerBreakpoints();
      _.init(true);

    }

    return Slick;

  }());

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

    var _ = this;

    if (typeof (index) === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || (index >= _.slideCount)) {
      return false;
    }

    _.unload();

    if (typeof (index) === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
      $(element).attr('role', 'group');
      $(element).attr('aria-label', 'slide ' + index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();

  };

  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {

    var animProps = {},
      _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }

    } else {

      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -(_.currentLeft);
        }
        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function (now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' +
                now + 'px, 0px)';
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' +
                now + 'px)';
              _.$slideTrack.css(animProps);
            }
          },
          complete: function () {
            if (callback) {
              callback.call();
            }
          }
        });

      } else {

        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {

            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }

      }

    }

  };

  Slick.prototype.getNavTarget = function () {

    var _ = this,
      asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;

  };

  Slick.prototype.asNavFor = function (index) {

    var _ = this,
      asNavFor = _.getNavTarget();

    if (asNavFor !== null && typeof asNavFor === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }

  };

  Slick.prototype.applyTransition = function (slide) {

    var _ = this,
      transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }

  };

  Slick.prototype.autoPlay = function () {

    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }

  };

  Slick.prototype.autoPlayClear = function () {

    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }

  };

  Slick.prototype.autoPlayIterator = function () {

    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {

      if (_.options.infinite === false) {

        if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
          _.direction = 0;
        } else if (_.direction === 0) {

          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }

        }

      }

      _.slideHandler(slideTo);

    }

  };

  Slick.prototype.autoPlayToggleHandler = function () {
    var _ = this;

    if (_.paused) {
      _.$playIcon.css('display', 'none');
      _.$pauseIcon.css('display', 'inline');

      _.$pauseButton.find('.slick-play-text').attr('style', 'display: none');
      _.$pauseButton.find('.slick-pause-text').removeAttr('style');

      _.slickPlay();
    } else {
      _.$playIcon.css('display', 'inline');
      _.$pauseIcon.css('display', 'none');

      _.$pauseButton.find('.slick-play-text').removeAttr('style');
      _.$pauseButton.find('.slick-pause-text').attr('style', 'display: none');

      _.slickPause();
    }
  };

  Slick.prototype.buildArrows = function () {

    var _ = this;

    if (_.options.arrows === true) {

      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {

        if (_.htmlExpr.test(_.options.prevArrow)) {
          if (_.options.arrowsPlacement != null) {
            switch (_.options.arrowsPlacement) {
              case 'beforeSlides':
              case 'split':
                _.$prevArrow.prependTo(_.options.appendArrows);
                break;

              case 'afterSlides':
                _.$prevArrow.appendTo(_.options.appendArrows);
                break;
            }

          } else {
            _.$prevArrow.prependTo(_.options.appendArrows);
          }
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          if (_.options.arrowsPlacement != null) {
            switch (_.options.arrowsPlacement) {
              case 'beforeSlides':
                _.$prevArrow.after(_.$nextArrow);
                break;

              case 'afterSlides':
              case 'split':
                _.$nextArrow.appendTo(_.options.appendArrows);
            }
          } else {
            _.$nextArrow.appendTo(_.options.appendArrows);
          }
        }

        if (_.options.infinite !== true) {
          _.$prevArrow
            .addClass('slick-disabled')
            .prop('disabled', true);
        }

      } else {

        _.$prevArrow.add(_.$nextArrow)

          .addClass('slick-hidden')
          .prop('disabled', true);
      }

    }

  };

  Slick.prototype.buildDots = function () {

    var _ = this,
      i, dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');

    }

  };

  Slick.prototype.buildOut = function () {

    var _ = this;

    _.$slides =
      _.$slider
        .children(_.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide');

    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element)
        .attr('data-slick-index', index)
        .data('originalStyling', $(element).attr('style') || '');

      if (_.options.useGroupRole) {
        $(element)
          .attr('role', 'group')
          .attr('aria-label', 'slide ' + (index + 1));
      }
    });

    _.$slider.addClass('slick-slider');

    _.$slider.attr('role', 'region');
    _.$slider.attr('aria-label', _.options.regionLabel);
    _.$slider.attr('tabindex', -1);

    _.$slideTrack = (_.slideCount === 0) ?
      $('<div class="slick-track"/>').appendTo(_.$slider) :
      _.$slides.wrapAll('<div class="slick-track"/>').parent();

    _.$list = _.$slideTrack.wrap(
      '<div class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();


    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }

    if (_.options.autoplay && _.options.useAutoplayToggleButton) {
      _.$pauseIcon = $(_.options.pauseIcon).attr('aria-hidden', true);
      _.$playIcon = $(_.options.playIcon).attr('aria-hidden', true);

      _.$pauseButton = $('<button type="button" class="slick-autoplay-toggle-button">');
      _.$pauseButton.append(_.$pauseIcon);
      _.$pauseButton.append(_.$playIcon.css('display', 'none'));
      _.$pauseButton.append($('<span class="slick-pause-text slick-sr-only">Pause</span>'));
      _.$pauseButton.append($('<span class="slick-play-text slick-sr-only" style="display: none">Play</span>'));

      _.$pauseButton.prependTo(_.$slider);
    }

    if ((_.options.instructionsText != null && _.options.instructionsText != '')) {
      _.$instructionsText = $('<p class="slick-instructions slick-sr-only">' + _.options.instructionsText + '</p>');
      _.$instructionsText.prependTo(_.$slider);
    }

  };

  Slick.prototype.buildRows = function () {

    var _ = this,
      a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {

      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(
        originalSlides.length / slidesPerSection
      );

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);
      _.$slider.children().children().children()
        .css({
          'width': (100 / _.options.slidesPerRow) + '%',
          'display': 'inline-block'
        });

    }

  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {

    var _ = this,
      breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive &&
      _.options.responsive.length &&
      _.options.responsive !== null) {

      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint =
              targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings,
                _.breakpointSettings[
                targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings,
              _.breakpointSettings[
              targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }

      // only trigger breakpoints during an actual break. not on initialize.
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }

  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {

    var _ = this,
      $target = $(event.currentTarget),
      indexOffset, slideOffset, unevenOffset;

    // If target is a link, prevent default action.
    if ($target.is('a')) {
      event.preventDefault();
    }

    // If target is not the <li> element (ie: a child), find the <li>.
    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {

      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;

      case 'index':
        var index = event.data.index === 0 ? 0 :
          event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;

      default:
        return;
    }

  };

  Slick.prototype.checkNavigable = function (index) {

    var _ = this,
      navigables, prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {

    var _ = this;

    if (_.options.autoplay && _.options.useAutoplayToggleButton) {
      _.$pauseButton.off('click.slick', _.autoPlayToggleHandler);
    }

    if (_.options.dots && _.$dots !== null) {

      $('li', _.$dots)
        .off('click.slick', _.changeSlide)
        .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
        .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

  };

  Slick.prototype.cleanUpSlideEvents = function () {

    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

  };

  Slick.prototype.cleanUpRows = function () {

    var _ = this,
      originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }

  };

  Slick.prototype.clickHandler = function (event) {

    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }

  };

  Slick.prototype.destroy = function (refresh) {

    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.options.autoplay && _.options.useAutoplayToggleButton) {
      _.$pauseButton.remove();
    }

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {

      _.$prevArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .prop('disabled', false)
        .css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {

      _.$nextArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .prop('disabled', false)
        .css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }


    if (_.$slides) {

      _.$slides
        .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
        .removeAttr('aria-hidden')
        .removeAttr('data-slick-index')
        .each(function () {
          $(this).attr('style', $(this).data('originalStyling'));
        });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }

  };

  Slick.prototype.disableTransition = function (slide) {

    var _ = this,
      transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }

  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {

    var _ = this;

    if (_.cssTransitions === false) {

      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);

    } else {

      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {

          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }

    }

  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {

    var _ = this;

    if (_.cssTransitions === false) {

      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);

    } else {

      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });

    }

  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

    var _ = this;

    if (filter !== null) {

      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();

    }

  };

  Slick.prototype.focusHandler = function () {

    var _ = this;

    // If any child element receives focus within the slider we need to pause the autoplay
    _.$slider
      .off('focus.slick blur.slick')
      .on(
        'focus.slick',
        '*',
        function (event) {
          var $sf = $(this);

          setTimeout(function () {
            if (_.options.pauseOnFocus) {
              if ($sf.is(':focus')) {
                _.focussed = true;
                _.autoPlay();
              }
            }
          }, 0);
        }
      ).on(
        'blur.slick',
        '*',
        function (event) {
          var $sf = $(this);

          // When a blur occurs on any elements within the slider we become unfocused
          if (_.options.pauseOnFocus) {
            _.focussed = false;
            _.autoPlay();
          }
        }
      );
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

    var _ = this;
    return _.currentSlide;

  };

  Slick.prototype.getDotCount = function () {

    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;

  };

  Slick.prototype.getLeft = function (slideIndex) {

    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
        coef = -1

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2
          }
        }
        verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
            verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
          } else {
            _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
            verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
        verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
    } else {
      targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
    }

    if (_.options.variableWidth === true) {

      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;

  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

    var _ = this;

    return _.options[option];

  };

  Slick.prototype.getNavigableIndexes = function () {

    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;

  };

  Slick.prototype.getSlick = function () {

    return this;

  };

  Slick.prototype.getSlideCount = function () {

    var _ = this,
      slidesTraversed, swipedSlide, swipeTarget, centerOffset;

    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = (_.swipeLeft * -1) + centerOffset;

    if (_.options.swipeToSlide === true) {

      _.$slideTrack.find('.slick-slide').each(function (index, slide) {

        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;
        if (_.options.centerMode !== true) {
          slideOffset += (slideOuterWidth / 2);
        }

        slideRightBoundary = slideOffset + (slideOuterWidth);

        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

      return slidesTraversed;

    } else {
      return _.options.slidesToScroll;
    }

  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);

  };

  Slick.prototype.init = function (creation) {

    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {

      $(_.$slider).addClass('slick-initialized');

      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();

    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.autoplay) {

      _.paused = false;
      _.autoPlay();

    }

    _.updateSlideVisibility();

    if (_.options.accessibility != undefined) {
      console.warn('accessibility setting is no longer supported.')
    }

    if (_.options.focusOnChange != undefined) {
      console.warn('focusOnChange is no longer supported.');
    }

    if (_.options.focusOnSelect != undefined) {
      console.warn('focusOnSelect is no longer supported.');
    }

  };

  Slick.prototype.initArrowEvents = function () {

    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow
        .off('click.slick')
        .on('click.slick', {
          message: 'previous'
        }, _.changeSlide);
      _.$nextArrow
        .off('click.slick')
        .on('click.slick', {
          message: 'next'
        }, _.changeSlide);
    }

  };

  Slick.prototype.initDotEvents = function () {

    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

      $('li', _.$dots)
        .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
        .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

    }

  };

  Slick.prototype.initSlideEvents = function () {

    var _ = this;

    if (_.options.pauseOnHover) {

      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

    }

  };

  Slick.prototype.initializeEvents = function () {

    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();
    _.initSlideEvents();

    if (_.options.autoplay && _.options.useAutoplayToggleButton) {
      _.$pauseButton.on('click.slick', _.autoPlayToggleHandler);
    }

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);

  };

  Slick.prototype.initUI = function () {

    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

      _.$prevArrow.show();
      _.$nextArrow.show();

    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

      _.$dots.show();

    }

  };

  Slick.prototype.lazyLoad = function () {

    var _ = this,
      loadRange, cloneRange, rangeStart, rangeEnd;

    function loadImages (imagesScope) {

      $('img[data-lazy]', imagesScope).each(function () {

        var image = $(this),
          imageSource = $(this).attr('data-lazy'),
          imageSrcSet = $(this).attr('data-srcset'),
          imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
          imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {

          image
            .animate({
              opacity: 0
            }, 100, function () {

              if (imageSrcSet) {
                image
                  .attr('srcset', imageSrcSet);

                if (imageSizes) {
                  image
                    .attr('sizes', imageSizes);
                }
              }

              image
                .attr('src', imageSource)
                .animate({
                  opacity: 1
                }, 200, function () {
                  image
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');
                });
              _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
            });

        };

        imageToLoad.onerror = function () {

          image
            .removeAttr('data-lazy')
            .removeClass('slick-loading')
            .addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

        };

        imageToLoad.src = imageSource;

      });

    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else
      if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }

  };

  Slick.prototype.loadSlider = function () {

    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }

  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {

    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });

  };

  Slick.prototype.orientationChange = function () {

    var _ = this;

    _.checkResponsive();
    _.setPosition();

  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {

    var _ = this;

    _.autoPlayClear();
    _.paused = true;

  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {

    var _ = this;

    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;

  };

  Slick.prototype.postSlide = function (index) {

    var _ = this;

    if (!_.unslicked) {

      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      _.updateSlideVisibility();

    }

  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {

    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });

  };

  Slick.prototype.preventDefault = function (event) {

    event.preventDefault();

  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {

    tryCount = tryCount || 1;

    var _ = this,
      $imgsToLoad = $('img[data-lazy]', _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad;

    if ($imgsToLoad.length) {

      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {

        if (imageSrcSet) {
          image
            .attr('srcset', imageSrcSet);

          if (imageSizes) {
            image
              .attr('sizes', imageSizes);
          }
        }

        image
          .attr('src', imageSource)
          .removeAttr('data-lazy data-srcset data-sizes')
          .removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
        _.progressiveLazyLoad();

      };

      imageToLoad.onerror = function () {

        if (tryCount < 3) {

          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);

        } else {

          image
            .removeAttr('data-lazy')
            .removeClass('slick-loading')
            .addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();

        }

      };

      imageToLoad.src = imageSource;

    } else {

      _.$slider.trigger('allImagesLoaded', [_]);

    }

  };

  Slick.prototype.refresh = function (initializing) {

    var _ = this,
      currentSlide, lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow;

    // in non-infinite sliders, we don't want to go past the
    // last visible index.
    if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
      _.currentSlide = lastVisibleIndex;
    }

    // if less slides than to show, go to start.
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;

    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {

      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);

    }

  };

  Slick.prototype.registerBreakpoints = function () {

    var _ = this,
      breakpoint, currentBreakpoint, l,
      responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {

        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }

          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

        }

      }

      _.breakpoints.sort(function (a, b) {
        return (_.options.mobileFirst) ? a - b : b - a;
      });

    }

  };

  Slick.prototype.reinit = function () {

    var _ = this;

    _.$slides =
      _.$slideTrack
        .children(_.options.slide)
        .addClass('slick-slide');

    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();

    _.checkResponsive(false, true);

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();
    _.focusHandler();

    _.paused = !_.options.autoplay;
    _.autoPlay();

    _.$slider.trigger('reInit', [_]);

  };

  Slick.prototype.resize = function () {

    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

    var _ = this;

    if (typeof (index) === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();

  };

  Slick.prototype.setCSS = function (position) {

    var _ = this,
      positionProps = {},
      x, y;

    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }

  };

  Slick.prototype.setDimensions = function () {

    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: ('0px ' + _.options.centerPadding)
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: (_.options.centerPadding + ' 0px')
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();


    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

  };

  Slick.prototype.setFade = function () {

    var _ = this,
      targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = (_.slideWidth * index) * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });

  };

  Slick.prototype.setHeight = function () {

    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }

  };

  Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function () {

      /**
       * accepts arguments in format of:
       *
       *  - for changing a single option's value:
       *     .slick("setOption", option, value, refresh )
       *
       *  - for changing a set of responsive options:
       *     .slick("setOption", 'responsive', [{}, ...], refresh )
       *
       *  - for updating multiple values at once (not responsive)
       *     .slick("setOption", { 'option': value, ... }, refresh )
       */

      var _ = this,
        l, item, option, value, refresh = false,
        type;

      if ($.type(arguments[0]) === 'object') {

        option = arguments[0];
        refresh = arguments[1];
        type = 'multiple';

      } else if ($.type(arguments[0]) === 'string') {

        option = arguments[0];
        value = arguments[1];
        refresh = arguments[2];

        if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

          type = 'responsive';

        } else if (typeof arguments[1] !== 'undefined') {

          type = 'single';

        }

      }

      if (type === 'single') {

        _.options[option] = value;


      } else if (type === 'multiple') {

        $.each(option, function (opt, val) {

          _.options[opt] = val;

        });


      } else if (type === 'responsive') {

        for (item in value) {

          if ($.type(_.options.responsive) !== 'array') {

            _.options.responsive = [value[item]];

          } else {

            l = _.options.responsive.length - 1;

            // loop through the responsive object and splice out duplicates.
            while (l >= 0) {

              if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                _.options.responsive.splice(l, 1);

              }

              l--;

            }

            _.options.responsive.push(value[item]);

          }

        }

      }

      if (refresh) {

        _.unload();
        _.reinit();

      }

    };

  Slick.prototype.setPosition = function () {

    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);

  };

  Slick.prototype.setProps = function () {

    var _ = this,
      bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
  };


  Slick.prototype.setSlideClasses = function (index) {

    var _ = this,
      centerOffset, allSlides, indexOffset, remainder;

    allSlides = _.$slider
      .find('.slick-slide')
      .removeClass('slick-active slick-center slick-current')
      .attr('aria-hidden', 'true')
      .attr('aria-label', function () {
        return $(this).attr('aria-label').replace(' (centered)', '');
      });

    _.$slides
      .eq(index)
      .addClass('slick-current');

    if (_.options.centerMode === true) {

      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {

        if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
          _.$slides
            .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
            .addClass('slick-active')
            .removeAttr('aria-hidden');

        } else {

          indexOffset = _.options.slidesToShow + index;
          allSlides
            .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
            .addClass('slick-active')
            .removeAttr('aria-hidden');

        }

        if (index === 0) {

          allSlides
            .eq(_.options.slidesToShow + _.slideCount + 1)
            .addClass('slick-center')
            .attr('aria-label', function () {
              return $(this).attr('aria-label') + ' (centered)';
            });

        } else if (index === _.slideCount - 1) {

          allSlides
            .eq(_.options.slidesToShow)
            .addClass('slick-center')
            .attr('aria-label', function () {
              return $(this).attr('aria-label') + ' (centered)';
            });

        }

      }

      _.$slides
        .eq(index)
        .addClass('slick-center')
        .attr('aria-label', function () {
          return $(this).attr('aria-label') + ' (centered)';
        });

    } else {

      if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

        _.$slides
          .slice(index, index + _.options.slidesToShow)
          .addClass('slick-active')
          .removeAttr('aria-hidden');

      } else if (allSlides.length <= _.options.slidesToShow) {

        allSlides
          .addClass('slick-active')
          .removeAttr('aria-hidden');

      } else {

        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

          allSlides
            .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
            .addClass('slick-active')
            .removeAttr('aria-hidden');

        } else {

          allSlides
            .slice(indexOffset, indexOffset + _.options.slidesToShow)
            .addClass('slick-active')
            .removeAttr('aria-hidden');

        }

      }

    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {

    var _ = this,
      i, slideIndex, infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {

      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {

        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > (_.slideCount -
          infiniteCount); i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '')
            .attr('data-slick-index', slideIndex - _.slideCount)
            .prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '')
            .attr('data-slick-index', slideIndex + _.slideCount)
            .appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });

      }

    }

  };

  Slick.prototype.interrupt = function (toggle) {

    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;

  };

  Slick.prototype.selectHandler = function (event) {

    var _ = this;

    var targetElement =
      $(event.target).is('.slick-slide') ?
        $(event.target) :
        $(event.target).parents('.slick-slide');

    var index = parseInt(targetElement.attr('data-slick-index'));

    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {

      _.slideHandler(index, false, true);
      return;

    }

    _.slideHandler(index);

  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

    var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
      _ = this,
      navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);

    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {

      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }

    }

    _.updateDots();
    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {

        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });

      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }

  };

  Slick.prototype.startLoad = function () {

    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

      _.$prevArrow.hide();
      _.$nextArrow.hide();

    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

      _.$dots.hide();

    }

    _.$slider.addClass('slick-loading');

  };

  Slick.prototype.swipeDirection = function () {

    var xDist, yDist, r, swipeAngle, _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return (_.options.rtl === false ? 'right' : 'left');
    }
    if (_.options.verticalSwiping === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';

  };

  Slick.prototype.swipeEnd = function (event) {

    var _ = this,
      slideCount,
      direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

      direction = _.swipeDirection();

      switch (direction) {

        case 'left':
        case 'down':

          slideCount =
            _.options.swipeToSlide ?
              _.checkNavigable(_.currentSlide + _.getSlideCount()) :
              _.currentSlide + _.getSlideCount();

          _.currentDirection = 0;

          break;

        case 'right':
        case 'up':

          slideCount =
            _.options.swipeToSlide ?
              _.checkNavigable(_.currentSlide - _.getSlideCount()) :
              _.currentSlide - _.getSlideCount();

          _.currentDirection = 1;

          break;

        default:


      }

      if (direction != 'vertical') {

        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger('swipe', [_, direction]);

      }

    } else {

      if (_.touchObject.startX !== _.touchObject.curX) {

        _.slideHandler(_.currentSlide);
        _.touchObject = {};

      }

    }

  };

  Slick.prototype.swipeHandler = function (event) {

    var _ = this;

    if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
      event.originalEvent.touches.length : 1;

    _.touchObject.minSwipe = _.listWidth / _.options
      .touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options
        .touchThreshold;
    }

    switch (event.data.action) {

      case 'start':
        _.swipeStart(event);
        break;

      case 'move':
        _.swipeMove(event);
        break;

      case 'end':
        _.swipeEnd(event);
        break;

    }

  };

  Slick.prototype.swipeMove = function (event) {

    var _ = this,
      edgeWasHit = false,
      curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);

    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

    _.touchObject.swipeLength = Math.round(Math.sqrt(
      Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

    verticalSwipeLength = Math.round(Math.sqrt(
      Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }


    swipeLength = _.touchObject.swipeLength;

    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);

  };

  Slick.prototype.swipeStart = function (event) {

    var _ = this,
      touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

    _.dragging = true;

  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

    var _ = this;

    if (_.$slidesCache !== null) {

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();

    }

  };

  Slick.prototype.unload = function () {

    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides
      .removeClass('slick-slide slick-active slick-visible slick-current')
      .attr('aria-hidden', 'true')
      .css('width', '');

  };

  Slick.prototype.unslick = function (fromBreakpoint) {

    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();

  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true &&
      _.slideCount > _.options.slidesToShow &&
      !_.options.infinite) {

      _.$prevArrow.removeClass('slick-disabled').prop('disabled', false);
      _.$nextArrow.removeClass('slick-disabled').prop('disabled', false);

      if (_.currentSlide === 0) {

        if (document.activeElement === _.$prevArrow.get(0)) {
          _.$slider.get(0).focus();
        }

        _.$prevArrow.addClass('slick-disabled').prop('disabled', true);
        _.$nextArrow.removeClass('slick-disabled').prop('disabled', false);

      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

        if (document.activeElement === _.$nextArrow.get(0)) {
          _.$slider.get(0).focus();
        }

        _.$nextArrow.addClass('slick-disabled').prop('disabled', true);
        _.$prevArrow.removeClass('slick-disabled').prop('disabled', false);

      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

        if (document.activeElement === _.$nextArrow.get(0)) {
          _.$slider.get(0).focus();
        }

        _.$nextArrow.addClass('slick-disabled').prop('disabled', true);
        _.$prevArrow.removeClass('slick-disabled').prop('disabled', false);

      }

    }

  };

  Slick.prototype.updateDots = function () {

    var _ = this;

    if (_.$dots !== null) {

      _.$dots
        .find('li')
        .removeClass('slick-active')
        .find('button')
        .removeAttr('aria-current')
        .end()
        .end();

      _.$dots
        .find('li')
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass('slick-active')
        .find('button')
        .attr('aria-current', true)
        .end()
        .end();

    }

  };

  Slick.prototype.updateSlideVisibility = function () {
    var _ = this;

    _.$slideTrack
      .find('.slick-slide')
      .attr('aria-hidden', 'true')
      .find('a, input, button, select')
      .attr('tabindex', '-1');

    _.$slideTrack
      .find('.slick-active')
      .removeAttr('aria-hidden')
      .find('a, input, button, select')
      .removeAttr('tabindex');
  }

  Slick.prototype.visibility = function () {

    var _ = this;

    if (_.options.autoplay) {

      if (document[_.hidden]) {

        _.interrupted = true;

      } else {

        _.interrupted = false;

      }

    }

  };

  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].slick = new Slick(_[i], opt);
      else
        ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

}));


/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function (e) {
  function t (e) { for (var t, i; e.length && e[0] !== document;) { if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i; e = e.parent() } return 0 } function i () { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) } function s (t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function () { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", n) } function n () { e.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) } function a (t, i) { e.extend(t, i); for (var s in i) null == i[s] && (t[s] = i[s]); return t } e.extend(e.ui, { datepicker: { version: "1.11.4" } }); var o; e.extend(i.prototype, {
    markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (e) { return a(this._defaults, e || {}), this }, _attachDatepicker: function (t, i) { var s, n, a; s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a) }, _newInst: function (t, i) { var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: n, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function (t, i) { var s = e(t); i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t)) }, _attachments: function (t, i) { var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL"); i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 })) }, _autoSize: function (e) { if (this._get(e, "autoSize") && !e.inline) { var t, i, s, n, a = new Date(2009, 11, 20), o = this._get(e, "dateFormat"); o.match(/[DM]/) && (t = function (e) { for (i = 0, s = 0, n = 0; n < e.length; n++)e[n].length > i && (i = e[n].length, s = n); return s }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length) } }, _inlineDatepicker: function (t, i) { var s = e(t); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (t, i, s, n, o) { var r, u, l, h, c, d = this._dialogInst; return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, e.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (u = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [u / 2 - 100 + h, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", d), this }, _destroyDatepicker: function (t) { var i, s = e(t), n = e.data(t, "datepicker"); s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), o === n && (o = null)) }, _enableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e })) }, _disableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t) }, _isDisabledDatepicker: function (e) { if (!e) return !1; for (var t = 0; t < this._disabledInputs.length; t++)if (this._disabledInputs[t] === e) return !0; return !1 }, _getInst: function (t) { try { return e.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (t, i, s) { var n, o, r, u, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), void (l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(l, "min"), u = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== u && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, u)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)))) }, _changeDatepicker: function (e, t, i) { this._optionDatepicker(e, t, i) }, _refreshDatepicker: function (e) { var t = this._getInst(e); t && this._updateDatepicker(t) }, _setDateDatepicker: function (e, t) { var i = this._getInst(e); i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null }, _doKeyDown: function (t) { var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl"); if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) { case 9: e.datepicker._hideDatepicker(), o = !1; break; case 13: return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1; case 27: e.datepicker._hideDatepicker(); break; case 33: e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 34: e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 35: (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey; break; case 36: (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey; break; case 37: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 38: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey; break; case 39: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 40: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey; break; default: o = !1 } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1; o && (t.preventDefault(), t.stopPropagation()) }, _doKeyPress: function (t) { var i, s, n = e.datepicker._getInst(t.target); return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0 }, _doKeyUp: function (t) { var i, s = e.datepicker._getInst(t.target); if (s.input.val() !== s.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (i) { if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = e("input", i.parentNode)[0]), !e.datepicker._isDisabledDatepicker(i) && e.datepicker._lastInput !== i) { var s, n, o, r, u, l, h; s = e.datepicker._getInst(i), e.datepicker._curInst && e.datepicker._curInst !== s && (e.datepicker._curInst.dpDiv.stop(!0, !0), s && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(s, "beforeShow"), o = n ? n.apply(i, [i, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, e.datepicker._lastInput = i, e.datepicker._setDateFromField(s), e.datepicker._inDialog && (i.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(i), e.datepicker._pos[1] += i.offsetHeight), r = !1, e(i).parents().each(function () { return r |= "fixed" === e(this).css("position"), !r }), u = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(s), u = e.datepicker._checkOffset(s, u, r), s.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: u.left + "px", top: u.top + "px" }), s.inline || (l = e.datepicker._get(s, "showAnim"), h = e.datepicker._get(s, "duration"), s.dpDiv.css("z-index", t(e(i)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? s.dpDiv.show(l, e.datepicker._get(s, "showOptions"), h) : s.dpDiv[l || "show"](l ? h : null), e.datepicker._shouldFocusInput(s) && s.input.focus(), e.datepicker._curInst = s)) } }, _updateDatepicker: function (t) { this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t); var i, s = this._getNumberOfMonths(t), a = s[1], r = 17, u = t.dpDiv.find("." + this._dayOverClass + " a"); u.length > 0 && n.apply(u.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", r * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0)) }, _shouldFocusInput: function (e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") }, _checkOffset: function (t, i, s) { var n = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, r = t.input ? t.input.outerHeight() : 0, u = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop()); return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > u && u > n ? Math.abs(i.left + n - u) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i }, _findPos: function (t) { for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[n ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] }, _hideDatepicker: function (t) { var i, s, n, a, o = this._curInst; !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (t) { if (e.datepicker._curInst) { var i = e(t.target), s = e.datepicker._getInst(i[0]); (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker() } }, _adjustDate: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a)) }, _gotoToday: function (t) { var i, s = e(t), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n) }, _selectDay: function (t, i, s, n) { var a, o = e(t); e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))) }, _clearDate: function (t) { var i = e(t); this._selectDate(i, "") }, _selectDate: function (t, i) { var s, n = e(t), a = this._getInst(n[0]); i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null) }, _updateAlternate: function (t) { var i, s, n, a = this._get(t, "altField"); a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () { e(this).val(n) })) }, noWeekends: function (e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] }, iso8601Week: function (e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 }, parseDate: function (t, i, s) { if (null == t || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null; var n, a, o, r, u = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, h = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, v = -1, g = -1, f = -1, _ = -1, y = !1, k = function (e) { var i = n + 1 < t.length && t.charAt(n + 1) === e; return i && n++, i }, b = function (e) { var t = k(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, n = "y" === e ? s : 1, a = RegExp("^\\d{" + n + "," + s + "}"), o = i.substring(u).match(a); if (!o) throw "Missing number at position " + u; return u += o[0].length, parseInt(o[0], 10) }, D = function (t, s, n) { var a = -1, o = e.map(k(t) ? n : s, function (e, t) { return [[t, e]] }).sort(function (e, t) { return -(e[1].length - t[1].length) }); if (e.each(o, function (e, t) { var s = t[1]; return i.substr(u, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], u += s.length, !1) : void 0 }), -1 !== a) return a + 1; throw "Unknown name at position " + u }, x = function () { if (i.charAt(u) !== t.charAt(n)) throw "Unexpected literal at position " + u; u++ }; for (n = 0; n < t.length; n++)if (y) "'" !== t.charAt(n) || k("'") ? x() : y = !1; else switch (t.charAt(n)) { case "d": f = b("d"); break; case "D": D("D", c, d); break; case "o": _ = b("o"); break; case "m": g = b("m"); break; case "M": g = D("M", p, m); break; case "y": v = b("y"); break; case "@": r = new Date(b("@")), v = r.getFullYear(), g = r.getMonth() + 1, f = r.getDate(); break; case "!": r = new Date((b("!") - this._ticksTo1970) / 1e4), v = r.getFullYear(), g = r.getMonth() + 1, f = r.getDate(); break; case "'": k("'") ? x() : y = !0; break; default: x() }if (u < i.length && (o = i.substr(u), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o; if (-1 === v ? v = (new Date).getFullYear() : 100 > v && (v += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (v > h ? -100 : 0)), _ > -1) for (g = 1, f = _; ;) { if (a = this._getDaysInMonth(v, g - 1), a >= f) break; g++, f -= a } if (r = this._daylightSavingAdjust(new Date(v, g - 1, f)), r.getFullYear() !== v || r.getMonth() + 1 !== g || r.getDate() !== f) throw "Invalid date"; return r }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7, formatDate: function (e, t, i) { if (!t) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, u = function (t) { var i = s + 1 < e.length && e.charAt(s + 1) === t; return i && s++, i }, l = function (e, t, i) { var s = "" + t; if (u(e)) for (; s.length < i;)s = "0" + s; return s }, h = function (e, t, i, s) { return u(e) ? s[t] : i[t] }, c = "", d = !1; if (t) for (s = 0; s < e.length; s++)if (d) "'" !== e.charAt(s) || u("'") ? c += e.charAt(s) : d = !1; else switch (e.charAt(s)) { case "d": c += l("d", t.getDate(), 2); break; case "D": c += h("D", t.getDay(), n, a); break; case "o": c += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": c += l("m", t.getMonth() + 1, 2); break; case "M": c += h("M", t.getMonth(), o, r); break; case "y": c += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100; break; case "@": c += t.getTime(); break; case "!": c += 1e4 * t.getTime() + this._ticksTo1970; break; case "'": u("'") ? c += "'" : d = !0; break; default: c += e.charAt(s) }return c }, _possibleChars: function (e) { var t, i = "", s = !1, n = function (i) { var s = t + 1 < e.length && e.charAt(t + 1) === i; return s && t++, s }; for (t = 0; t < e.length; t++)if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += e.charAt(t) }return i }, _get: function (e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] }, _setDateFromField: function (e, t) { if (e.input.val() !== e.lastVal) { var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null, n = this._getDefaultDate(e), a = n, o = this._getFormatConfig(e); try { a = this.parseDate(i, s, o) || n } catch (r) { s = t ? "" : s } e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e) } }, _getDefaultDate: function (e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) }, _determineDate: function (t, i, s) { var n = function (e) { var t = new Date; return t.setDate(t.getDate() + e), t }, a = function (i) { try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = u.exec(i); l;) { switch (l[2] || "d") { case "d": case "D": r += parseInt(l[1], 10); break; case "w": case "W": r += 7 * parseInt(l[1], 10); break; case "m": case "M": o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)); break; case "y": case "Y": a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)) }l = u.exec(i) } return new Date(a, o, r) }, o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return o = o && "" + o == "Invalid Date" ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o) }, _daylightSavingAdjust: function (e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null }, _setDate: function (e, t, i) { var s = !t, n = e.selectedMonth, a = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date)); e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e)) }, _getDate: function (e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t }, _attachHandlers: function (t) { var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\"); t.dpDiv.find("[data-handler]").map(function () { var t = { prev: function () { e.datepicker._adjustDate(s, -i, "M") }, next: function () { e.datepicker._adjustDate(s, +i, "M") }, hide: function () { e.datepicker._hideDatepicker() }, today: function () { e.datepicker._gotoToday(s) }, selectDay: function () { return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return e.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return e.datepicker._selectMonthYear(s, this, "Y"), !1 } }; e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]) }) }, _generateHTML: function (e) { var t, i, s, n, a, o, r, u, l, h, c, d, p, m, v, g, f, _, y, k, b, D, x, w, M, T, I, C, E, N, A, S, P, R, L, F, O, j, W, Y = new Date, K = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth(), Y.getDate())), q = this._get(e, "isRTL"), B = this._get(e, "showButtonPanel"), U = this._get(e, "hideIfNoPrevNext"), z = this._get(e, "navigationAsDateFormat"), G = this._getNumberOfMonths(e), H = this._get(e, "showCurrentAtPos"), $ = this._get(e, "stepMonths"), Q = 1 !== G[0] || 1 !== G[1], J = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), V = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - H, et = e.drawYear; if (0 > Z && (Z += 12, et--), X) for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - G[0] * G[1] + 1, X.getDate())), t = V && V > t ? V : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--); for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - $, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>" : U ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = z ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + $, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>" : U ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? J : K, o = z ? this.formatDate(o, r, this._getFormatConfig(e)) : o, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? u : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (q ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, c = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), m = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), f = this._get(e, "showOtherMonths"), _ = this._get(e, "selectOtherMonths"), y = this._getDefaultDate(e), k = "", D = 0; D < G[0]; D++) { for (x = "", this.maxRows = 4, w = 0; w < G[1]; w++) { if (M = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), T = " ui-corner-all", I = "", Q) { if (I += "<div class='ui-datepicker-group", G[1] > 1) switch (w) { case 0: I += " ui-datepicker-group-first", T = " ui-corner-" + (q ? "right" : "left"); break; case G[1] - 1: I += " ui-datepicker-group-last", T = " ui-corner-" + (q ? "left" : "right"); break; default: I += " ui-datepicker-group-middle", T = "" }I += "'>" } for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === D ? q ? a : s : "") + (/all|right/.test(T) && 0 === D ? q ? s : a : "") + this._generateMonthYearHeader(e, Z, et, V, X, D > 0 || w > 0, m, v) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++)E = (b + h) % 7, C += "<th scope='col'" + (5 > (b + h + 6) % 7 ? "" : " class='ui-datepicker-week-end'") + "><span title='" + d[E] + "'>" + p[E] + "</span></th>"; for (I += C + "</tr></thead><tbody>", N = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, N)), A = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((A + N) / 7), P = Q && this.maxRows > S ? this.maxRows : S, this.maxRows = P, R = this._daylightSavingAdjust(new Date(et, Z, 1 - A)), L = 0; P > L; L++) { for (I += "<tr>", F = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(R) + "</td>" : "", b = 0; 7 > b; b++)O = g ? g.apply(e.input ? e.input[0] : null, [R]) : [!0, ""], j = R.getMonth() !== Z, W = j && !_ || !O[0] || V && V > R || X && R > X, F += "<td class='" + (5 > (b + h + 6) % 7 ? "" : " ui-datepicker-week-end") + (j ? " ui-datepicker-other-month" : "") + (R.getTime() === M.getTime() && Z === e.selectedMonth && e._keyEvent || y.getTime() === R.getTime() && y.getTime() === M.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !f ? "" : " " + O[1] + (R.getTime() === J.getTime() ? " " + this._currentClass : "") + (R.getTime() === K.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !f || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + R.getMonth() + "' data-year='" + R.getFullYear() + "'") + ">" + (j && !f ? "&#xa0;" : W ? "<span class='ui-state-default'>" + R.getDate() + "</span>" : "<a class='ui-state-default" + (R.getTime() === K.getTime() ? " ui-state-highlight" : "") + (R.getTime() === J.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + R.getDate() + "</a>") + "</td>", R.setDate(R.getDate() + 1), R = this._daylightSavingAdjust(R); I += F + "</tr>" } Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (G[0] > 0 && w === G[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += I } k += x } return k += l, e._keyEvent = !1, k }, _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
      var u, l, h, c, d, p, m, v, g = this._get(e, "changeMonth"), f = this._get(e, "changeYear"), _ = this._get(e, "showMonthAfterYear"), y = "<div class='ui-datepicker-title'>", k = ""; if (a || !g) k += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
      else { for (u = s && s.getFullYear() === i, l = n && n.getFullYear() === i, k += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)u && h < s.getMonth() || l && h > n.getMonth() || (k += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + r[h] + "</option>"); k += "</select>" } if (_ || (y += k + (!a && g && f ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !f) y += "<span class='ui-datepicker-year'>" + i + "</span>"; else { for (c = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? d : t }, m = p(c[0]), v = Math.max(m, p(c[1] || "")), m = s ? Math.max(m, s.getFullYear()) : m, v = n ? Math.min(v, n.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; v >= m; m++)e.yearshtml += "<option value='" + m + "'" + (m === i ? " selected='selected'" : "") + ">" + m + "</option>"; e.yearshtml += "</select>", y += e.yearshtml, e.yearshtml = null } return y += this._get(e, "yearSuffix"), _ && (y += (!a && g && f ? "" : "&#xa0;") + k), y += "</div>"
    }, _adjustInstDate: function (e, t, i) { var s = e.drawYear + ("Y" === i ? t : 0), n = e.drawMonth + ("M" === i ? t : 0), a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a))); e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e) }, _restrictMinMax: function (e, t) { var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), n = i && i > t ? i : t; return s && n > s ? s : n }, _notifyChange: function (e) { var t = this._get(e, "onChangeMonthYear"); t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]) }, _getNumberOfMonths: function (e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t }, _getMinMaxDate: function (e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) }, _getDaysInMonth: function (e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() }, _getFirstDayOfMonth: function (e, t) { return new Date(e, t, 1).getDay() }, _canAdjustMonth: function (e, t, i, s) { var n = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1)); return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a) }, _isInRange: function (e, t) { var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null, u = this._get(e, "yearRange"); return u && (i = u.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), !(n && t.getTime() < n.getTime() || a && t.getTime() > a.getTime() || o && t.getFullYear() < o || r && t.getFullYear() > r) }, _getFormatConfig: function (e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } }, _formatDate: function (e, t, i, s) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e)) }
  }), e.fn.datepicker = function (t) { if (!this.length) return this; e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4"; e.datepicker
});


