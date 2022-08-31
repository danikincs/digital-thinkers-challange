import React, { useEffect, useState } from "react";
import instance from "../api/api";
import { IDriver } from "../interfaces/component.interface";
import IPage from "../interfaces/page.interface";
import { toast } from 'react-toastify';
import Driver from "../components/driver.component";
import { Container } from "react-bootstrap";

const Home: React.FunctionComponent<IPage> = () => {

    const [ drivers, setDrivers ] = useState<IDriver[]>([]);

    useEffect(() => {
        getDrivers();
    }, []);

    //get all drivers
    async function getDrivers() {
        try {
            const driverResponse = await instance.get("/api/drivers");
            setDrivers(driverResponse.data);
        }
        catch(err:any) {
            toast.error("Failed to load drivers.")
        }
    }

    //overtake driver
    async function overtake(id:number) {
        try {
            const driverResponse = await instance.post(`/api/drivers/${id}/overtake`);
            setDrivers(driverResponse.data);

        }
        catch(err:any) {
            toast.error("Failed to overtake driver.")
        }
    }

    return (
        <div className="main-wrapper">
            <p className="title">F1 Race</p>
            <Container className="drivers-container">
                {drivers.map((driver:IDriver, index:number) => {
                    return(
                        <Driver key={index} index={index} driver={driver} overtake={overtake}/>
                    )
                })}
            </Container>
        </div>
    );
};

export default Home;
