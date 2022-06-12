"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_matcher_clas_mjs"],{

/***/ "./output/cl_abap_matcher.clas.mjs":
/*!*****************************************!*\
  !*** ./output/cl_abap_matcher.clas.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_matcher\": () => (/* binding */ cl_abap_matcher)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_matcher.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_matcher {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mt_matches = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\"), {\"withHeader\":false})}, \"MATCH_RESULT\"), {\"withHeader\":false});\n    this.mv_index = new abap.types.Integer();\n    this.mv_text = new abap.types.String();\n    let pattern = new abap.types.Character();\n    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}\n    let ignore_case = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.ignore_case) {ignore_case.set(INPUT.ignore_case);}\n    let text = new abap.types.Character();\n    if (INPUT && INPUT.text) {text = INPUT.text;}\n    if (abap.compare.eq(ignore_case, abap.builtin.abap_true)) {\n      abap.statements.find(text, {regex: pattern, first: false, ignoringCase: true, results: this.mt_matches});\n    } else {\n      abap.statements.find(text, {regex: pattern, first: false, results: this.mt_matches});\n    }\n    this.mv_text.set(text);\n    return this;\n  }\n  async match() {\n    let success = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return success;\n  }\n  async find_all() {\n    let rt_matches = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\"), {\"withHeader\":false})}, \"MATCH_RESULT\"), {\"withHeader\":false});\n    rt_matches.set(this.mt_matches);\n    return rt_matches;\n  }\n  async find_next() {\n    let found = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    this.mv_index.set(abap.operators.add(this.mv_index,constant_1));\n    abap.statements.readTable(this.mt_matches,{index: this.mv_index});\n    found.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)));\n    return found;\n  }\n  async get_submatch(INPUT) {\n    let match = new abap.types.String();\n    let index = new abap.types.Integer();\n    if (INPUT && INPUT.index) {index.set(INPUT.index);}\n    let ls_match = new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\"), {\"withHeader\":false})}, \"MATCH_RESULT\");\n    let ls_submatch = new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\");\n    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});\n    abap.statements.readTable(ls_match.get().submatches,{index: index,into: ls_submatch});\n    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {\n      match.set(this.mv_text.getOffset({offset: ls_submatch.get().offset.get(), length: ls_submatch.get().length.get()}));\n    }\n    return match;\n  }\n  async get_offset() {\n    let offset = new abap.types.Integer();\n    let ls_match = new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\"), {\"withHeader\":false})}, \"MATCH_RESULT\");\n    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});\n    offset.set(ls_match.get().offset);\n    return offset;\n  }\n  async get_length() {\n    let length = new abap.types.Integer();\n    let ls_match = new abap.types.Structure({line: new abap.types.Integer(), offset: new abap.types.Integer(), length: new abap.types.Integer(), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer(), length: new abap.types.Integer()}, \"SUBMATCH_RESULT\"), {\"withHeader\":false})}, \"MATCH_RESULT\");\n    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});\n    length.set(ls_match.get().length);\n    return length;\n  }\n}\nabap.Classes['CL_ABAP_MATCHER'] = cl_abap_matcher;\n\n//# sourceMappingURL=cl_abap_matcher.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_matcher.clas.mjs?");

/***/ })

}]);