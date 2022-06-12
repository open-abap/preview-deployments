"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_enumdescr_clas_mjs"],{

/***/ "./output/cl_abap_enumdescr.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_abap_enumdescr.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_enumdescr\": () => (/* binding */ cl_abap_enumdescr)\n/* harmony export */ });\nconst {cl_abap_elemdescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_elemdescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_elemdescr.clas.mjs */ \"./output/cl_abap_elemdescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_enumdescr.clas.abap\nconst constant_30 = new abap.types.Integer().set(30);\nclass cl_abap_enumdescr extends cl_abap_elemdescr {\n  async constructor_() {\n    await super.constructor_();\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.members = new abap.types.Table(new abap.types.Structure({name: new abap.types.Character({length: 30, qualifiedName: \"cl_abap_enumdescr=>name\"}), value: new abap.types.String()}, \"cl_abap_enumdescr=>member\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[\"NAME\"]});\n    return this;\n  }\n}\nabap.Classes['CL_ABAP_ENUMDESCR'] = cl_abap_enumdescr;\n\n//# sourceMappingURL=cl_abap_enumdescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_enumdescr.clas.mjs?");

/***/ })

}]);