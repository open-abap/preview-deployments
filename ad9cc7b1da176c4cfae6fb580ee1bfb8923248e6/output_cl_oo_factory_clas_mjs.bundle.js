"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_oo_factory_clas_mjs"],{

/***/ "./output/cl_oo_factory.clas.mjs":
/*!***************************************!*\
  !*** ./output/cl_oo_factory.clas.mjs ***!
  \***************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_oo_factory\": () => (/* binding */ cl_oo_factory)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_oo_factory.clas.abap\nclass cl_oo_factory {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_OO_CLIF_SOURCE\"];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_name = new abap.types.String({qualifiedName: \"STRING\"});\n    return this;\n  }\n  async create_instance() {\n    return cl_oo_factory.create_instance();\n  }\n  static async create_instance() {\n    let result = new abap.types.ABAPObject({qualifiedName: \"CL_OO_FACTORY\"});\n    result.set(await (new abap.Classes['CL_OO_FACTORY']()).constructor_());\n    return result;\n  }\n  async create_clif_source(INPUT) {\n    let result = new abap.types.ABAPObject({qualifiedName: \"IF_OO_CLIF_SOURCE\"});\n    let clif_name = new abap.types.Character();\n    if (INPUT && INPUT.clif_name) {clif_name = INPUT.clif_name;}\n    result.set(this.me);\n    this.mv_name.set(abap.builtin.to_upper({val: clif_name}));\n    return result;\n  }\n  async if_oo_clif_source$get_source(INPUT) {\n    let source = new abap.types.Table(new abap.types.String(), {\"withHeader\":false}, \"STRING_TABLE\");\n    if (INPUT && INPUT.source) {source = INPUT.source;}\n    let ls_data = new abap.types.Structure({progname: new abap.types.Character({length: 40, qualifiedName: \"REPOSRC-PROGNAME\"}), data: new abap.types.String({qualifiedName: \"REPOSRC-DATA\"})}, \"REPOSRC\");\n    await abap.statements.select(ls_data, {select: \"SELECT * FROM reposrc WHERE progname = '\" + this.mv_name.get() + \"' UP TO 1 ROWS\", primaryKey: [\"progname\"]});\n    abap.statements.split({source: ls_data.get().data, at: new abap.types.String().set(`\\n`), table: source});\n  }\n}\nabap.Classes['CL_OO_FACTORY'] = cl_oo_factory;\n\n//# sourceMappingURL=cl_oo_factory.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_oo_factory.clas.mjs?");

/***/ })

}]);