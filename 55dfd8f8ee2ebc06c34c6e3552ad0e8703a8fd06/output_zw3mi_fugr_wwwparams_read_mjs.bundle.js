"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_zw3mi_fugr_wwwparams_read_mjs"],{

/***/ "./output/zw3mi.fugr.wwwparams_read.mjs":
/*!**********************************************!*\
  !*** ./output/zw3mi.fugr.wwwparams_read.mjs ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// zw3mi.fugr.wwwparams_read.abap\nconst constant_1 = new abap.types.Integer().set(1);\nasync function wwwparams_read(INPUT) {\n  // importing RELID WWWPARAMS-RELID\n  let relid = INPUT.exporting.relid;\n  // importing OBJID WWWPARAMS-OBJID\n  let objid = INPUT.exporting.objid;\n  // importing NAME C\n  let name = INPUT.exporting.name;\n  // exporting VALUE C\n  let value = INPUT.importing.value;\n  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n}\nabap.FunctionModules['WWWPARAMS_READ'] = wwwparams_read;\n//# sourceMappingURL=zw3mi.fugr.wwwparams_read.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/zw3mi.fugr.wwwparams_read.mjs?");

/***/ })

}]);