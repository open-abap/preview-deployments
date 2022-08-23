"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_http_client_clas_mjs"],{

/***/ "./output/cl_http_client.clas.mjs":
/*!****************************************!*\
  !*** ./output/cl_http_client.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_http_client\": () => (/* binding */ cl_http_client)\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_http_client.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nclass cl_http_client {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_HTTP_CLIENT\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_host = new abap.types.String({qualifiedName: \"STRING\"});\n    this.if_http_client$request = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_REQUEST\"});\n    this.if_http_client$response = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_RESPONSE\"});\n    this.if_http_client$propertytype_logon_popup = new abap.types.Integer({qualifiedName: \"I\"});\n    this.if_http_client$propertytype_accept_cookie = new abap.types.Integer({qualifiedName: \"I\"});\n    let url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.url) {url.set(INPUT.url);}\n    let lv_uri = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_query = new abap.types.String({qualifiedName: \"STRING\"});\n    this.if_http_client$response.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());\n    abap.statements.find(url, {regex: new abap.types.Character({length: 19}).set('\\\\w(\\\\/[\\\\w\\\\d\\\\.\\\\-\\\\/]+)'), submatches: [lv_uri]});\n    this.mv_host.set(url);\n    abap.statements.replace({target:this.mv_host, all:false, with: new abap.types.Character({length: 0}).set(''),of: lv_uri});\n    this.if_http_client$request.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());\n    await this.if_http_client$request.get().if_http_request$set_header_field({name: new abap.types.Character({length: 12}).set('~request_uri'), value: lv_uri});\n    abap.statements.find(url, {regex: new abap.types.Character({length: 6}).set('\\\\?(.*)'), submatches: [lv_query]});\n    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {\n      await abap.Classes['CL_HTTP_UTILITY'].set_query({request: this.if_http_client$request, query: lv_query});\n    }\n    return this;\n  }\n  async create_by_url(INPUT) {\n    return cl_http_client.create_by_url(INPUT);\n  }\n  static async create_by_url(INPUT) {\n    let url = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.url) {url.set(INPUT.url);}\n    let ssl_id = new abap.types.Character({length: 6, qualifiedName: \"SSFAPPLSSL\"});\n    if (INPUT && INPUT.ssl_id) {ssl_id.set(INPUT.ssl_id);}\n    let proxy_host = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.proxy_host) {proxy_host.set(INPUT.proxy_host);}\n    let proxy_service = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.proxy_service) {proxy_service.set(INPUT.proxy_service);}\n    let client = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_CLIENT\"});\n    if (INPUT && INPUT.client) {client = INPUT.client;}\n    client.set(await (new abap.Classes['CL_HTTP_CLIENT']()).constructor_({url: url}));\n    abap.builtin.sy.get().subrc.set(constant_0);\n  }\n  async if_http_client$authenticate(INPUT) {\n    let proxy_authentication = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.proxy_authentication) {proxy_authentication = INPUT.proxy_authentication;}\n    let username = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.username) {username.set(INPUT.username);}\n    let password = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.password) {password.set(INPUT.password);}\n    let lv_base64 = new abap.types.String({qualifiedName: \"STRING\"});\n    lv_base64.set((await abap.Classes['CL_HTTP_UTILITY'].encode_base64({data: new abap.types.String().set(`${username.get()}:${password.get()}`)})));\n    await this.if_http_client$request.get().if_http_request$set_header_field({name: new abap.types.Character({length: 13}).set('authorization'), value: new abap.types.String().set(`Basic ${lv_base64.get()}`)});\n  }\n  async if_http_client$close() {\n    return;\n  }\n  async create_by_destination(INPUT) {\n    return cl_http_client.create_by_destination(INPUT);\n  }\n  static async create_by_destination(INPUT) {\n    let destination = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.destination) {destination.set(INPUT.destination);}\n    let client = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_CLIENT\"});\n    if (INPUT && INPUT.client) {client = INPUT.client;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_http_client$send() {\n    let lv_method = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_url = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_body = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_name = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    let lt_form_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: \"IHTTPNVP-NAME\"}), value: new abap.types.String({qualifiedName: \"IHTTPNVP-VALUE\"})}, \"IHTTPNVP\"), {\"withHeader\":false}, \"TIHTTPNVP\");\n    let lt_header_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: \"IHTTPNVP-NAME\"}), value: new abap.types.String({qualifiedName: \"IHTTPNVP-VALUE\"})}, \"IHTTPNVP\"), {\"withHeader\":false}, \"TIHTTPNVP\");\n    let ls_field = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"IHTTPNVP-NAME\"}), value: new abap.types.String({qualifiedName: \"IHTTPNVP-VALUE\"})}, \"IHTTPNVP\");\n    lv_method.set((await this.if_http_client$request.get().if_http_request$get_method()));\n    if (abap.compare.initial(lv_method)) {\n      lv_method.set(new abap.types.Character({length: 3}).set('GET'));\n    }\n    if (abap.compare.initial((await this.if_http_client$request.get().if_http_request$get_header_field({name: new abap.types.Character({length: 10}).set('user-agent')})))) {\n      await this.if_http_client$request.get().if_http_request$set_header_field({name: new abap.types.Character({length: 10}).set('user-agent'), value: new abap.types.Character({length: 14}).set('open-abap-http')});\n    }\n    lv_url.set((await this.if_http_client$request.get().if_http_request$get_header_field({name: new abap.types.Character({length: 12}).set('~request_uri')})));\n    abap.statements.replace({target:lv_url, all:false, with: new abap.types.Character({length: 0}).set(''),of: this.mv_host});\n    lv_url.set(abap.operators.concat(this.mv_host,lv_url));\n    await this.if_http_client$request.get().if_http_request$get_form_fields({fields: lt_form_fields});\n    if (abap.compare.gt(abap.builtin.lines({val: lt_form_fields}), constant_0)) {\n      lv_url.set(abap.operators.concat(lv_url,abap.operators.concat(new abap.types.Character({length: 1}).set('?'),(await abap.Classes['CL_HTTP_UTILITY'].fields_to_string({fields: lt_form_fields})))));\n    }\n    await this.if_http_client$request.get().if_http_request$get_header_fields({fields: lt_header_fields});\n    let headers = {};\n    for (const unique17 of abap.statements.loop(lt_header_fields,{where: (i) => {return abap.compare.ne(i.name, new abap.types.Character({length: 12}).set('~request_uri'));}})) {\n      ls_field.set(unique17);\n      headers[ls_field.get().name.get()] = ls_field.get().value.get();\n    }\n    lv_body.set((await this.if_http_client$request.get().if_http_request$get_cdata()));\n    const https = await __webpack_require__.e(/*! import() */ \"_4854\").then(__webpack_require__.t.bind(__webpack_require__, /*! https */ \"?4854\", 19));\n    const http = await __webpack_require__.e(/*! import() */ \"_0eef\").then(__webpack_require__.t.bind(__webpack_require__, /*! http */ \"?0eef\", 19));\n    function postData(url, options, requestBody) {\n        return new Promise((resolve, reject) => {\n            const prot = url.startsWith(\"http://\") ? http : https;\n            const req = prot.request(url, options,\n              (res) => {\n                  let chunks = [];\n                  res.on(\"data\", (chunk) => {chunks.push(chunk);});\n                  res.on(\"error\", reject);\n                  res.on(\"end\", () => {\n                      if (res.statusCode >= 200 && res.statusCode <= 299) {\n                          resolve({statusCode: res.statusCode, headers: res.headers, body: Buffer.concat(chunks)});\n                        } else {\n                            reject(\"Request failed. status: \" + res.statusCode + \", body: \" + Buffer.concat(chunks).toString());\n                          }\n                        });\n                      });\n                    req.on(\"error\", reject);\n                    req.write(requestBody, \"binary\");\n                    req.end();\n                  });\n              }\n              const prot = lv_url.get().startsWith(\"http://\") ? http : https;\n              if (this.agent === undefined) {this.agent = new prot.Agent({keepAlive: true, maxSockets: 1});}\n              let response = await postData(lv_url.get(), {method: lv_method.get(), headers: headers, agent: this.agent}, lv_body.get());\n              for (const h in response.headers) {\n                  lv_name.set(h);\n                  lv_value.set(response.headers[h]);\n                await this.if_http_client$response.get().if_http_response$set_header_field({name: lv_name, value: lv_value});\n              }\n              this.if_http_client$response.get().content_type.set(response.headers[\"content-type\"] || \"\");\n              this.if_http_client$response.get().mv_status.set(response.statusCode);\n              this.if_http_client$response.get().mv_data.set(response.body.toString(\"hex\").toUpperCase());\n              abap.builtin.sy.get().subrc.set(constant_0);\n            }\n            async if_http_client$receive() {\n              abap.builtin.sy.get().subrc.set(constant_0);\n            }\n            async if_http_client$get_last_error(INPUT) {\n              let code = new abap.types.Integer({qualifiedName: \"I\"});\n              if (INPUT && INPUT.code) {code = INPUT.code;}\n              let message = new abap.types.String({qualifiedName: \"STRING\"});\n              if (INPUT && INPUT.message) {message = INPUT.message;}\n              await this.if_http_client$response.get().if_http_response$get_status({code: code});\n              message.set(new abap.types.Character({length: 14}).set('todo_open_abap'));\n            }\n            async if_http_client$send_sap_logon_ticket() {\n              abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 13}).set('not supported')));\n            }\n          }\n          abap.Classes['CL_HTTP_CLIENT'] = cl_http_client;\n\n//# sourceMappingURL=cl_http_client.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_http_client.clas.mjs?");

/***/ })

}]);