import { itemPedido } from "./itemPedido";
import { Usuario } from "./usuario";

export class Pedido {
    id: string;
    usuario: Usuario;
    fechaPedido: Date;
    estado: string;
    total: number;
    items: itemPedido[];
    constructor(
        id: string,
        usuario: Usuario,
        fechaPedido: Date,
        estado: string,
        total: number,
        items: itemPedido[],
    ){
        this.id = id;
        this.usuario = usuario;
        this.fechaPedido = fechaPedido;
        this.estado = estado;
        this.total = total;
        this.items = items;
    }
}