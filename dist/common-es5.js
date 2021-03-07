function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/clientes/cliente.mock.ts":
  /*!******************************************!*\
    !*** ./src/app/clientes/cliente.mock.ts ***!
    \******************************************/

  /*! exports provided: CLIENTES */

  /***/
  function srcAppClientesClienteMockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLIENTES", function () {
      return CLIENTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CLIENTES = [{
      id: 1,
      cnpj: '11.111.111/0001-11',
      nome: 'José da Silva S.A',
      email: 'jose.silva@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 2,
      cnpj: '22.222.222/0002-22',
      nome: 'Paulo Lima S/A',
      email: 'paulolima@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 3,
      cnpj: '33.333.333/0003-33',
      nome: 'Suzana Ribeiro  ME Ltda',
      email: 'suzana@net.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 4,
      cnpj: '44.444.444/0004-44',
      nome: 'Paola Fernandes Ltda',
      email: 'paolafernand@hotmail.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 5,
      cnpj: '55.555.555/0005-55',
      nome: 'Amelia Souza SA',
      email: 'amelia@bol.com.br',
      telefone: '(00) 9987-9088'
    }, {
      id: 6,
      cnpj: '66.666.666/0666-66',
      nome: 'Sadia S.A',
      email: 'sadia@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 7,
      cnpj: '77.777.777/0777-77',
      nome: 'Danone S/A',
      email: 'danone@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 8,
      cnpj: '88.888.888/0888-88',
      nome: 'Seara ME Ltda',
      email: 'seara@net.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 9,
      cnpj: '99.999.999/0999-99',
      nome: 'Paulista Ltda',
      email: 'paulista@hotmail.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 10,
      cnpj: '10.101.101/0010-01',
      nome: 'Vigor SA',
      email: 'vigor@bol.com.br',
      telefone: '(00) 9987-9088'
    }, {
      id: 11,
      cnpj: '11.111.111/0011-11',
      nome: 'XXXXX S.A',
      email: 'xxxxx@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 12,
      cnpj: '22.222.222/0012-22',
      nome: 'YYYYY S/A',
      email: 'yyyyy@yahoo.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 13,
      cnpj: '33.333.333/0013-33',
      nome: 'ZZZZZ ME Ltda',
      email: 'zzzzz@net.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 14,
      cnpj: '44.444.444/0014-44',
      nome: 'WWWWW Ltda',
      email: 'wwwww@hotmail.com',
      telefone: '(00) 9987-9088'
    }, {
      id: 15,
      cnpj: '55.555.555/0015-55',
      nome: 'QQQQQ SA',
      email: 'qqqqq@bol.com.br',
      telefone: '(00) 9987-9088'
    }];
    /***/
  },

  /***/
  "./src/app/clientes/cliente.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/clientes/cliente.model.ts ***!
    \*******************************************/

  /*! exports provided: Cliente */

  /***/
  function srcAppClientesClienteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cliente", function () {
      return Cliente;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Cliente = function Cliente(id, cnpj, nome, email, telefone) {
      _classCallCheck(this, Cliente);

      this.id = id;
      this.cnpj = cnpj;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    };
    /***/

  },

  /***/
  "./src/app/clientes/cliente.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/clientes/cliente.service.ts ***!
    \*********************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppClientesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
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


    var _cliente_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cliente.mock */
    "./src/app/clientes/cliente.mock.ts");

    var ClienteService = /*#__PURE__*/function () {
      function ClienteService() {
        _classCallCheck(this, ClienteService);
      }

      _createClass(ClienteService, [{
        key: "getClientes",
        value: function getClientes() {
          return Promise.resolve(_cliente_mock__WEBPACK_IMPORTED_MODULE_2__["CLIENTES"]);
        }
      }, {
        key: "getCliente",
        value: function getCliente(id) {
          return this.getClientes().then(function (clientes) {
            return clientes.find(function (cliente) {
              return cliente.id === id;
            });
          });
        }
      }]);

      return ClienteService;
    }();

    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ClienteService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map