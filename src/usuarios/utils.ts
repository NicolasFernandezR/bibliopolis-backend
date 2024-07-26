import { dataUsuario } from "Models/data";
import { Usuario } from "Models/usuario";



export function usuarioRegistrado (usuario:Usuario) : boolean{
    for (const element of dataUsuario) {
        if(element.password == usuario.password) return true;
    }
    return false;
}

export function isArrayEmpty (array) {
    return array.length === 0;
}

type AnyObject = { [key: string]: any };

function removeKeysFromArray(objectsArray: AnyObject[], keysToRemove: string[]): AnyObject[] {
    return objectsArray.map((obj) => {
        const newObj = { ...obj }; 
        keysToRemove.forEach(key => {
            delete newObj[key];
        });
        return newObj;
    });
}

function removeKeysFromObject(obj: AnyObject, keysToRemove: string[]): AnyObject {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToRemove.includes(key))
    );
}

export function simplifyUsers(object){
    const keyremove: string[]= ['password','historialPedidos'];
    return removeKeysFromArray(object,keyremove);
}

export function simplifyUser(object){
    const keyremove: string[]= ['password','historialPedidos'];
    return removeKeysFromObject(object,keyremove);
}