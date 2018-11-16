(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    },
    {
        path: 'reserve',
        component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__["ReserveComponent"]
    },
    {
        path: 'reserve/:id',
        component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__["ReserveComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Observable } from 'rxjs/Rx';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-malihu-scrollbar */ "./node_modules/ngx-malihu-scrollbar/dist/lib/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//Service imports

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
                _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_15__["ReserveComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["myDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_4__["MalihuScrollbarModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        //return lab data from DB
        this.labs = [
            'Raspberry Pi 3', 'Router', 'Alexa'
        ];
        //return hours for selected date from DB
        this.hours = [
            { hrs: '01:30 - 02:00', available: true },
            { hrs: '02:00 - 02:30', available: true },
            { hrs: '02:30 - 03:00', available: true },
            { hrs: '03:00 - 03:30', available: false },
            { hrs: '03:30 - 04:00', available: true },
            { hrs: '04:00 - 04:30', available: false },
            { hrs: '04:30 - 05:00', available: true },
            { hrs: '05:00 - 05:30', available: true },
            { hrs: '05:30 - 06:00', available: true },
            { hrs: '06:00 - 06:30', available: false },
            { hrs: '06:30 - 07:00', available: true },
            { hrs: '07:00 - 07:30', available: true },
            { hrs: '07:30 - 08:00', available: true },
            { hrs: '08:00 - 08:30', available: false },
            { hrs: '08:30 - 09:00', available: true },
            { hrs: '09:00 - 09:30', available: true },
            { hrs: '09:30 - 10:00', available: true },
        ];
    }
    DataService.prototype.myData = function () {
        return this.labs;
    };
    DataService.prototype.myHours = function () {
        return this.hours;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-jumbo{\r\n    background: #FFFFFF; \r\n    margin-top: 25px; \r\n    padding: 20px; \r\n    opacity: 0.9;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=”container”>     \n    <div class=”template”>  \n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"custom-jumbo\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"labId\">Select Lab</label>\n                            <select class=\"form-control\" id=\"labId\" [(ngModel)]=\"labId\" name=\"labId\" required>\n                                <option *ngFor=\"let pow of myLabs\" [value]=\"pow\">{{pow}}</option>\n                            </select>\n                        </div>\n                        <!-- <pre>Model: {{ myLabs.lab | json }}</pre>  -->\n                    \n                        <div class=\"form-group\" myHeader1>\n                            <label for=\"attuid\" >Email</label>\n                            <tag-input [(ngModel)]=\"attuid\" id=\"attuid\" name=\"attuid\" placeholder=\"Enter Email\">\n                                <tag-input-dropdown [autocompleteObservable]='requestAutocompleteItems'></tag-input-dropdown>\n                            </tag-input>\n                        </div>              \n                        \n                        \n                        \n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                        name=\"d2\" #c2=\"ngModel\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" required>\n                                <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\">\n                                    <img src=\"./assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                                </button>\n                                </div>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-success btn-block reserve-btn\" type=\"button\" (click)=\"searchme()\">Search</button>\n                        \n                    </form> \n                </div>>\n                                         \n            </div>\n            <div class=\"col-md-3 pull-right\" *ngIf=\"showVar\" style=\"width:250px !important;\" [@slideInOut]=\"menuState\">\n                <div class=\"custom-jumbo\">\n                Select Time Range \n                \n                <hr>\n                <div class=\"pull-right\" malihu-scrollbar [scrollbarOptions]=\"scrollbarOptions\" style=\"max-height: 300px;\">               \n                  <!-- \n                      <ul> \n                        <li class=\"orange\"><a href=\"#\">Download</a></li>\n                        <li class=\"blue\"><a href=\"#\">Download</a></li> \n                        <li class=\"green\"><a href=\"#\">Download</a></li> \n                        <li class=\"purple\"><a href=\"#\">Download</a></li> \n                        <li class=\"gold\"><a href=\"#\">Download</a></li> \n                    </ul>\n                  -->\n                  \n                      <ul class=\"listUL\">\n                       <!-- <div *ngFor=\"let hr of myHours\">\n                            <li *ngIf=\"hr.available\" [ngClass]=\"{'listLI green':hr.available}\">\n                                <a href=\"#\">\n                                  <div class=\"pretty p-default p-round p-smooth p-success-o\">\n                                      <input type=\"checkbox\"/>\n                                      <div class=\"state p-success-o\">\n                                          <label>{{ hr.hrs }} Available </label>\n                                      </div>\n                                  </div>\n                                </a>\n                              </li>\n                              <li *ngIf=\"!hr.available\" [ngClass]=\"{'listLI orange':!hr.available}\">\n                                  <a href=\"#\">\n                                    <div class=\"pretty p-default p-round p-smooth p-danger-o\">\n                                        <input type=\"checkbox\" disabled/>\n                                        <div class=\"state p-danger-o\">\n                                            <label>{{ hr.hrs }}  Reserved </label>\n                                        </div>\n                                    </div>\n                                  </a>\n                                </li>\n                        </div>\n                    -->\n                    <div *ngFor=\"let hr of myHours;\">\n                     \n                        <li  class=\"listLI\">\n                            <a href=\"#\">\n                              <div class=\"pretty p-default p-round p-smooth\">\n                                  <input type=\"checkbox\" (change)=\"onChangeCategory($event, hr)\"/>\n                                                                        \n                                  <div class=\"state\">\n                                      <label>{{ hr }} Available </label>\n                                  </div>\n                              </div>\n                            </a>\n                        </li>\n        \n\n                        \n                    </div>\n\n\n                      </ul>\n\n                </div>\n                <hr>\n                <button class=\"btn btn-success btn-block reserve-btn\" type=\"button\" (click)=\"reserve()\">Reserve Now</button>\n            </div>\n        </div>\n        <div class=\"col-md-3 pull-right\" *ngIf=\"showSucc\" style=\"width:250px !important; height:100px !important; \">\n            <div class=\"custom-jumbo\">\n                {{ status }}                \n                <hr>                \n                \n            </div>\n        </div>\n        </div>\n     \n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: myDirective, HomeComponent, NgbdDatepickerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDirective", function() { return myDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerAdapter", function() { return NgbdDatepickerAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var myDirective = /** @class */ (function () {
    function myDirective(el) {
        el.nativeElement.backgroundColor = 'red';
    }
    myDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myHeader1]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], myDirective);
    return myDirective;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, http, formBuilder) {
        this.dataService = dataService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.myLabs = [];
        this.myHours = [];
        this.showVar = false;
        this.showSucc = false;
        this.selectedHour = { "hours": [] };
        this.userData = { "users": [] };
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckCircle"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheck"];
        this.menuState = 'out';
        this.apiAllUrl = 'http://localhost:8080/api/';
        this.scrollbarOptions = { axis: 'y', theme: 'dark', scrollButtons: { enable: true } };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.myLabs = this.dataService.myData();
        this.myHours = this.dataService.myHours();
    };
    HomeComponent.prototype.searchme = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.getHrs();
    };
    HomeComponent.prototype.getIndex = function (index) {
        return index;
    };
    HomeComponent.prototype.reserve = function () {
        this.saveLab();
    };
    HomeComponent.prototype.getHrs = function () {
        var _this = this;
        console.log(this.labId);
        this.selectedDate = this.model2.year + '-' + ("0" + (this.model2.month)).slice(-2) + '-' + ("0" + this.model2.day).slice(-2);
        this.http.get(this.apiAllUrl + 'availableHours?selectedDate=' + this.selectedDate + '&labId=' + this.labId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }))
            .subscribe(function (data) {
            _this.myHours = data.availableHours;
            _this.showVar = true;
            _this.showSucc = false;
        }, function (err) { return console.error(err); }, function () { return console.log(); });
    };
    HomeComponent.prototype.onChangeCategory = function (event, hr) {
        if (event.target.checked) {
            this.selectedHour.hours.push(hr);
        }
        else {
            var index = this.selectedHour.hours.findIndex(function (x) { return x.value == hr; });
            this.selectedHour.hours.splice(index, 1);
            ;
        }
    };
    HomeComponent.prototype.saveLab = function () {
        var _this = this;
        this.selectedDate = this.model2.year + '-' + ("0" + (this.model2.month)).slice(-2) + '-' + ("0" + this.model2.day).slice(-2);
        for (var _i = 0, _a = this.attuid; _i < _a.length; _i++) {
            var uid = _a[_i];
            this.userData.users.push(uid.value);
        }
        this.http.post(this.apiAllUrl + 'reserve', {
            lab: this.labId,
            selectedDate: this.selectedDate,
            selectedHour: this.selectedHour,
            userData: this.userData
        })
            .subscribe(function (res) {
            _this.status = res.json().status + ': ' + res.json().message;
            _this.showSucc = true;
        }, function (err) {
            console.log("Error occured");
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());

var NgbdDatepickerAdapter = /** @class */ (function () {
    function NgbdDatepickerAdapter() {
    }
    Object.defineProperty(NgbdDatepickerAdapter.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    NgbdDatepickerAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-adapter',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }]
        })
    ], NgbdDatepickerAdapter);
    return NgbdDatepickerAdapter;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" style=\"background: #000000;\">\n\n  <a class=\"navbar-brand\" href=\"#\">BookMyLab</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" [ngbCollapse]=\"isCollapsed\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" routerLink=\"\">Home\n\n          <span class=\"sr-only\">(current)</span>\n\n        </a>\n\n      </li>\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" routerLink=\"registration\">Schedule</a>\n\n      </li>\n    \n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"reserve\">Schedule</a>\n      </li>\n      -->\n    </ul>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n\n    </form>\n\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    background: #FFFFFF;\r\n}\r\n\r\n.myEditForm{\r\n    background: #FFFFFF !important;\r\n    padding: 25px;\r\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=”container”>\n  \n  <div class=\"reglist\">\n\n    <table class=\"table table-striped\">\n\n      <thead>\n\n        <tr>\n\n          <th>#</th>\n\n          <th>Lab</th>\n\n          <th>Attendees email</th>\n\n          <th>Scheduled Date</th>\n\n          <th></th>\n\n          <th></th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor=\"let registration of registrations; let i = index\">\n\n          <th scope=\"row\">{{ i + 1 }}</th>\n\n          <td>{{ registration.labname }}</td>\n\n          <td>{{ registration.email }}</td>\n\n          <td>{{ registration.scheduleDate.day + '/' + registration.scheduleDate.month + '/' + registration.scheduleDate.year}}</td>\n\n          <td>\n\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"onEdit(i)\">Edit</button>\n\n          </td>\n\n          <td>\n\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(i)\">Delete</button>\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n    <div class=\"text-right\">\n\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onNew()\">New</button>\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <div class=\"col-md-6 regentry myEditForm\" *ngIf=\"showNew\">\n\n    <form (ngSubmit)=\"onSave()\">\n      <div class=\"form-group row\">\n\n        <label for=\"labname-input\" class=\"col-2 col-form-label\">Lab Name</label>\n\n        <div class=\"col-10\">\n\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"regModel.labname\" name=\"labname\">\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group row\">\n\n        <label for=\"email-input\" class=\"col-2 col-form-label\">email</label>\n\n        <div class=\"col-10\">\n\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"regModel.email\" name=\"email\">\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group row\">\n\n        <label for=\"scheduleDate-input\" class=\"col-2 col-form-label\">DOB</label>\n\n        <div class=\"col-3 input-group\">\n\n          <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"scheduleDate\" [(ngModel)]=\"regModel.scheduleDate\" ngbDatepicker #scheduleDate=\"ngbDatepicker\">\n\n          <button class=\"input-group-addon\" (click)=\"scheduleDate.toggle()\" type=\"button\">\n\n            <img src=\"./assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n\n          </button>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\">{{submitType}}</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Registration = /** @class */ (function () {
    function Registration(labname, email, scheduleDate) {
        if (labname === void 0) { labname = ''; }
        if (email === void 0) { email = ''; }
        if (scheduleDate === void 0) { scheduleDate = null; }
        this.labname = labname;
        this.email = email;
        this.scheduleDate = scheduleDate;
    }
    return Registration;
}());
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        // Add default registration data.
        // It maintains list of Registrations
        this.registrations = [];
        // It maintains registration form display status. By default it will be false.
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = 'Save';
        // It maintains Array of countries.
        this.Labs = [
            'Raspberry Pi 3', 'Router', 'Alexa'
        ];
        this.registrations.push(new Registration('Raspberry Pi 3', 'prashanth@gmail.com', { year: 2018, month: 5, day: 12 }));
        this.registrations.push(new Registration('Router', 'prashanth@gmail.com', { year: 2018, month: 12, day: 3 }));
        this.registrations.push(new Registration('Alexa', 'prashanth@gmail.com', { year: 2018, month: 7, day: 25 }));
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    // This method associate to New Button.
    RegistrationComponent.prototype.onNew = function () {
        // Initiate new registration.
        this.regModel = new Registration();
        // Change submitType to 'Save'.
        this.submitType = 'Save';
        // display registration entry section.
        this.showNew = true;
    };
    // This method associate to Save Button.
    RegistrationComponent.prototype.onSave = function () {
        if (this.submitType === 'Save') {
            // Push registration model object into registration list.
            this.registrations.push(this.regModel);
        }
        else {
            // Update the existing properties values based on model.
            this.registrations[this.selectedRow].labname = this.regModel.labname;
            this.registrations[this.selectedRow].email = this.regModel.email;
            this.registrations[this.selectedRow].scheduleDate = this.regModel.scheduleDate;
        }
        // Hide registration entry section.
        this.showNew = false;
    };
    // This method associate to Edit Button.
    RegistrationComponent.prototype.onEdit = function (index) {
        // Assign selected table row index.
        this.selectedRow = index;
        // Initiate new registration.
        this.regModel = new Registration();
        // Retrieve selected registration from list and assign to model.
        this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
        // Change submitType to Update.
        this.submitType = 'Update';
        // Display registration entry section.
        this.showNew = true;
    };
    // This method associate to Delete Button.
    RegistrationComponent.prototype.onDelete = function (index) {
        // Delete the corresponding registration entry from the list.
        this.registrations.splice(index, 1);
    };
    // This method associate to Cancel Button.
    RegistrationComponent.prototype.onCancel = function () {
        // Hide registration entry section.
        this.showNew = false;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/reserve/reserve.component.css":
/*!***********************************************!*\
  !*** ./src/app/reserve/reserve.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reserve/reserve.component.html":
/*!************************************************!*\
  !*** ./src/app/reserve/reserve.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=”container”>\n\n  <div class=”template”>\n  \n  <h1>Reserve you Lab here</h1>\n  \n  </div>\n  \n  </div>\n"

/***/ }),

/***/ "./src/app/reserve/reserve.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reserve/reserve.component.ts ***!
  \**********************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReserveComponent = /** @class */ (function () {
    function ReserveComponent() {
    }
    ReserveComponent.prototype.ngOnInit = function () {
    };
    ReserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! ./reserve.component.html */ "./src/app/reserve/reserve.component.html"),
            styles: [__webpack_require__(/*! ./reserve.component.css */ "./src/app/reserve/reserve.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pp244a\Desktop\programs\bookmylab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map