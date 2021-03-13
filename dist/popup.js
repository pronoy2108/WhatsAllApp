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

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ (() => {

eval("var statusEnabled = document.getElementById(\"statusEnabled\");\nvar statusDisabled = document.getElementById(\"statusDisabled\");\n\nvar setEnabled = function setEnabled(val) {\n  chrome.storage.sync.set({\n    pluginEnabled: val\n  });\n  chrome.tabs.query({\n    active: true,\n    currentWindow: true\n  }, function (tabs) {\n    chrome.tabs.executeScript(tabs[0].id, {\n      code: 'window.location.reload()'\n    });\n    window.close();\n  });\n};\n\nchrome.storage.sync.get('pluginEnabled', function (data) {\n  if (data.pluginEnabled) {\n    statusEnabled.checked = true;\n  } else {\n    statusDisabled.checked = true;\n  }\n});\n\nstatusEnabled.onchange = function (e) {\n  setEnabled(e.target.checked);\n};\n\nstatusDisabled.onchange = function (e) {\n  setEnabled(!e.target.checked);\n};\n\n//# sourceURL=webpack://whats_all_app_community_edition/./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.js"]();
/******/ 	
/******/ })()
;