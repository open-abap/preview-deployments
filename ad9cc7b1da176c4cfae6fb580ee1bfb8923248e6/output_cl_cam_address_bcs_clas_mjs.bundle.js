"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_cam_address_bcs_clas_mjs"],{

/***/ "./output/cl_cam_address_bcs.clas.mjs":
/*!********************************************!*\
  !*** ./output/cl_cam_address_bcs.clas.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_cam_address_bcs\": () => (/* binding */ cl_cam_address_bcs)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_cam_address_bcs.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_cam_address_bcs {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_RECIPIENT_BCS\"];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create_internet_address(INPUT) {\n    return cl_cam_address_bcs.create_internet_address(INPUT);\n  }\n  static async create_internet_address(INPUT) {\n    let result = new abap.types.ABAPObject({qualifiedName: \"CL_CAM_ADDRESS_BCS\"});\n    let i_address_string = new abap.types.Character();\n    if (INPUT && INPUT.i_address_string) {i_address_string = INPUT.i_address_string;}\n    let i_address_name = new abap.types.Character();\n    if (INPUT && INPUT.i_address_name) {i_address_name = INPUT.i_address_name;}\n    let i_incl_sapuser = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.i_incl_sapuser) {i_incl_sapuser = INPUT.i_incl_sapuser;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return result;\n  }\n}\nabap.Classes['CL_CAM_ADDRESS_BCS'] = cl_cam_address_bcs;\n\n//# sourceMappingURL=cl_cam_address_bcs.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_cam_address_bcs.clas.mjs?");

/***/ })

}]);