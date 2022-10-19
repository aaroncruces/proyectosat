import express from "express";
export const venta_route=express.Router();

venta_route.get('/venta',(req,res)=>{
    res.json(' venta')
})
 