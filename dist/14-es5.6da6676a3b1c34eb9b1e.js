function _toConsumableArray(l){return _arrayWithoutHoles(l)||_iterableToArray(l)||_unsupportedIterableToArray(l)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(l,n){if(l){if("string"==typeof l)return _arrayLikeToArray(l,n);var u=Object.prototype.toString.call(l).slice(8,-1);return"Object"===u&&l.constructor&&(u=l.constructor.name),"Map"===u||"Set"===u?Array.from(l):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?_arrayLikeToArray(l,n):void 0}}function _iterableToArray(l){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(l))return Array.from(l)}function _arrayWithoutHoles(l){if(Array.isArray(l))return _arrayLikeToArray(l)}function _arrayLikeToArray(l,n){(null==n||n>l.length)&&(n=l.length);for(var u=0,e=new Array(n);u<n;u++)e[u]=l[u];return e}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6LS2":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),r=u("iInd"),i=u("l90o"),a=u("w9WL"),d=function(){function l(n){var u=this;_classCallCheck(this,l),this.route=n,this.rows=[],this.selected=[],this.temp=[],this.columns=[{name:"CNPJ"},{prop:"nome"},{name:"Email"},{name:"Telefone"}],this.fetch((function(l){u.temp=_toConsumableArray(l),u.rows=l}))}return _createClass(l,[{key:"fetch",value:function(l){var n=new XMLHttpRequest;n.open("GET","assets/data/clientes.json"),n.onload=function(){l(JSON.parse(n.response))},n.send()}},{key:"updateFilter",value:function(l){var n=l.target.value,u=this.temp.filter((function(l){return-1!==l.nome.toLowerCase().indexOf(n)||!n}));this.rows=u}},{key:"onSelect",value:function(l){this.route.navigate(["cliente/cliente-detalhe/"+this.selected[0].id])}},{key:"onActivate",value:function(l){}}]),l}(),c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-uppercase mb-3 fw-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Pesquisa de Clientes"])),(l()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,6,"form",[],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,4,"div",[["class","form-group col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,8).onClick()&&t),t}),null,null)),e["\u0275did"](8,16384,null,0,r.p,[r.o,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](9,2),(l()(),e["\u0275ted"](-1,null,["Novo"])),(l()(),e["\u0275eld"](11,0,null,null,0,"input",[["class","form-control mb-3"],["placeholder","Pesquisar por nome do Cliente..."],["required",""],["type","email"]],null,[[null,"keyup"]],(function(l,n,u){var e=!0;return"keyup"===n&&(e=!1!==l.component.updateFilter(u)&&e),e}),null,null)),(l()(),e["\u0275eld"](12,0,null,null,5,"ngx-datatable",[["class","selection-cell ngx-datatable"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[[null,"select"],[null,"activate"],["window","resize"]],(function(l,n,u){var t=!0,o=l.component;return"window:resize"===n&&(t=!1!==e["\u0275nov"](l,13).onWindowResize()&&t),"select"===n&&(t=!1!==o.onSelect(u)&&t),"activate"===n&&(t=!1!==o.onActivate(u)&&t),t}),i.b,i.a)),e["\u0275did"](13,5750784,null,4,a.n,[[1,a.v],[1,a.o],e.ChangeDetectorRef,e.ElementRef,e.KeyValueDiffers,a.a,[2,"configuration"]],{rows:[0,"rows"],columns:[1,"columns"],selected:[2,"selected"],rowHeight:[3,"rowHeight"],columnMode:[4,"columnMode"],headerHeight:[5,"headerHeight"],footerHeight:[6,"footerHeight"],limit:[7,"limit"],selectionType:[8,"selectionType"]},{activate:"activate",select:"select"}),e["\u0275qud"](603979776,1,{columnTemplates:1}),e["\u0275qud"](603979776,2,{rowDetail:0}),e["\u0275qud"](603979776,3,{groupHeader:0}),e["\u0275qud"](603979776,4,{footer:0})],(function(l,n){var u=n.component,e=l(n,9,0,"cliente-detalhe","");l(n,8,0,e),l(n,13,0,u.rows,u.columns,u.selected,40,"force",40,50,10,"cell")}),(function(l,n){l(n,12,1,[e["\u0275nov"](n,13).isFixedHeader,e["\u0275nov"](n,13).isFixedRow,e["\u0275nov"](n,13).isVertScroll,e["\u0275nov"](n,13).isVirtualized,e["\u0275nov"](n,13).isHorScroll,e["\u0275nov"](n,13).isSelectable,e["\u0275nov"](n,13).isCheckboxSelection,e["\u0275nov"](n,13).isCellSelection,e["\u0275nov"](n,13).isSingleSelection,e["\u0275nov"](n,13).isMultiSelection,e["\u0275nov"](n,13).isMultiClickSelection])}))}var p=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),m=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-cliente-lista",[],null,null,null,s,c)),e["\u0275did"](1,49152,null,0,d,[r.o],null,null)],null,null)}var v=e["\u0275ccf"]("app-cliente",p,(function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-cliente",[],null,null,null,f,m)),e["\u0275did"](1,114688,null,0,p,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),h=u("KwZS"),b=u("1ta/"),y=function(){function l(n,u,e,t){_classCallCheck(this,l),this.clienteService=n,this.route=u,this.router=e,this.location=t}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.cliente=new h.a(0,"","","",""),this.route.params.forEach((function(n){var u=+n.id;u&&l.clienteService.getCliente(u).then((function(n){l.cliente=n}))}))}},{key:"Depto",value:function(){this.router.navigate(["cliente/departamento/"+this.cliente.id])}}]),l}(),C=u("SVse"),g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-uppercase mb-3 fw-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dados do Cliente"])),(l()(),e["\u0275eld"](2,0,null,null,65,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,62,"form",[],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,13,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"label",[["for","inputCustCNPJ"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ID"])),(l()(),e["\u0275eld"](10,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustID"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"label",[["for","inputCustName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Data Cadastro"])),(l()(),e["\u0275eld"](14,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustDtIni"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"],["value",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,3,"div",[["class","form-group col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"label",[["for","inputCustName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Status"])),(l()(),e["\u0275eld"](18,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustStatus"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"],["value",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"label",[["for","inputCustCNPJ"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CNPJ do Cliente"])),(l()(),e["\u0275eld"](24,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCNPJ"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,3,"div",[["class","form-group col-md-7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"label",[["for","inputCustName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nome"])),(l()(),e["\u0275eld"](28,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustName"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,5,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,3,"div",[["class","form-group col-md-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"label",[["for","inputCustAddress"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Endere\xe7o"])),(l()(),e["\u0275eld"](34,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustAddress"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,1,"label",[["for","inpuCustNeighborhood"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bairro"])),(l()(),e["\u0275eld"](40,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inpuCustNeighborhood"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,1,"label",[["for","inputCustCity"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Cidade"])),(l()(),e["\u0275eld"](44,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCity"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"label",[["for","inputResponsable"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Respons\xe1vel"])),(l()(),e["\u0275eld"](50,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputResponsable"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,3,"div",[["class","form-group col-md-5 "]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,1,"label",[["for","inputCustEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275eld"](54,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustEmail"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,11,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,10,"div",[["class","form-group col-sm-11"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Depto()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,["+Depto"])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](60,0,null,null,1,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Salvar"])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](63,0,null,null,3,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,64).onClick()&&t),t}),null,null)),e["\u0275did"](64,16384,null,0,r.p,[r.o,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](65,1),(l()(),e["\u0275ted"](-1,null,["Voltar"])),(l()(),e["\u0275eld"](67,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var u=l(n,65,0,"/cliente");l(n,64,0,u)}),(function(l,n){var u=n.component;l(n,10,0,e["\u0275inlineInterpolate"](1,"",u.cliente.id,"")),l(n,24,0,e["\u0275inlineInterpolate"](1,"",u.cliente.cnpj,"")),l(n,28,0,e["\u0275inlineInterpolate"](1,"",u.cliente.nome,"")),l(n,54,0,e["\u0275inlineInterpolate"](1,"",u.cliente.email,""))}))}var k=e["\u0275ccf"]("app-cliente-detalhe",y,(function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-cliente-detalhe",[],null,null,null,w,g)),e["\u0275did"](1,114688,null,0,y,[b.a,r.a,r.o,C.Location],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),I=function(){function l(n,u){_classCallCheck(this,l),this.clienteService=n,this.route=u}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.cliente=new h.a(0,"","","",""),this.route.params.forEach((function(n){var u=+n.id;u&&l.clienteService.getCliente(u).then((function(n){l.cliente=n}))}))}}]),l}(),x=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","text-uppercase mb-3 fw-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dados do Departamento"])),(l()(),e["\u0275eld"](2,0,null,null,48,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,45,"form",[],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"label",[["for","inputCustCNPJ"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CNPJ do Cliente"])),(l()(),e["\u0275eld"](10,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCNPJ"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,3,"div",[["class","form-group col-md-7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"label",[["for","inputCustName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nome"])),(l()(),e["\u0275eld"](14,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustName"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,5,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,3,"div",[["class","form-group col-md-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"label",[["for","inputCustAddress"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nome do Departamento"])),(l()(),e["\u0275eld"](20,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustAddress"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,1,"label",[["for","inpuCustNeighborhood"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Complemento"])),(l()(),e["\u0275eld"](26,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inpuCustNeighborhood"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,1,"label",[["for","inputCustCity"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sala"])),(l()(),e["\u0275eld"](30,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCity"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"label",[["for","inputResponsable"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Respons\xe1vel"])),(l()(),e["\u0275eld"](36,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputResponsable"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","form-group col-md-5 "]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,1,"label",[["for","inputCustEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275eld"](40,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustEmail"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,8,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,7,"div",[["class","form-group col-sm-11"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Salvar"])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](46,0,null,null,3,"button",[["class","btn btn-primary"],["style","width: 8%;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,47).onClick()&&t),t}),null,null)),e["\u0275did"](47,16384,null,0,r.p,[r.o,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](48,1),(l()(),e["\u0275ted"](-1,null,["Voltar"])),(l()(),e["\u0275eld"](50,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var u=l(n,48,0,"/cliente");l(n,47,0,u)}),(function(l,n){var u=n.component;l(n,10,0,e["\u0275inlineInterpolate"](1,"",u.cliente.cnpj,"")),l(n,14,0,e["\u0275inlineInterpolate"](1,"",u.cliente.nome,"")),l(n,40,0,e["\u0275inlineInterpolate"](1,"",u.cliente.email,""))}))}var S=e["\u0275ccf"]("app-departamento",I,(function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-departamento",[],null,null,null,_,x)),e["\u0275did"](1,114688,null,0,I,[b.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),N={heading:"Cliente"},A={heading:"Cliente"},R={heading:"Detalhe do Cliente"},L={heading:"Detalhe do Cliente"},D={heading:"Departamento"};u.d(n,"ClientesModuleNgFactory",(function(){return E}));var E=e["\u0275cmf"](t,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,v,k,S]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[e.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,a.v,a.v,[C.DOCUMENT]),e["\u0275mpd"](4608,a.o,a.o,[]),e["\u0275mpd"](4608,a.a,a.a,[]),e["\u0275mpd"](4608,b.a,b.a,[]),e["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),e["\u0275mpd"](1073742336,r.s,r.s,[[2,r.x],[2,r.o]]),e["\u0275mpd"](1073742336,a.r,a.r,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,r.m,(function(){return[[{path:"",component:p,data:N},{path:"",children:[{path:"cliente",component:p,data:A},{path:"cliente-detalhe",component:y,data:R},{path:"cliente-detalhe/:id",component:y,data:L},{path:"departamento/:id",component:I,data:D}]}]]}),[])])}))}}]);