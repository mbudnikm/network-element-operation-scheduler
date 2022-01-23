import React, { useState, useEffect } from "react";
import { Col, Button } from 'react-bootstrap'
import styles from "./FirstStep.module.scss"

const FirstStep = () => {

    const [searchInputValue, setSearchInputValue] = useState('')

    const handleSearchInputChange = (e) => {
        setSearchInputValue(e.target.value)
    }

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
            <table>
                    <th>hdhdud</th>
            </table>
            <div className="d-flex flex-row justify-content-end">
                <Button disabled variant="primary">Continue</Button>
            </div>
        </Col>
    )
}

export default FirstStep;