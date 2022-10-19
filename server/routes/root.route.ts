import express from "express";
export const root_route=express.Router();

root_route.get('/',(req,res)=>{
    res.json('index')
})
 