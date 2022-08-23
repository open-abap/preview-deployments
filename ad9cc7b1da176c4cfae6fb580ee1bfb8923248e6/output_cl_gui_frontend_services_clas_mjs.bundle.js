"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_gui_frontend_services_clas_mjs"],{

/***/ "./output/cl_gui_frontend_services.clas.mjs":
/*!**************************************************!*\
  !*** ./output/cl_gui_frontend_services.clas.mjs ***!
  \**************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_gui_frontend_services\": () => (/* binding */ cl_gui_frontend_services)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_gui_frontend_services.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_3 = new abap.types.Integer().set(3);\nconst constant_4 = new abap.types.Integer().set(4);\nconst constant_5 = new abap.types.Integer().set(5);\nconst constant_6 = new abap.types.Integer().set(6);\nclass cl_gui_frontend_services {\n  static INTERNAL_TYPE = 'CLAS';\n  static IMPLEMENTED_INTERFACES = [];\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.filetype_all = cl_gui_frontend_services.filetype_all;\n    this.action_cancel = cl_gui_frontend_services.action_cancel;\n    this.action_ok = cl_gui_frontend_services.action_ok;\n    this.platform_nt351 = cl_gui_frontend_services.platform_nt351;\n    this.platform_nt40 = cl_gui_frontend_services.platform_nt40;\n    this.platform_nt50 = cl_gui_frontend_services.platform_nt50;\n    this.platform_windows95 = cl_gui_frontend_services.platform_windows95;\n    this.platform_windows98 = cl_gui_frontend_services.platform_windows98;\n    this.platform_windowsxp = cl_gui_frontend_services.platform_windowsxp;\n    return this;\n  }\n  async directory_exist(INPUT) {\n    return cl_gui_frontend_services.directory_exist(INPUT);\n  }\n  static async directory_exist(INPUT) {\n    let result = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    let directory = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 29}).set('directory_exist not supported')));\n    return result;\n  }\n  async clipboard_import(INPUT) {\n    return cl_gui_frontend_services.clipboard_import(INPUT);\n  }\n  static async clipboard_import(INPUT) {\n    let data = new abap.types.Table(new abap.types.Character({length: 4}), {\"withHeader\":false});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let length = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.length) {length = INPUT.length;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('clipboard_import not supported')));\n  }\n  async directory_list_files(INPUT) {\n    return cl_gui_frontend_services.directory_list_files(INPUT);\n  }\n  static async directory_list_files(INPUT) {\n    let directory = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}\n    let file_table = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}\n    let count = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.count) {count = INPUT.count;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 34}).set('directory_list_files not supported')));\n  }\n  async directory_create(INPUT) {\n    return cl_gui_frontend_services.directory_create(INPUT);\n  }\n  static async directory_create(INPUT) {\n    let directory = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}\n    let rc = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.rc) {rc = INPUT.rc;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('directory_create not supported')));\n  }\n  async gui_download(INPUT) {\n    return cl_gui_frontend_services.gui_download(INPUT);\n  }\n  static async gui_download(INPUT) {\n    let bin_filesize = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.bin_filesize) {bin_filesize.set(INPUT.bin_filesize);}\n    let filename = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.filename) {filename.set(INPUT.filename);}\n    let filetype = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}\n    let write_lf = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.write_lf) {write_lf = INPUT.write_lf;}\n    let write_field_separator = new abap.types.Character({qualifiedName: \"CHAR1\"});\n    if (INPUT && INPUT.write_field_separator) {write_field_separator = INPUT.write_field_separator;}\n    let data_tab = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 26}).set('gui_download not supported')));\n  }\n  async get_file_separator(INPUT) {\n    return cl_gui_frontend_services.get_file_separator(INPUT);\n  }\n  static async get_file_separator(INPUT) {\n    let file_separator = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.file_separator) {file_separator = INPUT.file_separator;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 32}).set('get_file_separator not supported')));\n  }\n  async execute(INPUT) {\n    return cl_gui_frontend_services.execute(INPUT);\n  }\n  static async execute(INPUT) {\n    let document = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.document) {document.set(INPUT.document);}\n    let application = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.application) {application.set(INPUT.application);}\n    let parameter = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.parameter) {parameter.set(INPUT.parameter);}\n    let default_directory = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.default_directory) {default_directory.set(INPUT.default_directory);}\n    let maximized = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.maximized) {maximized.set(INPUT.maximized);}\n    let minimized = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.minimized) {minimized.set(INPUT.minimized);}\n    let synchronous = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.synchronous) {synchronous.set(INPUT.synchronous);}\n    let operation = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.operation) {operation.set(INPUT.operation);}\n    if (INPUT === undefined || INPUT.operation === undefined) {operation = new abap.types.Character({length: 4}).set('OPEN');}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 21}).set('execute not supported')));\n  }\n  async directory_browse(INPUT) {\n    return cl_gui_frontend_services.directory_browse(INPUT);\n  }\n  static async directory_browse(INPUT) {\n    let window_title = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}\n    let initial_folder = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.initial_folder) {initial_folder.set(INPUT.initial_folder);}\n    let selected_folder = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.selected_folder) {selected_folder = INPUT.selected_folder;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('directory_browse not supported')));\n  }\n  async gui_upload(INPUT) {\n    return cl_gui_frontend_services.gui_upload(INPUT);\n  }\n  static async gui_upload(INPUT) {\n    let filename = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.filename) {filename.set(INPUT.filename);}\n    let filetype = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}\n    let filelength = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.filelength) {filelength = INPUT.filelength;}\n    let data_tab = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 24}).set('gui_upload not supported')));\n  }\n  async file_open_dialog(INPUT) {\n    return cl_gui_frontend_services.file_open_dialog(INPUT);\n  }\n  static async file_open_dialog(INPUT) {\n    let window_title = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}\n    let default_filename = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.default_filename) {default_filename.set(INPUT.default_filename);}\n    let multiselection = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.multiselection) {multiselection = INPUT.multiselection;}\n    let file_filter = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}\n    let file_table = new abap.types.Table(new abap.types.Structure({filename: new abap.types.Character({length: 1024, qualifiedName: \"FILE_TABLE-FILENAME\"})}, \"FILE_TABLE\"), {\"withHeader\":false}, \"FILETABLE\");\n    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}\n    let rc = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.rc) {rc = INPUT.rc;}\n    let user_action = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('file_open_dialog not supported')));\n  }\n  async file_save_dialog(INPUT) {\n    return cl_gui_frontend_services.file_save_dialog(INPUT);\n  }\n  static async file_save_dialog(INPUT) {\n    let window_title = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}\n    let default_extension = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.default_extension) {default_extension.set(INPUT.default_extension);}\n    let default_file_name = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.default_file_name) {default_file_name.set(INPUT.default_file_name);}\n    let file_filter = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}\n    let filename = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.filename) {filename = INPUT.filename;}\n    let path = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.path) {path = INPUT.path;}\n    let fullpath = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.fullpath) {fullpath = INPUT.fullpath;}\n    let user_action = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('file_save_dialog not supported')));\n  }\n  async get_platform() {\n    return cl_gui_frontend_services.get_platform();\n  }\n  static async get_platform() {\n    let platform = new abap.types.Integer({qualifiedName: \"I\"});\n    platform.set(cl_gui_frontend_services.platform_windowsxp);\n    return platform;\n  }\n  async clipboard_export(INPUT) {\n    return cl_gui_frontend_services.clipboard_export(INPUT);\n  }\n  static async clipboard_export(INPUT) {\n    let no_auth_check = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.no_auth_check) {no_auth_check = INPUT.no_auth_check;}\n    let data = new abap.types.Character({length: 4});\n    if (INPUT && INPUT.data) {data = INPUT.data;}\n    let rc = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.rc) {rc = INPUT.rc;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('clipboard_export not supported')));\n  }\n  async get_system_directory(INPUT) {\n    return cl_gui_frontend_services.get_system_directory(INPUT);\n  }\n  static async get_system_directory(INPUT) {\n    let system_directory = new abap.types.String({qualifiedName: \"STRING\"});\n    if (INPUT && INPUT.system_directory) {system_directory = INPUT.system_directory;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 34}).set('get_system_directory not supported')));\n  }\n  async get_gui_version(INPUT) {\n    return cl_gui_frontend_services.get_gui_version(INPUT);\n  }\n  static async get_gui_version(INPUT) {\n    let version_table = new abap.types.Table(new abap.types.Structure({filename: new abap.types.Character({length: 1024, qualifiedName: \"FILE_TABLE-FILENAME\"})}, \"FILE_TABLE\"), {\"withHeader\":false}, \"FILETABLE\");\n    if (INPUT && INPUT.version_table) {version_table = INPUT.version_table;}\n    let rc = new abap.types.Integer({qualifiedName: \"I\"});\n    if (INPUT && INPUT.rc) {rc = INPUT.rc;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 29}).set('get_gui_verison not supported')));\n  }\n}\nabap.Classes['CL_GUI_FRONTEND_SERVICES'] = cl_gui_frontend_services;\ncl_gui_frontend_services.filetype_all = new abap.types.String({qualifiedName: \"STRING\"});\ncl_gui_frontend_services.filetype_all.set('abc');\ncl_gui_frontend_services.action_cancel = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.action_cancel.set(1);\ncl_gui_frontend_services.action_ok = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.action_ok.set(1);\ncl_gui_frontend_services.platform_nt351 = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_nt351.set(1);\ncl_gui_frontend_services.platform_nt40 = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_nt40.set(2);\ncl_gui_frontend_services.platform_nt50 = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_nt50.set(3);\ncl_gui_frontend_services.platform_windows95 = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_windows95.set(4);\ncl_gui_frontend_services.platform_windows98 = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_windows98.set(5);\ncl_gui_frontend_services.platform_windowsxp = new abap.types.Integer({qualifiedName: \"I\"});\ncl_gui_frontend_services.platform_windowsxp.set(6);\n\n//# sourceMappingURL=cl_gui_frontend_services.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_gui_frontend_services.clas.mjs?");

/***/ })

}]);