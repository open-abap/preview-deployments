"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_numberrange_runtime_clas_mjs"],{

/***/ "./output/cl_numberrange_runtime.clas.mjs":
/*!************************************************!*\
  !*** ./output/cl_numberrange_runtime.clas.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_numberrange_runtime\": () => (/* binding */ cl_numberrange_runtime)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_numberrange_runtime.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_10 = new abap.types.Integer().set(10);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_20 = new abap.types.Integer().set(20);\nclass cl_numberrange_runtime {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async number_get(INPUT) {\n    return cl_numberrange_runtime.number_get(INPUT);\n  }\n  static async number_get(INPUT) {\n    let nr_range_nr = new abap.types.Character({length: 2, qualifiedName: \"cl_numberrange_runtime=>nr_interval\"});\n    if (INPUT && INPUT.nr_range_nr) {nr_range_nr.set(INPUT.nr_range_nr);}\n    let object = new abap.types.Character({length: 10, qualifiedName: \"cl_numberrange_runtime=>nr_object\"});\n    if (INPUT && INPUT.object) {object.set(INPUT.object);}\n    let number = new abap.types.Numc({length: 20, qualifiedName: \"cl_numberrange_runtime=>nr_number\"});\n    if (INPUT && INPUT.number) {number = INPUT.number;}\n    await abap.FunctionModules['NUMBER_GET_NEXT']({exporting: {nr_range_nr: nr_range_nr, object: object}, importing: {number: number}});\n    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {\n      return;\n    }\n  }\n}\nabap.Classes['CL_NUMBERRANGE_RUNTIME'] = cl_numberrange_runtime;\n\n//# sourceMappingURL=cl_numberrange_runtime.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_numberrange_runtime.clas.mjs?");

/***/ })

}]);