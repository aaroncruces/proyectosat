import { Router } from "express";
export const personRoute = Router();
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
personRoute.post("/person", async (req, res) => {
    //console.log(JSON.stringify(req.body, null, 2));  return;
    let missingFields: string[] = []
    let missingFieldsMessages: string[] = []
    if (!req.body.rut) {
        missingFields.push("rut")
        missingFieldsMessages.push("Falta campo: rut")
    }
    if (isNaN(parseInt(req.body.rut))) {
        missingFields.push("rut")
        missingFieldsMessages.push("Rut Invalido")
    }
    if (!req.body.name) {
        missingFields.push("name")
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
        //TS gets in the way here
        let newPerson: any = {}

        //compiling parameters to save on DB
        newPerson["rut"] = parseInt(req.body.rut)
        newPerson["name"] = req.body.name
        if (req.body.middleNames && req.body.middleNames !== "") newPerson["middleNames"] = req.body.middleNames;
        if (req.body.paternalLastName && req.body.paternalLastName !== "") newPerson["paternalLastName"] = req.body.paternalLastName;
        if (req.body.maternalLastName && req.body.maternalLastName !== "") newPerson["maternalLastName"] = req.body.maternalLastName;
        if (req.body.phoneNumbers && req.body.phoneNumbers.length > 0) {
            //filter out empty phones
            let phoneNumerList: any =
                req.body.phoneNumbers.filter((phoneNumber: any) => {
                    return phoneNumber["number"] && phoneNumber["number"] !== ""
                })

            if (phoneNumerList.length > 0) {
                newPerson["phoneNumbers"] = {
                    createMany: {
                        data: phoneNumerList
                    }
                }
            }

        }

        if (req.body.emails && req.body.emails.length > 0) {
            //filter out empty emails
            let emailNumerList: any =
                req.body.emails.filter((email: any) => {
                    return email["email"] && email["email"] !== ""
                })
            if (emailNumerList.length > 0) {
                newPerson["emails"] = {
                    createMany: {
                        data: emailNumerList
                    }
                }
            }

        }

        await prisma.person.deleteMany()  //debug
        const postedPerson = await prisma.person.create({
            //@ts-ignore TS gets in the way here
            data: {
                ...newPerson
            }
        })
        res.status(StatusCodes.CREATED)
        res.json(postedPerson)


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
                })
            }
        }
        else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            res.json({
                httpError: ReasonPhrases.INTERNAL_SERVER_ERROR,
            })
        }

    } finally {
        prisma.$disconnect()
    }

})

//read
personRoute.get("/person", (req, res) => {
    console.log("get");
    console.log(req.body);
    const obj = {
        method: "get"
    }
    res.json(obj)
})

//creates or updates if existing 
// see: https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http
personRoute.put("/persona", (req, res) => {

    console.log("put");
    console.log(req.body);
    const obj = {
        method: "put"
    }
    res.json(obj)
})

//update partially existing
personRoute.patch("/persona", async (req, res) => {

})

//delete
personRoute.delete("/persona", (req, res) => {

    console.log("delete");
    console.log(req.body);
    const obj = {
        method: "delete"
    }
    res.json(obj)
})