"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_openabap_fugr_system_installed_languages_mjs"],{

/***/ "./output/openabap.fugr.system_installed_languages.mjs":
/*!*************************************************************!*\
  !*** ./output/openabap.fugr.system_installed_languages.mjs ***!
  \*************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// openabap.fugr.system_installed_languages.abap\nconst constant_0 = new abap.types.Integer().set(0);\nasync function system_installed_languages(INPUT) {\n  // exporting LANGUAGES undefined\n  let languages = INPUT.importing.languages;\n  languages.set(abap.builtin.sy.get().langu);\n  abap.builtin.sy.get().subrc.set(constant_0);\n}\nabap.FunctionModules['SYSTEM_INSTALLED_LANGUAGES'] = system_installed_languages;\n//# sourceMappingURL=openabap.fugr.system_installed_languages.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/openabap.fugr.system_installed_languages.mjs?");

/***/ })

}]);