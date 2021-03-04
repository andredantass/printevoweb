import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { MonitorComponent } from './monitor.component';
import { ImpressorasComponent } from '../impressoras/impressoras.component';


export const MonitorRoutes: Routes = [
    {
        path: '',
        component: MonitorComponent,
        data: {
            heading: 'Monitor'
        }
    },
    {
        path: '',
        children: [
            {
                path: 'impressora',
                component: ImpressorasComponent,
                data: {
                    heading: 'Impressoras'
                }
            }
        ]
    }
]