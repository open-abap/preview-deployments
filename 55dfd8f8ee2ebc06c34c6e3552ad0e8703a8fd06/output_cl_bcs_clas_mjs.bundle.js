"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_bcs_clas_mjs"],{

/***/ "./output/cl_bcs.clas.mjs":
/*!********************************!*\
  !*** ./output/cl_bcs.clas.mjs ***!
  \********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_bcs\": () => (/* binding */ cl_bcs)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_bcs.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_bcs {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async set_document(INPUT) {\n    let i_document = new abap.types.ABAPObject({qualifiedName: \"IF_DOCUMENT_BCS\"});\n    if (INPUT && INPUT.i_document) {i_document.set(INPUT.i_document);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async send(INPUT) {\n    let result = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let i_with_error_screen = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_with_error_screen) {i_with_error_screen = INPUT.i_with_error_screen;}\n    if (INPUT === undefined || INPUT.i_with_error_screen === undefined) {i_with_error_screen = abap.builtin.abap_false;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return result;\n  }\n  async create_persistent() {\n    return cl_bcs.create_persistent();\n  }\n  static async create_persistent() {\n    let result = new abap.types.ABAPObject({qualifiedName: \"CL_BCS\"});\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return result;\n  }\n  async add_recipient(INPUT) {\n    let i_recipient = new abap.types.ABAPObject({qualifiedName: \"IF_RECIPIENT_BCS\"});\n    if (INPUT && INPUT.i_recipient) {i_recipient.set(INPUT.i_recipient);}\n    let i_express = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_express) {i_express = INPUT.i_express;}\n    let i_copy = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_copy) {i_copy = INPUT.i_copy;}\n    let i_blind_copy = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_blind_copy) {i_blind_copy = INPUT.i_blind_copy;}\n    let i_no_forward = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_no_forward) {i_no_forward = INPUT.i_no_forward;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CL_BCS'] = cl_bcs;\n\n//# sourceMappingURL=cl_bcs.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_bcs.clas.mjs?");

/***/ })

}]);