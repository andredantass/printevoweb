function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitor-monitor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/impressoras/impressoras.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/impressoras/impressoras.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImpressorasImpressorasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input id=\"cliente\" type=\"email\" class=\"form-control mb-3\" placeholder=\"Pesquisar nome do cliente...\" required (keyup)='updateFilter($event)'>\r\n<ngx-datatable [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n  [limit]=\"10\" [rows]='rows'>\r\n</ngx-datatable>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/monitor/monitor.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/monitor/monitor.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMonitorMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <p class=\"text-uppercase mb-3 fw-600\">Relatório Mensal</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"card\">\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-inline\">\r\n      <div style=\"width: 1%;\"></div>\r\n\r\n      <div class=\"form-group col-sm-4\">\r\n        <label for=\" exampleSelect1\" class=\"col-form-label\">Cliente</label>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-2\">\r\n        <label for=\"example-date-input\" class=\"col-form-label\">Data Início</label>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-2\">\r\n        <label for=\"example-date-input\" class=\"col-form-label\">Data Fim</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-inline\">\r\n      <div style=\"width: 1%;\"></div>\r\n\r\n      <div class=\"form-group col-sm-4\">\r\n        <select class=\"form-control form-control-sm\" style=\"width: 100%;\" [(ngModel)]=\"idCliente\" name=\"idCliente\" >\r\n          <option value=\"\">Selecione</option>\r\n          <option *ngFor=\"let c of clientes\" value=\"{{c.id}}\">{{c.nome}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-2\">\r\n        <input class=\"form-control form-control-sm\" type=\"date\" value=\"\" id=\"dtIni\" style=\"width: 100%;\"\r\n          [(ngModel)]=\"dtIni\" name=\"dtIni\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-2\">\r\n        <input class=\"form-control form-control-sm\" type=\"date\" value=\"\" id=\"dtFim\" style=\"width: 100%;\"\r\n        [(ngModel)]=\"dtFim\" name=\"dtFim\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-sm-3 justify-content-left\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"width: 30%;\">Gerar</button>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n  </form>\r\n</div>\r\n\r\n\r\n<p class=\"text-uppercase mb-3 fw-600\">Dados do Cliente</p>\r\n\r\n<div class=\"card\">\r\n  <br />\r\n  <form>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-3\">\r\n        <label for=\"inputCustCNPJ\">CNPJ do Cliente</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCNPJ\" placeholder=\"\"\r\n          value=\"{{cliente.cnpj}}\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-7\">\r\n        <label for=\"inputCustName\">Nome</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustName\" placeholder=\"\"\r\n          value=\"{{cliente.nome}}\" readonly>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-10\">\r\n        <label for=\"inputCustAddress\">Endereço</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustAddress\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inpuCustNeighborhood\">Bairro</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inpuCustNeighborhood\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputCustCity\">Cidade</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustCity\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-sm-1\"></div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label for=\"inputResponsable\">Responsável</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputResponsable\" placeholder=\"\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5 \" >\r\n        <label for=\"inputCustEmail\">Email</label>\r\n        <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputCustEmail\" placeholder=\"\"\r\n          value=\"{{cliente.email}}\" readonly>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <br />\r\n</div>\r\n\r\n\r\n\r\n<ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"false\" activeIds=\"ngb-panel-0\">\r\n\r\n  <ngb-panel title=\"Quadro de Impressões - Resumo\">\r\n    <ng-template ngbPanelContent>\r\n      <div class=\"card\">\r\n        <br />\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-sm-1\"></div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputFranquia\">Qtd. Franquia</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputFranquia\" placeholder=\"\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputQtdExcedente\">Qtd. Excedente</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputQtdExcedente\" placeholder=\"\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputTotal\">Qtd. Total</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputTotal\" placeholder=\"\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-sm-1\"></div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputVlrFranquia\">Valor Franquia</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputVlrFranquia\" placeholder=\"\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputVlrExcedente\">Valor Excedente</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputVlrExcedente\" placeholder=\"\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"inputVlrTotal\">Valor Total</label>\r\n            <input mdbInput type=\"text\" class=\"form-control form-control-sm\" id=\"inputVlrTotal\" placeholder=\"\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <br />\r\n      </div>\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n  <ngb-panel title=\"Lista de Impressoras\">\r\n    <ng-template ngbPanelContent>\r\n      <app-impressoras></app-impressoras>\r\n    </ng-template>\r\n  </ngb-panel>\r\n</ngb-accordion>\r\n";
    /***/
  },

  /***/
  "./src/app/impressoras/impressoras.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/impressoras/impressoras.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImpressorasImpressorasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcHJlc3NvcmFzL2ltcHJlc3NvcmFzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/impressoras/impressoras.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/impressoras/impressoras.component.ts ***!
    \******************************************************/

  /*! exports provided: ImpressorasComponent */

  /***/
  function srcAppImpressorasImpressorasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpressorasComponent", function () {
      return ImpressorasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImpressorasComponent = /*#__PURE__*/function () {
      function ImpressorasComponent() {
        var _this = this;

        _classCallCheck(this, ImpressorasComponent);

        this.rows = [];
        this.selected = [];
        this.temp = [];
        this.columns = [{
          name: 'Marca'
        }, {
          prop: 'modelo'
        }, {
          name: 'total_ini'
        }, {
          name: 'total_fim'
        }];
        this.fetch(function (data) {
          // cache our list
          _this.temp = _toConsumableArray(data); // push our inital complete list

          _this.rows = data;
        });
      }

      _createClass(ImpressorasComponent, [{
        key: "fetch",
        value: function fetch(cb) {
          var req = new XMLHttpRequest();
          req.open('GET', "assets/data/impressoras.json");

          req.onload = function () {
            cb(JSON.parse(req.response));
          };

          req.send();
        }
      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value; // filter our data

          var temp = this.temp.filter(function (d) {
            return d.nome.toLowerCase().indexOf(val) !== -1 || !val;
          }); // update the rows

          this.rows = temp;
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          console.log('Event: select: ', event, this.selected);
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          console.log('Event: activate: ', event);
        }
      }]);

      return ImpressorasComponent;
    }();

    ImpressorasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-impressoras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./impressoras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/impressoras/impressoras.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./impressoras.component.scss */
      "./src/app/impressoras/impressoras.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImpressorasComponent);
    /***/
  },

  /***/
  "./src/app/monitor/monitor.component.scss":
  /*!************************************************!*\
    !*** ./src/app/monitor/monitor.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMonitorMonitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3IvbW9uaXRvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/monitor/monitor.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/monitor/monitor.component.ts ***!
    \**********************************************/

  /*! exports provided: MonitorComponent */

  /***/
  function srcAppMonitorMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorComponent", function () {
      return MonitorComponent;
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


    var _clientes_cliente_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clientes/cliente.model */
    "./src/app/clientes/cliente.model.ts");
    /* harmony import */


    var _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../clientes/cliente.service */
    "./src/app/clientes/cliente.service.ts");

    var MonitorComponent = /*#__PURE__*/function () {
      function MonitorComponent(clienteService) {
        _classCallCheck(this, MonitorComponent);

        this.clienteService = clienteService;
      }

      _createClass(MonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.clienteService.getClientes().then(function (clientes) {
            _this2.clientes = clientes;
          })["catch"](function (err) {
            return console.log(err);
          });
          this.cliente = new _clientes_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"](0, "", "", "", "");
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.cliente = new _clientes_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"](0, "", "", "", "");
          var id = +this.idCliente;

          if (id) {
            this.clienteService.getCliente(id).then(function (cliente) {
              _this3.cliente = cliente;
            });
          }

          ;
        }
      }]);

      return MonitorComponent;
    }();

    MonitorComponent.ctorParameters = function () {
      return [{
        type: _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
      }];
    };

    MonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/monitor/monitor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor.component.scss */
      "./src/app/monitor/monitor.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])], MonitorComponent);
    /***/
  },

  /***/
  "./src/app/monitor/monitor.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/monitor/monitor.module.ts ***!
    \*******************************************/

  /*! exports provided: MonitorModule */

  /***/
  function srcAppMonitorMonitorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorModule", function () {
      return MonitorModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _monitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./monitor.component */
    "./src/app/monitor/monitor.component.ts");
    /* harmony import */


    var _monitor_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./monitor.routing */
    "./src/app/monitor/monitor.routing.ts");
    /* harmony import */


    var _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../clientes/cliente.service */
    "./src/app/clientes/cliente.service.ts");
    /* harmony import */


    var _impressoras_impressoras_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../impressoras/impressoras.component */
    "./src/app/impressoras/impressoras.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MonitorModule = function MonitorModule() {
      _classCallCheck(this, MonitorModule);
    };

    MonitorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_monitor_routing__WEBPACK_IMPORTED_MODULE_7__["MonitorRoutes"]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordionModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
      declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_6__["MonitorComponent"], _impressoras_impressoras_component__WEBPACK_IMPORTED_MODULE_9__["ImpressorasComponent"]],
      providers: [_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"]]
    })], MonitorModule);
    /***/
  },

  /***/
  "./src/app/monitor/monitor.routing.ts":
  /*!********************************************!*\
    !*** ./src/app/monitor/monitor.routing.ts ***!
    \********************************************/

  /*! exports provided: MonitorRoutes */

  /***/
  function srcAppMonitorMonitorRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorRoutes", function () {
      return MonitorRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./monitor.component */
    "./src/app/monitor/monitor.component.ts");
    /* harmony import */


    var _impressoras_impressoras_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../impressoras/impressoras.component */
    "./src/app/impressoras/impressoras.component.ts");

    var MonitorRoutes = [{
      path: '',
      component: _monitor_component__WEBPACK_IMPORTED_MODULE_1__["MonitorComponent"],
      data: {
        heading: 'Monitor'
      }
    }, {
      path: '',
      children: [{
        path: 'impressora',
        component: _impressoras_impressoras_component__WEBPACK_IMPORTED_MODULE_2__["ImpressorasComponent"],
        data: {
          heading: 'Impressoras'
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=monitor-monitor-module-es5.js.map