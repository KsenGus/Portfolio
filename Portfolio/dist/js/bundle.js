/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/links.js":
/*!*******************************!*\
  !*** ./src/js/parts/links.js ***!
  \*******************************/
/***/ ((module) => {

function links(){
    let hrefs = document.querySelectorAll('.promo a, .menu__item')
    for (let href of hrefs) {
        href.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(href.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    };
}
module.exports = links;

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/***/ ((module) => {

function menu(){
    let hamburger = document.querySelector('.hamburger'),
    _close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    counter = 0;

    hamburger.addEventListener('click', function(){
        counter ++;
        menu.style.display = 'block';
        if(counter == 2){
            menu.style.display = 'none';
            counter = 0;
        }
    });
    
    _close.addEventListener('click', function(){
        menu.style.display = 'none';
        counter = 0;
    });

    document.addEventListener( 'click', (e) => {
        if ( !(e.composedPath().includes(menu)) && !(e.composedPath().includes(hamburger))) {
                menu.style.display = 'none'; 
                counter = 0;
        }
    });
}
module.exports = menu;

/***/ }),

/***/ "./src/js/parts/portfolio.js":
/*!***********************************!*\
  !*** ./src/js/parts/portfolio.js ***!
  \***********************************/
/***/ ((module) => {

function portfolio(){
    let links = document.querySelectorAll('.portfolio__link'),
    portfolioContents = document.querySelectorAll('.portfolio__content');

    for(let i = 0; i< links.length; i++){
        links[i].addEventListener('click', function(){
            links.forEach((item) => {
                item.classList.remove('active');
            });
            links[i].classList.add('active');
            portfolioContents.forEach((item) =>{
                item.style.display = 'none';
            });
            portfolioContents[i].style.display = 'grid';
        })
    }
}
module.exports = portfolio;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let links = __webpack_require__(/*! ./parts/links.js */ "./src/js/parts/links.js"),
        menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js"),
        portfolio = __webpack_require__(/*! ./parts/portfolio.js */ "./src/js/parts/portfolio.js");
    links();
    menu();
    portfolio();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map