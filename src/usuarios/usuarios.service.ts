import { Injectable } from '@nestjs/common';
import { Usuario } from 'Models/usuario';
import { randomUUID } from 'crypto';
import { simplifyUsers, usuarioRegistrado } from './utils';
import { dataUsuario } from 'Models/data';

@Injectable()
export class UsuariosService {

    crearUsuario(usuario: Usuario): Usuario {
        if(usuarioRegistrado(usuario)) return null;
        const nuevoUsuario: Usuario = {
            id: randomUUID(),
            ...usuario
        }
        dataUsuario.push(nuevoUsuario);
        return nuevoUsuario;
    }

    usuarioById(id: string): Usuario {
        for (const element of dataUsuario) {
            if (element.id == id) return element
        }
        return null
    }

    usuarios():Usuario[]{
        return dataUsuario;
    }

    eliminarUsuario(id: string): boolean {
        for (const idx in dataUsuario) {
            if (dataUsuario[idx].id == id){
                dataUsuario.splice(Number(idx),1);
                return true
            }
        }
        return false
    }
}
