"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_apc_tcp_client_manager_clas_locals_mjs"],{

/***/ "./output/cl_apc_tcp_client_manager.clas.locals.mjs":
/*!**********************************************************!*\
  !*** ./output/cl_apc_tcp_client_manager.clas.locals.mjs ***!
  \**********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_client\": () => (/* binding */ lcl_client),\n/* harmony export */   \"lcl_message\": () => (/* binding */ lcl_message)\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_apc_tcp_client_manager.clas.locals_imp.abap\nclass lcl_message {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_APC_WSP_MESSAGE\"];\n  static ATTRIBUTES = {\"MV_DATA\": {\"type\": () => {return new abap.types.XString({qualifiedName: \"XSTRING\"});}, \"visibility\": \"U\", \"is_constant\": \" \"}};\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_data = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    return this;\n  }\n  async if_apc_wsp_message$get_binary() {\n    let rv_binary = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    rv_binary.set(this.mv_data);\n    return rv_binary;\n  }\n  async if_apc_wsp_message$get_text() {\n    let r_message = new abap.types.String({qualifiedName: \"STRING\"});\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return r_message;\n  }\n  async if_apc_wsp_message$set_binary(INPUT) {\n    let iv_binary = new abap.types.Hex();\n    if (INPUT && INPUT.iv_binary) {iv_binary = INPUT.iv_binary;}\n    this.mv_data.set(iv_binary);\n  }\n}\nabap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE'] = lcl_message;\nclass lcl_client {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_APC_WSP_CLIENT\",\"IF_APC_WSP_MESSAGE_MANAGER\"];\n  static ATTRIBUTES = {\"MV_HOST\": {\"type\": () => {return new abap.types.String({qualifiedName: \"STRING\"});}, \"visibility\": \"U\", \"is_constant\": \" \"},\n  \"MV_PORT\": {\"type\": () => {return new abap.types.Integer({qualifiedName: \"I\"});}, \"visibility\": \"U\", \"is_constant\": \" \"},\n  \"MO_HANDLER\": {\"type\": () => {return new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_EVENT_HANDLER\"});}, \"visibility\": \"U\", \"is_constant\": \" \"}};\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_host = new abap.types.String({qualifiedName: \"STRING\"});\n    this.mv_port = new abap.types.Integer({qualifiedName: \"I\"});\n    this.mo_handler = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_EVENT_HANDLER\"});\n    let iv_host = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_host) {iv_host.set(INPUT.iv_host);}\n    let iv_port = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.iv_port) {iv_port.set(INPUT.iv_port);}\n    let io_handler = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_EVENT_HANDLER\"});\n    if (INPUT && INPUT.io_handler) {io_handler.set(INPUT.io_handler);}\n    abap.statements.assert(abap.compare.initial(iv_host) === false);\n    abap.statements.assert(abap.compare.initial(iv_port) === false);\n    abap.statements.assert(abap.compare.initial(io_handler) === false);\n    this.mv_host.set(iv_host);\n    this.mv_port.set(iv_port);\n    this.mo_handler.set(io_handler);\n    return this;\n  }\n  async if_apc_wsp_client$connect() {\n    const net = await __webpack_require__.e(/*! import() */ \"_0c63\").then(__webpack_require__.t.bind(__webpack_require__, /*! net */ \"?0c63\", 19));\n    this.client = net.createConnection({ port: this.mv_port.get(), host: this.mv_host.get()}, () => {this.mo_handler.get().if_apc_wsp_event_handler$on_open();});\n    this.client.on(\"data\", async (data) => {\n        const msg = await (new lcl_message().constructor_());\n        await msg.if_apc_wsp_message$set_binary({iv_binary: data.toString(\"hex\").toUpperCase()});\n        await this.mo_handler.get().if_apc_wsp_event_handler$on_message({i_message: msg});\n    });\n    this.client.on(\"end\",   async () => {this.mo_handler.get().if_apc_wsp_event_handler$on_close();});\n    this.client.on(\"error\", async (e) => {this.mo_handler.get().if_apc_wsp_event_handler$on_error();});\n    await new Promise(resolve => this.client.once(\"connect\", resolve));\n  }\n  async if_apc_wsp_client$close() {\n    this.client.destroy();\n  }\n  async if_apc_wsp_client$get_message_manager() {\n    let ri_manager = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_MESSAGE_MANAGER\"});\n    ri_manager.set(this.me);\n    return ri_manager;\n  }\n  async if_apc_wsp_message_manager$create_message() {\n    let ri_message = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_MESSAGE\"});\n    ri_message.set(await (new abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE']()).constructor_());\n    return ri_message;\n  }\n  async if_apc_wsp_message_manager$send(INPUT) {\n    let ii_message = new abap.types.ABAPObject({qualifiedName: \"IF_APC_WSP_MESSAGE\"});\n    if (INPUT && INPUT.ii_message) {ii_message.set(INPUT.ii_message);}\n    const val = await ii_message.get().if_apc_wsp_message$get_binary();\n    this.client.write(Buffer.from(val.get(), \"hex\"), \"binary\");\n  }\n}\nabap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT'] = lcl_client;\n\n//# sourceMappingURL=cl_apc_tcp_client_manager.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_apc_tcp_client_manager.clas.locals.mjs?");

/***/ })

}]);