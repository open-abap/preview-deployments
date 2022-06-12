"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_number_get_next_fugr_number_get_next_mjs"],{

/***/ "./output/number_get_next.fugr.number_get_next.mjs":
/*!*********************************************************!*\
  !*** ./output/number_get_next.fugr.number_get_next.mjs ***!
  \*********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// number_get_next.fugr.number_get_next.abap\nconst constant_0 = new abap.types.Integer().set(0);\nasync function number_get_next(input) {\n  // importing NR_RANGE_NR undefined\n  let nr_range_nr = input.exporting.nr_range_nr;\n  // importing OBJECT undefined\n  let object = input.exporting.object;\n  // exporting NUMBER undefined\n  let number = input.importing.number;\n  await abap.Classes['KERNEL_NUMBERRANGE'].number_get({nr_range_nr: nr_range_nr, object: object, number: number});\n  abap.builtin.sy.get().subrc.set(constant_0);\n}\nabap.FunctionModules['NUMBER_GET_NEXT'] = number_get_next;\n//# sourceMappingURL=number_get_next.fugr.number_get_next.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/number_get_next.fugr.number_get_next.mjs?");

/***/ })

}]);