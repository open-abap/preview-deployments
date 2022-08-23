"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_zip_clas_mjs"],{

/***/ "./output/cl_abap_zip.clas.mjs":
/*!*************************************!*\
  !*** ./output/cl_abap_zip.clas.mjs ***!
  \*************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_zip\": () => (/* binding */ cl_abap_zip)\n/* harmony export */ });\nawait __webpack_require__.e(/*! import() */ \"output_cl_abap_zip_clas_locals_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cl_abap_zip.clas.locals.mjs */ \"./output/cl_abap_zip.clas.locals.mjs\"));\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_zip.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nclass cl_abap_zip {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.files = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: \"CL_ABAP_ZIP=>T_FILE-NAME\"})}, \"cl_abap_zip=>t_file\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"cl_abap_zip=>t_files\");\n    this.mt_contents = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-NAME\"}), original_size: new abap.types.Integer({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE\"}), content: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-CONTENT\"}), compressed: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED\"})}, \"cl_abap_zip=>ty_contents\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"\");\n    return this;\n  }\n  async crc32(INPUT) {\n    return cl_abap_zip.crc32(INPUT);\n  }\n  static async crc32(INPUT) {\n    let crc = new abap.types.Integer({qualifiedName: \"I\"});\n    let content = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.content) {content.set(INPUT.content);}\n    let lo_stream = new abap.types.ABAPObject({qualifiedName: \"LCL_STREAM\"});\n    lo_stream.set(await (new abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM']()).constructor_());\n    crc.set((await lo_stream.get().append_crc({iv_xstring: content})));\n    return crc;\n  }\n  async get(INPUT) {\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let content = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.content) {content = INPUT.content;}\n    let ls_length = new abap.types.Integer({qualifiedName: \"I\"});\n    let ls_contents = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-NAME\"}), original_size: new abap.types.Integer({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE\"}), content: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-CONTENT\"}), compressed: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED\"})}, \"cl_abap_zip=>ty_contents\");\n    abap.statements.readTable(this.mt_contents,{into: ls_contents,withKey: (i) => {return abap.compare.eq(i.name, name);}});\n    await abap.Classes['CL_ABAP_GZIP'].decompress_binary({gzip_in: ls_contents.get().compressed, raw_out: content, raw_out_len: ls_length});\n  }\n  async add(INPUT) {\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let content = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.content) {content.set(INPUT.content);}\n    let ls_contents = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-NAME\"}), original_size: new abap.types.Integer({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE\"}), content: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-CONTENT\"}), compressed: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED\"})}, \"cl_abap_zip=>ty_contents\");\n    ls_contents.get().name.set(name);\n    ls_contents.get().original_size.set(abap.builtin.xstrlen({val: content}));\n    ls_contents.get().content.set(content);\n    await abap.Classes['CL_ABAP_GZIP'].compress_binary({raw_in: content, gzip_out: ls_contents.get().compressed});\n    abap.statements.insertInternal({data: ls_contents, table: this.mt_contents});\n  }\n  async load(INPUT) {\n    let zip = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    if (INPUT && INPUT.zip) {zip.set(INPUT.zip);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async save() {\n    let val = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    let lo_stream = new abap.types.ABAPObject({qualifiedName: \"LCL_STREAM\"});\n    let ls_contents = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-NAME\"}), original_size: new abap.types.Integer({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE\"}), content: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-CONTENT\"}), compressed: new abap.types.XString({qualifiedName: \"CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED\"})}, \"cl_abap_zip=>ty_contents\");\n    let lv_buffer = new abap.types.XString({qualifiedName: \"XSTRING\"});\n    let lo_conv = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_CONV_OUT_CE\"});\n    lo_stream.set(await (new abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM']()).constructor_());\n    lo_conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create()));\n    for (const unique11 of abap.statements.loop(this.mt_contents)) {\n      ls_contents.set(unique11);\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 8}).set('504B0304')});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('1400')});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('0000')});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('0800')});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('0000')});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('0000')});\n      await lo_stream.get().append_crc({iv_xstring: ls_contents.get().content});\n      await lo_stream.get().append_int4({iv_int: abap.builtin.xstrlen({val: ls_contents.get().compressed})});\n      await lo_stream.get().append_int4({iv_int: abap.builtin.xstrlen({val: ls_contents.get().content})});\n      await lo_stream.get().append_int2({iv_int: abap.builtin.strlen({val: ls_contents.get().name})});\n      await lo_stream.get().append({iv_xstr: new abap.types.Character({length: 4}).set('0000')});\n      await lo_conv.get().convert({data: ls_contents.get().name, buffer: lv_buffer});\n      await lo_stream.get().append({iv_xstr: lv_buffer});\n      await lo_stream.get().append({iv_xstr: ls_contents.get().compressed});\n    }\n    val.set((await lo_stream.get().get()));\n    return val;\n  }\n}\nabap.Classes['CL_ABAP_ZIP'] = cl_abap_zip;\n\n//# sourceMappingURL=cl_abap_zip.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_zip.clas.mjs?");

/***/ })

}]);