"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_zcl_otm_table_maintenance_clas_mjs"],{

/***/ "./output/zcl_otm_table_maintenance.clas.mjs":
/*!***************************************************!*\
  !*** ./output/zcl_otm_table_maintenance.clas.mjs ***!
  \***************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zcl_otm_table_maintenance\": () => (/* binding */ zcl_otm_table_maintenance)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// zcl_otm_table_maintenance.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_10 = new abap.types.Integer().set(10);\nconst constant_16 = new abap.types.Integer().set(16);\nconst constant_18 = new abap.types.Integer().set(18);\nconst constant_19 = new abap.types.Integer().set(19);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_200 = new abap.types.Integer().set(200);\nconst constant_500 = new abap.types.Integer().set(500);\nconst constant_60 = new abap.types.Integer().set(60);\nconst constant_8 = new abap.types.Integer().set(8);\nclass zcl_otm_table_maintenance {\n  async build_metadata() {\n    let rt_metadata = new abap.types.Table(new abap.types.Structure({name: new abap.types.Character({length: 30, qualifiedName: \"abap_compname\"}), key: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"abap_typekind\"}), length: new abap.types.Integer(), fixvalues: new abap.types.Table(new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"zcl_otm_table_maintenance=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"zcl_otm_table_maintenance=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"zcl_otm_table_maintenance=>ddtext\"})}, \"zcl_otm_table_maintenance=>ty_fixvalue\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]})}, \"zcl_otm_table_maintenance=>ty_fielddata\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let lv_key = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let lo_element = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_ELEMDESCR\"});\n    let lt_values = new abap.types.Table(new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"zcl_otm_table_maintenance=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"zcl_otm_table_maintenance=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"zcl_otm_table_maintenance=>ddtext\"})}, \"zcl_otm_table_maintenance=>ty_fixvalue\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let lt_key_fields = new abap.types.Table(new abap.types.Character({length: 30, qualifiedName: \"abap_compname\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let temp1 = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_STRUCTDESCR\"});\n    let lt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"}), as_include: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"cl_abap_structdescr=>type_kind\"})}, \"cl_abap_structdescr=>component\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let ls_component = new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"}), as_include: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"cl_abap_structdescr=>type_kind\"})}, \"cl_abap_structdescr=>component\");\n    let temp2 = new abap.types.Structure({name: new abap.types.Character({length: 30, qualifiedName: \"abap_compname\"}), key: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"abap_typekind\"}), length: new abap.types.Integer(), fixvalues: new abap.types.Table(new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"zcl_otm_table_maintenance=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"zcl_otm_table_maintenance=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"zcl_otm_table_maintenance=>ddtext\"})}, \"zcl_otm_table_maintenance=>ty_fixvalue\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]})}, \"zcl_otm_table_maintenance=>ty_fielddata\");\n    lt_key_fields.set((await this.list_key_fields()));\n    await abap.statements.cast(temp1, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: this.mv_table})));\n    lt_components.set((await temp1.get().get_components()));\n    for (const unique1 of abap.statements.loop(lt_components)) {\n      ls_component.set(unique1);\n      await abap.statements.cast(lo_element, ls_component.get().type);\n      lt_values.set((await lo_element.get().get_ddic_fixed_values()));\n      abap.statements.readTable(lt_key_fields,{withKey: (i) => {return abap.compare.eq(i.table_line, ls_component.get().name);}});\n      lv_key.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)));\n      abap.statements.clear(temp2);\n      temp2.get().name.set(ls_component.get().name);\n      temp2.get().key.set(lv_key);\n      temp2.get().type_kind.set(ls_component.get().type.get().type_kind);\n      temp2.get().length.set(ls_component.get().type.get().length);\n      temp2.get().fixvalues.set(lt_values);\n      abap.statements.append({source: temp2, target: rt_metadata});\n    }\n    return rt_metadata;\n  }\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_table = new abap.types.Character({length: 30, qualifiedName: \"TABNAME\"});\n    let iv_table = new abap.types.Character({length: 30, qualifiedName: \"TABNAME\"});\n    if (INPUT && INPUT.iv_table) {iv_table.set(INPUT.iv_table);}\n    abap.statements.assert(abap.compare.initial(iv_table) === false);\n    this.mv_table.set(iv_table);\n    return this;\n  }\n  async from_xstring(INPUT) {\n    let string = new abap.types.String();\n    let xstring = new abap.types.XString();\n    if (INPUT && INPUT.xstring) {xstring.set(INPUT.xstring);}\n    let conv = new abap.types.ABAPObject();\n    let conv_in_class = new abap.types.Character({length: 18, qualifiedName: \"undefined\"});\n    try {\n      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_CLASS not found\"; }\n      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'](); }\n      conv.set(await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_in());\n      if (conv.get().if_abap_conv_in$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_METHOD not found\"; }\n      if (conv.get().if_abap_conv_in$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }\n      string.set(await conv.get().if_abap_conv_in$convert({source: xstring}));\n    } catch (e) {\n      if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']) {\n        conv_in_class.set(new abap.types.Character({length: 18}).set('CL_ABAP_CONV_IN_CE'));\n        if (abap.Classes[conv_in_class.get()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_CLASS not found\"; }\n        if (abap.Classes[conv_in_class.get()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'](); }\n        conv.set(await abap.Classes[conv_in_class.get()].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')}));\n        if (conv.get().convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_METHOD not found\"; }\n        if (conv.get().convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }\n        await conv.get().convert({input: xstring,data: string});\n      } else {\n        throw e;\n      }\n    }\n    return string;\n  }\n  async get_html() {\n    let rv_html = new abap.types.String();\n    rv_html.set(abap.operators.concat(new abap.types.String().set(`<!DOCTYPE html>\\n`),abap.operators.concat(new abap.types.String().set(`<html>\\n`),abap.operators.concat(new abap.types.String().set(`<head>\\n`),abap.operators.concat(new abap.types.String().set(`<title>open-table-maintenance</title>\\n`),abap.operators.concat(new abap.types.String().set(`<script src=\"https://bossanova.uk/jspreadsheet/v4/jexcel.js\" async></script>\\n`),abap.operators.concat(new abap.types.String().set(`<script src=\"https://jsuites.net/v4/jsuites.js\" async></script>\\n`),abap.operators.concat(new abap.types.String().set(`<link rel=\"stylesheet\" href=\"https://jsuites.net/v4/jsuites.css\" type=\"text/css\" />\\n`),abap.operators.concat(new abap.types.String().set(`<link rel=\"stylesheet\" href=\"https://bossanova.uk/jspreadsheet/v4/jexcel.css\" type=\"text/css\" />\\n`),abap.operators.concat(new abap.types.String().set(`<script>\\n`),abap.operators.concat(new abap.types.Character({length: 11}).set('let jtable;'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 16}).set('let columnNames;'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 47}).set('const url = window.location.pathname + \"/rest\";'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 16}).set('function run() {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 33}).set('  fetch(url).then((response) => {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 27}).set('    return response.json();'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 25}).set('    }).then((parsed) => {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 53}).set('    document.getElementById(\"tablename\").innerHTML = '),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 79}).set('      \"<h1 style=\\\\\"display:inline\\\\\">\" + parsed.TABLENAME + \"</h1>&nbsp;<tt>\" + '),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 57}).set('       parsed.SY.SYSID + \"-\" + parsed.SY.MANDT + \"</tt>\";'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 29}).set('    const data = parsed.DATA;'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 29}).set('    if (data.length === 0) { '),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 22}).set('       const obj = {};'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 41}).set('       obj[parsed.META[0][\"NAME\"]] = \"_\";'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 22}).set('       data.push(obj);'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 5}).set('    }'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 47}).set('    columnNames = parsed.META.map(n => n.NAME);'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 54}).set('    document.getElementById(\"content\").innerHTML = \"\";'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 55}).set('    let columnSettings = parsed.META.map(n => {return {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 62}).set('      \"type\": n.FIXVALUES.length > 0 ? \"dropdown\" : undefined,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 22}).set('      \"title\": n.NAME,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 44}).set('      \"source\": n.FIXVALUES.map(f => f.LOW),'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 43}).set('      \"width\": Math.min(200, n.LENGTH * 20)'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 9}).set('    };});'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 63}).set('    jtable = jspreadsheet(document.getElementById(\"content\"), {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 29}).set('      defaultColAlign:\"left\",'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 26}).set('      allowInsertRow:true,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 32}).set('      allowManualInsertRow:true,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 30}).set('      allowInsertColumn:false,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 36}).set('      allowManualInsertColumn:false,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 26}).set('      allowDeleteRow:true,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 30}).set('      allowRenameColumn:false,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 30}).set('      allowDeleteColumn:false,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 17}).set('      data: data,'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 34}).set('      onload: function(instance) {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 71}).set('        const keyCount = parsed.META.filter(n => n.KEY === \"X\").length;'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 44}).set('        for (let i = 0; i < keyCount; i++) {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 70}).set('          instance.jexcel.colgroup[i].style.backgroundColor=\"#F8F8F8\";'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 9}).set('        }'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 8}).set('      },'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 32}).set('      columns: columnSettings});'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 5}).set('  });'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 1}).set('}'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 24}).set('function toObject(row) {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 15}).set('  let ret = {};'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 48}).set('  for (let i = 0; i < columnNames.length; i++) {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 33}).set('    ret[columnNames[i]] = row[i];'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 3}).set('  }'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 13}).set('  return ret;'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 1}).set('}'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 17}).set('function save() {'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 56}).set('  const body = {\"DATA\": jtable.getData().map(toObject)};'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 94}).set('  fetch(url, {method: \"POST\", body: JSON.stringify(body)}).then(() => {alert(\"data saved\");});'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.Character({length: 1}).set('}'),abap.operators.concat(new abap.types.String().set(`\\n`),abap.operators.concat(new abap.types.String().set(`</script>\\n`),abap.operators.concat(new abap.types.String().set(`</head>\\n`),abap.operators.concat(new abap.types.String().set(`<body onload=\"run()\">\\n`),abap.operators.concat(new abap.types.String().set(`<div id=\"tablename\"><h1>open-table-maintenance</h1></div>\\n`),abap.operators.concat(new abap.types.String().set(`<button type=\"button\" onclick=\"save()\">Save</button><br>\\n`),abap.operators.concat(new abap.types.String().set(`<div id=\"content\">loading</div><br>\\n`),abap.operators.concat(new abap.types.String().set(`</body>\\n`),new abap.types.String().set(`</html>`))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));\n    return rv_html;\n  }\n  async list_key_fields() {\n    let names = new abap.types.Table(new abap.types.Character({length: 30, qualifiedName: \"abap_compname\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let obj = new abap.types.ABAPObject();\n    let lv_tabname = new abap.types.Character({length: 16, qualifiedName: \"undefined\"});\n    let lr_ddfields = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character());\n    let fs_ddfields_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let workaround = new abap.types.Character({length: 8, qualifiedName: \"undefined\"});\n    let temp3 = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_STRUCTDESCR\"});\n    lv_tabname.set(this.mv_table);\n    try {\n      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_CLASS not found\"; }\n      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'](); }\n      obj.set(await abap.Classes['XCO_CP_ABAP_DICTIONARY'].database_table({iv_name: lv_tabname}));\n      abap.statements.assign({target: fs_any_, source: obj});\n      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n      obj.set(fs_any_);\n      if (obj.get().if_xco_dbt_fields$get_names === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_METHOD not found\"; }\n      if (obj.get().if_xco_dbt_fields$get_names === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }\n      names.set(await obj.get().if_xco_dbt_fields$get_names());\n    } catch (e) {\n      if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']) {\n        workaround.set(new abap.types.Character({length: 8}).set('DDFIELDS'));\n        abap.statements.createData(lr_ddfields,{\"name\": workaround.get()});\n        abap.statements.assign({target: fs_ddfields_, source: (lr_ddfields).getPointer()});\n        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n        await abap.statements.cast(temp3, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: lv_tabname})));\n        fs_ddfields_.set((await temp3.get().get_ddic_field_list()));\n        for (const unique2 of abap.statements.loop(fs_ddfields_)) {\n          fs_any_.assign(unique2);\n          abap.statements.assign({component: new abap.types.Character({length: 7}).set('KEYFLAG'), target: fs_field_, source: fs_any_});\n          if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0) || abap.compare.ne(fs_field_, abap.builtin.abap_true)) {\n            continue;\n          }\n          abap.statements.assign({component: new abap.types.Character({length: 9}).set('FIELDNAME'), target: fs_field_, source: fs_any_});\n          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n          abap.statements.append({source: fs_field_, target: names});\n        }\n      } else {\n        throw e;\n      }\n    }\n    return names;\n  }\n  async read_table() {\n    let rv_json = new abap.types.String();\n    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let dref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    abap.statements.createData(dref,{\"name\": this.mv_table.get(),\"table\": true});\n    abap.statements.assign({target: fs_fs_, source: (dref).getPointer()});\n    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n    await abap.statements.select(fs_fs_, {select: \"SELECT * FROM \" + this.mv_table.get() + \" ORDER BY PRIMARY KEY\"});\n    rv_json.set((await this.to_json({ref: dref})));\n    return rv_json;\n  }\n  async save_table(INPUT) {\n    let iv_json = new abap.types.String();\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let dref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    abap.statements.createData(dref,{\"name\": this.mv_table.get(),\"table\": true});\n    abap.statements.assign({target: fs_fs_, source: (dref).getPointer()});\n    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n    if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error(\"CallTransformation, kernel class missing\");\n    await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: \"id\",sourceXML: iv_json,result: {data:fs_fs_}});\n    await abap.statements.modifyDatabase(this.mv_table, {\"table\": fs_fs_});\n  }\n  async serve(INPUT) {\n    let rs_http = new abap.types.Structure({status: new abap.types.Integer(), content_type: new abap.types.String(), body: new abap.types.XString()}, \"zcl_otm_table_maintenance=>ty_http\");\n    let is_request = new abap.types.Structure({method: new abap.types.String(), path: new abap.types.String(), body: new abap.types.XString()}, \"zcl_otm_table_maintenance=>ty_request\");\n    if (INPUT && INPUT.is_request) {is_request.set(INPUT.is_request);}\n    let lv_body = new abap.types.String();\n    try {\n      rs_http.get().status.set(constant_200);\n      if (abap.compare.cp(is_request.get().path, new abap.types.Character({length: 6}).set('*/rest'))) {\n        if (abap.compare.eq(is_request.get().method, new abap.types.Character({length: 3}).set('GET'))) {\n          lv_body.set((await this.read_table()));\n          rs_http.get().content_type.set(new abap.types.Character({length: 16}).set('application/json'));\n        } else if (abap.compare.eq(is_request.get().method, new abap.types.Character({length: 4}).set('POST'))) {\n          await this.save_table({iv_json: (await this.from_xstring({xstring: is_request.get().body}))});\n        } else {\n          abap.statements.assert(abap.compare.eq(constant_1, constant_2));\n        }\n      } else {\n        lv_body.set((await this.get_html()));\n        rs_http.get().content_type.set(new abap.types.Character({length: 9}).set('text/html'));\n      }\n      rs_http.get().body.set((await this.to_xstring({string: lv_body})));\n    } catch (e) {\n      if (e instanceof abap.Classes['CX_ROOT']) {\n        rs_http.get().status.set(constant_500);\n        rs_http.get().body.set((await this.to_xstring({string: new abap.types.String().set(`Exception occurred`)})));\n      } else {\n        throw e;\n      }\n    }\n    return rs_http;\n  }\n  async to_json(INPUT) {\n    let rv_json = new abap.types.String();\n    let ref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    if (INPUT && INPUT.ref) {ref = INPUT.ref;}\n    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n    let meta = new abap.types.Table(new abap.types.Structure({name: new abap.types.Character({length: 30, qualifiedName: \"abap_compname\"}), key: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"abap_typekind\"}), length: new abap.types.Integer(), fixvalues: new abap.types.Table(new abap.types.Structure({low: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>low\"}), high: new abap.types.Character({length: 10, qualifiedName: \"zcl_otm_table_maintenance=>high\"}), option: new abap.types.Character({length: 2, qualifiedName: \"zcl_otm_table_maintenance=>option\"}), ddlanguage: new abap.types.Character({qualifiedName: \"zcl_otm_table_maintenance=>ddlanguage\"}), ddtext: new abap.types.Character({length: 60, qualifiedName: \"zcl_otm_table_maintenance=>ddtext\"})}, \"zcl_otm_table_maintenance=>ty_fixvalue\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]})}, \"zcl_otm_table_maintenance=>ty_fielddata\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let writer = new abap.types.ABAPObject({qualifiedName: \"CL_SXML_STRING_WRITER\"});\n    abap.statements.assign({target: fs_fs_, source: (ref).getPointer()});\n    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));\n    meta.set((await this.build_metadata()));\n    writer.set((await abap.Classes['CL_SXML_STRING_WRITER'].create({type: abap.Classes['IF_SXML'].if_sxml$co_xt_json})));\n    if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error(\"CallTransformation, kernel class missing\");\n    await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: \"id\",resultXML: writer,source: {data:fs_fs_,meta:meta,tablename:this.mv_table,sy:abap.builtin.sy}});\n    rv_json.set((await this.from_xstring({xstring: (await writer.get().get_output())})));\n    return rv_json;\n  }\n  async to_xstring(INPUT) {\n    let xstring = new abap.types.XString();\n    let string = new abap.types.String();\n    if (INPUT && INPUT.string) {string.set(INPUT.string);}\n    let conv = new abap.types.ABAPObject();\n    let conv_out_class = new abap.types.Character({length: 19, qualifiedName: \"undefined\"});\n    try {\n      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_CLASS not found\"; }\n      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'](); }\n      conv.set(await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_out());\n      if (conv.get().if_abap_conv_out$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_METHOD not found\"; }\n      if (conv.get().if_abap_conv_out$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }\n      xstring.set(await conv.get().if_abap_conv_out$convert({source: string}));\n    } catch (e) {\n      if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']) {\n        conv_out_class.set(new abap.types.Character({length: 19}).set('CL_ABAP_CONV_OUT_CE'));\n        if (abap.Classes[conv_out_class.get()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_CLASS not found\"; }\n        if (abap.Classes[conv_out_class.get()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'](); }\n        conv.set(await abap.Classes[conv_out_class.get()].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')}));\n        if (conv.get().convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw \"CX_SY_DYN_CALL_ILLEGAL_METHOD not found\"; }\n        if (conv.get().convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }\n        await conv.get().convert({data: string,buffer: xstring});\n      } else {\n        throw e;\n      }\n    }\n    return xstring;\n  }\n}\nabap.Classes['ZCL_OTM_TABLE_MAINTENANCE'] = zcl_otm_table_maintenance;\n\n//# sourceMappingURL=zcl_otm_table_maintenance.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/zcl_otm_table_maintenance.clas.mjs?");

/***/ })

}]);