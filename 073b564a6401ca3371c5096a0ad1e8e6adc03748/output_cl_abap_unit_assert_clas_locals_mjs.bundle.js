"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_unit_assert_clas_locals_mjs"],{

/***/ "./output/cl_abap_unit_assert.clas.locals.mjs":
/*!****************************************************!*\
  !*** ./output/cl_abap_unit_assert.clas.locals.mjs ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_dump\": () => (/* binding */ lcl_dump)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_unit_assert.clas.locals_imp.abap\nclass lcl_dump {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  static ATTRIBUTES = {};\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async to_string(INPUT) {\n    return lcl_dump.to_string(INPUT);\n  }\n  static async to_string(INPUT) {\n    let rv_str = new abap.types.String({qualifiedName: \"STRING\"});\n    let iv_val = new abap.types.Character(4);\n    if (INPUT && INPUT.iv_val) {iv_val = INPUT.iv_val;}\n    let lv_type = new abap.types.Character(1, {});\n    abap.statements.describe({field: iv_val, type: lv_type});\n    let unique102 = lv_type;\n    if (abap.compare.eq(unique102, new abap.types.Character(1).set('u')) || abap.compare.eq(unique102, new abap.types.Character(1).set('v'))) {\n      rv_str.set((await this.dump_structure({iv_val: iv_val})));\n    } else if (abap.compare.eq(unique102, new abap.types.Character(1).set('h'))) {\n      rv_str.set(new abap.types.String().set(`[itab]`));\n    } else {\n      rv_str.set(new abap.types.String().set(`${abap.templateFormatting(iv_val)}`));\n    }\n    return rv_str;\n  }\n  async dump_structure(INPUT) {\n    return lcl_dump.dump_structure(INPUT);\n  }\n  static async dump_structure(INPUT) {\n    let rv_str = new abap.types.String({qualifiedName: \"STRING\"});\n    let iv_val = new abap.types.Character(4);\n    if (INPUT && INPUT.iv_val) {iv_val = INPUT.iv_val;}\n    let lt_components = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: \"STRING\"}), {\"withHeader\":false,\"keyType\":\"DEFAULT\",\"primaryKey\":{\"name\":\"primary_key\",\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]},\"secondary\":[]}, \"\");\n    let lv_name = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_str = new abap.types.String({qualifiedName: \"STRING\"});\n    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Character(4));\n    Object.keys(iv_val.get()).forEach((name) => lt_components.append(new abap.types.String().set(name)));\n    for await (const unique103 of abap.statements.loop(lt_components)) {\n      lv_name.set(unique103);\n      if (abap.compare.ne(rv_str, new abap.types.Character(1).set(''))) {\n        rv_str.set(abap.operators.concat(rv_str,new abap.types.String().set(`, `)));\n      }\n      abap.statements.assign({component: lv_name, target: fs_fs_, source: iv_val});\n      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0)));\n      lv_str.set((await this.to_string({iv_val: fs_fs_})));\n      rv_str.set(abap.operators.concat(rv_str,abap.operators.concat(lv_name,abap.operators.concat(new abap.types.String().set(`: `),new abap.types.String().set(`${abap.templateFormatting(lv_str)}`)))));\n    }\n    return rv_str;\n  }\n}\nabap.Classes['CLAS-CL_ABAP_UNIT_ASSERT-LCL_DUMP'] = lcl_dump;\n\n//# sourceMappingURL=cl_abap_unit_assert.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_unit_assert.clas.locals.mjs?");

/***/ })

}]);