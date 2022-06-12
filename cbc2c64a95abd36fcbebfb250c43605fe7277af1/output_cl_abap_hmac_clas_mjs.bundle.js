"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_hmac_clas_mjs"],{

/***/ "./output/cl_abap_hmac.clas.mjs":
/*!**************************************!*\
  !*** ./output/cl_abap_hmac.clas.mjs ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_hmac\": () => (/* binding */ cl_abap_hmac)\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_hmac.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_hmac {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async calculate_hmac_for_raw(INPUT) {\n    return cl_abap_hmac.calculate_hmac_for_raw(INPUT);\n  }\n  static async calculate_hmac_for_raw(INPUT) {\n    let if_algorithm = new abap.types.String();\n    if (INPUT && INPUT.if_algorithm) {if_algorithm.set(INPUT.if_algorithm);}\n    if (INPUT === undefined || INPUT.if_algorithm === undefined) {if_algorithm = new abap.types.Character({length: 4}).set('SHA1');}\n    let if_key = new abap.types.XString();\n    if (INPUT && INPUT.if_key) {if_key.set(INPUT.if_key);}\n    let if_data = new abap.types.XString();\n    if (INPUT && INPUT.if_data) {if_data.set(INPUT.if_data);}\n    let ef_hmacstring = new abap.types.String();\n    if (INPUT && INPUT.ef_hmacstring) {ef_hmacstring = INPUT.ef_hmacstring;}\n    let ef_hmacxstring = new abap.types.XString();\n    if (INPUT && INPUT.ef_hmacxstring) {ef_hmacxstring = INPUT.ef_hmacxstring;}\n    let lv_algorithm = new abap.types.String();\n    abap.statements.clear(ef_hmacstring);\n    abap.statements.clear(ef_hmacxstring);\n    lv_algorithm.set(abap.builtin.to_lower({val: if_algorithm}));\n    abap.statements.assert(abap.compare.eq(lv_algorithm, new abap.types.Character({length: 4}).set('sha1')) || abap.compare.eq(lv_algorithm, new abap.types.Character({length: 3}).set('md5')) || abap.compare.eq(lv_algorithm, new abap.types.Character({length: 6}).set('sha256')));\n    const crypto = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_crypto-browserify_index_js\"), __webpack_require__.e(\"_d546-_8131-_3fc0-_cd53-_4068-_e7e4-_7bec-_0aec-_fbf1-_ed1b-_d17e\")]).then(__webpack_require__.t.bind(__webpack_require__, /*! crypto */ \"./node_modules/crypto-browserify/index.js\", 19));\n    if (abap.compare.initial(if_key)) {\n      var shasum = crypto.createHash(lv_algorithm.get());\n      shasum.update(if_data.get(), \"hex\");\n      ef_hmacstring.set(shasum.digest(\"hex\").toUpperCase());\n    } else {\n      let hmac = crypto.createHmac(lv_algorithm.get(), Buffer.from(if_key.get(), \"hex\")).update(if_data.get(), \"hex\").digest(\"hex\").toUpperCase();\n      ef_hmacstring.set(hmac);\n    }\n    ef_hmacxstring.set(ef_hmacstring);\n  }\n  async calculate_hmac_for_char(INPUT) {\n    return cl_abap_hmac.calculate_hmac_for_char(INPUT);\n  }\n  static async calculate_hmac_for_char(INPUT) {\n    let if_algorithm = new abap.types.String();\n    if (INPUT && INPUT.if_algorithm) {if_algorithm.set(INPUT.if_algorithm);}\n    if (INPUT === undefined || INPUT.if_algorithm === undefined) {if_algorithm = new abap.types.Character({length: 4}).set('SHA1');}\n    let if_key = new abap.types.XString();\n    if (INPUT && INPUT.if_key) {if_key.set(INPUT.if_key);}\n    let if_data = new abap.types.String();\n    if (INPUT && INPUT.if_data) {if_data.set(INPUT.if_data);}\n    let ef_hmacstring = new abap.types.String();\n    if (INPUT && INPUT.ef_hmacstring) {ef_hmacstring = INPUT.ef_hmacstring;}\n    let ef_hmacxstring = new abap.types.XString();\n    if (INPUT && INPUT.ef_hmacxstring) {ef_hmacxstring = INPUT.ef_hmacxstring;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CL_ABAP_HMAC'] = cl_abap_hmac;\n\n//# sourceMappingURL=cl_abap_hmac.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_hmac.clas.mjs?");

/***/ })

}]);