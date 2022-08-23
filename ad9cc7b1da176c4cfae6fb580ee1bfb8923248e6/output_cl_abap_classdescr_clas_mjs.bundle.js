"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_classdescr_clas_mjs"],{

/***/ "./output/cl_abap_classdescr.clas.mjs":
/*!********************************************!*\
  !*** ./output/cl_abap_classdescr.clas.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_classdescr\": () => (/* binding */ cl_abap_classdescr)\n/* harmony export */ });\nconst {cl_abap_objectdescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_objectdescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_objectdescr.clas.mjs */ \"./output/cl_abap_objectdescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_classdescr.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_classdescr extends cl_abap_objectdescr {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    await super.constructor_();\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_class_name(INPUT) {\n    return cl_abap_classdescr.get_class_name(INPUT);\n  }\n  static async get_class_name(INPUT) {\n    let p_name = new abap.types.Character({length: 200, qualifiedName: \"abap_abstypename\"});\n    let p_object = new abap.types.ABAPObject();\n    if (INPUT && INPUT.p_object) {p_object = INPUT.p_object;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return p_name;\n  }\n}\nabap.Classes['CL_ABAP_CLASSDESCR'] = cl_abap_classdescr;\n\n//# sourceMappingURL=cl_abap_classdescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_classdescr.clas.mjs?");

/***/ })

}]);