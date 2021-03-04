import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

import { CLIENTES } from './cliente.mock';
import { Cliente } from './cliente.model';

@Injectable()

export class ClienteService{

    constructor() {

    }

    getClientes(): Promise<Cliente[]> {
        return Promise.resolve(CLIENTES);
    }

    getCliente(id:number) : Promise<Cliente> {
        return this.getClientes()
        .then((clientes:Cliente[]) => clientes.find(cliente => cliente.id === id));
    }
}