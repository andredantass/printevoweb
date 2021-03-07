(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datatable-datatable-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/data-table/data-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/data-table/data-table.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable class=\"fullscreen no-shadow rounded-0\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"0\"\r\n  [rowHeight]=\"40\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n  <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\r\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-editing/table-editing.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-editing/table-editing.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable #mydatatable [headerHeight]=\"40\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n  [rows]=\"rows\">\r\n  <ngx-datatable-column name=\"Name\">\r\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n      <span title=\"Double click to edit\" (dblclick)=\"editing[row.$$index + '-name'] = true\" *ngIf=\"!editing[row.$$index + '-name']\">\r\n        {{value}}\r\n      </span>\r\n      <input autofocus (blur)=\"updateValue($event, 'name', value, row)\" *ngIf=\"editing[row.$$index + '-name']\" type=\"text\"\r\n        [value]=\"value\" />\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Gender\">\r\n    <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n      <span title=\"Double click to edit\" (dblclick)=\"editing[row.$$index + '-gender'] = true\" *ngIf=\"!editing[row.$$index + '-gender']\">\r\n        {{value}}\r\n      </span>\r\n      <select *ngIf=\"editing[row.$$index + '-gender']\" (change)=\"updateValue($event, 'gender', value, row)\" [value]=\"value\">\r\n        <option value=\"male\">Male</option>\r\n        <option value=\"female\">Female</option>\r\n      </select>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Age\">\r\n    <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n      {{value}}\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-filter/table-filter.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-filter/table-filter.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input type=\"email\" class=\"form-control mb-3\" placeholder=\"Type to filter the name column...\" required (keyup)='updateFilter($event)'>\r\n<ngx-datatable [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n  [limit]=\"10\" [rows]='rows'>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-paging/table-paging.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-paging/table-paging.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable [rows]=\"rows\" [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\" [columnMode]=\"'force'\"\r\n  [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"count\" [offset]=\"offset\"\r\n  [limit]=\"limit\" (page)='onPage($event)'>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-pinning/table-pinning.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-pinning/table-pinning.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"40\" [scrollbarV]=\"true\"\r\n  [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  <ngx-datatable-column name=\"Name\" [width]=\"300\" [frozenLeft]=\"true\">\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Gender\">\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"Age\">\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"City\" [width]=\"150\" prop=\"address.city\">\r\n  </ngx-datatable-column>\r\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\" [frozenRight]=\"true\">\r\n  </ngx-datatable-column>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-selection/table-selection.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-selection/table-selection.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable class=\"selection-cell\" [rows]=\"rows\" [columnMode]=\"'force'\" [columns]=\"columns\" [headerHeight]=\"40\"\r\n  [footerHeight]=\"50\" [rowHeight]=\"40\" [selected]=\"selected\" [selectionType]=\"'cell'\" (select)=\"onSelect($event)\"\r\n  (activate)=\"onActivate($event)\">\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-sorting/table-sorting.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-sorting/table-sorting.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable [rows]=\"rows\" [columns]=\"columns\" [sortType]=\"'multi'\" [columnMode]=\"'force'\" [headerHeight]=\"40\"\r\n  [footerHeight]=\"50\" [rowHeight]=\"40\">\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./src/app/datatable/data-table/data-table.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/datatable/data-table/data-table.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXRhYmxlL2RhdGEtdGFibGUvQzpcXFVzZXJzXFxhbmRyZVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFByaW50RXZvQXBwXFxwcmludGV2b3dlYi9zcmNcXGFwcFxcZGF0YXRhYmxlXFxkYXRhLXRhYmxlXFxkYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXRhdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZSxcclxuLmRhdGF0YWJsZT5kaXYsXHJcbi5kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/datatable/data-table/data-table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/datatable/data-table/data-table.component.ts ***!
  \**************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataTableComponent = class DataTableComponent {
    constructor() {
        this.rows = [];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
};
DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/data-table/data-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-table.component.scss */ "./src/app/datatable/data-table/data-table.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataTableComponent);



/***/ }),

/***/ "./src/app/datatable/datatable.module.ts":
/*!***********************************************!*\
  !*** ./src/app/datatable/datatable.module.ts ***!
  \***********************************************/
/*! exports provided: DatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableModule", function() { return DatatableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _datatable_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatable.routing */ "./src/app/datatable/datatable.routing.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/datatable/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/datatable/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/datatable/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/datatable/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/datatable/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/datatable/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/datatable/table-sorting/table-sorting.component.ts");













let DatatableModule = class DatatableModule {
};
DatatableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_datatable_routing__WEBPACK_IMPORTED_MODULE_5__["DatatableRoutes"]),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"]
        ],
        declarations: [
            _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"],
            _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_7__["TableEditingComponent"],
            _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_8__["TableFilterComponent"],
            _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_9__["TablePagingComponent"],
            _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_10__["TablePinningComponent"],
            _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_11__["TableSelectionComponent"],
            _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__["TableSortingComponent"]
        ]
    })
], DatatableModule);



/***/ }),

/***/ "./src/app/datatable/datatable.routing.ts":
/*!************************************************!*\
  !*** ./src/app/datatable/datatable.routing.ts ***!
  \************************************************/
/*! exports provided: DatatableRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRoutes", function() { return DatatableRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/datatable/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/datatable/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/datatable/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/datatable/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/datatable/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/datatable/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/datatable/table-sorting/table-sorting.component.ts");








const DatatableRoutes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__["DataTableComponent"],
                data: {
                    heading: 'Fullscreen'
                }
            },
            {
                path: 'editing',
                component: _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_2__["TableEditingComponent"],
                data: {
                    heading: 'Editing'
                }
            },
            {
                path: 'filter',
                component: _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_3__["TableFilterComponent"],
                data: {
                    heading: 'Filter'
                }
            },
            {
                path: 'paging',
                component: _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_4__["TablePagingComponent"],
                data: {
                    heading: 'Paging'
                }
            },
            {
                path: 'pinning',
                component: _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_5__["TablePinningComponent"],
                data: {
                    heading: 'Pinning'
                }
            },
            {
                path: 'selection',
                component: _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_6__["TableSelectionComponent"],
                data: {
                    heading: 'Selection'
                }
            },
            {
                path: 'sorting',
                component: _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_7__["TableSortingComponent"],
                data: {
                    heading: 'Sorting'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/datatable/table-editing/table-editing.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-editing/table-editing.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZS90YWJsZS1lZGl0aW5nL3RhYmxlLWVkaXRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/datatable/table-editing/table-editing.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-editing/table-editing.component.ts ***!
  \********************************************************************/
/*! exports provided: TableEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditingComponent", function() { return TableEditingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableEditingComponent = class TableEditingComponent {
    constructor() {
        this.editing = {};
        this.rows = [];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateValue(event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    }
};
TableEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-editing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-editing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-editing/table-editing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-editing.component.scss */ "./src/app/datatable/table-editing/table-editing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableEditingComponent);



/***/ }),

/***/ "./src/app/datatable/table-filter/table-filter.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-filter/table-filter.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZS90YWJsZS1maWx0ZXIvdGFibGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/datatable/table-filter/table-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/datatable/table-filter/table-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: TableFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterComponent", function() { return TableFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableFilterComponent = class TableFilterComponent {
    constructor() {
        this.rows = [];
        this.temp = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.fetch(data => {
            // cache our list
            this.temp = [...data];
            // push our inital complete list
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateFilter(event) {
        const val = event.target.value;
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    }
};
TableFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-filter/table-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-filter.component.scss */ "./src/app/datatable/table-filter/table-filter.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableFilterComponent);



/***/ }),

/***/ "./src/app/datatable/table-paging/table-paging.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-paging/table-paging.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZS90YWJsZS1wYWdpbmcvdGFibGUtcGFnaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/datatable/table-paging/table-paging.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/datatable/table-paging/table-paging.component.ts ***!
  \******************************************************************/
/*! exports provided: TablePagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePagingComponent", function() { return TablePagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablePagingComponent = class TablePagingComponent {
    constructor() {
        this.rows = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
    }
    ngOnInit() {
        this.page(this.offset, this.limit);
    }
    page(offset, limit) {
        this.fetch(results => {
            this.count = results.length;
            const start = offset * limit;
            const end = start + limit;
            const rows = [...this.rows];
            for (let i = start; i < end; i++) {
                rows[i] = results[i];
            }
            this.rows = rows;
            console.log('Page Results', start, end, rows);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onPage(event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    }
};
TablePagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-paging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-paging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-paging/table-paging.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-paging.component.scss */ "./src/app/datatable/table-paging/table-paging.component.scss")).default]
    })
], TablePagingComponent);



/***/ }),

/***/ "./src/app/datatable/table-pinning/table-pinning.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-pinning/table-pinning.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXRhYmxlL3RhYmxlLXBpbm5pbmcvQzpcXFVzZXJzXFxhbmRyZVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFByaW50RXZvQXBwXFxwcmludGV2b3dlYi9zcmNcXGFwcFxcZGF0YXRhYmxlXFx0YWJsZS1waW5uaW5nXFx0YWJsZS1waW5uaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhdGFibGUvdGFibGUtcGlubmluZy90YWJsZS1waW5uaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXRhdGFibGUvdGFibGUtcGlubmluZy90YWJsZS1waW5uaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZSxcclxuLmRhdGF0YWJsZT5kaXYsXHJcbi5kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/datatable/table-pinning/table-pinning.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-pinning/table-pinning.component.ts ***!
  \********************************************************************/
/*! exports provided: TablePinningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePinningComponent", function() { return TablePinningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablePinningComponent = class TablePinningComponent {
    constructor() {
        this.rows = [];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
};
TablePinningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-pinning',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-pinning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-pinning/table-pinning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-pinning.component.scss */ "./src/app/datatable/table-pinning/table-pinning.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TablePinningComponent);



/***/ }),

/***/ "./src/app/datatable/table-selection/table-selection.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/datatable/table-selection/table-selection.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZS90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/datatable/table-selection/table-selection.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/datatable/table-selection/table-selection.component.ts ***!
  \************************************************************************/
/*! exports provided: TableSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionComponent", function() { return TableSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableSelectionComponent = class TableSelectionComponent {
    constructor() {
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSelect(event) {
        console.log('Event: select', event, this.selected);
    }
    onActivate(event) {
        console.log('Event: activate', event);
    }
};
TableSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-selection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-selection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-selection/table-selection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-selection.component.scss */ "./src/app/datatable/table-selection/table-selection.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableSelectionComponent);



/***/ }),

/***/ "./src/app/datatable/table-sorting/table-sorting.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-sorting/table-sorting.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXRhYmxlL3RhYmxlLXNvcnRpbmcvQzpcXFVzZXJzXFxhbmRyZVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFByaW50RXZvQXBwXFxwcmludGV2b3dlYi9zcmNcXGFwcFxcZGF0YXRhYmxlXFx0YWJsZS1zb3J0aW5nXFx0YWJsZS1zb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhdGFibGUvdGFibGUtc29ydGluZy90YWJsZS1zb3J0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXRhdGFibGUvdGFibGUtc29ydGluZy90YWJsZS1zb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZSxcclxuLmRhdGF0YWJsZT5kaXYsXHJcbi5kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/datatable/table-sorting/table-sorting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-sorting/table-sorting.component.ts ***!
  \********************************************************************/
/*! exports provided: TableSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingComponent", function() { return TableSortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableSortingComponent = class TableSortingComponent {
    constructor() {
        this.rows = [];
        this.columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];
        this.fetch(data => {
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
};
TableSortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-sorting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-sorting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datatable/table-sorting/table-sorting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-sorting.component.scss */ "./src/app/datatable/table-sorting/table-sorting.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableSortingComponent);



/***/ })

}]);
//# sourceMappingURL=datatable-datatable-module-es2015.js.map