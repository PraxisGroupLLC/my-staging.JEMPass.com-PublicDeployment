(self["webpackChunkjemPass_Angular_App_staging_"] = self["webpackChunkjemPass_Angular_App_staging_"] || []).push([["default-src_app_views_note-vault_note-vault-detail_note-vault-detail_component_ts"],{

/***/ 24645:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/jemUtils.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JemUtilsService": function() { return /* binding */ JemUtilsService; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _jem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jem.service */ 91895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 10629);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 49344);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var JemUtilsService = /** @class */ (function () {
    function JemUtilsService(jemService, auth, toastr) {
        this.jemService = jemService;
        this.auth = auth;
        this.toastr = toastr;
    }
    JemUtilsService.prototype.decrypt = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypting, sodium, _a, passKEKBuf, passKeyB64, error_1, passDataBuf, passDataDec;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        decrypting = true;
                        if (!!sodium) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _b.label = 3;
                    case 3:
                        sodium = _a;
                        passKEKBuf = Buffer.from(item.passKEK, 'base64');
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.jemService.decrypt(passKEKBuf, this.auth.deviceSettings).then(function (passKey) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    passKeyB64 = passKey;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        decrypting = false;
                        this.toastr.error(error_1.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        return [2 /*return*/];
                    case 7:
                        passDataBuf = Buffer.from(item.passData, 'base64');
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(passDataBuf.slice(24), passDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(passKeyB64, 'base64'))];
                    case 8:
                        passDataDec = _b.sent();
                        passDataDec = JSON.parse(passDataDec.toString());
                        return [2 /*return*/, passDataDec];
                }
            });
        });
    };
    JemUtilsService.prototype.encryptAndSave = function (terminal, record) {
        var _this = this;
        if (terminal === void 0) { terminal = true; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var sodium, _a, metaKey, passKey, nonce, _b, nonce, _c, nonce, _d, error_2;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!sodium) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _a = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _e.label = 3;
                    case 3:
                        sodium = _a;
                        return [4 /*yield*/, sodium.randombytes_buf(32)];
                    case 4:
                        metaKey = _e.sent();
                        return [4 /*yield*/, sodium.randombytes_buf(32)];
                    case 5:
                        passKey = _e.sent();
                        return [4 /*yield*/, sodium.randombytes_buf(24)];
                    case 6:
                        nonce = _e.sent();
                        _b = record;
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(JSON.stringify(record.metaData), nonce, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                    case 7:
                        _b.metaData = _e.sent();
                        record.metaData = Buffer.concat([nonce, record.metaData]);
                        record.metaData = record.metaData.toString('base64');
                        return [4 /*yield*/, sodium.randombytes_buf(24)];
                    case 8:
                        nonce = _e.sent();
                        _c = record;
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(JSON.stringify(record.passData), nonce, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(passKey))];
                    case 9:
                        _c.passData = _e.sent();
                        record.passData = Buffer.concat([nonce, record.passData]);
                        record.passData = record.passData.toString('base64');
                        return [4 /*yield*/, sodium.randombytes_buf(24)];
                    case 10:
                        nonce = _e.sent();
                        _d = record;
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(metaKey, nonce, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(this.auth.userSettings.metaKey))];
                    case 11:
                        _d.metaKEK = _e.sent();
                        record.metaKEK = Buffer.concat([nonce, record.metaKEK]);
                        record.metaKEK = record.metaKEK.toString('base64');
                        _e.label = 12;
                    case 12:
                        _e.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, this.jemService.encrypt(passKey, this.auth.deviceSettings, terminal).then(function (data) {
                                record.passKEK = data;
                            })];
                    case 13:
                        _e.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        error_2 = _e.sent();
                        // this.saving = false;
                        this.toastr.error(error_2.message, 'Error', {
                            timeOut: 5000,
                            closeButton: true,
                            progressBar: true,
                        });
                        return [2 /*return*/, reject()];
                    case 15:
                        if (!!record.id) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.auth.addCredential(record).subscribe(function (item) {
                                _this.toastr.success('Saved item!', 'Success!', {
                                    timeOut: 3000,
                                });
                            })];
                    case 16:
                        _e.sent();
                        resolve('');
                        return [3 /*break*/, 19];
                    case 17: return [4 /*yield*/, this.auth.updateCredential(record.id, record).subscribe(function (item) {
                            _this.toastr.success('Item Saved!', 'Success!', { timeOut: 3000 });
                        })];
                    case 18:
                        _e.sent();
                        resolve('');
                        _e.label = 19;
                    case 19: return [2 /*return*/];
                }
            });
        }); });
    };
    JemUtilsService.ɵfac = function JemUtilsService_Factory(t) { return new (t || JemUtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_jem_service__WEBPACK_IMPORTED_MODULE_1__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
    JemUtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JemUtilsService, factory: JemUtilsService.ɵfac, providedIn: 'root' });
    return JemUtilsService;
}());



/***/ }),

/***/ 81217:
/*!***********************************************************************************!*\
  !*** ./src/app/views/note-vault/note-vault-detail/note-vault-detail.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteVaultDetailComponent": function() { return /* binding */ NoteVaultDetailComponent; }
/* harmony export */ });
/* harmony import */ var _formio_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formio/angular */ 42281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_jemUtils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/jemUtils.service */ 24645);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var NoteVaultDetailComponent = /** @class */ (function () {
    function NoteVaultDetailComponent(jemUtilsService, toastr) {
        this.jemUtilsService = jemUtilsService;
        this.toastr = toastr;
        this.formSchema = __webpack_require__(/*! ./jempass-secure-note-form.json */ 3338);
        this.secureNote = '';
        // @Input() secureNote: any;
        this.stateData = {
            isModeEdit: true,
            isDecrypted: false,
            decrypting: false,
            saving: false,
        };
    }
    NoteVaultDetailComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parent;
            var _this = this;
            return __generator(this, function (_a) {
                parent = this;
                // CREATE THE FORM AND POPULATE WITH METADATA & STATEDATA
                _formio_angular__WEBPACK_IMPORTED_MODULE_1__.Formio.createForm(document.getElementById('secureNoteForm'), this.formSchema).then(function (form) {
                    _this.secureNoteForm = form;
                    // this.secureNoteForm.submission.data.passData.secureNoteContent = '';
                    _this.secureNoteForm.data = { passData: { secureNoteContent: "123" } };
                    // IF IT IS A PRE-EXISTING RECORD, POPULATE WITH SAVED DATA 
                    if (_this.secureNote.id) {
                        _this.secureNoteForm.submission.data.stateData = _this.stateData;
                        _this.secureNoteForm.submission.data.metaData = _this.secureNote.metaData;
                        // DECRYPT passDATA
                        _this.stateData.decrypting = true;
                        _this.jemUtilsService.decrypt(_this.secureNote).then(function (passDataDec) {
                            _this.secureNoteForm.submission.passData = passDataDec;
                        });
                        // CLEAR OUT THE DECRYPTED DATA AFTER 30 SECS 
                        setTimeout(function () {
                            var passDataDec = null;
                            _this.secureNoteForm.submission.data.passData = passDataDec;
                            _this.secureNoteForm.redraw();
                        }, 30000);
                    }
                    ;
                    // console.log(form.submission.data);
                    // Prevent the submission from going to the form.io server.
                    form.nosubmit = true;
                    // Handle form button clicks - buttons emit eponymous events
                    form.on('customEvent', function (emittedEvent) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = emittedEvent.type;
                                    switch (_a) {
                                        case 'saveItemButtonClick': return [3 /*break*/, 1];
                                        case 'cancelButtonClick': return [3 /*break*/, 3];
                                    }
                                    return [3 /*break*/, 4];
                                case 1:
                                    console.log(emittedEvent.type);
                                    return [4 /*yield*/, this.saveItem()];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    console.log(emittedEvent.type);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    NoteVaultDetailComponent.prototype.ngOnDestroy = function () { };
    NoteVaultDetailComponent.prototype.saveItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.secureNote = __assign({}, this.secureNoteForm.submission.data);
                // await this.jemUtilsService.encryptAndSave (true, this.secureNote); 
                console.log(this.secureNote);
                return [2 /*return*/];
            });
        });
    };
    ;
    NoteVaultDetailComponent.ɵfac = function NoteVaultDetailComponent_Factory(t) { return new (t || NoteVaultDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_jemUtils_service__WEBPACK_IMPORTED_MODULE_0__.JemUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
    NoteVaultDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoteVaultDetailComponent, selectors: [["app-note-vault-detail"]], decls: 3, vars: 0, consts: [[1, "card"], [1, "card-body"], ["id", "secureNoteForm"]], template: function NoteVaultDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLXZhdWx0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NoteVaultDetailComponent;
}());



/***/ }),

/***/ 3338:
/*!**********************************************************************************!*\
  !*** ./src/app/views/note-vault/note-vault-detail/jempass-secure-note-form.json ***!
  \**********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"_id":"61d5dda7ecb3f84b9b916bf5","type":"form","tags":[],"owner":"61bf7916dd38c409cbe95a46","components":[{"label":"metaData","tableView":false,"key":"metaData","type":"container","input":true,"components":[{"label":"Title","tableView":true,"key":"secureNoteTitle","type":"textfield","input":true}]},{"label":"passData","tableView":false,"key":"passData","type":"container","input":true,"components":[{"label":"Note","editor":"ckeditor","autoExpand":false,"spellcheck":false,"tableView":true,"key":"secureNoteContent","type":"textarea","uploadStorage":"base64","input":true,"isUploadEnabled":true},{"label":"Attachments","tableView":false,"storage":"base64","webcam":false,"fileTypes":[{"label":"","value":""}],"fileMaxSize":"2MB","key":"attachments","type":"file","input":true}]},{"label":"Save","action":"event","showValidations":false,"disableOnInvalid":true,"tableView":false,"key":"save","type":"button","input":true,"event":"saveItemButtonClick"}],"revisions":"","_vid":0,"title":"jemPassSecureNote","display":"form","access":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":["61bf797f245b7059efd6b695","61bf797f245b703368d6b69a","61bf797f245b7019fed6b69f"],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"submissionAccess":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":[],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"controller":"","properties":{},"settings":{},"name":"jemPassSecureNote","path":"jempasssecurenote","project":"61bf797f245b70c9bfd6b68e","created":"2022-01-05T18:04:23.584Z","modified":"2022-01-06T20:44:11.916Z","machineName":"fizlpoaklnedkaa:jemPassSecureNote"}');

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_note-vault_note-vault-detail_note-vault-detail_component_ts.js.map