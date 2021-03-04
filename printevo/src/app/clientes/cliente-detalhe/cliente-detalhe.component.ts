import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  // moduleId: module.id,
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.scss']
})
export class ClienteDetalheComponent implements OnInit {

  cliente : Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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

  Depto() {
    //console.log("botão" + this.cliente.id);
    this.router.navigate(['cliente/departamento/' + this.cliente.id]);
  }

}
