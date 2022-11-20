"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_zip_clas_locals_mjs"],{

/***/ "./output/cl_abap_zip.clas.locals.mjs":
/*!********************************************!*\
  !*** ./output/cl_abap_zip.clas.locals.mjs ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_stream\": () => (/* binding */ lcl_stream)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_zip.clas.locals_imp.abap\nclass lcl_stream {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_xstr = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    return this;\n  }\n  async append(INPUT) {\n    let iv_xstr = new abap.types.Hex();\n    if (INPUT && INPUT.iv_xstr) {iv_xstr = INPUT.iv_xstr;}\n    abap.statements.concatenate({source: [this.mv_xstr, iv_xstr], target: this.mv_xstr});\n  }\n  async get() {\n    let rv_xstr = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    rv_xstr.set(this.mv_xstr);\n    return rv_xstr;\n  }\n  async append_date(INPUT) {\n    let iv_date = new abap.types.Date({qualifiedName: \"D\"});\n    if (INPUT && INPUT.iv_date) {iv_date.set(INPUT.iv_date);}\n  }\n  async append_time(INPUT) {\n    let iv_time = new abap.types.Time({qualifiedName: \"T\"});\n    if (INPUT && INPUT.iv_time) {iv_time.set(INPUT.iv_time);}\n  }\n  async append_int2(INPUT) {\n    let iv_int = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}\n    let lv_hex = new abap.types.Hex();\n    lv_hex.set(iv_int);\n    await this.append({iv_xstr: lv_hex});\n  }\n  async append_int4(INPUT) {\n    let iv_int = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}\n    let lv_hex = new abap.types.Hex({length: 2});\n    lv_hex.set(iv_int);\n    await this.append({iv_xstr: lv_hex});\n  }\n  async append_crc(INPUT) {\n    let rv_crc = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    let iv_xstring = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.iv_xstring) {iv_xstring.set(INPUT.iv_xstring);}\n    let magic_nr = new abap.types.Hex({length: 4});\n    magic_nr.set('EDB88320');\n    let mffffffff = new abap.types.Hex({length: 4});\n    mffffffff.set('FFFFFFFF');\n    let m7fffffff = new abap.types.Hex({length: 4});\n    m7fffffff.set('7FFFFFFF');\n    let m00ffffff = new abap.types.Hex({length: 4});\n    m00ffffff.set('00FFFFFF');\n    let m000000ff = new abap.types.Hex({length: 4});\n    m000000ff.set('000000FF');\n    let m000000 = new abap.types.Hex({length: 3});\n    m000000.set('000000');\n    let cindex = new abap.types.Hex({length: 4});\n    let low_bit = new abap.types.Hex({length: 4});\n    let len = new abap.types.Integer({qualifiedName: \"I\"});\n    let nindex = new abap.types.Integer({qualifiedName: \"I\"});\n    let crc = new abap.types.Hex({length: 4});\n    crc.set(mffffffff);\n    let x4 = new abap.types.Hex({length: 4});\n    let idx = new abap.types.Hex({length: 4});\n    if (abap.compare.eq(abap.builtin.xstrlen({val: lcl_stream.crc32_map}), new abap.types.Integer().set(0))) {\n      const indexBackup1 = abap.builtin.sy.get().index.get();\n      const unique5 = new abap.types.Integer().set(256).get();\n      for (let unique6 = 0; unique6 < unique5; unique6++) {\n        abap.builtin.sy.get().index.set(unique6 + 1);\n        cindex.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));\n        const indexBackup2 = abap.builtin.sy.get().index.get();\n        const unique7 = new abap.types.Integer().set(8).get();\n        for (let unique8 = 0; unique8 < unique7; unique8++) {\n          abap.builtin.sy.get().index.set(unique8 + 1);\n          low_bit.set(new abap.types.Character(8).set('00000001'));\n          low_bit.set(abap.operators.bitand(cindex,low_bit));\n          cindex.set(abap.operators.div(cindex,new abap.types.Integer().set(2)));\n          cindex.set(abap.operators.bitand(cindex,m7fffffff));\n          if (abap.compare.initial(low_bit) === false) {\n            cindex.set(abap.operators.bitxor(cindex,magic_nr));\n          }\n        }\n        abap.builtin.sy.get().index.set(indexBackup2);\n        abap.statements.concatenate({source: [lcl_stream.crc32_map, cindex], target: lcl_stream.crc32_map});\n      }\n      abap.builtin.sy.get().index.set(indexBackup1);\n    }\n    len.set(abap.builtin.xstrlen({val: iv_xstring}));\n    const indexBackup3 = abap.builtin.sy.get().index.get();\n    const unique9 = len.get();\n    for (let unique10 = 0; unique10 < unique9; unique10++) {\n      abap.builtin.sy.get().index.set(unique10 + 1);\n      nindex.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));\n      abap.statements.concatenate({source: [m000000, iv_xstring.getOffset({offset: nindex, length: 1})], target: idx});\n      idx.set(abap.operators.bitand(abap.operators.bitxor(crc,idx),m000000ff));\n      idx.set(abap.operators.multiply(idx,new abap.types.Integer().set(4)));\n      x4.set(lcl_stream.crc32_map.getOffset({offset: idx, length: 4}));\n      crc.set(abap.operators.div(crc,new abap.types.Integer().set(256)));\n      crc.set(abap.operators.bitand(crc,m00ffffff));\n      crc.set(abap.operators.bitxor(x4,crc));\n    }\n    abap.builtin.sy.get().index.set(indexBackup3);\n    crc.set(abap.operators.bitxor(crc,mffffffff));\n    rv_crc.set(crc);\n    await this.append({iv_xstr: rv_crc});\n    return rv_crc;\n  }\n}\nabap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM'] = lcl_stream;\nlcl_stream.crc32_map = new abap.types.XString({qualifiedName: \"XSTRING\"});\n\n//# sourceMappingURL=cl_abap_zip.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_zip.clas.locals.mjs?");

/***/ })

}]);