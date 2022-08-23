"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_document_bcs_clas_mjs"],{

/***/ "./output/cl_document_bcs.clas.mjs":
/*!*****************************************!*\
  !*** ./output/cl_document_bcs.clas.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_document_bcs\": () => (/* binding */ cl_document_bcs)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_document_bcs.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_document_bcs {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_DOCUMENT_BCS\"];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create_document(INPUT) {\n    return cl_document_bcs.create_document(INPUT);\n  }\n  static async create_document(INPUT) {\n    let result = new abap.types.ABAPObject({qualifiedName: \"CL_DOCUMENT_BCS\"});\n    let i_type = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.i_type) {i_type.set(INPUT.i_type);}\n    let i_subject = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.i_subject) {i_subject.set(INPUT.i_subject);}\n    let i_text = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.i_text) {i_text = INPUT.i_text;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return result;\n  }\n  async add_attachment(INPUT) {\n    let i_attachment_type = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.i_attachment_type) {i_attachment_type.set(INPUT.i_attachment_type);}\n    let i_attachment_subject = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.i_attachment_subject) {i_attachment_subject.set(INPUT.i_attachment_subject);}\n    let i_attachment_size = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.i_attachment_size) {i_attachment_size.set(INPUT.i_attachment_size);}\n    let i_att_content_text = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.i_att_content_text) {i_att_content_text = INPUT.i_att_content_text;}\n    let i_att_content_hex = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.i_att_content_hex) {i_att_content_hex = INPUT.i_att_content_hex;}\n    let i_attachment_header = new abap.types.Table(new abap.types.Structure({line: new abap.types.Character({length: 255, qualifiedName: \"SO_TEXT255\"})}, \"SOLI\"), {\"withHeader\":false}, \"SOLI_TAB\");\n    if (INPUT && INPUT.i_attachment_header) {i_attachment_header.set(INPUT.i_attachment_header);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CL_DOCUMENT_BCS'] = cl_document_bcs;\n\n//# sourceMappingURL=cl_document_bcs.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_document_bcs.clas.mjs?");

/***/ })

}]);