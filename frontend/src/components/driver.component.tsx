import { IDriver } from "../interfaces/component.interface"

interface IProps {
    driver: IDriver
}

export default function Driver(props:IProps) {

    const { id, code, firstname, lastname, country, team } = props.driver;

    return(
        <div className="driver-container">

        </div>
    )
}