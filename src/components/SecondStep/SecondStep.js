import React from "react";
import { Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SecondStep = () => {

    const history = useHistory()

    return (
        <Col sm={9} className="customContainer">
            <div className="d-flex flex-row justify-content-end pt-3">
                <Button disabled={true} variant="outline-primary" className="me-2">Cancel</Button>
                <Button variant="outline-primary" className="me-2" onClick={() => history.push("/first-step")}>Back</Button>
                <Button disabled={true} variant="primary" className="me-2" onClick={() => history.push("/third-step")}>Continue</Button>
            </div>
        </Col>
    )
}

export default SecondStep;