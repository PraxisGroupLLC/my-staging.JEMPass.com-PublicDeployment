(self["webpackChunkjemPass_Angular_App_staging_"] = self["webpackChunkjemPass_Angular_App_staging_"] || []).push([["src_app_views_note-vault_note-vault_module_ts"],{

/***/ 48187:
/*!*******************************************************************************!*\
  !*** ./src/app/views/note-vault/note-vault-list/note-vault-list.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteVaultListComponent": function() { return /* binding */ NoteVaultListComponent; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
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









function NoteVaultListComponent_ngx_datatable_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Title ");
} }
function NoteVaultListComponent_ngx_datatable_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r12.title, " ");
} }
function NoteVaultListComponent_ngx_datatable_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Username/Email Address ");
} }
function NoteVaultListComponent_ngx_datatable_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r14.username, " ");
} }
function NoteVaultListComponent_ngx_datatable_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Status ");
} }
var _c0 = function (a0, a1, a2) { return { "badge-outline-success": a0, "badge-outline-warning": a1, "badge-outline-danger": a2 }; };
function NoteVaultListComponent_ngx_datatable_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, row_r16.status === "encrypted", row_r16.status === "processing", row_r16.status === "decrypted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r16.status, " ");
} }
function NoteVaultListComponent_ngx_datatable_14_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Actions ");
} }
var _c1 = function (a1) { return ["/vault/edit", a1]; };
function NoteVaultListComponent_ngx_datatable_14_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteVaultListComponent_ngx_datatable_14_ng_template_12_Template_button_click_2_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); var row_r18 = restoredCtx.row; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16); return ctx_r19.deleteItem(row_r18.id, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, row_r18.id));
} }
function NoteVaultListComponent_ngx_datatable_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-datatable", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NoteVaultListComponent_ngx_datatable_14_ng_template_2_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NoteVaultListComponent_ngx_datatable_14_ng_template_3_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NoteVaultListComponent_ngx_datatable_14_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NoteVaultListComponent_ngx_datatable_14_ng_template_6_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ngx-datatable-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NoteVaultListComponent_ngx_datatable_14_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NoteVaultListComponent_ngx_datatable_14_ng_template_9_Template, 2, 6, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngx-datatable-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NoteVaultListComponent_ngx_datatable_14_ng_template_11_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NoteVaultListComponent_ngx_datatable_14_ng_template_12_Template, 4, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", 60 * ctx_r0.vault.length + 60 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 60)("scrollbarV", true)("scrollbarH", true)("rows", ctx_r0.vault);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 120);
} }
function NoteVaultListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteVaultListComponent_ng_template_15_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "You are about to delete this item. Are you absolutely sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteVaultListComponent_ng_template_15_Template_button_click_13_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Keep");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteVaultListComponent_ng_template_15_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c2 = function () { return ["/vault/new"]; };
var NoteVaultListComponent = /** @class */ (function () {
    function NoteVaultListComponent(modalService, toastr, jemService, auth) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.jemService = jemService;
        this.auth = auth;
    }
    NoteVaultListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    NoteVaultListComponent.prototype.loadVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, outputVault;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _b.label = 3;
                    case 3:
                        sodium = _a;
                        outputVault = [];
                        return [4 /*yield*/, this.auth.getAllCredentials()
                                .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    res.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var data, metaKEKBuf, metaDataBuf, metaKey, metaData, passDataBuf;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    data = JSON.parse(item.data);
                                                    metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                                                    metaDataBuf = Buffer.from(data.metaData, 'base64');
                                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(this.auth.userSettings.metaKey))];
                                                case 1:
                                                    metaKey = _a.sent();
                                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                                                case 2:
                                                    metaData = _a.sent();
                                                    metaData = JSON.parse(metaData);
                                                    passDataBuf = Buffer.from(data.passData, 'base64');
                                                    outputVault.push({
                                                        "id": item.RowKey,
                                                        "title": metaData.title,
                                                        "username": metaData.username,
                                                        "status": "encrypted"
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    this.vault = outputVault;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoteVaultListComponent.prototype.deleteItem = function (id, modal) {
        var _this = this;
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.auth.deleteCredential(id)
                .subscribe(function (res) {
                _this.toastr.success('Item Deleted!', 'Success!', { timeOut: 3000 });
                _this.loadVault();
            });
        }, function (reason) {
        });
    };
    NoteVaultListComponent.ɵfac = function NoteVaultListComponent_Factory(t) { return new (t || NoteVaultListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
    NoteVaultListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NoteVaultListComponent, selectors: [["app-note-vault-list"]], decls: 17, vars: 3, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row", "mb-3"], [1, "col-md-12", "mb-3"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "col-md-12"], [1, "card", "o-hidden"], ["style", "box-shadow: none", "class", "material fullscreen", 3, "height", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows", 4, "ngIf"], ["deleteConfirmModal", ""], [1, "material", "fullscreen", 2, "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "flexGrow"], [3, "width"], [1, "badge", "p-2", "mr-1", 3, "ngClass"], [1, "btn", "btn-wide", "btn-outline-secondary", "mr-3", 3, "routerLink"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function NoteVaultListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vault");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Logins");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "New");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NoteVaultListComponent_ngx_datatable_14_Template, 13, 11, "ngx-datatable", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NoteVaultListComponent_ng_template_15_Template, 17, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vault == null ? null : ctx.vault.length);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLXZhdWx0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NoteVaultListComponent;
}());



/***/ }),

/***/ 70083:
/*!***************************************************************!*\
  !*** ./src/app/views/note-vault/note-vault-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteVaultRoutingModule": function() { return /* binding */ NoteVaultRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _note_vault_list_note_vault_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-vault-list/note-vault-list.component */ 48187);
/* harmony import */ var _note_vault_detail_note_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-vault-detail/note-vault-detail.component */ 81217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





var routes = [
    {
        path: '',
        component: _note_vault_list_note_vault_list_component__WEBPACK_IMPORTED_MODULE_0__.NoteVaultListComponent
    },
    {
        path: 'new',
        component: _note_vault_detail_note_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.NoteVaultDetailComponent
    },
    {
        path: 'edit/:id',
        // canActivate: [AuthGaurd],
        component: _note_vault_detail_note_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.NoteVaultDetailComponent
    }
];
var NoteVaultRoutingModule = /** @class */ (function () {
    function NoteVaultRoutingModule() {
    }
    NoteVaultRoutingModule.ɵfac = function NoteVaultRoutingModule_Factory(t) { return new (t || NoteVaultRoutingModule)(); };
    NoteVaultRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NoteVaultRoutingModule });
    NoteVaultRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
    return NoteVaultRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NoteVaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 35695:
/*!*******************************************************!*\
  !*** ./src/app/views/note-vault/note-vault.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteVaultModule": function() { return /* binding */ NoteVaultModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _note_vault_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-vault-routing.module */ 70083);
/* harmony import */ var _note_vault_detail_note_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-vault-detail/note-vault-detail.component */ 81217);
/* harmony import */ var _note_vault_list_note_vault_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-vault-list/note-vault-list.component */ 48187);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);









var NoteVaultModule = /** @class */ (function () {
    function NoteVaultModule() {
    }
    NoteVaultModule.ɵfac = function NoteVaultModule_Factory(t) { return new (t || NoteVaultModule)(); };
    NoteVaultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NoteVaultModule });
    NoteVaultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
                _note_vault_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoteVaultRoutingModule
            ]] });
    return NoteVaultModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NoteVaultModule, { declarations: [_note_vault_detail_note_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.NoteVaultDetailComponent, _note_vault_list_note_vault_list_component__WEBPACK_IMPORTED_MODULE_2__.NoteVaultListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        _note_vault_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoteVaultRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_note-vault_note-vault_module_ts.js.map