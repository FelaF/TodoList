/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nconsole.log(_todo_js__WEBPACK_IMPORTED_MODULE_0__.createToDo, _todo_js__WEBPACK_IMPORTED_MODULE_0__.createToDoList)\n\ngettingGroceries = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createToDo)(\"Groceries\", \"milk, eggs, and bread\",\"12-25-25\")\ntakeOutTrash = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createToDo)(\"Trash\", \"Take out three bags of trash\",\"12-26-25\")\n\nDecTDL = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createToDoList)()\nDecTDL.addTask(gettingGroceries)\ntakeOutTrash.setPriority(1)\nDecTDL.addTask(takeOutTrash)\nDecTDL.displayList()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDo: () => (/* binding */ createToDo),\n/* harmony export */   createToDoList: () => (/* binding */ createToDoList)\n/* harmony export */ });\nconst createToDo = function(title, description, dueDate){\n    let priority = 0\n    let checked = false\n    const changeCheck = () => {\n        checked = !checked\n    }\n    const getCheck = () => checked\n    const setPriority = function(priorityValue){\n        priority = priorityValue\n    }\n    const getPriority = () => {\n        return priority\n    }\n    \n    return {title, description, dueDate, getCheck, changeCheck, setPriority, getPriority}\n}\n\nconst createToDoList = () => {\n    let tasks = []\n    const addTask = function(task){\n        task.setPriority(tasks.length + 1) \n        tasks.push(task)\n    }\n    const deleteTask = function(title){\n        tasks = tasks.filter(task => task.title !== title)\n    }\n    const sortTasksByPriority = () => {\n        tasks.sort((a, b) => a.getPriority() - b.getPriority())\n    }\n    const displayList = () => {\n        tasks.forEach(task => {\n            console.log(task.title);\n            console.log(task.getPriority());\n        });\n    }\n    return {addTask, deleteTask, sortTasksByPriority, displayList}\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;