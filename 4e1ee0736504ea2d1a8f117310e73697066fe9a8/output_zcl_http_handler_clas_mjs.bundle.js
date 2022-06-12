"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_zcl_http_handler_clas_mjs"],{

/***/ "./output/zcl_http_handler.clas.mjs":
/*!******************************************!*\
  !*** ./output/zcl_http_handler.clas.mjs ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zcl_http_handler\": () => (/* binding */ zcl_http_handler)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// zcl_http_handler.clas.abap\nclass zcl_http_handler {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_http_extension$handle_request(INPUT) {\n    let server = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_SERVER\"});\n    if (INPUT && INPUT.server) {server.set(INPUT.server);}\n    let temp1 = new abap.types.Structure({method: new abap.types.String(), path: new abap.types.String(), body: new abap.types.XString()}, \"zcl_otm_table_maintenance=>ty_request\");\n    let temp2 = new abap.types.String();\n    let result = new abap.types.Structure({status: new abap.types.Integer(), content_type: new abap.types.String(), body: new abap.types.XString()}, \"zcl_otm_table_maintenance=>ty_http\");\n    let temp3 = new abap.types.ABAPObject({qualifiedName: \"ZCL_OTM_TABLE_MAINTENANCE\"});\n    abap.statements.clear(temp1);\n    temp1.get().method.set((await server.get().if_http_server$request.get().if_http_request$get_method()));\n    temp1.get().path.set((await server.get().if_http_server$request.get().if_http_request$get_header_field({name: new abap.types.Character({length: 5}).set('~path')})));\n    temp1.get().body.set((await server.get().if_http_server$request.get().if_http_request$get_data()));\n    temp3.set(await (new abap.Classes['ZCL_OTM_TABLE_MAINTENANCE']()).constructor_({iv_table: new abap.types.Character({length: 9}).set('ZOPENTEST')}));\n    result.set((await temp3.get().serve({is_request: temp1})));\n    await server.get().if_http_server$response.get().if_http_response$set_data({val: result.get().body});\n    await server.get().if_http_server$response.get().if_http_response$set_content_type({val: result.get().content_type});\n    temp2.set(result.get().status);\n    await server.get().if_http_server$response.get().if_http_response$set_status({code: result.get().status, reason: temp2});\n  }\n}\nabap.Classes['ZCL_HTTP_HANDLER'] = zcl_http_handler;\n\n//# sourceMappingURL=zcl_http_handler.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/zcl_http_handler.clas.mjs?");

/***/ })

}]);