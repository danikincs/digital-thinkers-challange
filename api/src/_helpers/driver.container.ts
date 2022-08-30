import { IDriver } from "../interfaces/driver.interfaces";
import loadJson from "./load_json";

class DriverContainer {
    drivers: IDriver[];
   
    constructor(drivers: IDriver[]) {
        this.drivers = drivers;
    }
   
    getDrivers() {
        return drivers;
    }

    setDrivers(newDriversList: IDriver[] = []) {
        this.drivers = newDriversList
    }
}

//load drivers
let drivers= loadJson();
let driverContainer = new DriverContainer(drivers);
export default driverContainer