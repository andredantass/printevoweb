import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';


@Component({
  moduleId: module.id,
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss']
})
export class ClienteListaComponent {

  rows: any[] = [];
  selected: any[] = [];
  temp = [];

  columns = [{ name: 'CNPJ' }, { prop: 'nome' }, { name: 'Email' }, { name: 'Telefone' }];


  constructor(private route : Router) {

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
    const temp = this.temp.filter(function(d) {
      return d.nome.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }

  onSelect(event){

     let id: number =  this.selected[0]['id'];

     this.route.navigate(['cliente/cliente-detalhe/' + id]);

  }

  onActivate(event) {
    //  console.log('Event: activate', event);

  }

}


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
