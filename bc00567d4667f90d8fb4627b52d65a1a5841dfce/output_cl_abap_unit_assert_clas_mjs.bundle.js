"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_unit_assert_clas_mjs"],{

/***/ "./output/cl_abap_unit_assert.clas.mjs":
/*!*********************************************!*\
  !*** ./output/cl_abap_unit_assert.clas.mjs ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_unit_assert\": () => (/* binding */ cl_abap_unit_assert)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_unit_assert.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_unit_assert {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async assert_bound(INPUT) {\n    return cl_abap_unit_assert.assert_bound(INPUT);\n  }\n  static async assert_bound(INPUT) {\n    let act = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.initial(act)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected value to be bound`)});\n    }\n  }\n  async assert_not_bound(INPUT) {\n    return cl_abap_unit_assert.assert_not_bound(INPUT);\n  }\n  static async assert_not_bound(INPUT) {\n    let act = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.initial(act) === false) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected value to not be bound`)});\n    }\n  }\n  async assert_char_cp(INPUT) {\n    return cl_abap_unit_assert.assert_char_cp(INPUT);\n  }\n  static async assert_char_cp(INPUT) {\n    let act = new abap.types.Character();\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let exp = new abap.types.Character();\n    if (INPUT && INPUT.exp) {exp = INPUT.exp;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.np(act, exp)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();\n    }\n  }\n  async fail(INPUT) {\n    return cl_abap_unit_assert.fail(INPUT);\n  }\n  static async fail(INPUT) {\n    let msg = new abap.types.Character();\n    if (INPUT && INPUT.msg) {msg = INPUT.msg;}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    let detail = new abap.types.Character();\n    if (INPUT && INPUT.detail) {detail = INPUT.detail;}\n    throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();\n  }\n  async skip(INPUT) {\n    return cl_abap_unit_assert.skip(INPUT);\n  }\n  static async skip(INPUT) {\n    let msg = new abap.types.Character();\n    if (INPUT && INPUT.msg) {msg = INPUT.msg;}\n    let detail = new abap.types.Character();\n    if (INPUT && INPUT.detail) {detail = INPUT.detail;}\n    return;\n  }\n  async assert_differs(INPUT) {\n    return cl_abap_unit_assert.assert_differs(INPUT);\n  }\n  static async assert_differs(INPUT) {\n    let act = new abap.types.String();\n    if (INPUT && INPUT.act) {act.set(INPUT.act);}\n    let exp = new abap.types.String();\n    if (INPUT && INPUT.exp) {exp.set(INPUT.exp);}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.eq(act, exp)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected different values`), act: act, exp: exp});\n    }\n  }\n  async assert_true(INPUT) {\n    return cl_abap_unit_assert.assert_true(INPUT);\n  }\n  static async assert_true(INPUT) {\n    let act = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.act) {act.set(INPUT.act);}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.ne(act, abap.builtin.abap_true)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected abap_true`)});\n    }\n  }\n  async assert_false(INPUT) {\n    return cl_abap_unit_assert.assert_false(INPUT);\n  }\n  static async assert_false(INPUT) {\n    let act = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.act) {act.set(INPUT.act);}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.ne(act, abap.builtin.abap_false)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected abap_false`)});\n    }\n  }\n  async assert_equals(INPUT) {\n    return cl_abap_unit_assert.assert_equals(INPUT);\n  }\n  static async assert_equals(INPUT) {\n    let act = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let exp = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.exp) {exp = INPUT.exp;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let tol = new abap.types.Float();\n    if (INPUT && INPUT.tol) {tol.set(INPUT.tol);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    let type1 = new abap.types.Character();\n    let type2 = new abap.types.Character();\n    let index = new abap.types.Integer();\n    let diff = new abap.types.Float();\n    let fs_tab1_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let fs_row1_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n    let fs_tab2_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let fs_row2_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n    abap.statements.describe({field: act, type: type1});\n    abap.statements.describe({field: exp, type: type2});\n    if (abap.compare.ca(type1, new abap.types.Character({length: 10}).set('CgyIFPDTXN'))) {\n      if (abap.compare.initial(type2) === false) {\n        if (abap.compare.na(type2, new abap.types.Character({length: 10}).set('CgyIFPDTXN'))) {\n          throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Unexpected types`)});\n        }\n      }\n    } else if (abap.compare.initial(type1) === false && abap.compare.initial(type2) === false) {\n      if (abap.compare.ne(type1, type2)) {\n        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Unexpected types`)});\n      }\n    }\n    if (abap.compare.eq(type1, new abap.types.Character({length: 1}).set('h'))) {\n      if (abap.compare.ne(abap.builtin.lines({val: act}), abap.builtin.lines({val: exp}))) {\n        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected table to contain '${abap.builtin.lines({val: exp}).get()}' rows , got '${abap.builtin.lines({val: act}).get()}'`)});\n      }\n      abap.statements.assign({target: fs_tab1_, source: act});\n      abap.statements.assign({target: fs_tab2_, source: exp});\n      const unique63 = abap.builtin.lines({val: act}).get();\n      for (let unique64 = 0; unique64 < unique63; unique64++) {\n        abap.builtin.sy.get().index.set(unique64 + 1);\n        index.set(abap.builtin.sy.get().index);\n        abap.statements.readTable(fs_tab1_,{index: index,assigning: fs_row1_});\n        await this.assert_subrc();\n        abap.statements.readTable(fs_tab2_,{index: index,assigning: fs_row2_});\n        await this.assert_subrc();\n        await this.assert_equals({act: fs_row1_, exp: fs_row2_});\n      }\n    } else if (INPUT && INPUT.tol) {\n      diff.set(abap.operators.minus(exp,act));\n      if (abap.compare.ge(diff, tol)) {\n        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();\n      }\n    } else if (abap.compare.ne(act, exp)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected '${exp.get()}', got '${act.get()}'`), actual: act, expected: exp});\n    }\n  }\n  async assert_not_initial(INPUT) {\n    return cl_abap_unit_assert.assert_not_initial(INPUT);\n  }\n  static async assert_not_initial(INPUT) {\n    let act = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.initial(act)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected non initial value`)});\n    }\n  }\n  async assert_initial(INPUT) {\n    return cl_abap_unit_assert.assert_initial(INPUT);\n  }\n  static async assert_initial(INPUT) {\n    let act = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.act) {act = INPUT.act;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.initial(act) === false) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected initial value`)});\n    }\n  }\n  async assert_subrc(INPUT) {\n    return cl_abap_unit_assert.assert_subrc(INPUT);\n  }\n  static async assert_subrc(INPUT) {\n    let exp = new abap.types.Integer();\n    if (INPUT && INPUT.exp) {exp.set(INPUT.exp);}\n    if (INPUT === undefined || INPUT.exp === undefined) {exp = constant_0;}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.ne(abap.builtin.sy.get().subrc, exp)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({message: new abap.types.String().set(`Expected sy-subrc to equal ${exp.get()}, got ${abap.builtin.sy.get().subrc.get()}`)});\n    }\n  }\n  async assert_number_between(INPUT) {\n    return cl_abap_unit_assert.assert_number_between(INPUT);\n  }\n  static async assert_number_between(INPUT) {\n    let lower = new abap.types.Integer();\n    if (INPUT && INPUT.lower) {lower.set(INPUT.lower);}\n    let upper = new abap.types.Integer();\n    if (INPUT && INPUT.upper) {upper.set(INPUT.upper);}\n    let number = new abap.types.Integer();\n    if (INPUT && INPUT.number) {number.set(INPUT.number);}\n    let msg = new abap.types.String();\n    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}\n    let quit = new abap.types.Integer();\n    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}\n    let level = new abap.types.Integer();\n    if (INPUT && INPUT.level) {level.set(INPUT.level);}\n    if (abap.compare.lt(number, lower) || abap.compare.gt(number, upper)) {\n      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();\n    }\n  }\n}\nabap.Classes['CL_ABAP_UNIT_ASSERT'] = cl_abap_unit_assert;\n\n//# sourceMappingURL=cl_abap_unit_assert.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_unit_assert.clas.mjs?");

/***/ })

}]);