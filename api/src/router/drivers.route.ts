import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { getDriversController, overtakeDriverController } from "../controllers/drivers.controller";

const router = express.Router();

/**
 * GET - get drivers
 */
router.get("/drivers", getDriversController);

/**
 * POST - edit drivers (only overtake)
 */
router.post("/drivers/:id/overtake", overtakeDriverController);


export default router;
