"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_openabap_fugr_conversion_exit_alpha_input_mjs"],{

/***/ "./output/openabap.fugr.conversion_exit_alpha_input.mjs":
/*!**************************************************************!*\
  !*** ./output/openabap.fugr.conversion_exit_alpha_input.mjs ***!
  \**************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// openabap.fugr.conversion_exit_alpha_input.abap\nconst constant_1 = new abap.types.Integer().set(1);\nasync function conversion_exit_alpha_input(INPUT) {\n  // importing INPUT CLIKE\n  let input = INPUT.exporting.input;\n  // exporting OUTPUT CLIKE\n  let output = INPUT.importing.output;\n  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n}\nabap.FunctionModules['CONVERSION_EXIT_ALPHA_INPUT'] = conversion_exit_alpha_input;\n//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_input.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/openabap.fugr.conversion_exit_alpha_input.mjs?");

/***/ })

}]);