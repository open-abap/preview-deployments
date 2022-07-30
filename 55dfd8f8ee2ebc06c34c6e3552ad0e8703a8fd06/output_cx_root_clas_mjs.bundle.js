"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cx_root_clas_mjs"],{

/***/ "./output/cx_root.clas.mjs":
/*!*********************************!*\
  !*** ./output/cx_root.clas.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cx_root\": () => (/* binding */ cx_root)\n/* harmony export */ });\n// cx_root.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_32 = new abap.types.Integer().set(32);\nclass cx_root extends Error {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.previous = new abap.types.ABAPObject({qualifiedName: \"CX_ROOT\"});\n    this.textid = new abap.types.Character({length: 32, qualifiedName: \"undefined\"});\n    this.get_longtext = this.if_message$get_longtext;\n    this.get_text = this.if_message$get_text;\n    let textid = new abap.types.Character({length: 32, qualifiedName: \"undefined\"});\n    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}\n    let previous = new abap.types.ABAPObject({qualifiedName: \"CX_ROOT\"});\n    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}\n    this.me.get().previous.set(previous);\n    this.me.get().textid.set(textid);\n    return this;\n  }\n  async get_source_position(INPUT) {\n    let program_name = new abap.types.String();\n    if (INPUT && INPUT.program_name) {program_name = INPUT.program_name;}\n    let include_name = new abap.types.String();\n    if (INPUT && INPUT.include_name) {include_name = INPUT.include_name;}\n    let source_line = new abap.types.String();\n    if (INPUT && INPUT.source_line) {source_line = INPUT.source_line;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));\n  }\n  async if_message$get_longtext(INPUT) {\n    let result = new abap.types.String();\n    let preserve_newlines = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.preserve_newlines) {preserve_newlines = INPUT.preserve_newlines;}\n    result.set(new abap.types.Character({length: 29}).set('OpenAbapGetLongtextDummyValue'));\n    return result;\n  }\n  async if_message$get_text() {\n    let result = new abap.types.String();\n    result.set((await abap.Classes['CL_MESSAGE_HELPER'].get_text_for_message({text: this.me})));\n    return result;\n  }\n}\nabap.Classes['CX_ROOT'] = cx_root;\n\n//# sourceMappingURL=cx_root.clas.mjs.map\n\n//# sourceURL=webpack://open-table-maintenance/./output/cx_root.clas.mjs?");

/***/ })

}]);