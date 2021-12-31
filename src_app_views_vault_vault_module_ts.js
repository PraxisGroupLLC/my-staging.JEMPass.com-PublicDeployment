(self["webpackChunkjemPassAngularApp"] = self["webpackChunkjemPassAngularApp"] || []).push([["src_app_views_vault_vault_module_ts"],{

/***/ 20484:
/*!********************************************************************!*\
  !*** ./src/app/views/vault/vault-detail/vault-detail.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultDetailComponent": function() { return /* binding */ VaultDetailComponent; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ 38845);
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









function VaultDetailComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_0_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.viewMode = "print"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "btn-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_0_div_1_Template_btn_loading_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.saveCredentials(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r4.loadingText)("loading", ctx_r4.loading);
} }
function VaultDetailComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Back To Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_0_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.viewMode = "edit"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VaultDetailComponent_div_0_div_1_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VaultDetailComponent_div_0_div_2_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode !== "edit");
} }
function VaultDetailComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "btn-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_2_div_5_Template_btn_loading_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.saveCredentials(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r11.loadingText)("loading", ctx_r11.loading);
} }
function VaultDetailComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Back To Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_2_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.viewMode = "edit"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VaultDetailComponent_div_2_div_5_Template, 6, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VaultDetailComponent_div_2_div_6_Template, 6, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.vault.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.viewMode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.viewMode !== "edit");
} }
function VaultDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Item Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.vaultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r2.vault.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r2.vault.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r2.vault.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r2.vault.status);
} }
function VaultDetailComponent_div_4_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_4_div_1_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return (ctx_r23.showPasswordGenerator[i_r19] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Generate New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultDetailComponent_div_4_div_1_span_29_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_4_div_1_span_29_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return (ctx_r26.showPasswordGenerator[i_r19] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Done - Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultDetailComponent_div_4_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Password Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Password Contains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Uppercase char");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Lowercase char");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_div_4_div_1_div_30_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.random_str(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Generate Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vaultForm_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", vaultForm_r18.value.length, " chars");
} }
function VaultDetailComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New Credential Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, VaultDetailComponent_div_4_div_1_span_28_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, VaultDetailComponent_div_4_div_1_span_29_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, VaultDetailComponent_div_4_div_1_div_30_Template, 34, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vaultForm_r18 = ctx.$implicit;
    var i_r19 = ctx.index;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", vaultForm_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", vaultForm_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", vaultForm_r18.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", vaultForm_r18.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", vaultForm_r18.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r17.showPasswordGenerator[i_r19]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.showPasswordGenerator[i_r19]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.showPasswordGenerator[i_r19]);
} }
function VaultDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VaultDetailComponent_div_4_div_1_Template, 31, 8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.vaultForms);
} }
var VaultDetailComponent = /** @class */ (function () {
    function VaultDetailComponent(route, router, fb, auth, jemService, toastr) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.jemService = jemService;
        this.toastr = toastr;
        this.vault = {};
        this.vaultForm = {};
        this.vaultForms = [];
        this.loading = false;
        this.CHARACTER_SETS = [
            ["Numbers", "0123456789"],
            ["Lowercase", "abcdefghijklmnopqrstuvwxyz"],
            ["Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
            ["ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
        ];
        this.showPasswordGenerator = [];
    }
    VaultDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formIndex = 0;
        this.id = this.route.snapshot.params['id'];
        this.isNew = !this.id;
        if (this.isNew) {
            this.viewMode = 'edit';
        }
        this.buildVaultForms(this.formIndex, this.vault);
        if (this.id) {
            this.viewMode = 'print';
            this.auth.getCredential(this.id)
                .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var sodium, _a, data, metaKEKBuf, metaDataBuf, metaKey, metaData;
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
                            data = JSON.parse(res.data);
                            metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                            metaDataBuf = Buffer.from(data.metaData, 'base64');
                            return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(this.auth.userSettings.metaKey))];
                        case 4:
                            metaKey = _b.sent();
                            return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                        case 5:
                            metaData = _b.sent();
                            metaData = JSON.parse(metaData);
                            this.vault = {
                                "id": res.RowKey,
                                "title": metaData.title,
                                "url": metaData.url,
                                "username": metaData.username,
                                "status": "encrypted"
                            };
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    VaultDetailComponent.prototype.isMobile = function () {
        return window.innerWidth < 600;
    };
    VaultDetailComponent.prototype.buildVaultForms = function (formIndex, i) {
        if (i === void 0) { i = {}; }
        this.vaultForms[formIndex] = this.fb.group({
            id: [i.id],
            title: [i.title],
            url: [i.url],
            username: [i.username],
            password: [i.password],
            length: 14,
            numbers: 1,
            uppercase: 1,
            lowercase: 1,
            specialchars: 1
        });
        this.showPasswordGenerator[formIndex] = false;
    };
    VaultDetailComponent.prototype.addEmptyVaultForm = function () {
        this.formIndex++;
        this.buildVaultForms(this.formIndex, {});
    };
    VaultDetailComponent.prototype.createItem = function (item) {
        if (item === void 0) { item = {}; }
        return this.fb.group({
            title: [item.title],
            url: [item.url],
            username: [item.username],
            password: [item.password]
        });
    };
    VaultDetailComponent.prototype.saveItem = function (vault, terminal) {
        if (terminal === void 0) { terminal = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var sodium, _a, metaKey, passKey, record, nonce, _b, nonce, _c, nonce, _d, error_1;
                        var _this = this;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    this.loading = true;
                                    this.loadingText = "Touch your JEM...";
                                    if (!(!sodium)) return [3 /*break*/, 2];
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
                                    record = {
                                        metaKEK: "",
                                        passKEK: "",
                                        type: 1,
                                        metaData: {
                                            "title": vault.title,
                                            "username": vault.username,
                                            "url": vault.url
                                        },
                                        passData: {
                                            "password": vault.password
                                        }
                                    };
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
                                    return [4 /*yield*/, this.jemService.encrypt(passKey, this.auth.deviceSettings, terminal)
                                            .then(function (data) {
                                            record.passKEK = data;
                                        })];
                                case 13:
                                    _e.sent();
                                    return [3 /*break*/, 15];
                                case 14:
                                    error_1 = _e.sent();
                                    this.loading = false;
                                    this.toastr.error(error_1.message, 'Error', {
                                        timeOut: 5000,
                                        closeButton: true,
                                        progressBar: true
                                    });
                                    return [2 /*return*/, reject()];
                                case 15: return [4 /*yield*/, this.auth.addCredential(record)
                                        .subscribe(function (item) {
                                        _this.toastr.success('Saved item!', 'Success!', {
                                            timeOut: 3000
                                        });
                                        resolve('');
                                    })];
                                case 16:
                                    _e.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    // Save multiple items from a single form that contains >1 credential
    VaultDetailComponent.prototype.saveCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, credential, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.vaultForms.length)) return [3 /*break*/, 6];
                        credential = this.vaultForms[i].value;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.saveItem(credential, (i < (this.vaultForms.length - 1)) ? false : true)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [4 /*yield*/, this.router.navigateByUrl('/dashboard/v2')];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // PASSWORD CREATION
    VaultDetailComponent.prototype.getRandomInt = function (min, max) {
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, byteArray, range, max_range;
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
                        return [4 /*yield*/, sodium.randombytes_buf(1)];
                    case 4:
                        byteArray = _b.sent();
                        range = max - min + 1;
                        max_range = 256;
                        if (byteArray[0] >= Math.floor(max_range / range) * range)
                            return [2 /*return*/, this.getRandomInt(min, max)];
                        return [2 /*return*/, min + (byteArray[0] % range)];
                }
            });
        });
    };
    VaultDetailComponent.prototype.doCopy = function (vaultFormID) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.vaultForms[vaultFormID].value.password;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastr.success('The password is in your clipboard!', 'Success!', {
            timeOut: 5000
        });
    };
    VaultDetailComponent.prototype.random_str = function (vaultFormID) {
        return __awaiter(this, void 0, void 0, function () {
            var pieces, length, keyspace, max, i, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pieces = [];
                        length = this.vaultForms[vaultFormID].value.length;
                        keyspace = '';
                        keyspace = (this.vaultForms[vaultFormID].value.numbers == 1) ? this.CHARACTER_SETS[0][1] : '';
                        keyspace += (this.vaultForms[vaultFormID].value.lowercase == 1) ? this.CHARACTER_SETS[1][1] : '';
                        keyspace += (this.vaultForms[vaultFormID].value.uppercase == 1) ? this.CHARACTER_SETS[2][1] : '';
                        keyspace += (this.vaultForms[vaultFormID].value.specialchars == 1) ? this.CHARACTER_SETS[3][1] : '';
                        max = (keyspace.length - 1);
                        i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(i < length)) return [3 /*break*/, 4];
                        _b = (_a = pieces).push;
                        _c = keyspace;
                        return [4 /*yield*/, this.getRandomInt(0, max)];
                    case 2:
                        _b.apply(_a, [_c[_d.sent()]]);
                        _d.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4:
                        this.vaultForms[vaultFormID].patchValue({
                            password: pieces.join("")
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VaultDetailComponent.ɵfac = function VaultDetailComponent_Factory(t) { return new (t || VaultDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_2__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
    VaultDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VaultDetailComponent, selectors: [["app-invoice-detail"]], decls: 8, vars: 4, consts: [[4, "ngIf"], [1, "card-body", "justify-content-between"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], [1, "btn", "btn-outline-secondary", 3, "click"], ["class", "d-flex mb-5 col-lg-12 justify-content-between", 4, "ngIf"], ["class", "d-flex mb-5 col-xs-12 justify-content-between", 4, "ngIf"], [1, "d-flex", "mb-5", "col-lg-12", "justify-content-between"], [1, "btn", "btn-outline-secondary", "mr-3", 3, "click"], ["btnClass", "btn-primary", 3, "loadingText", "loading", "click"], [1, "d-flex", "mb-5", "col-xs-12", "justify-content-between"], ["routerLink", "/dashboard/v2", 1, "btn", "btn-outline-secondary", "mr-3", "mb-sm-0", "mb-3"], [1, "btn", "btn-outline-secondary", "mr-3", "mb-sm-0", "mb-3", 3, "click"], [1, "row"], [1, "col-md-6"], [1, "font-weight-bold"], [1, "col-md-6", "text-right"], ["class", "d-flex mb-5", 4, "ngIf"], ["class", "d-sm-flex mb-5", 4, "ngIf"], [1, "d-flex", "mb-5"], [1, "m-auto"], ["routerLink", "/dashboard/v2", 1, "btn", "btn-outline-secondary", "mr-3"], [1, "d-sm-flex", "mb-5"], [1, "card", "mb-4"], [1, "card-body"], [3, "formGroup"], [1, "row", "card-body", "justify-content-between"], [1, "card-title", "mb-3"], [1, "col-md-6", "form-group", "mb-3"], ["for", "title"], ["formControlName", "title", "type", "text", "id", "title", "readonly", "", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["for", "url"], ["formControlName", "url", "type", "text", "id", "url", "readonly", "", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["for", "username"], ["formControlName", "username", "type", "text", "id", "username", "readonly", "", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["for", "password"], ["formControlName", "password", "type", "text", "id", "password", "readonly", "", 1, "form-control", 2, "font-weight", "bold", 3, "value"], [4, "ngFor", "ngForOf"], ["formControlName", "title", "type", "text", "id", "title", "placeholder", "Enter descriptive title here", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["formControlName", "url", "type", "text", "id", "url", "formControlName", "url", "placeholder", "Enter the domain of the website here, e.g., example.com", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["formControlName", "username", "type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter your username for this website here", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["formControlName", "password", "type", "text", "id", "password", "formControlName", "password", "placeholder", "Enter your current password for this website here", 1, "form-control", 2, "font-weight", "bold", 3, "value"], ["class", "text-muted", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "text-muted", 3, "click"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-1", "mt-2"], [1, ""], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "range", "min", "8", "max", "42", "value", "14", "formControlName", "length", 1, "mr-2"], ["id", "passwordConfigurator"], [1, "pt-3"], [1, "d-flex", "justify-content-between", "pt-2"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "checked", "", "name", "uppercase", "formControlName", "uppercase", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "lowercase", "formControlName", "lowercase", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "numbers", "formControlName", "numbers", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "specialchars", "formControlName", "specialchars", 1, "ml-4"], [1, "btn", "btn-rounded", "btn-secondary", "btn-block", 3, "click"]], template: function VaultDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VaultDetailComponent_div_0_Template, 3, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VaultDetailComponent_div_2_Template, 7, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VaultDetailComponent_div_3_Template, 26, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VaultDetailComponent_div_4_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VaultDetailComponent_Template_button_click_6_listener() { return ctx.addEmptyVaultForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "+1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMobile());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isMobile());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode !== "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode === "edit");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__.BtnLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXVsdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });
    return VaultDetailComponent;
}());



/***/ }),

/***/ 97313:
/*!****************************************************************!*\
  !*** ./src/app/views/vault/vault-list/vault-list.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultListComponent": function() { return /* binding */ VaultListComponent; }
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









function VaultListComponent_ngx_datatable_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Title ");
} }
function VaultListComponent_ngx_datatable_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r12.title, " ");
} }
function VaultListComponent_ngx_datatable_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Username/Email Address ");
} }
function VaultListComponent_ngx_datatable_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r14.username, " ");
} }
function VaultListComponent_ngx_datatable_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Status ");
} }
var _c0 = function (a0, a1, a2) { return { "badge-outline-success": a0, "badge-outline-warning": a1, "badge-outline-danger": a2 }; };
function VaultListComponent_ngx_datatable_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, row_r16.status === "encrypted", row_r16.status === "processing", row_r16.status === "decrypted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r16.status, " ");
} }
function VaultListComponent_ngx_datatable_14_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Actions ");
} }
var _c1 = function (a1) { return ["/vault/edit", a1]; };
function VaultListComponent_ngx_datatable_14_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VaultListComponent_ngx_datatable_14_ng_template_12_Template_button_click_2_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); var row_r18 = restoredCtx.row; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16); return ctx_r19.deleteItem(row_r18.id, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, row_r18.id));
} }
function VaultListComponent_ngx_datatable_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-datatable", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VaultListComponent_ngx_datatable_14_ng_template_2_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VaultListComponent_ngx_datatable_14_ng_template_3_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngx-datatable-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VaultListComponent_ngx_datatable_14_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VaultListComponent_ngx_datatable_14_ng_template_6_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ngx-datatable-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VaultListComponent_ngx_datatable_14_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VaultListComponent_ngx_datatable_14_ng_template_9_Template, 2, 6, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngx-datatable-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VaultListComponent_ngx_datatable_14_ng_template_11_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VaultListComponent_ngx_datatable_14_ng_template_12_Template, 4, 3, "ng-template", 12);
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
function VaultListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VaultListComponent_ng_template_15_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("Cross click"); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VaultListComponent_ng_template_15_Template_button_click_13_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Keep");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VaultListComponent_ng_template_15_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var modal_r21 = restoredCtx.$implicit; return modal_r21.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c2 = function () { return ["/vault/new"]; };
var VaultListComponent = /** @class */ (function () {
    function VaultListComponent(modalService, toastr, jemService, auth) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.jemService = jemService;
        this.auth = auth;
    }
    VaultListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    VaultListComponent.prototype.loadVault = function () {
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
    VaultListComponent.prototype.deleteItem = function (id, modal) {
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
    VaultListComponent.ɵfac = function VaultListComponent_Factory(t) { return new (t || VaultListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
    VaultListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VaultListComponent, selectors: [["app-vault-list"]], decls: 17, vars: 3, consts: [[1, "breadcrumb"], ["href", ""], [1, "separator-breadcrumb", "border-top"], [1, "row", "mb-3"], [1, "col-md-12", "mb-3"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "col-md-12"], [1, "card", "o-hidden"], ["style", "box-shadow: none", "class", "material fullscreen", 3, "height", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows", 4, "ngIf"], ["deleteConfirmModal", ""], [1, "material", "fullscreen", 2, "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "flexGrow"], [3, "width"], [1, "badge", "p-2", "mr-1", 3, "ngClass"], [1, "btn", "btn-wide", "btn-outline-secondary", "mr-3", 3, "routerLink"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function VaultListComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, VaultListComponent_ngx_datatable_14_Template, 13, 11, "ngx-datatable", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VaultListComponent_ng_template_15_Template, 17, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vault == null ? null : ctx.vault.length);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXVsdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return VaultListComponent;
}());



/***/ }),

/***/ 4867:
/*!*****************************************************!*\
  !*** ./src/app/views/vault/vault-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultRoutingModule": function() { return /* binding */ VaultRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vault_list_vault_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vault-list/vault-list.component */ 97313);
/* harmony import */ var _vault_detail_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vault-detail/vault-detail.component */ 20484);
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.gaurd */ 57595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






var routes = [
    {
        path: '',
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__.AuthGaurd],
        component: _vault_list_vault_list_component__WEBPACK_IMPORTED_MODULE_0__.VaultListComponent
    },
    {
        path: 'new',
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__.AuthGaurd],
        component: _vault_detail_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.VaultDetailComponent
    },
    {
        path: 'edit/:id',
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__.AuthGaurd],
        component: _vault_detail_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.VaultDetailComponent
    }
];
var VaultRoutingModule = /** @class */ (function () {
    function VaultRoutingModule() {
    }
    VaultRoutingModule.ɵfac = function VaultRoutingModule_Factory(t) { return new (t || VaultRoutingModule)(); };
    VaultRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VaultRoutingModule });
    VaultRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
    return VaultRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 41300:
/*!*********************************************!*\
  !*** ./src/app/views/vault/vault.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultModule": function() { return /* binding */ VaultModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _vault_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vault-routing.module */ 4867);
/* harmony import */ var _vault_detail_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vault-detail/vault-detail.component */ 20484);
/* harmony import */ var _vault_list_vault_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vault-list/vault-list.component */ 97313);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ 50933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);









var VaultModule = /** @class */ (function () {
    function VaultModule() {
    }
    VaultModule.ɵfac = function VaultModule_Factory(t) { return new (t || VaultModule)(); };
    VaultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VaultModule });
    VaultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
                _vault_routing_module__WEBPACK_IMPORTED_MODULE_0__.VaultRoutingModule
            ]] });
    return VaultModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VaultModule, { declarations: [_vault_detail_vault_detail_component__WEBPACK_IMPORTED_MODULE_1__.VaultDetailComponent, _vault_list_vault_list_component__WEBPACK_IMPORTED_MODULE_2__.VaultListComponent, _vault_list_vault_list_component__WEBPACK_IMPORTED_MODULE_2__.VaultListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        _vault_routing_module__WEBPACK_IMPORTED_MODULE_0__.VaultRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_vault_vault_module_ts.js.map