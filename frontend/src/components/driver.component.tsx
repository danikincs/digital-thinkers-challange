import { Row, Col, Button } from "react-bootstrap";
import { IDriver } from "../interfaces/component.interface"

interface IProps {
    index: number
    driver: IDriver
    overtake: (id:number) => void
}

//display driver details with rb grid
export default function Driver(props:IProps) {

    const { id, code, firstname, lastname, country, team } = props.driver;

    return(
        <Row className="driver-container">
            <Col className="place" lg={1}>
                <p>{props.index + 1}</p>
            </Col>
            <Col lg={2}>
                <img className="driver-avatar" alt="driver" src={`${process.env.REACT_APP_API_URL}/${code}.png`}/>
            </Col>
            <Col lg={6} className="driver-details">
                <p className="name">{firstname} {lastname}</p>
                <div className="country-details">
                    <p>{country}</p>
                    <img className="country" src={`https://countryflagsapi.com/png/${country}`} alt="flag"></img>
                </div>
                <p>{team}</p>
            </Col>
            <Col lg={3} className="interaction-container">
                <Button onClick={() => props.overtake(id)}>Overtake</Button>
            </Col>
        </Row>
    )
}