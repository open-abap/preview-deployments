"use strict";
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_sxml_string_reader_clas_locals_mjs"],{

/***/ "./output/cl_sxml_string_reader.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/cl_sxml_string_reader.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lcl_attribute": () => (/* binding */ lcl_attribute),
/* harmony export */   "lcl_close_node": () => (/* binding */ lcl_close_node),
/* harmony export */   "lcl_json_parser": () => (/* binding */ lcl_json_parser),
/* harmony export */   "lcl_open_node": () => (/* binding */ lcl_open_node),
/* harmony export */   "lcl_reader": () => (/* binding */ lcl_reader),
/* harmony export */   "lcl_value_node": () => (/* binding */ lcl_value_node)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// cl_sxml_string_reader.clas.locals_imp.abap
class lcl_json_parser {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"APPEND": {"visibility": "I", "parameters": {"IV_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "is_optional": " "}, "IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "TRAVERSE": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "TRAVERSE_OBJECT": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "TRAVERSE_BASIC": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "TRAVERSE_ARRAY": {"visibility": "I", "parameters": {"IV_JSON": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PARSE": {"visibility": "U", "parameters": {"RT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async parse(INPUT) {
    let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let lv_error = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_error_message = new abap.types.String({qualifiedName: "STRING"});
    let lv_xml_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_json = new abap.types.Integer({qualifiedName: "I"});
    try {
        lv_json = {value: JSON.parse(iv_json.get())};
    } catch(e) {
        lv_error_message.set(e.message);
        lv_error.set("X")
    }
    if (abap.compare.eq(lv_error, abap.builtin.abap_true)) {
      abap.statements.find(lv_error_message, {regex: new abap.types.Character(15).set(' position (\\d+)'), submatches: [lv_xml_offset]});
      const unique121 = await (new abap.Classes['CX_SXML_PARSE_ERROR']()).constructor_({xml_offset: lv_xml_offset});
      unique121.EXTRA_CX = {"INTERNAL_FILENAME": "cl_sxml_string_reader.clas.locals_imp.abap","INTERNAL_LINE": 68};
      throw unique121;
    }
    abap.statements.clear(this.mt_nodes);
    await this.traverse({iv_json: lv_json});
    rt_nodes.set(this.mt_nodes);
    return rt_nodes;
  }
  async append(INPUT) {
    let iv_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    if (INPUT && INPUT.iv_type) {iv_type.set(INPUT.iv_type);}
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let iv_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}
    let ls_node = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {});
    ls_node.get().type.set(iv_type);
    ls_node.get().name.set(iv_name);
    ls_node.get().key.set(iv_key);
    ls_node.get().value.set(iv_value);
    abap.statements.append({source: ls_node, target: this.mt_nodes});
  }
  async traverse(INPUT) {
    let iv_json = new abap.types.Character(4);
    if (INPUT && INPUT.iv_json) {iv_json = INPUT.iv_json;}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    lv_type.set(Array.isArray(iv_json.value) ? "array" : typeof iv_json.value);
    if (iv_json.value === null) lv_type.set("null");
    let unique122 = lv_type;
    if (abap.compare.eq(unique122, new abap.types.Character(6).set('object'))) {
      await this.traverse_object({iv_json: iv_json, iv_key: iv_key});
    } else if (abap.compare.eq(unique122, new abap.types.Character(5).set('array'))) {
      await this.traverse_array({iv_json: iv_json, iv_key: iv_key});
    } else if (abap.compare.eq(unique122, new abap.types.Character(6).set('string')) || abap.compare.eq(unique122, new abap.types.Character(7).set('boolean')) || abap.compare.eq(unique122, new abap.types.Character(6).set('number')) || abap.compare.eq(unique122, new abap.types.Character(4).set('null'))) {
      await this.traverse_basic({iv_json: iv_json, iv_key: iv_key});
    } else {
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(2), new abap.types.Character(4).set('todo')));
    }
  }
  async traverse_basic(INPUT) {
    let iv_json = new abap.types.Character(4);
    if (INPUT && INPUT.iv_json) {iv_json = INPUT.iv_json;}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    let parsed = iv_json.value;
    iv_json = new abap.types.String().set(iv_json.value + "");
    lv_type.set(typeof parsed);
    if (parsed === null) lv_type.set("null");
    let unique123 = lv_type;
    if (abap.compare.eq(unique123, new abap.types.Character(6).set('string'))) {
      lv_type.set(new abap.types.Character(3).set('str'));
    } else if (abap.compare.eq(unique123, new abap.types.Character(6).set('number'))) {
      lv_type.set(new abap.types.Character(3).set('num'));
    } else if (abap.compare.eq(unique123, new abap.types.Character(7).set('boolean'))) {
      lv_type.set(new abap.types.Character(4).set('bool'));
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: lv_type, iv_key: iv_key});
    if (abap.compare.ne(lv_type, new abap.types.Character(4).set('null'))) {
      await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value, iv_value: iv_json});
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: lv_type});
  }
  async traverse_array(INPUT) {
    let iv_json = new abap.types.Character(4);
    if (INPUT && INPUT.iv_json) {iv_json = INPUT.iv_json;}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let parsed = iv_json.value;
    lv_length.set(parsed.length);
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character(5).set('array'), iv_key: iv_key});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique124 = lv_length.get();
    for (let unique125 = 0; unique125 < unique124; unique125++) {
      abap.builtin.sy.get().index.set(unique125 + 1);
      lv_index.set(abap.operators.minus(abap.builtin.sy.get().index,new abap.types.Integer().set(1)));
      lv_value = {value: parsed[lv_index.get()]};
      await this.traverse({iv_json: lv_value});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character(5).set('array')});
  }
  async traverse_object(INPUT) {
    let iv_json = new abap.types.Character(4);
    if (INPUT && INPUT.iv_json) {iv_json = INPUT.iv_json;}
    let iv_key = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_key) {iv_key.set(INPUT.iv_key);}
    let lt_keys = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_key = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let parsed = iv_json.value;
    Object.keys(parsed).forEach(k => lt_keys.append(k));
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open, iv_name: new abap.types.Character(6).set('object'), iv_key: iv_key});
    for await (const unique126 of abap.statements.loop(lt_keys)) {
      lv_key.set(unique126);
      lv_value = {value: parsed[lv_key.get()]};
      await this.traverse({iv_json: lv_value, iv_key: lv_key});
    }
    await this.append({iv_type: abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close, iv_name: new abap.types.Character(6).set('object')});
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER'] = lcl_json_parser;
lcl_json_parser.ty_node = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {});
lcl_json_parser.ty_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
class lcl_attribute {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_ATTRIBUTE"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~QNAME": {"type": () => {return new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_ATTRIBUTE~VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VALUE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_attribute$qname === undefined) this.if_sxml_attribute$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    if (this.if_sxml_attribute$value_type === undefined) this.if_sxml_attribute$value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    this.if_sxml_attribute$qname.get().name.set(name);
    this.if_sxml_attribute$value_type.set(value_type);
    this.mv_value.set(value);
    return this;
  }
  async if_sxml_attribute$get_value() {
    let value = new abap.types.String({qualifiedName: "STRING"});
    value.set(this.mv_value);
    return value;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE'] = lcl_attribute;
class lcl_open_node {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_OPEN_ELEMENT","IF_SXML_NODE"];
  static ATTRIBUTES = {"MT_ATTRIBUTES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_OPEN_ELEMENT~QNAME": {"type": () => {return new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ATTRIBUTES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    if (this.if_sxml_open_element$qname === undefined) this.if_sxml_open_element$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    if (INPUT && INPUT.attributes) {attributes.set(INPUT.attributes);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open);
    this.if_sxml_open_element$qname.get().name.set(name);
    this.mt_attributes.set(attributes);
    return this;
  }
  async if_sxml_open_element$get_attributes() {
    let attr = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    attr.set(this.mt_attributes);
    return attr;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE'] = lcl_open_node;
lcl_open_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_element_open.set(1);
lcl_open_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_element_close.set(2);
lcl_open_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_value.set(4);
lcl_open_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_attribute.set(32);
lcl_open_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_open_node.if_sxml_node$co_nt_final.set(128);
class lcl_close_node {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_CLOSE_ELEMENT","IF_SXML_NODE"];
  static ATTRIBUTES = {"IF_SXML_CLOSE_ELEMENT~QNAME": {"type": () => {return new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    if (this.if_sxml_close_element$qname === undefined) this.if_sxml_close_element$qname = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close);
    this.if_sxml_close_element$qname.get().name.set(name);
    return this;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE'] = lcl_close_node;
lcl_close_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_element_open.set(1);
lcl_close_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_element_close.set(2);
lcl_close_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_value.set(4);
lcl_close_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_attribute.set(32);
lcl_close_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_close_node.if_sxml_node$co_nt_final.set(128);
class lcl_value_node {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_VALUE_NODE","IF_SXML_NODE"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_NODE~CO_NT_ELEMENT_OPEN": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ELEMENT_CLOSE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_ATTRIBUTE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_SXML_NODE~CO_NT_FINAL": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.if_sxml_node$co_nt_element_open = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open;
    this.if_sxml_node$co_nt_element_close = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close;
    this.if_sxml_node$co_nt_value = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value;
    this.if_sxml_node$co_nt_attribute = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_attribute;
    this.if_sxml_node$co_nt_final = abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_final;
    if (this.if_sxml_node$type === undefined) this.if_sxml_node$type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
  }
  async constructor_(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    this.if_sxml_node$type.set(abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value);
    this.mv_value.set(value);
    return this;
  }
  async if_sxml_value_node$get_value() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.mv_value);
    return val;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE'] = lcl_value_node;
lcl_value_node.if_sxml_node$co_nt_element_open = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_element_open.set(1);
lcl_value_node.if_sxml_node$co_nt_element_close = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_element_close.set(2);
lcl_value_node.if_sxml_node$co_nt_value = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_value.set(4);
lcl_value_node.if_sxml_node$co_nt_attribute = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_attribute.set(32);
lcl_value_node.if_sxml_node$co_nt_final = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
lcl_value_node.if_sxml_node$co_nt_final.set(128);
class lcl_reader {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_SXML_STRING_READER-LCL_READER';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_READER"];
  static ATTRIBUTES = {"MV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_POINTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~NODE_TYPE": {"type": () => {return new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_SXML_READER~VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"INITIALIZE": {"visibility": "I", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_json = new abap.types.String({qualifiedName: "STRING"});
    this.mt_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");
    this.mv_pointer = new abap.types.Integer({qualifiedName: "I"});
    if (this.if_sxml_reader$node_type === undefined) this.if_sxml_reader$node_type = new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"});
    if (this.if_sxml_reader$name === undefined) this.if_sxml_reader$name = new abap.types.String({qualifiedName: "STRING"});
    if (this.if_sxml_reader$value === undefined) this.if_sxml_reader$value = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    this.mv_json.set(iv_json);
    return this;
  }
  async initialize() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=CL_SXML_STRING_READER\\CLASS=LCL_JSON_PARSER"});
    let lt_parsed = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_nodes");
    let ls_parsed = new abap.types.Structure({"type": new abap.types.Integer({qualifiedName: "IF_SXML_NODE=>NODE_TYPE"}), "name": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-NAME"}), "key": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-KEY"}), "value": new abap.types.String({qualifiedName: "LCL_JSON_PARSER=>TY_NODE-VALUE"})}, "lcl_json_parser=>ty_node", undefined, {}, {});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let lt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    if (abap.compare.initial(this.mv_json)) {
      return;
    }
    lo_json.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_JSON_PARSER']()).constructor_());
    lt_parsed.set((await lo_json.get().parse({iv_json: this.mv_json})));
    abap.statements.clear(lo_json);
    for await (const unique127 of abap.statements.loop(lt_parsed)) {
      ls_parsed.set(unique127);
      let unique128 = ls_parsed.get().type;
      if (abap.compare.eq(unique128, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        abap.statements.clear(lt_attributes);
        if (abap.compare.initial(ls_parsed.get().key) === false) {
          li_attribute.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_ATTRIBUTE']()).constructor_({name: new abap.types.Character(4).set('name'), value: ls_parsed.get().key, value_type: abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text}));
          abap.statements.append({source: li_attribute, target: lt_attributes});
        }
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_OPEN_NODE']()).constructor_({name: ls_parsed.get().name, attributes: lt_attributes}));
      } else if (abap.compare.eq(unique128, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_CLOSE_NODE']()).constructor_({name: ls_parsed.get().name}));
      } else if (abap.compare.eq(unique128, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        li_node.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_VALUE_NODE']()).constructor_({value: ls_parsed.get().value}));
      } else {
        abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Integer().set(2)));
      }
      abap.statements.append({source: li_node, target: this.mt_nodes});
    }
    abap.statements.clear(this.mv_json);
    this.mv_pointer.set(new abap.types.Integer().set(1));
  }
  async if_sxml_reader$next_attribute(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_sxml_reader$next_node(INPUT) {
    let value_type = new abap.types.Integer({qualifiedName: "IF_SXML_VALUE=>VALUE_TYPE"});
    if (INPUT && INPUT.value_type) {value_type.set(INPUT.value_type);}
    if (INPUT === undefined || INPUT.value_type === undefined) {value_type = abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text;}
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_OPEN_ELEMENT"});
    let close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_CLOSE_ELEMENT"});
    let value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE", RTTIName: "\\INTERFACE=IF_SXML_VALUE_NODE"});
    await this.initialize();
    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,
      into: node});
    this.mv_pointer.set(abap.operators.add(this.mv_pointer,new abap.types.Integer().set(1)));
    this.if_sxml_reader$node_type.set(node.get().if_sxml_node$type);
    abap.statements.clear(this.if_sxml_reader$name);
    let unique129 = this.if_sxml_reader$node_type;
    if (abap.compare.eq(unique129, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
      await abap.statements.cast(open, node);
      this.if_sxml_reader$name.set(open.get().if_sxml_open_element$qname.get().name);
    } else if (abap.compare.eq(unique129, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
      await abap.statements.cast(close, node);
      this.if_sxml_reader$name.set(close.get().if_sxml_close_element$qname.get().name);
    }
  }
  async if_sxml_reader$skip_node(INPUT) {
    let writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"});
    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}
  }
  async if_sxml_reader$read_next_node() {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    await this.initialize();
    abap.statements.readTable(this.mt_nodes,{index: this.mv_pointer,
      into: node});
    this.mv_pointer.set(abap.operators.add(this.mv_pointer,new abap.types.Integer().set(1)));
    return node;
  }
}
abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER'] = lcl_reader;
lcl_reader.ty_nodes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_reader=>ty_nodes");

//# sourceMappingURL=cl_sxml_string_reader.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_sxml_string_reader_clas_locals_mjs.bundle.js.map