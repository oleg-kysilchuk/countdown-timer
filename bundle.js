/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");

var clock = document.getElementById('clock');
var daysLeft = clock.querySelector('#days');
var hoursLeft = clock.querySelector('#hours');
var minutesLeft = clock.querySelector('#minutes');
var secondsLeft = clock.querySelector('#seconds');
var dateForm = document.querySelector('#date-form');

function getTimeRemained(timeLeft) {
  var totalTime = Date.parse(timeLeft) - Date.parse(new Date());
  var days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(totalTime / (1000 * 60 * 60) % 24);
  var minutes = Math.floor(totalTime / 1000 / 60 % 60);
  var seconds = Math.floor(totalTime / 1000 % 60);
  return {
    totalTime: totalTime,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
} // get remained time function


function setClock(total) {
  var refreshInterval = setInterval(function () {
    var t = getTimeRemained(total);
    daysLeft.innerHTML = t.days;
    hoursLeft.innerHTML = ('0' + t.hours).slice(-2);
    minutesLeft.innerHTML = ('0' + t.minutes).slice(-2);
    secondsLeft.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.totalTime <= 0) {
      clearInterval(refreshInterval);
    } //disabling clock when 0 time remained

  }, 1000); // updating clock function
} // initializing clock function


dateForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var dateValue = document.querySelector('#newDate');
  var deadline = dateValue.value;
  setClock(deadline);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map