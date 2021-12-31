(self["webpackChunkjemPassAngularApp"] = self["webpackChunkjemPassAngularApp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ 54453);
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.gaurd */ 57595);
/* harmony import */ var _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/blank-layout/blank-layout.component */ 13447);
/* harmony import */ var _shared_components_layouts_admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component */ 47099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







var adminRoutes = [
    {
        path: 'dashboard',
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__.AuthGaurd],
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 54727)).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'vault',
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__.AuthGaurd],
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_vault_vault_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/vault/vault.module */ 41300)).then(function (m) { return m.VaultModule; }); }
    }
];
var routes = [
    {
        path: '',
        redirectTo: 'dashboard/v2',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_sessions_sessions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/sessions/sessions.module */ 95134)).then(function (m) { return m.SessionsModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__.BlankLayoutComponent,
        children: [
            {
                path: 'general',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_views_others_others_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/others/others.module */ 4443)).then(function (m) { return m.OthersModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutSidebarCompactComponent,
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_1__.AuthGaurd],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'general/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bootDash';
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".modal-content[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%; \n    \n    pointer-events: auto;\n    background: none;\n    \n    background-clip: padding-box;\n    \n    border: 0;\n    \n    outline: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVzs7SUFFWCxvQkFBb0I7SUFDcEIsZ0JBQWdCOztJQUVoQiw0QkFBNEI7O0lBRTVCLFNBQVM7O0lBRVQsVUFBVTtFQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBcbiAgICBib3JkZXI6IDA7XG4gICAgXG4gICAgb3V0bGluZTogMDtcbiAgfSJdfQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _shared_services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/http-error.interceptor */ 8018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);








// block to enable capacitor-based mobile functionality 
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// // import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Broadcaster } from '@ionic-native/broadcaster/ngx';
// import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
// import { AppPreferences } from '@ionic-native/app-preferences/ngx';
// import { Keychain } from '@ionic-native/keychain/ngx';
// // END block to enable capacitor-based mobile functionality 
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import { IonicModule } from '@ionic/angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS, useClass: _shared_services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpErrorInterceptor, multi: true }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 7433:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAnimations": function() { return /* binding */ SharedAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 17238);

var reusable = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('animate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(reusable)])]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            display: 'none'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            display: 'block'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms'))
    ]),
];


/***/ }),

/***/ 38845:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BtnLoadingComponent": function() { return /* binding */ BtnLoadingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function BtnLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function BtnLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BtnLoadingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
} }
var _c0 = function (a0) { return { loading: a0 }; };
var _c1 = ["*"];
var BtnLoadingComponent = /** @class */ (function () {
    function BtnLoadingComponent() {
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    BtnLoadingComponent.prototype.ngOnInit = function () {
    };
    BtnLoadingComponent.ɵfac = function BtnLoadingComponent_Factory(t) { return new (t || BtnLoadingComponent)(); };
    BtnLoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnLoadingComponent, selectors: [["btn-loading"]], inputs: { loading: "loading", btnClass: "btnClass", loadingText: "loadingText", type: "type", disabled: "disabled" }, ngContentSelectors: _c1, decls: 4, vars: 12, consts: [[3, "type", "disabled", "ngClass"], ["class", "btn-spinner float-left", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner", "float-left"]], template: function BtnLoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BtnLoadingComponent_div_1_Template, 1, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BtnLoadingComponent_span_2_Template, 2, 0, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BtnLoadingComponent_span_3_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn ", ctx.btnClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("disabled", ctx.loading)("disabled", ctx.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.loading));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["button[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all .15s ease-in-out;\n}\n\nbutton.loading[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n\nbutton[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNwQzs7QUFIQTtFQUlRLGtCQUFrQjtBQUcxQjs7QUFQQTtFQU9RLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0FBSWxCIiwiZmlsZSI6ImJ0bi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgICAuYnRuLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxufVxuIl19 */"] });
    return BtnLoadingComponent;
}());



/***/ }),

/***/ 49982:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/cred-detail-in-modal/cred-detail-in-modal.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CredDetailInModalComponent": function() { return /* binding */ CredDetailInModalComponent; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formio_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @formio/angular */ 42281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../btn-loading/btn-loading.component */ 38845);
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










function CredDetailInModalComponent_div_2_div_7_div_16_btn_loading_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "btn-loading", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_7_div_16_btn_loading_1_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r9.decrypt(ctx_r9.credential, ctx_r9.credential.passKEK, ctx_r9.credential.passData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Password is Encrypted - Click to Decrypt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r7.loadingText)("loading", ctx_r7.decrypting);
} }
function CredDetailInModalComponent_div_2_div_7_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CredDetailInModalComponent_div_2_div_7_div_16_btn_loading_1_Template, 4, 2, "btn-loading", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CredDetailInModalComponent_div_2_div_7_div_16_div_2_Template, 4, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.credential.status === "encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.credential.status !== "encrypted");
} }
function CredDetailInModalComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Username/Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CredDetailInModalComponent_div_2_div_7_div_16_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.vaultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.credential.id);
} }
function CredDetailInModalComponent_div_2_div_8_btn_loading_17_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "btn-loading", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_8_btn_loading_17_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r16.decrypt(ctx_r16.credential, ctx_r16.credential.passKEK, ctx_r16.credential.passData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Password Encrypted - Click to Decrypt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r11.loadingText)("loading", ctx_r11.decrypting);
} }
function CredDetailInModalComponent_div_2_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_8_span_20_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_8_span_20_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.showPasswordGenerator = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Generate New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_8_span_21_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_8_span_21_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r20.showPasswordGenerator = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Done - Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_8_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Password Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Password Contains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Uppercase char");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Lowercase char");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_8_div_22_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r22.random_str(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Generate Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r15.vaultForm.value.length, " chars");
} }
function CredDetailInModalComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CredDetailInModalComponent_div_2_div_8_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.activeCredTitle = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Username/Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CredDetailInModalComponent_div_2_div_8_btn_loading_17_Template, 4, 2, "btn-loading", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CredDetailInModalComponent_div_2_div_8_div_18_Template, 4, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CredDetailInModalComponent_div_2_div_8_span_20_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CredDetailInModalComponent_div_2_div_8_span_21_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CredDetailInModalComponent_div_2_div_8_div_22_Template, 34, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.vaultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.credential.status === "encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.credential.status !== "encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.showPasswordGenerator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.showPasswordGenerator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.showPasswordGenerator);
} }
function CredDetailInModalComponent_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_9_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r27.editCredential(ctx_r27.credential); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_9_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r29.activeModal.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CredDetailInModalComponent_div_2_div_9_div_1_Template, 5, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.decrypting && !ctx_r4.saving);
} }
function CredDetailInModalComponent_div_2_div_10_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_10_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); ctx_r33.buildVaultForm(ctx_r33.credential); return ctx_r33.viewMode = "print"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Discard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_10_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_10_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r35.activeModal.close("OK"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Discard & Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CredDetailInModalComponent_div_2_div_10_div_1_button_1_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CredDetailInModalComponent_div_2_div_10_div_1_button_2_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "btn-loading", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_div_10_div_1_Template_btn_loading_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r37.saveItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r30.credential.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r30.credential.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r30.loadingText)("loading", ctx_r30.saving);
} }
function CredDetailInModalComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CredDetailInModalComponent_div_2_div_10_div_1_Template, 5, 4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.decrypting && !ctx_r5.saving);
} }
function CredDetailInModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.activeModal.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CredDetailInModalComponent_div_2_div_7_Template, 17, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CredDetailInModalComponent_div_2_div_8_Template, 23, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CredDetailInModalComponent_div_2_div_9_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CredDetailInModalComponent_div_2_div_10_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.activeCredTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode !== "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode !== "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.viewMode === "edit");
} }
function CredDetailInModalComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Waiting for JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r41.credential.title, "");
} }
function CredDetailInModalComponent_div_3_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " to Decrypt Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_3_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " to Encrypt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_3_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Press JEM with enrolled finger to decrypt password for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r44.credential.title, ".");
} }
function CredDetailInModalComponent_div_3_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Press JEM with enrolled finger to encrypt and save credential: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r45.credential.title, ".");
} }
function CredDetailInModalComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " A green glow indicates that JEM is waiting for a fingerprint. Press JEM with enrolled finger. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CredDetailInModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CredDetailInModalComponent_div_3_div_1_Template, 8, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CredDetailInModalComponent_div_3_h5_5_Template, 5, 0, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CredDetailInModalComponent_div_3_h5_6_Template, 5, 0, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Waiting for JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CredDetailInModalComponent_div_3_span_20_Template, 4, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CredDetailInModalComponent_div_3_span_21_Template, 4, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CredDetailInModalComponent_div_3_div_22_Template, 5, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CredDetailInModalComponent_div_3_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.showJemPulsingGreenInfoAlert = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "JEM glowing green?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "I need help");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.decrypting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.decrypting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showJemPulsingGreenInfoAlert);
} }
// (Formio as any).icons = 'fontawesome'; 
// (Formio as any).icons = 'iconsmind'; 
var CredDetailInModalComponent = /** @class */ (function () {
    function CredDetailInModalComponent(activeModal, jemService, auth, fb, toastr) {
        this.activeModal = activeModal;
        this.jemService = jemService;
        this.auth = auth;
        this.fb = fb;
        this.toastr = toastr;
        this.myForm = __webpack_require__(/*! ./credentialForm.json */ 45622);
        this.decrypting = false;
        this.saving = false;
        // TODO: check whether changing the type of loading and loading text from array to any,
        // which was required to get this component working, could cause problems.
        // loading: any[] = [];
        // loadingText: any[] = [];
        this.viewMode = 'print';
        this.vault = {};
        this.stateData = {
            "isModeEdit": false,
            "isMfaConfigured": false,
            "isDecrypted": false,
            "showPasswordGenerator": false,
            "decrypting": false,
            "saving": false
        };
        this.decryptedData = {
            "password": "Plaintext Password",
            "mfaCode": "Your MFA Code"
        };
        this.CHARACTER_SETS = [
            ["Numbers", "0123456789"],
            ["Lowercase", "abcdefghijklmnopqrstuvwxyz"],
            ["Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
            ["ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
        ];
        this.showPasswordGenerator = false;
        this.showJemPulsingGreenInfoAlert = false;
    }
    CredDetailInModalComponent.prototype.ngOnInit = function () {
        this.decrypting = this.stateData.decrypting;
        this.saving = this.stateData.saving;
        var parent = this;
        _formio_angular__WEBPACK_IMPORTED_MODULE_5__.Formio.createForm(document.getElementById("myForm"), this.myForm)
            .then(function (form) {
            // Populate the form with credential data 
            form.submission = { data: __assign(__assign(__assign({}, parent.stateData), parent.credential.metaData), parent.credential.passData)
            };
            // Prevent the submission from going to the form.io server.
            form.nosubmit = true;
            // Handle form button clicks - buttons emit eponymous events
            form.on('customEvent', function (emittedEvent) {
                switch (emittedEvent.type) {
                    case "addMfaConfigButtonClick":
                        console.log(emittedEvent.type);
                        break;
                    case "deleteMfaConfigButtonClick":
                        console.log(emittedEvent.type);
                        break;
                    case "editCredButtonClick":
                        console.log(emittedEvent.type);
                        // parent.credential.isModeEdit = true; 
                        // form.submission = { data: parent.credential}; 
                        break;
                    case "decryptCredButtonClick":
                        console.log(emittedEvent.type);
                        break;
                    case "saveCredButtonClick":
                        console.log(emittedEvent.type);
                        break;
                    case "submitCredButtonClick":
                        console.log(emittedEvent.type);
                        break;
                    case "passwordFieldButtonClick":
                        var passwordFieldButton_1 = _formio_angular__WEBPACK_IMPORTED_MODULE_5__.Utils.getComponent(form.components, 'passwordFieldButton', true).component;
                        // If not decrypted, decrypt cred (or simulate decryption)             
                        if (!form.data.isDecrypted) {
                            // Set decryping to true; this will cause the form to display the "Press JEM" message 
                            parent.stateData.decrypting = true;
                            form.submission = { data: __assign(__assign(__assign({}, parent.stateData), parent.credential.metaData), parent.decryptedData)
                            };
                            // Simulate use of JEM and decrypting 
                            setTimeout(function () {
                                parent.decryptedData = {
                                    "password": "Plaintext Password",
                                    "mfaCode": "Your MFA Code"
                                };
                                parent.stateData.isDecrypted = true;
                                parent.stateData.decrypting = false;
                                // Spread the modified stateData and newly decrypted passData into the form 
                                form.submission = { data: __assign(__assign(__assign({}, parent.stateData), parent.credential.metaData), parent.decryptedData)
                                };
                                // Set passwordFieldButton label & suffix to display decrypted password, etc. 
                                if (parent.decryptedData.password) {
                                    passwordFieldButton_1.label = parent.decryptedData.password;
                                    passwordFieldButton_1.rightIcon = "iconsmind i-Duplicate-Layer";
                                    passwordFieldButton_1.theme = "warning";
                                }
                                else {
                                    passwordFieldButton_1.label = "No saved password for this record.";
                                    passwordFieldButton_1.rightIcon = "";
                                    passwordFieldButton_1.theme = "warning";
                                }
                            }, 5000);
                            // Get passData from API, decrpyt it and spread decrypted data into form 
                            // Redraw the form
                            form.redraw();
                            // Clear decrypted data after 10s
                            setTimeout(function () {
                                passwordFieldButton_1.label = "Encrypted: Click to Decrypt";
                                passwordFieldButton_1.rightIcon = "";
                                passwordFieldButton_1.theme = "success";
                                parent.decryptedData = {
                                    "password": '',
                                    "mfaCode": ''
                                };
                                form.submission = { data: { isDecrypted: false } };
                                // Redraw the form
                                form.redraw();
                            }, 20000);
                            // If cred is already decrypted, copy plaintext password to clipboard 
                        }
                        else {
                            // Replace this line with a call to copy() 
                            console.log("copy plaintext password to clipboard");
                            // Provide user feedback 
                            passwordFieldButton_1.label = (parent.credential.passData.decryptedPassword) ? "Copied password to clipboard" : "No saved password for this record.";
                            setTimeout(function () {
                                passwordFieldButton_1.label = (parent.credential.passData.decryptedPassword) ? parent.credential.passData.decryptedPassword : "No saved password for this record.";
                            }, 1500);
                        }
                        break;
                }
            });
        });
        this.id = this.credential.id;
        this.activeCredTitle = this.credential.title;
        this.isNew = !this.id;
        this.buildVaultForm(this.credential);
    };
    CredDetailInModalComponent.prototype.ngOnDestroy = function () {
        if (this.credential.id) {
            this.credential.eraseDecryptedData(0);
        }
    };
    CredDetailInModalComponent.prototype.decrypt = function (credential, passKEK, passData) {
        var passData, passData;
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, passKEKBuf, passKeyB64, error_1, passDataBuf;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingText = "Press your JEM...";
                        this.decrypting = true;
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
                        passKEKBuf = Buffer.from(passKEK, 'base64');
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.jemService.decrypt(passKEKBuf, this.auth.deviceSettings)
                                .then(function (passKey) { return __awaiter(_this, void 0, void 0, function () {
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
                        this.decrypting = false;
                        this.toastr.error(error_1.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        return [2 /*return*/];
                    case 7:
                        passDataBuf = Buffer.from(passData, 'base64');
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(passDataBuf.slice(24), passDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(passKeyB64, 'base64'))];
                    case 8:
                        passData = _b.sent();
                        passData = JSON.parse(passData.toString());
                        credential.status = 'decrypted';
                        credential.decryptedPassword = passData.password;
                        this.decrypting = false;
                        this.buildVaultForm(this.credential);
                        credential.eraseDecryptedData(30000);
                        return [2 /*return*/];
                }
            });
        });
    };
    CredDetailInModalComponent.prototype.isMobile = function () {
        return window.innerWidth < 600;
    };
    CredDetailInModalComponent.prototype.buildVaultForm = function (i) {
        if (i === void 0) { i = {}; }
        this.vaultForm = this.fb.group({
            id: [i.id],
            title: [i.title],
            url: [i.url],
            username: [i.username],
            status: [i.status],
            password: [i.decryptedPassword],
            length: 14,
            numbers: 1,
            uppercase: 1,
            lowercase: 1,
            specialchars: 1
        });
    };
    CredDetailInModalComponent.prototype.createItem = function (item) {
        if (item === void 0) { item = {}; }
        return this.fb.group({
            title: [item.title],
            url: [item.url],
            username: [item.username],
            password: [item.password]
        });
    };
    CredDetailInModalComponent.prototype.saveItem = function (terminal) {
        if (terminal === void 0) { terminal = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var sodium, _a, metaKey, passKey, record, nonce, _b, nonce, _c, nonce, _d, error_2;
                        var _this = this;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    this.saving = true;
                                    this.loadingText = 'Touch your JEM...';
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
                                    this.vault = this.vaultForm.value;
                                    this.vault = __assign(__assign({}, this.credential), this.vaultForm.value);
                                    record = {
                                        metaKEK: "",
                                        passKEK: "",
                                        type: 1,
                                        metaData: {
                                            "title": this.vault.title,
                                            "username": this.vault.username,
                                            "url": this.vault.url
                                        },
                                        passData: {
                                            "password": this.vault.password
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
                                    error_2 = _e.sent();
                                    this.saving = false;
                                    this.toastr.error(error_2.message, 'Error', {
                                        timeOut: 5000,
                                        closeButton: true,
                                        progressBar: true
                                    });
                                    return [2 /*return*/, reject()];
                                case 15:
                                    if (!!this.credential.id) return [3 /*break*/, 17];
                                    return [4 /*yield*/, this.auth.addCredential(record)
                                            .subscribe(function (item) {
                                            _this.toastr.success('Saved item!', 'Success!', {
                                                timeOut: 3000
                                            });
                                            _this.activeModal.close('OK');
                                        })];
                                case 16:
                                    _e.sent();
                                    resolve('');
                                    return [3 /*break*/, 19];
                                case 17: return [4 /*yield*/, this.auth.updateCredential(this.credential.id, record)
                                        .subscribe(function (item) {
                                        _this.toastr.success('Item Saved!', 'Success!', { timeOut: 3000 });
                                        _this.activeModal.close('OK');
                                    })];
                                case 18:
                                    _e.sent();
                                    resolve('');
                                    _e.label = 19;
                                case 19: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CredDetailInModalComponent.prototype.editCredential = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(credential.status == "encrypted")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.decrypt(credential, credential.passKEK, credential.passData)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        credential.clearEraseDecryptedDataTimeout();
                        this.viewMode = 'edit';
                        return [2 /*return*/];
                }
            });
        });
    };
    // PASSWORD CREATION
    CredDetailInModalComponent.prototype.getRandomInt = function (min, max) {
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
    CredDetailInModalComponent.prototype.doCopy = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.vaultForm.value.password;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastr.success('The password is in your clipboard!', 'Success!', { timeOut: 5000 });
    };
    CredDetailInModalComponent.prototype.random_str = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pieces, length, keyspace, max, i, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pieces = [];
                        length = this.vaultForm.value.length;
                        keyspace = '';
                        keyspace = (this.vaultForm.value.numbers == 1) ? this.CHARACTER_SETS[0][1] : '';
                        keyspace += (this.vaultForm.value.lowercase == 1) ? this.CHARACTER_SETS[1][1] : '';
                        keyspace += (this.vaultForm.value.uppercase == 1) ? this.CHARACTER_SETS[2][1] : '';
                        keyspace += (this.vaultForm.value.specialchars == 1) ? this.CHARACTER_SETS[3][1] : '';
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
                        this.vaultForm.patchValue({ password: pieces.join("") });
                        return [2 /*return*/];
                }
            });
        });
    };
    CredDetailInModalComponent.ɵfac = function CredDetailInModalComponent_Factory(t) { return new (t || CredDetailInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService)); };
    CredDetailInModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CredDetailInModalComponent, selectors: [["app-cred-detail-in-modal"]], inputs: { credential: "credential" }, decls: 4, vars: 2, consts: [["id", "myForm"], [1, "d-none"], [4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [3, "formGroup"], [1, "card-body"], [1, "form-group", "mb-3", "text-left"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Descriptive title for this credential", "value", "vaultForm.title", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], [1, "form-group", "mb-3"], ["for", "url"], ["type", "text", "id", "url", "formControlName", "url", "placeholder", "e.g., example.com", "value", "vaultForm.url", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "e.g., username@example.com", "value", "vaultForm.username", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["btnClass", "btn-block btn-primary btn-mb btn-success btn-rounded", 3, "loadingText", "loading", "click", 4, "ngIf"], ["class", "form-group mb-3 text-left", 4, "ngIf"], ["btnClass", "btn-block btn-primary btn-mb btn-success btn-rounded", 3, "loadingText", "loading", "click"], [1, "mr-2"], [1, "i-Lock-2"], ["for", "password"], ["type", "text", "formControlName", "password", "placeholder", "Enter password here", "value", "vaultForm.password", "id", "password", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Descriptive title for this credential", "value", "vaultForm.title", 1, "col-xs-12", "form-control", 2, "font-weight", "bold", 3, "input"], ["type", "text", "id", "url", "formControlName", "url", "placeholder", "e.g., example.com", "value", "vaultForm.url", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "e.g., username@example.com", "value", "vaultForm.username", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], [1, "mt-3"], ["class", "text-muted", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["type", "text", "formControlName", "password", "placeholder", "Enter password here", "value", "vaultForm.password", "id", "password", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], [1, "text-muted", 3, "click"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-1", "mt-2"], [1, ""], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "range", "min", "8", "max", "42", "value", "14", "formControlName", "length", 1, "mr-2"], ["id", "passwordConfigurator"], [1, "pt-3"], [1, "d-flex", "justify-content-between", "pt-2"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "checked", "", "name", "uppercase", "formControlName", "uppercase", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "lowercase", "formControlName", "lowercase", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "numbers", "formControlName", "numbers", 1, "ml-4"], ["type", "checkbox", "checked", "", "name", "specialchars", "formControlName", "specialchars", 1, "ml-4"], [1, "btn", "btn-rounded", "btn-secondary", "btn-block", 3, "click"], ["class", "modal-footer justify-content-between", 4, "ngIf"], [1, "modal-footer", "justify-content-between"], [1, "btn", "btn-wide", "btn-primary", "btn-rounded", 3, "click"], [1, "btn", "btn-secondary", "btn-rounded", 3, "click"], ["class", "btn btn-secondary btn-rounded", 3, "click", 4, "ngIf"], ["ngbAutofocus", "", "btnClass", "btn btn-wide btn-primary btn-rounded", 3, "loadingText", "loading", "click"], ["class", "modal-header d-flex align-items-center pr-3", 4, "ngIf"], [1, "card", "o-hidden"], ["class", "mt-4 mb-3 text-center", 4, "ngIf"], [1, "row", "justify-content-center", "align-items-center", "p-2"], ["Class", "d-flex align-items-center"], [1, "spinner-glow", "spinner-glow-primary", "mr-4", "align-self-center"], [1, "align-self-center"], [1, "p-4"], [1, "text-center"], ["src", "/assets/images/connectToBaseStation.gif"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-2", "mr-2", "align-items-center", "justify-content-center"], [1, "d-none", "d-md-block", "col-md-2", "text-center"], [1, "i-Idea-2", "m-0", "text-22"], [1, "col-md-10", "pl-0", "pr-0"], ["class", "d-flex row alert alert-info ml-2 mr-2", "role", "alert", 4, "ngIf"], [1, "d-flex", "row", "ml-2", "mr-2", "align-items-center", "justify-content-between"], [1, "btn", "btn-link", 3, "click"], ["target", "_blank", "href", "https://www.jempass.com/support"], [1, "modal-header", "d-flex", "align-items-center", "pr-3"], [1, "row", "align-items-center"], ["Class", "btn btn-block btn-secondary btn-rounded d-flex align-items-center ml-auto mr-2"], [1, "mt-4", "mb-3", "text-center"], [2, "font-weight", "800"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-2", "mr-2"], [1, "d-none", "d-md-block", "col-md-2", "align-self-center", "justify-content-center"], [1, "i-Information", "m-0", "text-22", "text-center"]], template: function CredDetailInModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CredDetailInModalComponent_div_2_Template, 11, 5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CredDetailInModalComponent_div_3_Template, 28, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.decrypting && !ctx.saving);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.decrypting || ctx.saving);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__.BtnLoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkLWRldGFpbC1pbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CredDetailInModalComponent;
}());



/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());



/***/ }),

/***/ 47099:
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutSidebarCompactComponent": function() { return /* binding */ AdminLayoutSidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/navigation.service */ 21218);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-sidebar-compact/header-sidebar-compact.component */ 50468);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ 66526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function AdminLayoutSidebarCompactComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var _c0 = function () { return { suppressScrollX: true }; };
var AdminLayoutSidebarCompactComponent = /** @class */ (function () {
    function AdminLayoutSidebarCompactComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteConfigLoadStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ResolveStart) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteConfigLoadEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ResolveEnd) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutSidebarCompactComponent.ɵfac = function AdminLayoutSidebarCompactComponent_Factory(t) { return new (t || AdminLayoutSidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
    AdminLayoutSidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminLayoutSidebarCompactComponent, selectors: [["app-admin-layout-sidebar-compact"]], decls: 8, vars: 3, consts: [[1, "app-admin-wrap", "layout-sidebar-compact", "sidebar-blue", "clearfix"], [1, "main-content-wrap", "d-flex", "flex-column", 3, "perfectScrollbar"], [1, "main-content"], [1, "flex-grow-1"], ["class", "module-loader", 4, "ngIf"], [1, "module-loader"], [1, "spinner", "spinner-bubble", "spinner-bubble-primary", "mr-3"]], template: function AdminLayoutSidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header-sidebar-compact");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AdminLayoutSidebarCompactComponent_div_7_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.moduleLoading);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_2__.HeaderSidebarCompactComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQtc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AdminLayoutSidebarCompactComponent;
}());



/***/ }),

/***/ 50468:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.ts ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSidebarCompactComponent": function() { return /* binding */ HeaderSidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ 21218);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 10629);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);








var HeaderSidebarCompactComponent = /** @class */ (function () {
    function HeaderSidebarCompactComponent(navService, searchService, auth, toastr, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.notifications = [];
    }
    HeaderSidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.sessionTime.on("sessionTime", function (time) {
            switch (time) {
                case 60:
                    _this.toastr.success('Session ends in 60 seconds', 'Session Update', { timeOut: 3000 });
                    break;
                case 30:
                    _this.toastr.warning('Session ends in 30 seconds', 'Session Update', { timeOut: 3000 });
                    break;
                case 10:
                    _this.toastr.error('Session ends in 10 seconds', 'Session Update', { timeOut: 3000 });
                    break;
            }
        });
    };
    HeaderSidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    HeaderSidebarCompactComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarCompactComponent.prototype.stackedDivsOnPage = function () {
        return document.querySelector('app-stacked-divs') !== null;
    };
    HeaderSidebarCompactComponent.ɵfac = function HeaderSidebarCompactComponent_Factory(t) { return new (t || HeaderSidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
    HeaderSidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderSidebarCompactComponent, selectors: [["app-header-sidebar-compact"]], decls: 62, vars: 3, consts: [[1, "main-header"], [1, "d-flex", "align-items-center"], ["ngbDropdown", "", 1, "mega-menu", "d-none", "d-md-block", "ml-4"], ["ngbDropdownToggle", "", "href", "#", 1, "btn", "text-muted", "dropdown-toggle", "mr-3"], [2, "font-weight", "800"], ["ngbDropdownMenu", "", "perfectScrollbar", "", "shadow-lg", ""], [1, "row", "m-0"], [1, "col-md-4", "p-4", "bg-img"], [1, "title"], [1, "btn", "btn-lg", "btn-rounded", "btn-outline-danger", 3, "click"], [1, "col-md-4", "p-4", "border-light", "border-right"], [1, "text-primary", "text--cap", "border-bottom-primary", "d-inline-block"], [1, "menu-icon-grid", "w-auto", "p-0"], ["target", "_blank", "href", "https://www.jempass.com/support"], [1, "i-Ambulance"], ["target", "_blank", "href", "https://www.jempass.com/privacy"], [1, "i-File-Clipboard-File--Text"], [2, "text-align", "center"], [1, "col-md-4", "p-4"], [1, "align-self-end"], [1, "search-bar"], ["type", "text", "placeholder", "Search", 3, "focus"], [1, "search-icon", "text-muted", "i-Magnifi-Glass1"], [2, "margin", "auto"], [1, "header-part-right"], ["ngbDropdown", "", 3, "placement"], ["ngbDropdown", "", 1, "user", "col", "align-self-end", 3, "placement"], ["src", "./assets/images/myAccount.png", "id", "userDropdown", "ngbDropdownToggle", "", "alt", ""], ["ngbDropdownMenu", "", "aria-labelledby", "userDropdown"], [1, "dropdown-item", 3, "click"]], template: function HeaderSidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Quick");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Welcome to");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "JEMPass ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Simple \u2022 Seamless \u2022 Secure");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " JEMPass stores your login credentials for all your online accounts in a secure Vault.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Use tools in this panel to view or edit your credentials and add or delete items. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderSidebarCompactComponent_Template_button_click_20_listener() { return ctx.signout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Lock Vault \u2022 Sign Out");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Info & Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Support ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Terms of Service ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Apps & Extensions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Get JEMPass on all your devices and browsers so you have instant access to all your credenials everywhere. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " It's easy \u2013 just point new device/browser to jempass.com/start. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " JEMPass apps and extensions are currently available for iPhone, iPad, Android devices, Windows, Macs, Chrome, Edge, Firefox, Safari ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function HeaderSidebarCompactComponent_Template_input_focus_50_listener() { return ctx.searchService.searchOpen = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderSidebarCompactComponent_Template_button_click_60_listener() { return ctx.signout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Sign out");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placement", "bottom-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Auto Lock in: ", ctx.auth.sessionTimeRemaining, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placement", "bottom-right");
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return HeaderSidebarCompactComponent;
}());



/***/ }),

/***/ 40498:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarCompactComponent": function() { return /* binding */ SidebarCompactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ 21218);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../directives/dropdown.directive */ 8971);
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../directives/dropdown-link.directive */ 2885);
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../directives/dropdown-anchor.directive */ 18163);











function SidebarCompactComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_li_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.closeChildNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r3.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.name);
} }
function SidebarCompactComponent_li_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function SidebarCompactComponent_li_4_div_2_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.selectItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.name);
} }
function SidebarCompactComponent_li_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", item_r3.state, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.name);
} }
var _c0 = function (a0) { return { active: a0 }; };
function SidebarCompactComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_li_4_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); var item_r3 = restoredCtx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.onClickChangeActiveFlag(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_li_4_div_1_Template, 4, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_li_4_div_2_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarCompactComponent_li_4_div_3_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, item_r3.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r3.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r3.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r3.type === "extLink");
} }
function SidebarCompactComponent_ng_template_5_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r19.icon);
} }
var _c1 = function (a0) { return { open: a0 }; };
function SidebarCompactComponent_ng_template_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_5_li_1_a_1_i_1_Template, 1, 2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", item_r19.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c1, item_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r19 == null ? null : item_r19.name);
} }
function SidebarCompactComponent_ng_template_5_li_1_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("nav-icon " + item_r19.icon);
} }
function SidebarCompactComponent_ng_template_5_li_1_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
var _c2 = function (a0) { return { parentItem: a0 }; };
function SidebarCompactComponent_ng_template_5_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_ng_template_5_li_1_div_2_i_2_Template, 1, 2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidebarCompactComponent_ng_template_5_li_1_div_2_ng_container_6_Template, 1, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, item_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r19 == null ? null : item_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, item_r19));
} }
function SidebarCompactComponent_ng_template_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_5_li_1_a_1_Template, 4, 6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarCompactComponent_ng_template_5_li_1_div_2_Template, 7, 9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r19.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r19.type === "dropDown");
} }
function SidebarCompactComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarCompactComponent_ng_template_5_li_1_Template, 3, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var parentItem_r17 = ctx.parentItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", parentItem_r17 == null ? null : parentItem_r17.sub);
} }
var SidebarCompactComponent = /** @class */ (function () {
    function SidebarCompactComponent(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    SidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarCompactComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarCompactComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarCompactComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.selectedItem = item;
                            item.active = true;
                            // subItem.active = true;
                            // debugger;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarCompactComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    SidebarCompactComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    SidebarCompactComponent.ɵfac = function SidebarCompactComponent_Factory(t) { return new (t || SidebarCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
    SidebarCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarCompactComponent, selectors: [["app-sidebar-compact"]], hostBindings: function SidebarCompactComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function SidebarCompactComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        } }, decls: 8, vars: 7, consts: [["perfectScrollbar", "", 1, "sidebar-left", "rtl-ps-none", 3, "ngClass"], [1, "logo"], ["src", "./assets/images/logo-white.png", "alt", ""], [1, "navigation-left"], ["class", "nav-item lvl1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["menuTemplate", ""], [1, "sidebar-overlay", 3, "ngClass", "click"], [1, "nav-item", "lvl1", 3, "ngClass", "click"], ["class", "nav-item-hold", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-item-hold", 3, "mouseenter", 4, "ngIf"], ["class", "nav-item-hold", 4, "ngIf"], [1, "triangle"], [1, "nav-item-hold", 3, "routerLink", "click"], [1, "nav-text"], [1, "nav-item-hold", 3, "mouseenter"], [1, "nav-item-hold"], ["target", "_blank", 3, "href"], ["appDropdown", "", 1, "childNav"], ["appDropdownLink", "", "class", "nav-item", 4, "ngFor", "ngForOf"], ["appDropdownLink", "", 1, "nav-item"], ["class", "", "routerLinkActive", "open", 3, "routerLink", "ngClass", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "open", 1, "", 3, "routerLink", "ngClass"], [3, "class", 4, "ngIf"], [1, "item-name", "lvl1"], ["appDropdownToggle", "", "routerLinkActive", "open", 3, "ngClass"], [1, "item-name"], [1, "dd-arrow", "i-Arrow-Down"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SidebarCompactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidebarCompactComponent_li_4_Template, 5, 6, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarCompactComponent_ng_template_5_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarCompactComponent_Template_div_click_7_listener() { return ctx.closeChildNav(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c1, ctx.navService.sidebarState.sidenavOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.nav);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, ctx.navService.sidebarState.childnavOpen));
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective, _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownAnchorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLWNvbXBhY3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SidebarCompactComponent;
}());



/***/ }),

/***/ 54453:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
    AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 3, vars: 0, consts: [[1, "auth-layout-wrap", 2, "background-image", "url(./assets/images/jem_mac_comp.jpg)", "background-repeat", "no-repeat", "background-size", "cover", "background-attachment", "fixed", "background-position", "100% 85%", "height", "100%"], [1, "auth-content"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AuthLayoutComponent;
}());



/***/ }),

/***/ 13447:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankLayoutComponent": function() { return /* binding */ BlankLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent.ɵfac = function BlankLayoutComponent_Factory(t) { return new (t || BlankLayoutComponent)(); };
    BlankLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankLayoutComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BlankLayoutComponent;
}());



/***/ }),

/***/ 58738:
/*!*************************************************************!*\
  !*** ./src/app/shared/components/layouts/layouts.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": function() { return /* binding */ LayoutsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/admin-layout-sidebar-compact.component */ 47099);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 54453);
/* harmony import */ var _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-layout/blank-layout.component */ 13447);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/shared-pipes.module */ 81233);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component */ 40498);
/* harmony import */ var _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component */ 50468);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ 66526);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/shared-directives.module */ 72747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);














var components = [
    _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_5__.HeaderSidebarCompactComponent,
    _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__.SidebarCompactComponent,
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
    _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarCompactComponent,
    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
    _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__.BlankLayoutComponent,
];
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
    LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LayoutsModule });
    LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__.SharedDirectivesModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule
            ]] });
    return LayoutsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_5__.HeaderSidebarCompactComponent,
        _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__.SidebarCompactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarCompactComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__.BlankLayoutComponent], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__.SharedDirectivesModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule], exports: [_admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_5__.HeaderSidebarCompactComponent,
        _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__.SidebarCompactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutSidebarCompactComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__.BlankLayoutComponent] }); })();


/***/ }),

/***/ 89727:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/shared-animations */ 7433);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ 43763);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 72533);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};












var _c0 = function (a0) { return { delay: a0, y: "50px" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Login Credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, i_r3 * 100 + "ms")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r2.url, " \u2022 ", item_r2.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("badge badge-outline-", item_r2 == null ? null : item_r2.badge == null ? null : item_r2.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.badge == null ? null : item_r2.badge.text);
} }
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "pagination-controls", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function SearchComponent_div_13_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
var _c2 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c3 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, auth, jemService) {
        this.searchService = searchService;
        this.auth = auth;
        this.jemService = jemService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadVault()];
                    case 1:
                        _a.sent();
                        this.results$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)(this.localVault, this.searchCtrl.valueChanges
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(200)))
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(function (_a) {
                            var _b = __read(_a, 2), credentials = _b[0], searchTerm = _b[1];
                            /* TODO: fix this hack (figure out why this.results$ is empty
                            at initialization of search component) */
                            if (searchTerm === '') {
                                return credentials;
                            }
                            return credentials.filter(function (credential) {
                                return credential.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                            });
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.loadVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, outputVault;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_1__.SodiumPlus.auto()];
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
                                        var data, metaKEKBuf, metaDataBuf, metaKey, metaData;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    data = JSON.parse(item.data._);
                                                    metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                                                    metaDataBuf = Buffer.from(data.metaData, 'base64');
                                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_1__.CryptographyKey.from(this.auth.userSettings.metaKey))];
                                                case 1:
                                                    metaKey = _a.sent();
                                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_1__.CryptographyKey.from(metaKey))];
                                                case 2:
                                                    metaData = _a.sent();
                                                    metaData = JSON.parse(metaData);
                                                    outputVault.push({
                                                        "id": item.RowKey._,
                                                        "title": metaData.title,
                                                        "url": metaData.url,
                                                        "username": metaData.username,
                                                        "status": "encrypted",
                                                        "passKEK": data.passKEK,
                                                        "passData": data.passData
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 4:
                        _b.sent();
                        // this.localVault = outputVault;
                        // there is no need for the local vault not as an observable
                        this.localVault = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(function (subscriber) {
                            subscriber.next(outputVault);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_4__.JemService)); };
    SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 15, vars: 17, consts: [[1, "search-ui", "rtl-ps-none"], [1, "search-header"], ["src", "./assets/images/logo.png", "alt", "", 1, "logo"], [1, "btn", "btn-icon", "bg-transparent", "float-right", "mt-2", 3, "click"], [1, "i-Close-Window", "text-22", "text-muted"], ["type", "text", "placeholder", "search", "autofocus", "", 1, "search-input", 3, "formControl"], [1, "search-title"], [1, "text-muted"], [1, "search-results", "list-horizontal"], ["class", "list-item col-md-12 p-0", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "list-item", "col-md-12", "p-0"], [1, "card", "o-hidden", "flex-row", "mb-4", "d-flex"], [1, "list-thumb", "d-flex"], ["alt", "", 3, "src"], [1, "flex-grow-1", "pl-2", "d-flex"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "justify-content-between", "align-items-lg-center", "flex-lg-row"], ["href", "", 1, "w-40", "w-sm-100"], [1, "item-title"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "m-0", "text-muted", "text-small", "w-15", "w-sm-100", "d-none", "d-lg-block", "item-badges"], [1, "col-md-12", "mt-3"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() { return ctx.searchService.searchOpen = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Search results");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 16, 13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c2)));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.searchCtrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 7, ctx.results$), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c3, ctx.pageSize, ctx.page)));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 9, ctx.results$));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__.SharedAnimations] } });
    return SearchComponent;
}());



/***/ }),

/***/ 83834:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/search/search.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": function() { return /* binding */ SearchModule; }
/* harmony export */ });
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 89727);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
    SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchModule });
    SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule
            ]] });
    return SearchModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent] }); })();


/***/ }),

/***/ 50933:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": function() { return /* binding */ SharedComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn-loading/btn-loading.component */ 38845);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ 81233);
/* harmony import */ var _stacked_divs_stacked_divs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacked-divs/stacked-divs.component */ 18157);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/shared-directives.module */ 72747);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/layouts.module */ 58738);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cred-detail-in-modal/cred-detail-in-modal.component */ 49982);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _welcome_new_user_modal_welcome_new_user_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome-new-user-modal/welcome-new-user-modal.component */ 27217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);















var components = [
    _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
    _stacked_divs_stacked_divs_component__WEBPACK_IMPORTED_MODULE_2__.StackedDivsComponent,
    _cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_5__.CredDetailInModalComponent,
    _welcome_new_user_modal_welcome_new_user_modal_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeNewUserModalComponent
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
    SharedComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
    SharedComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__.LayoutsModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__.SharedPipesModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.NgxDatatableModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule
            ]] });
    return SharedComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
        _stacked_divs_stacked_divs_component__WEBPACK_IMPORTED_MODULE_2__.StackedDivsComponent,
        _cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_5__.CredDetailInModalComponent,
        _welcome_new_user_modal_welcome_new_user_modal_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeNewUserModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__.LayoutsModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__.SharedPipesModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_3__.SharedDirectivesModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.NgxDatatableModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule], exports: [_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_0__.BtnLoadingComponent,
        _stacked_divs_stacked_divs_component__WEBPACK_IMPORTED_MODULE_2__.StackedDivsComponent,
        _cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_5__.CredDetailInModalComponent,
        _welcome_new_user_modal_welcome_new_user_modal_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeNewUserModalComponent] }); })();


/***/ }),

/***/ 18157:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/stacked-divs/stacked-divs.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackedDivsComponent": function() { return /* binding */ StackedDivsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/shared-animations */ 7433);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cred-detail-in-modal/cred-detail-in-modal.component */ 49982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 10629);
/* harmony import */ var _services_jem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/jem.service */ 91895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/search.service */ 43763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../btn-loading/btn-loading.component */ 38845);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 72533);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

















function StackedDivsComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Search Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
var _c0 = function () { return { suppressScrollX: true }; };
var _c1 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c2 = function (a1) { return { value: "*", params: a1 }; };
function StackedDivsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.searchService.searchOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Pass Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StackedDivsComponent_div_0_div_10_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r0.searchCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.results$)("ngIfElse", _r2);
} }
function StackedDivsComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Welcome to your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Pass Vault - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "A secure place for all your login credentials (\"creds\").");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Add New Cred ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " to add a new login credential to your Vault. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Once you add a cred to your Vault, you can use JEM to sign in simply and seamlessly. You'll never have to remember or type in that password again! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StackedDivsComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Search Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StackedDivsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Pass Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, StackedDivsComponent_div_1_div_9_Template, 24, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StackedDivsComponent_div_1_div_10_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r1.searchCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.vaultLoaded && ctx_r1.showVaultIsEmptyDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.results$)("ngIfElse", _r2);
} }
function StackedDivsComponent_ng_template_2_div_1_div_19_btn_loading_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "btn-loading", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_2_div_1_div_19_btn_loading_1_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.handleBtnLoadingClick(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loadingText", ctx_r16.loadingText[item_r13.id])("loading", ctx_r16.loading[item_r13.id]);
} }
function StackedDivsComponent_ng_template_2_div_1_div_19_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_2_div_1_div_19_div_2_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r24.copyToClipboard("password", item_r13.decryptedPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.decryptedPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r22.copyToClipboardButtonText.password);
} }
function StackedDivsComponent_ng_template_2_div_1_div_19_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Password field is empty! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function StackedDivsComponent_ng_template_2_div_1_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StackedDivsComponent_ng_template_2_div_1_div_19_div_2_div_1_Template, 6, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StackedDivsComponent_ng_template_2_div_1_div_19_div_2_button_2_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r13.decryptedPassword !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r13.decryptedPassword == null);
} }
function StackedDivsComponent_ng_template_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StackedDivsComponent_ng_template_2_div_1_div_19_btn_loading_1_Template, 2, 2, "btn-loading", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StackedDivsComponent_ng_template_2_div_1_div_19_div_2_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r13.status === "encrypted" || !ctx_r15.showDecryptedPassword[item_r13.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r13.status !== "encrypted" && ctx_r15.showDecryptedPassword[item_r13.id]);
} }
var _c3 = function (a0) { return { delay: a0, y: "50px" }; };
function StackedDivsComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_2_div_1_Template_div_click_2_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); var item_r13 = restoredCtx.$implicit; var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r30.openDetailModal(item_r13.id, "view"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_2_div_1_Template_button_click_14_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); var item_r13 = restoredCtx.$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r32.openDetailModal(item_r13.id, "view"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "View or Update Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_2_div_1_Template_button_click_16_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); var item_r13 = restoredCtx.$implicit; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5); return ctx_r33.deleteItem(item_r13.id, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, StackedDivsComponent_ng_template_2_div_1_div_19_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c3, i_r14 * 100 + "ms")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("badge badge-", item_r13 == null ? null : item_r13.badge == null ? null : item_r13.badge.color, " badge-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r13.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r13.id);
} }
function StackedDivsComponent_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pagination-controls", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function StackedDivsComponent_ng_template_2_div_4_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r34.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
var _c4 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
function StackedDivsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StackedDivsComponent_ng_template_2_div_1_Template, 20, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StackedDivsComponent_ng_template_2_div_4_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx_r3.results$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](9, _c4, ctx_r3.pageSize, ctx_r3.page)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 7, ctx_r3.results$));
} }
function StackedDivsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_4_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); var modal_r36 = restoredCtx.$implicit; return modal_r36.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "You are about to delete this item. Are you absolutely sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "This operation can not be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_4_Template_button_click_13_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); var modal_r36 = restoredCtx.$implicit; return modal_r36.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Keep");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StackedDivsComponent_ng_template_4_Template_button_click_15_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); var modal_r36 = restoredCtx.$implicit; return modal_r36.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
var StackedDivsComponent = /** @class */ (function () {
    function StackedDivsComponent(auth, jemService, toastr, modalService, searchService) {
        this.auth = auth;
        this.jemService = jemService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.searchService = searchService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('');
        this.filterFavorites = false;
        this.viewMode = 'list';
        this.showDecryptedPassword = [];
        this.copyToClipboardButtonText = {
            username: "Copy",
            password: "Copy"
        };
        this.vaultLoaded = false;
        this.showVaultIsEmptyDiv = false;
        this.showSearchInputField = true;
    }
    StackedDivsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.searching = false;
                this.loading = [];
                this.loadingText = [];
                this.filterSearchResults();
                this.auth.vault.subscribe(function (data) {
                    _this.searchCtrl.setValue(_this.searchCtrl.value);
                    _this.vaultLoaded = false;
                    _this.showSearchInputField = true;
                    _this.showVaultIsEmptyDiv = (data.length > 2) ? false : true;
                    setTimeout(function () {
                        _this.vaultLoaded = true;
                        _this.showSearchInputField = !_this.showVaultIsEmptyDiv;
                    }, 1000);
                });
                return [2 /*return*/];
            });
        });
    };
    StackedDivsComponent.prototype.filterSearchResults = function () {
        var _this = this;
        this.results$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            this.auth.vault,
            this.searchCtrl.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(200)),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function (_a) {
            var _b = __read(_a, 2), credentials = _b[0], searchTerm = _b[1];
            var matchingCredentials;
            _this.page = 1;
            /* TODO: fix this hack (figure out why this.results$ is empty
            at initialization of search component) */
            if (searchTerm === '') {
                matchingCredentials = credentials;
                _this.searching = false;
            }
            else {
                matchingCredentials = credentials.filter(function (credential) {
                    _this.searching = true;
                    var titleMatch = false;
                    var urlMatch = false;
                    var tagMatch = false;
                    var favoriteMatch = false;
                    if (credential.title) {
                        titleMatch = credential.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    }
                    if (credential.url) {
                        urlMatch = credential.url.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    }
                    if (credential.tags) {
                        for (var i = 0; i < credential.tags.length; i++) {
                            if (credential.tags[i].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                                if (credential.tags[i] === '_favorite') {
                                    favoriteMatch = true;
                                }
                                tagMatch = true;
                                break;
                            }
                        }
                    }
                    if (_this.filterFavorites) {
                        return favoriteMatch && (titleMatch || urlMatch || tagMatch);
                    }
                    return titleMatch || urlMatch || tagMatch;
                });
            }
            return matchingCredentials;
        }));
    };
    StackedDivsComponent.prototype.decrypt = function (credential, passKEK, passData) {
        var passData, passData;
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, passKEKBuf, passKeyB64, error_1, passDataBuf;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingText[credential.id] = "Press your JEM...";
                        this.loading[credential.id] = true;
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_1__.SodiumPlus.auto()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _b.label = 3;
                    case 3:
                        sodium = _a;
                        passKEKBuf = Buffer.from(passKEK, 'base64');
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.jemService.decrypt(passKEKBuf, this.auth.deviceSettings)
                                .then(function (passKey) { return __awaiter(_this, void 0, void 0, function () {
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
                        this.loading[credential.id] = false;
                        this.toastr.error(error_1.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        return [2 /*return*/];
                    case 7:
                        passDataBuf = Buffer.from(passData, 'base64');
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(passDataBuf.slice(24), passDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_1__.CryptographyKey.from(passKeyB64, 'base64'))];
                    case 8:
                        passData = _b.sent();
                        passData = JSON.parse(passData.toString());
                        credential.status = 'decrypted';
                        credential.decryptedPassword = passData.password;
                        this.loading[credential.id] = false;
                        credential.eraseDecryptedData(10000);
                        setTimeout(function (_) { return _this.showDecryptedPassword[credential.id] = false; }, 10000);
                        return [2 /*return*/];
                }
            });
        });
    };
    StackedDivsComponent.prototype.deleteItem = function (id, modal) {
        var _this = this;
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.auth.deleteCredential(id)
                .subscribe(function (res) {
                _this.toastr.success('Item Deleted!', 'Success!', { timeOut: 3000 });
                _this.filterSearchResults();
            });
        }, function (reason) {
        });
    };
    StackedDivsComponent.prototype.openDetailModal = function (id, mode) {
        var element = document.querySelector('app-stacked-divs');
        element.scrollIntoView();
        var modalRef = this.modalService.open(_cred_detail_in_modal_cred_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_2__.CredDetailInModalComponent);
        var matchingCredential = this.auth.vault.value.filter(function (credential) { return credential.id === id; });
        if (matchingCredential.length > 1) {
            console.error("multiple credentials with id " + id);
        }
        else {
            modalRef.componentInstance.credential = matchingCredential[0];
            modalRef.componentInstance.viewMode = mode;
        }
    };
    StackedDivsComponent.prototype.isMobile = function () {
        return window.innerWidth < 600;
    };
    StackedDivsComponent.prototype.handleBtnLoadingClick = function (credential) {
        this.showDecryptedPassword[credential.id] = true;
        this.decrypt(credential, credential.passKEK, credential.passData);
    };
    StackedDivsComponent.prototype.handleDecryptedPasswordClick = function (credential) {
        this.showDecryptedPassword[credential.id] = false;
        credential.eraseDecryptedData(0);
    };
    StackedDivsComponent.prototype.copy = function (item) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = item;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        // this.toastr.success('The password is in your clipboard!', 'Success!', { timeOut: 5000 });
    };
    StackedDivsComponent.prototype.copyToClipboard = function (itemToCopy, textToCopy) {
        var _this = this;
        this.copy(textToCopy);
        if (itemToCopy == 'username') {
            this.copyToClipboardButtonText.username = "Copied";
            setTimeout(function () {
                _this.copyToClipboardButtonText.username = "Copy";
            }, 2000);
        }
        else {
            this.copyToClipboardButtonText.password = "Copied";
            setTimeout(function () {
                _this.copyToClipboardButtonText.password = "Copy";
            }, 2000);
        }
    };
    StackedDivsComponent.ɵfac = function StackedDivsComponent_Factory(t) { return new (t || StackedDivsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_jem_service__WEBPACK_IMPORTED_MODULE_4__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService)); };
    StackedDivsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: StackedDivsComponent, selectors: [["app-stacked-divs"]], inputs: { viewPortOverlay: "viewPortOverlay" }, decls: 6, vars: 2, consts: [["class", "search-ui rtl-ps-none", 3, "perfectScrollbar", 4, "ngIf"], [4, "ngIf"], ["searchResults", ""], ["deleteConfirmModal", ""], [1, "search-ui", "rtl-ps-none", 3, "perfectScrollbar"], [1, "search-header"], [1, "btn", "btn-icon", "bg-transparent", "float-right", "mt-2", 3, "click"], [1, "i-Close-Window", "text-22", "text-muted"], ["id", "vault-header", 2, "font-weight", "800"], [2, "font-weight", "1"], [1, "separator-breadcrumb", "border-top", 2, "margin-bottom", "0rem"], ["type", "text", "placeholder", "Search", "autofocus", "", 1, "search-input", 3, "formControl"], [4, "ngIf", "ngIfElse"], [1, "breadcrumb"], ["class", "row mb-4", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-12"], [1, "o-hidden", "mb-4"], [1, "card-body", "alert", "alert-info"], [1, "row"], [1, "d-none", "d-md-block", "col-md-2", "text-center", "align-self-center"], [1, "i-Information", "text-48"], [1, "col-md-9", "align-self-center"], [1, "text-large", "fw-bold"], [2, "font-weight", "800"], [1, "i-Add", "ml-1"], [1, "col-md-1", "align-self-center"], ["class", "col-12", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-3", 4, "ngIf"], [1, "card", "o-hidden", "mb-4"], [1, "card-header", 3, "click"], [1, "row", "card-body", "justify-content-between", "d-flex", "align-items-center"], [1, "col-md-6"], [1, "row", "pl-3", "pr-3"], [1, "text-muted", "pr-3"], [1, "item-badges"], [1, "col-md-6", "d-none", "d-lg-flex"], [1, "btn", "btn-sm", "btn-rounded", "btn-info", "ml-2", "mr-3", 3, "click"], [1, "btn", "btn-sm", "btn-rounded", "btn-warning", "ml-2", "mr-3", 3, "click"], [1, "ml-auto"], ["btnClass", "btn-primary btn-sm btn-wide btn-success btn-rounded", 3, "loadingText", "loading", "click", 4, "ngIf"], ["btnClass", "btn-primary btn-sm btn-wide btn-success btn-rounded", 3, "loadingText", "loading", "click"], ["class", "input-group", 4, "ngIf"], ["class", "btn btn-sm btn-wide btn-warning btn-rounded", 4, "ngIf"], [1, "input-group"], ["readonly", "", "disabled", "", 1, "btn-primary", "btn-sm", "btn-wide", "btn-rounded", 2, "border-top-left-radius", "25px", "border-bottom-left-radius", "25px", "border-style", "solid"], [1, "input-group-append"], ["id", "basic-addon2", "active", "", 1, "btn-light", "btn-sm", "btn-rounded", 2, "border-top-right-radius", "25px", "border-bottom-right-radius", "25px", "border-style", "solid", 3, "click"], [1, "btn", "btn-sm", "btn-wide", "btn-warning", "btn-rounded"], [1, "col-md-12", "mt-3"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function StackedDivsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, StackedDivsComponent_div_0_Template, 11, 9, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StackedDivsComponent_div_1_Template, 11, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StackedDivsComponent_ng_template_2_Template, 6, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StackedDivsComponent_ng_template_4_Template, 17, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewPortOverlay);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.viewPortOverlay);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_6__.BtnLoadingComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe], styles: [".ion-content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrZWQtZGl2cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3RhY2tlZC1kaXZzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"], data: { animation: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__.SharedAnimations] } });
    return StackedDivsComponent;
}());



/***/ }),

/***/ 27217:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/welcome-new-user-modal/welcome-new-user-modal.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeNewUserModalComponent": function() { return /* binding */ WelcomeNewUserModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);



var WelcomeNewUserModalComponent = /** @class */ (function () {
    function WelcomeNewUserModalComponent(activeModal, auth) {
        this.activeModal = activeModal;
        this.auth = auth;
    }
    WelcomeNewUserModalComponent.prototype.ngOnInit = function () {
    };
    WelcomeNewUserModalComponent.prototype.ngOnDestroy = function () {
        this.auth.firstSignIn = false;
    };
    WelcomeNewUserModalComponent.ɵfac = function WelcomeNewUserModalComponent_Factory(t) { return new (t || WelcomeNewUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
    WelcomeNewUserModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WelcomeNewUserModalComponent, selectors: [["app-welcome-new-user-modal"]], decls: 64, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "card", "p-3"], [1, "card-body"], [1, "modal-title", "mb-4"], [1, "row", "d-flex", "alert", "alert-success"], [1, "col-1", "text-center"], [1, "col-9", "border-right"], [1, "mt-1", "pt-1", "text-small"], [1, "col-2", "align-self-center", "text-center"], [1, "i-Yes"], [1, "text-small", "text-nowrap"], [1, "row", "d-flex", "alert", "alert-light"], [1, "col-2", "align-self-center"], [1, "text-small", "text-center"], [1, "col-12", "d-flex", "pt-4"], [1, "col-11"], [1, "row", "border-top", "justify-content-between"], ["target", "_blank", "href", "https://chrome.google.com/webstore/detail/jempass-extension/onbkmifaddemphfcgahimdgkfplomdlp", 1, "btn", "btn-primary", "btn-rounded", "mt-3", "mb-3"], ["target", "_blank", "href", "https://apps.apple.com/us/app/jempass-desktop/id1546432447", 1, "btn", "btn-primary", "btn-rounded", "mt-3", "mb-3"], ["href", "", "disabled", "", 1, "btn", "btn-primary", "btn-rounded", "mt-3", "mb-3", "mr-3"]], template: function WelcomeNewUserModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Congratulations and Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WelcomeNewUserModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "SETUP IS ALMOST COMPLETE");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Email verified, JEMPass Vault created ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " JEMPass Vault is the secure place for all your passwords. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Complete");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " JEM configured and ready to use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Your JEM is the key to your JEMPass Vault. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Complete");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Last Step - Add JEMPass to your browser ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " JEMPass Extension makes it to sign in to websites with a touch your JEM ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Get JEMPass Extension for your browser. Click the appropriate button below. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Final Step");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Chrome, Edge or Brave ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Safari ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Firefox (coming soon) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLW5ldy11c2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return WelcomeNewUserModalComponent;
}());



/***/ }),

/***/ 75716:
/*!*********************************************************************!*\
  !*** ./src/app/shared/detail-in-modal/detail-in-modal.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailInModalComponent": function() { return /* binding */ DetailInModalComponent; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/jem.service */ 91895);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 10629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/btn-loading/btn-loading.component */ 38845);
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









function DetailInModalComponent_div_8_div_29_btn_loading_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "btn-loading", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_8_div_29_btn_loading_1_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r7.decrypt(ctx_r7.credential, ctx_r7.credential.passKEK, ctx_r7.credential.passData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "password encrypted - click to decrypt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r5.loadingText)("loading", ctx_r5.loading);
} }
function DetailInModalComponent_div_8_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r6.credential.status === "decrypted" ? ctx_r6.credential.password : "");
} }
function DetailInModalComponent_div_8_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailInModalComponent_div_8_div_29_btn_loading_1_Template, 2, 2, "btn-loading", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailInModalComponent_div_8_div_29_div_2_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.credential.status === "encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.credential.status !== "encrypted");
} }
function DetailInModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Favorite?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Autofill?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Username/Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DetailInModalComponent_div_8_div_29_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.vaultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.credential.id);
} }
function DetailInModalComponent_div_9_div_29_btn_loading_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "btn-loading", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_9_div_29_btn_loading_1_Template_btn_loading_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r12.decrypt(ctx_r12.credential, ctx_r12.credential.passKEK, ctx_r12.credential.passData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "password encrypted - click to decrypt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadingText", ctx_r10.loadingText)("loading", ctx_r10.loading);
} }
function DetailInModalComponent_div_9_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r11.credential.status === "decrypted" ? ctx_r11.credential.password : "");
} }
function DetailInModalComponent_div_9_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailInModalComponent_div_9_div_29_btn_loading_1_Template, 2, 2, "btn-loading", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailInModalComponent_div_9_div_29_div_2_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.credential.status === "encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.credential.status !== "encrypted");
} }
function DetailInModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Favorite?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Autofill?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Website/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Username/Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DetailInModalComponent_div_9_div_29_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.vaultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.credential.id);
} }
function DetailInModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.activeModal.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.viewMode = "edit"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Edit Credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailInModalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r17.buildVaultForm(ctx_r17.credential); return ctx_r17.viewMode = "print"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Discard Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "btn-loading", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_div_11_Template_btn_loading_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.saveItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx_r3.saving);
} }
/**
 * @author Amitav Nott
 * @since 6/28/2020
 * @version 1.0
 * The content displayed within the modal that shows the details of a given credential
 */
var DetailInModalComponent = /** @class */ (function () {
    function DetailInModalComponent(activeModal, jemService, auth, fb, toastr) {
        this.activeModal = activeModal;
        this.jemService = jemService;
        this.auth = auth;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = false;
        this.viewMode = 'print';
        this.vault = {};
    }
    DetailInModalComponent.prototype.ngOnInit = function () {
        this.id = this.credential.id;
        this.isNew = !this.id;
        this.buildVaultForm(this.credential);
    };
    DetailInModalComponent.prototype.decrypt = function (credential, passKEK, passData) {
        var passData, passData;
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, passKEKBuf, passKeyB64, error_1, passDataBuf;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingText = "Press your JEM...";
                        this.loading = true;
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
                        passKEKBuf = Buffer.from(passKEK, 'base64');
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.jemService.decrypt(passKEKBuf, this.auth.deviceSettings)
                                .then(function (passKey) { return __awaiter(_this, void 0, void 0, function () {
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
                        this.loading[credential.id] = false;
                        this.toastr.error(error_1.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        return [2 /*return*/];
                    case 7:
                        passDataBuf = Buffer.from(passData, 'base64');
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(passDataBuf.slice(24), passDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(passKeyB64, 'base64'))];
                    case 8:
                        passData = _b.sent();
                        passData = JSON.parse(passData.toString());
                        credential.status = 'decrypted';
                        credential.password = passData.password;
                        this.loading[credential.id] = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailInModalComponent.prototype.isMobile = function () {
        return window.innerWidth < 600;
    };
    DetailInModalComponent.prototype.buildVaultForm = function (i) {
        if (i === void 0) { i = {}; }
        this.vaultForm = this.fb.group({
            id: [i.id],
            title: [i.title],
            url: [i.url],
            username: [i.username],
            status: [i.status],
            password: [i.password],
        });
    };
    DetailInModalComponent.prototype.createItem = function (item) {
        if (item === void 0) { item = {}; }
        return this.fb.group({
            title: [item.title],
            url: [item.url],
            username: [item.username],
            password: [item.password]
        });
    };
    DetailInModalComponent.prototype.saveItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sodium, _a, metaKey, passKey, record, nonce, _b, nonce, _c, nonce, _d, error_2;
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
                        this.vault = this.vaultForm.value;
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
                                "title": this.vault.title,
                                "username": this.vault.username,
                                "url": this.vault.url
                            },
                            passData: {
                                "password": this.vault.password
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
                        return [4 /*yield*/, this.jemService.encrypt(passKey, this.auth.deviceSettings, true)
                                .then(function (data) {
                                record.passKEK = data;
                            })];
                    case 13:
                        _e.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        error_2 = _e.sent();
                        this.loading = false;
                        this.toastr.error(error_2.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        return [2 /*return*/];
                    case 15:
                        this.auth.addCredential(record)
                            .subscribe(function (item) {
                            _this.toastr.success('Item Saved!', 'Success!', { timeOut: 3000 });
                            _this.activeModal.close('OK');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailInModalComponent.ɵfac = function DetailInModalComponent_Factory(t) { return new (t || DetailInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_1__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
    DetailInModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailInModalComponent, selectors: [["app-detail-in-modal"]], inputs: { credential: "credential" }, decls: 12, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "row", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "row", "card-body", "justify-content-between"], [1, "card-body", 2, "padding-top", "0", "padding-bottom", "0"], [1, "switch", "switch-primary", "mr-3"], ["type", "checkbox", "unchecked", ""], [1, "slider"], ["type", "checkbox", "checked", ""], [3, "formGroup"], [1, "card-body", 2, "margin-top", "0", "padding-top", "0"], [1, "form-group", "mb-3", "text-left"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "value", "vaultForm.title", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], [1, "form-group", "mb-3"], ["for", "url"], ["type", "text", "id", "url", "formControlName", "url", "value", "vaultForm.url", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "username", "formControlName", "username", "value", "vaultForm.username", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], [4, "ngIf"], ["btnClass", "btn-block btn-primary btn-mb btn-success btn-rounded", 3, "loadingText", "loading", "click", 4, "ngIf"], ["class", "form-group mb-3 text-left", 4, "ngIf"], ["btnClass", "btn-block btn-primary btn-mb btn-success btn-rounded", 3, "loadingText", "loading", "click"], ["for", "password"], ["type", "text", "id", "password", "readonly", "", 1, "col-xs-12", "form-control", 2, "font-weight", "bold", 3, "value"], ["type", "text", "id", "title", "formControlName", "title", "value", "vaultForm.title", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "url", "formControlName", "url", "value", "vaultForm.url", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "username", "formControlName", "username", "value", "vaultForm.username", 1, "col-xs-12", "form-control", 2, "font-weight", "bold"], ["type", "text", "id", "password", 1, "col-xs-12", "form-control", 2, "font-weight", "bold", 3, "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-rounded", 3, "click"], [1, "btn", "btn-wide", "btn-primary", "btn-rounded", 3, "click"], ["ngbAutofocus", "", "btnClass", "btn btn-wide btn-primary btn-rounded", 3, "loading", "click"]], template: function DetailInModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "detail-in-modal");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailInModalComponent_Template_button_click_5_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DetailInModalComponent_div_8_Template, 30, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DetailInModalComponent_div_9_Template, 30, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DetailInModalComponent_div_10_Template, 5, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DetailInModalComponent_div_11_Template, 5, 1, "div", 5);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.credential.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode !== "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode === "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode !== "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewMode === "edit");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_3__.BtnLoadingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtaW4tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
    return DetailInModalComponent;
}());



/***/ }),

/***/ 18163:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownAnchorDirective": function() { return /* binding */ DropdownAnchorDirective; }
/* harmony export */ });
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-link.directive */ 2885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownLinkDirective)); };
    DropdownAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ 2885:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownLinkDirective": function() { return /* binding */ DropdownLinkDirective; }
/* harmony export */ });
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 8971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.AppDropdownDirective)); };
    DropdownLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
        } }, inputs: { group: "group", open: "open" } });
    return DropdownLinkDirective;
}());



/***/ }),

/***/ 8971:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDropdownDirective": function() { return /* binding */ AppDropdownDirective; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    AppDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });
    return AppDropdownDirective;
}());



/***/ }),

/***/ 25914:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/full-screen.directive.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenWindowDirective": function() { return /* binding */ FullScreenWindowDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var FullScreenWindowDirective = /** @class */ (function () {
    function FullScreenWindowDirective() {
    }
    // Full screen
    FullScreenWindowDirective.prototype.cancelFullScreen = function (el) {
        var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
        if (requestMethod) { // cancel full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
    };
    FullScreenWindowDirective.prototype.requestFullScreen = function (el) {
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (requestMethod) { // Native full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
        return false;
    };
    FullScreenWindowDirective.prototype.toggleFullscreen = function () {
        var elem = document.body;
        var isInFullScreen = (document['fullScreenElement'] && document['fullScreenElement'] !== null) || (document['mozFullScreen'] || document['webkitIsFullScreen']);
        if (isInFullScreen) {
            this.cancelFullScreen(document);
        }
        else {
            this.requestFullScreen(elem);
        }
        return false;
    };
    FullScreenWindowDirective.ɵfac = function FullScreenWindowDirective_Factory(t) { return new (t || FullScreenWindowDirective)(); };
    FullScreenWindowDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FullScreenWindowDirective, selectors: [["", "fullScreenWindow", ""]], hostBindings: function FullScreenWindowDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenWindowDirective_click_HostBindingHandler($event) { return ctx.toggleFullscreen($event); });
        } } });
    return FullScreenWindowDirective;
}());



/***/ }),

/***/ 28991:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/highlightjs.directive.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightjsDirective": function() { return /* binding */ HighlightjsDirective; }
/* harmony export */ });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ 96786);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
var HighlightjsDirective = /** @class */ (function () {
    function HighlightjsDirective(el) {
        var _this = this;
        this.el = el;
        // this.registerLanguages();
        this.nativeEl = this.el.nativeElement;
        setTimeout(function () {
            highlight_js__WEBPACK_IMPORTED_MODULE_0___default().highlightBlock(_this.nativeEl);
        });
    }
    HighlightjsDirective.ɵfac = function HighlightjsDirective_Factory(t) { return new (t || HighlightjsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
    HighlightjsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HighlightjsDirective, selectors: [["", "highlight", ""]], inputs: { highlight: "highlight" } });
    return HighlightjsDirective;
}());



/***/ }),

/***/ 93001:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToDirective": function() { return /* binding */ ScrollToDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID) {
            return;
        }
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if (leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
        return false;
    };
    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
    ScrollToDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
        } } });
    return ScrollToDirective;
}());



/***/ }),

/***/ 72747:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDirectivesModule": function() { return /* binding */ SharedDirectivesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-anchor.directive */ 18163);
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ 2885);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ 8971);
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-to.directive */ 93001);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.directive */ 47396);
/* harmony import */ var _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlightjs.directive */ 28991);
/* harmony import */ var _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./full-screen.directive */ 25914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);









var directives = [
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
    _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
    _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule.ɵfac = function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); };
    SharedDirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
    SharedDirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
            ]] });
    return SharedDirectivesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule], exports: [_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownAnchorDirective,
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownLinkDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.AppDropdownDirective,
        _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContainerDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarContentDirective,
        _sidebar_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerDirective,
        _highlightjs_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightjsDirective,
        _full_screen_directive__WEBPACK_IMPORTED_MODULE_6__.FullScreenWindowDirective] }); })();


/***/ }),

/***/ 47396:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarContainerDirective": function() { return /* binding */ SidebarContainerDirective; },
/* harmony export */   "SidebarContentDirective": function() { return /* binding */ SidebarContentDirective; },
/* harmony export */   "SidebarDirective": function() { return /* binding */ SidebarDirective; },
/* harmony export */   "SidebarTogglerDirective": function() { return /* binding */ SidebarTogglerDirective; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sidebar-helper.service */ 9131);



var SidebarContainerDirective = /** @class */ (function () {
    function SidebarContainerDirective(el, _sidenavHelperService) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.nativeEl = this.el.nativeElement;
        this.nativeEl.className += ' sidebar-container';
    }
    SidebarContainerDirective.prototype.ngOnInit = function () {
    };
    SidebarContainerDirective.ɵfac = function SidebarContainerDirective_Factory(t) { return new (t || SidebarContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService)); };
    SidebarContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarContainerDirective, selectors: [["", "appSidebarContainer", ""]], inputs: { id: ["appSidebarContainer", "id"] } });
    return SidebarContainerDirective;
}());

var SidebarContentDirective = /** @class */ (function () {
    function SidebarContentDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.nativeEl = this.el.nativeElement;
        this.container.content = this;
        this.nativeEl.className += ' sidebar-content';
    }
    SidebarContentDirective.prototype.createBackdrop = function () {
    };
    SidebarContentDirective.ɵfac = function SidebarContentDirective_Factory(t) { return new (t || SidebarContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarContentDirective, selectors: [["", "appSidebarContent", ""]], inputs: { id: ["appSidebarContent", "id"] } });
    return SidebarContentDirective;
}());

var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.align = 'left';
        this.mode = 'side';
        this.nativeEl = this.el.nativeElement;
        this.containerNativeEl = this.container.el.nativeElement;
        this.contentNativeEl = this.container.content.el.nativeElement;
        this.nativeEl.className += ' sidebar';
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.width = this.el.nativeElement.offsetWidth + 'px';
        this._sidenavHelperService.setSidenav(this.id, this);
        this.initSidebar();
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.initSidebar();
    };
    SidebarDirective.prototype.initSidebar = function () {
        this.closed = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile();
        if (this.closed) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SidebarDirective.prototype.open = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                this.contentNativeEl.style.marginLeft = this.width;
            }
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isMobile()) {
                this.contentNativeEl.style.marginRight = this.width;
            }
        }
        this.closed = false;
    };
    SidebarDirective.prototype.close = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = '-' + this.width;
            this.contentNativeEl.style.marginLeft = 0;
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = '-' + this.width;
            this.contentNativeEl.style.marginRight = 0;
        }
        this.closed = true;
    };
    SidebarDirective.prototype.toggle = function () {
        if (this.closed) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SidebarContainerDirective)); };
    SidebarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        } }, inputs: { align: "align", mode: "mode", id: ["appSidebar", "id"], closed: "closed" } });
    return SidebarDirective;
}());

var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective(_sidenavHelperService) {
        this._sidenavHelperService = _sidenavHelperService;
    }
    SidebarTogglerDirective.prototype.onClick = function () {
        this._sidenavHelperService.getSidenav(this.id).toggle();
    };
    SidebarTogglerDirective.ɵfac = function SidebarTogglerDirective_Factory(t) { return new (t || SidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__.SidebarHelperService)); };
    SidebarTogglerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarTogglerDirective, selectors: [["", "appSidebarToggler", ""]], hostBindings: function SidebarTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { id: ["appSidebarToggler", "id"] } });
    return SidebarTogglerDirective;
}());



/***/ }),

/***/ 10667:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcerptPipe": function() { return /* binding */ ExcerptPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) { return new (t || ExcerptPipe)(); };
    ExcerptPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excerpt", type: ExcerptPipe, pure: true });
    return ExcerptPipe;
}());



/***/ }),

/***/ 64914:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetValueByKeyPipe": function() { return /* binding */ GetValueByKeyPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) { return new (t || GetValueByKeyPipe)(); };
    GetValueByKeyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getValueByKey", type: GetValueByKeyPipe, pure: false });
    return GetValueByKeyPipe;
}());



/***/ }),

/***/ 84075:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeTimePipe": function() { return /* binding */ RelativeTimePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date)) {
            value = new Date(value);
        }
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + ' years ago';
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    };
    RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) { return new (t || RelativeTimePipe)(); };
    RelativeTimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "relativeTime", type: RelativeTimePipe, pure: true });
    return RelativeTimePipe;
}());



/***/ }),

/***/ 81233:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPipesModule": function() { return /* binding */ SharedPipesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excerpt.pipe */ 10667);
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-value-by-key.pipe */ 64914);
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relative-time.pipe */ 84075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var pipes = [
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe
];
var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule.ɵfac = function SharedPipesModule_Factory(t) { return new (t || SharedPipesModule)(); };
    SharedPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedPipesModule });
    SharedPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
            ]] });
    return SharedPipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedPipesModule, { declarations: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_excerpt_pipe__WEBPACK_IMPORTED_MODULE_0__.ExcerptPipe,
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_1__.GetValueByKeyPipe,
        _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe] }); })();


/***/ }),

/***/ 57595:
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.gaurd.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurd": function() { return /* binding */ AuthGaurd; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 10629);
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



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurd.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.auth.authenticated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.auth.hasExpired()];
                    case 1:
                        // CHECK IF PASETO TOKEN HAS EXPIRED
                        if (_a.sent()) {
                            this.auth.signout();
                            return [2 /*return*/, false];
                        }
                        else {
                            // PASETO TOKEN IS VALID
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // USER ISN'T AUTHENTICATED - GO TO SIGN IN
                        this.router.navigateByUrl('/signin');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthGaurd.ɵfac = function AuthGaurd_Factory(t) { return new (t || AuthGaurd)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
    AuthGaurd.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGaurd, factory: AuthGaurd.ɵfac, providedIn: 'root' });
    return AuthGaurd;
}());



/***/ }),

/***/ 10629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var paseto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paseto.js */ 88934);
/* harmony import */ var paseto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paseto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ 93105);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket */ 43711);
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-store.service */ 69122);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/jem.service */ 91895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};











var V2 = new paseto_js__WEBPACK_IMPORTED_MODULE_2__.V2();
var AuthService = /** @class */ (function () {
    function AuthService(WSS, store, jemService, router, httpClient) {
        this.WSS = WSS;
        this.store = store;
        this.jemService = jemService;
        this.router = router;
        this.httpClient = httpClient;
        this.firstSignIn = false;
        this.authenticated = false;
        this.vault = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
        this.vaultLoaded = false;
        this.userSettings = {};
        this.deviceSettings = {};
        this.sessionTime = new events__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isNewBrowser = false;
        this.removeByAttr = function (arr, attr, value) {
            var i = arr.length;
            while (i--) {
                if (arr[i] &&
                    arr[i].hasOwnProperty(attr) &&
                    (arguments.length > 2 && arr[i][attr] === value)) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        };
        this.checkAuth();
    }
    AuthService.prototype.checkAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var emailAddress, parent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticated = this.store.getItem("loggedInUser");
                        emailAddress = this.store.getItem('emailAddress');
                        if (!this.authenticated) return [3 /*break*/, 2];
                        //   this.userSettings = JSON.parse(this.store.getItem('userSettings'));
                        //   this.deviceSettings = JSON.parse(this.store.getItem('deviceSettings'));
                        //   this.deviceSettings.jems.find(o => o.status === 'online').status = 'offline';
                        this.jemService.jems.next(this.deviceSettings.jems);
                        return [4 /*yield*/, this.WSS.connectToAPI(this.deviceSettings.username, emailAddress)];
                    case 1:
                        _a.sent();
                        parent = this;
                        if (!this.jemService.jemStatusListening) {
                            this.jemService.jemStatusListening = true;
                            this.WSS.bind('JEMSTATUS', function (jem) {
                                parent.jemService.jems.value.find(function (o) { return o.jemID === jem.jemID; }).status = jem.status;
                                parent.jemService.jems.next(parent.jemService.jems.value);
                            });
                        }
                        if (!this.vaultLoaded) {
                            this.loadVault(this.authenticated);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.secondsToHms = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay;
    };
    AuthService.prototype.secondsToHmsShort = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + " hr " : "";
        var mDisplay = m > 0 ? m + " min " : "";
        var sDisplay = d < 120 ? (s > 0 ? s + " sec" : "") : "";
        return hDisplay + mDisplay + sDisplay;
    };
    AuthService.prototype.getTokenValue = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var token, publicKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getItem("loggedInUser")];
                    case 1:
                        token = _a.sent();
                        publicKey = new paseto_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.V2();
                        //   var origPubKey = Buffer.from(this.userSettings.signingPublicKey, 'base64');
                        //   publicKey.inject(origPubKey);
                        //   var value = null;
                        //   await V2.verify(token, publicKey, '', async (err, data) => {
                        //       if (err) {
                        //       } else {
                        //           token = JSON.parse(data);
                        //           value = token[key]
                        //       }
                        //   });
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
    * Check a paseto token's expiry - returns a boolean true/false
    * @author   Paul Moore
    * @return   {boolean}   true/false
    */
    AuthService.prototype.hasExpired = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, publicKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getItem("loggedInUser")];
                    case 1:
                        token = _a.sent();
                        publicKey = new paseto_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.V2();
                        //   var origPubKey = Buffer.from(this.userSettings.signingPublicKey, 'base64');
                        //   publicKey.inject(origPubKey);
                        //   var expired = false;
                        //   await V2.verify(token, publicKey, '', async (err, data) => {
                        //       if (err) {
                        //           expired = true
                        //       } else {
                        //           token = JSON.parse(data);
                        //           if (token.exp < (Date.now() / 1000)) {
                        //               expired = true
                        //           } else {
                        //               expired = false;
                        //           }
                        //       }
                        //   });
                        //   return expired;
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
    * Check a paseto token's expiry - returns a boolean true/false
    * @author   Paul Moore
    * @return   {boolean}   true/false
    */
    AuthService.prototype.getAllCredentials = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/getAllCredentials', {
            responseType: 'json',
            headers: {
                "Authorization": "Bearer " + this.store.getItem("loggedInUser")
            }
        });
    };
    AuthService.prototype.getCredential = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/getCredential', {
            params: {
                rowKey: id
            },
            responseType: 'json',
            headers: {
                "Authorization": "Bearer " + this.store.getItem("loggedInUser")
            }
        });
    };
    AuthService.prototype.deleteCredential = function (id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/deleteCredential/' + id, {
            responseType: 'json',
            headers: {
                "Authorization": "Bearer " + this.store.getItem("loggedInUser")
            }
        });
    };
    AuthService.prototype.getSignedInEmailAddress = function () {
        return this.store.getItem('emailAddress');
    };
    AuthService.prototype.confirmEmailAddress = function (emailAddress) {
        var body = {
            "emailAddress": emailAddress
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/confirmEmailAddress', body, {
            responseType: 'json'
        });
    };
    AuthService.prototype.addCredential = function (credential) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/addCredential', {
            "ciphertext": JSON.stringify(credential)
        }, {
            responseType: 'json',
            headers: {
                "Authorization": "Bearer " + this.store.getItem("loggedInUser")
            }
        });
    };
    AuthService.prototype.updateCredential = function (id, credential) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/updateCredential', {
            "rowKey": id,
            "ciphertext": JSON.stringify(credential)
        }, {
            responseType: 'json',
            headers: {
                "Authorization": "Bearer " + this.store.getItem("loggedInUser")
            }
        });
    };
    AuthService.prototype.nullDeviceSeed = function (emailAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, didIdentifer;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(!this.sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = this.sodium;
                        _c.label = 3;
                    case 3:
                        _a.sodium = _b;
                        return [4 /*yield*/, this.sodium.crypto_generichash(emailAddress, null, 16)];
                    case 4:
                        didIdentifer = _c.sent();
                        this.store.setItem("__did_" + didIdentifer.toString('hex'), "");
                        this.isNewBrowser = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getDeviceSeed = function (emailAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, didIdentifer, deviceSeed, deviceSeed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(!this.sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = this.sodium;
                        _c.label = 3;
                    case 3:
                        _a.sodium = _b;
                        return [4 /*yield*/, this.sodium.crypto_generichash(emailAddress, null, 16)];
                    case 4:
                        didIdentifer = _c.sent();
                        if (!this.store.getItem("__did_" + didIdentifer.toString('hex'))) return [3 /*break*/, 5];
                        this.isNewBrowser = false;
                        return [2 /*return*/, {
                                "seed": this.store.getItem("__did_" + didIdentifer.toString('hex'))
                            }];
                    case 5: return [4 /*yield*/, this.sodium.randombytes_buf(32)];
                    case 6:
                        deviceSeed = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_generichash(emailAddress + ":" + deviceSeed)];
                    case 7:
                        deviceSeed = _c.sent();
                        this.store.setItem("__did_" + didIdentifer.toString('hex'), deviceSeed.toString('hex'));
                        this.isNewBrowser = true;
                        return [2 /*return*/, {
                                "seed": deviceSeed.toString('hex')
                            }];
                }
            });
        });
    };
    AuthService.prototype.doesUserExist = function (emailAddress) {
        var body = {
            "emailAddress": emailAddress
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/doesUserExist', body, {
            responseType: 'json'
        });
    };
    AuthService.prototype.isJEMAvailable = function (jemID) {
        var body = {
            "jemID": jemID
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/isJEMAvailable', body, {
            responseType: 'json'
        });
    };
    AuthService.prototype.getUserJems = function (emailAddress) {
        var body = {
            "emailAddress": emailAddress
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/getUserJems', body, {
            responseType: 'json'
        });
    };
    AuthService.prototype.getUserPublicKey = function (emailAddress) {
        var body = {
            "emailAddress": emailAddress
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/getUserPublicKey', body, {
            responseType: 'json'
        });
    };
    AuthService.prototype.generateMQTTKeys = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, deviceSeed, deviceEncryptionKeyPair, deviceEncryptionPrivateKey, deviceEncryptionPublicKey, deviceSigningKeyPair, deviceSigningPrivateKey, deviceSigningPublicKey, deviceKeys;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(!this.sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = this.sodium;
                        _c.label = 3;
                    case 3:
                        _a.sodium = _b;
                        return [4 /*yield*/, this.getDeviceSeed(credentials.email)];
                    case 4:
                        deviceSeed = _c.sent();
                        if (!deviceSeed.seed) {
                            throw new Error("Could not fetch device seed");
                        }
                        deviceSeed = Buffer.from(deviceSeed["seed"], 'hex');
                        return [4 /*yield*/, this.sodium.crypto_kx_seed_keypair(deviceSeed)];
                    case 5:
                        deviceEncryptionKeyPair = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_box_secretkey(deviceEncryptionKeyPair)];
                    case 6:
                        deviceEncryptionPrivateKey = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_box_publickey(deviceEncryptionKeyPair)];
                    case 7:
                        deviceEncryptionPublicKey = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_sign_seed_keypair(deviceSeed)];
                    case 8:
                        deviceSigningKeyPair = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_sign_secretkey(deviceSigningKeyPair)];
                    case 9:
                        deviceSigningPrivateKey = _c.sent();
                        return [4 /*yield*/, this.sodium.crypto_sign_publickey(deviceSigningKeyPair)];
                    case 10:
                        deviceSigningPublicKey = _c.sent();
                        deviceKeys = {
                            "encryptPublicKey": deviceEncryptionPublicKey.toString('base64'),
                            "encryptPrivateKey": deviceEncryptionPrivateKey.toString('base64'),
                            "signPublicKey": deviceSigningPublicKey.toString('base64'),
                            "signPrivateKey": deviceSigningPrivateKey.toString('base64'),
                            "username": deviceSigningPublicKey.toString('hex')
                        };
                        return [2 /*return*/, deviceKeys];
                }
            });
        });
    };
    ;
    AuthService.prototype.signout = function () {
        // Disconnect from API
        this.WSS.disconnectAPI();
        // Delete all user profile objects
        this.userSettings = {};
        this.deviceSettings = {};
        this.jemService.jems.next([]);
        // Wipe the vault and clear vaultLoaded flag
        this.vault.next([]);
        this.vaultLoaded = false;
        // Set authenticated to false
        this.authenticated = false;
        // Delete all localStorage entries
        this.store.setItem("loggedInUser", false);
        this.store.setItem("emailAddress", false);
        this.store.setItem("deviceSettings", false);
        this.store.setItem("userSettings", false);
        // Used to router.navigate - but favour window.location to ensure all params reset
        window.location.assign("/signin");
    };
    AuthService.prototype.isSignatureValid = function (message, pubKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, msgBuf, signature;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        pubKey = pubKey.key;
                        _a = this;
                        if (!(!this.sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = this.sodium;
                        _c.label = 3;
                    case 3:
                        _a.sodium = _b;
                        msgBuf = Buffer.from(message.substring(0, 16), 'hex');
                        signature = Buffer.from(message.substring(16, message.length), 'hex');
                        pubKey = sodium_plus__WEBPACK_IMPORTED_MODULE_0__.Ed25519PublicKey.from(pubKey, 'base64');
                        return [4 /*yield*/, this.sodium.crypto_sign_verify_detached(msgBuf, pubKey, signature)];
                    case 4:
                        if (_c.sent()) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.createUser = function (userData) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/createUser', userData);
    };
    AuthService.prototype.getServerPublicKey = function (typeid) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/getServerPublicKey', typeid);
    };
    AuthService.prototype.verifyPasetoToken = function (token) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_ENDPOINT + 'v1/public/checkServerPasetoToken', {
            token: token
        }, {
            responseType: 'json'
        });
    };
    AuthService.prototype.loadVault = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            var parent;
            var _this = this;
            return __generator(this, function (_a) {
                this.vaultLoaded = true;
                parent = this;
                this.WSS.bind('getAllCredentials_RESPONSE', function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        var sodium, _a, _b, data, metaKEKBuf, metaDataBuf, metaKey, metaData, data, metaKEKBuf, metaDataBuf, metaKey, metaData, data, metaKEKBuf, metaDataBuf, metaKey, metaData;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    this.vaultLoaded = true;
                                    if (!(!sodium)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = sodium;
                                    _c.label = 3;
                                case 3:
                                    sodium = _a;
                                    _b = response.type;
                                    switch (_b) {
                                        case "add": return [3 /*break*/, 4];
                                        case "remove": return [3 /*break*/, 7];
                                        case "change": return [3 /*break*/, 8];
                                        case "initial": return [3 /*break*/, 11];
                                        case "uninitial": return [3 /*break*/, 14];
                                        case "state": return [3 /*break*/, 15];
                                    }
                                    return [3 /*break*/, 16];
                                case 4:
                                    data = JSON.parse(response.new_data.data);
                                    metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                                    metaDataBuf = Buffer.from(data.metaData, 'base64');
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(parent.userSettings.metaKey))];
                                case 5:
                                    metaKey = _c.sent();
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                                case 6:
                                    metaData = _c.sent();
                                    metaData = JSON.parse(metaData);
                                    parent.vault.next(__spreadArray(__spreadArray([], __read(parent.vault.value)), [{
                                            "id": response.new_data.RowKey,
                                            "title": metaData.title,
                                            "url": metaData.url,
                                            "username": metaData.username,
                                            "status": "encrypted",
                                            "passKEK": data.passKEK,
                                            "passData": data.passData,
                                            "decryptedPassword": '',
                                            'eraseDecryptedDataTimeout': null,
                                            'clearEraseDecryptedDataTimeout': function () {
                                                if (this.eraseDecryptedDataTimeout)
                                                    clearTimeout(this.eraseDecryptedDataTimeout);
                                                this.eraseDecryptedDataTimeout = null;
                                            },
                                            'eraseDecryptedData': function (ms) {
                                                var _this = this;
                                                this.eraseDecryptedDataTimeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var _a;
                                                    return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                console.log("erasing decrypted data for " + this.title);
                                                                _a = this;
                                                                return [4 /*yield*/, sodium.randombytes_buf(32)];
                                                            case 1:
                                                                _a.decryptedPassword = _b.sent();
                                                                this.decryptedPassword = null;
                                                                this.status = 'encrypted';
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }, ms);
                                            },
                                        }]));
                                    return [3 /*break*/, 16];
                                case 7:
                                    parent.vault.next(parent.removeByAttr(parent.vault.value, 'id', response.old_data.RowKey));
                                    return [3 /*break*/, 16];
                                case 8:
                                    parent.vault.next(parent.removeByAttr(parent.vault.value, 'id', response.old_data.RowKey));
                                    data = JSON.parse(response.new_data.data);
                                    metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                                    metaDataBuf = Buffer.from(data.metaData, 'base64');
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(parent.userSettings.metaKey))];
                                case 9:
                                    metaKey = _c.sent();
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                                case 10:
                                    metaData = _c.sent();
                                    metaData = JSON.parse(metaData);
                                    parent.vault.next(__spreadArray(__spreadArray([], __read(parent.vault.value)), [{
                                            "id": response.new_data.RowKey,
                                            "title": metaData.title,
                                            "url": metaData.url,
                                            "username": metaData.username,
                                            "status": "encrypted",
                                            "passKEK": data.passKEK,
                                            "passData": data.passData,
                                            "decryptedPassword": '',
                                            'eraseDecryptedDataTimeout': null,
                                            'clearEraseDecryptedDataTimeout': function () {
                                                if (this.eraseDecryptedDataTimeout) {
                                                    clearTimeout(this.eraseDecryptedDataTimeout);
                                                }
                                                this.eraseDecryptedDataTimeout = null;
                                            },
                                            'eraseDecryptedData': function (ms) {
                                                var _this = this;
                                                this.clearEraseDecryptedDataTimeout();
                                                this.eraseDecryptedDataTimeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var _a;
                                                    return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                console.log("erasing decrypted data for " + this.title);
                                                                _a = this;
                                                                return [4 /*yield*/, sodium.randombytes_buf(32)];
                                                            case 1:
                                                                _a.decryptedPassword = _b.sent();
                                                                this.decryptedPassword = null;
                                                                this.status = 'encrypted';
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }, ms);
                                            },
                                        }]));
                                    return [3 /*break*/, 16];
                                case 11:
                                    data = JSON.parse(response.new_data.data);
                                    metaKEKBuf = Buffer.from(data.metaKEK, 'base64');
                                    metaDataBuf = Buffer.from(data.metaData, 'base64');
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaKEKBuf.slice(24), metaKEKBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(parent.userSettings.metaKey))];
                                case 12:
                                    metaKey = _c.sent();
                                    return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(metaDataBuf.slice(24), metaDataBuf.slice(0, 24), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.CryptographyKey.from(metaKey))];
                                case 13:
                                    metaData = _c.sent();
                                    metaData = JSON.parse(metaData);
                                    parent.vault.next(__spreadArray(__spreadArray([], __read(parent.vault.value)), [{
                                            "id": response.new_data.RowKey,
                                            "title": metaData.title,
                                            "url": metaData.url,
                                            "username": metaData.username,
                                            "status": "encrypted",
                                            "passKEK": data.passKEK,
                                            "passData": data.passData,
                                            "decryptedPassword": '',
                                            'eraseDecryptedDataTimeout': null,
                                            'clearEraseDecryptedDataTimeout': function () {
                                                if (this.eraseDecryptedDataTimeout) {
                                                    clearTimeout(this.eraseDecryptedDataTimeout);
                                                }
                                                this.eraseDecryptedDataTimeout = null;
                                            },
                                            'eraseDecryptedData': function (ms) {
                                                var _this = this;
                                                this.clearEraseDecryptedDataTimeout();
                                                this.eraseDecryptedDataTimeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var _a;
                                                    return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                console.log("erasing decrypted data for " + this.title);
                                                                _a = this;
                                                                return [4 /*yield*/, sodium.randombytes_buf(32)];
                                                            case 1:
                                                                _a.decryptedPassword = _b.sent();
                                                                this.decryptedPassword = null;
                                                                this.status = 'encrypted';
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }, ms);
                                            },
                                        }]));
                                    return [3 /*break*/, 16];
                                case 14: 
                                // do nothing
                                return [3 /*break*/, 16];
                                case 15: return [3 /*break*/, 16];
                                case 16: return [2 /*return*/];
                            }
                        });
                    });
                });
                this.WSS.API('getAllCredentials', {
                    auth: authToken
                });
                this.WSS.event.on('socket_reconnected', function () {
                    _this.vault.next([]);
                    _this.WSS.API('getAllCredentials', {
                        auth: authToken
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_websocket__WEBPACK_IMPORTED_MODULE_4__.WebSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_6__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient)); };
    AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
    return AuthService;
}());



/***/ }),

/***/ 8018:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/http-error.interceptor.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorInterceptor": function() { return /* binding */ HttpErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 74945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);



var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(injector) {
        this.injector = injector;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
        }));
    };
    HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
    HttpErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ 91895:
/*!************************************************!*\
  !*** ./src/app/shared/services/jem.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JemService": function() { return /* binding */ JemService; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ 93105);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base64url */ 37092);
/* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(base64url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var paseto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! paseto.js */ 88934);
/* harmony import */ var paseto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(paseto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./websocket */ 43711);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};








'use strict';
var sodium;
var protobuf = __webpack_require__(/*! protobufjs/light.js */ 80161);
var jemNGjson = __webpack_require__(/*! ../../../../src/blecomm.json */ 64327);
var jemNGRoot = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG");
var jemNGPR = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_ProvisionRsp");
var jemNGEnc = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_Encrypted_API_Msg");
var jemNGER = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_EncryptKeyRsp");
var jemNGDR = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_DecryptKeyRsp");
var jemNGPRR = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_ProvisionRecoveryRsp");
var jemNGACVR = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_AddClientVerifyRsp");
var jemNGPsR = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_PasetoRsp");
var jemEnrollReqEnum = jemNGRoot.lookup("EnrollReqEnum").values;
var V2 = new paseto_js__WEBPACK_IMPORTED_MODULE_4__.V2();
var JemService = /** @class */ (function () {
    function JemService(WSS) {
        this.WSS = WSS;
        this.serviceEmitter = new events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.jems = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
        this.jemStatusListening = false;
        this.firmwareUpgraded = false;
        this.jemFound = false;
        this.locked = false;
    }
    // -- CORE FUNCTIONS
    JemService.prototype.waitForJem = function (jemID) {
        if (jemID === void 0) { jemID = null; }
        return __awaiter(this, void 0, void 0, function () {
            var parent;
            var _this = this;
            return __generator(this, function (_a) {
                parent = this;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (!parent.locked) {
                                parent.locked = true;
                                if (!this.jemStatusListening) {
                                    this.jemStatusListening = true;
                                    this.WSS.bind('JEMSTATUS', function (jem) {
                                        parent.jems.value.find(function (o) { return o.jemID === jem.jemID; }).status = jem.status;
                                        parent.jems.value.find(function (o) { return o.jemID === jem.jemID; }).firmwareVersion = jem.firmwareVersion;
                                        parent.jems.next(parent.jems.value);
                                    });
                                }
                                setTimeout(function () {
                                    parent.locked = false;
                                    parent.jemStatusListening = false;
                                    reject("No online JEM found.  You must press your JEM within 25 seconds.");
                                }, 25000);
                                this.jems.subscribe(function (jem) {
                                    if (_this.jems.value.length > 0) {
                                        if (jem[0].status == "online") {
                                            _this.serviceEmitter.emit('JEMONLINE');
                                            resolve(jem[0].jemID);
                                        }
                                    }
                                });
                                // JEM is already online from registration, resolve immediately.
                                if (jemID) {
                                    this.jems.value.find(function (o) { return o.jemID === jemID; }).status = "online";
                                    this.jems.next(this.jems.value);
                                }
                            }
                            else {
                                reject("The app is busy. Please wait...");
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.provisionFirstJEM = function (devID, username, emailAddress, deviceKeys, recoveryKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var parent, jemPublicKey, provisionResponse;
                        return __generator(this, function (_a) {
                            parent = this;
                            this.WSS.API('SUBSCRIBE_TO_JEM', {
                                jemID: devID
                            });
                            this.WSS.bind('JEMSTATUS', function (jem) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var _a, firmwareVersion;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _a = jem.status;
                                                switch (_a) {
                                                    case "PROVISION_NO_FINGER": return [3 /*break*/, 1];
                                                    case "PROVISION_FINGER": return [3 /*break*/, 5];
                                                    case "offline": return [3 /*break*/, 6];
                                                }
                                                return [3 /*break*/, 7];
                                            case 1:
                                                if (jem.firmwareVersion) {
                                                    firmwareVersion = jem.firmwareVersion.substr(4);
                                                }
                                                if (firmwareVersion == "1.0.10")
                                                    parent.firmwareUpgraded = true;
                                                if (firmwareVersion == "1.0.10-devapi")
                                                    parent.firmwareUpgraded = true;
                                                if (!!parent.firmwareUpgraded) return [3 /*break*/, 3];
                                                setTimeout(function () {
                                                    if (!parent.jemFound) {
                                                        reject("No JEM found for firmware update.  You must press your JEM within 25 seconds, check your JEM ID and ensure your jemPass application is running.");
                                                    }
                                                }, 25000);
                                                parent.serviceEmitter.emit('JEMSTATUS', "FIRMWARE_UPGRADE");
                                                return [4 /*yield*/, parent.DFUUpdate(devID, deviceKeys)];
                                            case 2:
                                                _b.sent();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                parent.firmwareUpgraded = false;
                                                parent.serviceEmitter.emit('JEMSTATUS', "PROVISION_NO_FINGER");
                                                parent.sendEnrollReq(devID, "device/" + username + "/response");
                                                _b.label = 4;
                                            case 4: return [3 /*break*/, 7];
                                            case 5:
                                                parent.serviceEmitter.emit('JEMSTATUS', "PROVISION_FINGER");
                                                parent.sendProvisionReq(devID, "device/" + username + "/response", emailAddress, Buffer.from(deviceKeys.encryptPublicKey, 'base64'), 86400);
                                                return [3 /*break*/, 7];
                                            case 6:
                                                parent.serviceEmitter.emit('JEMSTATUS', "offline");
                                                return [3 /*break*/, 7];
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            this.WSS.bind('SEND_PROVISION_RESPONSE', function (message) {
                                var _this = this;
                                var decodedMessage = jemNGRoot.fromObject(message);
                                if (decodedMessage.api.provisionRsp) {
                                    parent.handleProvisioningResponse(decodedMessage.api.provisionRsp, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                        .then(function (rsp) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (rsp == null) {
                                                reject({ message: "Received in invalid provisioning response" });
                                            }
                                            else {
                                                jemPublicKey = rsp.jemPublicKey;
                                                provisionResponse = rsp.provisionResponse;
                                                parent.sendProvisionRecReq(devID, "device/" + username + "/response", recoveryKey, rsp.jemPublicKey, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'));
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); });
                                }
                            });
                            this.WSS.bind('SEND_PROVISION_REC_RESPONSE', function (message) {
                                var decodedMessage = jemNGRoot.fromObject(message);
                                if (decodedMessage.api.provisionRecRsp) {
                                    parent.handleRspProvisioningRec(decodedMessage.api.provisionRecRsp, jemPublicKey, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                        .then(function (rsp) {
                                        if (rsp == null) {
                                            reject({ message: "Received in invalid recovery key response" });
                                        }
                                        else {
                                            resolve({ provisionResponse: provisionResponse, encryptionPrivateKeyKEK: rsp.userEncPrivKeyEnc, signingPrivateKeyKEK: rsp.userSigPrivKeyEnc });
                                        }
                                    });
                                }
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.fetchPasetoLoginToken = function (sessionDuration, deviceKeys, userSigningPublicKey, jemID) {
        if (jemID === void 0) { jemID = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var error_1, parent;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.waitForJem(jemID)];
                                case 1:
                                    jemID = _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_1 = _a.sent();
                                    return [2 /*return*/, reject({ message: error_1 })];
                                case 3: 
                                // SEND PASETO REQUEST TO JEM
                                return [4 /*yield*/, this.sendPasetoReq(jemID, "device/" + deviceKeys.username + "/response", false, "my.jempass.com", parseInt(sessionDuration), 1, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(this.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))];
                                case 4:
                                    // SEND PASETO REQUEST TO JEM
                                    _a.sent();
                                    parent = this;
                                    this.WSS.bind('PASETO_RESPONSE', function (message) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var decodedMessage;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        delete (message.respTopic);
                                                        decodedMessage = jemNGRoot.fromObject(message);
                                                        if (!decodedMessage.api.errorRsp) return [3 /*break*/, 1];
                                                        parent.locked = false;
                                                        return [2 /*return*/, reject({
                                                                code: 1,
                                                                message: "browser not identified"
                                                            })];
                                                    case 1: return [4 /*yield*/, parent.handleRspPaseto(decodedMessage.api.pasetoRsp, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(parent.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                                            .then(function (rsp) { return __awaiter(_this, void 0, void 0, function () {
                                                            var pasetoMsg, pasetoToken, metaKey, publicKey, origPubKey;
                                                            var _this = this;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!(rsp == null)) return [3 /*break*/, 1];
                                                                        return [3 /*break*/, 3];
                                                                    case 1:
                                                                        pasetoMsg = Buffer.concat([rsp.payload, rsp.signature]);
                                                                        pasetoToken = rsp.header.toString() + '.' + base64url__WEBPACK_IMPORTED_MODULE_3___default()(pasetoMsg);
                                                                        metaKey = rsp.metaKey;
                                                                        publicKey = new paseto_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey.V2();
                                                                        origPubKey = Buffer.from(userSigningPublicKey, 'base64');
                                                                        publicKey.inject(origPubKey);
                                                                        return [4 /*yield*/, V2.verify(pasetoToken, publicKey, '', function (err, data) { return __awaiter(_this, void 0, void 0, function () {
                                                                                return __generator(this, function (_a) {
                                                                                    if (err) {
                                                                                        parent.locked = false;
                                                                                        reject("Invalid username/password");
                                                                                    }
                                                                                    else {
                                                                                        parent.locked = false;
                                                                                        resolve({
                                                                                            pasetoToken: pasetoToken,
                                                                                            metaKey: metaKey
                                                                                        });
                                                                                    }
                                                                                    return [2 /*return*/];
                                                                                });
                                                                            }); })];
                                                                    case 2:
                                                                        _a.sent();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })];
                                                    case 2:
                                                        _a.sent();
                                                        _a.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.DFUUpdate = function (jemID, deviceKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var parent;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    parent = this;
                                    this.WSS.bind('JEM_FIRMWARE', function (jem) {
                                        parent.serviceEmitter.emit("JEM_FIRMWARE", { percent: jem.percent });
                                    });
                                    // SEND ENCRYPT REQUEST TO EVERY JEM
                                    return [4 /*yield*/, this.sendDFURequest(jemID, "device/" + deviceKeys.username + "/response")];
                                case 1:
                                    // SEND ENCRYPT REQUEST TO EVERY JEM
                                    _a.sent();
                                    resolve('');
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.encrypt = function (value, deviceKeys, terminal) {
        if (terminal === void 0) { terminal = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var jemID, error_2, parent;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.waitForJem()];
                                case 1:
                                    jemID = _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    return [2 /*return*/, reject({ message: error_2 })];
                                case 3: 
                                // SEND ENCRYPT REQUEST TO EVERY JEM
                                return [4 /*yield*/, this.sendEncReq(jemID, "device/" + deviceKeys.username + "/response", terminal, value, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(this.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))];
                                case 4:
                                    // SEND ENCRYPT REQUEST TO EVERY JEM
                                    _a.sent();
                                    parent = this;
                                    this.WSS.bind('ENCRYPT_RESPONSE', function (message) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a, decodedMessage;
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
                                                        parent.serviceEmitter.emit("JEMSTATUS", "encrypting");
                                                        decodedMessage = jemNGRoot.fromObject(message);
                                                        if (!decodedMessage.api.encryptMsgRsp) return [3 /*break*/, 5];
                                                        return [4 /*yield*/, parent.handleRspEncrypt(decodedMessage.api.encryptMsgRsp, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(parent.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                                                .then(function (rsp) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    if (rsp == null) {
                                                                        parent.locked = false;
                                                                    }
                                                                    else {
                                                                        rsp = Buffer.from(rsp);
                                                                        parent.locked = false;
                                                                        resolve(rsp.toString('base64'));
                                                                    }
                                                                    return [2 /*return*/];
                                                                });
                                                            }); })];
                                                    case 4:
                                                        _b.sent();
                                                        _b.label = 5;
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.decrypt = function (value, deviceKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var jemID, error_3, parent;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.waitForJem()];
                                case 1:
                                    jemID = _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_3 = _a.sent();
                                    return [2 /*return*/, reject({ message: error_3 })];
                                case 3: 
                                // SEND DECRYPT REQUEST TO EVERY JEM
                                return [4 /*yield*/, this.sendDecReq(jemID, "device/" + deviceKeys.username + "/response", true, value, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(this.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))];
                                case 4:
                                    // SEND DECRYPT REQUEST TO EVERY JEM
                                    _a.sent();
                                    parent = this;
                                    parent.WSS.bind('DECRYPT_RESPONSE', function (message) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a, decodedMessage;
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
                                                        parent.serviceEmitter.emit("JEMSTATUS", "decrypting");
                                                        decodedMessage = jemNGRoot.fromObject(message);
                                                        if (!decodedMessage.api.decryptMsgRsp) return [3 /*break*/, 5];
                                                        return [4 /*yield*/, parent.handleRspDecrypt(decodedMessage.api.decryptMsgRsp, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(parent.jems.value.find(function (o) { return o.jemID === jemID; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                                                .then(function (rsp) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    if (rsp == null) {
                                                                        parent.locked = false;
                                                                    }
                                                                    else {
                                                                        rsp = Buffer.from(rsp);
                                                                        parent.locked = false;
                                                                        resolve(rsp.toString('base64'));
                                                                    }
                                                                    return [2 /*return*/];
                                                                });
                                                            }); })];
                                                    case 4:
                                                        _b.sent();
                                                        _b.label = 5;
                                                    case 5: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    JemService.prototype.startBlinkyPairing = function (deviceKeys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.locked = false;
                        return [4 /*yield*/, this.sendAddClientReq(this.jems.value.find(function (o) { return o.status === 'online'; }).jemID, "device/" + deviceKeys.username + "/response", Buffer.from(deviceKeys.encryptPublicKey, 'base64'))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.checkBlinkCodes = function (deviceKeys, codes) {
        return __awaiter(this, void 0, void 0, function () {
            var parent;
            var _this = this;
            return __generator(this, function (_a) {
                parent = this;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.WSS.bind('SEND_ADD_CLIENT_VERIFY_RESPONSE', function (message) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var decodedMessage;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        delete (message.respTopic);
                                                        decodedMessage = jemNGRoot.fromObject(message);
                                                        if (!decodedMessage.api.errorRsp) return [3 /*break*/, 1];
                                                        return [3 /*break*/, 3];
                                                    case 1: return [4 /*yield*/, parent.handleRspAddClientVerify(decodedMessage.api.addClientVerifyRsp, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(parent.jems.value.find(function (o) { return o.status === 'online'; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'))
                                                            .then(function (rsp) { return __awaiter(_this, void 0, void 0, function () {
                                                            var _this = this;
                                                            return __generator(this, function (_a) {
                                                                if (rsp == null) {
                                                                    return [2 /*return*/, reject("no code")];
                                                                }
                                                                else {
                                                                    if (rsp == 1) {
                                                                        // Success
                                                                        this.locked = false;
                                                                        return [2 /*return*/, resolve("success")];
                                                                    }
                                                                    else {
                                                                        // Failure
                                                                        this.locked = false;
                                                                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0: return [4 /*yield*/, parent.sendAddClientRepeat(parent.jems.value.find(function (o) { return o.status === 'online'; }).jemID, "device/" + deviceKeys.username + "/response")];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); }, 5000);
                                                                        return [2 /*return*/, reject("Incorrect code. Resending in 5 seconds...")];
                                                                    }
                                                                }
                                                                return [2 /*return*/];
                                                            });
                                                        }); })];
                                                    case 2:
                                                        _a.sent();
                                                        _a.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    if (!(codes == null)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.sendAddClientRepeat(this.jems.value.find(function (o) { return o.status === 'online'; }).jemID, "device/" + deviceKeys.username + "/response")];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.sendAddClientVerify(this.jems.value.find(function (o) { return o.status === 'online'; }).jemID, "device/" + deviceKeys.username + "/response", false, codes.red, codes.green, codes.blue, 2592000, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(this.jems.value.find(function (o) { return o.status === 'online'; }).publicEncryptionKey, "base64"), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'));
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    // END OF CORE FUNCTIONS --
    // DEPENDENCY FUNCTIONS --
    // Send Add Client request
    JemService.prototype.sendAddClientReq = function (devID, rspTopic, pubKey) {
        return __awaiter(this, void 0, void 0, function () {
            var apiMsg, addMsg, err;
            return __generator(this, function (_a) {
                apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                apiMsg.terminal = false;
                apiMsg.respTopic = rspTopic;
                addMsg = jemNGRoot.lookupType("JEM_NG_API_AddClientReq").create();
                apiMsg.addClientReq = addMsg;
                addMsg.pubKey = pubKey;
                err = jemNGRoot.verify(addMsg);
                this.sendApiReq("SEND_ADD_CLIENT_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                return [2 /*return*/];
            });
        });
    };
    // Send Add Client repeat (blinks) request
    JemService.prototype.sendAddClientRepeat = function (devID, rspTopic) {
        return __awaiter(this, void 0, void 0, function () {
            var apiMsg;
            return __generator(this, function (_a) {
                apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                apiMsg.terminal = false;
                apiMsg.respTopic = rspTopic;
                apiMsg.addClientRepeat = true;
                this.sendApiReq("SEND_ADD_CLIENT_REPEAT", apiMsg, ('device/' + devID + '/listen'));
                return [2 /*return*/];
            });
        });
    };
    // Send Add Client Verify message
    JemService.prototype.sendAddClientVerify = function (devID, rspTopic, terminal, red, green, blue, duration, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var verMsg, verContents, err, apiMsg, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        verMsg = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_AddClientVerify");
                        verContents = verMsg.lookupType("JEM_NG_API_AddClientVerify").create();
                        verContents.verification = Buffer.from('r' + red.toString() + 'g' + green.toString() + 'b' + blue.toString());
                        verContents.duration = duration;
                        err = verMsg.verify(verContents);
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = terminal;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(verMsg.encode(verContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.addClientVerify = _b.sent();
                        this.sendApiReq("SEND_ADD_CLIENT_VERIFY", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.handleRspAddClientVerify = function (rsp, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedVerRsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, jemPublic, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) {
                            return [2 /*return*/];
                        }
                        decodedVerRsp = null;
                        try {
                            decodedVerRsp = jemNGACVR.decode(decrypted);
                        }
                        catch (e) {
                            return [2 /*return*/];
                        }
                        if (decodedVerRsp == null || decodedVerRsp.result == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, decodedVerRsp.result];
                }
            });
        });
    };
    JemService.prototype.acknowledgeProvision = function (devID, jemPublic, localPublic, localSecret, rspTopic) {
        return __awaiter(this, void 0, void 0, function () {
            var ackReqMsg, ackContents, err, apiMsg, _a, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ackReqMsg = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_ProvisionAck");
                        ackContents = ackReqMsg.lookupType("JEM_NG_API_ProvisionAck").create();
                        ackContents.provisionFinalize = true;
                        err = ackReqMsg.verify(ackContents);
                        if (err)
                            throw Error(err);
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = false;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(ackReqMsg.encode(ackContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.provisionAck = _b.sent();
                        err = jemNGRoot.verify(apiMsg);
                        if (err) {
                            throw Error(err);
                        }
                        this.sendApiReq("ACK_PROVISION", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.handleRspProvisioningRec = function (rsp, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedProvRecMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, jemPublic, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) { }
                        decodedProvRecMsg = null;
                        try {
                            decodedProvRecMsg = jemNGPRR.decode(decrypted);
                        }
                        catch (e) {
                        }
                        if (decodedProvRecMsg == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, decodedProvRecMsg];
                }
            });
        });
    };
    JemService.prototype.handleProvisioningResponse = function (rsp, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedProvMessage, jemPublic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.jemProvPubKey, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) {
                            return [2 /*return*/];
                        }
                        decodedProvMessage = null;
                        try {
                            decodedProvMessage = jemNGPR.decode(decrypted);
                        }
                        catch (e) {
                            return [2 /*return*/];
                        }
                        if (decodedProvMessage == null) {
                            return [2 /*return*/];
                        }
                        jemPublic = sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from(decodedProvMessage.devEncPubKey);
                        return [2 /*return*/, {
                                "jemPublicKey": jemPublic,
                                "provisionResponse": decodedProvMessage
                            }];
                }
            });
        });
    };
    JemService.prototype.sendProvisionRecReq = function (devID, rspTopic, recKey, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var provRecReqMsg, recReqContents, err, apiMsg, _a, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        provRecReqMsg = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_ProvisionRecoveryReq");
                        recReqContents = provRecReqMsg.lookupType("JEM_NG_API_ProvisionRecoveryReq").create();
                        recReqContents.userRecoveryKey = recKey;
                        err = provRecReqMsg.verify(recReqContents);
                        if (err)
                            throw Error(err);
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = false;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(provRecReqMsg.encode(recReqContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.provisionRecReq = _b.sent();
                        err = jemNGRoot.verify(apiMsg);
                        if (err) {
                            throw Error(err);
                        }
                        this.sendApiReq("SEND_PROVISION_REC_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.sendEnrollReq = function (devID, rspTopic) {
        return __awaiter(this, void 0, void 0, function () {
            var apiMsg;
            return __generator(this, function (_a) {
                apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                apiMsg.terminal = false;
                apiMsg.respTopic = rspTopic;
                apiMsg.enrollReq = jemEnrollReqEnum.ENROLL;
                this.sendApiReq("SEND_ENROLL_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                return [2 /*return*/];
            });
        });
    };
    // -- END OF PROVISION FUNCTIONS --
    JemService.prototype.sendDFURequest = function (devID, topic) {
        return __awaiter(this, void 0, void 0, function () {
            var tsMsg, err;
            return __generator(this, function (_a) {
                tsMsg = jemNGRoot.lookupType("JEM_NG").create();
                tsMsg.dfu = 1;
                err = jemNGRoot.verify(tsMsg);
                if (err)
                    throw Error(err);
                this.WSS.API("SEND_DFU_UPDATE", __assign({ respTopic: 'device/' + devID + '/listen' }, tsMsg));
                return [2 /*return*/];
            });
        });
    };
    // -- API FUNCTIONS --
    JemService.prototype.sendApiReq = function (event, req, topic) {
        return __awaiter(this, void 0, void 0, function () {
            var tsMsg, err;
            return __generator(this, function (_a) {
                tsMsg = jemNGRoot.lookupType("JEM_NG").create();
                tsMsg.api = req;
                err = jemNGRoot.verify(tsMsg);
                if (err)
                    throw Error(err);
                this.WSS.API(event, __assign({ respTopic: topic }, tsMsg));
                return [2 /*return*/];
            });
        });
    };
    JemService.prototype.encryptAPIReq = function (plaintext, devID, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, encMsg, browserIKey, browserOKey, nonceBuf, encrypted, nonceMsg;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _c.label = 3;
                    case 3:
                        sodium = _a;
                        encMsg = jemNGRoot.lookupType("JEM_NG_Encrypted_API_Msg").create();
                        return [4 /*yield*/, sodium.crypto_kx_server_session_keys(localPublic, localSecret, jemPublic)];
                    case 4:
                        _b = __read.apply(void 0, [_c.sent(), 2]), browserIKey = _b[0], browserOKey = _b[1];
                        return [4 /*yield*/, sodium.randombytes_buf(24)];
                    case 5:
                        nonceBuf = _c.sent();
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(plaintext, nonceBuf, browserOKey)];
                    case 6:
                        encrypted = _c.sent();
                        nonceMsg = Buffer.concat([nonceBuf, encrypted]);
                        encMsg.payload = nonceMsg;
                        encMsg.clientPubKey = localPublic.getBuffer();
                        return [2 /*return*/, encMsg];
                }
            });
        });
    };
    JemService.prototype.decryptApiReq = function (payload, jemPubKey, localPubKey, localPrivKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, msgBuf, nonceBuf, justMsgBuf, browserIKey, browserOKey, decrypted, e_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_0__.SodiumPlus.auto()];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _c.label = 3;
                    case 3:
                        sodium = _a;
                        msgBuf = Buffer.from(payload);
                        nonceBuf = msgBuf.slice(0, 24);
                        justMsgBuf = msgBuf.slice(24);
                        return [4 /*yield*/, sodium.crypto_kx_server_session_keys(localPubKey, localPrivKey, jemPubKey)];
                    case 4:
                        _b = __read.apply(void 0, [_c.sent(), 2]), browserIKey = _b[0], browserOKey = _b[1];
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(justMsgBuf, nonceBuf, browserIKey)];
                    case 6:
                        decrypted = _c.sent();
                        return [2 /*return*/, decrypted];
                    case 7:
                        e_1 = _c.sent();
                        return [2 /*return*/, null];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // -- END OF API FUNCTIONS --
    JemService.prototype.handleRspEncrypt = function (rsp, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedEncRsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, jemPublic, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) {
                            return [2 /*return*/];
                        }
                        decodedEncRsp = null;
                        try {
                            decodedEncRsp = jemNGER.decode(decrypted);
                        }
                        catch (e) {
                            return [2 /*return*/];
                        }
                        if (decodedEncRsp == null || decodedEncRsp.kekEnc == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, decodedEncRsp.kekEnc];
                }
            });
        });
    };
    JemService.prototype.handleRspDecrypt = function (rsp, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedDecRsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, jemPublic, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) {
                            return [2 /*return*/];
                        }
                        decodedDecRsp = null;
                        try {
                            decodedDecRsp = jemNGDR.decode(decrypted);
                        }
                        catch (e) {
                            return [2 /*return*/];
                        }
                        if (decodedDecRsp == null || decodedDecRsp.kek == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, decodedDecRsp.kek];
                }
            });
        });
    };
    // Send PASETO Token request
    JemService.prototype.sendPasetoReq = function (devID, rspTopic, terminal, aud, duration, access, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var pasetoMsg, pContents, err, apiMsg, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pasetoMsg = jemNGRoot.lookupType("JEM_NG_API_PasetoReq");
                        pContents = pasetoMsg.lookupType("JEM_NG_API_PasetoReq").create();
                        pContents.aud = aud;
                        pContents.duration = duration;
                        pContents.accessLevel = access;
                        err = pasetoMsg.verify(pContents);
                        if (err) {
                            throw Error(err);
                        }
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = terminal;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(pasetoMsg.encode(pContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.pasetoReq = _b.sent();
                        this.sendApiReq("PASETO_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.handleRspPaseto = function (rsp, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decrypted, decodedPasetoRsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rsp.payload == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.decryptApiReq(rsp.payload, jemPublic, localPublic, localSecret)];
                    case 1:
                        decrypted = _a.sent();
                        if (decrypted == null) {
                            return [2 /*return*/];
                        }
                        decodedPasetoRsp = null;
                        try {
                            decodedPasetoRsp = jemNGPsR.decode(decrypted);
                        }
                        catch (e) {
                            return [2 /*return*/];
                        }
                        if (decodedPasetoRsp == null || decodedPasetoRsp.header == null || decodedPasetoRsp.payload == null || decodedPasetoRsp.signature == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, decodedPasetoRsp];
                }
            });
        });
    };
    JemService.prototype.sendEncReq = function (devID, rspTopic, terminal, kek, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var encReqMsg, encContents, err, apiMsg, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        encReqMsg = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_EncryptKeyReq");
                        encContents = encReqMsg.lookupType("JEM_NG_API_EncryptKeyReq").create();
                        encContents.kek = kek;
                        err = encReqMsg.verify(encContents);
                        if (err) {
                            throw Error(err);
                        }
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = terminal;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(encReqMsg.encode(encContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.encryptMsgReq = _b.sent();
                        this.sendApiReq("ENCRYPT_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.sendDecReq = function (devID, rspTopic, terminal, kekEnc, jemPublic, localPublic, localSecret) {
        return __awaiter(this, void 0, void 0, function () {
            var decReqMsg, decContents, err, apiMsg, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        decReqMsg = protobuf.Root.fromJSON(jemNGjson).lookupType("JEM_NG_API_DecryptKeyReq");
                        decContents = decReqMsg.lookupType("JEM_NG_API_DecryptKeyReq").create();
                        decContents.kekEnc = Buffer.from(kekEnc);
                        err = decReqMsg.verify(decContents);
                        if (err) {
                            throw Error(err);
                        }
                        apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                        apiMsg.terminal = terminal;
                        apiMsg.respTopic = rspTopic;
                        _a = apiMsg;
                        return [4 /*yield*/, this.encryptAPIReq(decReqMsg.encode(decContents).finish(), devID, jemPublic, localPublic, localSecret)];
                    case 1:
                        _a.decryptMsgReq = _b.sent();
                        this.sendApiReq("DECRYPT_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                        return [2 /*return*/];
                }
            });
        });
    };
    JemService.prototype.sendProvisionReq = function (devID, rspTopic, email, pubKey, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var apiMsg, provMsg, err;
            return __generator(this, function (_a) {
                apiMsg = jemNGRoot.lookupType("JEM_NG_API").create();
                apiMsg.terminal = false;
                apiMsg.respTopic = rspTopic;
                provMsg = jemNGRoot.lookupType("JEM_NG_API_ProvisionReq").create();
                apiMsg.provisionReq = provMsg;
                provMsg.jemEmailAddress = email;
                provMsg.pubKey = pubKey;
                provMsg.duration = duration;
                err = jemNGRoot.verify(provMsg);
                if (err) {
                    throw Error(err);
                }
                this.sendApiReq("SEND_PROVISION_REQUEST", apiMsg, ('device/' + devID + '/listen'));
                return [2 /*return*/];
            });
        });
    };
    JemService.ɵfac = function JemService_Factory(t) { return new (t || JemService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_websocket__WEBPACK_IMPORTED_MODULE_5__.WebSocketService)); };
    JemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: JemService, factory: JemService.ɵfac, providedIn: 'root' });
    return JemService;
}());



/***/ }),

/***/ 69122:
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStoreService": function() { return /* binding */ LocalStoreService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
    LocalStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
    return LocalStoreService;
}());



/***/ }),

/***/ 21218:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": function() { return /* binding */ NavigationService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.defaultMenu = [
            {
                name: 'Dashboard',
                description: 'Your JEM dashboard.',
                type: 'dropDown',
                icon: 'i-File-Horizontal-Text',
                state: '/dashboard/v2'
            }
        ];
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
    NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
    return NavigationService;
}());



/***/ }),

/***/ 43763:
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
    SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
    return SearchService;
}());



/***/ }),

/***/ 9131:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sidebar-helper.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarHelperService": function() { return /* binding */ SidebarHelperService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var SidebarHelperService = /** @class */ (function () {
    function SidebarHelperService() {
        this.sidenavInstances = [];
    }
    /**
     * Set sidenav
     *
     * @param id
     * @param instance
     */
    SidebarHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    /**
     * Get sidenav
     *
     * @param id
     * @returns {any}
     */
    SidebarHelperService.prototype.getSidenav = function (id) {
        return this.sidenavInstances[id];
    };
    SidebarHelperService.ɵfac = function SidebarHelperService_Factory(t) { return new (t || SidebarHelperService)(); };
    SidebarHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarHelperService, factory: SidebarHelperService.ɵfac, providedIn: 'root' });
    return SidebarHelperService;
}());



/***/ }),

/***/ 43711:
/*!**********************************************!*\
  !*** ./src/app/shared/services/websocket.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketService": function() { return /* binding */ WebSocketService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ 42835);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ 93105);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
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




'use strict';
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        this.callbacks = {};
        this.event = new events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    WebSocketService.prototype.connectToAPI = function (username, emailAddress) {
        return __awaiter(this, void 0, void 0, function () {
            function subscribeToAPI() {
                parent.APISocket = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__.webSocket)(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.WSSEndpoint);
                parent.APISocket.subscribe((function (message) {
                    parent.dispatch(message.event, message.data);
                }), // Called whenever there is a message from the server.
                function (// Called whenever there is a message from the server.
                err) {
                    // subscribeToAPI();
                    parent.event.emit('socket_reconnected');
                }, // Called if at any point WebSocket API signals some kind of error.
                function () {
                    parent.callbacks = {};
                } // Called when connection is closed (for whatever reason).
                );
                parent.API('browser_login', {
                    browserUser: username,
                    emailAddress: emailAddress
                });
            }
            var parent;
            return __generator(this, function (_a) {
                parent = this;
                subscribeToAPI();
                return [2 /*return*/];
            });
        });
    };
    WebSocketService.prototype.disconnectAPI = function (removeCallbacks) {
        if (removeCallbacks === void 0) { removeCallbacks = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.APISocket) {
                    this.APISocket.complete();
                }
                if (removeCallbacks)
                    this.callbacks = {};
                return [2 /*return*/];
            });
        });
    };
    WebSocketService.prototype.bind = function (event_name, callback) {
        this.callbacks[event_name] = this.callbacks[event_name] || [];
        this.callbacks[event_name].push(callback);
    };
    ;
    WebSocketService.prototype.dispatch = function (event_name, message) {
        var chain = this.callbacks[event_name];
        if (typeof chain == 'undefined')
            return; // no callbacks for this event
        for (var i = 0; i < chain.length; i++) {
            chain[i](message);
        }
        if ((event_name !== 'JEMSTATUS') && (event_name !== 'JEM_FIRMWARE') && (event_name !== 'getAllCredentials_RESPONSE'))
            delete (this.callbacks[event_name]);
    };
    WebSocketService.prototype.API = function (event_name, event_data) {
        var payload = { event: event_name, data: event_data };
        this.APISocket.next(payload); // <= send JSON data to socket server
        return this;
    };
    ;
    WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
    WebSocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });
    return WebSocketService;
}());



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/search/search.module */ 83834);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared-components.module */ 50933);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/shared-directives.module */ 72747);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ 81233);
/* harmony import */ var _detail_in_modal_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-in-modal/detail-in-modal.component */ 75716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule,
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__.SearchModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_detail_in_modal_detail_in_modal_component__WEBPACK_IMPORTED_MODULE_4__.DetailInModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule,
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.SharedPipesModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _components_search_search_module__WEBPACK_IMPORTED_MODULE_0__.SearchModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 22134:
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": function() { return /* binding */ Utils; }
/* harmony export */ });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return window && window.matchMedia('(max-width: 767px)').matches;
    };
    Utils.ngbDateToDate = function (ngbDate) {
        if (!ngbDate) {
            return null;
        }
        return new Date(ngbDate.month + "/" + ngbDate.day + "/" + ngbDate.year);
    };
    Utils.dateToNgbDate = function (date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    };
    Utils.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    Utils.genId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    Utils.isElectron = function () {
        if (typeof process !== "undefined" && process.versions.hasOwnProperty('electron'))
            return true;
        return false;
    };
    Utils.isMobileAgent = function () {
        var agent = navigator.userAgent || navigator.vendor || window.opera;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0, 4)));
    };
    return Utils;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_0__);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_ENDPOINT: 'https://stagingapi.jem.network/',
    WSSEndpoint: 'wss://stagingapi.jem.network/',
    jemProvPubKey: sodium_plus__WEBPACK_IMPORTED_MODULE_0__.X25519PublicKey.from("058F234321CAF1FE931336CF23079C58BF053278574FB5A43F3FDBE15330F014", 'hex')
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });
/**
 * Only for the demo purpose
 */
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production && document) {
    var script = document.createElement('script');
    script.innerHTML = "\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '2268386293237836');\n    fbq('track', 'PageView');";
    document.head.appendChild(script);
}


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 45622:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/cred-detail-in-modal/credentialForm.json ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"_id":"61c8f960dd38c425526ae5d0","type":"form","tags":[],"owner":"61bf7916dd38c409cbe95a46","components":[{"theme":"warning","customClass":"text-center","collapsible":false,"key":"panel1","conditional":{"show":true,"when":"showPressJEMMessage","eq":"true"},"type":"panel","label":"Panel","input":false,"tableView":false,"components":[{"html":"<h2 style=\\"text-align:center;\\">Press JEM&nbsp;</h2><h4 style=\\"text-align:center;\\">to turn it on and verify your fingerprint</h4><p style=\\"text-align:center;\\">&nbsp;</p><p style=\\"text-align:center;\\">&nbsp;</p>","label":"Content","refreshOnChange":false,"key":"content3","type":"content","input":false,"tableView":false},{"label":"HTML","tag":"div","className":"spinner-glow spinner-glow-primary mr-4 align-self-center text-center","attrs":[{"attr":"","value":""}],"refreshOnChange":false,"key":"html1","type":"htmlelement","input":false,"tableView":false},{"html":"<h2 style=\\"text-align:center;\\">&nbsp;</h2><p style=\\"text-align:center;\\">We need your JEM to decrypt your password</p>","label":"Content","refreshOnChange":false,"key":"content4","type":"content","input":false,"tableView":false}]},{"title":"Credential Details","customClass":"jempass-formio-panel","collapsible":false,"key":"panel","conditional":{"show":false,"when":"showPressJEMMessage","eq":"true"},"type":"panel","label":"Credential Details","input":false,"tableView":false,"components":[{"legend":"stateData","hidden":true,"key":"fieldSet1","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"label":"isModeEdit","tableView":false,"defaultValue":false,"key":"isModeEdit","type":"checkbox","input":true},{"label":"isMfaConfigured","disabled":true,"tableView":false,"defaultValue":false,"calculateValue":"value = !!data.totpSeed","key":"isMfaConfigured","type":"checkbox","input":true},{"label":"isDecrypted","tableView":false,"key":"isDecrypted","type":"checkbox","input":true,"defaultValue":false},{"label":"showPasswordGenerator","tableView":false,"key":"showPasswordGenerator","type":"checkbox","input":true,"defaultValue":false},{"label":"decrypting","tableView":false,"key":"decrypting","type":"checkbox","input":true,"defaultValue":false},{"label":"saving","tableView":false,"key":"saving","type":"checkbox","input":true,"defaultValue":false},{"label":"showPressJEMMessage","tableView":false,"defaultValue":false,"clearOnHide":false,"calculateValue":"value = (data.decrypting || data.saving)","key":"showPressJEMMessage","type":"checkbox","input":true}]},{"key":"fieldSet","logic":[{"name":"disableEditsInViewMode","trigger":{"type":"simple","simple":{"show":true,"when":"isModeEdit","eq":"false"}},"actions":[{"name":"setPropDisabledToTrue","type":"property","property":{"label":"Disabled","value":"disabled","type":"boolean"},"state":true}]},{"name":"enableEditsInEditMode","trigger":{"type":"simple","simple":{"show":true,"when":"isModeEdit","eq":"true"}},"actions":[{"name":"setPropDisabledToFalse","type":"property","property":{"label":"Disabled","value":"disabled","type":"boolean"},"state":false}]}],"type":"fieldset","label":"metaData","input":false,"tableView":false,"components":[{"label":"Title","tableView":true,"key":"title","type":"textfield","input":true},{"label":"Website/App Domain","suffix":"www","tableView":true,"key":"url","type":"textfield","input":true},{"label":"Username","suffix":"@","tableView":true,"key":"username","type":"textfield","input":true}]},{"html":"<p style=\\"text-align:center;\\"><strong>Unlock record to view password and other details. You will need your JEM.</strong></p>","label":"Content","refreshOnChange":false,"hidden":true,"key":"content","type":"content","input":false,"tableView":false},{"label":"HTML","tag":"btn-loading","attrs":[{"attr":"","value":""}],"refreshOnChange":false,"key":"html","type":"htmlelement","input":false,"tableView":false},{"label":"Encrypted: Click to Decrypt","action":"event","showValidations":false,"theme":"success","size":"lg","block":true,"customClass":"mt-3","tableView":false,"key":"passwordFieldButton","type":"button","event":"passwordFieldButtonClick","input":true},{"label":"MFA Code","disabled":true,"tableView":true,"persistent":false,"key":"mfaCode1","conditional":{"show":true,"when":"isDecrypted","eq":"true"},"type":"textfield","input":true},{"label":"Tabs","components":[{"label":"Password","key":"passwordPanel","components":[{"key":"fieldSet6","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"html":"<p><strong>Currently in read only mode. To edit this credential – e.g., to update your password – click the Edit button below.&nbsp;</strong></p>","label":"Content","refreshOnChange":false,"key":"content9","type":"content","input":false,"tableView":false},{"label":"Change/Update Details","action":"event","showValidations":false,"block":true,"tableView":false,"key":"editCredButton5","conditional":{"show":true,"when":"isModeEdit","eq":"false"},"type":"button","event":"editCredButtonClick","input":true}]},{"hidden":true,"key":"passData","conditional":{"show":true,"when":"isDecrypted","eq":"true"},"type":"fieldset","label":"passData","input":false,"tableView":false,"components":[{"label":"Password","tableView":true,"key":"password","addons":[{"name":"passwordStrength","settings":{"data":{"levels":[{"name":"Low","maxEntropy":28,"style":"danger","color":""},{"name":"Medium","maxEntropy":45,"style":"warning","color":""},{"name":"High","maxEntropy":59,"style":"info","color":""},{"name":"Very High","maxEntropy":85,"style":"success","color":""}],"updateOn":"levelChange","rulesSettings":[{"name":"length","required":false,"message":"Value should be longer","errorMessage":""},{"name":"upperCase","required":false,"message":"Value should have uppercase letters","errorMessage":""},{"name":"numeric","required":false,"message":"Value should have numeric symbols","errorMessage":""},{"name":"lowerCase","required":false,"message":"Value should be have lowercase letters","errorMessage":""},{"name":"symbols","required":false,"message":"Value should have symbols","errorMessage":""}],"customRules":[],"isValid":"","required":true,"blackList":[],"customBlackListedWords":"","disableBlacklistedWords":false,"location":{"insert":"after","selector":"[ref=\\"element\\"]"},"template":"\\n          <div class=\\"formio-security-indicator\\">\\n            {% if (!ctx.readOnly && !ctx.pristine) { %}\\n              <div\\n                title=\\"{{ctx.t(ctx.tooltip)}}\\"\\n                class=\\"security-{{ctx.levelName}} {{ ctx.level.style ? \'bg-\' + ctx.level.style : \'\'}}\\"\\n                style=\\"{{ctx.level.color ? \'background-color: \' + ctx.level.color + \';\' : \'\'}}\\"\\n              ></div>\\n            {% } %}\\n          </div>\\n        "},"metadata":{}}}],"type":"textfield","input":true},{"label":"Generate a New Password","showValidations":false,"theme":"default","size":"sm","tableView":false,"key":"changePassword","type":"button","input":true,"saveOnEnter":false},{"label":"Columns","columns":[{"components":[{"label":"Select Boxes","optionsLabelPosition":"right","customClass":"ml-4","tableView":false,"defaultValue":{"upperCaseChar":false,"lowercaseChar":false,"numerals":false,"specialChar":false,"upperCase":false,"lowerCase":false},"values":[{"label":"A-Z","value":"upperCase","shortcut":""},{"label":"a-z","value":"lowerCase","shortcut":""}],"key":"selectBoxes1","type":"selectboxes","input":true,"inputType":"checkbox"}],"width":6,"offset":0,"push":0,"pull":0,"size":"md","currentWidth":6},{"components":[{"label":"Select Boxes","optionsLabelPosition":"right","tableView":false,"defaultValue":{"lowercaseChar":false,"numerals":false,"specialChar":false,"symbols":false},"values":[{"label":"0-9","value":"numerals","shortcut":""},{"label":"Symbols","value":"symbols","shortcut":""}],"key":"selectBoxes2","type":"selectboxes","input":true,"inputType":"checkbox"}],"width":6,"offset":0,"push":0,"pull":0,"size":"md","currentWidth":6}],"autoAdjust":true,"key":"columns1","type":"columns","input":false,"tableView":false},{"label":"Here\'s a Strong Password","tableView":true,"key":"aStrongPassword","type":"textfield","input":true},{"label":"Accept Generated Password","showValidations":false,"block":true,"tableView":false,"key":"acceptThisPasswordUpdate","type":"button","input":true,"saveOnEnter":false}]}]},{"label":"MFA","key":"mfaPanel","components":[{"key":"fieldSet4","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"html":"<p><strong>Currently in read only mode. To edit this credential – e.g., to update your password – click the Edit button below.&nbsp;</strong></p>","label":"Content","refreshOnChange":false,"key":"content5","type":"content","input":false,"tableView":false},{"label":"Configure MFA","action":"event","showValidations":false,"block":true,"tableView":false,"key":"editCredButton3","conditional":{"show":true,"when":"isModeEdit","eq":"false"},"type":"button","event":"editCredButtonClick","input":true},{"hidden":true,"key":"passData1","conditional":{"show":true,"when":"isDecrypted","eq":"true"},"type":"fieldset","label":"passData","input":false,"tableView":false,"components":[{"label":"MFA Seed (TOTP)","tooltip":"String of characters used as the basis for generating your MFA Codes.\\nYou can get this from your service provider, usually from the security page of your user settings. ","hidden":true,"tableView":true,"clearOnHide":false,"key":"totpSeed1","type":"textfield","input":true},{"label":"Delete MFA","action":"event","showValidations":false,"theme":"warning","size":"sm","tableView":false,"key":"deleteMfaConfigButton1","conditional":{"show":true,"when":"isMfaConfigured","eq":"true"},"type":"button","event":"deleteMfaConfigButtonClick","input":true,"saveOnEnter":false}]}]}]},{"label":"Help","key":"helpPanel","components":[{"key":"fieldSet2","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"html":"<p><strong>Currently in read only mode. To edit this credential – e.g., to update your password – click the Edit button below.&nbsp;</strong></p>","label":"Content","refreshOnChange":false,"key":"content1","type":"content","input":false,"tableView":false},{"label":"Edit","action":"event","showValidations":false,"block":true,"tableView":false,"key":"editCredButton1","conditional":{"show":true,"when":"isModeEdit","eq":"false"},"type":"button","event":"editCredButtonClick","input":true},{"html":"<p>Use the Password Panel to change your password. Use the embedded Password Generator tool to create a strong password.</p><p>JEMPass can also generate one time MFA codes for your accounts. Use the MFA Panel to configure JEMPass to generate one time MFA codes, or to delete your configuration.</p>","label":"Content","customClass":"mx-0 px-0","refreshOnChange":false,"key":"content2","type":"content","input":false,"tableView":false}]}]}],"key":"tabs1","conditional":{"show":true,"when":"isModeEdit","eq":"true"},"type":"tabs","input":false,"tableView":false},{"customClass":"modal-footer mt-5 pb-0 mb-0","key":"fieldSet3","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"label":"Columns","columns":[{"components":[{"label":"Close","showValidations":false,"theme":"secondary","block":true,"tableView":false,"key":"close","conditional":{"show":true,"when":"isModeEdit","eq":"false"},"type":"button","input":true,"saveOnEnter":false},{"label":"Cancel","action":"event","showValidations":false,"theme":"warning","block":true,"tableView":false,"key":"cancelEditsButton","conditional":{"show":true,"when":"isModeEdit","eq":"true"},"type":"button","event":"cancelEditsButtonClick","input":true}],"width":6,"offset":0,"push":0,"pull":0,"size":"xs","currentWidth":6},{"components":[{"label":"Edit","action":"event","showValidations":false,"customClass":"float-right pl-3","tableView":false,"key":"edit","conditional":{"show":true,"when":"isModeEdit","eq":"false"},"type":"button","event":"credEditButtonClick","input":true},{"label":"Save","action":"event","showValidations":false,"block":true,"customClass":"float-right pl-3","tableView":false,"key":"saveCredButton","conditional":{"show":true,"when":"isModeEdit","eq":"true"},"type":"button","event":"saveCredButtonClick","input":true}],"width":6,"offset":0,"push":0,"pull":0,"size":"xs","currentWidth":6}],"customClass":"justify-content-between","key":"columns2","type":"columns","input":false,"tableView":false}]}]}],"revisions":"","_vid":0,"title":"v4credentialDetails","display":"form","access":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":["61bf797f245b7059efd6b695","61bf797f245b703368d6b69a","61bf797f245b7019fed6b69f"],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"submissionAccess":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":[],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"controller":"","properties":{},"settings":{},"name":"v4credentialDetails","path":"v4credentialdetails","project":"61bf797f245b70c9bfd6b68e","created":"2021-12-26T23:23:12.094Z","modified":"2021-12-30T14:36:03.458Z","machineName":"fizlpoaklnedkaa:v4credentialDetails"}');

/***/ }),

/***/ 64327:
/*!**************************!*\
  !*** ./src/blecomm.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"nested":{"DevStateEnum":{"values":{"NO_STATE_REPORTED":0,"UNPROVISIONED_NO_FINGER":1,"UNPROVISIONED_WITH_FINGER":2,"READY_NO_FINGER":3,"READY_WITH_FINGER":4}},"EnrollReqEnum":{"values":{"ENROLL_REQ_RES_0":0,"ENROLL":1}},"EnrollRspEnum":{"values":{"ENROLL_RSP_RES_0":0,"ENROLL_SUCCESS":1,"ENROLL_FAIL_GENERIC":2}},"JEM_NG":{"oneofs":{"msg":{"oneof":["connect","disconnect","api","keys","dfu","blink"]}},"fields":{"connect":{"type":"JEM_NG_Connect","id":1},"disconnect":{"type":"uint32","id":2},"api":{"type":"JEM_NG_API","id":3},"keys":{"type":"JEM_NG_Load_Keys","id":4},"dfu":{"type":"uint32","id":5},"blink":{"type":"JEM_NG_Blink","id":1024}}},"JEM_NG_Connect":{"fields":{"tsSig":{"type":"bytes","id":1},"channelBase":{"type":"bytes","id":2},"devState":{"type":"DevStateEnum","id":3},"mtuSize":{"type":"uint32","id":4},"info":{"type":"string","id":5}}},"JEM_NG_Load_Keys":{"fields":{"userEncPrivKeyEnc":{"type":"bytes","id":1},"userSigPrivKeyEnc":{"type":"bytes","id":2},"vekKeyEnc":{"type":"bytes","id":3}}},"JEM_NG_Blink":{"fields":{"red":{"type":"uint32","id":1},"green":{"type":"uint32","id":2},"blue":{"type":"uint32","id":3}}},"JEM_NG_API":{"oneofs":{"API":{"oneof":["encryptMsgReq","encryptMsgRsp","decryptMsgReq","decryptMsgRsp","pasetoReq","pasetoRsp","provisionReq","provisionRsp","provisionAck","provisionRecReq","provisionRecRsp","provisionUpdateReq","provisionOutputReq","provisionOutputRsp","addClientReq","addClientVerify","addClientRepeat","addClientVerifyRsp","enrollReq","enrollRsp","errorRsp"]}},"fields":{"terminal":{"type":"bool","id":1},"respTopic":{"type":"string","id":16},"encryptMsgReq":{"type":"JEM_NG_Encrypted_API_Msg","id":2},"encryptMsgRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":3},"decryptMsgReq":{"type":"JEM_NG_Encrypted_API_Msg","id":4},"decryptMsgRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":5},"pasetoReq":{"type":"JEM_NG_Encrypted_API_Msg","id":6},"pasetoRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":7},"provisionReq":{"type":"JEM_NG_API_ProvisionReq","id":17},"provisionRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":18},"provisionAck":{"type":"JEM_NG_Encrypted_API_Msg","id":19},"provisionRecReq":{"type":"JEM_NG_Encrypted_API_Msg","id":20},"provisionRecRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":21},"provisionUpdateReq":{"type":"JEM_NG_Encrypted_API_Msg","id":22},"provisionOutputReq":{"type":"JEM_NG_Encrypted_API_Msg","id":23},"provisionOutputRsp":{"type":"JEM_NG_API_ProvisionOutputRsp","id":24},"addClientReq":{"type":"JEM_NG_API_AddClientReq","id":25},"addClientVerify":{"type":"JEM_NG_Encrypted_API_Msg","id":26},"addClientRepeat":{"type":"bool","id":27},"addClientVerifyRsp":{"type":"JEM_NG_Encrypted_API_Msg","id":28},"enrollReq":{"type":"EnrollReqEnum","id":30},"enrollRsp":{"type":"EnrollRspEnum","id":31},"errorRsp":{"type":"JEM_NG_API_ErrorRsp","id":40}}},"JEM_NG_API_ErrorRsp":{"fields":{"errCode":{"type":"uint32","id":1},"errDetails":{"type":"string","id":2}}},"JEM_NG_Encrypted_API_Msg":{"fields":{"clientPubKey":{"type":"bytes","id":3},"payload":{"type":"bytes","id":2}},"reserved":[[1,1]]},"JEM_NG_API_ProvisionReq":{"fields":{"jemEmailAddress":{"type":"string","id":1},"pubKey":{"type":"bytes","id":3},"additionalDevice":{"type":"bool","id":4},"duration":{"type":"uint32","id":5}},"reserved":[[2,2]]},"JEM_NG_API_ProvisionRsp":{"fields":{"cpeIDKey":{"type":"bytes","id":1},"metaKey":{"type":"bytes","id":2},"userEncPrivKeyEnc":{"type":"bytes","id":3},"userSigPrivKeyEnc":{"type":"bytes","id":4},"userEncPubKey":{"type":"bytes","id":5},"userSigPubKey":{"type":"bytes","id":6},"devEncPubKey":{"type":"bytes","id":7},"devSigPubKey":{"type":"bytes","id":8},"vekKeyEnc":{"type":"bytes","id":9}}},"JEM_NG_API_ProvisionRecoveryReq":{"fields":{"userRecoveryKey":{"type":"bytes","id":1}}},"JEM_NG_API_ProvisionRecoveryRsp":{"fields":{"userEncPrivKeyEnc":{"type":"bytes","id":1},"userSigPrivKeyEnc":{"type":"bytes","id":2}}},"JEM_NG_API_ProvisionUpdateReq":{"fields":{"userEncPrivKey":{"type":"bytes","id":1},"userSigPrivKey":{"type":"bytes","id":2},"userEncPubKey":{"type":"bytes","id":3},"userSigPubKey":{"type":"bytes","id":4},"vekKey":{"type":"bytes","id":5}}},"JEM_NG_API_ProvisionAck":{"fields":{"provisionFinalize":{"type":"bool","id":1}}},"JEM_NG_API_ProvisionOutputReq":{"fields":{"newDevEncPubKey":{"type":"bytes","id":1}}},"JEM_NG_API_ProvisionOutputRsp":{"fields":{"devEncPubKey":{"type":"bytes","id":1},"payload":{"type":"bytes","id":2}}},"JEM_NG_API_EncryptKeyReq":{"fields":{"kek":{"type":"bytes","id":1}}},"JEM_NG_API_EncryptKeyRsp":{"fields":{"kekEnc":{"type":"bytes","id":1}}},"JEM_NG_API_DecryptKeyReq":{"fields":{"kekEnc":{"type":"bytes","id":1}}},"JEM_NG_API_DecryptKeyRsp":{"fields":{"kek":{"type":"bytes","id":1}}},"JEM_NG_API_PasetoReq":{"fields":{"aud":{"type":"string","id":1},"duration":{"type":"uint32","id":2},"accessLevel":{"type":"uint32","id":3}}},"JEM_NG_API_PasetoRsp":{"fields":{"header":{"type":"bytes","id":1},"payload":{"type":"bytes","id":2},"signature":{"type":"bytes","id":3},"metaKey":{"type":"bytes","id":4}}},"JEM_NG_API_AddClientReq":{"fields":{"pubKey":{"type":"bytes","id":2}},"reserved":[[1,1]]},"JEM_NG_API_AddClientVerify":{"fields":{"verification":{"type":"bytes","id":1},"duration":{"type":"uint32","id":2}}},"JEM_NG_API_AddClientVerifyRsp":{"fields":{"result":{"type":"uint32","id":1},"metaKey":{"type":"bytes","id":2}}}}}');

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 89214:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 22263:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 8623:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 20131:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 16026:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 75992:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 78110:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 28325:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 6384:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 84574:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 52361:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 94616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map