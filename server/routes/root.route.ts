import { Router } from "express";
export const root_route = Router();

root_route.get('/', (req, res) => {
    res.json('index')
})
