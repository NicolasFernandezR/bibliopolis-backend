import { itemPedido } from "./itemPedido";
import { Libro } from "./libro";
import { Pedido } from "./pedido";
import { Usuario } from "./usuario";
import { randomUUID } from "crypto";

export const dataUsuario: Usuario[] = [];
export const dataLibros: Libro[] = [];
export const dataPedidos: Pedido[] = [];
export const dataItemspedidos: itemPedido[] = [];

// dataLibros
dataLibros.push(new Libro('978-3-16-148410-0', 'El Principito', 'Antoine de Saint-Exupéry', 'Editorial X', 'Ficción', '15.00', 'Un pequeño príncipe de un asteroide...', 'ruta/a/imagen1.jpg', 100));
dataLibros.push(new Libro('978-0-14-044926-6', '1984', 'George Orwell', 'Editorial Y', 'Distopía', '20.00', 'Una novela sobre un régimen totalitario...', 'ruta/a/imagen2.jpg', 50));

// dataUsuario
dataUsuario.push(new Usuario(randomUUID(), 'Juan Pérez', 'juan.perez@example.com', 'password123', 'Calle Falsa 123', []));
dataUsuario.push(new Usuario(randomUUID(), 'María López', 'maria.lopez@example.com', 'password456', 'Avenida Siempre Viva 742', []));

// items de pedido
dataItemspedidos.push(new itemPedido(dataLibros[0], 2));
dataItemspedidos.push(new itemPedido(dataLibros[1], 1));

// // dataPedidos
dataPedidos.push(new Pedido(randomUUID(), dataUsuario[0], new Date(), 'pendiente', 50.00, [dataItemspedidos[0]]));
dataPedidos.push(new Pedido(randomUUID(), dataUsuario[1], new Date(), 'en proceso', 20.00, [dataItemspedidos[1]]));

// // Asignar dataPedidos al historial de dataUsuario
//dataUsuario[0].historialPedidos.push(dataPedidos[0]);
//dataUsuario[1].historialPedidos.push(dataPedidos[1]);
