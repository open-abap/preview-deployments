"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_progress_indicator_clas_mjs"],{

/***/ "./output/cl_progress_indicator.clas.mjs":
/*!***********************************************!*\
  !*** ./output/cl_progress_indicator.clas.mjs ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_progress_indicator\": () => (/* binding */ cl_progress_indicator)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_progress_indicator.clas.abap\nclass cl_progress_indicator {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async progress_indicate(INPUT) {\n    return cl_progress_indicator.progress_indicate(INPUT);\n  }\n  static async progress_indicate(INPUT) {\n    let i_text = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.i_text) {i_text = INPUT.i_text;}\n    let i_processed = new abap.types.Integer();\n    if (INPUT && INPUT.i_processed) {i_processed.set(INPUT.i_processed);}\n    let i_total = new abap.types.Integer();\n    if (INPUT && INPUT.i_total) {i_total.set(INPUT.i_total);}\n    let i_output_immediately = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_output_immediately) {i_output_immediately = INPUT.i_output_immediately;}\n    let e_progress_sent = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.e_progress_sent) {e_progress_sent = INPUT.e_progress_sent;}\n    return;\n  }\n}\nabap.Classes['CL_PROGRESS_INDICATOR'] = cl_progress_indicator;\n\n//# sourceMappingURL=cl_progress_indicator.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_progress_indicator.clas.mjs?");

/***/ })

}]);