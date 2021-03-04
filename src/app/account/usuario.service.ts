
import { Injectable } from '@angular/core';

import { USUARIOS } from './usuario.mock';
import { Usuario } from './usuario.model';

@Injectable()

export class UsuarioService {
    getUsuarios() : Promise<Usuario[]> {
        return Promise.resolve(USUARIOS);
    }

    getUsuario(user : string) : Promise<Usuario> {
        return this.getUsuarios()
        .then((usuarios:Usuario[]) => usuarios.find(usuario => usuario.usuario === user));
    }
}