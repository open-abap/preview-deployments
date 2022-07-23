"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_http_server_clas_mjs"],{

/***/ "./output/cl_http_server.clas.mjs":
/*!****************************************!*\
  !*** ./output/cl_http_server.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_http_server\": () => (/* binding */ cl_http_server)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_http_server.clas.abap\nclass cl_http_server {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_location(INPUT) {\n    return cl_http_server.get_location(INPUT);\n  }\n  static async get_location(INPUT) {\n    let host = new abap.types.String();\n    if (INPUT && INPUT.host) {host = INPUT.host;}\n    host.set(new abap.types.Character({length: 13}).set('open-abap.org'));\n  }\n}\nabap.Classes['CL_HTTP_SERVER'] = cl_http_server;\n\n//# sourceMappingURL=cl_http_server.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_http_server.clas.mjs?");

/***/ })

}]);