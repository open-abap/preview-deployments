"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_openabap_fugr_convert_itf_to_stream_text_mjs"],{

/***/ "./output/openabap.fugr.convert_itf_to_stream_text.mjs":
/*!*************************************************************!*\
  !*** ./output/openabap.fugr.convert_itf_to_stream_text.mjs ***!
  \*************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// openabap.fugr.convert_itf_to_stream_text.abap\nconst constant_1 = new abap.types.Integer().set(1);\nasync function convert_itf_to_stream_text(INPUT) {\n  // importing LF undefined\n  let lf = INPUT.exporting.lf;\n  // exporting STREAM_LINES STRING_TABLE\n  let stream_lines = INPUT.importing.stream_lines;\n  // tables ITF_TEXT TLINE\n  let itf_text = INPUT.tables.itf_text;\n  // tables TEXT_STREAM undefined\n  let text_stream = INPUT.tables.text_stream;\n  abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));\n}\nabap.FunctionModules['CONVERT_ITF_TO_STREAM_TEXT'] = convert_itf_to_stream_text;\n//# sourceMappingURL=openabap.fugr.convert_itf_to_stream_text.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/openabap.fugr.convert_itf_to_stream_text.mjs?");

/***/ })

}]);