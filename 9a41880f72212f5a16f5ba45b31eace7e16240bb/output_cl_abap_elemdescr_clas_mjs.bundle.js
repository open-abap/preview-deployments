"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_elemdescr_clas_mjs"],{

/***/ "./output/cl_abap_elemdescr.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_abap_elemdescr.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_elemdescr\": () => (/* binding */ cl_abap_elemdescr)\n/* harmony export */ });\nconst {cl_abap_datadescr} = await __webpack_require__.e(/*! import() */ \"output_cl_abap_datadescr_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_datadescr.clas.mjs */ \"./output/cl_abap_datadescr.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_elemdescr.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_10 = new abap.types.Integer().set(10);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_60 = new abap.types.Integer().set(60);\nclass cl_abap_elemdescr extends cl_abap_datadescr {\n  async constructor_() {\n    await super.constructor_();\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.output_length = new abap.types.Integer();\n    this.edit_mask = new abap.types.Character({length: 7, qualifiedName: \"abap_editmask\"});\n    return this;\n  }\n  async get_ddic_field(INPUT) {\n    let p_flddescr = new abap.types.Structure({tabname: new abap.types.Character({length: 30, qualifiedName: \"DFIES-TABNAME\"}), fieldname: new abap.types.Character({length: 30, qualifiedName: \"DFIES-FIELDNAME\"}), langu: new abap.types.Character({qualifiedName: \"DFIES-LANGU\"}), position: new abap.types.Character({qualifiedName: \"DFIES-POSITION\"}), offset: new abap.types.Character({qualifiedName: \"DFIES-OFFSET\"}), domname: new abap.types.Character({qualifiedName: \"DFIES-DOMNAME\"}), rollname: new abap.types.Character({qualifiedName: \"DFIES-ROLLNAME\"}), checktable: new abap.types.Character({qualifiedName: \"DFIES-CHECKTABLE\"}), leng: new abap.types.Character({qualifiedName: \"DFIES-LENG\"}), intlen: new abap.types.Character({qualifiedName: \"DFIES-INTLEN\"}), outputlen: new abap.types.Character({qualifiedName: \"DFIES-OUTPUTLEN\"}), decimals: new abap.types.Character({qualifiedName: \"DFIES-DECIMALS\"}), datatype: new abap.types.Character({qualifiedName: \"DFIES-DATATYPE\"}), inttype: new abap.types.Character({qualifiedName: \"DFIES-INTTYPE\"}), reftable: new abap.types.Character({qualifiedName: \"DFIES-REFTABLE\"}), reffield: new abap.types.Character({qualifiedName: \"DFIES-REFFIELD\"}), precfield: new abap.types.Character({qualifiedName: \"DFIES-PRECFIELD\"}), authorid: new abap.types.Character({qualifiedName: \"DFIES-AUTHORID\"}), memoryid: new abap.types.Character({qualifiedName: \"DFIES-MEMORYID\"}), logflag: new abap.types.Character({qualifiedName: \"DFIES-LOGFLAG\"}), mask: new abap.types.Character({qualifiedName: \"DFIES-MASK\"}), masklen: new abap.types.Character({qualifiedName: \"DFIES-MASKLEN\"}), convexit: new abap.types.Character({qualifiedName: \"DFIES-CONVEXIT\"}), headlen: new abap.types.Character({qualifiedName: \"DFIES-HEADLEN\"}), scrlen1: new abap.types.Character({qualifiedName: \"DFIES-SCRLEN1\"}), scrlen2: new abap.types.Character({qualifiedName: \"DFIES-SCRLEN2\"}), scrlen3: new abap.types.Character({qualifiedName: \"DFIES-SCRLEN3\"}), fieldtext: new abap.types.Character({qualifiedName: \"DFIES-FIELDTEXT\"}), reptext: new abap.types.Character({qualifiedName: \"DFIES-REPTEXT\"}), scrtext_s: new abap.types.Character({qualifiedName: \"DFIES-SCRTEXT_S\"}), scrtext_m: new abap.types.Character({qualifiedName: \"DFIES-SCRTEXT_M\"}), scrtext_l: new abap.types.Character({qualifiedName: \"DFIES-SCRTEXT_L\"}), keyflag: new abap.types.Character({qualifiedName: \"DFIES-KEYFLAG\"}), lowercase: new abap.types.Character({qualifiedName: \"DFIES-LOWERCASE\"}), mac: new abap.types.Character({qualifiedName: \"DFIES-MAC\"}), genkey: new abap.types.Character({qualifiedName: \"DFIES-GENKEY\"}), noforkey: new abap.types.Character({qualifiedName: \"DFIES-NOFORKEY\"}), valexi: new abap.types.Character({qualifiedName: \"DFIES-VALEXI\"}), noauthch: new abap.types.Character({qualifiedName: \"DFIES-NOAUTHCH\"}), sign: new abap.types.Character({qualifiedName: \"DFIES-SIGN\"}), dynpfld: new abap.types.Character({qualifiedName: \"DFIES-DYNPFLD\"}), f4availabl: new abap.types.Character({qualifiedName: \"DFIES-F4AVAILABL\"}), comptype: new abap.types.Character({qualifiedName: \"DFIES-COMPTYPE\"}), outputstyle: new abap.types.Character({qualifiedName: \"DFIES-OUTPUTSTYLE\"})}, \"DFIES\");\n    let p_langu = new abap.types.Character({qualifiedName: \"sy-langu\"});\n    if (INPUT && INPUT.p_langu) {p_langu.set(INPUT.p_langu);}\n    if (INPUT === undefined || INPUT.p_langu === undefined) {p_langu = abap.builtin.sy.get().langu;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    return p_flddescr;\n  }\n  async get_ddic_fixed_values() {\n    let p_fixed_values = new abap.types.Table(new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"cl_abap_elemdescr=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"cl_abap_elemdescr=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"cl_abap_elemdescr=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"cl_abap_elemdescr=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"cl_abap_elemdescr=>ddtext\"})}, \"cl_abap_elemdescr=>fixvalue\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let lv_dummy = new abap.types.String();\n    let lv_name = new abap.types.String();\n    let ls_row = new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"cl_abap_elemdescr=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"cl_abap_elemdescr=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"cl_abap_elemdescr=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"cl_abap_elemdescr=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"cl_abap_elemdescr=>ddtext\"})}, \"cl_abap_elemdescr=>fixvalue\");\n    abap.statements.split({source: this.absolute_name, at: new abap.types.Character({length: 1}).set('='), targets: [lv_dummy,lv_name]});\n    for (const f of abap.DDIC[lv_name.get()]?.fixedValues || []) {\n      abap.statements.clear(ls_row);\n        ls_row.get().low.set(f.low || \"\");\n        ls_row.get().high.set(f.high || \"\");\n        ls_row.get().option.set(f.option || \"\");\n        ls_row.get().ddlanguage.set(f.ddlanguage || \"\");\n        ls_row.get().ddtext.set(f.ddtext || \"\");\n      abap.statements.append({source: ls_row, target: p_fixed_values});\n    }\n    return p_fixed_values;\n  }\n}\nabap.Classes['CL_ABAP_ELEMDESCR'] = cl_abap_elemdescr;\n\n//# sourceMappingURL=cl_abap_elemdescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_elemdescr.clas.mjs?");

/***/ })

}]);