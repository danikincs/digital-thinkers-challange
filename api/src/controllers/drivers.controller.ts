import { Response, Request } from "express"
import { drivers } from "../app"

/**
 * Get all the drivers
 * 
 * TODO: This controller is probably unnecessary for the current setup, but the architecture would be the same if we store drivers in DB.
 * 
 * @param req Express request
 * @param res Express response
 */
export function getDriversController(req:Request, res:Response) {

    let driversRes = drivers;
    res.status(200).send(driversRes)
}

export function overtakeDriverController(req:Request, res:Response) {

    //implement
    return ""
}