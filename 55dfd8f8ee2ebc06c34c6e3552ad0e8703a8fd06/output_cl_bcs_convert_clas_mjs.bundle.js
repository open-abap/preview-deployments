"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_bcs_convert_clas_mjs"],{

/***/ "./output/cl_bcs_convert.clas.mjs":
/*!****************************************!*\
  !*** ./output/cl_bcs_convert.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_bcs_convert\": () => (/* binding */ cl_bcs_convert)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_bcs_convert.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_bcs_convert {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async string_to_soli(INPUT) {\n    return cl_bcs_convert.string_to_soli(INPUT);\n  }\n  static async string_to_soli(INPUT) {\n    let et_soli = new abap.types.Table(new abap.types.Structure({line: new abap.types.Character({length: 255, qualifiedName: \"SO_TEXT255\"})}, \"SOLI\"), {\"withHeader\":false});\n    let iv_string = new abap.types.String();\n    if (INPUT && INPUT.iv_string) {iv_string.set(INPUT.iv_string);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return et_soli;\n  }\n  async xstring_to_solix(INPUT) {\n    return cl_bcs_convert.xstring_to_solix(INPUT);\n  }\n  static async xstring_to_solix(INPUT) {\n    let et_solix = new abap.types.Table(new abap.types.Structure({line: new abap.types.Hex({length: 255})}, \"SOLIX\"), {\"withHeader\":false});\n    let iv_xstring = new abap.types.XString();\n    if (INPUT && INPUT.iv_xstring) {iv_xstring.set(INPUT.iv_xstring);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return et_solix;\n  }\n}\nabap.Classes['CL_BCS_CONVERT'] = cl_bcs_convert;\n\n//# sourceMappingURL=cl_bcs_convert.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_bcs_convert.clas.mjs?");

/***/ })

}]);