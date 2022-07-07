"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_conv_codepage_clas_mjs"],{

/***/ "./output/cl_abap_conv_codepage.clas.mjs":
/*!***********************************************!*\
  !*** ./output/cl_abap_conv_codepage.clas.mjs ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_conv_codepage\": () => (/* binding */ cl_abap_conv_codepage)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_abap_conv_codepage_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_conv_codepage.clas.locals.mjs */ \"./output/cl_abap_conv_codepage.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_conv_codepage.clas.abap\nclass cl_abap_conv_codepage {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create_in() {\n    return cl_abap_conv_codepage.create_in();\n  }\n  static async create_in() {\n    let instance = new abap.types.ABAPObject({qualifiedName: \"IF_ABAP_CONV_IN\"});\n    instance.set(await (new abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN']()).constructor_());\n    return instance;\n  }\n  async create_out() {\n    return cl_abap_conv_codepage.create_out();\n  }\n  static async create_out() {\n    let instance = new abap.types.ABAPObject({qualifiedName: \"IF_ABAP_CONV_OUT\"});\n    instance.set(await (new abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT']()).constructor_());\n    return instance;\n  }\n}\nabap.Classes['CL_ABAP_CONV_CODEPAGE'] = cl_abap_conv_codepage;\n\n//# sourceMappingURL=cl_abap_conv_codepage.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_conv_codepage.clas.mjs?");

/***/ })

}]);