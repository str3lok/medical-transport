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
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* eslint-disable no-new */


(function ($) {
  var iPhone = window.orientation != undefined;
  $.mask = {
    //Predefined character definitions
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      '*': "[A-Za-z0-9]"
    }
  };
  $.fn.extend({
    //Helper Function for Caret positioning
    caret: function caret(begin, end) {
      if (this.length == 0) return;

      if (typeof begin == 'number') {
        end = typeof end == 'number' ? end : begin;
        return this.each(function () {
          if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          var range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }

        return {
          begin: begin,
          end: end
        };
      }
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(_mask, settings) {
      if (!_mask && this.length > 0) {
        var input = $(this[0]);
        var tests = input.data("tests");
        return $.map(input.data("buffer"), function (c, i) {
          return tests[i] ? c : null;
        }).join('');
      }

      settings = $.extend({
        placeholder: "_",
        completed: null
      }, settings);
      var defs = $.mask.definitions;
      var tests = [];
      var partialPosition = _mask.length;
      var firstNonMaskPos = null;
      var len = _mask.length;
      $.each(_mask.split(""), function (i, c) {
        if (c == '?') {
          len--;
          partialPosition = i;
        } else if (defs[c]) {
          tests.push(new RegExp(defs[c]));
          if (firstNonMaskPos == null) firstNonMaskPos = tests.length - 1;
        } else {
          tests.push(null);
        }
      });
      return this.each(function () {
        var input = $(this);
        var buffer = $.map(_mask.split(""), function (c, i) {
          if (c != '?') return defs[c] ? settings.placeholder : c;
        });
        var ignore = false; //Variable for ignoring control keys

        var focusText = input.val();
        input.data("buffer", buffer).data("tests", tests);

        function seekNext(pos) {
          while (++pos <= len && !tests[pos]) {
            ;
          }

          return pos;
        }

        ;

        function shiftL(pos) {
          while (!tests[pos] && --pos >= 0) {
            ;
          }

          for (var i = pos; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder;
              var j = seekNext(i);

              if (j < len && tests[i].test(buffer[j])) {
                buffer[i] = buffer[j];
              } else break;
            }
          }

          writeBuffer();
          input.caret(Math.max(firstNonMaskPos, pos));
        }

        ;

        function shiftR(pos) {
          for (var i = pos, c = settings.placeholder; i < len; i++) {
            if (tests[i]) {
              var j = seekNext(i);
              var t = buffer[i];
              buffer[i] = c;
              if (j < len && tests[j].test(t)) c = t;else break;
            }
          }
        }

        ;

        function keydownEvent(e) {
          var pos = $(this).caret();
          var k = e.keyCode;
          ignore = k < 16 || k > 16 && k < 32 || k > 32 && k < 41; //delete selection before proceeding

          if (pos.begin - pos.end != 0 && (!ignore || k == 8 || k == 46)) clearBuffer(pos.begin, pos.end); //backspace, delete, and escape get special treatment

          if (k == 8 || k == 46 || iPhone && k == 127) {
            //backspace/delete
            shiftL(pos.begin + (k == 46 ? 0 : -1));
            return false;
          } else if (k == 27) {
            //escape
            input.val(focusText);
            input.caret(0, checkVal());
            return false;
          }
        }

        ;

        function keypressEvent(e) {
          if (ignore) {
            ignore = false; //Fixes Mac FF bug on backspace

            return e.keyCode == 8 ? false : null;
          }

          e = e || window.event;
          var k = e.charCode || e.keyCode || e.which;
          var pos = $(this).caret();

          if (e.ctrlKey || e.altKey || e.metaKey) {
            //Ignore
            return true;
          } else if (k >= 32 && k <= 125 || k > 186) {
            //typeable characters
            var p = seekNext(pos.begin - 1);

            if (p < len) {
              var c = String.fromCharCode(k);

              if (tests[p].test(c)) {
                shiftR(p);
                buffer[p] = c;
                writeBuffer();
                var next = seekNext(p);
                $(this).caret(next);
                if (settings.completed && next == len) settings.completed.call(input);
              }
            }
          }

          return false;
        }

        ;

        function clearBuffer(start, end) {
          for (var i = start; i < end && i < len; i++) {
            if (tests[i]) buffer[i] = settings.placeholder;
          }
        }

        ;

        function writeBuffer() {
          return input.val(buffer.join('')).val();
        }

        ;

        function checkVal(allow) {
          //try to place characters where they belong
          var test = input.val();
          var lastMatch = -1;

          for (var i = 0, pos = 0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder;

              while (pos++ < test.length) {
                var c = test.charAt(pos - 1);

                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) break;
            } else if (buffer[i] == test[pos] && i != partialPosition) {
              pos++;
              lastMatch = i;
            }
          }

          if (!allow && lastMatch + 1 < partialPosition) {
            input.val("");
            clearBuffer(0, len);
          } else if (allow || lastMatch + 1 >= partialPosition) {
            writeBuffer();
            if (!allow) input.val(input.val().substring(0, lastMatch + 1));
          }

          return partialPosition ? i : firstNonMaskPos;
        }

        ;
        if (!input.attr("readonly")) input.one("unmask", function () {
          input.unbind(".mask").removeData("buffer").removeData("tests");
        }).bind("focus.mask", function () {
          focusText = input.val();
          var pos = checkVal();
          writeBuffer();
          setTimeout(function () {
            if (pos == _mask.length) input.caret(0, pos);else input.caret(pos);
          }, 0);
        }).bind("blur.mask", function () {
          checkVal();
          if (input.val() != focusText) input.change();
        }).bind("keydown.mask", keydownEvent).bind("keypress.mask", keypressEvent, function () {
          setTimeout(function () {
            input.caret(checkVal(true));
          }, 0);
        });
        checkVal(); //Perform initial check for existing values
      });
    }
  });
})(jQuery); // AOS.init();
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
  // console.log('beforeChange');
  // console.log(slick.$prev, slick.$next);
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
}); // если устройство планшет показываем элементы по клику т.к. ховера на тач устройствах нет

if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {} //- end is-device-tablet


$("input[type=tel]").mask('+7 999 999 9999'); // добавляем скроллбар при фиксированной высоте страницы

function loadPage() {
  try {// if ($('.wrapper').hasClass('wrapper__scroll')) {
    //   $('.wrapper').addClass('pageLoaded');
    // }
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
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_5__);






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

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js"); // require("jquery-mousewheel");
// require('malihu-custom-scrollbar-plugin');

/***/ })

/******/ });
//# sourceMappingURL=main.js.map