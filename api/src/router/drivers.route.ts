import express, { NextFunction } from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/drivers", async (request:Request, response:Response, next:NextFunction) => {
    // Implement logic
});

router.post("/drivers/:id/overtake", async (request:Request, response:Response, next:NextFunction) => {
    // Implement logic
});


export default router;
