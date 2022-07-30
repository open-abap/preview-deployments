"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_datadescr_clas_mjs"],{

/***/ "./output/cl_abap_datadescr.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_abap_datadescr.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_datadescr\": () => (/* binding */ cl_abap_datadescr)\n/* harmony export */ });\nconst {cl_abap_typedescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_typedescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_typedescr.clas.mjs */ \"./output/cl_abap_typedescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_datadescr.clas.abap\nclass cl_abap_datadescr extends cl_abap_typedescr {\n  async constructor_() {\n    await super.constructor_();\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_data_type_kind(INPUT) {\n    return cl_abap_datadescr.get_data_type_kind(INPUT);\n  }\n  static async get_data_type_kind(INPUT) {\n    let p_type_kind = new abap.types.Character({qualifiedName: \"abap_typekind\"});\n    let p_data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.p_data) {p_data = INPUT.p_data;}\n    let descr = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    descr.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: p_data})));\n    p_type_kind.set(descr.get().type_kind);\n    return p_type_kind;\n  }\n}\nabap.Classes['CL_ABAP_DATADESCR'] = cl_abap_datadescr;\n\n//# sourceMappingURL=cl_abap_datadescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_datadescr.clas.mjs?");

/***/ })

}]);