import { Component, OnInit } from '@angular/core';

import { Cliente } from '../clientes/cliente.model';
import { ClienteService } from '../clientes/cliente.service';


@Component({
  moduleId: module.id,
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  dtIni: string;
  dtFim: string;
  idCliente: number;
  cliente : Cliente;
  clientes : Cliente[];

  constructor(private clienteService : ClienteService) { }

  ngOnInit() : void {

    this.clienteService.getClientes()
    .then((clientes : Cliente[]) => {
      this.clientes = clientes;
    }).catch(err => console.log(err));

    this.cliente = new Cliente(0,"","","", "");
  }

  onSubmit() {

    this.cliente = new Cliente(0,"","","", "");
    
    let id : number = +this.idCliente;

    if(id) {
      this.clienteService.getCliente(id)
      .then((cliente: Cliente) => {
        this.cliente = cliente;
      })
    };

  }
}
