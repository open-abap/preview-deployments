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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_server\": () => (/* binding */ lcl_server)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_express_icf_shim.clas.locals_imp.abap\nclass lcl_server {\n  static INTERNAL_TYPE = 'CLAS';\n  static INTERNAL_NAME = 'CLAS-CL_EXPRESS_ICF_SHIM-LCL_SERVER';\n  static IMPLEMENTED_INTERFACES = [\"IF_HTTP_SERVER\"];\n  static ATTRIBUTES = {};\n  constructor() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.if_http_server$authmethod_service = abap.Classes['IF_HTTP_SERVER'].if_http_server$authmethod_service;\n    this.if_http_server$co_compress_based_on_mime_type = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_compress_based_on_mime_type;\n    this.if_http_server$co_disabled = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_disabled;\n    this.if_http_server$co_enabled = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_enabled;\n    this.if_http_server$co_page_error_type = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_page_error_type;\n    this.if_http_server$co_response_page_option = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_response_page_option;\n    if (this.if_http_server$session_id === undefined) this.if_http_server$session_id = lcl_server.if_http_server$session_id;\n    if (this.if_http_server$authentication_method === undefined) this.if_http_server$authentication_method = lcl_server.if_http_server$authentication_method;\n    if (this.if_http_server$response === undefined) this.if_http_server$response = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_RESPONSE\", RTTIName: \"\\\\INTERFACE=IF_HTTP_RESPONSE\"});\n    if (this.if_http_server$request === undefined) this.if_http_server$request = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_REQUEST\", RTTIName: \"\\\\INTERFACE=IF_HTTP_REQUEST\"});\n  }\n  async constructor_(INPUT) {\n    if (super.constructor_) { await super.constructor_(INPUT); }\n    return this;\n  }\n  async if_http_server$validate_xsrf_token(INPUT) {\n    let token = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.token) {token.set(INPUT.token);}\n    let successful = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.successful) {successful = INPUT.successful;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$unescape_url(INPUT) {\n    return lcl_server.if_http_server$unescape_url(INPUT);\n  }\n  static async if_http_server$unescape_url(INPUT) {\n    let unescaped = new abap.types.String({qualifiedName: \"STRING\"});\n    let escaped = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.escaped) {escaped.set(INPUT.escaped);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return unescaped;\n  }\n  async if_http_server$set_session_stateful_via_url(INPUT) {\n    let stateful = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.stateful) {stateful.set(INPUT.stateful);}\n    if (INPUT === undefined || INPUT.stateful === undefined) {stateful = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_enabled;}\n    let rewrite_url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.rewrite_url) {rewrite_url = INPUT.rewrite_url;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$set_page(INPUT) {\n    let response_page_type = new abap.types.Character(1, {\"qualifiedName\":\"CHAR1\",\"ddicName\":\"CHAR1\"});\n    if (INPUT && INPUT.response_page_type) {response_page_type.set(INPUT.response_page_type);}\n    if (INPUT === undefined || INPUT.response_page_type === undefined) {response_page_type = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_page_error_type;}\n    let response_option = new abap.types.Character(1, {\"qualifiedName\":\"CHAR1\",\"ddicName\":\"CHAR1\"});\n    if (INPUT && INPUT.response_option) {response_option.set(INPUT.response_option);}\n    if (INPUT === undefined || INPUT.response_option === undefined) {response_option = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_response_page_option;}\n    let response_option_page = new abap.types.Character(4);\n    if (INPUT && INPUT.response_option_page) {response_option_page = INPUT.response_option_page;}\n    let response_option_redirect_url = new abap.types.Character(4);\n    if (INPUT && INPUT.response_option_redirect_url) {response_option_redirect_url = INPUT.response_option_redirect_url;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$set_compression(INPUT) {\n    let options = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.options) {options.set(INPUT.options);}\n    if (INPUT === undefined || INPUT.options === undefined) {options = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_compress_based_on_mime_type;}\n    return;\n  }\n  async if_http_server$send_page() {\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$get_xsrf_token(INPUT) {\n    let token = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.token) {token = INPUT.token;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$get_location_exception(INPUT) {\n    return lcl_server.if_http_server$get_location_exception(INPUT);\n  }\n  static async if_http_server$get_location_exception(INPUT) {\n    let url_part = new abap.types.String({qualifiedName: \"STRING\"});\n    let protocol = new abap.types.Character();\n    if (INPUT && INPUT.protocol) {protocol = INPUT.protocol;}\n    let application = new abap.types.Character();\n    if (INPUT && INPUT.application) {application = INPUT.application;}\n    let for_domain = new abap.types.Character();\n    if (INPUT && INPUT.for_domain) {for_domain = INPUT.for_domain;}\n    let server = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_SERVER\", RTTIName: \"\\\\INTERFACE=IF_HTTP_SERVER\"});\n    if (INPUT && INPUT.server) {server.set(INPUT.server);}\n    let use_ticket_protocol = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.use_ticket_protocol) {use_ticket_protocol.set(INPUT.use_ticket_protocol);}\n    if (INPUT === undefined || INPUT.use_ticket_protocol === undefined) {use_ticket_protocol = abap.builtin.abap_true;}\n    let host = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.host) {host = INPUT.host;}\n    let port = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.port) {port = INPUT.port;}\n    let out_protocol = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.out_protocol) {out_protocol = INPUT.out_protocol;}\n    let vh_switch = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.vh_switch) {vh_switch = INPUT.vh_switch;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return url_part;\n  }\n  async if_http_server$get_location(INPUT) {\n    return lcl_server.if_http_server$get_location(INPUT);\n  }\n  static async if_http_server$get_location(INPUT) {\n    let url_part = new abap.types.String({qualifiedName: \"STRING\"});\n    let protocol = new abap.types.Character();\n    if (INPUT && INPUT.protocol) {protocol = INPUT.protocol;}\n    let application = new abap.types.Character();\n    if (INPUT && INPUT.application) {application = INPUT.application;}\n    let for_domain = new abap.types.Character();\n    if (INPUT && INPUT.for_domain) {for_domain = INPUT.for_domain;}\n    let server = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_SERVER\", RTTIName: \"\\\\INTERFACE=IF_HTTP_SERVER\"});\n    if (INPUT && INPUT.server) {server.set(INPUT.server);}\n    let use_ticket_protocol = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.use_ticket_protocol) {use_ticket_protocol.set(INPUT.use_ticket_protocol);}\n    if (INPUT === undefined || INPUT.use_ticket_protocol === undefined) {use_ticket_protocol = abap.builtin.abap_true;}\n    let host = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.host) {host = INPUT.host;}\n    let port = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.port) {port = INPUT.port;}\n    let out_protocol = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.out_protocol) {out_protocol = INPUT.out_protocol;}\n    let vh_switch = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.vh_switch) {vh_switch = INPUT.vh_switch;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return url_part;\n  }\n  async if_http_server$get_last_error() {\n    let rc = new abap.types.Integer({qualifiedName: \"I\"});\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return rc;\n  }\n  async if_http_server$get_extension_url(INPUT) {\n    return lcl_server.if_http_server$get_extension_url(INPUT);\n  }\n  static async if_http_server$get_extension_url(INPUT) {\n    let extension_class = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.extension_class) {extension_class.set(INPUT.extension_class);}\n    let urls = abap.types.TableFactory.construct(new abap.types.String(), {\"withHeader\":false,\"keyType\":\"USER\",\"secondary\":[]}, \"STRING_TABLE\");\n    if (INPUT && INPUT.urls) {urls = INPUT.urls;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$get_extension_info(INPUT) {\n    return lcl_server.if_http_server$get_extension_info(INPUT);\n  }\n  static async if_http_server$get_extension_info(INPUT) {\n    let extension_class = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.extension_class) {extension_class.set(INPUT.extension_class);}\n    let urls = abap.types.TableFactory.construct(new abap.types.String(), {\"withHeader\":false,\"keyType\":\"USER\",\"secondary\":[]}, \"STRING_TABLE\");\n    if (INPUT && INPUT.urls) {urls = INPUT.urls;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$escape_url(INPUT) {\n    return lcl_server.if_http_server$escape_url(INPUT);\n  }\n  static async if_http_server$escape_url(INPUT) {\n    let escaped = new abap.types.String({qualifiedName: \"STRING\"});\n    let unescaped = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return escaped;\n  }\n  async if_http_server$escape_html(INPUT) {\n    return lcl_server.if_http_server$escape_html(INPUT);\n  }\n  static async if_http_server$escape_html(INPUT) {\n    let escaped = new abap.types.String({qualifiedName: \"STRING\"});\n    let unescaped = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return escaped;\n  }\n  async if_http_server$encode_base64(INPUT) {\n    return lcl_server.if_http_server$encode_base64(INPUT);\n  }\n  static async if_http_server$encode_base64(INPUT) {\n    let encoded = new abap.types.String({qualifiedName: \"STRING\"});\n    let unencoded = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.unencoded) {unencoded.set(INPUT.unencoded);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return encoded;\n  }\n  async if_http_server$enable_foreign_session_access(INPUT) {\n    let url_path = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.url_path) {url_path.set(INPUT.url_path);}\n    let user_id = new abap.types.Character(12, {\"qualifiedName\":\"SYUNAME\",\"ddicName\":\"SYUNAME\"});\n    if (INPUT && INPUT.user_id) {user_id.set(INPUT.user_id);}\n    let one_time_access_token = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.one_time_access_token) {one_time_access_token.set(INPUT.one_time_access_token);}\n    if (INPUT === undefined || INPUT.one_time_access_token === undefined) {one_time_access_token = abap.builtin.abap_true;}\n    let session_access_token = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.session_access_token) {session_access_token = INPUT.session_access_token;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$decode_base64(INPUT) {\n    return lcl_server.if_http_server$decode_base64(INPUT);\n  }\n  static async if_http_server$decode_base64(INPUT) {\n    let decoded = new abap.types.String({qualifiedName: \"STRING\"});\n    let encoded = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.encoded) {encoded.set(INPUT.encoded);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return decoded;\n  }\n  async if_http_server$create_rel_url(INPUT) {\n    let url = new abap.types.String({qualifiedName: \"STRING\"});\n    let path = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.path) {path.set(INPUT.path);}\n    let querystring = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.querystring) {querystring.set(INPUT.querystring);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return url;\n  }\n  async if_http_server$create_abs_url(INPUT) {\n    let url = new abap.types.String({qualifiedName: \"STRING\"});\n    let protocol = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.protocol) {protocol.set(INPUT.protocol);}\n    let post = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.post) {post.set(INPUT.post);}\n    let port = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.port) {port.set(INPUT.port);}\n    let path = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.path) {path.set(INPUT.path);}\n    let querystring = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.querystring) {querystring.set(INPUT.querystring);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n    return url;\n  }\n  async if_http_server$append_field_url(INPUT) {\n    return lcl_server.if_http_server$append_field_url(INPUT);\n  }\n  static async if_http_server$append_field_url(INPUT) {\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    let url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.url) {url = INPUT.url;}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$logoff(INPUT) {\n    let delete_mysapsso2_cookie = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.delete_mysapsso2_cookie) {delete_mysapsso2_cookie.set(INPUT.delete_mysapsso2_cookie);}\n    let propagate_logoff = new abap.types.Character(1, {\"qualifiedName\":\"ABAP_BOOL\",\"ddicName\":\"ABAP_BOOL\"});\n    if (INPUT && INPUT.propagate_logoff) {propagate_logoff.set(INPUT.propagate_logoff);}\n    let redirect_url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.redirect_url) {redirect_url.set(INPUT.redirect_url);}\n    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));\n  }\n  async if_http_server$set_session_stateful(INPUT) {\n    let stateful = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.stateful) {stateful.set(INPUT.stateful);}\n    if (INPUT === undefined || INPUT.stateful === undefined) {stateful = abap.Classes['IF_HTTP_SERVER'].if_http_server$co_enabled;}\n    let path = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.path) {path.set(INPUT.path);}\n    return;\n  }\n}\nabap.Classes['CLAS-CL_EXPRESS_ICF_SHIM-LCL_SERVER'] = lcl_server;\nlcl_server.if_http_server$session_id = new abap.types.String({qualifiedName: \"STRING\"});\nlcl_server.if_http_server$authentication_method = new abap.types.Integer({qualifiedName: \"I\"});\nlcl_server.if_http_server$authmethod_service = new abap.types.Integer({qualifiedName: \"I\"});\nlcl_server.if_http_server$authmethod_service.set(4);\nlcl_server.if_http_server$co_compress_based_on_mime_type = new abap.types.Integer({qualifiedName: \"I\"});\nlcl_server.if_http_server$co_compress_based_on_mime_type.set(2);\nlcl_server.if_http_server$co_disabled = new abap.types.Integer({qualifiedName: \"I\"});\nlcl_server.if_http_server$co_disabled.set(0);\nlcl_server.if_http_server$co_enabled = new abap.types.Integer({qualifiedName: \"I\"});\nlcl_server.if_http_server$co_enabled.set(1);\nlcl_server.if_http_server$co_page_error_type = new abap.types.Character(1, {});\nlcl_server.if_http_server$co_page_error_type.set('1');\nlcl_server.if_http_server$co_response_page_option = new abap.types.Character(1, {});\nlcl_server.if_http_server$co_response_page_option.set(' ');\n\n//# sourceMappingURL=cl_express_icf_shim.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_express_icf_shim.clas.locals.mjs?");

/***/ })

}]);