"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_salv_columns_table_clas_mjs"],{

/***/ "./output/cl_salv_columns_table.clas.mjs":
/*!***********************************************!*\
  !*** ./output/cl_salv_columns_table.clas.mjs ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_salv_columns_table\": () => (/* binding */ cl_salv_columns_table)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_salv_columns_table.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_salv_columns_table {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async get_column(INPUT) {\n    let value = new abap.types.ABAPObject({qualifiedName: \"CL_SALV_COLUMN\"});\n    let columnname = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.columnname) {columnname.set(INPUT.columnname);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return value;\n  }\n  async set_cell_type_column(INPUT) {\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async set_optimize(INPUT) {\n    let value = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.value) {value = INPUT.value;}\n    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async get() {\n    let value = new abap.types.Character({length: 4});\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return value;\n  }\n  async set_color_column(INPUT) {\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n}\nabap.Classes['CL_SALV_COLUMNS_TABLE'] = cl_salv_columns_table;\n\n//# sourceMappingURL=cl_salv_columns_table.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_salv_columns_table.clas.mjs?");

/***/ })

}]);