"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_tabledescr_clas_mjs"],{

/***/ "./output/cl_abap_tabledescr.clas.mjs":
/*!********************************************!*\
  !*** ./output/cl_abap_tabledescr.clas.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_tabledescr\": () => (/* binding */ cl_abap_tabledescr)\n/* harmony export */ });\nconst {cl_abap_datadescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_datadescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_datadescr.clas.mjs */ \"./output/cl_abap_datadescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_tabledescr.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_tabledescr extends cl_abap_datadescr {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async create(INPUT) {\n    return cl_abap_tabledescr.create(INPUT);\n  }\n  static async create(INPUT) {\n    let ref = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TABLEDESCR\"});\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    if (INPUT && INPUT.type) {type.set(INPUT.type);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return ref;\n  }\n  async get_with_keys(INPUT) {\n    return cl_abap_tabledescr.get_with_keys(INPUT);\n  }\n  static async get_with_keys(INPUT) {\n    let val = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TABLEDESCR\"});\n    let p_line_type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_DATADESCR\"});\n    if (INPUT && INPUT.p_line_type) {p_line_type.set(INPUT.p_line_type);}\n    let p_keys = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.p_keys) {p_keys = INPUT.p_keys;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async get(INPUT) {\n    return cl_abap_tabledescr.get(INPUT);\n  }\n  static async get(INPUT) {\n    let val = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TABLEDESCR\"});\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    if (INPUT && INPUT.type) {type.set(INPUT.type);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return val;\n  }\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.table_kind = new abap.types.Character();\n    this.has_unique_key = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    this.lo_type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    this.tablekind_any = cl_abap_tabledescr.tablekind_any;\n    this.tablekind_std = cl_abap_tabledescr.tablekind_std;\n    this.tablekind_index = cl_abap_tabledescr.tablekind_index;\n    this.tablekind_hashed = cl_abap_tabledescr.tablekind_hashed;\n    this.tablekind_sorted = cl_abap_tabledescr.tablekind_sorted;\n    this.keydefkind_default = cl_abap_tabledescr.keydefkind_default;\n    this.keydefkind_tableline = cl_abap_tabledescr.keydefkind_tableline;\n    this.keydefkind_user = cl_abap_tabledescr.keydefkind_user;\n    this.keydefkind_empty = cl_abap_tabledescr.keydefkind_empty;\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let lv_dummy = new abap.types.Integer({qualifiedName: \"I\"});\n    let lv_flag = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    lv_flag.set(data.getOptions().isUnique === true ? \"X\" : \"\");\n    this.has_unique_key.set(lv_flag);\n    lv_dummy = data.getRowType();\n    this.lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: lv_dummy})));\n    return this;\n  }\n  async get_table_line_type() {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_DATADESCR\"});\n    await abap.statements.cast(type, this.lo_type);\n    return type;\n  }\n}\nabap.Classes['CL_ABAP_TABLEDESCR'] = cl_abap_tabledescr;\ncl_abap_tabledescr.tablekind_any = new abap.types.Character();\ncl_abap_tabledescr.tablekind_any.set('A');\ncl_abap_tabledescr.tablekind_std = new abap.types.Character();\ncl_abap_tabledescr.tablekind_std.set('S');\ncl_abap_tabledescr.tablekind_index = new abap.types.Character();\ncl_abap_tabledescr.tablekind_index.set('I');\ncl_abap_tabledescr.tablekind_hashed = new abap.types.Character();\ncl_abap_tabledescr.tablekind_hashed.set('H');\ncl_abap_tabledescr.tablekind_sorted = new abap.types.Character();\ncl_abap_tabledescr.tablekind_sorted.set('O');\ncl_abap_tabledescr.keydefkind_default = new abap.types.Character();\ncl_abap_tabledescr.keydefkind_default.set('D');\ncl_abap_tabledescr.keydefkind_tableline = new abap.types.Character();\ncl_abap_tabledescr.keydefkind_tableline.set('L');\ncl_abap_tabledescr.keydefkind_user = new abap.types.Character();\ncl_abap_tabledescr.keydefkind_user.set('U');\ncl_abap_tabledescr.keydefkind_empty = new abap.types.Character();\ncl_abap_tabledescr.keydefkind_empty.set('E');\n\n//# sourceMappingURL=cl_abap_tabledescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_tabledescr.clas.mjs?");

/***/ })

}]);