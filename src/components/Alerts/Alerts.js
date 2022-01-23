import React, { useEffect } from "react";
import { Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addAlertAction, removeAlertAction } from "../../store/actions/alerts/actions";

const Alerts = () => {

    const dispatch = useDispatch();
    
    const alerts = useSelector(({ alertsReducer }) => alertsReducer.alerts)

    const renderIconByAlertType = (type) => {
        switch (type) {
            case 'error': {
                return <i className="icofont-close-circled text-danger"></i>
            }
            case 'success': {
                return <i className="icofont-check-circled text-succsess"></i>
            }
            default: {
                return <i className="icofont-warning-alt text-info"></i>
            }
        }
    }

    useEffect(() => {
        dispatch(addAlertAction({
            type: 'success',
            variant: 'success',
            msg: 'Hello. It is an alert'
        }))
    }, [])

    return (
        <div className="container position-absolute w-50 ml-25">
            {alerts.map((alert) => 
                <Alert 
                    variant={alert.variant} 
                    onClose={() => dispatch(removeAlertAction({ uuid: alert.uuid}))}
                    key={alert.uuid}
                    dismissible>
                        {renderIconByAlertType(alert.type)}
                    <p>{alert.msg}</p>
                </Alert>)}
        </div>
    )
}

export default Alerts;