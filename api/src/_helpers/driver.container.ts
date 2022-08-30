import { IDriver } from "../interfaces/driver.interfaces";
import loadJson from "./load_json";

//Container class for store/get/update drivers
class DriverContainer {
    drivers: IDriver[];
   
    //base constructor to save drivers
    constructor(drivers: IDriver[]) {
        this.drivers = drivers;
    }
   
    //get all drivers
    getDrivers() {
        return drivers;
    }

    //modify drivers
    setDrivers(newDriversList: IDriver[] = []) {
        this.drivers = newDriversList
    }
}

//load drivers
let drivers= loadJson();
let driverContainer = new DriverContainer(drivers);
export default driverContainer