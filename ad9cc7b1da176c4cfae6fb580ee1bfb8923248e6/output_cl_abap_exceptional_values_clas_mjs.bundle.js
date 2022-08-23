"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_exceptional_values_clas_mjs"],{

/***/ "./output/cl_abap_exceptional_values.clas.mjs":
/*!****************************************************!*\
  !*** ./output/cl_abap_exceptional_values.clas.mjs ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_exceptional_values\": () => (/* binding */ cl_abap_exceptional_values)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_exceptional_values.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_exceptional_values {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_max_value(INPUT) {\n    return cl_abap_exceptional_values.get_max_value(INPUT);\n  }\n  static async get_max_value(INPUT) {\n    let out = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    let in_ = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.in_) {in_ = INPUT.in_;}\n    let lv_type = new abap.types.Character();\n    abap.statements.describe({field: in_, type: lv_type});\n    let unique3 = lv_type;\n    if (abap.compare.eq(unique3, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {\n      out.assign(abap.Classes['CL_ABAP_MATH'].max_int4);\n    } else {\n      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    }\n    return out;\n  }\n  async get_min_value(INPUT) {\n    return cl_abap_exceptional_values.get_min_value(INPUT);\n  }\n  static async get_min_value(INPUT) {\n    let out = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    let in_ = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.in_) {in_ = INPUT.in_;}\n    let lv_type = new abap.types.Character();\n    abap.statements.describe({field: in_, type: lv_type});\n    let unique4 = lv_type;\n    if (abap.compare.eq(unique4, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {\n      out.assign(abap.Classes['CL_ABAP_MATH'].min_int4);\n    } else {\n      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    }\n    return out;\n  }\n}\nabap.Classes['CL_ABAP_EXCEPTIONAL_VALUES'] = cl_abap_exceptional_values;\n\n//# sourceMappingURL=cl_abap_exceptional_values.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_exceptional_values.clas.mjs?");

/***/ })

}]);