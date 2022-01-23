import React, { useState, useEffect } from "react";
import { Col, Button, Table } from 'react-bootstrap'
import styles from "./FirstStep.module.scss"
import { useSelector } from 'react-redux'

const FirstStep = () => {
    
    const networkElementsList = useSelector(({ networkElementsReducer }) => networkElementsReducer.networkElementsList)

    const [searchInputValue, setSearchInputValue] = useState('')

    const handleSearchInputChange = (e) => {
        setSearchInputValue(e.target.value)
    }

    useEffect(() => {
        console.log(networkElementsList)
    }, [networkElementsList])

    const tableHeaders = [{
        id: 0,
        title: "",
        field: "checkbox",
    }, {
        id: 1,
        title: "IP Address",
        field: "ip",
    }, {
        id: 2,
        title: "Type",
        field: "type",
    }, {
        id: 3,
        title: "DN",
        field: "dn",
    }]

    return (
        <Col sm={9} className={`${styles.container}`}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Search" 
                    value={searchInputValue} 
                    onChange={handleSearchInputChange} />
            </div>
            <Table responsive bordered>
                <thead>
                    <tr>
                        {tableHeaders.map(header => <th key={header.id}>{header.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {networkElementsList.map(el =>                     
                        <tr key={el.id}>
                            <td>chec</td>
                            <td>{el.ip}</td>
                            <td>{el.type}</td>
                            <td>{el.dn}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className="d-flex flex-row justify-content-end pt-3">
                <Button disabled variant="primary">Continue</Button>
            </div>
        </Col>
    )
}

export default FirstStep;