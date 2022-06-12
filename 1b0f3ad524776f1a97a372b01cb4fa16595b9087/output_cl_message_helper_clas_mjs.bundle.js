"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_message_helper_clas_mjs"],{

/***/ "./output/cl_message_helper.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_message_helper.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_message_helper\": () => (/* binding */ cl_message_helper)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_message_helper.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_message_helper {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async set_msg_vars_for_if_msg(INPUT) {\n    return cl_message_helper.set_msg_vars_for_if_msg(INPUT);\n  }\n  static async set_msg_vars_for_if_msg(INPUT) {\n    let text = new abap.types.ABAPObject({qualifiedName: \"IF_MESSAGE\"});\n    if (INPUT && INPUT.text) {text.set(INPUT.text);}\n    let string = new abap.types.String();\n    if (INPUT && INPUT.string) {string = INPUT.string;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async set_msg_vars_for_clike(INPUT) {\n    return cl_message_helper.set_msg_vars_for_clike(INPUT);\n  }\n  static async set_msg_vars_for_clike(INPUT) {\n    let text = new abap.types.Character();\n    if (INPUT && INPUT.text) {text = INPUT.text;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CL_MESSAGE_HELPER'] = cl_message_helper;\n\n//# sourceMappingURL=cl_message_helper.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_message_helper.clas.mjs?");

/***/ })

}]);