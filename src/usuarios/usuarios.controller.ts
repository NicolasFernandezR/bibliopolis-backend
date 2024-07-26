import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Usuario } from 'Models/usuario';
import { UsuariosService } from './usuarios.service';
import { isArrayEmpty, simplifyUser, simplifyUsers } from './utils';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly userService: UsuariosService) {}

    @Post()
    crearUsuario(@Body() usuario:Usuario, @Res() res:Response){
        const result: Usuario = this.userService.crearUsuario(usuario);
        if(!result) return res.status(404).json({ message : 'usuario ya se encuetra registrado'});
        res.status(201).json({ message : 'usuario creado exitosamente'});
    }

    @Get(':id')
    obtenerUsuarioById(@Param('id') id:string, @Res() res:Response){
        const result: Usuario = this.userService.usuarioById(id);
        if(!result) return res.status(404).json({ message : 'usuario no se encuentra registrado'});
        res.json(simplifyUser(result));
    }

    @Get()
    obtenerUsuarios(@Res() res:Response){
        const result : Usuario[] = this.userService.usuarios();
        if(isArrayEmpty(result)) return res.status(404).json({ message : 'no se registran usuarios'});
        res.json(simplifyUsers(result));
    }

    @Delete(':id')
    eliminarUsuarioById(@Param('id') id:string, @Res() res:Response){
        const result: boolean = this.userService.eliminarUsuario(id);
        if(!result) return res.status(404).json({ message : 'usuario no se encuentra registrado'});
        res.json({ message : 'usuario eliminado exitosamente'});
    }
}
