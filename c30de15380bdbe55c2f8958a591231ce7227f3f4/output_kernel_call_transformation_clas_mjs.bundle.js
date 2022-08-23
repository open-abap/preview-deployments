"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_kernel_call_transformation_clas_mjs"],{

/***/ "./output/kernel_call_transformation.clas.mjs":
/*!****************************************************!*\
  !*** ./output/kernel_call_transformation.clas.mjs ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kernel_call_transformation\": () => (/* binding */ kernel_call_transformation)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// kernel_call_transformation.clas.abap\nconst constant_0 = new abap.types.Integer().set(0);\nconst constant_1 = new abap.types.Integer().set(1);\nclass kernel_call_transformation {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async call(INPUT) {\n    return kernel_call_transformation.call(INPUT);\n  }\n  static async call(INPUT) {\n    let input = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.input) {input = INPUT.input;}\n    let lv_name = new abap.types.String();\n    let lv_source = new abap.types.String();\n    let result = new abap.types.DataReference(new abap.types.Character({length: 4}));\n    let lt_rtab = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.DataReference(new abap.types.Character({length: 4}))}, \"abap_trans_srcbind\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let ls_rtab = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.DataReference(new abap.types.Character({length: 4}))}, \"abap_trans_srcbind\");\n    let lv_type = new abap.types.String();\n    abap.statements.clear(kernel_call_transformation.mi_doc);\n    abap.statements.clear(kernel_call_transformation.mi_writer);\n    lv_name.set(INPUT.name.toUpperCase());\n    abap.statements.assert(abap.compare.eq(lv_name, new abap.types.Character({length: 2}).set('ID')));\n    if (INPUT.sourceXML?.constructor.name === \"ABAPObject\") this.mi_doc.set(INPUT.sourceXML);\n    if (INPUT.sourceXML?.constructor.name === \"String\") lv_source.set(INPUT.sourceXML);\n    if (abap.compare.initial(lv_source) === false) {\n      if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('<'))) {\n        lv_type.set(new abap.types.Character({length: 3}).set('XML'));\n        await this.parse_xml({iv_xml: lv_source});\n      } else if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('{')) || abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('['))) {\n        lv_type.set(new abap.types.Character({length: 4}).set('JSON'));\n        kernel_call_transformation.mi_doc.set((await abap.Classes['KERNEL_JSON_TO_IXML'].build({iv_json: lv_source})));\n      } else {\n        throw await (new abap.Classes['CX_XSLT_FORMAT_ERROR']()).constructor_();\n      }\n    }\n    if (typeof INPUT.source === \"object\" && INPUT.resultXML?.constructor.name === \"ABAPObject\") {\n        this.mi_writer.set(INPUT.resultXML);\n    }\n    if (abap.compare.initial(kernel_call_transformation.mi_writer) === false) {\n      await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 6}).set('object')});\n      for (const name in INPUT.source) {\n          lv_name.set(name);\n          if (INPUT.source[name].constructor.name === \"FieldSymbol\") {\n              result.assign(INPUT.source[name].getPointer());\n            } else {\n                result.assign(INPUT.source[name]);\n              }\n            await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});\n            await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: abap.builtin.to_upper({val: lv_name})});\n            await this.traverse_write({iv_ref: result});\n            await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n          }\n          await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n          return;\n        }\n        if (abap.compare.initial(lv_source) && abap.compare.initial(kernel_call_transformation.mi_doc)) {\n          throw await (new abap.Classes['CX_XSLT_RUNTIME_ERROR']()).constructor_();\n        }\n        if (INPUT.result.constructor.name === \"Table\") {\n          lt_rtab = INPUT.result;\n          for (const unique37 of abap.statements.loop(lt_rtab)) {\n            ls_rtab.set(unique37);\n            await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: ls_rtab.get().name, iv_ref: ls_rtab.get().value, ii_doc: kernel_call_transformation.mi_doc});\n          }\n        } else {\n          for (const name in INPUT.result) {\n              lv_name.set(name.toUpperCase());\n              if (INPUT.result[name].constructor.name === \"FieldSymbol\") {\n                  result.assign(INPUT.result[name].getPointer());\n                } else {\n                    result.assign(INPUT.result[name]);\n                  }\n                if (abap.compare.eq(lv_type, new abap.types.Character({length: 4}).set('JSON'))) {\n                  await abap.Classes['KERNEL_IXML_JSON_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});\n                } else {\n                  await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});\n                }\n              }\n            }\n          }\n          async traverse_write_type(INPUT) {\n            return kernel_call_transformation.traverse_write_type(INPUT);\n          }\n          static async traverse_write_type(INPUT) {\n            let rv_type = new abap.types.String();\n            let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n            if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}\n            let lo_type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n            lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).getPointer()})));\n            let unique38 = lo_type.get().type_kind;\n            if (abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(unique38, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {\n              rv_type.set(new abap.types.Character({length: 3}).set('num'));\n            } else {\n              rv_type.set(new abap.types.Character({length: 3}).set('str'));\n            }\n            return rv_type;\n          }\n          async traverse_write(INPUT) {\n            return kernel_call_transformation.traverse_write(INPUT);\n          }\n          static async traverse_write(INPUT) {\n            let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n            if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}\n            let lo_type = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_TYPEDESCR\"});\n            let lo_struc = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_STRUCTDESCR\"});\n            let lt_comps = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_DATADESCR\"}), as_include: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"type_kind\"})}, \"abap_componentdescr\"), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n            let li_element = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_ELEMENT\"});\n            let li_sub = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_ELEMENT\"});\n            let ls_compo = new abap.types.Structure({name: new abap.types.String(), type: new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_DATADESCR\"}), as_include: new abap.types.Character({qualifiedName: \"ABAP_BOOL\"}), type_kind: new abap.types.Character({qualifiedName: \"type_kind\"})}, \"abap_componentdescr\");\n            let lv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));\n            let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n            let fs_table_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false}));\n            let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));\n            lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).getPointer()})));\n            let unique39 = lo_type.get().kind;\n            if (abap.compare.eq(unique39, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {\n              await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 6}).set('object')});\n              await abap.statements.cast(lo_struc, lo_type);\n              lt_comps.set((await lo_struc.get().get_components()));\n              abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});\n              for (const unique40 of abap.statements.loop(lt_comps)) {\n                ls_compo.set(unique40);\n                abap.statements.assign({component: ls_compo.get().name, target: fs_field_, source: fs_any_});\n                lv_ref.assign(fs_field_.getPointer());\n                await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});\n                await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: abap.builtin.to_upper({val: ls_compo.get().name})});\n                await this.traverse_write({iv_ref: lv_ref});\n                await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n              }\n              await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n            } else if (abap.compare.eq(unique39, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {\n              await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_value({value: (iv_ref).getPointer()});\n            } else if (abap.compare.eq(unique39, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {\n              await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 5}).set('array')});\n              abap.statements.assign({target: fs_table_, source: (iv_ref).getPointer()});\n              for (const unique41 of abap.statements.loop(fs_table_)) {\n                fs_any_.assign(unique41);\n                lv_ref.assign(fs_any_.getPointer());\n                if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).getPointer()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {\n                  await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});\n                }\n                await this.traverse_write({iv_ref: lv_ref});\n                if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).getPointer()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {\n                  await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n                }\n              }\n              await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();\n            } else {\n              abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 19}).set('todo_traverse_write')));\n            }\n          }\n          async parse_xml(INPUT) {\n            return kernel_call_transformation.parse_xml(INPUT);\n          }\n          static async parse_xml(INPUT) {\n            let iv_xml = new abap.types.String();\n            if (INPUT && INPUT.iv_xml) {iv_xml.set(INPUT.iv_xml);}\n            let li_factory = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_STREAM_FACTORY\"});\n            let li_istream = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_ISTREAM\"});\n            let li_parser = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_PARSER\"});\n            let li_ixml = new abap.types.ABAPObject({qualifiedName: \"IF_IXML\"});\n            let lv_subrc = new abap.types.Integer();\n            li_ixml.set((await abap.Classes['CL_IXML'].create()));\n            kernel_call_transformation.mi_doc.set((await li_ixml.get().if_ixml$create_document()));\n            li_factory.set((await li_ixml.get().if_ixml$create_stream_factory()));\n            li_istream.set((await li_factory.get().if_ixml_stream_factory$create_istream_string({xml: iv_xml})));\n            li_parser.set((await li_ixml.get().if_ixml$create_parser({stream_factory: li_factory, istream: li_istream, document: kernel_call_transformation.mi_doc})));\n            await li_parser.get().if_ixml_parser$add_strip_space_element();\n            lv_subrc.set((await li_parser.get().if_ixml_parser$parse()));\n            await li_istream.get().if_ixml_istream$close();\n            abap.statements.assert(abap.compare.eq(lv_subrc, constant_0));\n          }\n        }\n        abap.Classes['KERNEL_CALL_TRANSFORMATION'] = kernel_call_transformation;\n        kernel_call_transformation.mi_doc = new abap.types.ABAPObject({qualifiedName: \"IF_IXML_DOCUMENT\"});\n        kernel_call_transformation.mi_writer = new abap.types.ABAPObject({qualifiedName: \"IF_SXML_WRITER\"});\n\n//# sourceMappingURL=kernel_call_transformation.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/kernel_call_transformation.clas.mjs?");

/***/ })

}]);