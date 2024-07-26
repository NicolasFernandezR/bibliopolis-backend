import { Injectable } from '@nestjs/common';
import { libroRegistrado } from './utils';
import { Libro } from 'Models/libro';
import { dataLibros } from 'Models/data';

@Injectable()
export class LibrosService {

    crearLibro(libro: Libro): boolean {
        if (libroRegistrado(libro)) return false;
        dataLibros.push(libro);
        return true;
    }

    libroById(isbn:string): Libro {
        for (const element of dataLibros) {
            if (element.isbn == isbn) return element
        }
        return null
    }

    libros(genero: string, autor: string): Libro[]{
        let result: Libro[] = dataLibros;
        if(genero){
            result = result.filter(libro => libro.genero.toLocaleLowerCase() == genero.toLocaleLowerCase());
        }
        if(autor){
            result = result.filter(libro => libro.autor.toLocaleLowerCase() == autor.toLocaleLowerCase());
        }
        return result;
    }

    eliminarUsuario(isbn: string): boolean {
        for (const idx in dataLibros) {
            if (dataLibros[idx].isbn == isbn){
                dataLibros.splice(Number(idx),1);
                return true
            }
        }
        return false
    }
    
}
