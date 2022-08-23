"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_sxml_string_reader_clas_locals_mjs"],{

/***/ "./output/cl_sxml_string_reader.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/cl_sxml_string_reader.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_attribute\": () => (/* binding */ lcl_attribute),\n/* harmony export */   \"lcl_close_node\": () => (/* binding */ lcl_close_node),\n/* harmony export */   \"lcl_json_parser\": () => (/* binding */ lcl_json_parser),\n/* harmony export */   \"lcl_open_node\": () => (/* binding */ lcl_open_node),\n/* harmony export */   \"lcl_reader\": () => (/* binding */ lcl_reader),\n/* harmony export */   \"lcl_value_node\": () => (/* binding */ lcl_value_node)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_sxml_string_reader.clas.locals_imp.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nclass lcl_json_parser {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mt_nodes = new abap.types.Table(new abap.types.Structure({type: new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"}), name: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-NAME\"}), key: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-KEY\"}), value: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-VALUE\"})}, \"lcl_json_parser=>ty_node\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"lcl_json_parser=>ty_nodes\");\n    return this;\n  }\n  async parse(INPUT) {\n    let rt_nodes = new abap.types.Table(new abap.types.Structure({type: new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"}), name: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-NAME\"}), key: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-KEY\"}), value: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-VALUE\"})}, \"lcl_json_parser=>ty_node\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"lcl_json_parser=>ty_nodes\");\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    abap.statements.clear(this.mt_nodes);\n    await this.traverse({iv_json: iv_json});\n    rt_nodes.set(this.mt_nodes);\n    return rt_nodes;\n  }\n  async append(INPUT) {\n    let iv_type = new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"});\n    if (INPUT && INPUT.iv_type) {iv_type.set(INPUT.iv_type);}\n    let iv_name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}\n    let iv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}\n    let iv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}\n    let ls_node = new abap.types.Structure({type: new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"}), name: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-NAME\"}), key: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-KEY\"}), value: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-VALUE\"})}, \"lcl_json_parser=>ty_node\");\n    ls_node.get().type.set(iv_type);\n    ls_node.get().name.set(iv_name);\n    ls_node.get().key.set(iv_key);\n    ls_node.get().value.set(iv_value);\n    abap.statements.append({source: ls_node, target: this.mt_nodes});\n  }\n  async traverse(INPUT) {\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    let iv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}\n    let lv_type = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_error = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let lv_error_message = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_xml_offset = new abap.types.Integer({qualifiedName: \"I\"});\n    let parsed;\n    try {\n        parsed = JSON.parse(iv_json.get());\n    } catch(e) {\n        lv_error_message.set(e.message);\n        lv_error.set(\"X\")\n    }\n    if (abap.compare.eq(lv_error, abap.builtin.abap_true)) {\n      abap.statements.find(lv_error_message, {regex: new abap.types.Character({length: 15}).set(' position (\\\\d+)'), submatches: [lv_xml_offset]});\n      throw await (new abap.Classes['CX_SXML_PARSE_ERROR']()).constructor_({xml_offset: lv_xml_offset});\n    }\n    lv_type.set(Array.isArray(parsed) ? \"array\" : typeof parsed);\n    if (parsed === null) lv_type.set(\"null\");\n    let unique67 = lv_type;\n    if (abap.compare.eq(unique67, new abap.types.Character({length: 6}).set('object'))) {\n      await this.traverse_object({iv_json: iv_json, iv_key: iv_key});\n    } else if (abap.compare.eq(unique67, new abap.types.Character({length: 5}).set('array'))) {\n      await this.traverse_array({iv_json: iv_json, iv_key: iv_key});\n    } else if (abap.compare.eq(unique67, new abap.types.Character({length: 6}).set('string')) || abap.compare.eq(unique67, new abap.types.Character({length: 7}).set('boolean')) || abap.compare.eq(unique67, new abap.types.Character({length: 6}).set('number')) || abap.compare.eq(unique67, new abap.types.Character({length: 4}).set('null'))) {\n      await this.traverse_basic({iv_json: iv_json, iv_key: iv_key});\n    } else {\n      abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));\n    }\n  }\n  async traverse_basic(INPUT) {\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    let iv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}\n    let lv_type = new abap.types.String({qualifiedName: \"STRING\"});\n    let parsed = JSON.parse(iv_json.get());\n    lv_type.set(typeof parsed);\n    if (parsed === null) lv_type.set(\"null\");\n    let unique68 = lv_type;\n    if (abap.compare.eq(unique68, new abap.types.Character({length: 6}).set('string'))) {\n      lv_type.set(new abap.types.Character({length: 3}).set('str'));\n    } else if (abap.compare.eq(unique68, new abap.types.Character({length: 6}).set('number'))) {\n      lv_type.set(new abap.types.Character({length: 3}).set('num'));\n    } else if (abap.compare.eq(unique68, new abap.types.Character({length: 7}).set('boolean'))) {\n      lv_type.set(new abap.types.Character({length: 4}).set('bool'));\n    }\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: lv_type, iv_key: iv_key});\n    if (abap.compare.ne(lv_type, new abap.types.Character({length: 4}).set('null'))) {\n      if (abap.compare.eq(lv_type, new abap.types.Character({length: 3}).set('str'))) {\n        await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: abap.builtin.substring({val: iv_json, off: constant_1, len: abap.operators.minus(abap.builtin.strlen({val: iv_json}),constant_2)})});\n      } else {\n        await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: iv_json});\n      }\n    }\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: lv_type});\n  }\n  async traverse_array(INPUT) {\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    let iv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}\n    let lv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_length = new abap.types.Integer({qualifiedName: \"I\"});\n    let lv_index = new abap.types.Integer({qualifiedName: \"I\"});\n    let parsed = JSON.parse(iv_json.get());\n    lv_length.set(parsed.length);\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character({length: 5}).set('array'), iv_key: iv_key});\n    const unique69 = lv_length.get();\n    for (let unique70 = 0; unique70 < unique69; unique70++) {\n      abap.builtin.sy.get().index.set(unique70 + 1);\n      lv_index.set(abap.operators.minus(abap.builtin.sy.get().index,constant_1));\n      lv_value.set(JSON.stringify(parsed[lv_index.get()]));\n      await this.traverse({iv_json: lv_value});\n    }\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character({length: 5}).set('array')});\n  }\n  async traverse_object(INPUT) {\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    let iv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}\n    let lt_keys = new abap.types.Table(new abap.types.String({qualifiedName: \"STRING\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"\");\n    let lv_key = new abap.types.String({qualifiedName: \"STRING\"});\n    let lv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    let parsed = JSON.parse(iv_json.get());\n    Object.keys(parsed).forEach(k => lt_keys.append(k));\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character({length: 6}).set('object'), iv_key: iv_key});\n    for (const unique71 of abap.statements.loop(lt_keys)) {\n      lv_key.set(unique71);\n      lv_value.set(JSON.stringify(parsed[lv_key.get()]));\n      await this.traverse({iv_json: lv_value, iv_key: lv_key});\n    }\n    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character({length: 6}).set('object')});\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER'] = lcl_json_parser;\nclass lcl_attribute {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_SXML_ATTRIBUTE\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    this.if_sxml_attribute$qname = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"STRING\"})});\n    this.if_sxml_attribute$value_type = new abap.types.Integer({qualifiedName: \"IF_SXML_VALUE=>VALUE_TYPE\"});\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    let value_type = new abap.types.Integer({qualifiedName: \"IF_SXML_VALUE=>VALUE_TYPE\"});\n    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}\n    this.if_sxml_attribute$qname.get().name.set(name);\n    this.if_sxml_attribute$value_type.set(value_type);\n    this.mv_value.set(value);\n    return this;\n  }\n  async if_sxml_attribute$get_value() {\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    value.set(this.mv_value);\n    return value;\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE'] = lcl_attribute;\nclass lcl_open_node {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_SXML_OPEN_ELEMENT\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: \"IF_SXML_ATTRIBUTE\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"if_sxml_attribute=>attributes\");\n    this.if_sxml_open_element$qname = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"STRING\"})});\n    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"});\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: \"IF_SXML_ATTRIBUTE\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"if_sxml_attribute=>attributes\");\n    if (INPUT && INPUT.attributes) {attributes.set(INPUT.attributes);}\n    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open);\n    this.if_sxml_open_element$qname.get().name.set(name);\n    this.mt_attributes.set(attributes);\n    return this;\n  }\n  async if_sxml_open_element$get_attributes() {\n    let attr = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: \"IF_SXML_ATTRIBUTE\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"if_sxml_attribute=>attributes\");\n    attr.set(this.mt_attributes);\n    return attr;\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE'] = lcl_open_node;\nclass lcl_close_node {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_SXML_CLOSE_ELEMENT\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.if_sxml_close_element$qname = new abap.types.Structure({name: new abap.types.String({qualifiedName: \"STRING\"})});\n    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"});\n    let name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);\n    this.if_sxml_close_element$qname.get().name.set(name);\n    return this;\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE'] = lcl_close_node;\nclass lcl_value_node {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_SXML_VALUE_NODE\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_value = new abap.types.String({qualifiedName: \"STRING\"});\n    this.if_sxml_node$type = new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"});\n    let value = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);\n    this.mv_value.set(value);\n    return this;\n  }\n  async if_sxml_value_node$get_value() {\n    let val = new abap.types.String({qualifiedName: \"STRING\"});\n    val.set(this.mv_value);\n    return val;\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE'] = lcl_value_node;\nclass lcl_reader {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [\"IF_SXML_READER\"];\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    this.mt_nodes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: \"IF_SXML_NODE\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"lcl_reader=>ty_nodes\");\n    this.mv_pointer = new abap.types.Integer({qualifiedName: \"I\"});\n    this.if_sxml_reader$node_type = new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"});\n    this.if_sxml_reader$name = new abap.types.String({qualifiedName: \"STRING\"});\n    this.if_sxml_reader$value = new abap.types.String({qualifiedName: \"STRING\"});\n    let iv_json = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}\n    this.mv_json.set(iv_json);\n    return this;\n  }\n  async initialize() {\n    let lo_json = new abap.types.ABAPObject({qualifiedName: \"LCL_JSON_PARSER\"});\n    let lt_parsed = new abap.types.Table(new abap.types.Structure({type: new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"}), name: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-NAME\"}), key: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-KEY\"}), value: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-VALUE\"})}, \"lcl_json_parser=>ty_node\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"lcl_json_parser=>ty_nodes\");\n    let ls_parsed = new abap.types.Structure({type: new abap.types.Integer({qualifiedName: \"IF_SXML_NODE=>NODE_TYPE\"}), name: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-NAME\"}), key: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-KEY\"}), value: new abap.types.String({qualifiedName: \"LCL_JSON_PARSER=>TY_NODE-VALUE\"})}, \"lcl_json_parser=>ty_node\");\n    let li_node = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_NODE\"});\n    let lt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: \"IF_SXML_ATTRIBUTE\"}), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]}, \"if_sxml_attribute=>attributes\");\n    let li_attribute = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_ATTRIBUTE\"});\n    if (abap.compare.initial(this.mv_json)) {\n      return;\n    }\n    lo_json.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER']()).constructor_());\n    lt_parsed.set((await lo_json.get().parse({iv_json: this.mv_json})));\n    for (const unique72 of abap.statements.loop(lt_parsed)) {\n      ls_parsed.set(unique72);\n      let unique73 = ls_parsed.get().type;\n      if (abap.compare.eq(unique73, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {\n        abap.statements.clear(lt_attributes);\n        if (abap.compare.initial(ls_parsed.get().key) === false) {\n          li_attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: new abap.types.Character({length: 4}).set('name'), value: ls_parsed.get().key, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));\n          abap.statements.append({source: li_attribute, target: lt_attributes});\n        }\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE']()).constructor_({name: ls_parsed.get().name, attributes: lt_attributes}));\n      } else if (abap.compare.eq(unique73, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE']()).constructor_({name: ls_parsed.get().name}));\n      } else if (abap.compare.eq(unique73, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {\n        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE']()).constructor_({value: ls_parsed.get().value}));\n      } else {\n        abap.statements.assert(abap.compare.eq(constant_1, constant_2));\n      }\n      abap.statements.append({source: li_node, target: this.mt_nodes});\n    }\n    abap.statements.clear(this.mv_json);\n    this.mv_pointer.set(constant_1);\n  }\n  async if_sxml_reader$next_attribute(INPUT) {\n    let value_type = new abap.types.Integer({qualifiedName: \"IF_SXML_VALUE=>VALUE_TYPE\"});\n    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async if_sxml_reader$next_node(INPUT) {\n    let value_type = new abap.types.Integer({qualifiedName: \"IF_SXML_VALUE=>VALUE_TYPE\"});\n    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}\n    if (INPUT === undefined || INPUT.value_type === undefined) {value_type = abap.Classes['IF_SXML_VALUE'].co_vt_text;}\n    let node = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_NODE\"});\n    let open = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_OPEN_ELEMENT\"});\n    let close = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_CLOSE_ELEMENT\"});\n    let value = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_VALUE_NODE\"});\n    await this.initialize();\n    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,into: node});\n    this.mv_pointer.set(abap.operators.add(this.mv_pointer,constant_1));\n    this.if_sxml_reader$node_type.set(node.get().if_sxml_node$type);\n    abap.statements.clear(this.if_sxml_reader$name);\n    let unique74 = this.if_sxml_reader$node_type;\n    if (abap.compare.eq(unique74, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {\n      await abap.statements.cast(open, node);\n      this.if_sxml_reader$name.set(open.get().if_sxml_open_element$qname.get().name);\n    } else if (abap.compare.eq(unique74, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {\n      await abap.statements.cast(close, node);\n      this.if_sxml_reader$name.set(close.get().if_sxml_close_element$qname.get().name);\n    }\n  }\n  async if_sxml_reader$skip_node(INPUT) {\n    let writer = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_WRITER\"});\n    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}\n  }\n  async if_sxml_reader$read_next_node() {\n    let node = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_NODE\"});\n    await this.initialize();\n    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,into: node});\n    this.mv_pointer.set(abap.operators.add(this.mv_pointer,constant_1));\n    return node;\n  }\n}\nabap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER'] = lcl_reader;\n\n//# sourceMappingURL=cl_sxml_string_reader.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_sxml_string_reader.clas.locals.mjs?");

/***/ })

}]);