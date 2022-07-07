"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_openabap_fugr_get_system_timezone_mjs"],{

/***/ "./output/openabap.fugr.get_system_timezone.mjs":
/*!******************************************************!*\
  !*** ./output/openabap.fugr.get_system_timezone.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// openabap.fugr.get_system_timezone.abap\nasync function get_system_timezone(input) {\n  // exporting TIMEZONE TIMEZONE\n  let timezone = input.importing.timezone;\n  timezone.set(new abap.types.Character({length: 3}).set('UTC'));\n}\nabap.FunctionModules['GET_SYSTEM_TIMEZONE'] = get_system_timezone;\n//# sourceMappingURL=openabap.fugr.get_system_timezone.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/openabap.fugr.get_system_timezone.mjs?");

/***/ })

}]);