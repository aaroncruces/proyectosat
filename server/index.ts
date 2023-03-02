import { PrismaClient } from "@prisma/client"
//import * as express from "express";
import express from "express";
import { json as express_json } from "express";
import { persona_route } from "./routes/person";
import cors from "cors";



const app = express()
app.use(cors())
app.use(express_json())
app.use(persona_route)

app.listen(5000, () => console.log("server running 5000"))


// const prisma = new PrismaClient();
// async function main() {
//     //testing prisma
//     // const personas = await prisma.persona.create({
//     //     data: {
//     //         nombre: "aaron",
//     //         apellido: "cruces",
//     //         otrosapellidos: "caceres",
//     //         rut: 182536026,
//     //         // contactos: {
//     //         //     createMany: {
//     //         //         data: [{
//     //         //             detalles: "aaroncruces@gmail.com",
//     //         //             tipo: TiposContactos.CORREOELECTRONICO
//     //         //         },
//     //         //         {
//     //         //             detalles: "aaroncruces@gmail.com",
//     //         //             tipo: TiposContactos.CORREOELECTRONICO
//     //         //         }
//     //         //         ]
//     //         //     }
//     //         // }
//     //     }
//     // })
//     // console.log(personas);
//     await prisma.persona.deleteMany()
// }
// main()
//     .catch(e => {
//         console.error(e.message)
//     })
//     .finally(async () => {
//         await prisma.$disconnect
//     })
