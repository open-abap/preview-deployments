"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_tstmp_clas_mjs"],{

/***/ "./output/cl_abap_tstmp.clas.mjs":
/*!***************************************!*\
  !*** ./output/cl_abap_tstmp.clas.mjs ***!
  \***************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_tstmp\": () => (/* binding */ cl_abap_tstmp)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_tstmp.clas.abap\nconst constant_minus_1 = new abap.types.Integer().set(-1);\nclass cl_abap_tstmp {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async move(INPUT) {\n    return cl_abap_tstmp.move(INPUT);\n  }\n  static async move(INPUT) {\n    let tstmp_src = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp_src) {tstmp_src.set(INPUT.tstmp_src);}\n    let tstmp_tgt = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp_tgt) {tstmp_tgt = INPUT.tstmp_tgt;}\n    tstmp_tgt.set(tstmp_src);\n  }\n  async systemtstmp_syst2utc(INPUT) {\n    return cl_abap_tstmp.systemtstmp_syst2utc(INPUT);\n  }\n  static async systemtstmp_syst2utc(INPUT) {\n    let syst_date = new abap.types.Date();\n    if (INPUT && INPUT.syst_date) {syst_date.set(INPUT.syst_date);}\n    let syst_time = new abap.types.Time();\n    if (INPUT && INPUT.syst_time) {syst_time.set(INPUT.syst_time);}\n    let utc_tstmp = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.utc_tstmp) {utc_tstmp = INPUT.utc_tstmp;}\n    utc_tstmp.set(new abap.types.String().set(`${syst_date.get()}${syst_time.get()}`));\n  }\n  async subtract(INPUT) {\n    return cl_abap_tstmp.subtract(INPUT);\n  }\n  static async subtract(INPUT) {\n    let r_secs = new abap.types.Integer();\n    let tstmp1 = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp1) {tstmp1.set(INPUT.tstmp1);}\n    let tstmp2 = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp2) {tstmp2.set(INPUT.tstmp2);}\n    let str = new abap.types.String();\n    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp1,{\"timestamp\":\"iso\"})}`));\n    let t1 = Date.parse(str.get());\n    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp2,{\"timestamp\":\"iso\"})}`));\n    let t2 = Date.parse(str.get());\n    r_secs.set((t1 - t2)/1000);\n    return r_secs;\n  }\n  async add(INPUT) {\n    return cl_abap_tstmp.add(INPUT);\n  }\n  static async add(INPUT) {\n    let time = new abap.types.Packed({length: 15, decimals: 0});\n    let tstmp = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp) {tstmp.set(INPUT.tstmp);}\n    let secs = new abap.types.Integer();\n    if (INPUT && INPUT.secs) {secs.set(INPUT.secs);}\n    let str = new abap.types.String();\n    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp,{\"timestamp\":\"iso\"})}`));\n    let t1 = new Date(Date.parse(str.get() + \"Z\"));\n    t1.setSeconds( t1.getSeconds() + secs.get() );\n    time.set(t1.toISOString().slice(0, 19).replace(/-/g, \"\").replace(/:/g, \"\").replace(\"T\", \"\"));\n    return time;\n  }\n  async subtractsecs(INPUT) {\n    return cl_abap_tstmp.subtractsecs(INPUT);\n  }\n  static async subtractsecs(INPUT) {\n    let time = new abap.types.Packed({length: 15, decimals: 0});\n    let tstmp = new abap.types.Packed({length: 1, decimals: 0});\n    if (INPUT && INPUT.tstmp) {tstmp.set(INPUT.tstmp);}\n    let secs = new abap.types.Integer();\n    if (INPUT && INPUT.secs) {secs.set(INPUT.secs);}\n    let lv_secs = new abap.types.Integer();\n    lv_secs.set(abap.operators.multiply(secs,constant_minus_1));\n    time.set((await this.add({tstmp: tstmp, secs: lv_secs})));\n    return time;\n  }\n}\nabap.Classes['CL_ABAP_TSTMP'] = cl_abap_tstmp;\n\n//# sourceMappingURL=cl_abap_tstmp.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_tstmp.clas.mjs?");

/***/ })

}]);