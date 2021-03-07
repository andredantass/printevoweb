function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error4/error4.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error4/error4.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorError4Error4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0\">\r\n  <div class=\"d-flex align-self-center align-items-center p-5\">\r\n    <div class=\"icon d-flex justify-content-center align-items-center\">\r\n      <img src=\"assets/images/server.svg\" alt=\"\">\r\n    </div>\r\n    <div class=\"ml-5\">\r\n      <div class=\"error-number fw-100 text-warning\">Page not found :(</div>\r\n      <h6 class=\"fw-300 mb-1 mt-1\">Error 404</h6>\r\n      <small class=\"fw-300 d-block mb-1\">Sorry, but the page you were trying to view does not exist.</small>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Take me home</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error5/error5.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error5/error5.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorError5Error5ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0\">\r\n  <div class=\"d-flex align-self-center align-items-center p-5\">\r\n    <div class=\"icon d-flex justify-content-center align-items-center\">\r\n      <img src=\"assets/images/server.svg\" alt=\"\">\r\n    </div>\r\n    <div class=\"ml-5\">\r\n      <div class=\"error-number fw-100 text-danger\">Internal server failure :(</div>\r\n      <h6 class=\"fw-300 mb-1 mt-1\">Error 500</h6>\r\n      <small class=\"fw-300 d-block mb-1\">Sorry something went wrong with our servers.</small>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Report this error!</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/error/error.module.ts":
  /*!***************************************!*\
    !*** ./src/app/error/error.module.ts ***!
    \***************************************/

  /*! exports provided: ErrorModule */

  /***/
  function srcAppErrorErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorModule", function () {
      return ErrorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _error_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error.routing */
    "./src/app/error/error.routing.ts");
    /* harmony import */


    var _error4_error4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error4/error4.component */
    "./src/app/error/error4/error4.component.ts");
    /* harmony import */


    var _error5_error5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error5/error5.component */
    "./src/app/error/error5/error5.component.ts");

    var ErrorModule = function ErrorModule() {
      _classCallCheck(this, ErrorModule);
    };

    ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_error_routing__WEBPACK_IMPORTED_MODULE_4__["ErrorRoutes"])],
      declarations: [_error4_error4_component__WEBPACK_IMPORTED_MODULE_5__["Error4Component"], _error5_error5_component__WEBPACK_IMPORTED_MODULE_6__["Error5Component"]]
    })], ErrorModule);
    /***/
  },

  /***/
  "./src/app/error/error.routing.ts":
  /*!****************************************!*\
    !*** ./src/app/error/error.routing.ts ***!
    \****************************************/

  /*! exports provided: ErrorRoutes */

  /***/
  function srcAppErrorErrorRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorRoutes", function () {
      return ErrorRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error4_error4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error4/error4.component */
    "./src/app/error/error4/error4.component.ts");
    /* harmony import */


    var _error5_error5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error5/error5.component */
    "./src/app/error/error5/error5.component.ts");

    var ErrorRoutes = [{
      path: '',
      children: [{
        path: '404',
        component: _error4_error4_component__WEBPACK_IMPORTED_MODULE_1__["Error4Component"]
      }, {
        path: '500',
        component: _error5_error5_component__WEBPACK_IMPORTED_MODULE_2__["Error5Component"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/error/error4/error4.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/error/error4/error4.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorError4Error4ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n}\n:host img {\n  height: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3I0L0M6XFxVc2Vyc1xcYW5kcmVcXERvY3VtZW50c1xcV29ya3NwYWNlXFxQcmludEV2b0FwcFxccHJpbnRldm93ZWIvc3JjXFxhcHBcXGVycm9yXFxlcnJvcjRcXGVycm9yNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3IvZXJyb3I0L2Vycm9yNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3I0L2Vycm9yNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmljb24ge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbjpob3N0IGltZyB7XG4gIGhlaWdodDogMTQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/error/error4/error4.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/error/error4/error4.component.ts ***!
    \**************************************************/

  /*! exports provided: Error4Component */

  /***/
  function srcAppErrorError4Error4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error4Component", function () {
      return Error4Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error4Component = function Error4Component() {
      _classCallCheck(this, Error4Component);
    };

    Error4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error4/error4.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error4.component.scss */
      "./src/app/error/error4/error4.component.scss"))["default"]]
    })], Error4Component);
    /***/
  },

  /***/
  "./src/app/error/error5/error5.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/error/error5/error5.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorError5Error5ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n}\n:host img {\n  height: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3I1L0M6XFxVc2Vyc1xcYW5kcmVcXERvY3VtZW50c1xcV29ya3NwYWNlXFxQcmludEV2b0FwcFxccHJpbnRldm93ZWIvc3JjXFxhcHBcXGVycm9yXFxlcnJvcjVcXGVycm9yNS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3IvZXJyb3I1L2Vycm9yNS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3I1L2Vycm9yNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmljb24ge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbjpob3N0IGltZyB7XG4gIGhlaWdodDogMTQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/error/error5/error5.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/error/error5/error5.component.ts ***!
    \**************************************************/

  /*! exports provided: Error5Component */

  /***/
  function srcAppErrorError5Error5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error5Component", function () {
      return Error5Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error5Component = function Error5Component() {
      _classCallCheck(this, Error5Component);
    };

    Error5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error5.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error5/error5.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error5.component.scss */
      "./src/app/error/error5/error5.component.scss"))["default"]]
    })], Error5Component);
    /***/
  }
}]);
//# sourceMappingURL=error-error-module-es5.js.map