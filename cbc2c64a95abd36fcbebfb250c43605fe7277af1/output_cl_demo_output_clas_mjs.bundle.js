"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_demo_output_clas_mjs"],{

/***/ "./output/cl_demo_output.clas.mjs":
/*!****************************************!*\
  !*** ./output/cl_demo_output.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_demo_output\": () => (/* binding */ cl_demo_output)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_demo_output.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_demo_output {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async write(INPUT) {\n    return cl_demo_output.write(INPUT);\n  }\n  static async write(INPUT) {\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));\n  }\n  async clear() {\n    return cl_demo_output.clear();\n  }\n  static async clear() {\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));\n  }\n  async display(INPUT) {\n    return cl_demo_output.display(INPUT);\n  }\n  static async display(INPUT) {\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));\n  }\n}\nabap.Classes['CL_DEMO_OUTPUT'] = cl_demo_output;\n\n//# sourceMappingURL=cl_demo_output.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_demo_output.clas.mjs?");

/***/ })

}]);