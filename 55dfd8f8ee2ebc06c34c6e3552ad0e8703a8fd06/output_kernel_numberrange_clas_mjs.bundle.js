"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_kernel_numberrange_clas_mjs"],{

/***/ "./output/kernel_numberrange.clas.mjs":
/*!********************************************!*\
  !*** ./output/kernel_numberrange.clas.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kernel_numberrange\": () => (/* binding */ kernel_numberrange)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// kernel_numberrange.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nclass kernel_numberrange {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async number_get(INPUT) {\n    return kernel_numberrange.number_get(INPUT);\n  }\n  static async number_get(INPUT) {\n    let nr_range_nr = new abap.types.Character({length: 2, qualifiedName: \"cl_numberrange_runtime=>nr_interval\"});\n    if (INPUT && INPUT.nr_range_nr) {nr_range_nr.set(INPUT.nr_range_nr);}\n    let object = new abap.types.Character({length: 10, qualifiedName: \"cl_numberrange_runtime=>nr_object\"});\n    if (INPUT && INPUT.object) {object.set(INPUT.object);}\n    let number = new abap.types.Numc({length: 20});\n    if (INPUT && INPUT.number) {number = INPUT.number;}\n    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Structure({nr_range_nr: new abap.types.Character({length: 2, qualifiedName: \"cl_numberrange_runtime=>nr_interval\"}), object: new abap.types.Character({length: 10, qualifiedName: \"cl_numberrange_runtime=>nr_object\"}), number: new abap.types.Numc({length: 20})}, \"kernel_numberrange=>ty_status\"));\n    abap.statements.readTable(kernel_numberrange.status,{assigning: fs_row_,withKey: (i) => {return abap.compare.eq(i.nr_range_nr, nr_range_nr) && abap.compare.eq(i.object, object);}});\n    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {\n      fs_row_.get().number.set(abap.operators.add(fs_row_.get().number,constant_1));\n    } else {\n      fs_row_.assign(kernel_numberrange.status.appendInitial());\n      fs_row_.get().nr_range_nr.set(nr_range_nr);\n      fs_row_.get().object.set(object);\n      fs_row_.get().number.set(constant_1);\n    }\n    number.set(fs_row_.get().number);\n  }\n}\nabap.Classes['KERNEL_NUMBERRANGE'] = kernel_numberrange;\nkernel_numberrange.status = new abap.types.Table(new abap.types.Structure({nr_range_nr: new abap.types.Character({length: 2, qualifiedName: \"cl_numberrange_runtime=>nr_interval\"}), object: new abap.types.Character({length: 10, qualifiedName: \"cl_numberrange_runtime=>nr_object\"}), number: new abap.types.Numc({length: 20})}, \"kernel_numberrange=>ty_status\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n\n//# sourceMappingURL=kernel_numberrange.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/kernel_numberrange.clas.mjs?");

/***/ })

}]);