import { Row, Col, Button } from "react-bootstrap";
import { IDriver } from "../interfaces/component.interface"

interface IProps {
    index: number
    driver: IDriver
    overtake: (id:number) => void
}

export default function Driver(props:IProps) {

    const { id, code, firstname, lastname, country, team } = props.driver;


    return(
        <Row key={props.index} className="driver-container">
            <Col className="place" lg={1}>
                <p>{props.index + 1}</p>
            </Col>
            <Col lg={2}>
                <img className="driver-avatar" alt="driver" src={`${process.env.REACT_APP_API_URL}/${code}.png`}/>
            </Col>
            <Col lg={6} className="driver-details">
                <p>{firstname} {lastname}</p>
                <p>{country}</p>
                <p>{team}</p>
                <p></p>
                <p></p>
            </Col>
            <Col lg={3} className="interaction-container">
                <Button onClick={() => props.overtake(id)}>Overtake</Button>
            </Col>
        </Row>
    )
}