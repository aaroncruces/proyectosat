export type Cliente = {
    id?: number,
    nombre: string,
    apellido: string,
    apellido2?: string,
    rut: number,
     //cambiar a contactos segun db
    telefonoMovil?:number,
    telefonoFijo?:number,
    email1?:string,
    email2?:string,
    //cambiar a direcciones segun db
    direccion?:string
}