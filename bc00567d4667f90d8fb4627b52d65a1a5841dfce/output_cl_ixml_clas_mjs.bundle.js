"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_ixml_clas_mjs"],{

/***/ "./output/cl_ixml.clas.mjs":
/*!*********************************!*\
  !*** ./output/cl_ixml.clas.mjs ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_ixml\": () => (/* binding */ cl_ixml)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_ixml_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_ixml.clas.locals.mjs */ \"./output/cl_ixml.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_ixml.clas.abap\nclass cl_ixml {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async create() {\n    return cl_ixml.create();\n  }\n  static async create() {\n    let xml = new abap.types.ABAPObject({qualifiedName: \"IF_IXML\"});\n    xml.set(await (new abap.Classes['CL_IXML']()).constructor_());\n    return xml;\n  }\n  async if_ixml$create_encoding(INPUT) {\n    let rval = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_ENCODING\"});\n    let byte_order = new abap.types.String();\n    if (INPUT && INPUT.byte_order) {byte_order.set(INPUT.byte_order);}\n    let character_set = new abap.types.String();\n    if (INPUT && INPUT.character_set) {character_set.set(INPUT.character_set);}\n    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_ENCODING']()).constructor_());\n    return rval;\n  }\n  async if_ixml$create_document() {\n    let doc = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_DOCUMENT\"});\n    doc.set(await (new abap.Classes['CLAS-CL_IXML-LCL_DOCUMENT']()).constructor_());\n    return doc;\n  }\n  async if_ixml$create_stream_factory() {\n    let stream = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_STREAM_FACTORY\"});\n    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_STREAM_FACTORY']()).constructor_());\n    return stream;\n  }\n  async if_ixml$create_renderer(INPUT) {\n    let renderer = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_RENDERER\"});\n    let ostream = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_OSTREAM\"});\n    if (INPUT && INPUT.ostream) {ostream.set(INPUT.ostream);}\n    let document = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_DOCUMENT\"});\n    if (INPUT && INPUT.document) {document.set(INPUT.document);}\n    renderer.set(await (new abap.Classes['CLAS-CL_IXML-LCL_RENDERER']()).constructor_());\n    return renderer;\n  }\n  async if_ixml$create_parser(INPUT) {\n    let parser = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_PARSER\"});\n    let stream_factory = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_STREAM_FACTORY\"});\n    if (INPUT && INPUT.stream_factory) {stream_factory.set(INPUT.stream_factory);}\n    let istream = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_ISTREAM\"});\n    if (INPUT && INPUT.istream) {istream.set(INPUT.istream);}\n    let document = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_DOCUMENT\"});\n    if (INPUT && INPUT.document) {document.set(INPUT.document);}\n    parser.set(await (new abap.Classes['CLAS-CL_IXML-LCL_PARSER']()).constructor_({istream: istream, document: document}));\n    return parser;\n  }\n}\nabap.Classes['CL_IXML'] = cl_ixml;\n\n//# sourceMappingURL=cl_ixml.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_ixml.clas.mjs?");

/***/ })

}]);