"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_kernel_cx_assert_clas_mjs"],{

/***/ "./output/kernel_cx_assert.clas.mjs":
/*!******************************************!*\
  !*** ./output/kernel_cx_assert.clas.mjs ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kernel_cx_assert\": () => (/* binding */ kernel_cx_assert)\n/* harmony export */ });\nconst {cx_dynamic_check} = await __webpack_require__.e(/*! import() */ \"output_cx_dynamic_check_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_dynamic_check.clas.mjs */ \"./output/cx_dynamic_check.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// kernel_cx_assert.clas.abap\nclass kernel_cx_assert extends cx_dynamic_check {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.actual = new abap.types.String({qualifiedName: \"STRING\"});\n    this.expected = new abap.types.String({qualifiedName: \"STRING\"});\n    this.msg = new abap.types.String({qualifiedName: \"STRING\"});\n    let msg = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let previous = new abap.types.ABAPObject({qualifiedName: \"CX_ROOT\"});\n    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}\n    let expected = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.expected) {expected.set(INPUT.expected);}\n    let actual = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.actual) {actual.set(INPUT.actual);}\n    \n    this.me.get().expected.set(expected);\n    this.me.get().actual.set(actual);\n    this.me.get().msg.set(msg);\n    if (abap.compare.initial(this.me.get().msg)) {\n      this.me.get().msg.set(new abap.types.String().set(`Unit test assertion failed`));\n    }\n    return this;\n  }\n}\nabap.Classes['KERNEL_CX_ASSERT'] = kernel_cx_assert;\n\n//# sourceMappingURL=kernel_cx_assert.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/kernel_cx_assert.clas.mjs?");

/***/ })

}]);