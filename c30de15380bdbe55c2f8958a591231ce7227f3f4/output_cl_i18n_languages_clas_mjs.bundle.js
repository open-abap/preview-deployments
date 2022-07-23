"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_i18n_languages_clas_mjs"],{

/***/ "./output/cl_i18n_languages.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_i18n_languages.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_i18n_languages\": () => (/* binding */ cl_i18n_languages)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_i18n_languages.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_i18n_languages {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async sap1_to_sap2(INPUT) {\n    return cl_i18n_languages.sap1_to_sap2(INPUT);\n  }\n  static async sap1_to_sap2(INPUT) {\n    let re_lang_sap2 = new abap.types.String();\n    let im_lang_sap1 = new abap.types.Character({qualifiedName: \"sy-langu\"});\n    if (INPUT && INPUT.im_lang_sap1) {im_lang_sap1 = INPUT.im_lang_sap1;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    abap.builtin.sy.get().subrc.set(0);\n    return re_lang_sap2;\n  }\n  async sap2_to_iso639_1(INPUT) {\n    return cl_i18n_languages.sap2_to_iso639_1(INPUT);\n  }\n  static async sap2_to_iso639_1(INPUT) {\n    let im_lang_sap2 = new abap.types.String();\n    if (INPUT && INPUT.im_lang_sap2) {im_lang_sap2.set(INPUT.im_lang_sap2);}\n    let ex_lang_iso639 = new abap.types.String();\n    if (INPUT && INPUT.ex_lang_iso639) {ex_lang_iso639 = INPUT.ex_lang_iso639;}\n    let ex_country = new abap.types.Character({length: 3, qualifiedName: \"LAND1\"});\n    if (INPUT && INPUT.ex_country) {ex_country = INPUT.ex_country;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n    abap.builtin.sy.get().subrc.set(0);\n  }\n}\nabap.Classes['CL_I18N_LANGUAGES'] = cl_i18n_languages;\n\n//# sourceMappingURL=cl_i18n_languages.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_i18n_languages.clas.mjs?");

/***/ })

}]);