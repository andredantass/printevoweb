(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-detalhe/cliente-detalhe.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-detalhe/cliente-detalhe.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text-uppercase mb-3 fw-600\">Dados do Cliente</p>\r\n\r\n<div class=\"card\">\r\n  <br />\r\n  <form>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      \r\n      <div class=\"form-group col-md-3\">\r\n        <label for=\"inputCustCNPJ\">ID</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustID\" placeholder=\"\"\r\n          value=\"{{cliente.id}}\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-3\">\r\n        <label for=\"inputCustName\">Data Cadastro</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustDtIni\" placeholder=\"\"\r\n          value=\"\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"inputCustName\">Status</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustStatus\" placeholder=\"\"\r\n          value=\"\" readonly>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      \r\n      <div class=\"form-group col-md-3\">\r\n        <label for=\"inputCustCNPJ\">CNPJ do Cliente</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCNPJ\" placeholder=\"\"\r\n          value=\"{{cliente.cnpj}}\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-7\">\r\n        <label for=\"inputCustName\">Nome</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustName\" placeholder=\"\"\r\n          value=\"{{cliente.nome}}\" readonly>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-10\">\r\n        <label for=\"inputCustAddress\">Endereço</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustAddress\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inpuCustNeighborhood\">Bairro</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inpuCustNeighborhood\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputCustCity\">Cidade</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCity\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputResponsable\">Responsável</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputResponsable\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5 \" >\r\n        <label for=\"inputCustEmail\">Email</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustEmail\" placeholder=\"\"\r\n          value=\"{{cliente.email}}\" readonly>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"text-right\">\r\n      <div class=\"form-group col-sm-11\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\" (click)=\"Depto()\">+Depto</button>\r\n        &nbsp;\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\">Salvar</button>\r\n        &nbsp;\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\" [routerLink]=\"['/cliente']\">Voltar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <br />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-lista/cliente-lista.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-lista/cliente-lista.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text-uppercase mb-3 fw-600\">Pesquisa de Clientes</p>\r\n\r\n<div class=\"card\">\r\n  <br />\r\n  <form>\r\n    <div class=\"text-right\">\r\n      <div class=\"form-group col-sm-12\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\" [routerLink]=\"['cliente-detalhe', '']\">Novo</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<input type=\"email\" class=\"form-control mb-3\" placeholder=\"Pesquisar por nome do Cliente...\" required\r\n  (keyup)='updateFilter($event)'>\r\n\r\n<ngx-datatable [columns]=\"columns\" [columnMode]=\"'force'\" class=\"selection-cell\" [rows]=\"rows\" [headerHeight]=\"40\"\r\n  [footerHeight]=\"50\" [rowHeight]=\"40\" [selected]=\"selected\" [selectionType]=\"'cell'\" (select)=\"onSelect($event)\"\r\n  (activate)=\"onActivate($event)\" [limit]=\"10\" [rows]='rows'>\r\n</ngx-datatable>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cliente-lista></app-cliente-lista>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/departamento/departamento.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/departamento/departamento.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text-uppercase mb-3 fw-600\">Dados do Departamento</p>\r\n\r\n<div class=\"card\">\r\n  <br />\r\n  <form>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-3\">\r\n        <label for=\"inputCustCNPJ\">CNPJ do Cliente</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCNPJ\" placeholder=\"\"\r\n          value=\"{{cliente.cnpj}}\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-7\">\r\n        <label for=\"inputCustName\">Nome</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustName\" placeholder=\"\"\r\n          value=\"{{cliente.nome}}\" readonly>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-10\">\r\n        <label for=\"inputCustAddress\">Nome do Departamento</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustAddress\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inpuCustNeighborhood\">Complemento</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inpuCustNeighborhood\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputCustCity\">Sala</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCity\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputResponsable\">Responsável</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputResponsable\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5 \" >\r\n        <label for=\"inputCustEmail\">Email</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustEmail\" placeholder=\"\"\r\n          value=\"{{cliente.email}}\" readonly>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"text-right\">\r\n      <div class=\"form-group col-sm-11\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\">Salvar</button>\r\n        &nbsp;\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 8%;\" [routerLink]=\"['/cliente']\">Voltar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <br />\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/clientes/cliente-detalhe/cliente-detalhe.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/clientes/cliente-detalhe/cliente-detalhe.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUtZGV0YWxoZS9jbGllbnRlLWRldGFsaGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/clientes/cliente-detalhe/cliente-detalhe.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/clientes/cliente-detalhe/cliente-detalhe.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClienteDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteDetalheComponent", function() { return ClienteDetalheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cliente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente.model */ "./src/app/clientes/cliente.model.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cliente.service */ "./src/app/clientes/cliente.service.ts");







let ClienteDetalheComponent = class ClienteDetalheComponent {
    constructor(clienteService, route, router, location) {
        this.clienteService = clienteService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
        this.cliente = new _cliente_model__WEBPACK_IMPORTED_MODULE_4__["Cliente"](0, "", "", "", "");
        this.route.params.forEach((params) => {
            let id = +params['id'];
            // console.log(id);
            if (id) {
                this.clienteService.getCliente(id)
                    .then((cliente) => {
                    // console.log("teste:" + cliente);
                    this.cliente = cliente;
                });
            }
        });
    }
    Depto() {
        //console.log("botão" + this.cliente.id);
        this.router.navigate(['cliente/departamento/' + this.cliente.id]);
    }
};
ClienteDetalheComponent.ctorParameters = () => [
    { type: _cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ClienteDetalheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // moduleId: module.id,
        selector: 'app-cliente-detalhe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente-detalhe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-detalhe/cliente-detalhe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente-detalhe.component.scss */ "./src/app/clientes/cliente-detalhe/cliente-detalhe.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], ClienteDetalheComponent);



/***/ }),

/***/ "./src/app/clientes/cliente-lista/cliente-lista.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/clientes/cliente-lista/cliente-lista.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUtbGlzdGEvY2xpZW50ZS1saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/clientes/cliente-lista/cliente-lista.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/clientes/cliente-lista/cliente-lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListaComponent", function() { return ClienteListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ClienteListaComponent = class ClienteListaComponent {
    constructor(route) {
        this.route = route;
        this.rows = [];
        this.selected = [];
        this.temp = [];
        this.columns = [{ name: 'CNPJ' }, { prop: 'nome' }, { name: 'Email' }, { name: 'Telefone' }];
        this.fetch(data => {
            // cache our list
            this.temp = [...data];
            // push our inital complete list
            this.rows = data;
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/clientes.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateFilter(event) {
        const val = event.target.value;
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.nome.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    }
    onSelect(event) {
        let id = this.selected[0]['id'];
        this.route.navigate(['cliente/cliente-detalhe/' + id]);
    }
    onActivate(event) {
        //  console.log('Event: activate', event);
    }
};
ClienteListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ClienteListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente-lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente-lista/cliente-lista.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente-lista.component.scss */ "./src/app/clientes/cliente-lista/cliente-lista.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ClienteListaComponent);

// import { Component, OnInit } from '@angular/core';
// import { Cliente } from '../cliente.model';
// import { ClienteService } from '../cliente.service';
// @Component({
//   moduleId: module.id,
//   selector: 'app-cliente-lista',
//   templateUrl: './cliente-lista.component.html',
//   styleUrls: ['./cliente-lista.component.scss']
// })
// export class ClienteListaComponent implements OnInit {
//   clientes : Cliente[];
//   constructor(private clienteService: ClienteService) { }
//   ngOnInit() : void {
//     this.clienteService.getClientes()
//     .then((clientes : Cliente[]) => {
//       this.clientes = clientes;
//     }).catch(err => console.log(err));
//   }
// }


/***/ }),

/***/ "./src/app/clientes/clientes.component.scss":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientesComponent = class ClientesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clientes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clientes.component.scss */ "./src/app/clientes/clientes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClientesComponent);



/***/ }),

/***/ "./src/app/clientes/clientes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.module.ts ***!
  \*********************************************/
/*! exports provided: ClientesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _clientes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _clientes_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.routing */ "./src/app/clientes/clientes.routing.ts");
/* harmony import */ var _cliente_lista_cliente_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente-lista/cliente-lista.component */ "./src/app/clientes/cliente-lista/cliente-lista.component.ts");
/* harmony import */ var _cliente_detalhe_cliente_detalhe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cliente-detalhe/cliente-detalhe.component */ "./src/app/clientes/cliente-detalhe/cliente-detalhe.component.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cliente.service */ "./src/app/clientes/cliente.service.ts");
/* harmony import */ var _departamento_departamento_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./departamento/departamento.component */ "./src/app/clientes/departamento/departamento.component.ts");











let ClientesModule = class ClientesModule {
};
ClientesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_clientes_routing__WEBPACK_IMPORTED_MODULE_6__["ClientesRoutes"]),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"]
        ],
        declarations: [_clientes_component__WEBPACK_IMPORTED_MODULE_5__["ClientesComponent"],
            _cliente_lista_cliente_lista_component__WEBPACK_IMPORTED_MODULE_7__["ClienteListaComponent"],
            _cliente_detalhe_cliente_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["ClienteDetalheComponent"],
            _departamento_departamento_component__WEBPACK_IMPORTED_MODULE_10__["DepartamentoComponent"]
        ],
        exports: [_cliente_lista_cliente_lista_component__WEBPACK_IMPORTED_MODULE_7__["ClienteListaComponent"]],
        providers: [_cliente_service__WEBPACK_IMPORTED_MODULE_9__["ClienteService"]]
    })
], ClientesModule);



/***/ }),

/***/ "./src/app/clientes/clientes.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/clientes/clientes.routing.ts ***!
  \**********************************************/
/*! exports provided: ClientesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesRoutes", function() { return ClientesRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _cliente_detalhe_cliente_detalhe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-detalhe/cliente-detalhe.component */ "./src/app/clientes/cliente-detalhe/cliente-detalhe.component.ts");
/* harmony import */ var _departamento_departamento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departamento/departamento.component */ "./src/app/clientes/departamento/departamento.component.ts");




const ClientesRoutes = [
    {
        path: '',
        component: _clientes_component__WEBPACK_IMPORTED_MODULE_1__["ClientesComponent"],
        data: {
            heading: 'Cliente'
        }
    },
    {
        path: '',
        children: [
            {
                path: 'cliente',
                component: _clientes_component__WEBPACK_IMPORTED_MODULE_1__["ClientesComponent"],
                data: {
                    heading: 'Cliente'
                }
            },
            {
                path: 'cliente-detalhe',
                component: _cliente_detalhe_cliente_detalhe_component__WEBPACK_IMPORTED_MODULE_2__["ClienteDetalheComponent"],
                data: {
                    heading: 'Detalhe do Cliente'
                }
            },
            {
                path: 'cliente-detalhe/:id',
                component: _cliente_detalhe_cliente_detalhe_component__WEBPACK_IMPORTED_MODULE_2__["ClienteDetalheComponent"],
                data: {
                    heading: 'Detalhe do Cliente'
                }
            },
            {
                path: 'departamento/:id',
                component: _departamento_departamento_component__WEBPACK_IMPORTED_MODULE_3__["DepartamentoComponent"],
                data: {
                    heading: 'Departamento'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/clientes/departamento/departamento.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/clientes/departamento/departamento.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2RlcGFydGFtZW50by9kZXBhcnRhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/clientes/departamento/departamento.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/clientes/departamento/departamento.component.ts ***!
  \*****************************************************************/
/*! exports provided: DepartamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentoComponent", function() { return DepartamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cliente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente.model */ "./src/app/clientes/cliente.model.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente.service */ "./src/app/clientes/cliente.service.ts");





let DepartamentoComponent = class DepartamentoComponent {
    constructor(clienteService, route) {
        this.clienteService = clienteService;
        this.route = route;
    }
    ngOnInit() {
        this.cliente = new _cliente_model__WEBPACK_IMPORTED_MODULE_3__["Cliente"](0, "", "", "", "");
        this.route.params.forEach((params) => {
            let id = +params['id'];
            // console.log(id);
            if (id) {
                this.clienteService.getCliente(id)
                    .then((cliente) => {
                    // console.log("teste:" + cliente);
                    this.cliente = cliente;
                });
            }
        });
    }
};
DepartamentoComponent.ctorParameters = () => [
    { type: _cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DepartamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-departamento',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./departamento.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/departamento/departamento.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./departamento.component.scss */ "./src/app/clientes/departamento/departamento.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DepartamentoComponent);



/***/ })

}]);
//# sourceMappingURL=clientes-clientes-module-es2015.js.map