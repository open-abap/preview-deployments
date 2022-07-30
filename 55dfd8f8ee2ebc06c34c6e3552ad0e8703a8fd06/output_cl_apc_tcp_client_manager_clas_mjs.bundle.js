"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_apc_tcp_client_manager_clas_mjs"],{

/***/ "./output/cl_apc_tcp_client_manager.clas.mjs":
/*!***************************************************!*\
  !*** ./output/cl_apc_tcp_client_manager.clas.mjs ***!
  \***************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_apc_tcp_client_manager\": () => (/* binding */ cl_apc_tcp_client_manager)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_apc_tcp_client_manager_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_apc_tcp_client_manager.clas.locals.mjs */ \"./output/cl_apc_tcp_client_manager.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_apc_tcp_client_manager.clas.abap\nclass cl_apc_tcp_client_manager {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create(INPUT) {\n    return cl_apc_tcp_client_manager.create(INPUT);\n  }\n  static async create(INPUT) {\n    let ri_client = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_CLIENT\"});\n    let i_host = new abap.types.String();\n    if (INPUT && INPUT.i_host) {i_host.set(INPUT.i_host);}\n    let i_port = new abap.types.String();\n    if (INPUT && INPUT.i_port) {i_port.set(INPUT.i_port);}\n    let i_frame = new abap.types.Structure({frame_type: new abap.types.Integer(), fixed_length: new abap.types.Integer(), terminator: new abap.types.String(), length_field_length: new abap.types.Integer(), length_field_offset: new abap.types.Integer(), length_field_header: new abap.types.Integer()}, \"if_abap_channel_types=>ty_apc_tcp_frame\");\n    if (INPUT && INPUT.i_frame) {i_frame.set(INPUT.i_frame);}\n    let i_event_handler = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_EVENT_HANDLER\"});\n    if (INPUT && INPUT.i_event_handler) {i_event_handler.set(INPUT.i_event_handler);}\n    ri_client.set(await (new abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT']()).constructor_({iv_host: i_host, iv_port: i_port, io_handler: i_event_handler}));\n    return ri_client;\n  }\n}\nabap.Classes['CL_APC_TCP_CLIENT_MANAGER'] = cl_apc_tcp_client_manager;\n\n//# sourceMappingURL=cl_apc_tcp_client_manager.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_apc_tcp_client_manager.clas.mjs?");

/***/ })

}]);