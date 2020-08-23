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
}); // переключение по миниатюрам слайдер отзывов

$('body').on('click', '.sliderVideoThumbReviews .slick-slide', function (e) {
  e.preventDefault();
  var slideIndex = parseInt($(this).attr('data-slick-index'));
  $('.sliderVideoReviews').find('.slick-dots li:nth-child(' + (slideIndex + 1) + ')').trigger('click');
}); // если устройство планшет показываем элементы по клику т.к. ховера на тач устройствах нет

if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {} //- end is-device-tablet


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

function init() {
  var center = {
    lat: 55.754599,
    lng: 37.623761
  };
  var map = new google.maps.Map($('#map')[0], {
    zoom: 12,
    center: center,
    clickableIcons: false,
    scrollwheel: false,
    mapTypeControl: false,
    panControl: false,
    streetViewControl: false,
    zoomControl: true,
    fullscreenControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#d6d9dd"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#202327"
      }, {
        "lightness": 20
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f2f2f2"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  });

  var offsetCenter = function offsetCenter(dx, dy) {
    return {
      lat: dx,
      lng: dy
    };
  };

  var placements = [{
    type: 'top',
    title: 'Медицинская перевозка №1',
    phone1: '+7 495 151 03 01',
    phone2: '+7 925 204 50 30',
    phone1Together: '+74951510301',
    phone2Together: '+79252045030',
    email: 'medperevozka1@gmail.com',
    adress: 'Москва, ул. Петровка 15, стр.1.',
    LatLng: offsetCenter(55.784341, 37.544454)
  }, {
    type: 'top',
    title: 'Медицинская перевозка №1',
    phone1: '+7 495 151 03 01',
    phone2: '+7 925 204 50 30',
    phone1Together: '+74951510301',
    phone2Together: '+79252045030',
    email: 'medperevozka1@gmail.com',
    adress: 'Москва, ул. Петровка 15, стр.1.',
    LatLng: offsetCenter(55.715167, 37.561620)
  }, {
    type: 'top',
    title: 'Медицинская перевозка №1',
    phone1: '+7 495 151 03 01',
    phone2: '+7 925 204 50 30',
    phone1Together: '+74951510301',
    phone2Together: '+79252045030',
    email: 'medperevozka1@gmail.com',
    adress: 'Москва, ул. Петровка 15, стр.1.',
    LatLng: offsetCenter(55.686920, 37.617925)
  }, {
    type: 'top',
    title: 'Медицинская перевозка №1',
    phone1: '+7 495 151 03 01',
    phone2: '+7 925 204 50 30',
    phone1Together: '+74951510301',
    phone2Together: '+79252045030',
    email: 'medperevozka1@gmail.com',
    adress: 'Москва, ул. Петровка 15, стр.1.',
    LatLng: offsetCenter(55.795730, 37.656182)
  }, {
    type: 'top',
    title: 'Медицинская перевозка №1',
    phone1: '+7 495 151 03 01',
    phone2: '+7 925 204 50 30',
    phone1Together: '+74951510301',
    phone2Together: '+79252045030',
    email: 'medperevozka1@gmail.com',
    adress: 'Москва, ул. Петровка 15, стр.1.',
    LatLng: offsetCenter(55.713039, 37.723473)
  }];
  $.each(placements, function (i, e) {
    var marker = new google.maps.Marker({
      map: map,
      position: e.LatLng,
      icon: {
        url: "images/marker.png",
        scaledSize: new google.maps.Size(126, 111)
      }
    });
    var info = new SnazzyInfoWindow($.extend({}, {
      marker: marker,
      placement: e.type,
      content: '<div class="baloon-content">' + '<div class="h2 baloon-title">' + e.title + '</div>' + '<div class="baloon-sub-title">Телефоны</div>' + '<ul class="baloon-phone">' + '<li><a href="tel:' + e.phone1Together + '">' + e.phone1 + '</a></li>' + '<li><a href="tel:' + e.phone2Together + '">' + e.phone2 + '</a></li>' + '</ul>' + '<div class="baloon-sub-title">Электронная почта</div>' + '<ul class="baloon-email">' + '<li><a href="mailto:' + e.email + '">' + e.email + '</a></li>' + '</ul>' + '<div class="baloon-sub-title">Фактический адрес</div>' + '<ul class="baloon-adress">' + '<li>' + e.adress + '</li>' + '</ul>' + '</div>',
      panOnOpen: true,
      closeWhenOthersOpen: true,
      shadow: false,
      //  shadow: {
      //   h: '0px',
      //   v: '63px',
      //   blur: '128px',
      //   spread: '0px',
      //   opacity: 0.21,
      //   color: '#14232d'
      // },
      offset: {
        top: '15px',
        left: '-23px'
      },
      borderRadius: '236px',
      border: false,
      maxWidth: 472,
      showCloseButton: false,
      wrapperClass: 'baloon-wrap'
    }));
  });

  var offsetSize = function offsetSize(dx, dy) {
    return new google.maps.Size(dx, dy);
  };

  var markerCars = [{
    LatLng: offsetCenter(55.760406, 37.554285),
    url: 'images/marker-car-1.png',
    size: offsetSize(138, 97)
  }, {
    LatLng: offsetCenter(55.703308, 37.581699),
    url: 'images/marker-car-2.png',
    size: offsetSize(103, 138)
  }, {
    LatLng: offsetCenter(55.723898, 37.653121),
    url: 'images/marker-car-3.png',
    size: offsetSize(140, 95)
  }, {
    LatLng: offsetCenter(55.774181, 37.730239),
    url: 'images/marker-car-4.png',
    size: offsetSize(97, 139)
  }, {
    LatLng: offsetCenter(55.710597, 37.758816),
    url: 'images/marker-car-5.png',
    size: offsetSize(138, 107)
  }];
  $.each(markerCars, function (i, e) {
    new google.maps.Marker({
      map: map,
      position: e.LatLng,
      icon: {
        url: e.url,
        scaledSize: e.size
      }
    });
  });
}

try {
  if ($('#map')) {
    google.maps.event.addDomListener(window, 'load', init);
  }
} catch (e) {}

function loadPage() {
  try {
    if ($('#map1')) {
      myMap();
    }
  } catch (e) {}
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
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_6__);







try {
  var initParalax = function initParalax(destroyParam) {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#scene').length > 0) {
      var scene = document.getElementById('scene');
      var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_4___default.a(scene);
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#medicalScene').length > 0) {
      var medicalScene = document.getElementById('medicalScene');
      var parallaxInstanceMedical = new parallax_js__WEBPACK_IMPORTED_MODULE_4___default.a(medicalScene);
    }

    if (destroyParam) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#scene').length > 0) {
        parallaxInstance.destroy();
        parallaxInstance = null;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#medicalScene').length > 0) {
        parallaxInstanceMedical.destroy();
        parallaxInstanceMedical = null;
      }
    }
  };

  var loadPageParalax = function loadPageParalax() {
    var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).outerWidth();

    if (windowWidth >= 768) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#scene') || jquery__WEBPACK_IMPORTED_MODULE_2___default()('#medicalScene')) {
        initParalax();
      }
    }
  }; //end loadPageParalax


  var resizePageParalax = function resizePageParalax() {
    var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).outerWidth();

    if (windowWidth <= 767) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#scene') || jquery__WEBPACK_IMPORTED_MODULE_2___default()('#medicalScene')) {
        initParalax(true);
      }
    }

    if (windowWidth >= 768) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#scene') || jquery__WEBPACK_IMPORTED_MODULE_2___default()('#medicalScene')) {
        initParalax();
      }
    }
  }; //end resizePageParalax


  window.addEventListener("load", loadPageParalax);
  window.addEventListener("resize", resizePageParalax);
} catch (e) {} // import 'aos';
// import 'uikit-icons.min.js';


 // import 'magnific-popup';
// import 'jquery-datetimepicker';
// import 'jquery-mousewheel';
// import 'malihu-custom-scrollbar-plugin';

svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js"); // $('input[type=tel]').inputmask("+7 999 999 9999");
// require("jquery-mousewheel");
// require('malihu-custom-scrollbar-plugin');

/***/ })

/******/ });
//# sourceMappingURL=main.js.map