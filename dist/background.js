/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    pluginEnabled: true
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostEquals: 'web.whatsapp.com'
        }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
/******/ })()
;