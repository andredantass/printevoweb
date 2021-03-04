import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MonitorComponent } from './monitor.component';
import { MonitorRoutes } from './monitor.routing';

import { ClienteService } from '../clientes/cliente.service';
import { ImpressorasComponent } from '../impressoras/impressoras.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MonitorRoutes),
    NgbAccordionModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [MonitorComponent, ImpressorasComponent],

  providers: [ClienteService]
})
export class MonitorModule { }
