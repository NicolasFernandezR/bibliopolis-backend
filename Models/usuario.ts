import { Pedido } from "./pedido";

export class Usuario{
    id: string;
    nombre: string;
    correoElectronico: string;
    password: string;
    direccion: string;
    historialPedidos: Pedido[];
    constructor(
        id: string,
        nombre: string,
        correoElectronico: string,
        password: string,
        direccion: string,
        historialPedidos: Pedido[],
    ){
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.password = password;
        this.direccion = direccion;
        this.historialPedidos = historialPedidos;
    }
}