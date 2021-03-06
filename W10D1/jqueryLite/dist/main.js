/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(htmlElements) {\n        this.elements = htmlElements;\n    }\n    html(str) {\n        if (str) {\n            this.elements.forEach(el => {\n                el.innerHTML = str;\n            });\n        } else {\n            return this.elements[0].innerHTML;\n        }\n    }\n    empty() {\n        this.elements.forEach(el => {\n            el.innerHTML = \"\";\n        });\n    }\n\n    append(arg) {\n        if (arg instanceof HTMLElement){\n            this.elements.forEach(el => {\n                el.innerHTML = arg.outerHTML;\n            });\n        } else if (arg instanceof String) {\n            this.elements.forEach(el => {\n                el.innerHTML = arg;\n            });\n        } else if (arg instanceof DOMNodeCollection) {\n            arg.elements.forEach(el => {\n                this.elements.forEach(el2 => {\n                    el2.innerHTML = el.outerHTML;\n                });\n            });\n        }\n    }\n\n    addClass(name) {\n        this.elements.forEach(el => {\n            el.classList.add(name);\n        });\n    }\n\n    removeClass(name) {\n        this.elements.forEach(el => {\n            el.classList.remove(name);\n        })\n    }\n\n    attr(attrName, value) {\n        if (!value) {\n            return this.elements[0].getAttribute(attrName);\n        } else {\n            this.elements.forEach(el => {\n                el.setAttribute(attrName, value);\n            })\n        }\n    }\n\n    children() {\n        const childrenArr = [];\n        this.elements.forEach(el => {\n            childrenArr.push(el.children);\n        })\n        return new DOMNodeCollection(childrenArr);\n    }\n\n    \n}\n\nmodule.exports = DOMNodeCollection\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n    if (arg instanceof HTMLElement) {\n        const nodes = new DOMNodeCollection([arg])\n        return nodes;\n    } else {\n        let nodes = document.querySelectorAll(arg);\n        console.log(nodes);\n        let nodesArr = Array.from(nodes);\n        nodes = new DOMNodeCollection(nodesArr);\n        return nodes;\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;