import { Router } from "express";
export const persona_route = Router();
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';
//https://www.npmjs.com/package/http-status-codes
import { PrismaClient, Prisma } from "@prisma/client"
const prisma = new PrismaClient();

//create
persona_route.post("/persona", async (req, res) => {
    console.log(JSON.stringify(req.body));

    return
    let missingFields: string[] = []
    let missingFieldsMessages: string[] = []
    if (!req.body.rut) {
        missingFields.push("rut")
        missingFieldsMessages.push("Falta campo: rut")
    }
    if (!req.body.nombre) {
        missingFields.push("nombre")
        missingFieldsMessages.push("Falta campo: nombre")
    }
    if (missingFields.length > 0) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        res.json({
            httpError: ReasonPhrases.UNPROCESSABLE_ENTITY,
            missingFieldsMessages,
            missingFields
        })
        return
    }

    try {
        prisma.$connect()
        //await prisma.persona.deleteMany()
        const personaIngresada = await prisma.persona.create({
            data: {
                rut: req.body.rut,
                nombre: req.body.nombre,
                otrosnombres: req.body.otrosnombres,
                apellido: req.body.apellido,
                segundoapellido: req.body.segundoapellido,
                numerostelefonicos: req.body.numerostelefonicos && {
                    createMany: {
                        data: req.body.numerostelefonicos
                    }
                },
                correoselectronicos: req.body.correoselectronicos && {
                    createMany: {
                        data: req.body.correoselectronicos
                    }
                },
                otroscontactos: req.body.otroscontactos && {
                    createMany: {
                        data: req.body.otroscontactos
                    }
                }
            }
        })

        res.status(StatusCodes.CREATED)
        res.json(personaIngresada)

    } catch (prismaError) {
        //https://www.prisma.io/docs/reference/api-reference/error-reference
        if (prismaError instanceof Prisma.PrismaClientKnownRequestError) {
            let databaseErrorMessage = ""
            //@ts-ignore
            if (prismaError.code == "P2002") {
                databaseErrorMessage = "Ya hay una persona con este RUT, ingresar otra persona"
                res.status(StatusCodes.UNPROCESSABLE_ENTITY)
                res.json({
                    httpError: ReasonPhrases.UNPROCESSABLE_ENTITY,
                    databaseErrorMessage,
                    prismaError//for debugging 
                })
            }
        }

        else {
            //other errors
        }

    } finally {
        prisma.$disconnect()
    }

})

//read
persona_route.get("/persona", (req, res) => {
    console.log("get");
    console.log(req.body);
    const obj = {
        method: "get"
    }
    res.json(obj)
})

//creates or updates if existing 
// see: https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http
persona_route.put("/persona", (req, res) => {

    console.log("put");
    console.log(req.body);
    const obj = {
        method: "put"
    }
    res.json(obj)
})

//update partially existing
persona_route.post("/persona", async (req, res) => {

    let missingFields: string[] = []
    let missingFieldsMessages: string[] = []
    if (!req.body.rut) {
        missingFields.push("rut")
        missingFieldsMessages.push("Falta campo: rut")
    }
    if (!req.body.nombre) {
        missingFields.push("nombre")
        missingFieldsMessages.push("Falta campo: nombre")
    }
    if (missingFields.length > 0) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        res.json({
            httpError: ReasonPhrases.UNPROCESSABLE_ENTITY,
            missingFieldsMessages,
            missingFields
        })
        return
    }

    try {
        prisma.$connect()
        //await prisma.persona.deleteMany()
        const personaIngresada = await prisma.persona.create({
            data: {
                rut: req.body.rut,
                nombre: req.body.nombre,
                otrosnombres: req.body.otrosnombres,
                apellido: req.body.apellido,
                segundoapellido: req.body.segundoapellido,
                numerostelefonicos: req.body.numerostelefonicos && {
                    createMany: {
                        data: req.body.numerostelefonicos
                    }
                },
                correoselectronicos: req.body.correoselectronicos && {
                    createMany: {
                        data: req.body.correoselectronicos
                    }
                },
                otroscontactos: req.body.otroscontactos && {
                    createMany: {
                        data: req.body.otroscontactos
                    }
                }
            }
        })

        res.status(StatusCodes.CREATED)
        res.json(personaIngresada)

    } catch (prismaError) {
        //https://www.prisma.io/docs/reference/api-reference/error-reference
        if (prismaError instanceof Prisma.PrismaClientKnownRequestError) {
            let databaseErrorMessage = ""
            //@ts-ignore
            if (prismaError.code == "P2002") {
                databaseErrorMessage = "Ya hay una persona con este RUT, ingresar otra persona"
                res.status(StatusCodes.UNPROCESSABLE_ENTITY)
                res.json({
                    httpError: ReasonPhrases.UNPROCESSABLE_ENTITY,
                    databaseErrorMessage,
                    prismaError//for debugging 
                })
            }
        }

        else {

        }

    } finally {
        prisma.$disconnect()
    }

})

//delete
persona_route.delete("/persona", (req, res) => {

    console.log("delete");
    console.log(req.body);
    const obj = {
        method: "delete"
    }
    res.json(obj)
})