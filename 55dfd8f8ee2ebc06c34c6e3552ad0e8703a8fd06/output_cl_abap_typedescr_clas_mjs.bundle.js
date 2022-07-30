"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_abap_typedescr_clas_mjs"],{

/***/ "./output/cl_abap_typedescr.clas.mjs":
/*!*******************************************!*\
  !*** ./output/cl_abap_typedescr.clas.mjs ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_abap_typedescr\": () => (/* binding */ cl_abap_typedescr)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_abap_typedescr.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_11 = new abap.types.Integer().set(11);\nconst constant_12 = new abap.types.Integer().set(12);\nconst constant_16 = new abap.types.Integer().set(16);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_4 = new abap.types.Integer().set(4);\nconst constant_6 = new abap.types.Integer().set(6);\nconst constant_8 = new abap.types.Integer().set(8);\nclass cl_abap_typedescr {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.type_kind = new abap.types.Character({qualifiedName: \"abap_typekind\"});\n    this.kind = new abap.types.Character();\n    this.ddic = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    this.length = new abap.types.Integer();\n    this.decimals = new abap.types.Integer();\n    this.absolute_name = new abap.types.String();\n    this.relative_name = new abap.types.String();\n    this.typekind_any = cl_abap_typedescr.typekind_any;\n    this.typekind_char = cl_abap_typedescr.typekind_char;\n    this.typekind_class = cl_abap_typedescr.typekind_class;\n    this.typekind_clike = cl_abap_typedescr.typekind_clike;\n    this.typekind_csequence = cl_abap_typedescr.typekind_csequence;\n    this.typekind_date = cl_abap_typedescr.typekind_date;\n    this.typekind_decfloat = cl_abap_typedescr.typekind_decfloat;\n    this.typekind_decfloat16 = cl_abap_typedescr.typekind_decfloat16;\n    this.typekind_decfloat34 = cl_abap_typedescr.typekind_decfloat34;\n    this.typekind_dref = cl_abap_typedescr.typekind_dref;\n    this.typekind_enum = cl_abap_typedescr.typekind_enum;\n    this.typekind_float = cl_abap_typedescr.typekind_float;\n    this.typekind_hex = cl_abap_typedescr.typekind_hex;\n    this.typekind_int = cl_abap_typedescr.typekind_int;\n    this.typekind_int1 = cl_abap_typedescr.typekind_int1;\n    this.typekind_int2 = cl_abap_typedescr.typekind_int2;\n    this.typekind_int8 = cl_abap_typedescr.typekind_int8;\n    this.typekind_num = cl_abap_typedescr.typekind_num;\n    this.typekind_numeric = cl_abap_typedescr.typekind_numeric;\n    this.typekind_oref = cl_abap_typedescr.typekind_oref;\n    this.typekind_packed = cl_abap_typedescr.typekind_packed;\n    this.typekind_string = cl_abap_typedescr.typekind_string;\n    this.typekind_struct1 = cl_abap_typedescr.typekind_struct1;\n    this.typekind_struct2 = cl_abap_typedescr.typekind_struct2;\n    this.typekind_table = cl_abap_typedescr.typekind_table;\n    this.typekind_time = cl_abap_typedescr.typekind_time;\n    this.typekind_utclong = cl_abap_typedescr.typekind_utclong;\n    this.typekind_w = cl_abap_typedescr.typekind_w;\n    this.typekind_xstring = cl_abap_typedescr.typekind_xstring;\n    this.kind_elem = cl_abap_typedescr.kind_elem;\n    this.kind_struct = cl_abap_typedescr.kind_struct;\n    this.kind_table = cl_abap_typedescr.kind_table;\n    this.kind_ref = cl_abap_typedescr.kind_ref;\n    this.kind_class = cl_abap_typedescr.kind_class;\n    this.kind_intf = cl_abap_typedescr.kind_intf;\n    return this;\n  }\n  async describe_by_name(INPUT) {\n    return cl_abap_typedescr.describe_by_name(INPUT);\n  }\n  static async describe_by_name(INPUT) {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    let p_name = new abap.types.Character();\n    if (INPUT && INPUT.p_name) {p_name = INPUT.p_name;}\n    let ref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    abap.statements.createData(ref,{\"name\": p_name.get()});\n    type.set((await this.describe_by_data_ref({data: ref})));\n    return type;\n  }\n  async get_relative_name() {\n    let name = new abap.types.String();\n    name.set(this.relative_name);\n    return name;\n  }\n  async is_ddic_type() {\n    let p_abap_bool = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    p_abap_bool.set(this.ddic);\n    return p_abap_bool;\n  }\n  async describe_by_data_ref(INPUT) {\n    return cl_abap_typedescr.describe_by_data_ref(INPUT);\n  }\n  static async describe_by_data_ref(INPUT) {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    let data = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let fs_ref_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n    abap.statements.assign({target: fs_ref_, source: (data).getPointer()});\n    type.set((await this.describe_by_data({p_data: fs_ref_})));\n    return type;\n  }\n  async describe_by_object_ref(INPUT) {\n    return cl_abap_typedescr.describe_by_object_ref(INPUT);\n  }\n  static async describe_by_object_ref(INPUT) {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    let data = new abap.types.ABAPObject();\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    type.set(await (new abap.Classes['CL_ABAP_CLASSDESCR']()).constructor_());\n    type.get().type_kind.set(cl_abap_typedescr.typekind_class);\n    type.get().kind.set(cl_abap_typedescr.kind_class);\n    type.get().relative_name.set(new abap.types.Character({length: 15}).set('CLASS_NAME_TODO'));\n    type.get().absolute_name.set(new abap.types.Character({length: 15}).set('CLASS_NAME_TODO'));\n    return type;\n  }\n  async describe_by_data(INPUT) {\n    return cl_abap_typedescr.describe_by_data(INPUT);\n  }\n  static async describe_by_data(INPUT) {\n    let type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n    let p_data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.p_data) {p_data = INPUT.p_data;}\n    let lv_name = new abap.types.String();\n    let lv_length = new abap.types.Integer();\n    let lo_elem = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_ELEMDESCR\"});\n    lv_name.set(p_data.constructor.name);\n    lv_length.set(p_data.getLength ? p_data.getLength() : 0);\n    let unique56 = lv_name;\n    if (abap.compare.eq(unique56, new abap.types.Character({length: 7}).set('Integer'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_int);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(constant_4);\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(constant_11);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 4}).set('Numc'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_num);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(abap.operators.multiply(lv_length,constant_2));\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(lv_length);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 3}).set('Hex'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_hex);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(lv_length);\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(abap.operators.multiply(lv_length,constant_2));\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 4}).set('Date'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_date);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(constant_16);\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(constant_8);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 6}).set('Packed'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_packed);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(lv_length);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 4}).set('Time'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_time);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(constant_12);\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(constant_6);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 5}).set('Float'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_float);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 9}).set('Structure'))) {\n      type.set(await (new abap.Classes['CL_ABAP_STRUCTDESCR']()).constructor_({data: p_data}));\n      type.get().type_kind.set(cl_abap_typedescr.typekind_struct2);\n      type.get().kind.set(cl_abap_typedescr.kind_struct);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 5}).set('Table'))) {\n      type.set(await (new abap.Classes['CL_ABAP_TABLEDESCR']()).constructor_({data: p_data}));\n      type.get().type_kind.set(cl_abap_typedescr.typekind_table);\n      type.get().kind.set(cl_abap_typedescr.kind_table);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 7}).set('XString'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_xstring);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(constant_8);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 6}).set('String'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_string);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(constant_8);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 9}).set('Character'))) {\n      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_char);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n      type.get().length.set(abap.operators.multiply(lv_length,constant_2));\n      await abap.statements.cast(lo_elem, type);\n      lo_elem.get().output_length.set(lv_length);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 11}).set('FieldSymbol'))) {\n      lv_name = p_data.getPointer();\n      type.set((await this.describe_by_data({p_data: lv_name})));\n      return type;\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 10}).set('ABAPObject'))) {\n      type.set(await (new abap.Classes['CL_ABAP_REFDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_oref);\n      type.get().kind.set(cl_abap_typedescr.kind_ref);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 7}).set('UTCLong'))) {\n      type.set(await (new abap.Classes['CL_ABAP_REFDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_utclong);\n      type.get().kind.set(cl_abap_typedescr.kind_elem);\n    } else if (abap.compare.eq(unique56, new abap.types.Character({length: 13}).set('DataReference'))) {\n      type.set(await (new abap.Classes['CL_ABAP_REFDESCR']()).constructor_());\n      type.get().type_kind.set(cl_abap_typedescr.typekind_dref);\n      type.get().kind.set(cl_abap_typedescr.kind_ref);\n    } else {\n      abap.statements.write(lv_name,{newLine: true});\n      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 22}).set('todo_cl_abap_typedescr')));\n    }\n    if(p_data.getQualifiedName && p_data.getQualifiedName() !== undefined) type.get().absolute_name.set(p_data.getQualifiedName());\n    if(abap.DDIC[type.get().absolute_name.get().toUpperCase()]) { type.get().ddic.set(\"X\"); }\n    type.get().relative_name.set(type.get().absolute_name);\n    if (abap.compare.eq(type.get().absolute_name, new abap.types.Character({length: 9}).set('ABAP_BOOL'))) {\n      type.get().absolute_name.set(new abap.types.Character({length: 30}).set('\\\\TYPE-POOL=ABAP\\\\TYPE=ABAP_BOOL'));\n    } else if (abap.compare.initial(type.get().absolute_name)) {\n      type.get().absolute_name.set(new abap.types.Character({length: 18}).set('ABSOLUTE_NAME_TODO'));\n    } else {\n      type.get().absolute_name.set(abap.operators.concat(new abap.types.Character({length: 6}).set('\\\\TYPE='),type.get().absolute_name));\n    }\n    return type;\n  }\n}\nabap.Classes['CL_ABAP_TYPEDESCR'] = cl_abap_typedescr;\ncl_abap_typedescr.typekind_any = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_any.set('~');\ncl_abap_typedescr.typekind_char = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_char.set('C');\ncl_abap_typedescr.typekind_class = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_class.set('*');\ncl_abap_typedescr.typekind_clike = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_clike.set('&');\ncl_abap_typedescr.typekind_csequence = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_csequence.set('?');\ncl_abap_typedescr.typekind_date = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_date.set('D');\ncl_abap_typedescr.typekind_decfloat = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_decfloat.set('/');\ncl_abap_typedescr.typekind_decfloat16 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_decfloat16.set('a');\ncl_abap_typedescr.typekind_decfloat34 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_decfloat34.set('e');\ncl_abap_typedescr.typekind_dref = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_dref.set('l');\ncl_abap_typedescr.typekind_enum = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_enum.set('k');\ncl_abap_typedescr.typekind_float = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_float.set('F');\ncl_abap_typedescr.typekind_hex = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_hex.set('X');\ncl_abap_typedescr.typekind_int = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_int.set('I');\ncl_abap_typedescr.typekind_int1 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_int1.set('b');\ncl_abap_typedescr.typekind_int2 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_int2.set('s');\ncl_abap_typedescr.typekind_int8 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_int8.set('8');\ncl_abap_typedescr.typekind_num = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_num.set('N');\ncl_abap_typedescr.typekind_numeric = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_numeric.set('%');\ncl_abap_typedescr.typekind_oref = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_oref.set('r');\ncl_abap_typedescr.typekind_packed = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_packed.set('P');\ncl_abap_typedescr.typekind_string = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_string.set('g');\ncl_abap_typedescr.typekind_struct1 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_struct1.set('u');\ncl_abap_typedescr.typekind_struct2 = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_struct2.set('v');\ncl_abap_typedescr.typekind_table = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_table.set('h');\ncl_abap_typedescr.typekind_time = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_time.set('T');\ncl_abap_typedescr.typekind_utclong = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_utclong.set('p');\ncl_abap_typedescr.typekind_w = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_w.set('w');\ncl_abap_typedescr.typekind_xstring = new abap.types.Character({qualifiedName: \"abap_typekind\"});\ncl_abap_typedescr.typekind_xstring.set('y');\ncl_abap_typedescr.kind_elem = new abap.types.Character();\ncl_abap_typedescr.kind_elem.set('E');\ncl_abap_typedescr.kind_struct = new abap.types.Character();\ncl_abap_typedescr.kind_struct.set('S');\ncl_abap_typedescr.kind_table = new abap.types.Character();\ncl_abap_typedescr.kind_table.set('T');\ncl_abap_typedescr.kind_ref = new abap.types.Character();\ncl_abap_typedescr.kind_ref.set('R');\ncl_abap_typedescr.kind_class = new abap.types.Character();\ncl_abap_typedescr.kind_class.set('C');\ncl_abap_typedescr.kind_intf = new abap.types.Character();\ncl_abap_typedescr.kind_intf.set('I');\n\n//# sourceMappingURL=cl_abap_typedescr.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_abap_typedescr.clas.mjs?");

/***/ })

}]);