import React, { useState, useEffect } from "react";
import { Col, Button, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { filterData } from "../../common/helpers";
import { setNetworkElementsFilteredListAction } from "../../store/actions/networkElements/actions";
import { useHistory } from 'react-router-dom'

const FirstStep = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const networkElementsList = useSelector(({ networkElementsReducer }) => networkElementsReducer.networkElementsList)
    const networkElementsFilteredList = useSelector(({ networkElementsReducer }) => networkElementsReducer.networkElementsFilteredList)
    const selectedNetworkElements = useSelector(({ networkElementsReducer }) => networkElementsReducer.selectedNetworkElements)

    const [searchInputValue, setSearchInputValue] = useState('')

    const handleSearchInputChange = (e) => {
        setSearchInputValue(e.target.value)
    }

    const areElementsSelected = selectedNetworkElements.length > 0

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

    useEffect(() => {
        const filteredData = filterData(networkElementsList, searchInputValue)
        dispatch(setNetworkElementsFilteredListAction(filteredData))
    }, [searchInputValue])

    useEffect(() => {
        return () => {
            setSearchInputValue("")
        }
    }, [])

    return (
        <Col sm={9} className="customContainer">
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
                    {networkElementsFilteredList.map(el =>                     
                        <tr key={el.id}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                </div>
                            </td>
                            <td>{el.ip}</td>
                            <td>{el.type}</td>
                            <td>{el.dn}</td>
                        </tr>
                    )}
                    {networkElementsFilteredList.length === 0 && (
                        <tr className="text-center">
                            <td colSpan="4">
                                No data
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className="d-flex flex-row justify-content-end pt-3">
                <Button disabled={!areElementsSelected} variant="primary" onClick={() => history.push("/second-step")}>Continue</Button>
            </div>
        </Col>
    )
}

export default FirstStep;