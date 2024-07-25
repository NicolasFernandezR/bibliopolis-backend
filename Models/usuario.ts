export class Usuario{
    id: string;
    nombre: string;
    correoElectronico: string;
    password: string;
    direccion: string;
    historialPedidos: string;
    constructor(
        id: string,
        nombre: string,
        correoElectronico: string,
        password: string,
        direccion: string,
        historialPedidos: string,
    ){
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.password = password;
        this.direccion = direccion;
        this.historialPedidos = historialPedidos;
    }
}