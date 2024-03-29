"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_regex_clas_mjs"],{

/***/ "./output/cl_abap_regex.clas.mjs":
/*!***************************************!*\
  !*** ./output/cl_abap_regex.clas.mjs ***!
  \***************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_regex\": () => (/* binding */ cl_abap_regex)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_regex.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_regex {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_pattern = new abap.types.String({qualifiedName: \"STRING\"});\n    this.mv_ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let pattern = new abap.types.Character();\n    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}\n    let ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}\n    this.mv_pattern.set(pattern);\n    this.mv_ignore_case.set(ignore_case);\n    return this;\n  }\n  async create_pcre(INPUT) {\n    return cl_abap_regex.create_pcre(INPUT);\n  }\n  static async create_pcre(INPUT) {\n    let regex = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_REGEX\"});\n    let pattern = new abap.types.Character();\n    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}\n    let ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}\n    if (INPUT === undefined || INPUT.ignore_case === undefined) {ignore_case = abap.builtin.abap_false;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return regex;\n  }\n  async create_matcher(INPUT) {\n    let ro_matcher = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_MATCHER\"});\n    let text = new abap.types.Character();\n    if (INPUT && INPUT.text) {text = INPUT.text;}\n    ro_matcher.set(await (new abap.Classes['CL_ABAP_MATCHER']()).constructor_({pattern: this.mv_pattern, ignore_case: this.mv_ignore_case, text: text}));\n    return ro_matcher;\n  }\n}\nabap.Classes['CL_ABAP_REGEX'] = cl_abap_regex;\n\n//# sourceMappingURL=cl_abap_regex.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_regex.clas.mjs?");

/***/ })

}]);