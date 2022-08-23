"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cx_sy_open_sql_error_clas_mjs"],{

/***/ "./output/cx_sy_open_sql_error.clas.mjs":
/*!**********************************************!*\
  !*** ./output/cx_sy_open_sql_error.clas.mjs ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cx_sy_open_sql_error\": () => (/* binding */ cx_sy_open_sql_error)\n/* harmony export */ });\nconst {cx_sy_sql_error} = await __webpack_require__.e(/*! import() */ \"output_cx_sy_sql_error_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_sy_sql_error.clas.mjs */ \"./output/cx_sy_sql_error.clas.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cx_sy_open_sql_error.clas.abap\nclass cx_sy_open_sql_error extends cx_sy_sql_error {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_(INPUT) {\n    await super.constructor_(INPUT);\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    let sqlmsg = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.sqlmsg) {sqlmsg.set(INPUT.sqlmsg);}\n    \n    return this;\n  }\n}\nabap.Classes['CX_SY_OPEN_SQL_ERROR'] = cx_sy_open_sql_error;\n\n//# sourceMappingURL=cx_sy_open_sql_error.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cx_sy_open_sql_error.clas.mjs?");

/***/ })

}]);