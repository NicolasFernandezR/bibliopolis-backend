import { dataLibros } from "Models/data";
import { Libro } from "Models/libro";

export function libroRegistrado (libro: Libro) : boolean{
    for (const element of dataLibros) {
        if(element.isbn == libro.isbn) return true;
    }
    return false;
}