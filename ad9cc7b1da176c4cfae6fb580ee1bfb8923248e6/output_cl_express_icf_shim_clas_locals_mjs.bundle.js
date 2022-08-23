"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_express_icf_shim_clas_locals_mjs"],{

/***/ "./output/cl_express_icf_shim.clas.locals.mjs":
/*!****************************************************!*\
  !*** ./output/cl_express_icf_shim.clas.locals.mjs ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_server\": () => (/* binding */ lcl_server)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_express_icf_shim.clas.locals_imp.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass lcl_server {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_HTTP_SERVER\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.if_http_server$response = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_RESPONSE\"});\n    this.if_http_server$request = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_REQUEST\"});\n    this.if_http_server$request.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());\n    this.if_http_server$response.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());\n    return this;\n  }\n  async if_http_server$logoff(INPUT) {\n    let redirect_url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.redirect_url) {redirect_url.set(INPUT.redirect_url);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_http_server$set_session_stateful() {\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CLAS-CL_EXPRESS_ICF_SHIM-LCL_SERVER'] = lcl_server;\n\n//# sourceMappingURL=cl_express_icf_shim.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_express_icf_shim.clas.locals.mjs?");

/***/ })

}]);