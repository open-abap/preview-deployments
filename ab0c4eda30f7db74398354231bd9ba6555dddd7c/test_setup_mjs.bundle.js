/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["test_setup_mjs"],{

/***/ "?d546":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/crypto_(ignored)?");

/***/ }),

/***/ "?cd53":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/stream_(ignored)?");

/***/ }),

/***/ "?4068":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?e7e4":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?7bec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?0aec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?fbf1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/buffer_(ignored)?");

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/util_(ignored)?");

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/util_(ignored)?");

/***/ }),

/***/ "?5041":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://open-table-maintenance/fs_(ignored)?");

/***/ }),

/***/ "./test/setup.mjs":
/*!************************!*\
  !*** ./test/setup.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abaplint/database-sqlite */ \"./node_modules/@abaplint/database-sqlite/build/index.js\");\n\n\nasync function setup(abap, schemas, insert) {\n  abap.context.databaseConnections[\"DEFAULT\"] = new _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLiteDatabaseClient();\n  await abap.context.databaseConnections[\"DEFAULT\"].connect();\n  await abap.context.databaseConnections[\"DEFAULT\"].execute(schemas.sqlite);\n  await abap.context.databaseConnections[\"DEFAULT\"].execute(insert);\n}\n\n//# sourceURL=webpack://open-table-maintenance/./test/setup.mjs?");

/***/ })

}]);