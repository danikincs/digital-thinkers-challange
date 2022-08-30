import { Response, Request } from "express"
import { IDriver } from "../interfaces/driver.interfaces";
import driverContainer from "../_helpers/driver.container";

/**
 * Get all the drivers
 * 
 * TODO: This controller is probably unnecessary for the current setup, but the architecture would be the same if we store drivers in DB.
 * 
 * @param req Express request
 * @param res Express response
 */
export function getDriversController(req:Request, res:Response) {

    let driversRes = driverContainer.getDrivers();
    res.status(200).send(driversRes)
}

/**
 * Modify drivers position
 * 
 * @param req Express request, param: id
 * @param res Express response
 * @returns 
 */
export function overtakeDriverController(req:Request, res:Response) {

    const driverId = parseInt(req.params.id);
    const currentDriverList = driverContainer.getDrivers();

    const currentIndex = currentDriverList.findIndex((driver:IDriver) => driver.id === driverId);
    const element = currentDriverList.find((driver:IDriver) => driver.id === driverId);

    //If element not found send back error
    if(!element) {
        res.status(404).send("Invalid driver id.")
        return;
    }

    if(currentIndex-1 >= 0) {

        //remove from index
        currentDriverList.splice(currentIndex, 1);
    
        let tempDrivers :IDriver[] = currentDriverList.splice(currentIndex-1, 0, element)

        driverContainer.setDrivers(tempDrivers);
    }

    //send back new driver list
    res.status(200).send(driverContainer.getDrivers());
}