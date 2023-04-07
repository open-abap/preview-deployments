"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_conv_codepage_clas_locals_mjs"],{

/***/ "./output/cl_abap_conv_codepage.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/cl_abap_conv_codepage.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_in\": () => (/* binding */ lcl_in),\n/* harmony export */   \"lcl_out\": () => (/* binding */ lcl_out)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_conv_codepage.clas.locals_imp.abap\nclass lcl_in {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_ABAP_CONV_IN\"];\n  static ATTRIBUTES = {};\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_abap_conv_in$convert(INPUT) {\n    let result = new abap.types.String({qualifiedName: \"STRING\"});\n    let source = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.source) {source.set(INPUT.source);}\n    let conv = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_CONV_IN_CE\"});\n    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));\n    await conv.get().convert({input: source, data: result});\n    return result;\n  }\n}\nabap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN'] = lcl_in;\nclass lcl_out {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_ABAP_CONV_OUT\"];\n  static ATTRIBUTES = {};\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_abap_conv_out$convert(INPUT) {\n    let result = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    let source = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.source) {source.set(INPUT.source);}\n    let conv = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_CONV_OUT_CE\"});\n    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));\n    await conv.get().convert({data: source, buffer: result});\n    return result;\n  }\n}\nabap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT'] = lcl_out;\n\n//# sourceMappingURL=cl_abap_conv_codepage.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_conv_codepage.clas.locals.mjs?");

/***/ })

}]);