import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Libro } from 'Models/libro';
import { LibrosService } from './libros.service';
import { Response } from 'express';
import { isArrayEmpty } from 'src/usuarios/utils';

@Controller('libros')
export class LibrosController {
    constructor(private readonly libroService: LibrosService) {}

    @Post()
    crearLibro(@Body() libro:Libro, @Res() res:Response){
        const result: boolean = this.libroService.crearLibro(libro);
        if(!result) return res.status(404).json({ message : 'Libro ya se encuetra registrado'});
        res.status(201).json({ message : 'Libro creado exitosamente'});
    }

    @Get(':id')
    obtenerLibroById(@Param('id') id:string, @Res() res:Response){
        const result: Libro = this.libroService.libroById(id);
        if(!result) return res.status(404).json({ message : 'Libro no se encuentra registrado'});
        res.json(result);
    }

    @Get()
    obtenerLibros(@Query('genero') genero: string, @Query('autor') autor: string, @Res() res:Response){
        const result : Libro[] = this.libroService.libros(genero, autor);
        if(isArrayEmpty(result)) return res.status(404).json({ message : 'no se registran libros'});
        res.json(result);
    }

    @Delete(':id')
    eliminarLibroById(@Param('id') id:string, @Res() res:Response){
        const result: boolean = this.libroService.eliminarUsuario(id);
        if(!result) return res.status(404).json({ message : 'libro no se encuentra registrado'});
        res.json({ message : 'libro eliminado exitosamente'});
    }
}
