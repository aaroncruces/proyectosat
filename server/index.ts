import express from "express";
import morgan from "morgan";
import path from "path";
import {venta_route} from "./routes/venta.route"
import {root_route} from "./routes/root.route"


//INIT
const app=express();
const project_path=path.join(__dirname,"..")
const public_path=path.join(project_path,"client","public")
const index_path=path.join(public_path,"index.html")


// MIDDLEWARES
// request logging
app.use(morgan('dev'))
//
app.use(express.json())

//ROUTES
//app.use(root_route)


app.get('/',(req,res)=>{
    res.sendFile(index_path)
})
console.log(public_path);

app.listen(5000,()=>console.log("serving on port 5000"))
