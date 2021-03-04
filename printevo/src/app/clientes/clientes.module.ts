import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ClientesComponent} from './clientes.component';
import { ClientesRoutes} from './clientes.routing';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

import { ClienteService } from './cliente.service';
import { DepartamentoComponent } from './departamento/departamento.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientesRoutes),
    NgxDatatableModule
  ],
  declarations: [ClientesComponent, 
    ClienteListaComponent,
    ClienteDetalheComponent,
    DepartamentoComponent
  ],
  exports: [ ClienteListaComponent ],
  providers: [ClienteService]
})
export class ClientesModule { }
