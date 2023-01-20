import { PrismaClient, TiposContactos } from "@prisma/client"
const prisma = new PrismaClient();


async function main() {
    //testing prisma
    const personas = await prisma.persona.create({
        data: {
            nombre: "aaron",
            apellido: "cruces",
            otrosapellidos: "caceres",
            rut: 18236026,
            contactos: {
                createMany: {
                    data: [{
                        detalles: "aaroncruces@gmail.com",
                        tipo: TiposContactos.CORREOELECTRONICO
                    },
                    {
                        detalles: "aaroncruces@gmail.com",
                        tipo: TiposContactos.CORREOELECTRONICO
                    }
                    ]
                }
            }
        }
    })
    console.log(personas);
    // await prisma.persona.deleteMany()
}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })
