
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { DepartamentoComponent } from './departamento/departamento.component';

export const ClientesRoutes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    data: {
      heading: 'Cliente'
    }
  },
  {
    path: '',
    children: [
      {
        path: 'cliente',
        component: ClientesComponent,
        data: {
          heading: 'Cliente'
        }
      },
      {
        path: 'cliente-detalhe',
        component: ClienteDetalheComponent,
        data: {
          heading: 'Detalhe do Cliente'
        }
      },
      {
        path: 'cliente-detalhe/:id',
        component: ClienteDetalheComponent,
        data: {
          heading: 'Detalhe do Cliente'
        }
      },
      {
        path: 'departamento/:id',
        component: DepartamentoComponent,
        data: {
          heading: 'Departamento'
        }
      }
    ]
  }
];
