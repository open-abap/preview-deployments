"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_kernel_scan_abap_source_clas_mjs"],{

/***/ "./output/kernel_scan_abap_source.clas.mjs":
/*!*************************************************!*\
  !*** ./output/kernel_scan_abap_source.clas.mjs ***!
  \*************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kernel_scan_abap_source\": () => (/* binding */ kernel_scan_abap_source)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// kernel_scan_abap_source.clas.abap\nclass kernel_scan_abap_source {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async call(INPUT) {\n    return kernel_scan_abap_source.call(INPUT);\n  }\n  static async call(INPUT) {\n    let input = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.input) {input = INPUT.input;}\n    let source = new abap.types.String();\n    let fs_tokens_ = new abap.types.FieldSymbol(new abap.types.Structure({str: new abap.types.String(), row: new abap.types.Integer(), off2: new abap.types.Integer(), off3: new abap.types.Integer(), col: new abap.types.Integer(), len1: new abap.types.Integer(), len2: new abap.types.Integer(), len3: new abap.types.Integer(), type: new abap.types.Character({qualifiedName: \"STOKESX-TYPE\"})}, \"STOKESX\"));\n    let fs_statements_ = new abap.types.FieldSymbol(new abap.types.Structure({level: new abap.types.Integer(), struc: new abap.types.Integer(), from: new abap.types.Integer(), to: new abap.types.Integer(), number: new abap.types.Integer(), colonrow: new abap.types.Integer(), trow: new abap.types.Integer(), coloncol: new abap.types.Integer(), tcol: new abap.types.Integer(), prefixlen: new abap.types.Integer(), type: new abap.types.Character({qualifiedName: \"SSTMNT-TYPE\"}), terminator: new abap.types.Character({qualifiedName: \"SSTMNT-TERMINATOR\"}), enhmt: new abap.types.Integer()}, \"SSTMNT\"));\n    source.set(INPUT.scan_abap_source.array().map(e => e.get()).join(\"\\n\"));\n    fs_tokens_.assign(INPUT.tokens_into);\n    fs_statements_.assign(INPUT.statements_into);\n    fs_statements_.appendInitial();\n    fs_tokens_.appendInitial();\n    fs_tokens_.appendInitial();\n  }\n}\nabap.Classes['KERNEL_SCAN_ABAP_SOURCE'] = kernel_scan_abap_source;\n\n//# sourceMappingURL=kernel_scan_abap_source.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/kernel_scan_abap_source.clas.mjs?");

/***/ })

}]);