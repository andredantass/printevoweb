(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin-layout/admin-layout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin-layout/admin-layout.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\r\n<mat-sidenav-container class=\"app\" [ngClass]=\"{\r\n  'mode-boxed': options.boxed,\r\n  'mode-docked': options.docked,\r\n  'theme-black': options.theme === 'black',\r\n  'theme-winter': options.theme === 'winter',\r\n  'theme-spring': options.theme === 'spring',\r\n  'theme-autumn': options.theme === 'autumn',\r\n  'theme-summer': options.theme === 'summer',\r\n  'theme-eclipse': options.theme === 'eclipse',\r\n  'no-footer': routeOptions?.removeFooter}\">\r\n  <mat-sidenav class=\"sidebar-panel\" #sidemenu id=\"sidebar-panel\" [mode]=\"(isScreenSmall | async) ? 'over' : 'side'\" [opened]=\"!(isScreenSmall | async)\">\r\n    <app-sidebar (messageEvent)=\"receiveMessage($event)\" (toggleFullscreen)=\"toggleFullscreen()\" class=\"bg-cover\"></app-sidebar>\r\n  </mat-sidenav>\r\n\r\n  <app-header (toggleSidenav)=\"sidemenu.toggle()\" [heading]=\"routeOptions.heading\"></app-header>\r\n\r\n  <div class=\"main-content\">\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth-layout/auth-layout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth-layout/auth-layout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"theme-blalck no-bg\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar custom-navbar main-footer small px-3\">\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link text-color\" href=\"javascript:;\">\r\n        <span>Copyright &copy; 2021</span> <span class=\"text-uppercase\"> </span>. All rights reserved\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!-- <ul class=\"navbar-nav hidden-xs-down\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link text-color\" href=\"javascript:;\">Made with love on Earth</a>\r\n    </li>\r\n  </ul> -->\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar custom-navbar bg-faded main-header px-3\">\r\n\r\n  <a href=\"javascript:;\" class=\"nav-link pl-0 d-lg-none\" (click)=\"toggleSidenav.emit()\">\r\n    <i class=\"icon ion-android-menu\"></i>\r\n  </a>\r\n\r\n  <!-- <span class=\"navbar-heading mr-3\">{{heading}}</span>\r\n\r\n  <span class=\"nav-divider mx-3 d-none d-sm-block\"></span> -->\r\n\r\n  <!-- <ul class=\"navbar-nav mx-3\">\r\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-left\">\r\n      <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle container=\"body\" placement=\"bottom\" ngbTooltip=\"Notifications\">\r\n        <i class=\"icon ion-ios-world\"></i>\r\n        <span class=\"badge badge-danger\">4</span>\r\n      </a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notifications\">\r\n        <div class=\"notifications-wrapper\">\r\n          <a href=\"javascript:;\" class=\"dropdown-item\">\r\n            <span class=\"badge badge-warning\">NEW</span>\r\n            &nbsp;Sean launched a new application\r\n            <span class=\"time\">2 seconds ago</span>\r\n          </a>\r\n          <a href=\"javascript:;\" class=\"dropdown-item\">\r\n            Removed calendar from app list\r\n            <span class=\"time\">4 hours ago</span>\r\n          </a>\r\n          <a href=\"javascript:;\" class=\"dropdown-item\">\r\n            Jack Hunt has joined mailing list\r\n            <span class=\"time\">9 days ago</span>\r\n          </a>\r\n          <a href=\"javascript:;\" class=\"dropdown-item\">\r\n            <span class=\"text-muted\">Conan Johns created a new list</span>\r\n            <span class=\"time\">9 days ago</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"notification-footer\">\r\n          <a href=\"javascript:;\" class=\"dropdown-item\">See all notifications</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-left\">\r\n      <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle container=\"body\" placement=\"bottom\" ngbTooltip=\"Quick launch\">\r\n        <i class=\"icon ion-ios-keypad\"></i>\r\n      </a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right quick-launch\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-primary icon ion-ios-email\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Emails</small>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-success icon ion-ios-person\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Social</small>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-info icon ion-ios-film\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Multimedia</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-danger icon ion-ios-calendar\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Calendar</small>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-warning icon ion-ios-navigate\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Map</small>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-4 text-center py-3\">\r\n            <a href=\"javascript:;\">\r\n              <span class=\"d-block\">\r\n                <i class=\"h1 text-muted icon ion-ios-paper\"></i>\r\n              </span>\r\n              <small class=\"text-muted\">Taskboard</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a href=\"javascript:;\" [routerLink]=\"['/docs']\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Help\">\r\n        <i class=\"icon ion-ios-help\"></i>\r\n      </a>\r\n    </li>\r\n  </ul> -->\r\n\r\n  <!-- <span class=\"nav-divider mx-3 d-none d-sm-block\"></span> -->\r\n\r\n  <!-- <form class=\"form-search form-inline ml-3 d-none d-sm-block\">\r\n    <div class=\"d-flex align-items-center\">\r\n      <i class=\"icon ion-ios-search mr-2\"></i>\r\n      <input class=\"form-control border-0 no-bg fw-300\" type=\"text\" placeholder=\"Search for widgets...\">\r\n    </div>\r\n  </form> -->\r\n\r\n  <span class=\"mr-auto\"></span>\r\n\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n      <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\r\n        <span class=\"widget-icon rounded-circle bg-secondary text-white d-none d-md-inline-block\">JG</span>\r\n        <span class=\"ml-2\">Jack Gold</span>\r\n      </a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Settings</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Profile</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Notifications</span>\r\n        </a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Help</span>\r\n        </a>\r\n        <a class=\"dropdown-item\" href=\"javascript:;\">\r\n          <span>Signout</span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- <ul class=\"navbar-nav ml-3\">\r\n    <li class=\"nav-item\">\r\n      <a href=\"\" class=\"nav-link\" [routerLink]=\"['/pages/pricing']\">\r\n        <button class=\"btn btn-secondary btn-sm px-3\">Upgrade</button>\r\n      </a>\r\n    </li>\r\n  </ul> -->\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar custom-navbar main-brand\">\r\n  <a class=\"navbar-brand mr-auto\" [routerLink]=\"['/']\">\r\n    <!-- <svg class=\"docked-hidden\" viewBox=\"0 0 69 12\" width=\"69\" height=\"12\">\r\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M4.784,11.192 C7.664,11.192 8.912,9.672 8.912,7.896 C8.912,3.912 2.704,5.144 2.704,3.16 C2.704,2.36 3.408,1.832 4.512,1.832 C5.632,1.832 6.768,2.216 7.6,3.048 L8.672,1.656 C7.68,0.696 6.336,0.168 4.672,0.168 C2.336,0.168 0.784,1.528 0.784,3.288 C0.784,7.224 7.008,5.832 7.008,8.072 C7.008,8.776 6.4,9.528 4.864,9.528 C3.376,9.528 2.224,8.84 1.488,8.056 L0.448,9.496 C1.392,10.504 2.816,11.192 4.784,11.192 Z M14.896,11 L13.024,11 L13.024,1.976 L9.792,1.976 L9.792,0.328 L18.128,0.328 L18.128,1.976 L14.896,1.976 L14.896,11 Z M28.272,11 L26.144,11 L25.36,8.952 L20.464,8.952 L19.68,11 L17.552,11 L21.744,0.328 L24.08,0.328 L28.272,11 Z M24.832,7.304 L22.912,2.216 L20.992,7.304 L24.832,7.304 Z M34,11.192 C36.16,11.192 37.472,10.072 38.288,8.792 L36.688,7.976 C36.176,8.872 35.152,9.528 34,9.528 C31.888,9.528 30.32,7.912 30.32,5.672 C30.32,3.432 31.888,1.816 34,1.816 C35.152,1.816 36.176,2.488 36.688,3.368 L38.288,2.552 C37.488,1.272 36.16,0.152 34,0.152 C30.848,0.152 28.4,2.392 28.4,5.672 C28.4,8.952 30.848,11.192 34,11.192 Z M48.48,11 L43.824,5.368 L48.16,0.328 L45.84,0.328 L41.664,5.416 L41.664,0.328 L39.792,0.328 L39.792,11 L41.664,11 L41.664,7.592 L42.592,6.504 L46.176,11 L48.48,11 Z M57.04,11 L57.04,9.352 L51.6,9.352 L51.6,6.392 L56.928,6.392 L56.928,4.744 L51.6,4.744 L51.6,1.976 L57.04,1.976 L57.04,0.328 L49.728,0.328 L49.728,11 L57.04,11 Z M62.928,11 L58.96,11 L58.96,0.328 L62.928,0.328 C66.256,0.328 68.512,2.536 68.512,5.672 C68.512,8.808 66.256,11 62.928,11 Z M62.928,9.352 C65.248,9.352 66.592,7.688 66.592,5.672 C66.592,3.608 65.312,1.976 62.928,1.976 L60.832,1.976 L60.832,9.352 L62.928,9.352 Z\"\r\n          fill=\"currentColor\"></path>\r\n      </g>\r\n    </svg> -->\r\n\r\n    <img src=\"assets/images/logo.png\" width=\"90%\"/>\r\n    \r\n    <svg class=\"docked-visible d-none d-lg-inline-block\" viewBox=\"0 0 10 12\">\r\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M5.008,11.192 C7.872,11.192 9.616,9.832 9.616,7.48 C9.616,3.512 3.68,4.376 3.68,3.368 C3.68,3.096 3.856,2.888 4.496,2.888 C5.504,2.888 6.704,3.24 7.632,3.944 L9.36,1.656 C8.144,0.664 6.576,0.168 4.832,0.168 C1.904,0.168 0.4,1.896 0.4,3.704 C0.4,7.912 6.352,6.872 6.352,7.896 C6.352,8.312 5.776,8.472 5.168,8.472 C3.728,8.472 2.528,7.864 1.728,7.096 L0.048,9.496 C1.184,10.52 2.736,11.192 5.008,11.192 Z\"\r\n          fill=\"currentColor\"></path>\r\n      </g>\r\n    </svg>\r\n  </a>\r\n\r\n  <a href=\"javascript:;\" class=\"docked-hidden preferances-icon\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Preferances\"\r\n    (click)=\"options.settings = !options.settings\">\r\n    <i class=\"icon ion-ios-cog\"></i>\r\n  </a>\r\n</nav>\r\n\r\n<!-- main navigation -->\r\n<nav class=\"menu\" *ngIf=\"!options.settings\">\r\n  <app-menu></app-menu>\r\n</nav>\r\n\r\n<nav class=\"menu\" *ngIf=\"options.settings\">\r\n  <ul class=\"navigation\">\r\n    <li class=\"navigation-item\">\r\n      <a class=\"navigation-link\" [routerLink]=\"['/social']\">\r\n        <i class=\"icon ion-ios-navigate mr-3\"></i>\r\n        <span class=\"title mr-auto\">Profile</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <a class=\"navigation-link\">\r\n        <i class=\"icon ion-ios-bell mr-3\"></i>\r\n        <span class=\"title mr-auto\">Notifications</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <a class=\"navigation-link\" [routerLink]=\"['/account/lockscreen']\">\r\n        <i class=\"icon ion-ios-locked mr-3\"></i>\r\n        <span class=\"title mr-auto\">Lockscreen</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <hr />\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <div class=\"navigation-link\" (click)=\"options.docked = !options.docked; sendMessage()\">\r\n        <label class=\"custom-control custom-checkbox mb-0 mr-3\">\r\n          <input class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"options.docked\">\r\n          <span class=\"custom-control-label\"></span>\r\n        </label>\r\n        <span class=\"title mr-auto\">Docked mode</span>\r\n      </div>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <a class=\"navigation-link\" (click)=\"toggleFullscreen.emit()\">\r\n        <i class=\"icon ion-ios-eye mr-3\"></i>\r\n        <span class=\"title mr-auto\">Fullscreen</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <div class=\"navigation-link\" (click)=\"options.boxed = !options.boxed; sendMessage()\">\r\n        <label class=\"custom-control custom-checkbox mb-0 mr-3\">\r\n          <input class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"options.boxed\">\r\n          <span class=\"custom-control-label\"></span>\r\n        </label>\r\n        <span class=\"title mr-auto\">Boxed</span>\r\n      </div>\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <hr />\r\n    </li>\r\n    <li class=\"navigation-item\">\r\n      <div class=\"navigation-title\">Themes</div>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'eclipse'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('eclipse')\">\r\n        <i class=\"icon ion-ios-moon mr-3\"></i>\r\n        <span class=\"title mr-auto\">Eclipse</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'black'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('black')\">\r\n        <i class=\"icon ion-ios-snowy mr-3\"></i>\r\n        <span class=\"title mr-auto\">Black</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'winter'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('winter')\">\r\n        <i class=\"icon ion-ios-snowy mr-3\"></i>\r\n        <span class=\"title mr-auto\">Winter</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'spring'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('spring')\">\r\n        <i class=\"icon ion-ios-flower mr-3\"></i>\r\n        <span class=\"title mr-auto\">Spring</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'autumn'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('autumn')\">\r\n        <i class=\"icon ion-ios-medical mr-3\"></i>\r\n        <span class=\"title mr-auto\">Autumn</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item\" [ngClass]=\"{'open': options.theme === 'summer'}\">\r\n      <a class=\"navigation-link\" (click)=\"setTheme('summer')\">\r\n        <i class=\"icon ion-ios-flame mr-3\"></i>\r\n        <span class=\"title mr-auto\">Summer</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"navigation-item docked-hidden\">\r\n      <hr />\r\n    </li>\r\n    <li class=\"navigation-item docked-hidden\">\r\n      <div class=\"px-4 d-flex align-items-center\">\r\n        <select class=\"custom-select\" [(ngModel)]=\"options.lang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(options.lang)\"\r\n          placeholder=\"Select language\" style=\"min-width: 100%;\">\r\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\r\n        </select>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!-- /main navigation -->\r\n\r\n<nav class=\"navbar custom-navbar sidebar-footer\">\r\n  <ul class=\"navbar-nav row no-gutters w-100\">\r\n    <li class=\"nav-item col-4 ml-0 docked-hidden\">\r\n      <a [routerLink]=\"['/email']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Inbox\">\r\n        <i class=\"icon ion-ios-filing\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item col-4 ml-0 docked-hidden\">\r\n      <a [routerLink]=\"['/social']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Profile\">\r\n        <i class=\"icon ion-ios-person\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item col-4 ml-0\">\r\n      <a [routerLink]=\"['/account/signin']\" class=\"nav-link m-auto\" container=\"body\" ngbTooltip=\"Sign out\">\r\n        <i class=\"icon ion-log-out\"></i>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"default~account-account-module~form-form-module",
		"account-account-module"
	],
	"./cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"default~cards-cards-module~taskboard-taskboard-module",
		"cards-cards-module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./clientes/clientes.module": [
		"./src/app/clientes/clientes.module.ts",
		"default~clientes-clientes-module~datatable-datatable-module~monitor-monitor-module~pages-pages-module",
		"common",
		"clientes-clientes-module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components-components-module"
	],
	"./datatable/datatable.module": [
		"./src/app/datatable/datatable.module.ts",
		"default~clientes-clientes-module~datatable-datatable-module~monitor-monitor-module~pages-pages-module",
		"datatable-datatable-module"
	],
	"./docs/docs.module": [
		"./src/app/docs/docs.module.ts",
		"docs-docs-module"
	],
	"./email/email.module": [
		"./src/app/email/email.module.ts",
		"email-email-module"
	],
	"./error/error.module": [
		"./src/app/error/error.module.ts",
		"error-error-module"
	],
	"./form/form.module": [
		"./src/app/form/form.module.ts",
		"default~account-account-module~form-form-module",
		"form-form-module"
	],
	"./fullcalendar/fullcalendar.module": [
		"./src/app/fullcalendar/fullcalendar.module.ts",
		"fullcalendar-fullcalendar-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./media/media.module": [
		"./src/app/media/media.module.ts",
		"media-media-module"
	],
	"./monitor/monitor.module": [
		"./src/app/monitor/monitor.module.ts",
		"default~clientes-clientes-module~datatable-datatable-module~monitor-monitor-module~pages-pages-module",
		"common",
		"monitor-monitor-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"default~clientes-clientes-module~datatable-datatable-module~monitor-monitor-module~pages-pages-module",
		"pages-pages-module"
	],
	"./social/social.module": [
		"./src/app/social/social.module.ts",
		"social-social-module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"tables-tables-module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"default~cards-cards-module~taskboard-taskboard-module",
		"taskboard-taskboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
            _core__WEBPACK_IMPORTED_MODULE_1__["AccordionAnchorDirective"],
            _core__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"],
            _core__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            }),
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__["LoadingBarRouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");



const AppRoutes = [
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './account/account.module#AccountModule'
            },
            {
                path: 'cliente',
                loadChildren: './clientes/clientes.module#ClientesModule'
            },
            {
                path: 'monitor',
                loadChildren: './monitor/monitor.module#MonitorModule'
            },
            {
                path: 'email',
                loadChildren: './email/email.module#EmailModule'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'cards',
                loadChildren: './cards/cards.module#CardsModule'
            },
            {
                path: 'forms',
                loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            },
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            },
            {
                path: 'taskboard',
                loadChildren: './taskboard/taskboard.module#TaskboardModule'
            },
            {
                path: 'calendar',
                loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
            },
            {
                path: 'media',
                loadChildren: './media/media.module#MediaModule'
            },
            {
                path: 'social',
                loadChildren: './social/social.module#SocialModule'
            },
            {
                path: 'docs',
                loadChildren: './docs/docs.module#DocsModule'
            }
        ]
    },
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule'
            },
            {
                path: 'error',
                loadChildren: './error/error.module#ErrorModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







const SMALL_WIDTH_BREAKPOINT = 991;
let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(_element, router, route, translate, titleService, breakpoints) {
        this._element = _element;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.options = {
            lang: 'en',
            theme: 'black',
            settings: false,
            docked: false,
            boxed: false,
            opened: false
        };
        this.currentLang = 'en';
        this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(breakpoint => breakpoint.matches));
    }
    ngOnInit() {
        this._router = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((event) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Scroll to top on view load
            document.querySelector('.main-content').scrollTop = 0;
            if (yield this.isScreenSmall.toPromise()) {
                this.sidemenu.close();
            }
            this.runOnRouteChange();
        }));
        this.runOnRouteChange();
    }
    ngOnDestroy() {
        this._router.unsubscribe();
    }
    runOnRouteChange() {
        this.route.children.forEach((route) => {
            let activeRoute = route;
            while (activeRoute.firstChild) {
                activeRoute = activeRoute.firstChild;
            }
            this.routeOptions = activeRoute.snapshot.data;
        });
        if (this.routeOptions.hasOwnProperty('heading')) {
            this.setTitle(this.routeOptions.heading);
        }
    }
    setTitle(newTitle) {
        this.titleService.setTitle('Printevo | ' + newTitle);
    }
    receiveMessage($event) {
        this.options = $event;
    }
    toggleFullscreen() {
        const elem = this._element.nativeElement.querySelector('.main-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sidebar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdminLayoutComponent.prototype, "sidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sidemenu', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdminLayoutComponent.prototype, "sidemenu", void 0);
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin-layout/admin-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/core/admin-layout/admin-layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.custom-checkbox {\n  padding-left: 1.2rem;\n}\n.custom-control-indicator {\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.54);\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background: transparent;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator::before {\n  content: \"\";\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  text-align: center;\n  top: -2px;\n  left: -2px;\n  font-size: 1.2rem;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hdXRoLWxheW91dC9DOlxcVXNlcnNcXGFuZHJlXFxEb2N1bWVudHNcXFdvcmtzcGFjZVxcUHJpbnRFdm9BcHBcXHByaW50ZXZvd2ViL3NyY1xcYXBwXFxjb3JlXFxhdXRoLWxheW91dFxcYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usb0JBQUE7QURFRjtBQ0NBO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtBREVGO0FDQ0E7RUFDRSx1QkFBQTtBREVGO0FDQUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBREVKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jdXN0b20tY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74+9XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IC0ycHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMTZweDtcbn0iLCIuY3VzdG9tLWNoZWNrYm94IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmM2ZkXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xyXG4gICAgc3BlYWs6IG5vbmU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBsZWZ0OiAtMnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth-layout/auth-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/core/auth-layout/auth-layout.component.scss")).default]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .widget-icon {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxhbmRyZVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFByaW50RXZvQXBwXFxwcmludGV2b3dlYi9zcmNcXGFwcFxcY29yZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAud2lkZ2V0LWljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLndpZGdldC1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "heading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "toggleSidenav", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/helpers/chartData.ts":
/*!*******************************************!*\
  !*** ./src/app/core/helpers/chartData.ts ***!
  \*******************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return generateGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return generateData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const single = [
    {
        name: 'Fiji',
        value: 40
    },
    {
        name: 'USA',
        value: 49
    },
    {
        name: 'France',
        value: 36
    },
    {
        name: 'UK',
        value: 36
    },
    {
        name: 'Spain',
        value: 33
    },
    {
        name: 'Italy',
        value: 35
    }
];
const multi = [
    {
        name: 'Fiji',
        series: [
            {
                name: '2010',
                value: 40
            },
            {
                name: '2000',
                value: 36
            },
            {
                name: '1990',
                value: 31
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                value: 49
            },
            {
                name: '2000',
                value: 45
            },
            {
                name: '1990',
                value: 37
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 34
            },
            {
                name: '1990',
                value: 29
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 32
            },
            {
                name: '1990',
                value: 26
            }
        ]
    }
];
const bubble = [
    {
        name: 'Fiji',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 80.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 78
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 78.8,
                r: 310
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 76.9,
                r: 283
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 81.4,
                r: 63
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 79.1,
                r: 59.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.2,
                r: 62.7
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.8,
                r: 58.9
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
const countries = [
    'Abkhazia',
    'Afghanistan',
    'Akrotiri and Dhekelia',
    'Aland',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Ascension Island',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas, The',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central Africa Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    "Cote d'lvoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Cambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guemsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, N',
    'Korea, S',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nagorno-Karabakh',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Cyprus',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcaim Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Sahrawi Arab Democratic Republic',
    'Saint-Barthelemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and Grenadines',
    'Samos',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'Somaliland',
    'South Africa',
    'South Ossetia',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Transnistria',
    'Trinidad and Tobago',
    'Tristan da Cunha',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
function generateGraph(nodeCount) {
    const nodes = [];
    const links = [];
    for (let i = 0; i < nodeCount; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            value: country
        });
        for (let j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: country,
                    target: nodes[j].value
                });
            }
        }
    }
    return { links, nodes };
}
function generateData(seriesLength, includeMinMaxRange) {
    const results = [];
    const domain = []; // array of time stamps in milliseconds
    for (let j = 0; j < 8; j++) {
        // random dates between Sep 12, 2016 and Sep 24, 2016
        domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
    }
    for (let i = 0; i < seriesLength; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        const series = {
            name: country,
            series: []
        };
        for (let j = 0; j < domain.length; j++) {
            const value = Math.floor(2 + Math.random() * 5);
            // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
            const timestamp = domain[j];
            if (includeMinMaxRange) {
                const errorMargin = 0.02 + Math.random() * 0.08;
                series.series.push({
                    value,
                    name: timestamp,
                    min: Math.floor(value * (1 - errorMargin)),
                    max: Math.ceil(value * (1 + errorMargin))
                });
            }
            else {
                series.series.push({
                    value,
                    name: timestamp
                });
            }
        }
        results.push(series);
    }
    return results;
}


/***/ }),

/***/ "./src/app/core/helpers/colors.ts":
/*!****************************************!*\
  !*** ./src/app/core/helpers/colors.ts ***!
  \****************************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const colors = [
    '#5c6bc0',
    '#66bb6a',
    '#29b6f6',
    '#ffee58',
    '#ef5350',
    '#868e96'
];


/***/ }),

/***/ "./src/app/core/helpers/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/helpers/index.ts ***!
  \***************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartData */ "./src/app/core/helpers/chartData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["single"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["multi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["countries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["generateGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return _chartData__WEBPACK_IMPORTED_MODULE_1__["generateData"]; });

/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/app/core/helpers/colors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_2__["colors"]; });






/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: HeaderComponent, SidebarComponent, FooterComponent, AdminLayoutComponent, AuthLayoutComponent, MenuComponent, AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, single, multi, bubble, countries, generateGraph, generateData, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]; });

/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"]; });

/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/core/menu/menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]; });

/* harmony import */ var _menu_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-accordion */ "./src/app/core/menu-accordion/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionAnchorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionLinkDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionDirective"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./src/app/core/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["single"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["multi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["countries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["generateGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["generateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _helpers__WEBPACK_IMPORTED_MODULE_8__["colors"]; });












/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordion.directive.ts ***!
  \************************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AccordionDirective = class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(e => this.checkOpenLinks());
    }
};
AccordionDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccordionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordion]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AccordionDirective);



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionanchor.directive.ts ***!
  \******************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");



let AccordionAnchorDirective = class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
};
AccordionAnchorDirective.ctorParameters = () => [
    { type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]])
], AccordionAnchorDirective);



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionlink.directive.ts ***!
  \****************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");



let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
};
AccordionLinkDirective.ctorParameters = () => [
    { type: _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]])
], AccordionLinkDirective);



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/menu-accordion/index.ts ***!
  \**********************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]; });







/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.service */ "./src/app/core/menu/menu.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




/* tslint:disable:max-line-length */
let MenuComponent = class MenuComponent {
    constructor(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
};
MenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: `
  <ul class="navigation" appAccordion>
    <div *ngFor="let menuitem of menuService.getAll()">
      <li class="navigation-item" appAccordionLink group="{{menuitem.state}}" *ngIf="menuitem.type !== 'divider' || menuitem.type !== 'title'">
        <a class="navigation-link" appAccordionToggle [routerLink]="['/', menuitem.state]" *ngIf="menuitem.type === 'link'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" *ngIf="menuitem.type === 'extLink'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" target="_blank" *ngIf="menuitem.type === 'extTabLink'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="javascript:;" *ngIf="menuitem.type === 'sub'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
          <i class="menu-caret icon ion-ios-arrow-down"></i>
        </a>
        <ul class="navigation-submenu" *ngIf="menuitem.type === 'sub'">
          <li class="navigation-item" *ngFor="let childitem of menuitem.children" routerLinkActive="open">
            <a [routerLink]="['/', menuitem.state, childitem.state ]" class="navigation-link relative">{{ childitem.name | translate }}</a>
          </li>
        </ul>
      </li>
      <li class="navigation-item" *ngIf="menuitem.type === 'divider'">
        <hr/>
      </li>
      <li class="navigation-item" *ngIf="menuitem.type === 'title'">
        <span class="navigation-title">{{ menuitem.name | translate }}</span>
      </li>
    </div>
  </ul>`,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/menu/menu.service.ts ***!
  \*******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const MENUITEMS = [
    {
        type: 'title',
        name: 'MAIN'
    },
    {
        state: '/',
        name: 'HOME',
        type: 'link',
        icon: 'ion-ios-speedometer'
    },
    {
        state: 'docs',
        name: 'DOCS',
        type: 'link',
        icon: 'ion-ios-help'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Cadastro'
    },
    {
        state: 'cliente',
        name: 'Clientes',
        type: 'link',
        icon: 'ion-ios-person'
    },
    {
        state: 'departamento',
        name: 'Departamento',
        type: 'link',
        icon: 'ion-ios-folder'
    },
    {
        state: 'impressora',
        name: 'Impressora',
        type: 'link',
        icon: 'ion-ios-printer'
    },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Monitor'
    },
    {
        state: 'monitor',
        name: 'Relatório Mensal',
        type: 'link',
        icon: 'ion-stats-bars'
    },
    // {
    //   type: 'title',
    //   name: 'APPS'
    // },
    // {
    //   state: 'email',
    //   name: 'EMAIL',
    //   type: 'link',
    //   icon: 'ion-ios-email',
    //   badge: [
    //     {
    //       type: 'warning',
    //       value: 'NEW'
    //     }
    //   ]
    // },
    // {
    //   state: 'social',
    //   name: 'SOCIAL',
    //   type: 'link',
    //   icon: 'ion-ios-person'
    // },
    // {
    //   state: 'calendar',
    //   name: 'CALENDAR',
    //   type: 'link',
    //   icon: 'ion-ios-calendar'
    // },
    // {
    //   state: 'taskboard',
    //   name: 'TASKBOARD',
    //   type: 'link',
    //   icon: 'ion-ios-paper'
    // },
    // {
    //   type: 'divider'
    // },
    // {
    //   type: 'title',
    //   name: 'UI'
    // },
    // {
    //   state: 'components',
    //   name: 'COMPONENTS',
    //   type: 'sub',
    //   icon: 'ion-ios-albums',
    //   badge: [
    //     {
    //       type: 'success',
    //       value: '5'
    //     }
    //   ],
    //   children: [
    //     {
    //       state: 'buttons',
    //       name: 'BUTTONS'
    //     },
    //     {
    //       state: 'accordion',
    //       name: 'ACCORDION'
    //     },
    //     {
    //       state: 'alert',
    //       name: 'ALERT'
    //     },
    //     {
    //       state: 'carousel',
    //       name: 'CAROUSEL'
    //     },
    //     {
    //       state: 'collapse',
    //       name: 'COLLAPSE'
    //     },
    //     {
    //       state: 'datepicker',
    //       name: 'DATEPICKER'
    //     },
    //     {
    //       state: 'dropdown',
    //       name: 'DROPDOWN'
    //     },
    //     {
    //       state: 'modal',
    //       name: 'MODAL'
    //     },
    //     {
    //       state: 'pagination',
    //       name: 'PAGINATION'
    //     },
    //     {
    //       state: 'popover',
    //       name: 'POPOVER'
    //     },
    //     {
    //       state: 'progress',
    //       name: 'PROGRESS'
    //     },
    //     {
    //       state: 'rating',
    //       name: 'RATING'
    //     },
    //     {
    //       state: 'tabs',
    //       name: 'TABS'
    //     },
    //     {
    //       state: 'timepicker',
    //       name: 'TIMEPICKER'
    //     },
    //     {
    //       state: 'tooltip',
    //       name: 'TOOLTIP'
    //     },
    //     {
    //       state: 'typeahead',
    //       name: 'TYPEAHEAD'
    //     }
    //   ]
    // },
    // {
    //   state: 'cards',
    //   name: 'CARDS',
    //   type: 'sub',
    //   icon: 'ion-ios-photos',
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'draggable',
    //       name: 'DRAGGABLE'
    //     }
    //   ]
    // },
    // {
    //   state: 'forms',
    //   name: 'FORMS',
    //   type: 'sub',
    //   icon: 'ion-ios-box',
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'masks',
    //       name: 'MASKS'
    //     },
    //     {
    //       state: 'validation',
    //       name: 'VALIDATION'
    //     },
    //     {
    //       state: 'upload',
    //       name: 'UPLOAD'
    //     }
    //   ]
    // },
    // {
    //   state: 'tables',
    //   name: 'TABLES',
    //   type: 'sub',
    //   icon: 'ion-ios-grid-view',
    //   badge: [
    //     {
    //       type: 'primary',
    //       value: '2'
    //     }
    //   ],
    //   children: [
    //     {
    //       state: 'basic',
    //       name: 'BASIC'
    //     },
    //     {
    //       state: 'responsive',
    //       name: 'RESPONSIVE'
    //     }
    //   ]
    // },
    // {
    //   type: 'divider'
    // },
    // {
    //   type: 'title',
    //   name: 'DATAVIZ'
    // },
    // {
    //   state: 'datatable',
    //   name: 'DATATABLES',
    //   type: 'sub',
    //   icon: 'ion-ios-list',
    //   children: [
    //     {
    //       state: 'fullscreen',
    //       name: 'FULLSCREEN'
    //     },
    //     {
    //       state: 'editing',
    //       name: 'EDITING'
    //     },
    //     {
    //       state: 'filter',
    //       name: 'FILTER'
    //     },
    //     {
    //       state: 'paging',
    //       name: 'PAGING'
    //     },
    //     {
    //       state: 'pinning',
    //       name: 'PINNING'
    //     },
    //     {
    //       state: 'selection',
    //       name: 'SELECTION'
    //     },
    //     {
    //       state: 'sorting',
    //       name: 'SORTING'
    //     }
    //   ]
    // },
    // {
    //   state: 'charts',
    //   name: 'CHARTS',
    //   type: 'sub',
    //   icon: 'ion-ios-analytics',
    //   badge: [
    //     {
    //       type: 'danger',
    //       value: 'HOT'
    //     }
    //   ],
    //   children: [
    //     {
    //       state: 'bar',
    //       name: 'BAR'
    //     },
    //     {
    //       state: 'pie',
    //       name: 'PIE'
    //     },
    //     {
    //       state: 'line',
    //       name: 'LINE'
    //     },
    //     {
    //       state: 'misc',
    //       name: 'MISC'
    //     }
    //   ]
    // },
    // {
    //   state: 'maps',
    //   name: 'MAPS',
    //   type: 'sub',
    //   icon: 'ion-ios-navigate',
    //   children: [
    //     {
    //       state: 'google',
    //       name: 'GOOGLE'
    //     },
    //     {
    //       state: 'fullscreen',
    //       name: 'FULLSCREEN'
    //     }
    //   ]
    // },
    {
        type: 'divider'
    },
    {
        type: 'title',
        name: 'Admin'
    },
    {
        state: 'account',
        name: 'ACCOUNT',
        type: 'sub',
        icon: 'ion-ios-people',
        children: [
            {
                state: 'signin',
                name: 'SIGNIN'
            },
            {
                state: 'signup',
                name: 'SIGNUP'
            },
            {
                state: 'forgot',
                name: 'FORGOT'
            },
            {
                state: 'lockscreen',
                name: 'LOCKSCREEN'
            }
        ]
    }
    // {
    //   state: 'pages',
    //   name: 'PAGES',
    //   type: 'sub',
    //   icon: 'ion-ios-folder',
    //   children: [
    //     {
    //       state: 'forum',
    //       name: 'FORUM'
    //     },
    //     {
    //       state: 'timeline',
    //       name: 'TIMELINE'
    //     },
    //     {
    //       state: 'activity',
    //       name: 'ACTIVITY'
    //     },
    //     {
    //       state: 'pricing',
    //       name: 'PRICING'
    //     },
    //     {
    //       state: 'blank',
    //       name: 'BLANK'
    //     }
    //   ]
    // },
    // {
    //   state: 'error',
    //   name: 'ERROR',
    //   type: 'sub',
    //   icon: 'ion-ios-information',
    //   children: [
    //     {
    //       state: '404',
    //       name: '404'
    //     },
    //     {
    //       state: '500',
    //       name: '500'
    //     }
    //   ]
    // },
    // {
    //   state: 'media',
    //   name: 'MEDIA',
    //   type: 'sub',
    //   icon: 'ion-ios-film',
    //   children: [
    //     {
    //       state: 'grid',
    //       name: 'GRID'
    //     },
    //     {
    //       state: 'tile',
    //       name: 'TILE'
    //     }
    //   ]
    // }
];
let MenuService = class MenuService {
    getAll() {
        return MENUITEMS;
    }
};
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MenuService);



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-checkbox {\n  padding-left: 1.2rem;\n}\n\n.custom-control-label {\n  border-color: 1px solid rgba(255, 255, 255, 0.54);\n  display: block !important;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before, .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  color: rgba(255, 255, 255, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL0M6XFxVc2Vyc1xcYW5kcmVcXERvY3VtZW50c1xcV29ya3NwYWNlXFxQcmludEV2b0FwcFxccHJpbnRldm93ZWIvc3JjXFxhcHBcXGNvcmVcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURJRTtFQUVFLGdDQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hlY2tib3gge1xyXG4gIHBhZGRpbmctbGVmdDogMS4ycmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCk7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCk7XHJcbiAgfVxyXG59XHJcbiIsIi5jdXN0b20tY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let SidebarComponent = class SidebarComponent {
    constructor(translate) {
        this.translate = translate;
        this.options = {
            lang: 'en',
            theme: 'black',
            settings: false,
            docked: false,
            boxed: false,
            opened: false
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleFullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    sendMessage() {
        this.messageEvent.emit(this.options);
    }
    setTheme(theme) {
        this.options.theme = theme;
        this.sendMessage();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "messageEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "toggleFullscreen", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], SidebarComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Documents\Workspace\PrintEvoApp\printevoweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map