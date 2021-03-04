import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  cliente : Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.cliente = new Cliente(0,"","","", "");

    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];

      // console.log(id);
  
      if(id) {
        this.clienteService.getCliente(id)
        .then((cliente: Cliente) => {
          // console.log("teste:" + cliente);
          this.cliente = cliente;
        })
      }
    })
  }

}
