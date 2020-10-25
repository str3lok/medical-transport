/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");


/* eslint-disable no-new */


function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

if (isMobile()) $("body").addClass("mobile");

function scrollTo(to) {
  var $obj = jQuery('html, body');
  var top = 0;
  var speed = 500;
  var offsetX = 50;

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(to) == 'object') {
    top = to.offset().top;
  } else if (typeof to == 'string') {
    top = jQuery(to).offset().top;
  } else if (typeof to == 'number') {
    top = to;
  }

  if (arguments.length > 1) {
    if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      speed = arguments[1];
    } else if (typeof arguments[1] == 'string' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
        $obj = arguments[1];
      } else if (typeof arguments[1] == 'string') {
        $obj = jQuery(arguments[1]);
      }
    }

    if (typeof arguments[2] == 'number') {
      speed = arguments[2];
    }
  }

  if (jQuery(window).width() < 1000) {
    offsetX = 130;
  }

  if (speed == 0) {
    speed = 1;
  }

  $obj.animate({
    scrollTop: top - offsetX
  }, speed);
}

$('.btn-scroll').on('click', function (e) {
  e.preventDefault();
  scrollTo($($(this).attr('href')).offset().top, 1000);
}); // AOS.init();
//Воспроизведение видео    

$('.video-link').on('click', function (e) {
  e.preventDefault();
  var playVideoId = $(this).attr('data-videoId');
  var parentVideo = $(this).parent();
  $(parentVideo).prepend('<iframe id="video"' + playVideoId + '"  type="text/html" src="https://www.youtube.com/embed/' + playVideoId + '?rel=0&showinfo=0&controls=1&autoplay=1&wmode=opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe>');
  $(this).fadeOut();
});
$('.navbar-toggle-js').on('click', function (e) {
  e.preventDefault();
  $('html').addClass('htmlFix');
  $('body').addClass('navFix');
  $('.header-navbar').fadeIn();
}); // закрыть меню на мобильном

$('.nav-close-js').on('click', function (e) {
  e.preventDefault();
  $('html').removeClass('htmlFix');
  $('body').removeClass('navFix');
  $('.header-navbar').fadeOut();
}); // slider reviews

var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
  var cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var cur = $(slick.$slides[nextSlide]);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  var next = cur.next(),
      prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});
rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button class="prev-btn"> prev</button>',
  nextArrow: '<button class="next-btn"> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  touchThreshold: 10,
  responsive: [{
    breakpoint: 768,
    settings: {
      adaptiveHeight: true
    }
  }]
}); // slider reviews end 

$('.js-inputfile').on('change', function (event) {
  var label_text;

  if (event.target.files.length) {
    label_text = event.target.files[0].name;
    $('.file-feedback-name').text(label_text).addClass('is-active');
  }
});
$('body').on('click', '.numb-box-minus, .numb-box-plus', function (e) {
  e.preventDefault();
  var parentItem = $(this).closest('.calc-numb-box');
  var input = $(parentItem).find(".numb-val");
  var step = parseInt(input.attr("data-step"));
  var newVal = parseInt(input.val());
  newVal = $(this).is(".numb-box-plus") ? newVal + step : newVal - step;

  if (newVal >= 1) {
    input.val(newVal);
    input.trigger("change");
  }

  e.preventDefault();
});
$('.btn-disable-js').on('click', function (e) {
  e.preventDefault();
});

function tarifCalc() {
  var userName, userPhone, adress1, level1, adress2, level2;
  userName = $('.userName').val().length;
  userPhone = $('.userPhone').val().length;
  adress1 = $('.adress1').val().length;
  level1 = $('.level1').val().length;
  adress2 = $('.adress2').val().length;
  level2 = $('.level2').val().length;

  if (userName >= 2 && userPhone >= 15 && adress1 >= 5 && level1 >= 1 && adress2 >= 5 && level2 >= 1) {
    $('.btn-disable').removeClass('btn-disable-js').addClass('btn btn-red');
  } else {
    $('.btn-disable').addClass('btn-disable-js').removeClass('btn btn-red');
  }
}

$('.input-js').on('change, keyup', function () {
  tarifCalc();
}); // узнать стоимость

$('.btn-cost').on('click', function (e) {
  e.preventDefault();

  if (!$(this).hasClass('btn-disable-js')) {// выполняем подсчет
  }
}); //видео слайдер отзывов

$('.sliderVideoReviews').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  fade: true,
  dots: true
});
$('.sliderVideoThumbReviews').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  variableWidth: true
});
$('.sliderBookReviews').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.sliderDiscountInit').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});
$('.sliderUtpInit').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
}); // переключение по миниатюрам слайдер отзывов

$('body').on('click', '.sliderVideoThumbReviews .slick-slide', function (e) {
  e.preventDefault();
  var slideIndex = parseInt($(this).attr('data-slick-index'));
  $('.sliderVideoReviews').find('.slick-dots li:nth-child(' + (slideIndex + 1) + ')').trigger('click');
});

try {
  Inputmask("+7 999 999 9999").mask("input[type=tel]");
} catch (e) {}

function myMap() {
  var mapCanvas = document.getElementById("map1");
  var mapOptions = {
    center: new google.maps.LatLng(55.785142, 37.616122),
    zoom: 17,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function parallaxTransformX(boxId, boxChildOne, boxChildTwo) {
  var boxercontainer = document.getElementById(boxId);
  var windowWidthBoxer = $(window).outerWidth();
  var boxer = boxercontainer.querySelector("." + boxChildOne);
  var boxer2 = boxercontainer.querySelector("." + boxChildTwo);
  var boxerCenterX = boxer.offsetLeft + boxer.offsetWidth / 2;
  var boxerCenterY = boxer.offsetTop + boxer.offsetHeight / 2;
  var fluidboxer = window.matchMedia("(min-width: 1025px)");

  function getMousePos(xRef, yRef) {
    var panelRect = boxercontainer.getBoundingClientRect();
    return {
      x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * boxercontainer.offsetWidth,
      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * boxercontainer.offsetHeight
    };
  }

  document.getElementById(boxId).addEventListener("mousemove", function (e) {
    var mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - boxerCenterX,
        distY = mousePos.y - boxerCenterY;

    if (Math.abs(distX) < windowWidthBoxer && fluidboxer.matches) {
      boxer.style.transform = "translate(" + -1 * distX / 12 + "px," + 0 + "px)";
      boxer2.style.transform = "translate(" + -1 * distX / 16 + "px," + 0 + "px)";
    }
  });
}

function parallaxTransformXY(boxId, child1, child2, child3, child4, child5, child6, child7) {
  var boxercontainer = document.getElementById(boxId);
  var windowWidthBoxer = $(window).outerWidth();
  var boxer = boxercontainer.querySelector("." + child1);
  var boxer2 = boxercontainer.querySelector("." + child2);
  var boxer3 = boxercontainer.querySelector("." + child3);
  var boxer4 = boxercontainer.querySelector("." + child4);
  var boxer5 = boxercontainer.querySelector("." + child5);
  var boxer6 = boxercontainer.querySelector("." + child6);
  var boxer7 = boxercontainer.querySelector("." + child7);
  var boxerCenterX = boxer.offsetLeft + boxer.offsetWidth / 2;
  var boxerCenterY = boxer.offsetTop + boxer.offsetHeight / 2;
  var fluidboxer = window.matchMedia("(min-width: 1025px)");

  function getMousePos(xRef, yRef) {
    var panelRect = boxercontainer.getBoundingClientRect();
    return {
      x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * boxercontainer.offsetWidth,
      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * boxercontainer.offsetHeight
    };
  }

  document.getElementById(boxId).addEventListener("mousemove", function (e) {
    var mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - boxerCenterX,
        distY = mousePos.y - boxerCenterY;

    if (Math.abs(distX) < windowWidthBoxer && fluidboxer.matches) {
      boxer.style.transform = "translate(" + -1 * distX / 12 + "px," + -1 * distY / 12 + "px)";
      boxer2.style.transform = "translate(" + -1 * distX / 16 + "px," + -1 * distY / 16 + "px)";
      boxer3.style.transform = "translate(" + -1 * distX / 20 + "px," + -1 * distY / 20 + "px)";
      boxer4.style.transform = "translate(" + -1 * distX / 24 + "px," + -1 * distY / 24 + "px)";
      boxer5.style.transform = "translate(" + -1 * distX / 28 + "px," + -1 * distY / 28 + "px)";
      boxer6.style.transform = "translate(" + -1 * distX / 32 + "px," + -1 * distY / 32 + "px)";
      boxer7.style.transform = "translate(" + -1 * distX / 36 + "px," + -1 * distY / 36 + "px)";
    }
  });
}

try {
  if ($('#map')) {
    google.maps.event.addDomListener(window, 'load', init);
  }
} catch (e) {} // loadPage


function loadPage() {
  var windowWidth = $(window).outerWidth();

  try {
    if ($('#map1')) {
      myMap();
    }
  } catch (e) {}

  if (windowWidth >= 1025 && !$('body').hasClass('mobile')) {
    try {
      parallaxTransformX('medicalTransportation', 'medical-img2', 'medical-img1');
    } catch (e) {}

    try {
      parallaxTransformX('partnerAnimation', 'car-one', 'car-two');
    } catch (e) {}

    try {
      parallaxTransformXY('equipmentAnimation', 'eq1', 'eq2', 'eq3', 'eq4', 'eq5', 'eq6', 'eq7');
    } catch (e) {}
  }
} //end loadPage


window.addEventListener("load", loadPage);

function resizePage() {
  var windowWidth = $(window).outerWidth();

  if (windowWidth >= 768) {
    $('html').removeClass('htmlFix');
    $('body').removeClass('navFix');
    $('.header-navbar').removeAttr('style');
  }
} //end resizePage


window.addEventListener("resize", resizePage);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_5__);






svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map